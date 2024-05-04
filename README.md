# Personal portfolio app - React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## The purpose of the application
This application was built to showcase my coding abilities using the github api, and display some information about me.
## How to contribute
o contribute, please follow these steps:

   - Fork the repository
   - create a `secrets.js` file in the src folder and include the following:

```
export  const GIT_PUBLIC_URL = "https://api.github.com/users/<Your-username>/repos"
export const GITHUB_KEY = "<your-git-key>"
export const NINJA_KEY = "<your-key>"
export const NINJA_API = "https://api-ninjas.com"
export const GITHUB_USERNAME = "<your-username>"
```
- See [github docs](https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) for more info on getting your personal accuess token
    - see the [api ninjas](https://api-ninjas.com/api/randomimage) for more info about the random image genrator api
   - Clone the forked repository to your local machine.
   - Make changes or additions as needed.
   - Test your changes thoroughly.
   - Commit your changes with clear and descriptive messages.
   - Push your changes to your forked repository.
   - Submit a pull request to the main repository.

For major changes, please open an issue first to discuss the proposed changes.
## Features and Architecture
this is a frontend only application 
- 4 "pages" for home, about, resume and portfolio, in a single page application
- home, about and resume pages are static pages that show basic information about me with some styling
- routing was done with react dom router
- The portfolio page fetches repos from the github api and maps each repo into a custom card component with displays the information extracted and fetches a random image to each card in the technology catagory
- the langauges are extracted from the repos array stored in the portfolio component and passed to a drop down compenent to pupolate it.
- the language selected is then sorted and updated using reacts useState() and is used to filter the repos on screan.
- a search bar is also impemented to filter repos by name similarly to the langangue filter above
## dependencies
### react-router-dom
Installation:
```
npm i react-router-dom
```
### react-bootstrap
Installation:
```
npm install react-bootstrap bootstrap
```
### bootstrap
include the following line in your `App.js` imports
```
import "bootstrap/dist/css/bootstrap.min.css";

```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
## report issues
f you encounter any issues with [Application Name], please follow these steps to report them:

  1.  Check the existing issues to see if your problem has already been reported.
   2. If not, create a new issue, providing detailed information about the problem, including steps to reproduce it.
   3. Include any error messages or screenshots that may help in diagnosing the issue.
   4. Assign appropriate labels and priorities to the issue.
   5. Await feedback or resolution from the development team.