import Head from 'next/head'
import Link from 'next/link'
import LoginForm from '../components/LoginForm'

const LoginPage: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <div className="min-h-screen flex flex-col justify-center bg-gray-200">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="text-center mt-24">
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
                        {/* <p className="mt-2 text-center text-md text-gray-600">
                            {"Não tem uma conta?"}
                            <Link href="signup">
                                <a href="#" className="text-blue-500">
                                    Inscrever-se
                            </a>
                            </Link>
                        </p> */}
                    </div>
                    <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage