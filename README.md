Welcome to the NerdyJoy App repository! 

Down below is a guide for developers using this repository: 

1. Add comments to your code to make the function of the code clear (it will be easier to read & understand your code.)  

2. If you make any changes to the code you uploaded, report it with information about the version and reason for the change.

Visit Trello for the Figma link and To-do list: 

https://trello.com/invite/b/ZaDfJqOD/7465b47bf71f142555e25724a0895b12/nerdy-joy-app 

ReadMe: Structure of App

// static items, mostly just images for the app
assets
- Icons
- Images

functions
- index.js
- package.json

// node modules imported
node_modules- check that firebase is imported

// folder that holds all custom components, screens, etc
src
// global custom components and features
- components
    - CustomText.js
    - Spacer.js
    - SafeArea.js
- features
    // folder that includes styling and backend for auth pages
    - authorization 
        - components
            - Account.styles.js
        - screens
            - WelcomeScreen.js
            - RegisterScreen.js
            - LoginScreen.js
            - SignUpScreen.js
            - ConnectContacts.js
    // same process with other sets of pages
    - goals_assistant
        - components
        - screens
    - after_setup
        - components
        - screens
    - notifications
        - components
        - screens
// navigation and styling
- infrastructure
    - navigation
        - AppNavigator.js
        - AccountNavigator.js
    - theme 
        - colors.js
        - fonts.js
        - index.js
        - index.js
        - sizes.js
        - spacing.js
- services
    - authentication
        - authentication.service.js
        - AuthenticationContext.js

// set up the app for when it first loads, includes firebase authentication, font 
// loading, app loading, setting up container
App.js

