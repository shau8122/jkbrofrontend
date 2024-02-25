import { useForm } from "react-hook-form";
import { Button, DateInput, Dropdown, Input } from "../../../ui";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";
import axios from "axios";

const options = [
  { value: "option1", display: "Personal usage" },
  { value: "option2", display: "Buisness usage" },
  { value: "option3", display: "Explore" },
  { value: "option4", display: "Emergency need" },
  { value: "option5", display: "Option 5" },
  { value: "option6", display: "Option 6" },
  { value: "option7", display: "Option 7" },
  { value: "option8", display: "Option 8" },
  { value: "option9", display: "Option 9" },
  { value: "option10", display: "Option 10" },
  { value: "option11", display: "Option 11" },
];

const schema = z.object({
  name: z.string().min(3).max(50).optional(),
  email: z.string().email().optional(),
  day: z.string(),
  month: z.string(),
  year: z.string(),
  hereFor:z.string()
});

const EditProfile = () => {
  const user = useSelector((state) => state.userState.user);
  const baseUrl = import.meta.env.VITE_BACKEND_URL;
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: user.name || "",
      email: user.email || "",
      day: user.birthdate?.day || "",
      month: user.birthdate?.month || "",
      year: user.birthdate?.year || "",
      hereFor:user?.purpose || ""
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    const updateData={
      name:data.name,
      email:data.email,
      birthdate:{
         day: data.day, month: data.month, year: data.year
      },
      purpose:data.hereFor
    }
    try {
      // Make the PUT request with the token included in the headers
      const res = await axios.put(`${baseUrl}me`, updateData, {
        withCredentials: true,
      });
      console.log("Response:", res.data);
      // Handle success response if needed
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error appropriately (show a message, redirect, etc.)
    }
  };
  return (
    <div className="px-2">
      <h1 className="font-playfair text-2xl text-textPrimary">
        Account Details
      </h1>
      <form
        className="md:pt-6 pt-4 flex flex-col flex-grow"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Name */}
        <Input type="name" label="Name" register={register} errors={errors} />

        <Input
          type="email"
          label="Email"
          register={register}
          errors={errors}
          placeholder="Enter your email"
        />

        {/* BirthDate */}
        <DateInput
          day={getValues("day")}
          month={getValues("month")}
          year={getValues("year")}
          errors={errors}
          setDay={(value) => setValue("day", value)}
          setMonth={(value) => setValue("month", value)}
          setYear={(value) => setValue("year", value)}
        />

        <Dropdown
          options={options}
          selectedValue={getValues("selectedOption")}
          onValueChange={(value) => setValue("selectedOption", value)}
          placeholder="Personal usage"
          label="I'm here for"
        />

        <Button variant="primary" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};
export default EditProfile;
