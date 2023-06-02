
// data
const MONTHS = [
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

// Function to get the number of days in a month
const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Function to create an array of a certain length
const createArray = (length) => {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(null);
  }
  return result;
};


// Function to create an array of weeks and days in the current month
const createData = () => {
  const currentDate = new Date()
  currentDate.setDate(1)
  const startDay = currentDate.getDay();//
  const daysInMonth = getDaysInMonth(currentDate)
  const weeks = createArray(5) // Assuming 5 weeks per month
 
  let value = null;
   
  for (let weekIndex=0; weekIndex<weeks.length; weekIndex = weekIndex + 1)
  {

    const days = createArray(7)

  value = {
    week: weekIndex+1,
    days: days,
  }
  for (let dayIndex = 0; dayIndex < value.days.length; dayIndex = dayIndex + 1){
    const dayOfMonth = dayIndex  + 2 + weekIndex * 7 - startDay;

    const isValid = dayOfMonth > 0 && dayOfMonth <= daysInMonth;
    value.days[dayIndex] = {
      dayOfWeek: dayIndex + 1,
      value: isValid ? dayOfMonth: ''
    };
   
  }
  weeks[weekIndex] = value
  
}
return weeks;

};


// Function to add a table cell to an existing HTML string
const addCell = (existing, classString, value) => {
  const result = `
    ${existing}
    <td class="${classString}">
      ${value}
    </td>
  `;
  return result
};

// Function to create the HTML table from the createData function
const createHtml = (data) => {
  let result = ""
  for (const { week, days } of data) {
    let inner = ""

    inner = addCell(inner, "table__cell table__cell_sidebar", `Week ${week}`);
    
    for (const { dayOfWeek, value } of days) {
      let classString = "table__cell";
      const isToday =
        value === new Date().getDate() && new Date().getMonth() === new Date().getMonth() //*** sort this

      const isWeekend = dayOfWeek === 1 && dayOfWeek === 7

      const isAlternate = week % 2 === 0;

      if (isToday)  classString = `${classString} table__cell_today`;
      if (isWeekend) classString =  `${classString} table__cell_weekend`;
      if (isAlternate) classString = `${classString} table__cell_alternate`;
      
      inner = addCell(inner, classString, value);
    }
    result += `<tr>${inner}</tr>`;
  }
  return result;
};

// Update the calendar title
const current = new Date();
document.querySelector("[data-title]").innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;

// Generate the calendar HTML and insert it into the page
const data = createData();
document.querySelector("[data-content]").innerHTML = createHtml(data);

