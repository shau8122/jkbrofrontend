import React, { useState } from 'react'
import CreditCard from './CreditCard'
import { Plus } from '@phosphor-icons/react'
import cardImageStrip from '/assets/cardStrip.png'
import { Link } from 'react-router-dom'

const upiWallets = [
  {
      name: "Paytm",
      link: "",
  },
  {
      name: "Phonepe",
      link: "",
  },
  {
      name: "GPay",
      link: "",
  },
  {
      name: "Amazon Pay",
      link: ""
  }
]

const Payment = () => {

  const [ addCard, setAddCard ] = useState(false)

  const toggleAddCard = () => {
    setAddCard(!addCard)
  }

  return (
    <div className='md:w-[100%] flex flex-col items-center'>

      <div className='md:w-[80%] w-[90%]'>
          <h1 className='font-playfair text-2xl text-textPrimary'>Payment</h1>
          <button className='style flex justify-center items-center gap-x-4 my-4' onClick={toggleAddCard}>
            <div className='w-[2rem]'>
              <div className="flex border-primary  rounded-lg border-2 p-1">
                  <Plus size={20} weight="bold" className='text-primary'/>
              </div>
            </div>
            <p className='uppercase text-sm text-primary'>Add New Card</p>
          </button>
          <img src={cardImageStrip}/>
          {
            addCard && <CreditCard/>
          }
      </div>

        <div className='border-b-2 border-outline mt-10 w-[100%]'/>
        
        <div className='mt-5 md:w-[80%] w-[90%]'>
            <h1 className='font-semibold'>Wallet</h1>
            <div className='border border-b-2 border-outline mt-5 border-dotted'/>
            {
              upiWallets.map((upi, index) => {
                return(
                  <div key={index} className='py-4 border-b-2 border-outline border-dotted'>
                    <Link to={upi.link} className='flex justify-between'>
                        {upi.name}
                        <h1 className='text-primary'>
                          Link Account
                        </h1>
                    </Link>
                  </div>
                )
              })
            }
        </div>

    </div>
  )
}

export default Payment