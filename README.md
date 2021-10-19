# loopin-tech-test

If you would like to run the service and get an output without running the tests then please **uncomment lines 78 - 84 in src/index.ts** before running using nodemon or in prod

## Install

``` bash
npm i 
```

## Run tests

``` bash
npm run test
```

## Build

``` bash
npm run build
```

## Run using nodemon

``` bash
npm run dev
```

## Run in prod

``` bash
npm run build && npm run start
```

## Notes

The way i've written the function comes with some down sides / issues

- if the holiday dates are not in 'YYYY-MM-DD' formate then the results you get are incorrect
- if have 5 holidays in chronological order then you will not be able to get the next 5 working days
- logic works great with single items in the array but not so well with multiple

If i had more time i might remove the class and maybe take a function approach, fix the issues with the holidays not working if formatted incorrectly.
fix the issue with holidays in a chronological order not working, so if you have holidays for a more then 5 days it would check the dates after that holiday
