## Example express server

### Getting started

1. clone this repo
2. cd into the directory
3. Install the npm dependencies: `npm install`
4. Run the server with `node src/index.js` or `nodemon src/index.js` (for auto reloading)

### In postman

Now the server is running. You can go to

http://localhost:8000/

or

http://localhost:8000/robot

You can also make POSTMAN requests to:

POST:
http://localhost:8000/robot/

PUT:

http://localhost:8000/robot/

DELETE:
http://localhost:8000/robot/r2d2/

DELETE:
http://localhost:8000/robot/r2d2/part/eye

The server and all of the express routes are defined in `src/index.js`
