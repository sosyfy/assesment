'use client'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { Fragment } from 'react'

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const handleClose = () => router.back()

  return (
    <Transition show={true} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={handleClose}>
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/70 transition-opacity' />
        </TransitionChild>

        <div className='z-50 fixed inset-0 w-screen overflow-y-auto'>
          <div className='flex justify-center items-end sm:items-center p-4 sm:p-0 min-h-full text-center'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <DialogPanel className='relative bg-white shadow-xl sm:my-8 border rounded-2xl sm:w-full sm:max-w-lg text-left transform transition-all overflow-hidden'>
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}