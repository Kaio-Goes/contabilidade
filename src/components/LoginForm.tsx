import { useEffect, useState } from 'react';

import Button from '../components/elements/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form'
import { useAuth } from '../hooks/useAuth';

interface LoginData {
    email: string
    password: string
}

const LoginForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { push } = useRouter();
    const { user, signIn } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = (data: LoginData) => {
        setIsLoading(true);
        setError(null);
        signIn(data).then((response: { error?: { message: string } }) => {
            setIsLoading(false);
            if (response?.error) {
                setError(response.error);
            } else {
                push('/servicos');
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {error?.message && (
                <div className="p-2 mb-4 text-center text-red-500 border border-red-600 border-dashed rounded">
                    <span>Dados incorretos</span>
                </div>
            )}
            <div className="rounded-md">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 text-gray-700"
                >
                    Endereço de e-mail
          </label>
                <div className="mt-1 rounded-md">
                    <input
                        id="email"
                        className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                        type="email"
                        name="email"
                        {...register('email', {
                            required: '',
                            pattern: {
                                value:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: '',
                            },
                        })}
                    />
                    {errors.email && (
                        <div className="mt-2 text-xs text-red-600">
                            {errors.email.message}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-4">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-5 text-gray-700"
                >
                    Senha
                </label>
                <div className="mt-1 rounded-md">
                    <input
                        id="password"
                        className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                        type="password"
                        name="password"
                        {...register('password', {
                            required: 'Preencha todos os campos',
                            minLength: {
                                value: 6,
                                message: '',
                            },
                        })}
                    />
                    {errors.password && (
                        <div className="mt-2 text-xs text-red-600">
                            {errors.password.message}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex items-end mt-4">
                <div className="text-sm leading-5">
                    <Link href="/reset-password">
                        <a
                            href="#"
                            className="font-medium transition duration-150 ease-in-out text-royal-blue-600 hover:text-royal-blue-500 focus:outline-none focus:underline"
                        >
                            Esqueceu de sua senha?
                    </a>
                    </Link>
                </div>
            </div>

            <div className="mt-4">
                <span className="block w-full rounded-md shadow-sm">
                    <Button cor="purple" title="Login" type="submit" isLoading={isLoading} />
                </span>
            </div>
        </form>
    );
};
export default LoginForm