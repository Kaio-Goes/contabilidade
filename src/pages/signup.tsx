import { GetServerSideProps } from 'next';
import Link from 'next/link'
import SignUpForm from '../components/SignUpForm'
import { getTeamName } from '../services/team';


const SignUpPage: React.FC = () => {
    return (
        <div className="min-h-screen flex bg-gray-200">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center mt-24">
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">Sign up</h2>
                    <p className="mt-2 text-center text-md text-gray-600">
                        Já tem uma conta?{' '}
                        <Link href="/login">
                            <a href="#" className="text-blue-500">Logar aqui</a>
                        </Link>
                    </p>
                </div>
                <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <SignUpForm />
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { teamId, email } = context.query;
    let teamName;

    if (!teamId) {
        return { props: {} };
    }

    if (teamId) {
        teamName = await getTeamName(teamId as string);
    }

    return {
        props: { teamId, teamName, email: email || '' },
    };
};

export default SignUpPage;