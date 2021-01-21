# Exercise 5: Build a basic calculator 

## Due Date: Friday, January 22, 2021 11:59 PM
## Objectives: Practice keeping track of state and passing data around to child components as props, as well as lifting state up.

## Specifications/Requirements
1. In this exercise you need to complete the definitions of 3 componenets:
  * `KeyPad.js`  
  * `Result.js` 
  * `Calculator.js`  

The `KeyPad` component should display the UI containing all the keys and inputs the user will need to interact with. 
The `Result` component should display the UI displaying the entered values, actions and result of a calculation.  
All the logic and state should be maintained inside of the `Calculator` component.

If the calculation you enter is not arithmetically correct your output should read `ERROR` and upon entering a new value should clear.

__Hint: To begin the project I would suggest building out the rest of the UI in the `KeyPad` component so that when your application spins up you see all the buttons and add some `console.log` statements so you can see the "value" of the button the user just clicked.__


__Hint: Since state is being maintained in the `Calculator` component you will need to provide a function to the necessary child components so that they can communicate with the state of the parent component. Look at the `lifting-state-example` inside of the week3 codeExamples for reference.__ 

__Hint: You may want to look into the javascript eval() function to actually perform your user entered calculation. This is normally a dangerous function to use but is fine for this project.__ 

__Note: All the necessary styles have been defined for you. You may not create any additional files other than the ones we have provided you with.__  
