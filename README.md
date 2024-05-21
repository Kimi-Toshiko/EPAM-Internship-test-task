# EPAM-Internship-test-task

**(Total score: <ins>**326** points</ins>)**
**Front-end deployment URL**: https://epam-internship-test-task.vercel.app/

This repository contains the test [task](https://github.com/rolling-scopes-school/tasks/blob/master/epam/async-race.md) "Async-Race" for an internship "Javascript Developer" application at EPAM. It is designed to showcase skills in software development, problem-solving, and system design.

This application is written, using React library in correlation with Typescript.

---

## Table of contests
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Checklist](#checklist)

---

## Project Overview

This project is aimed at demonstrating the ability to tackle real-world problems using modern software development practices. Async-race is an application, which takes the random data for different cars and they are competing with one another. Application contains two folders. **async-race-api**, which is forked from the repository by [Mikhama](https://github.com/mikhama/async-race-api). It contains all of the server-side information, including database for cars, winners and cars engine charachteristics (such as velocity of the car and race distance). The second folder is **async-race-react-app**. It contains the front-end part of the application, including UI/UX and code for its embodiment. Application connects to the provided server and allows to manage operations with it, creating a fully working application, which is powered by React framework and TypeScript superset of JavaScript language.

- **Garage** view:
    In the garage view all the information about cars is displayed. It takes data from testing server and shows the list of the cars available at the moment. Pagination is applied to the list of data and displays 7 records per page. For navigating through other pages, user may use <ins><</ins>(previous page) and <ins>></ins>(next page) buttons. Available buttons in the garage view and their actions:
    - <ins>'Generate cars'</ins> button allows to create *100 absolutely random cars* with random names and color. Further user can interact with them and they are also participating in the race. 
    - <ins>'Create'</ins> button takes the information from the form inputs correlated with it (name and color). For creation the car user MUST input its *name*, while *color* input is OPTIONAL. If *color* is not specified, by default the car will be of the *black* color.
    - <ins>'Update'</ins> button takes the information from the form inputs correlated with it (name and color). For updating the car, user must SELECT the car, which them want to update. It is available to change *only* name of the car or *only* color.
    - <ins>'Select'</ins> button applies to every car in the garage. It allows to *select* one particular car *for changing* either its name or color, depending on user's wish. However, the user must be aware that ONLY ONE car is available for editing at a time. If them has already selected the car, first of all it needs to be deselected, before making changes to another car.
    - <ins>'Remove'</ins> button applies to every car in the garage. It allows to remove the car from the race.
    - <ins>'A'</ins> button applies to every car in the garage. It takes the car engine data and *starts this one car*. After the car had reached its finish, there is a window, which displays the time in which the car had reached the finish.
    - <ins>'B'</ins> button applies to every car in the garage. After the car had started its movement, it *allows to stop the car* in the middle of the race.
    - <ins>'Race'</ins> button makes all the cars move and start the race between them. The car, which reached the finsih first will be announced and added to winners list.
    - <ins>'Reset'</ins> button resets the started race and makes cars move back to the start.

- **Winner** view:
    On the winners page the user may see the data about all of the race winners (excluding singular car races). Pagination is applied to the list of data and displays 7 records per page. For navigating through other pages, user may use <ins><</ins>(previous page) and <ins>></ins>(next page) buttons. The data in the winners list is *sorted by the best time records* (the greatest time = the highest position on the list).

---

## Getting started
These instructions will help to get you a copy of the project up and running it on your local machine for development and testing purposes.

### Prerequisites:
(ATTENTION!) To run this project you need to have **Node JS** installed. If it is not installed, follow the instructions on their [website](https://nodejs.org/en) on downloading and installing it to your machine. 

### Steps
1. Clone the repository with local server information from https://github.com/mikhama/async-race-api
   `$ git clone  https://github.com/mikhama/async-race-api.git`
2. Clone current repository with the project to your local machine.
   `$ git clone https://github.com/Kimi-Toshiko/EPAM-Internship-test-task.git`
3. Open through command line(terminal) each of the folder (both **async-race-api** and **async-race-react-app**)
   `$ cd /your path to directories/`[^1]
   [^1]: Be aware, that depending on the type of the terminal, you may either enter the full path to the folder or access it only step by step(command going to each directory one by one). As a recommendation, you may use **Git Bash** terminal, which allows to insert the full path to the directory.
4. Inside each of the folders (both **async-race-api** and **async-race-react-app**) run the following command:
   `$ npm install`
   It will automatically download all needed dependencies for the project.
   *(IMPORTANT) Without this step neither the program nor JSON server will not be working properly. This is an important step.*
5. Start the test JSON server. Go to **async-race-api** directory through the terminal. Run the following command in the terminal to start JSON server:
    `$ npm start`
    By default the server will start running on your machine local port 3000.
    `http://localhost:3000/`
6. Start the application. I recommend to use the production build through the following link: `https://epam-internship-test-task.vercel.app/` as there is no double data accessing.[^2]
   [^2]: However, you may use the development build through the following guide:
Go to **async-race-react-app** directory through the terminal.Run the following command in the terminal to start Async-Race application:
   `$npm start`
   By default the server will start running on your machine local port 8000.
   `http://localhost:8000/`

---

## Checklist

### Basic Structure (75 points out of 85 points)
#### 1. View Configuration (20 out of 30 points)
- [x] **Two views (10 points)**: Two primary views "Garage" and "Winners" are implemented.
- [x] **Garage View Content (5 points)**: The "Garage" View displays its name, the current page number, and the total numbers of cars in the database (how many car user has in his garage).
- [x] **Winners View Content (5 points)**: The "Winners" View displays its name, the current page number, and the total count of records in the database (how many records the winners table contains).
- [ ] **Persistent state (0 out of 10 points)**: View states do not remain the same after switching views and etc.

#### 2. Garage View Functionality (55 out of 55 points)
##### Car Management (45 out of 45 points)
- [x] **CRUD Operations (20 points)**: Users are allowed to create, update and delete cars, the list of the cars is also displayed. A car has two attributes: "name" and "color". For "delete" operation car is not deleted from the winners table.
- [x] **Color Selection (10 points)**: Color selection from RGB palette is allowed. It displays the selected color on the car's image along with its name.
- [x] **Management Buttons (5 points)**: Buttons for updating car attributes or deleting it are provided near each car's image.
- [x] **Pagination (10 points)**: Pagination is implemented for the "Garage" view and displays 7 cars per page.
##### Car Generation (10 out of 10 points)
- [x] **Random Car Creation (10 points)**: There is a button, which allows to generate 100 random cars per click. Name is assembled from two random parts (in the generation lists there are at least 10 different names for each part). Color is also generated randomly.

### Car Animation (43 points out of 50 points)
- [x] **Engine Control Buttons (10 points)**: All of the engine buttons near each car's image.
- [x] **Start Engine Animation (13 points out of 20 points)**: When the user clicks on engine button, UI is waiting for car's velocity answer. Car is animated. However, it does not make another request to drive.
- [x] **Stop Engine Animation (10 points)**: User clicks to engine sto button, UI is waiting for stopping engine from the database, and car is returned to its place.
- [x] **Button States (5 points)**: Start engine button is disabled, if the car is in driving mode. Stop engine button is also disabled, when the car's is at its initial place.
- [x] **Responsive Animation (5 points)**: Car animations are fluid on screens as small as 500px.

### Race Animation (35 points out of 35 points)
- [x] **Start Race Button (15 points)**: Button starts the race for all cars on the current page.
- [x] **Reset Race Button (10 points)**: This button resets the race, returning all cars to their starting position.
- [x] **Winner Announcement (10 points)**: After some car finishes first user sees the message, which contains the car, which have won and its current time.

### Winners View (35 points out of 45 points)
- [x] **Display Winners (15 points)**: Winners are displayed. After some car wins it is displayed at the "Winners view" table.
- [x] **Pagination for Winners (10 points)**: Pagination for the "Winners" view , with 10 winners per page.
- [x] **Winners Table (10 points)**: Table includes columns for the car №, image, name, number of wins, and best time in seconds. If the same car wins more than once the number of wins is incremented, and the best time is saved only if it's higher than the previous one.
- [ ] **Sorting Functionality (10 points)**: Not implemented.
  
### Application Architecture (40 out of 40 points)
- [x] **Modular Design (40 points)**: Application is divided into logical modules or layers, such as API interaction, UI rendering, and state management.

### Dynamic Content Generation (30 out of 30 points)
- [x] **JavaScript-Generated HTML Content (30 points)**: All HTML content is dynamically generated using JavaScript, with the `<body>` tag containing only a single `<script>` tag.

### Single Page Application (25 out of 25 points)
- [x] **SPA Implementation (25 points)**: The application is a Single Page Application (SPA) using React v18+. All content is generated using TypeScript with `strict` and `noImplicityAny` settings enabled in `tsconfig.json`, ensuring seamless user experience without page reloads during navigation.

### Bundling and Tooling (20 out of 20 points)
- [x] **Use of Webpack or Similar (20 points)**: Due to the usage of React framework, Webpack usage is automatically set up, generating minimal set of files.

### Code Quality and Standards (7 out of 15 points)
- [x] **Eslint with Airbnb Style Guide (7 out of 15 points)**: Code is adhered to the ESLint configuration. However, there are some warnings about unused variables.

### Code Organization and Efficiency (14 out of 15 points)
  - [x] **Function Modularization (9 out of 10 points)**: Code is divided into small, clearly named functions, however, two modules are over 40 lines of code.
  - [x] **Code Duplication and Magic Numbers (5 out of 5 points)**: Code is not duplicated throughout the project.

### Prettier and ESLint Configuration (2 out of 10 points)
- [ ] **Prettier Setup (5 points)**: Prettier is not set up.
- [x] **ESLint Configuration (2 out of 5 points)**: ESLint is configured to check TypeScript in a strict mode.  