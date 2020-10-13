# CruzHacks 2021 Website

[![deepcode](https://www.deepcode.ai/api/gh/badge?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybTEiOiJnaCIsIm93bmVyMSI6IkNydXpIYWNrcyIsInJlcG8xIjoiY3J1emhhY2tzLTIwMjEtd2Vic2l0ZSIsImluY2x1ZGVMaW50IjpmYWxzZSwiYXV0aG9ySWQiOjEzOTk2LCJpYXQiOjE2MDI1MTY0Mjl9.55pKP5juuFi6c4W-I47npILc5-anopTy65cPYozSqvg)](https://www.deepcode.ai/app/gh/CruzHacks/cruzhacks-2021-website/_/dashboard?utm_content=gh%2FCruzHacks%2Fcruzhacks-2021-website)

![CruzHacks2021 Workflow](https://github.com/CruzHacks/cruzhacks-2021-website/workflows/cruzhacks-2021-website/badge.svg)

ReactJS web application written in Typescript and hosted on Firebase implementing our main site for CruzHacks 2021 Event.

How to Run
=======

1. Clone this repository 
2. Navigate to the root of the repository and run `yarn` which will install all the dependencies
3. Running `yarn start` will begin a development server on `localhost:3000` where you can see the web app being served

Available Scripts
========

* `yarn start` starts a development server
* `yarn lint:ts` runs the linter for all typescript files
* `yarn lint:css` runs the linter for all scss files
* `yarn lint` runs entire linting suite (both typescript and css scripts)
* `yarn test` runs the jest testing suite using the `--watch` flag
* `yarn test:once` runs the entire jest testing suite
* `yarn build` creates a production build
