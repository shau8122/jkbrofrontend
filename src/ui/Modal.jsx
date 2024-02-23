import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button from './Button'
import { ArrowLeft } from 'phosphor-react';

const Modal = ({ open, setOpen, children, submitText, closeText, title, onCloseClick, onSubmitClick, label }) => {
  
    return (
        <>
            <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>
    
                <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center py-4 text-center">
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
                        className={`w-full max-w-max transform overflow-hidden rounded-2xl bg-white py-6 text-left align-middle shadow-xl transition-all`}>
                        <Dialog.Title
                            as="h3"
                            className={"flex gap-2 pl-4 pb-4 items-center justify-between"}
                            >
                                <div className='flex gap-2'>

                            <ArrowLeft size={24} weight='bold'/>
                            <h3 className="text-md font-playfair font-medium leading-6 text-textPrimary ">
                                {title}
                            </h3>
                                </div>
                            
                            <p className='text-sm text-gray-400 mr-4'>{label}</p>
                        </Dialog.Title>
                        {children}
    
                        <div className="mt-4 flex justify-end">
                            <div className='flex w-[20rem] gap-4 px-4'>
                                {closeText &&(
                                    <Button
                                    variant={"secondary"}
                                    onClick={onCloseClick ? onCloseClick : () => setOpen(false)} 
                                    >
                                        {closeText}
                                    </Button>
                                )}
                                {submitText &&(
                                    <Button onClick={onSubmitClick ? onSubmitClick : () => setOpen(false)} >
                                        {submitText}
                                    </Button>
                                )}
                            </div>
                        </div>
                    </Dialog.Panel>
                    </Transition.Child>
                </div>
                </div>
            </Dialog>
        </Transition>
      </>
    );
  };
  

export default Modal;