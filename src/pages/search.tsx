import Head from 'next/head'
import Servico from '../core/Servicos'
import Search from "../components/Search";
import Botao from '../components/Botao'
import { User } from "../components/Icones";
import Router from 'next/router';
import { useEffect, useState } from 'react';
import TabelaSearch from '../components/TabelaSearch'
import useProcesso from '../hooks/useProcesso'
import ProcessoRepositorio from '../core/ProcessoRepositorio';
import ColecaoProcesso from '../backend/db/ColecaoProcesso';
import { db } from '../backend/config';

interface SearchNumProcesso {
    buscar: Servico
    buscarProcesso?: (cliente: Servico) => void
}

export default function SearchNum(props: SearchNumProcesso) {

    const [search, setSearch] = useState()
    // const num = new ColecaoProcesso

    const { formularios, selecionarFormulario, salvarFormulario, exibirTabela } = useProcesso()

    let [bira, setBira] = useState({})

    const alo = function (numero: Servico) {
        console.log(numero)
        const query = db.collection("Servicos").where('Numero_Servico', "==", numero).get()
            .then((querySnapshot) => {
                // let user


                querySnapshot.forEach((doc) => {
                    console.log(doc.id, '=>', doc.data(), '=>', numero)
                    setBira(doc.data())

                    // (user = doc.data())
                    // return user;
                })
            })
        return query
    }

    // async searchNumProcesso(formulario: number): Promise<any> {
    //     const query = await db.collection("Servicos").where('Numero_Servico', "!=", formulario).get()
    //         .then((querySnapshot) => {
    //             querySnapshot.forEach((doc) => {
    //                 console.log(doc.id, '=>', doc.data())
    //             })
    //         })
    //     return (
    //         console.log(query, formulario)
    //     )
    // }

    return (
        <div className="min-h-screen flex flex-col justify-center bg-gray-200">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center mt-24">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Status do serviço</h2>
                    <p className="mt-2 text-center text-md text-gray-600">
                        {"Pesquise seu número de processo fornecido pelo contador"}
                    </p>
                </div>
                <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <Search texto="Digite o número do Serviço" valor={search} valorMudou={setSearch} />
                    <br />
                    <div className="flex justify-center">
                        <Botao cor="purple" onClick={() => alo(search)}>Pesquisar</Botao>
                    </div>
                    {/* <pre>{(JSON.stringify(bira, null, 1))}</pre> */}
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
    )
}