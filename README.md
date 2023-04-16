<h1 align="center">MySQL Employee Tracker👋</h1>
  
<p align="center">
    <img src="https://img.shields.io/github/repo-size/lingeorge88/E-commerce_ORM" />
    <img src="https://img.shields.io/github/languages/top/lingeorge88/E-commerce_ORM"  />
    <img src="https://img.shields.io/github/issues/lingeorge88/SQL_EmployeeTracker" />
    <img src="https://img.shields.io/github/last-commit/lingeorge88/E-commerce_ORM" >
    <a href="https://github.com/jpd61"><img src="https://img.shields.io/github/followers/lingeorge88?style=social" target="_blank" /></a>
</p>
  
<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/expressJS-blue"  />
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/-inquirer-red" >
    <img src="https://img.shields.io/badge/-mysql2-lightgrey" />
    <img src="https://img.shields.io/badge/-json-orange" />
    <img src="https://img.shields.io/badge/mySQL-blue"  />
    <img src="https://img.shields.io/badge/Insomnia-purple" />
</p>
   
## Description

⌨️ 💻 This is a back-end application built with nodeJS and various npm packages that helps companies manage their e-commerce site's server side functionalities.

  
📼Below is the gif showing the functionality of the application:
  
![Application gif](./Assets/rom_demo.gif)
  
🎥 Video demonstration of the application can be found [here](https://youtu.be/3iralJPjqCE)  
  
  
## Table of Contents
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [Future Developments](#future-developments)
- [Questions](#questions)

## Installation
💾   

1. Clone or download this github repository onto local directory, open the directory in any code editor (VScode used in demonstration).

2. Open a new terminal inside the "Develop" folder and run the following command: 

    `npm i`
  
  
## Usage
💻   👨‍🔧  👩‍🔧

1. Open `.env.example` file and change the DB_username and DB_password fields to match with your mySQL login credentials on your local environment

2. Open Mysql with CLI inside the 'db' folder with the following command:

        `mysql -u root -p`

3. Login to your mySQL server and create the database by running the following command: 

    `source schema.sql`

4. Seed the database by running the following command inside the Develop folder:

    `npm run seed`

5. Start the server by running the following command inside the Develop folder:
  
    `node server.js`

6. Open Insomnia, test various routes using the following address:
`localhost:3001/api/...` with the desired api routes (categories, tags, products) 
7. For help installing and testing routes with Insomnia, see the following documentation: https://docs.insomnia.rest/insomnia/get-started

## Testing
🧪👨‍💻

No testing is currently set up

## Contributing
:octocat-detective: [George Lin](https://github.com/lingeorge88)

## Future Developments
🏗️🚧
- Allow users to bulk create products, categoies, tags

- Adding Front-end to complete a fullstack application

- Adding more columns for products and categories to make them more descriptive 


## Questions
✉️ Contact me with any questions: [email](mailto:lingeorge04@gmail.com) , [GitHub](https://github.com/lingeorge88)<br />
