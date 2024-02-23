import React from 'react'
import Accordion  from '../Accordian';

export const faqDataSurat = [
    {
      question: 'What items are excluded by Porter Packers and Movers in Surat?',
      answer:
        'We help you move everything from 1 RK to 5 BHK and villas. However, Porter does not deliver item(s) which are illegal, dangerous or hazardous in nature or which are prohibited by any statue or law.'
    },
    {
      question: 'How safely do Porter Packers and Movers pack goods?',
      answer:
        'We help you move everything from 1 RK to 5 BHK and villas. However, Porter does not deliver item(s) which are illegal, dangerous or hazardous in nature or which are prohibited by any statue or law.',
    },
    {
      question: 'How much do packers and movers charge in Surat?',
      answer:
        'We help you move everything from 1 RK to 5 BHK and villas. However, Porter does not deliver item(s) which are illegal, dangerous or hazardous in nature or which are prohibited by any statue or law.',
    },
    {
      question: 'Why do the final charges vary from the estimates?',
      answer:
        'We help you move everything from 1 RK to 5 BHK and villas. However, Porter does not deliver item(s) which are illegal, dangerous or hazardous in nature or which are prohibited by any statue or law.',
    },
    {
      question: 'Do packers and movers dismantle and assemble furniture?',
      answer:
        'We help you move everything from 1 RK to 5 BHK and villas. However, Porter does not deliver item(s) which are illegal, dangerous or hazardous in nature or which are prohibited by any statue or law.',
    },
    {
      question: 'Are my goods insured?',
      answer:
        'We help you move everything from 1 RK to 5 BHK and villas. However, Porter does not deliver item(s) which are illegal, dangerous or hazardous in nature or which are prohibited by any statue or law.',
    },
    {
      question: 'What is the cheapest way to relocate?',
      answer:
        'We help you move everything from 1 RK to 5 BHK and villas. However, Porter does not deliver item(s) which are illegal, dangerous or hazardous in nature or which are prohibited by any statue or law.',
    },
    {
      question: 'Does Porter provide Intercity/interstate house shifting service?',
      answer:
        'We help you move everything from 1 RK to 5 BHK and villas. However, Porter does not deliver item(s) which are illegal, dangerous or hazardous in nature or which are prohibited by any statue or law.',
    },
    {
      question: 'Does Porter provide only labour or helper along with transport for house shifting?',
      answer:
        'We help you move everything from 1 RK to 5 BHK and villas. However, Porter does not deliver item(s) which are illegal, dangerous or hazardous in nature or which are prohibited by any statue or law.',
    },
    {
      question: 'Do packers and movers pack everything?',
      answer:
        'We help you move everything from 1 RK to 5 BHK and villas. However, Porter does not deliver item(s) which are illegal, dangerous or hazardous in nature or which are prohibited by any statue or law.',
    },
    {
      question: 'How much does packing a house cost?',
      answer:
        'We help you move everything from 1 RK to 5 BHK and villas. However, Porter does not deliver item(s) which are illegal, dangerous or hazardous in nature or which are prohibited by any statue or law.',
    },
    {
      question: 'Are there any additional or hidden charges?',
      answer:
        'We help you move everything from 1 RK to 5 BHK and villas. However, Porter does not deliver item(s) which are illegal, dangerous or hazardous in nature or which are prohibited by any statue or law.',
    },
    {
      question: 'Areas that are accessible in Surat?',
      answer:
        'We help you move everything from 1 RK to 5 BHK and villas. However, Porter does not deliver item(s) which are illegal, dangerous or hazardous in nature or which are prohibited by any statue or law.',
    },
    {
      question: 'Looking for packers and movers near you in Surat?',
      answer:
        'We help you move everything from 1 RK to 5 BHK and villas. However, Porter does not deliver item(s) which are illegal, dangerous or hazardous in nature or which are prohibited by any statue or law.',
    }
  ];

const Questions = () => {
  return (
    <div className='bg-primary flex items-center justify-center py-[7rem]'>

        <div className='md:w-[70%] w-[90%]'>
            <div className='mb-10 select-none'>
                <h1 className='text-3xl text-white'>Frequently Asked Questions</h1>
                <p className='text-md text-[#DBE3FF]'>In case you have more questions, feel free to reach out to us</p>
            </div>
            <div className='w-[100%] border-b-2 border-dotted h-[0.01rem]'></div>
        <Accordion data={faqDataSurat} />
        </div>

    </div>
  )
}

export default Questions