Welcome to our LOFINO Coding Challenge!

Your task is to write a small client/server web application that lets you upload profiles of your pet so others can rate them.

# Prerequisites
- an installation of Node.js and npm
- your favorite IDE
- a possibility to upload the result, e.g Dropbox or Github

# Requirements  
Write a small web application consisting of a server and a JS-based frontend.

## Backend
- [x] provide a server application based on Node.js that serves an **API** over HTTP
- [ ] the API should serve details about a collection of pets stored in memory on the server:
  - [ ] an id
  - [ ] the species / class of the pet (e.g. 'dog', 'cat', etc)
  - [ ] the name of the pet
  - [ ] the age in years
  - [ ] the URL to a picture of the pet
  - [ ] information about ratings (see below)
- [ ] extend the API to allow users to add a pet to the collection
- [ ] extend the API to allow users to rate existing pets (e.g. give a rating of 1-5 per pet)
  - the ratings should be stored on the backend as well
- [ ] provide an endpoint that outputs the top pets of each species, i.e. best rated dog, cat etc. based on average rating in a structure like this:*
  ```json
  {
    "dog": {
      "id": ...,
      "name": ...,
      ...
    },
    "cat": {
      ...
    },
    "hamster": {
      ...
    }
  }
  ```

Use Node.js with an appropriate library to handle the requests. You can use the provided Express based skeleton or switch to another library. Other than that, feel free to use third party modules where appropriate.
You might also structure your files the way you think is appropriate.

You can keep the data in memory, no need to add a database for that.

\* note: there's no frontend part for that, in case you're wondering

## Frontend
- [ ] provide a frontend application based on React.js that consumes the backend API
- [ ] create a start page that lists all the pets with their infos
  - [ ] display the name, age, race, and image
  - [ ] display the average rating and the number of ratings
  - [ ] add an input element that lets the user rate the pet (which sends the rating to the backend)
- [ ] provide a page that lets the user add a new pet to the collection
  - [ ] for the image URL, it suffices to provide a text field for the user to paste the URL into
  - [ ] if the user clicks on a *submit* button the user should be sent back to the start page and the new pet should be visible in the list

See the attached mockups ([here](mockups/startpage.png) and [here](mockups/post-pet.png)) for inspiration about the individual pages. You don't have to stick to this layout. Also, no need to get overly fancy with CSS but try to add some basic formatting.

# Getting started
- install dependencies on the backend
- start the backend app with `npm start`
  ```bash
  cd backend
  npm install
  ```
- use an HTTP client like `curl` or `Postman` to see if the server is responding to requests.
  - `curl http://localhost:8080/hello` -> `Hello World!`

- install dependencies on the frontend
- start the frontend with `npm `
  ```bash
  cd frontend
  npm install
  ```
- open `http://localhost:3000/` with your web browser

# Some Notes
- Focus on code quality and working software, try to follow best practices.
- Keep an eye on security, usability etc.
- If you feel you're stuck on something, work on something else instead
- Feel free to add comments on the code if you want to explain something or on a place that could be improved
  - you can also add comments on the bottom of this document
- When you're done send me an email to tobias.hann@lofino.de with a link to your finished project

# Your Notes
Here you can add your own notes and comments about the project.
For example, what trade offs did you have to decide for? What would you have done differently if you had more time?
