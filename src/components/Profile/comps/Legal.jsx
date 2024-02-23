import React from 'react'
import { faqDataSurat } from '../../LandingPage/Questions'
import  Accordian  from '../../Accordian'
import { Button } from '../../../ui'

export const legalData = [
  {
    question: 'Terms of use',
    answer:
      'We help you move everything from 1 RK to 5 BHK and villas. However, Porter does not deliver item(s) which are illegal, dangerous or hazardous in nature or which are prohibited by any statue or law.'
  },
  {
    question: 'Privacy policy',
    answer:
      'We help you move everything from 1 RK to 5 BHK and villas. However, Porter does not deliver item(s) which are illegal, dangerous or hazardous in nature or which are prohibited by any statue or law.',
  },
]

const Legal = () => {
  return (
    <div className='w-[100%]'>
      <h1 className='font-playfair text-2xl text-textPrimary'>Legal</h1>

      <Accordian data={legalData} invert variant="legal"/>
    </div>
  )
}

export default Legal