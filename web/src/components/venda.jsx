"use client";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

export default function Venda(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [usuarios, setusuarios] = useState([]);

  const patchAlocacao = async (id, quant) => {
    await fetch(`http://localhost:5000/alocacao/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantidade: (quant - 1) }),
      }
    )
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log('Ocorreu um erro:', error)
    })
    alert('Operação realizada com sucesso!')
    setIsOpen(false)
  }

  const fetchUsuarios = async () => {
    try {
      const response = await fetch(`http://localhost:5000/clientes`);
      const jsonData = await response.json();
      return jsonData;
    } catch(error) {
      console.log('Error: ', error)
    }
  }

  const openModal = async () => {
    setIsOpen(true);
    let usuarios = await fetchUsuarios();
    setusuarios(usuarios);
    console.log(props.id)
  }

  const closeModal = () => {
    setIsOpen(false);
    setusuarios([]);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className='absolute right-0 bg-[#7814FF] text-white p-1 w-28 rounded-md'
      >
        Vender
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
                        className="text-xl text-gray-900 mb-5"
                    >
                      <strong>Modelo: </strong>{props.automovel.modelo}
                    </Dialog.Title>
                    
                    <label htmlFor="">Cliente: </label>
                    <select name="" id="" className='w-full border border-black rounded-md p-1 mb-5'>
                        {
                            usuarios.map((usuario, i) => (
                                <option value="" key={i}>{usuario.nome}</option>
                            ))
                        }
                    </select>
                    <label htmlFor="" className=''>Concessionaria: </label>
                    <select name="" id="" className='w-full border border-black rounded-md p-2'>
                        {
                            props.concessionarias.map((concessionaria, i) => (
                                <option value="" key={i}>{concessionaria.concessionaria}</option>
                            ))
                        }
                    </select>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="mt-5 w-full bg-[#9a4cff] p-2 rounded-lg text-white border border-white hover:border-[#7814FF] hover:bg-[#aa6aff] duration-500"
                      onClick={() => (patchAlocacao(props.id, props.quantidade))}
                    >
                      Confirmar
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