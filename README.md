# QuickGrade frontend

After cloning the repo/pulling it down kindly run the following command
`yarn` to install all necessary dependencies
`yarn install --dev` to install all dev dependencies
`yarn build ` to compile in watch mode
note: there's no dis/lib folder you don't have to worry, your work is compiled on-the-go!!
`yarn dev` to start your server

# Routes

There's routing in the project, the signing page can be viewed at `localhost:port/signin`
kindly include other routes as you work on them.

# Using Reusable Components

currently there are three (3) reusable components in our project which are

1. mainbutton (with blue background)
2. footer
3. sidebar

To use a reusable components in your project

1. mainbutton:

a. `import MainButton from "../../components/buttons/mainButton"`

b. include the imported button and pass in the button text e.g if you want to use the button for Get Started, you pass that value to button_text as shown below
`<MainButton button_text="Get Started" />`

2. Footer and Sidebar are fixed, `kindly leave them the way they were, if there's any suggestion/improvement kindly reach out and it will be effected upon review`
