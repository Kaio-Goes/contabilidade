import Head from 'next/head'
import Servico from '../core/Servicos'
import Search from "../components/Search";
import Botao from '../components/Botao'
import { User } from "../components/Icones";
import Router from 'next/router';
import { useState } from 'react';
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
    const num = new ColecaoProcesso
    
    // function buscarNumProcesso(numero) {
    //     return num.searchNumProcesso(numero)
    // }

    return (
        <div className="min-h-screen flex flex-col justify-center bg-gray-200">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center mt-24">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Status do processo</h2>
                    <p className="mt-2 text-center text-md text-gray-600">
                        {"Pesquise seu número de processo fornecido pelo contador"}
                    </p>
                </div>
                <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <Search texto="Digite o número do processo" valor={search} valorMudou={setSearch} />
                    <br />
                    <div className="flex justify-center">
                        <Botao cor="purple">Pesquisar</Botao>
                    </div>
                    <TabelaSearch />
                </div>
            </div>
        </div>
    )
}

