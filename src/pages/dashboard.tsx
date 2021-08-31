import { useAuth } from '../hooks/useAuth';
import Router from 'next/router';
import Botao from '../components/Botao'
import Head from 'next/head';
const DashBoardPage: React.FC = () => {
    const auth = useAuth();
    if (!auth.user) return null;
    return (
        <div>
            <Head>
                <title>Bem-vindo</title>
            </Head>
            <div className="min-h-screen flex bg-gray-200">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="text-center mt-24">
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            {`Bem-vindo contador ${auth.user.name}!`}
                        </h2>
                        <p className="mt-2 text-center text-md text-gray-600">
                            {`Esse é seu e-mail para logar no sistema ${auth.user.email}`}
                        </p>
                        <br />
                        <Botao cor="purple" onClick={() => Router.push('/login')}>Fazer login</Botao>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DashBoardPage;