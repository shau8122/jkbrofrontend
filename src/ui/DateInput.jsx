import { useEffect, useRef } from "react";

const DateInput = ({ values, onChange }) => {
  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const handleInputChange = (field, value) => {
    onChange({ ...values, [field]: value });
  };

  const handleKeyDown = (field, e) => {
    const isValidKey = /[0-9]/.test(e.key);
    const isBackspace = e.key === 'Backspace';
    const isTab = e.key === 'Tab';

    if (!isValidKey && !isBackspace && !isTab) {
      e.preventDefault();
    }

    if ((e.key === 'Backspace' || e.key === 'ArrowLeft') && field !== 'day' && values[field].length === 0) {
      focusPreviousInput(field);
    }

    if ((e.key === 'ArrowRight' || isTab) && field !== 'year' && values[field].length === 2) {
      focusNextInput(field);
    }
  };

  const focusNextInput = (field) => {
    if (field === 'day') {
      monthRef.current.focus();
    } else if (field === 'month') {
      yearRef.current.focus();
    }
  };

  const focusPreviousInput = (field) => {
    if (field === 'year') {
      monthRef.current.focus();
    } else if (field === 'month') {
      dayRef.current.focus();
    }
  };

  useEffect(() => {
    if (values?.day.length === 2) {
      focusNextInput('day');
    }
    if (values?.month.length === 2) {
      focusNextInput('month');
    }
  }, [values]);

  return (
    <div className="flex space-x-2">
      <input
        ref={dayRef}
        type="text"
        className="w-16 p-2 border rounded focus:outline-none focus:border-blue-500"
        placeholder="DD"
        value={values?.day}
        onChange={(e) => handleInputChange('day', e.target.value)}
        onKeyDown={(e) => handleKeyDown('day', e)}
      />
      <input
        ref={monthRef}
        type="text"
        className="w-16 p-2 border rounded focus:outline-none focus:border-blue-500"
        placeholder="MM"
        value={values?.month}
        onChange={(e) => handleInputChange('month', e.target.value)}
        onKeyDown={(e) => handleKeyDown('month', e)}
      />
      <input
        ref={yearRef}
        type="text"
        className="w-24 p-2 border rounded focus:outline-none focus:border-blue-500"
        placeholder="YYYY"
        value={values?.year}
        onChange={(e) => handleInputChange('year', e.target.value)}
        onKeyDown={(e) => handleKeyDown('year', e)}
      />
    </div>
  );
};


export default DateInput