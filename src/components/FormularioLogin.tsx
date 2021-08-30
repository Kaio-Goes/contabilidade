
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form'
// import { useAuth } from '../hooks/useAuth';

interface LoginData {
    email: string
    password: string
}

const LoginForm: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const auth = useAuth();
    const router = useRouter();

    const onSubmit = (data: LoginData) => {
        console.log(data);

        // return auth.signIn(data).then(() => {
        //     router.push('/processo')
        // })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-md">
                <label htmlFor="email"
                    className="block text-sm font-medium leading-5 text-gray-700">
                    Endereço de e-mail
                    </label>
                    <input id="email"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        type="email"
                        name="email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && (
                        <div className="mt-2 text-xs text-red-600">
                            {errors.email.message}
                        </div>
                    )}
            </div>
            <div className="mt-4">
                <label htmlFor="password"
                    className="block text-sm font-medium leading-5 text-gray-700">
                    Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                    <input id="password"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        type="password"
                        name="password"
                        {...register("password", { minLength: { value: 6, message: "Deve ter pelo menos 6 caracteres" } })}
                    />
                    {errors.password && (
                        <div className="mt-2 text-xs text-red-600">
                            {errors.password.message}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-4">
                <span className="block w-full rounded-md shadow-sm">
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                        Login
                    </button>
                </span>
            </div>
        </form>
    )
}

export default LoginForm