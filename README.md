# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)
<img width="1470" alt="Screenshot 2567-02-08 at 14 11 21" src="https://github.com/PhupaSirirat/Newsletter-sign-up-form/assets/99344705/3420956a-7609-4071-af31-44792f856d2f">


### Links

- Solution URL: https://github.com/PhupaSirirat/Newsletter-sign-up-form
- Live Site URL: https://phupasirirat.github.io/Newsletter-sign-up-form/

## My process

### Built with

- Create with Vite
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

A function for checking input for email.
```js
const isValidEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
```
How to set up css for special screen size.
```css
/* set up mobile screen */
@media only screen and (max-width: 375px) {
  //CSS
}
```

## Author

- Website - https://phupasirirat.github.io/personal-web/
- Frontend Mentor - https://www.frontendmentor.io/profile/PhupaSirirat
