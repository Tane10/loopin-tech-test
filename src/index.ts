// take today and return the next 5 working days
import dayjs from "dayjs";
// only handling date as a string
// not handling time

// format all dates to uk -> .format('DD-MM-YYYY')
// array doestn' have to include todays date

// daysjs plugins needed
// - var weekday = require('dayjs/plugin/weekday')
// - var isToday = require('dayjs/plugin/isToday')

// holiday date formate is DD-MM-YYYY
const holidaysArray: string[] = ["25-12-2021", "01-01-22"];

const ukDateFormate: string = "DD/MM/YYYY";

function convertStringToDayjs(dates: string[]): string[] {
  let dayjsFormateDatesArray = [];

  for (let date of dates) {
    const formateDate = dayjs(date);
    formateDate.isValid()
      ? dayjsFormateDatesArray.push(formateDate.format(ukDateFormate))
      : null;
  }

  return dayjsFormateDatesArray;
}

export function findNextWorkingDay(today: Date): void {
  // convert todays date and holidays to daysjs format
  const dayjsToday: dayjs.Dayjs = dayjs(today);
  const formateDates = convertStringToDayjs(holidaysArray);

  let nextWorkingDays = [];

  for (let i = 0; i < 5; i++) {
    const nextDay = dayjsToday.add(i, "day").format(ukDateFormate);

    // if no equal to holiday then add to array else dont
    nextWorkingDays.push(nextDay);
  }

  console.log(nextWorkingDays);

  // Code to return up to the next five working days,
  // excluding any holiday days
}

const todaysDate = new Date();

findNextWorkingDay(todaysDate);
