# W03D02 - CRUD with Express

### To Do
- [x] Implement CRUD over HTTP with Express
- [x] Render data for the user using EJS templates
- [x] Use forms to submit HTTP requests
- [x] Explore the Post-Redirect-Get pattern
- [x] Using Chrome DevTools to see requests and responses
- [x] Practice debugging Express

### CRUD/BREAD
Create
Read
Update
Delete

Browse - retrieve all of a resource
Read - retrieve a particular resource
Edit - edit a resource
Add - create a new resource
Delete - delete a resource

server-side rendering => create the html on the server side


```js
const returnHTML = (locals) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Breads!</title>
    </head>
    <body>
      <h1>All the breads!</h1>

      <% console.log(locals.breads) %>
    </body>
    </html>
  `;
};
```


Edit Process
* GET serve up a form for the user to edit
* POST that form to our server to make the update

?newBreadName=cinnamon+loaf

https://www.google.com/search?
q=javascript
&rlz=1C1RXQR_enCA942CA942
&oq=javascript&aqs=chrome..69i57j69i59l2j69i60l2j69i65l3.1054j1j1&sourceid=chrome&ie=UTF-8

POST - REDIRECT - GET
