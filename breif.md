# Hello! 👋

Firstly, thanks for taking the time to do this project! 

We appreciate these sorts of projects can be a time-suck, so we only ask people (like you!) who we genuinely think will be a great fit at Loopin. So congrats on making it this far!

If you have any questions, you can talk to me directly at: [alex@letsloopin.com](mailto:alex@letsloopin.com).

## Scope

---

**User** **Story**

*As a team member, I want to see a message from Loopin every working day, so that I can input my mood whilst I'm at work.*

**Background**

Loopin works by sending each user a message every working day asking "How do you feel?" Monday to Friday. For this project, we want you to write the function that takes today's date, and returns an array of dates for the next five working days.

For example, if given a Sunday - we'd expect to get the following Monday - Friday, excluding any holiday days.

```tsx
export const findNextWorkingWeek = (today: Date): Date[] => {
	// Code to return up to the next five working days, 
	// excluding any holiday days
	return []
}

// Example inputs:
// '2020-12-13' === ['2020-12-14','2020-12-15','2020-12-16','2020-12-17','2020-12-18']
// '2020-12-20' === ['2020-12-21','2020-12-22','2020-12-23','2020-12-24'] - xmas falls on this week, so not included
```

## Acceptance Criteria

- Is 🎅**Christmas** 🎄removed from any working week?
- Is ✨**New Years Day** ✨ removed from any working week?
- Do we only include dates if they fall within Monday to Friday?
- Are we checking holidays in a way where it would be easy to add new holidays in the future?
- Are the dates set to 8:30am locale `en` time?
- Does the function return a maximum of five dates?
- If a holiday falls on a working week, do we remove it from the returned array?
- Is the code repository available to download on Github? -> DONE

## Notes

---

- We're looking for Clean Code™ - Well-named variables, clear, small functions that we could reuse and test independently etc.
- We use the  `dayjs` library and suggest you do too so you're not drive insane by native JS Dates
- If you get stuck, or feel the scope is too large please still submit something or get in touch - we're really looking to understand you and your process more than having a complete piece of code.
- A passing green test suite of well-written tests
- ✨**Bonus Round** ✨Preferably in TypeScript

# Next Steps

---

Once you've finished, send a link to the Github repo to either me ( [alex@letsloopin.com](mailto:alex@letsloopin.com)) or the recruiter, and we will get back to you for a Zoom meeting to go over your code together.

Once again, I really appreciate you taking the time to do the test so I'll provide written feedback regardless of whether we move forward with your application.