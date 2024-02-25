import { useState } from "react";
import { CheckOutPreviewModal, CheckoutModal2 } from "../Profile/comps";
// import { Modal } from "../../ui"
import ConfirmBookingModal from "./ConfirmBookingModal";
import PricingModal from "./PricingModal";
import SelectItemsModal from "./SelectItemsModal";
import SelectTrucks from "./SelectTrucks";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
// import { validateUser } from "../../utils/api"
const ModalsUI = ({
  SetSelectItemsModal,
  selectItemsModal,
  steps,
  setSteps,
  //   formData,
  //   userData,
}) => {
  const [data, setData] = useState({ form: {} });
  const [open, setOpen] = useState(false);
  const baseUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const selectedItem = useSelector((state) => state.itemListState);
  const user = useSelector((state) => state.userState);

  const convertDataToArray = (selectedItem) => {
    const result = [];

  
    for (const categoryKey in selectedItem) {
      const category = selectedItem[categoryKey];

      for (const subcategoryKey in category) {
        const subcategory = category[subcategoryKey];

        for (const item of subcategory.items) {
          if (item.count > 0) {
            const itemKey = `${subcategoryKey} ${item.item}`;
            result.push({ item: itemKey, count: item.count });
          }
        }
      }
    }
    return result;
  

    
};


  const sendUserDataToAPI = async (sendData) => {
    
    if (user.isAuthenticated) {
      try {
        const response = await axios.post(`${baseUrl}order/create`, sendData, {
          withCredentials: true,
        });

        const responseData = await response.data; // Access response data using response.data
        console.log({ responseData });

        // Handle the response data here if needed
      } catch (error) {
        console.error("Error:", error);
        // Handle the error here if needed
      }
    } else {
      navigate("/loginsignup"); // Navigate to login/signup page if user is not authenticated
    }

    // You might want to handle the response data here if needed
  };

  const handleSendOrderData = async (movingFrom, movingTo) => {
    const resultArray = convertDataToArray(selectedItem);
  
    const sendData = {
      form: {
        movingFrom,
        movingTo,
      },
      selectedItems: resultArray,
      truckDetails: {
        counts: {
          "Small Truck": data.truckDetails.selectedTruck["Small Truck"] || 0,
          "Pickup Truck": data.truckDetails.selectedTruck["Pickup Truck"] || 0,
          "Box Truck": data.truckDetails.selectedTruck["Box Truck"] || 0,
          "Flatbed truck Truck":
            data.truckDetails.selectedTruck["Flatbed Truck"] || 0,
        },
        // selectedTruck: {
        //   type: selectedTrucksString.selectedTrucksString,
        //   count: selectedTrucksString.totalTrucks,
        // },
      },
      pricingModal: data.pricingModal,
      bookingDetails: data.bookingDetails,
      totalAmount: data.totalAmount,
    };

    sendUserDataToAPI(sendData);
  };
  return (
    <div>
      {selectItemsModal && steps === 1 && (
        <SelectItemsModal
          open={selectItemsModal}
          setOpen={() => {
            SetSelectItemsModal(false);
          }}
          setSteps={setSteps}
          setData={setData}
        />
      )}
      {selectItemsModal && steps === 2 && (
        <SelectTrucks
          setSteps={setSteps}
          setOpen={() => {
            SetSelectItemsModal(false);
          }}
          onCloseClick={() => setSteps(1)}
          closeText={"Back"}
          setData={setData}
        />
      )}
      {selectItemsModal && steps === 3 && (
        <PricingModal
          setSteps={setSteps}
          setOpen={() => {
            SetSelectItemsModal(false);
          }}
          onCloseClick={() => setSteps(2)}
          closeText={"Back"}
          setData={setData}
          data={data}
        />
      )}
      {selectItemsModal && steps === 4 && (
        <ConfirmBookingModal
          setSteps={setSteps}
          setOpen={() => {
            SetSelectItemsModal(false);
          }}
          onCloseClick={() => setSteps(3)}
          closeText={"Back"}
          setData={setData}
          data={data}
        />
      )}
      {selectItemsModal && steps === 5 && (
        <CheckoutModal2
          setSteps={setSteps}
          setOpen={() => {
            SetSelectItemsModal(false);
          }}
          onCloseClick={() => setSteps(4)}
          closeText={"Back"}
          data={data}
        />
      )}
      {selectItemsModal && steps === 6 && (
        <CheckOutPreviewModal
          open={open}
          setSteps={setSteps}
          setOpen={() => {
            SetSelectItemsModal(false);
          }}
          onCloseClick={() => setSteps(5)}
          closeText={"Back"}
          sendOrderData={handleSendOrderData}
        />
      )}
    </div>
  );
};

export default ModalsUI;
