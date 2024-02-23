import { useEffect, useState } from "react"
import { CheckOutPreviewModal, CheckoutModal2 } from "../Profile/comps"
import { Modal } from "../../ui"
import ConfirmBookingModal from "./ConfirmBookingModal"
import PricingModal from "./PricingModal"
import SelectItemsModal from "./SelectItemsModal"
import SelectTrucks from "./SelectTrucks"
import { validateUser } from "../../utils/api"
const baseUrl = "https://jkbros.onrender.com/";
const ModalsUI = ({ SetSelectItemsModal, selectItemsModal, steps, setSteps, formData, userData }) => {
    const [data, setData] = useState({ form: {} });
    const [open, setOpen] = useState(false);
  
    const getUserDetails = () => {
      const userDetailsString = localStorage.getItem('userDetails');
      const userDetails = JSON.parse(userDetailsString);
      return userDetails;
    };
  
    const userDetails = getUserDetails();
    
    if (userDetails) {
        //console.log('User Details:', userDetails);
        // Do something with userDetails
    } else {
        console.log('User details not found in local storage');
    }
    // // Function to fetch data (simulating an API call)
    // const fetchData = async () => {
    //   // Simulating an API call with a delay
    //   await new Promise(resolve => setTimeout(resolve, 1000));
  
    //   // Your actual data fetching logic goes here
    //   const fetchedData = { JKBrosData: data };
  
    //   // Store the fetched data in the browser's localStorage
    //   localStorage.setItem('cachedData', JSON.stringify(fetchedData));
  
    //   // Update the state with the fetched data
    //   setData(fetchedData);
    // };
  
    // useEffect(() => {
    //   // Check if data is already in the cache (localStorage)
    //   const cachedData = localStorage.getItem('cachedData');
  
    //   if (cachedData) {
    //     // If data is found in the cache, parse and set it in the state
    //     setData(JSON.parse(cachedData));
    //   } else {
    //     // If data is not found in the cache, fetch it
    //     fetchData();
    //   }
    // }, []);
//   console.log(`${baseUrl}api/v1/me/${userDetails.user._id}`);
//console.log(data);

const sendUserDataToAPI = async (userDetails, data) => {
    
      console.log(userDetails);
      console.log(data);

      
      const response = await fetch(`${baseUrl}api/v1/order/create/${userDetails.user._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.text();
      console.log({ responseData });
      // You might want to handle the response data here if needed

    
  };


    const handleSendOrderData = async () => {
        // Only call sendUserDataToAPI if userDetails is available
        if (userDetails) {
          await sendUserDataToAPI(userDetails, data);
        }
        console.log(data);
      };
  return (
    <div>
            {
                (selectItemsModal &&  steps === 1) && (
                    <SelectItemsModal 
                        open={selectItemsModal} 
                        setOpen={() => { SetSelectItemsModal(false) }}  
                        setSteps={setSteps}
                        setData={setData}
                        />
                )
            }
            {
                (selectItemsModal &&  steps === 2) && (
                    <SelectTrucks 
                        setSteps={setSteps}  
                        setOpen={() => { SetSelectItemsModal(false) }} 
                        onCloseClick={() => setSteps(1)}
                        closeText={"Back"}
                        setData={setData}
                    />
                )
            }
            {
                (selectItemsModal &&  steps === 3) && (
                    <PricingModal 
                        setSteps={setSteps}  
                        setOpen={() => { SetSelectItemsModal(false) }} 
                        onCloseClick={() => setSteps(2)}
                        closeText={"Back"}
                        setData={setData}
                        data={data}
                    />
                )
            }
            {
                (selectItemsModal &&  steps === 4) && (
                    <ConfirmBookingModal 
                        setSteps={setSteps}  
                        setOpen={() => { SetSelectItemsModal(false) }} 
                        onCloseClick={() => setSteps(3)}
                        closeText={"Back"}
                        setData={setData}
                        data={data}
                    />
                )
            }
            {
                (selectItemsModal &&  steps === 5) && (
                    <CheckoutModal2 
                        setSteps={setSteps}  
                        setOpen={() => { SetSelectItemsModal(false) }} 
                        onCloseClick={() => setSteps(4)}
                        closeText={"Back"}
                       
                    />
                )
            }
            {
                (selectItemsModal &&  steps === 6) && (
                    <CheckOutPreviewModal 
                        open={open} 
                        setSteps={setSteps}
                        setOpen={() => { SetSelectItemsModal(false) }}
                        onCloseClick={() => setSteps(5)}
                        closeText={"Back"}
                        sendOrderData={handleSendOrderData} 
                    />
                )
            }
            
    </div>
  )
}

export default ModalsUI