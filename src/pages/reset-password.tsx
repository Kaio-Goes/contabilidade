import Link from 'next/link';
import ResetPasswordForm from '../components/ResetPasswordForm';

const ResetPasswordPage: React.FC = () => {
    return (
            <div className="flex min-h-screen bg-gray-50">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="mt-24 text-center">
                        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                            Reset de senha
                        </h2>
                        <p className="mt-2 text-center text-gray-600 text-md">
                            {"Não esqueceu? "}
                            <Link href="/login">
                                <a href="" className="text-indigo-500">
                                    Login
                                </a>
                            </Link>
                        </p>
                    </div>
                    <div className="px-4 py-8 mt-8 bg-white shadow-lg sm:rounded-lg sm:px-10">
                        <ResetPasswordForm />
                    </div>
                </div>
            </div>
    );
};

export default ResetPasswordPage;
