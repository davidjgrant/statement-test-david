# statement-test-david

## Introduction

- Thank you for taking the time to read through my work, I really enjoyed this project (and creating it from scratch and not from react!). Below I will share with you my thought process, what I would do more if I had more time and final screenshot results.

## 1. Setting up Webpack

- Like I said before starting this project from scratch was a real memory scratcher! I would normally create-next-app or something and off to the races I go. But setting up my own webpack.config file was refreshing. Kind of felt like a 'back to basics' lesson, so thank you for that!
- I would normally set three config files: 1. production, 2. development & 3. common for both. But as the task was so small, I just kept everything in one place.
- All assets/ scripts/ styles will compile to ES5 (thanks to Babel), ready for majority of browsers out there (RIP IE).

## 2. Pure HTML & SCSS baby

- I absolutely blazed through this part, as HTML & SCSS comes second nature to me. I wrote custom variables, mixins and nested my classes using the BEM format as you suggested. That is my day-to-day structure anyway to happy to comply.
- HTML is semantic and good for SEO.

## 3. Vanilla JavaScript

- I initially wrote all my functions in one folder, and then split it out into components for re-usability purposes. I love how small some of these functions are. Pure fn FTW!
- Not really a fan of setTimeout, but if this was some fresh data I would have used async await instead.

## Reflection

- I would have written it in Typescript, but time was against me. I am in the process of starting each project in TypeScript. I think its tools are uper handy when you're trying to find out what you CANT do with certain functions.
- You might see a cheeky api folder with a simple JSON of the product. I thought it would be cool to update the cart with whatever data is pushed into it from the Add to Cart button. This would have been my go to method if using a JS framework.

## Screenshots
Desktop:
![image](https://user-images.githubusercontent.com/5520778/193472837-c6e797cd-6f7c-4062-9c3b-be79d321e1eb.png)
![image](https://user-images.githubusercontent.com/5520778/193472863-739417cb-b699-4921-a673-f68a0814ff43.png)

Mobile:
![image](https://user-images.githubusercontent.com/5520778/193472898-4121b06c-1fc1-42a2-9643-f9f7b77601f8.png)
![image](https://user-images.githubusercontent.com/5520778/193472933-927a023e-b1bf-403c-9c58-233a129f5c80.png)
