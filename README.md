# Weather App

Building a Weather Web App to learn React.js Advanced Concepts like:

+ Project Structure
+ Fetching data from multiple APIs
+ Using a Promise library to fetch data from React.js
+ Interacting witn Component Lifecycle Methods
+ Configuring Routing in our React Application
+ Create Static and Dynamic Routes
+ Communicate components from children.

## Instructions

Use what you’ve learned of React to recreate the Weather App (Part I). You likely will need to use concepts like:

+ Components
+ Props
+ State
+ Access to data from render method
+ Declare an empty state from constructor
+ Communicate components using Props

## Setup

```sh
# (1) go to your `/muktek` directory
$ cd ~/muktek

# (2) go inside into `weather-app` directoy
$ cd weather-app

# (3) run your app and visit `localhost:3000`
$ npm start
```

## Normal Mode

### Sprint 1 | Configure the Routing

Install `react-router-dom` and create configuration for routes.

### Sprint 2 | Create A Static Route

Create a static route `/home`. And the needed component.

### Sprint 3 | Create Dynamic Routes

When you click a country (from the left) you should go to `/countries/«countryName»` page. Create the needed component for this dynamic route.

### Sprint 4 | Fetch Daily Report

On each country view, you should display the **daily** information.

###### Suggested design
![Daily Sketch](/dialy.png)

### Keys to Success

+ DON’T FORGET to configurate `react-router-dom` in your app.
+ Create the routes.
