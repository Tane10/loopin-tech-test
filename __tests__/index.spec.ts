import FindNextWorkingDayService from "../src/index";
import {
  selectedHolidays,
  ukDataFormate,
  today,
  nextWorkingDayResults,
  decemberDates,
  decemberWorkingDays,
} from "../mocks/mock.data";

const findNextWorkingDayService = new FindNextWorkingDayService(
  selectedHolidays,
  ukDataFormate
);

describe("Find next working day", () => {
  test("Should accept todays date and return a max of the next 5 working days", () => {
    const nextFiveWorkingDays =
      findNextWorkingDayService.findNextWorkingDay(today);

    console.log(nextFiveWorkingDays);

    expect(nextFiveWorkingDays).toStrictEqual(nextWorkingDayResults);
  });

  test("Should remove christmas from any working week", () => {
    const christmasHolidays =
      findNextWorkingDayService.findNextWorkingDay(decemberDates);

    console.log(christmasHolidays);

    expect(christmasHolidays).toStrictEqual(decemberWorkingDays);
  });

  test("Should return error message if dates are in valid", () => {
    const christmasHolidays = findNextWorkingDayService.findNextWorkingDay(
      new Date("2209-40-51")
    );
    expect(christmasHolidays).toStrictEqual({ message: "Invalid Date" });
  });
});
