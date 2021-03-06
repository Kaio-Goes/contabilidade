import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import { Logout } from "../components/Icones"
import useServico from "../hooks/useServico";
import { Fragment } from 'react'
import Head from 'next/head'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useRequireAuth } from '../hooks/useRequireAuth'

export default function Servicos() {

  const { formulario,
    formularios,
    selecionarFormulario,
    excluirFormulario,
    novoFormulario,
    salvarFormulario,
    tabelaVisivel,
    exibirTabela
  } = useServico()

  const auth = useRequireAuth()

  return (
    <div>
      <Head>
        <title>Serviço</title>
      </Head>
      <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0 text-white">
                    Contabildade2.0
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <Menu as="div" className="ml-3 relative">
                      {({ open }) => (
                        <>
                          <div>
                            <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              {Logout}
                            </Menu.Button>
                          </div>
                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              static
                              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                              <Menu.Item>
                                <button
                                  onClick={() => auth.signOut()}
                                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 pairar: bg-indigo-500 foco: contorno-nenhum foco: border-indigo-700 foco: sombra-contorno-indigo ativo: bg-indigo-700 transição duração-150 facilidade-in-out "
                                >
                                  logout
                                </button>
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
      <div>
        <main className={`
      flex justify-center items-center h-screen
      bg-gray-300
      text-white 
    `}>
          <Layout titulo="Lista de serviços">
            {tabelaVisivel ? (
              <>
                <div className="flex justify-end">
                  <Botao cor="green" className="mb-4" onClick={novoFormulario}>
                    Novo Serviço
              </Botao>
                </div>
                <Tabela formulario={formularios} formularioSelecionado={selecionarFormulario}
                  formularioExcluido={excluirFormulario}
                />
              </>
            ) : (
                <Formulario
                  formulario={formulario}
                  formularioMudou={salvarFormulario}
                  cancelado={exibirTabela}
                />
              )}

          </Layout>

        </main>
      </div>
    </div>
    </div>
  )
}
