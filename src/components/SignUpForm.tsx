import { auth, db } from '../backend/config'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../components/elements/Button';
import { useAuth } from '../hooks/useAuth';


interface SignUpData {
    name: string
    email: string
    password: string
}

interface Props {
    email?: string;
}

const SignUpForm = ({  email }: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email,
            password: '',
        },
    });

    const { push } = useRouter();
    //   const { addToast } = useToast();
    const { user, signUp } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = (data: SignUpData): void => {
        setIsLoading(true);
        setError(null);
        signUp(data ).then((response: { error?: { message: string } }) => {
            setIsLoading(false);
            if (response?.error) {
                setError(response.error);
            } else {
                push(`/dashboard`);
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {error?.message && (
                <div className="p-2 mb-4 text-center text-red-500 border border-red-600 border-dashed rounded">
                    <span>{error.message}</span>
                </div>
            )}
            <div className="rounded-md">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-5 text-gray-700"
                >
                    Name
          </label>
                <input
                    id="name"
                    className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                    type="text"
                    name="name"
                    {...register('name', {
                        required: 'Por favor digite seu nome',
                        minLength: {
                            value: 3,
                            message: '?? permitido no m??nimo 3 caracteres',
                        },
                    })}
                />
                {errors.name && (
                    <p className="mt-2 text-xs text-red-600">{errors.name.message}</p>
                )}
            </div>
            <div className="mt-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 text-gray-700"
                >
                    Endere??o de e-mail
          </label>
                <div className="mt-1 rounded-md">
                    <input
                        id="email"
                        className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm ${!!email && 'cursor-not-allowed'
                            }`}
                        type="email"
                        name="email"
                        {...register('email', {
                            required: 'Por favor digite seu e-mail',
                            pattern: {
                                value:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'E-mail n??o ?? valido',
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
                    Password
          </label>
                <div className="mt-1 rounded-md">
                    <input
                        id="password"
                        className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                        type="password"
                        name="password"
                        {...register('password', {
                            required: 'Por favor digite sua senha',
                            minLength: {
                                value: 6,
                                message: '?? permitido no m??nimo 6 caracteres',
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

            <div className="mt-4">
                <span className="block w-full rounded-md shadow-sm">
                <Button cor="purple" title="Inscrever-se" type="submit" isLoading={isLoading} />
                </span>
            </div>
        </form>
    );
};

export default SignUpForm