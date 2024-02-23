
import { Modal } from '../../../ui'
import visaLogo from '/assets/visa-logo.png'
import { MapPin, PencilSimple } from 'phosphor-react'
 
const CheckOutPreviewModal = ({ open, setOpen, setSteps, onCloseClick, closeText,sendOrderData }) => {

  return (
    <Modal 
      open={true} 
      setOpen={setOpen} 
      submitText={"Submit booking"} 
      closeText={closeText}
      size="lg" 
      title="Checkout Preview"
      onSubmitClick={() => {setSteps(7)
      sendOrderData();
    }
  }
      label={"Step 6 / 6"}
      >
        <div className='flex border-y-2 border-outline md:flex-row flex-col'>
          
          <div className='bg-[#F5F7FE] p-4 '>

              {/* Disclaimer */}
              <div className='md:w-[25rem] w-max ml-1'>
                <p className='text-xs'>Please confirm and submit your booking</p>
                <p className='text-xs text-gray-400'>By clicking submit booking, you agree to terms of use and privacy policy</p>
              </div>

              {/* Payment details */}
              <div className='bg-white border-2 border-outline rounded-2xl p-4 my-4 '>
                
                  <div className='flex justify-between'>
                    <h1>Payment</h1>
                    <button>
                      <PencilSimple size={20} className='text-primary' weight="bold" />
                    </button>
                  </div>

                  <img src={visaLogo} className='my-2'/>
                  <div className='flex justify-between lg:w-[40rem] min-w-[20rem]'>
                    <p className='text-sm text-gray-500'>****  ****  ****  6522</p>
                    <p className='text-sm text-gray-500'>05/27</p>
                  </div>

              </div>

              {/* Address Details */}
              <div className='bg-white border-2 border-outline rounded-2xl p-4 my-4 flex flex-col gap-y-8'>

                  <div className='flex justify-between'>
                    <h1>Location</h1>
                    <button>
                      <PencilSimple size={20} className='text-primary' weight="bold" />
                    </button>
                  </div>

                  <div className='flex gap-4'>
                      <MapPin size={24} className='text-gray-500'/>
                      <div>
                        <h1 className='text-xs font-semibold'>Moving from</h1>
                        <p className='text-xs text-gray-500'>
                            B-35 Naginawadi society, Sumul dairy road, katargam, Surat, Gujarat. 395004
                        </p>                    
                      </div>
                  </div>
                  <div className='flex gap-4'>
                      <MapPin size={24} className='text-gray-500'/>
                      <div>
                        <h1 className='text-xs font-semibold'>Moving from</h1>
                        <p className='text-xs text-gray-500'>
                            B-35 Naginawadi society, Sumul dairy road, katargam, Surat, Gujarat. 395004
                        </p>                    
                      </div>
                  </div>

              </div>

          </div>

          <div className='bg-primary p-[1rem] md:p-[1.5rem] md:max-w-[25rem] text-white '>
                <p className='text-sm mb-[1rem] border-b-2 border-opacity-50 border-outline border-dashed pb-[1rem]'>Order Summary</p>
                
                <div className='border-b-2 border-opacity-50 border-outline border-dashed pb-[1rem] flex justify-between'>
                    <div className=''>
                        <p className='text-xs pb-[0.5rem]'>Amount Quoted</p>
                        <p className='text-xs pb-[0.5rem]'>Shifting Date</p>
                        <p className='text-xs'>No. of items added</p>
                    </div>
                    <div className='text-right'>
                        <p className='text-xs font-bold pb-[0.5rem]'>₹ 2,698</p>
                        <p className='text-xs pb-[0.5rem]'>23/08/2023</p>
                        <p className='text-xs'>5</p>
                    </div>
                </div>

                <div className='border-b-2 border-opacity-50 border-outline md:min-w-[24rem] border-dashed py-[0.5rem] flex justify-between'>
                    <div className=''>
                        <p className='text-xs pb-[0.5rem] font-bold'>Vehicle</p>
                        <p className='text-xs pb-[0.5rem]'>Small truck</p>
                    </div>
                    <div className='text-right'>
                        <p className='text-xs font-bold pb-[0.5rem] text-primary'>-</p>
                        <p className='text-xs pb-[0.5rem]'>2</p>
                    </div>  
                </div>
                
                <div className=' border-dashed py-[0.5rem] flex justify-between'>
                    <div className=''>
                        <p className='text-xs pb-[0.5rem] font-bold'>Vehicle</p>
                        <p className='text-xs pb-[0.5rem]'>Booking amount of ₹500/- needed to be paid for order confirmation</p>
                    </div>
                    <div className='text-right'>
                        <p className='text-xs font-bold pb-[0.5rem]'>₹ 500</p>
                        <p className='text-xs pb-[0.5rem]'>-</p>
                    </div>
                </div>

          </div>
          
        </div>
    </Modal>
  )
}

export default CheckOutPreviewModal