import { useState } from "react";
import SelectCityDropdown from "../SelectCityDropdown";
import twoWheeler from "/assets/two-wheeler.png";
import trucks from "/assets/trucks.png";
import packersMovers from "/assets/packers-movers.png";
import intercity from "/assets/intercity.png";
import LocationInput from "../../ui/LocationInput";
import ModalsUI from "./ModalsUI";

const CTASectionCards = [
  {
    id: 1,
    title: "Two Wheeler ",
    imgUrl: twoWheeler,
  },
  {
    id: 2,
    title: "Trucks",
    imgUrl: trucks,
  },
  {
    id: 3,
    title: "Packers & Movers",
    imgUrl: packersMovers,
  },
  {
    id: 4,
    title: "Storage Spaces",
    imgUrl: intercity,
  },
];

const CTASection = () => {
  const [hasErrors, setHasErrors] = useState(false);
  const [selectItemsModal, SetSelectItemsModal] = useState(true);
  const [steps, setSteps] = useState(1);
  const [formData, setFormData] = useState({
    // name: '',
    // phoneNumber: '',
    movingFrom: "",
    movingFromHasLift: false,
    movingFromFloor: "",
    movingTo: "",
    movingToHasLift: false,
    // movingToFloor: '',
    movingOn: "",
  });

  const [formErrors, setFormErrors] = useState({
    // name: '',
    // phoneNumber: '',
    movingFrom: "",
    movingFromHasLift: false,
    movingFromFloor: "",
    movingTo: "",
    movingToHasLift: false,
    // movingToFloor: '',
    movingOn: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Validation on change only if there are errors present
    if (formErrors[name]) {
      let error = "";
      switch (name) {
        case "name":
          error = value.length < 3 ? "Name must be at least 3 characters" : "";
          break;

        case "phoneNumber":
          error =
            value.length < 10 ? "Phone number must be at least 10 digits" : "";
          break;

        case "movingFrom":
          break;
        case "movingTo":
          error =
            value.length < 3 ? "Location must be at least 3 characters" : "";
          break;

        default:
          break;
      }

      setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
      const hasErrors = Object.keys(formErrors).length > 0;
      setHasErrors(hasErrors);
    }
  };

  const isValidDate = (dateString) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateString);
  };

  const validateForm = () => {
    const errors = {};
    // if (formData.name.length < 3) {
    //     errors.name = 'Name must be at least 3 characters';
    // }
    // if (formData.phoneNumber.length < 10) {
    //     errors.phoneNumber = 'Phone number must be at least 10 digits';
    // }
    if (formData.movingFrom.length < 3) {
      errors.movingFrom = "Location must be at least 3 characters";
    }
    if (formData.movingTo.length < 3) {
      errors.movingTo = "Location must be at least 3 characters";
    }
    if (!isValidDate(formData.movingOn)) {
      errors.movingOn = "Invalid date format";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      SetSelectItemsModal(true);
      console.log("Form submitted successfully!", { formData });
    }
  };

  // console.log({formData})

  return (
    <div className="w-[100svw] flex justify-center">
      <div className="lg:w-[80%] w-[90%] mt-[2rem]">
        <div className="flex justify-center md:justify-start">
          <SelectCityDropdown />
        </div>

        <div className="w-[100%] flex gap-x-4 md:flex-row flex-col md:items-start items-center">
          <div className="grid grid-cols-12 gap-4 md:gap-4 w-[65%] md:items-center items-center justify-center md:justify-start md:mt-6">
            {CTASectionCards.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#F5F7FE] sm:col-span-6 col-span-12 max-w-[20rem] min-w-[6rem] max-h-[16rem] min-h-[13rem] p-6 border-2 border-[#DBE3FF] rounded-3xl cursor-pointer hover:bg-[#D8E3FF] transition"
                >
                  <img src={item.imgUrl} className="min-h-[80%] max-h-[80%]" />
                  <h1 className="m-auto w-full text-center py-[1rem] font-semibold text-textPrimary h-[10%]">
                    {item.title}
                  </h1>
                </div>
              );
            })}
          </div>

          <div className="md:w-[40%] w-[90%] min-w-[20rem] mt-[2rem] md:mt-[-4rem]">
            <div className="bg-[#F5F7FE] w-[100%] min-h-max border-2 border-[#D8E3FF] rounded-3xl p-8">
              <h1 className="text-xl font-semibold">
                Instant Quote Calculator
              </h1>

              <form
                className="md:pt-6 pt-4 flex flex-col gap-y-4"
                onSubmit={handleSubmit}
              >
                <LocationInput
                  name="movingFrom"
                  value={formData.movingFrom}
                  label="Moving from"
                  placeholder={"Location"}
                  id="fromLocation"
                  setFormData={setFormData}
                  formData={formData}
                  formErrors={formErrors}
                />

                <div className="flex justify-left items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-[1rem] h-[1rem]"
                    onChange={() =>
                      setFormData({
                        ...formData,
                        movingFromHasLift: !formData.movingFromHasLift,
                      })
                    }
                  />
                  <label
                    htmlFor="fromLocation"
                    className="text-md text-gray-400"
                  >
                    Has service lift?
                  </label>
                </div>

                <div className="">
                  {/* <label htmlFor="phone" className="mt-4 text-md text-gray-400">Phone number</label> */}
                  <input
                    type="text"
                    id="floors"
                    className="bg-gray-50 border-2 text-lg rounded-xl w-full p-2 border-[#D8E3FF]"
                    placeholder="Floor No. ( Eg. 0 for Ground floor )"
                    maxLength="30"
                    value={formData.movingFromFloor}
                    onChange={handleOnChange}
                    name="movingFromFloor"
                  ></input>
                  <div className="text-red-500 text-sm">
                    {formErrors?.movingFromFloor}
                  </div>
                </div>

                <div className="w-[100%] border-b-2 border-[#D8E3FF]" />
                <LocationInput
                  name="movingTo"
                  value={formData.movingTo}
                  label="Moving To"
                  placeholder={"Location"}
                  id="toLocation"
                  setFormData={setFormData}
                  formData={formData}
                  formErrors={formErrors}
                />

                <div className="flex justify-left items-center gap-2">
                  <input
                    type="checkbox"
                    name="movingFromHasLift"
                    className="w-[1rem] h-[1rem]"
                    onChange={() =>
                      setFormData({
                        ...formData,
                        movingToHasLift: !formData.movingToHasLift,
                      })
                    }
                  />
                  <label
                    htmlFor="movingFromHasLift"
                    className="text-md text-gray-400"
                  >
                    Has service lift?
                  </label>
                </div>

                <div className="">
                  <label
                    htmlFor="fromLocation"
                    className="mt-4 text-md text-gray-400"
                  >
                    Moving On
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className=" border-2 text-lg border-[#D8E3FF] rounded-xl w-full p-2"
                      placeholder="Location"
                      name="movingOn"
                      value={formData.movingOn}
                      onChange={handleOnChange}
                    ></input>
                    <div className="text-red-500 text-sm">
                      {formErrors?.movingOn}
                    </div>
                    <div className="absolute inset-y-0 end-3 flex items-center pointer-events-none">
                      {/* Calender SVG */}
                      {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5">
                                    <path d="M5.06107 21.0451L5.50191 20.4383L5.06107 21.0451ZM3.95491 19.9389L4.56168 19.4981L3.95491 19.9389ZM20.0451 19.9389L19.4383 19.4981L20.0451 19.9389ZM18.9389 21.0451L19.3798 21.6518L18.9389 21.0451ZM18.9389 4.95492L19.3798 4.34815L18.9389 4.95492ZM20.0451 6.06107L19.4383 6.50191L20.0451 6.06107ZM5.06107 4.95492L5.50191 5.56168H5.50191L5.06107 4.95492ZM3.95491 6.06107L4.56168 6.50191L3.95491 6.06107ZM19.2178 16.0616L19.1005 15.3208H19.1005L19.2178 16.0616ZM15.0616 20.2178L14.3208 20.1005V20.1005L15.0616 20.2178ZM9 13.25C8.58579 13.25 8.25 13.5858 8.25 14C8.25 14.4142 8.58579 14.75 9 14.75V13.25ZM15 14.75C15.4142 14.75 15.75 14.4142 15.75 14C15.75 13.5858 15.4142 13.25 15 13.25V14.75ZM14.25 5C14.25 5.41421 14.5858 5.75 15 5.75C15.4142 5.75 15.75 5.41421 15.75 5H14.25ZM15.75 2C15.75 1.58579 15.4142 1.25 15 1.25C14.5858 1.25 14.25 1.58579 14.25 2H15.75ZM8.25 5C8.25 5.41421 8.58579 5.75 9 5.75C9.41421 5.75 9.75 5.41421 9.75 5H8.25ZM9.75 2C9.75 1.58579 9.41421 1.25 9 1.25C8.58579 1.25 8.25 1.58579 8.25 2H9.75ZM20.9711 16L21.7206 16.0257L20.9711 16ZM3.02893 10L2.27937 9.97432L3.02893 10ZM20.9711 10L21.7206 9.97432L20.9711 10ZM12 21.25C10.1084 21.25 8.74999 21.249 7.69804 21.135C6.66013 21.0225 6.00992 20.8074 5.50191 20.4383L4.62023 21.6518C5.42656 22.2377 6.37094 22.5 7.53648 22.6263C8.68798 22.751 10.1418 22.75 12 22.75V21.25ZM2.25 13C2.25 14.8582 2.24897 16.312 2.37373 17.4635C2.50001 18.6291 2.76232 19.5734 3.34815 20.3798L4.56168 19.4981C4.19259 18.9901 3.97745 18.3399 3.865 17.302C3.75103 16.25 3.75 14.8916 3.75 13H2.25ZM5.50191 20.4383C5.14111 20.1762 4.82382 19.8589 4.56168 19.4981L3.34815 20.3798C3.70281 20.8679 4.13209 21.2972 4.62023 21.6518L5.50191 20.4383ZM19.4383 19.4981C19.1762 19.8589 18.8589 20.1762 18.4981 20.4383L19.3798 21.6518C19.8679 21.2972 20.2972 20.8679 20.6518 20.3798L19.4383 19.4981ZM18.4981 5.56168C18.8589 5.82382 19.1762 6.14111 19.4383 6.50191L20.6518 5.62023C20.2972 5.13209 19.8679 4.70281 19.3798 4.34815L18.4981 5.56168ZM4.62023 4.34815C4.13209 4.70281 3.70281 5.13209 3.34815 5.62023L4.56168 6.50191C4.82382 6.14111 5.14111 5.82382 5.50191 5.56168L4.62023 4.34815ZM19.1005 15.3208C16.6401 15.7105 14.7105 17.6401 14.3208 20.1005L15.8023 20.3352C16.0904 18.5166 17.5166 17.0904 19.3352 16.8023L19.1005 15.3208ZM9 14.75H15V13.25H9V14.75ZM20.9711 15.25C20.0888 15.25 19.5579 15.2484 19.1005 15.3208L19.3352 16.8023C19.647 16.7529 20.0338 16.75 20.9711 16.75L20.9711 15.25ZM20.25 13C20.25 14.1731 20.2499 15.1456 20.2215 15.9743L21.7206 16.0257C21.7501 15.1658 21.75 14.1648 21.75 13H20.25ZM20.2215 15.9743C20.158 17.8292 19.9509 18.7925 19.4383 19.4981L20.6518 20.3798C21.4537 19.2761 21.6564 17.8991 21.7206 16.0257L20.2215 15.9743ZM15.75 21.9711C15.75 21.0338 15.7529 20.647 15.8023 20.3352L14.3208 20.1005C14.2484 20.5579 14.25 21.0888 14.25 21.9711L15.75 21.9711ZM12 22.75C13.1648 22.75 14.1658 22.7501 15.0257 22.7206L14.9743 21.2215C14.1456 21.2499 13.1731 21.25 12 21.25V22.75ZM15.0257 22.7206C16.8991 22.6564 18.2761 22.4537 19.3798 21.6518L18.4981 20.4383C17.7925 20.9509 16.8292 21.158 14.9743 21.2215L15.0257 22.7206ZM3.75 13C3.75 11.8269 3.75009 10.8544 3.77849 10.0257L2.27937 9.97432C2.24991 10.8342 2.25 11.8352 2.25 13H3.75ZM3.77849 10.0257C3.84204 8.17075 4.04907 7.20746 4.56168 6.50191L3.34815 5.62023C2.5463 6.7239 2.34355 8.10087 2.27937 9.97432L3.77849 10.0257ZM3.02893 10.75H20.9711V9.25H3.02893V10.75ZM21.75 13C21.75 11.8352 21.7501 10.8342 21.7206 9.97432L20.2215 10.0257C20.2499 10.8544 20.25 11.8269 20.25 13H21.75ZM21.7206 9.97432C21.6564 8.10087 21.4537 6.7239 20.6518 5.62023L19.4383 6.50191C19.9509 7.20746 20.158 8.17075 20.2215 10.0257L21.7206 9.97432ZM15.75 5V4.02893H14.25V5H15.75ZM15.75 4.02893V2H14.25V4.02893H15.75ZM12 4.75C13.1731 4.75 14.1456 4.75009 14.9743 4.77849L15.0257 3.27937C14.1658 3.24991 13.1648 3.25 12 3.25V4.75ZM14.9743 4.77849C16.8292 4.84204 17.7925 5.04907 18.4981 5.56168L19.3798 4.34815C18.2761 3.5463 16.8991 3.34356 15.0257 3.27937L14.9743 4.77849ZM9.75 5V4.02893H8.25V5H9.75ZM9.75 4.02893V2H8.25V4.02893H9.75ZM12 3.25C10.8352 3.25 9.83424 3.24991 8.97432 3.27937L9.02568 4.77849C9.85445 4.75009 10.8269 4.75 12 4.75V3.25ZM8.97432 3.27937C7.10087 3.34356 5.7239 3.5463 4.62023 4.34815L5.50191 5.56168C6.20746 5.04907 7.17075 4.84204 9.02568 4.77849L8.97432 3.27937Z" fill="black"/>
                                    </g>
                                    </svg> */}
                    </div>
                  </div>
                </div>

                <button className="bg-primary rounded-3xl px-1 md:px-2 text-white w-full p-2 hover:bg-blue-500 mt-5">
                  Create Schedule
                </button>
              </form>
            </div>
          </div>
        </div>
        <ModalsUI
          {...{
            SetSelectItemsModal,
            selectItemsModal,
            steps,
            setSteps,
            formData,
          }}
        />
      </div>
    </div>
  );
};

export default CTASection;
