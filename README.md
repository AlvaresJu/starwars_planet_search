# Star Wars Planets Search Project

[![StarWars Screen Shot][product-screenshot]](https://alvaresju.github.io/starwars_planet_search/)

### Project page link: [https://alvaresju.github.io/starwars_planet_search/](https://alvaresju.github.io/starwars_planet_search/)


<!-- TABLE OF CONTENTS -->
<details>
  <summary><h2><strong>Table of Contents</strong></h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About the Project</a>
      <ul>
        <li><a href="#context">Context</a></li>
        <li><a href="#technologies-used">Technologies Used</a></li>
        <li><a href="#implemented-features">Implemented Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#cloning-the-repository">Cloning the Repository</a></li>
        <li><a href="#installing-dependencies">Installing Dependencies</a></li>
        <li><a href="#running-the-application">Running the Application</a></li>
        <li><a href="#running-tests-and-coverage-analysis">Running Tests and Coverage Analysis</a></li>
      </ul>
    </li>
    <li><a href="#contributions-and-authors">Contributions and Authors</a></li>
  </ol>
</details>


# About the Project
  The Star Wars Planets Search project is a front-end web application that provides a list of filters for information about the planets in the Star Wars universe. The application was developed in React, using *Context API* and *React Hooks* to manage global states.
## Context
  This project was developed by _[Juliana Álvares](https://www.linkedin.com/in/juliana-alvares/)_ as part of the front-end module learning process in the Web Development course at [Trybe](https://www.betrybe.com/) :rocket:

  The [Trybe](https://www.betrybe.com/) program features over 1,500 hours of in-person and online classes, covering software development introduction, front-end, back-end, computer science, software engineering, Agile methodologies, and soft skills.

## Technologies Used

  #### Front-end:
  * [![React][React-img]][React-url]

  #### Testing:
  * [![Jest][Jest-img]][Jest-url]
  * [![Testing-Library][RTL-img]][RTL-url]

  #### Languages:
  * [![JavaScript - ES6][JavaScript-img]][JavaScript-url]
  * [![CSS3][CSS3-img]][CSS3-url]
  * [![HTML5][HTML5-img]][HTML5-url]

## Implemented Features

  <!-- [![StarWars Gif][product-gif]](https://alvaresju.github.io/starwars_planet_search/) -->

  - Table of Star Wars planets with information about:
    - Physical characteristics of each planet;
    - URLs for API endpoints to get data about the movies in which the planet appears;
    - Planet data creation and editing timestamps;
    - URL for API endpoint to get planet data.
  - Text search for planet names;
  - Filtering of planets by quantitative characteristics
  - Multiple filters possibility;
  - Individual filter removal and complete filters reset;
  - Ascending or descending sorting of data by selected characteristic.

# Getting Started
  To run the application locally, make sure you meet the prerequisites and follow the instructions below:

## Prerequisites
  [Node.js](https://nodejs.org/en/) version 16 or higher.

## Cloning the Repository

  ```bash
    git clone git@github.com:AlvaresJu/starwars_planet_search.git
  ```
## Installing Dependencies
  ```bash
    cd starwars_planet_search/
    npm install
  ``` 
## Running the Application
  ```bash
    npm start
  ```
## Running Tests and Coverage Analysis
### Tests with Jest and React Testing Library (RTL):
```bash
  npm test
  npm run test-coverage
```
### Integration Tests with Cypress:
*Note: The application needs to be running to run Cypress tests.*
#### Local Tests
```bash
  npm start
  npm run cy
```
#### Tests with page viewer
```bash
  npm start
  pm run cy:open
```

# Contributions and Authors
  As described, this project was proposed by [Trybe](https://www.betrybe.com/) and developed by _[Juliana Álvares](https://www.linkedin.com/in/juliana-alvares/)_ during the Web Development course. Therefore, Trybe provided some base configuration and aids files for the project. The authorship specification of the main documents is as follows:
  
  Files/directories developed by the project author (Juliana Álvares):
  > /src/**
  
  Files/directories provided by Trybe:
  > .eslintrc.json , .stylelintrc.json , .editorconfig , versão inicial do package.json , versão inicial do package-lock.json , /cypress/** , /public/**

  
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: src/images/screenshot.png
<!-- [product-gif]: images/features.gif -->
[React-img]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Jest-img]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/
[RTL-img]: https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white
[RTL-url]: https://testing-library.com/
[JavaScript-img]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[CSS3-img]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[HTML5-img]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5