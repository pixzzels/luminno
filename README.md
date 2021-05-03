# Luminno
Luminno is a web application that allows users to see listings, video games, publish game reviews, and catalog games into game shelves that can be customized. This was inspired by [Goodreads](https://www.goodreads.com/), a website where individuals can search for books, create reviews, catalog books into libraries, discuss all things books, and more.
#### Live link: [ggPlays](https://ggplays.herokuapp.com/)

***

### Index
[Technologies](#technologies)

[Key Features](#key-features)

[Code Snippets](#code-snippets)

[Wiki Pages](#wiki-pages)

[Stretch Goals](#stretch-goals)

***

### Technologies
#### Front End
- JavaScript
- React and Redux
- CSS styling
- [Favicon.io](https://favicon.io/) for favicon
- Adobe XD
- Hosted on Heroku

#### Back End
- Built with Express.js
- Uses a PostgreSQL Database
- Sequelize.js
- Express Validator Library
- CSURF Library

***

### Key Features
- Uses bcryptjs library to secure authentication
- Grants logged in users access to create reviews, add items to cart, and view their profile
- Prevents csrf attacks and uses validation forms to authenticate users

***

### Code Snippets
#### Query for all shelves in a Gameshelf that belongs to a specific user with constraints.


### Wiki Pages
#### [API Documentation](https://github.com/Hieu-Ma/ggplays/wiki/API-Documentation)
#### [Database Schema](https://github.com/Hieu-Ma/ggplays/wiki/Database-Schema)
#### [Feature List](https://github.com/Hieu-Ma/ggplays/wiki/Feature-List)

***

### Stretch Goals
- Search feature
- Checkout simulation
- Second user admin log in to post listings
