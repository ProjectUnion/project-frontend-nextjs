import { useRef } from 'react'
import Head from 'next/head'
import Link from "next/link"
import clsx from "clsx"
import { setCookie } from "nookies";
import { useRouter } from 'next/router'
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import styles from "../styles/Auth.module.scss"
import { Api } from '../utils/api';
//import { useAppDispatch } from '../redux/hooks';
//import { setUserData } from '../redux/slices/user';
import { LoginFormSchema } from "../utils/validate/authValidation";
import { IoMdArrowBack } from "react-icons/io"
import { Button } from '../components/UI/Button'
import { FormField } from '../components/UI/FormField'
import { Snackbar } from "../components/UI/Snackbar";


export default function Login() {
    //const dispatch = useAppDispatch();
    const snackbarRef = useRef(null);
    const router = useRouter()
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(LoginFormSchema)
    });

    async function loginUser(data) {
        try {
            const response = await Api().auth.login(data)
            setCookie(null, 'token', response.data.accessToken, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
            })
            //dispatch(setUserData(response.data));
            router.push("/");
        } catch (e) {
            if (e.response)
                snackbarRef.current.show(e.response.data.message, 'error');
        }
	}

    return (
        <div className={styles.auth}>
            <Head>
				<title>Вход</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <Link href="/">
                <a>
                    <IoMdArrowBack className={clsx(styles.back, 'fw-bold')} />
                </a>
            </Link>

            <FormProvider {... form}>
                <form onSubmit={form.handleSubmit(loginUser)} className={styles.form}>
                    <h2>Вход</h2>

                    <FormField name='email' placeholder='Почта' type='text' />
                    <FormField name='password' placeholder='Пароль' type='password' />

                    <Button 
                        disabled={!form.formState.isValid || form.formState.isSubmitting}
                        mode='fill' 
                        type='submit'
                    >
                        Войти
                    </Button>

                    <p className={styles.change}>Нет аккаунта? <span onClick={() => router.push('/register')}>Регистрация</span></p>
                </form>
            </FormProvider>

            <Snackbar ref={snackbarRef} />
        </div>
    );
}