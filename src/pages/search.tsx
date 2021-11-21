import Head from 'next/head'
import Servico from '../core/Servicos'
import Search from "../components/Search";
import Botao from '../components/Botao'
import { useState } from 'react';
import { db } from '../backend/config';

interface SearchNumProcesso {
    buscar: Servico
    buscarProcesso?: (cliente: Servico) => void
}

export default function SearchNum(props: SearchNumProcesso) {

    const [search, setSearch] = useState('')

    let [bira, setBira] = useState({})

    const alo = function (numero) {
        if (search.length === 0){
            return window.alert("Preencha todos os campos")
        }
        
        const query = db.collection("Servicos").where('Numero_Servico', "==", numero).get()
            .then((querySnapshot) => {
                
                querySnapshot.forEach((doc) => {
                    setBira(doc.data())
                })
            })
            
            const props = Object.keys(bira)
            for (let i = 0; i < props.length; i++){
                delete bira[props[i]]
            }

            console.log(bira)

        }

    return (
        <div>
            <Head>
                <title>Pesquisar Serviço</title>
            </Head>
            <div className="min-h-screen flex flex-col justify-center bg-gray-200">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center mt-24">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Status do Serviço</h2>
                    <p className="mt-2 text-center text-md text-gray-600">
                        {"Pesquise seu número de serviço fornecido pelo contador"}
                    </p>
                </div>
                <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <Search texto="Digite o número do Serviço" valor={search} valorMudou={setSearch} />
                    <br />
                    <div className="flex justify-center">
                        <Botao cor="purple" onClick={() => alo(search)}>Pesquise</Botao>
                    </div>
                    <br />
                    <div>
                        
                        {Object.keys(bira).map((key, i) => (
                            <table className="w-full rounded-xl overflow-hidden" key={i} >
                                <thead className={`
                text-gray-100   
                bg-gradient-to-r from bg-purple-500 to-purple-800
            `}>
                                    <tr>
                                        <th className="font">{key.replace('_', ' do ').replace('ico', 'iço')
                                            .replace('Nu', 'Nú').replace('cao', 'ção')}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>{bira[key]}</th>
                                    </tr>
                                </tbody>
                            </table>
                        ))}
                    </div>
                </div>

                <br />
            </div>
        </div>
        </div>
        
    )
}
