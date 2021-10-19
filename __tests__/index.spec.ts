import { findNextWorkingDay } from "../src/index";

// - Is 🎅**Christmas** 🎄removed from any working week? -> important
// - Is ✨**New Years Day** ✨ removed from any working week? -> important
// - Do we only include dates if they fall within Monday to Friday? -> -> important
// - Does the function return a maximum of five dates? -> important
// - If a holiday falls on a working week, do we remove it from the returned array? -> important

// - Are we checking holidays in a way where it would be easy to add new holidays in the future?
// - Are the dates set to 8:30am locale `en` time?

describe("Find next working day", () => {
  test("Should accept todays date and return a max of the next 5 working days", () => {});

  test("Should remove christmas from any working week", () => {});

  test("Should include dates that fall between monday - friday", () => {});

  test("Should remove any holiday's from the working week", () => {});
});
