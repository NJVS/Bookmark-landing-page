# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly


### Screenshot

<table>
  <tr>
    <td valign="top">
        Desktop
        <img src="./ss_desktop.png">
    </td>
    <td valign="top">
        Tablet
        <img src="./ss_tablet.png">
    </td>
    <td valign="top">
        Phone
        <img src="./ss_phone.png">
    </td>
    <td valign="top">
        Phone
        <img src="./ss_phone_active.png">
    </td>
  </tr>
</table>

### Links

- [Live Demo](https://njvs.github.io/bookmark-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript
- [React](https://reactjs.org/) - JS library
- [SASS/SCSS](https://sass-lang.com) - CSS preprocessor
- Flexbox
- CSS Grid
- Responsive Web Design

### What I learned

There's nothing special about this challenge, but I did enjoy it. I've already tried most of the components on this project using vanilla JavaScript; I just need to recreate them with ReactJS.

Like the "Accordion Component," for example, I've done it multiple times on my other projects, and what I've done differently is make the accordion as reusable as much as possible (i think LOL). 

```jsx
import { Accordion, AccordionItem } from './components/Accordion';

export default const Example = () => {
  return (
    <Accordion>
      <AccordionItem header="What is Bookmark?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </AccordionItem>

      <AccordionItem header="How can I request a new browser?">
        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
        vitae, accumsan auctor mi.
      </AccordionItem>
    </Accordion>
  )
}
```
My accordion is heavily inspired from a library [React-Accordion](https://github.com/szhsin/react-accordion)

### Useful resources
- [React-Accordion](https://github.com/szhsin/react-accordion)
- [Javascript.info](https://javascript.info) - From the basics to advanced topics with simple, but detailed explanations.
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [An opinionated styleguide for writing sane, maintainable and scalable Sass.](https://sass-guidelin.es/)