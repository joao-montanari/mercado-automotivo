"use client";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Modal(props) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className='w-full h-full'
      >
        {props.numero}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
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
                  style={{borderLeft: `6px solid ${props.cor}`}}
                  className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                    <Dialog.Title
                        as="h1"
                        className="text-xl text-gray-900"
                    >
                      <strong>Área: </strong>{props.numero}
                    </Dialog.Title>
                    <div>
                    </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="w-full bg-blue-300 p-2 rounded-lg text-blue-900 border border-white hover:border-blue-900 hover:bg-blue-100 duration-500"
                      onClick={() => setIsOpen(false)}
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