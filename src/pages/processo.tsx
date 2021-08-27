import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import { Logout } from "../components/Icones"
import useClientes from "../hooks/useCliente";
import { Fragment, useContext, useEffect } from 'react'
import Head from 'next/head'
import { Disclosure, Menu, Transition } from '@headlessui/react'



export default function Processo() {
  
  const { formulario,
    formularios,
    selecionarFormulario,
    excluirFormulario,
    novoFormulario,
    salvarFormulario,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  // useEffect(() => {
  //   api.get('/users')
  // }, [])

  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    {/* Profile dropdown */}
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
                                <a
                                  href="#"
                                  className='block px-4 py-2 text-sm text-gray-700'
                                >
                                  Sign out
                                                                </a>
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
      <main className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white 
    `}>
        <Layout titulo="Criar Processo">
          {tabelaVisivel ? (
            <>
              <div className="flex justify-end">
                <Botao cor="green" className="mb-4" onClick={novoFormulario}>
                  Novo Processo
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
  )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const apiClient = getAPIClient(context)
//   const { ['nextauth.token']: token } = parseCookies(context)

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,

//       }
//     }
//   }

//   await apiClient.get('/users')

//   return {
//     props: {}
//   }
// }





