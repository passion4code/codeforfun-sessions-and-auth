# Week 21 - UCLA Full Stack Web Development

This is a custom curriculum to replace the "learn a new language in 3 days" section of the traditional curriculum.

All Activities are in the `activies` folder.


## Day 1 - Sessions

**Goals**

* Introduce `express-session` package. (not to be confused with the `express-sessions` package.) https://www.npmjs.com/package/express-session
* Demonstrate session cookies
* Work with a MongoDB session storage.
    * https://www.npmjs.com/package/express-session#compatible-session-stores 
    * https://www.npmjs.com/package/connect-mongo
* Complete Exercises 1-5


### Exercise 1 -- Sessions Demo

Explain how sessions work. Show the exercise 1 [deployed app](https://jasons-sandbox.herokuapp.com/) and note how everyone has a different high score when they refresh.

Show the cookies in developer console. Point out the configuration on the node package on how to change what the session cookie is.

Give time for questions. 

### Exercise 2 -- Mongo Sessions Demo

Demonstrate how to use a remote mongo datastore using activity 2 as a reference.

Give time for questions.



Challenge students to change the code in activity 2 to work with MySQL. **Time: 15 minutes**

### Exercise 3 -- Sessions Control

Students are challenged to change the code in exercise 3 to accomplish the following:

* Using sessions, lock down the `/private` page so it can only be accessed if the username and password have been successfully set. You should be able to open up the `/private` page in a new tab without having to resubmit the form after you have submitted it once.
* Update the route for `/logout` to reset the session and redirect the user to the homepage.


**Time: 20 minutes**

### Exercise 4 -- Create User and Log in

Students are challenged to update the code in exercise 4 to do the following:

1) Connect to a database of choice - MySQL or MongoDB.
2) When submitting the "create user" form, it will create a user in the database with their email and password. The user will then be redirected to the login page.
3) On the login form submission, the route will check the database for a matching username and password. If a match is found, update the session to set that matching user and redirect to the `/private` page.
4) Update the `/private` page to show the current session's email address.
5) Update the `/logout` route to reset the session and redirect the user back to the homepage.


**Time: 45 minutes**


### Hashing

Point out that the password in the database is stored in plain text. This is bad for security reasons. Point out libraries that can help with "hashing" passwords, such as https://github.com/kelektiv/node.bcrypt.js  

### Exercise 5 -- Command Line Hashing

Create a command line application that hashes the string passed to it.

Usage: node index.js somestringhere
Output: {hashedvalueofsomestringhere}

## Day 2 -- Password Hashing and React Sessions

Exercises 6-8

### Exercise 6 -- Change app to use hashing

The current application in this exercise lets you create create a user and saves the password in plain text. It also lets you "log in" by looking up that user by the email and password. 

The challenge here is to change the application to use bcrypt to hash the password when the user is being created, then to change how the password hash is validated in the login POST route handler. 

### Exercise 7 -- Sessions and React

This is a demonstration all the way through. Demo the whole app as it works. Then, when walking through the code, start through the backend API route calls (note that we're using memory storage). Once the backend calls are covered, start working through the `client/App.js`

### Exercise 8 -- Sessions and React Shared

This is a demonstration of React Hooks for sharing state across multiple components, making authentication state management a bit easier. It will start off as a demonstration and it turns into an exercise to enhance the application. See the [exercise readme](./activities/8-sessions-react-shared-state/) for more details.

## Day 3 -- Passport

_Will be covered by alternate instructor_
