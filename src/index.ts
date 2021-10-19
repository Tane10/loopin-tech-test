import dayjs, { Dayjs } from "dayjs";
import CustomError from "./error";

export default class FindNextWorkingDayService {
  //UK date-time formate by default
  private dateFormate: string = "DD/MM/YYYY";
  public chosenHolidays: string[];

  constructor(chosenHolidays: string[], dateFormate?: string) {
    this.dateFormate = dateFormate;
    this.chosenHolidays = chosenHolidays;
  }

  private convertHolidaysToDayjs(dates: string[]): Dayjs[] {
    let dayjsFormateDatesArray = [];

    for (let date of dates) {
      const formateDate = dayjs(date);
      formateDate.isValid() ? dayjsFormateDatesArray.push(formateDate) : null;
    }

    return dayjsFormateDatesArray;
  }

  private validateDayOfTheWeek(dateToValidate: Dayjs): Dayjs {
    const day = dayjs(dateToValidate).day();
    if (day === 0 || day === 6) {
      return dateToValidate.add(1, "day");
    } else {
      return dateToValidate;
    }
  }

  private getNextFiveWorkingDays(date: Dayjs, holidays: string[]): Dayjs[] {
    let nextWorkingDays: Dayjs[] = [];
    let filteredArray: Dayjs[] = [];

    const formateHolidaysDates = this.convertHolidaysToDayjs(holidays);

    for (let i = 0; i < 5; i++) {
      const nextDay = this.validateDayOfTheWeek(date.add(i, "day"));
      nextWorkingDays.push(nextDay);
    }

    for (const holiday of formateHolidaysDates) {
      filteredArray = nextWorkingDays.filter(
        (date) => !date.isSame(holiday, "day")
      );
    }
    return filteredArray;
  }

  public findNextWorkingDay(today: Date): string[] | CustomError {
    // convert todays date and holidays to daysjs format
    const dayjsToday: Dayjs = dayjs(today);

    const nextWorkingDaysArray: string[] = [];

    if (dayjsToday.isValid()) {
      let workingDays: Dayjs[] = this.getNextFiveWorkingDays(
        dayjsToday,
        this.chosenHolidays
      );

      workingDays.forEach((val) =>
        nextWorkingDaysArray.push(val.format(this.dateFormate))
      );
      return nextWorkingDaysArray;
    } else {
      return {
        message: "Invalid Date",
      };
    }
  }
}

// uncomment to run service here:
// const holidays = ["2021-10-20"];
// const findNextWorkingDayService = new FindNextWorkingDayService(
//   holidays,
//   "DD/MM/YYYY"
// );
// const workingDays = findNextWorkingDayService.findNextWorkingDay(new Date());
// console.log(workingDays);
