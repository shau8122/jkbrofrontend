import React from 'react'
import footerLogo from "/assets/footerJK-bro.png"
import googlePlay from "/assets/googleplay.png"
import appStore from "/assets/appstore.png"
import { Link } from 'react-router-dom'

const footerLinksTop = [
    {
        title: "Company",
        links: [
            "About",
            "offers",
            "Careers",
            "Blog"
        ]
    },
    {
        title: "Services",
        links: [
            "City Tempo",
            "For Enterprise",
            "Packers & Movers",
        ]
    },
    {
        title: "Support",
        links: [
            "Contact Us",
            "Privacy Policy",
            "Terms of service",
            "Driver Partner Terms & conditions"
        ]
    }

]

const footerLinkBottom = [
    [
        "Bangalore",
        "Pune"
    ],
    [
        "Hyderabad",
        "Chennai"
    ],
    [
        "Ahmedabad",
        "Noida",
    ],
    [
        "Mumbai",
        "Chandigarh"
    ],
    [
        "Kolkata",
        "Bhuwaneshwar"
    ]
]

const Footer = () => {
  return (
    <div className='footer bg-black md:py-[3rem] flex justify-center pt-[3rem] pb-[10rem]'>
        <div className='footer-content w-[70svw] flex flex-col gap-y-5'>
            {/* footer top */}
            <div className='flex justify-center md:items-center 
                    md:justify-evenly flex-wrap 
                    gap-y-10 md:gap-y-20 flex-col md:flex-row '>

                <div className='min-w-[10rem] max-w-[10rem] flex flex-col gap-y-2'>
                    <img src={footerLogo} alt="JK Bros Logo" className='w-[8rem]'/>
                    <img src={googlePlay} alt="google Play" className='w-[8rem]'/>
                    <img src={appStore} alt="app store" className='w-[8rem]'/>
                </div>

                <div className='md:mt-4 min-w-[10rem] max-w-[10rem] leading-7 text-gray-400'>
                    <p>Send Anything,</p>
                    <p>anywhere,</p>
                    <p>anytime.</p>
                </div>
                
                {footerLinksTop.map((group, index) => (
                    <div className='min-w-[10rem] max-w-[10rem]' key={index}>
                    <h1 className='text-white'>{group.title}</h1>
                    <ul>
                        {group.links.map((link, index) => (
                            <li key={index} className='list-none text-gray-400'>
                                <Link>{link}</Link>    
                            </li>
                        ))}
                    </ul>
                    </div>
                ))}

            </div>

            <div className='flex md:justify-evenly md:items-center 
                        flex-wrap flex-col md:flex-row relative'
                        >
                <div className='min-w-[10rem] max-w-[10rem]'>
                    <h1 className='text-white'>Company</h1>
                </div>   
                        {/* This is 4 are empty divs temp hack for company word alignment */}
                        <div className='min-w-[10rem] max-w-[10rem] md:block hidden'>
                            <h1 className='text-white'></h1>
                        </div>            
                        <div className='min-w-[10rem] max-w-[10rem] md:block hidden'>
                            <h1 className='text-white'></h1>
                        </div>            
                        <div className='min-w-[10rem] max-w-[10rem] md:block hidden'>
                            <h1 className='text-white'></h1>
                        </div>            
                        <div className='min-w-[10rem] max-w-[10rem] md:block hidden'>
                            <h1 className='text-white'></h1>
                        </div>     

            </div>
            {/* footer bottom  */}
            <div className='flex md:justify-evenly md:items-center 
                        flex-wrap md:gap-y-20 
                        gap-y-10 flex-col md:flex-row relative'
                        >
                    {footerLinkBottom.map((group, index) => (
                        <div key={index}>
                            {group.map((link, index) => (
                                <ul key={index} className='min-w-[10rem] max-w-[10rem]'>
                                    <li className='list-none text-gray-400'>
                                        <Link>{link}</Link>    
                                    </li>
                                </ul>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Footer