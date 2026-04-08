import { useState } from "react";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


    const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const totalDays = new Date(year, month + 1, 0).getDate();

  let firstDay = new Date(year, month, 1).getDay();
  firstDay = firstDay === 0 ? 6 : firstDay - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


  const handleDateClick = (day) => {
    if (!startDate) {
      setStartDate(day);
    } else if (!endDate) {
      if (day < startDate) {
        setEndDate(startDate);
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    } else {
      setStartDate(day);
      setEndDate(null);
    }
  };

  const handlePrevMonth = () => {
    const newDate = new Date(year, month - 1, 1);
    setCurrentDate(newDate);
    setStartDate(null);
    setEndDate(null);
  };

  const handleNextMonth = () => {
    const newDate = new Date(year, month + 1, 1);
    setCurrentDate(newDate);
  };

  const getClass = (day) => {
    if (day === startDate || day === endDate) {
      return "bg-blue-500 text-white";
    }
    if (startDate && endDate && day > startDate && day < endDate) {
      return "bg-blue-200";
    }
    return "hover:bg-blue-100";
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-4 w-full md:w-[50%]">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          ←
        </button>

        <h2 className="text-xl font-bold">
          {months[month]} {year}
        </h2>

        <button
          onClick={handleNextMonth}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-sm text-gray-500 mb-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={"empty-" + i} className="h-10"></div>
        ))}

        {Array.from({ length: totalDays }, (_, i) => {
          const day = i + 1;

          return (
            <div
              key={i}
              onClick={() => handleDateClick(day)}
              className={`h-10 flex items-center justify-center rounded-lg cursor-pointer ${getClass(day)}`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
