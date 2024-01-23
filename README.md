# QuickGrade frontend

After cloning the repo/pulling it down kindly run the following command
`yarn` to install all necessary dependencies
`yarn install --dev` to install all dev dependencies
`yarn build ` to compile in watch mode
note: there's no dis/lib folder you don't have to worry, your work is compiled on-the-go!!
`yarn dev` to start your server

# Routes

There's routing in the project, the signing page can be viewed at `localhost:port/signin`
kindly include other routes as you work on them;

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

2. Footer:

`kindly leave it the way it is, if there's any suggestion/improvement kindly reach out and it will be effected upon review`

3. SideBar position is also fixed, how to use it; 

a. kindly 
create a `div className="give-it-any-name-but-make-it-intuitive"` inside the div; now use the imported sidebar component,  you can copy the side components and its content from the jsx element in the folder `lectuerDashboard` folder and if you are working on student related page copy it from ` studentDashboard` folder.


b. still inside the `div className="give-it-any-name-but-make-it-intuitive"` now create another div  `div clasName="mypage-wrapper"` which is going to contain your own implementation.

c. now in your css you are going to style the `div className="give-it-any-name-but-make-it-intuitive"` as `display: flex;`

d. the div that wraps your own content now i.e the one created in "b" above, give it a style of `width: 80%; margin-left: 20%` then continue your other styles.
