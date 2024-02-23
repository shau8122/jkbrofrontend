import { useSelector } from 'react-redux';
import { Button } from '../../../ui'
import { useState,useEffect} from 'react';
import axios from 'axios';


const PastOrders = () => {
  // const baseUrl = "https://jkbros.onrender.com/";
  const baseUrl = "http://localhost:8000/"
  const user = useSelector(state=>state.userState.user);
  const [orders, setOrders] = useState([]);
  // const getUserDetails = () => {
  //   const userDetailsString = localStorage.getItem('userDetails');
  //   const userDetails = JSON.parse(userDetailsString);
  //   return userDetails;
  // };

  // const userDetails = getUserDetails();
  
  // if (userDetails) {
  //     //console.log('User Details:', userDetails);
  //     // Do something with userDetails
  // } else {
  //     console.log('User details not found in local storage');
  // }

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        console.log("id",user._id)
        const response = await axios.get(`${baseUrl}api/v1/orders/${user._id}`);
        console.log(response.data.orders)
        setOrders(response.data.orders); // Assuming the API response has an 'orders' property
      } catch (error) {
        console.error('Error fetching orders:', error.message);
      }
    };
  
    fetchOrders();
  }, []);
  

  return (
    <div className='md:w-[100%]'>
      <h1 className='font-playfair text-2xl text-textPrimary'>Orders</h1>

      <div className='mt-5 flex flex-col gap-y-10 md:h-[100svh] md:overflow-y-scroll pr-[2rem] scrollbar-style'>
      { orders.map((order) => (
        order._id && (
        
        <div key={order._id} className='border-2 p-4 border-outline rounded-3xl bg-secondary'>
        
          <div className='border-b-2 border-outline border-dashed my-2 pb-2 flex flex-col gap-2 '>
              <div className='flex text-xs justify-between'>
                <p >Move From</p>
                <p className='text-gray-400'>
                
                {order.form.movingFrom}
                
                </p>
              </div>
              <div className='flex text-xs justify-between'>
                <p >Move To</p>
                <p className='text-gray-400'>{order.form.movingTo}</p>
              </div>
          </div>

          <div className='border-b-2 border-outline border-dashed my-2 pb-2 flex flex-col gap-2 '>
              <div className='flex text-xs justify-between'>
                <p >Amount Quoted</p>
                <p className='font-semibold'>{order.totalAmount}</p>
              </div>
              <div className='flex text-xs justify-between'>
                <p >Shifting Date</p>
                <p >{order.bookingDetails.selectedDate}</p>
              </div>
              <div className='flex text-xs justify-between'>
                <p >No. of items added</p>
                {/* <p>{Object.values(order.selectedItems).reduce((total, item) => total + item.count, 0)}</p> */}
              </div>
          </div>
          <p className='text-xs'>Driver Details</p>

          <div className='gap-4 my-[1rem] flex justify-between'>
            <div className='flex gap-[1rem]'>

              <div className='h-[2.5rem] w-[2.5rem] bg-gray-400 rounded-xl'>
                {/* Profile Image */}
              </div> 

              <div>
                <h1 className='text-sm text-gray-400'>Dhruvil Jogiwala</h1>
                <p className='text-sm text-gray-400'>+91 99999 99999</p>
              </div>

            </div>
          </div>
          
          <div className='flex items-center justify-end gap-x-2'>
              <div className='min-w-[5rem] h-[2.5rem]'>
                <Button variant='secondary' className='bg-primary p-2 px-4 rounded-3xl text-primary'>
                    Rate Service
                </Button>
              </div>
              <div className='min-w-[5rem] h-[2.5rem]'>
                <Button variant='secondary' className='bg-primary p-2 px-4 rounded-3xl text-primary'>
                    Rate Driver
                </Button>
              </div>
          </div>


          </div>
          )  ))}
        

      </div>
      
    </div>
  )
}

export default PastOrders