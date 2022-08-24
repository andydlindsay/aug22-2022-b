# W01D03 - Objects in JS

### To Do
- [x] Review primitive types
- [x] Objects!
- [x] Passing primitives and objects to functions
- [x] Functions inside objects (using `this`)
- [x] Object iteration with `for..in`

Use for..of with everything except objects because Of and Object both start with 'O'

Everything that isn't a primitive is an object


### JS Types

```js
// primitives
const str = 'string';
const num = 42;
const bool = true;
const undef = undefined;
const nul = null;
const sym = Symbol('hello');
const bigInt = 37493794n;

const arr = [];
```


const user = findUserByEmail('a@a.com')

const findUserByEmail = function(email) {
  for (const user of users) {
    if (user.email === email) {
      return user;
    }
  }
}


if (user.username) {
  // user has a key of username with a non-falsey value
} else {
  // no key or falsey value for key
}







