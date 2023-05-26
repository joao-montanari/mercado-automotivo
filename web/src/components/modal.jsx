"use client";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import Venda from './venda';

export default function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [alocacoes, setAlocacoes] = useState([]);
  let copyAlocacoes = [];

  const fetchVeiculo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/automoveis/${id}`);
      const jsonData = await response.json();
      return jsonData;
    } catch(error) {
      console.log('Error: ', error)
    }
  }

  const fetchConcessionaria = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/concessionarias/${id}`);
      const jsonData = await response.json();
      return jsonData;
    } catch(error) {
      console.log('Error: ', error)
    }
  }

  const openModal = async () => {
    setIsOpen(true);
    for (let i = 0; i < props.dados.length; i++) {
      var item = props.dados[i]
      if (item.area === props.area) {
        let veiculo = await fetchVeiculo(item.automovel.id);
        let concessionaria = await fetchConcessionaria(item.concessionaria.id);
        copyAlocacoes.push(
          {
            alocacao : item.id,
            automovel : veiculo,
            concessionaria : concessionaria,
            quantidade : item.quantidade
          }
        )
      }
    }
    setAlocacoes(copyAlocacoes);
    console.log(copyAlocacoes)
  }

  const closeModal = () => {
    setIsOpen(false);
    setAlocacoes([])
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className='w-full h-full hover:bg-[#0000FF] hover:text-white duration-300'
      >
        {props.area}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel 
                  className="w-full max-w-xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                    <Dialog.Title
                        as="h1"
                        className="text-xl text-gray-900"
                    >
                      <strong>Área: </strong>{props.area}
                    </Dialog.Title>
                    {
                      (alocacoes.length > 0)?
                        alocacoes.map((alocacao, i) => (
                          <div className='flex my-4 relative' key={i}>
                            <h1 className='text-[#7814FF] p-1' >Modelo: {alocacao.automovel.modelo} | Preço: R$ {alocacao.automovel.preco}</h1>
                            <Venda
                              id={alocacao.alocacao}
                              concessionarias={[alocacao.concessionaria]}
                              automovel={alocacao.automovel}
                              quantidade={alocacao.quantidade}
                            />
                          </div>
                        ))
                      :
                        <h1 className='text-red-400 text-center my-5'>
                          Não existem veiculos disponiveis nessa área
                        </h1>
                    }
                  <div className="mt-4">
                    <button
                      type="button"
                      className="w-full bg-red-300 p-2 rounded-lg text-red-900 border border-white hover:border-red-900 hover:bg-red-100 duration-500"
                      onClick={closeModal}
                    >
                      Fechar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}