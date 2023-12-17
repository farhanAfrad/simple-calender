import dayjs from "dayjs";
// days returns the days of the week 0-6
// date returns the date of the month 1-31
// month returns the number of month 0-11
// year returns the year
// startOf returns the cloned days object with the firstday of the month
//  endOf returns the cloned days of object with the lastday of the month 

export const calender = (
    month = dayjs().month(),
    year = dayjs().year()
) => {

const firstDateOfMonth = dayjs().year(year).month(month).startOf('month');
const lastDateOfMonth = dayjs().year(year).month(month).endOf('month');
console.log(firstDateOfMonth, lastDateOfMonth);

// const date = dayjs();
// const d = date.subtract(i);
// console.log(d);

const arrayOfDate = [];
// const activeArray = []

// create prefix
for(let i =  firstDateOfMonth.day(); i> 0; i--){
    
    arrayOfDate.push({
        date:firstDateOfMonth.subtract(i,'day'),
        currentMonth:false,
        today:firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString()
    });

}
// GENERATE CURRENT MONTH DATE
for(let i = firstDateOfMonth.date(); i<=lastDateOfMonth.date(); i++){
    
    arrayOfDate.push({
        date:firstDateOfMonth.date(i),
        currentMonth: true,
        today: firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString(),
    });
}
// create suffix
const remaining = 42 - arrayOfDate.length;
for(let i = lastDateOfMonth.date() + 1; i <= lastDateOfMonth.date() + remaining; i++){
    
    arrayOfDate.push({
        date:firstDateOfMonth.date(i),
        currentMonth:false,
        today:firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString()
    });
}
console.log(arrayOfDate);
return arrayOfDate;
}

