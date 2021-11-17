import Head from 'next/head'
import Botao from "../components/Botao";
import { User } from "../components/Icones";
import Router from 'next/router';


export default function Home() {

  //const { exibirTabela, tabelaVisivel,exibirFormulario } = useTabelaOuForm()

  return (
    <div>
      <Head>
        <title>MenuPrincipal</title>
      </Head>
      <div className="min-h-screen bg-gray-300 flex items-center justify-center">
        <div className="bg-white p-4 rounded-md">
          <div className="flex justify-center items-center">
            {User}
          </div>
          <div className="mt-8 h-32 w-full space-y-3">
            <h1 className="text-center text-lg text-purple-800">Cliente</h1>
            <div className="w-full h-6 bg-gray-200 rounded-full animate-pulse">
              <p className="text-center text-sm text-purple-800">Entre aqui se você for cliente</p>
            </div>
            <div className="w-full h-6 bg-gray-200 rounded-full animate-pulse">
              <p className="text-center text-sm text-purple-800">Pesquise o número de seu serviço</p>
            </div>
          </div>
          <Botao className="w-60 bg-purple" cor="purple" onClick={() => Router.push('/search')}>Entrar</Botao>
        </div>

        <div className="p-6"></div>

        <div className="bg-white p-4 rounded-md">
          <div className="flex justify-center items-center">
            {User}
          </div>
          <div className="mt-8 h-32 w-full space-y-3">
            <h1 className="text-center text-lg text-purple-800">Contador</h1>
            <div className="w-full h-6 bg-gray-200 rounded-full animate-pulse">
              <p className="text-center text-sm text-purple-800">Entre aqui se você for contador</p>
            </div>
            <div className="w-full h-6 bg-gray-200 rounded-full animate-pulse">
              <p className="text-center text-sm text-purple-800">Administre seus serviços</p>
            </div>
          </div>
          <Botao className="w-60 bg-purple" cor="purple" onClick={() => Router.push('/login')}>Login</Botao>
        </div>

      </div>
    </div>


  )
}

