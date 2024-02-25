import { useEffect, useRef, useState } from "react";

const DateInput = ({ 
  day, 
  month, 
  year, 
  setDay,
  setMonth,
  setYear,
}) => {
  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const [dayInput,setDayinput]=useState(day)
  const [monthInput,setMonthinput]=useState(month)
  const [yearInput,setYearinput]=useState(year)
  const handleInputChange = (field, value) => {
    if (field === 'day') {
      setDay(value);
    } else if (field === 'month') {
      setMonth(value);
    } else if (field === 'year') {
      setYear(value);
    }
  };

  const handleKeyDown = (field, e) => {
    const isValidKey = /[0-9]/.test(e.key);
    const isBackspace = e.key === "Backspace";
    const isTab = e.key === "Tab";

    if (!isValidKey && !isBackspace && !isTab) {
      e.preventDefault();
    }

    if (
      (e.key === "Backspace" || e.key === "ArrowLeft") &&
      field !== "day" &&
      day?.length === 0
    ) {
      focusPreviousInput(field);
    }

    if (
      (e.key === "ArrowRight" || isTab) &&
      field !== "year" &&
      day?.length === 2
    ) {
      focusNextInput(field);
    }
  };

  const focusNextInput = (field) => {
    if (field === "day") {
      monthRef.current.focus();
    } else if (field === "month") {
      yearRef.current.focus();
    }
  };

  const focusPreviousInput = (field) => {
    if (field === "year") {
      monthRef.current.focus();
    } else if (field === "month") {
      dayRef.current.focus();
    }
  };

  useEffect(() => {
    if (day?.length === 2) {
      focusNextInput("day");
    }
    if (month?.length === 2) {
      focusNextInput("month");
    }
  }, [day, month]);

  return (
    <div className="flex space-x-2">
      <input
        ref={dayRef}
        type="number"
        min={1}
        max={31}
        className="w-16 p-2 border rounded focus:outline-none focus:border-blue-500"
        placeholder="DD"
        value={dayInput}
        onChange={(e) => {
          handleInputChange("day", e.target.value)
          setDayinput(e.target.value)
          }}
        onKeyDown={(e) => handleKeyDown("day", e)}
   
      />
      <input
        ref={monthRef}
        type="number"
        min={1}
        max={12}
        className="w-16 p-2 border rounded focus:outline-none focus:border-blue-500"
        placeholder="MM"
        value={monthInput}
        onChange={(e) => {
          handleInputChange("month", e.target.value)
          setMonthinput(e.target.value)
        }}
        onKeyDown={(e) => handleKeyDown("month", e)}
      />
      <input
        ref={yearRef}
        type="number"
        min={1900}
        max={2100}
        className="w-24 p-2 border rounded focus:outline-none focus:border-blue-500"
        placeholder="YYYY"
        value={yearInput}
        onChange={(e) => {
          setYearinput(e.target.value)
          handleInputChange("year", e.target.value)}}
        onKeyDown={(e) => handleKeyDown("year", e)}
      />
    </div>
  );
};

export default DateInput;
