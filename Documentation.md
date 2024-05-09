I was provided with  a website ```https://www.kingsukhguesthouse.com/``` and was instructed to make its clone.\
I decided to choose ReactJS as a techstack to build this website.

First of all I explored the website found some issues.\
Along with the issues I have analysed all the colors used in website and made _CSS Custom Attributes_ for it.\
CSS custom properties allow you to store specific values for reuse throughout your CSS document.

## Codebase setup
Command:- ```npx create-react-app project-name``` was used which made a folder along with required dependencies and scripts in package.json file.\
_React_, _React-DOM_ and _React-Scripts_ were installed in this CRA template.\
Further installed _framer motion_ for animation effects in web app.\
Command:- ```npm install framer-motion```\
Separate Images folder was made in src-->components-->images were images required for website are stored.


## HomePage
1. During exploring website I have noticed button element is occuring several times so I have made a separate button component so that it can reused later on.
2. Started with the HomePage of website.
3. An external __variant.js__ file is made which contains a reusable function called fade-in animation with a given direction and delay. The animation is defined using keyframes and a transition, with the transition's duration, delay, and easing function all customizable.This function was made for animation.


## About Page and RoomPage
### Note:- While making About Page I have noticed that I have to give same media queries for responsiveness in different components thus increasing time and causing repeatation thus I have made a separate Stylesheet folder which contain styles.css folder which will further contain styling for all the components in single file.
Here I have removed the button component as Common Stylesheet Folder will take care of styling.\

Use of nth child concept:-\
:nth-child() selector selects child elements according to their position among all the sibling elements within a parent element.

## Services, Banner, Gallery and Contact Page
Remix icons were used in services page.\
Command - ```npm install -remixicons --save```\
Further to import:- ```import 'remixicon/fonts/remixicon.css'```

## Map and Footer Page
Map Page is made and its purpose is to render an embedded Google Map within a web page.\
Further Footer Page was made and styling was done.\
Additionally a __BackToTop button__ is made which has highest Z-index so button will display above all pages and position is fixed so that button will be visible throughout the site from second page onwards.\
Function of the button is to bring user to first page that is home page from any page on the website.

