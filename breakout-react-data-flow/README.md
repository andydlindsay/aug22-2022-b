# BREAKOUT - React Data Flow

### To Do
- [x] Review React Data Flow
- [x] Model Data Flow for Tweeter
- [x] Q&A

### Two Main Types of Data
* props - data from outside the component
* state - data that belongs to a component

### Prop Drilling
* props pass through a component that doesn't use them (eg. a prop is passed from grandparent to grandchild, but needs to go through the parent)

### Example Data Flow
* App - store the `products`
  * Home - props `products`
  * About
  * Products - props `products`

### Tweeter Components
* TweetListItem - display an individual Tweet
* TweetList - a list of tweets
* Navbar - display navigation
* UserAvatar - display the user's picture
* TweetForm - tweet creation component
* ErrorMessage - display error message

### Tweeter Data Flow
* App - state user info, tweets info, helpers to update state `createTweet`
  * Navbar - props (user)
  * UserAvatar - props (user)
  * TweetForm - props (user), state (newTweet) props.createTweet(tweet)
    * ErrorMessage - props (error state)
  * TweetList - props (tweets)
    * TweetListItem - props (tweet)
      * TweetAvatar
        * TweetImage
      * TweetBody
      * TweetFooter

### Demo: State Update Helper function
```js
// inside App
const [products, setProducts] = useState([]);

// create a helper that is responsible for updating state
const createProduct = (newProduct) => {
  $.post('/products', {newProduct})
    .then(() => {
      setProducts([...products, newProduct]);
    });
};

// render the Products component <Product /> and pass down our helper function
Products({ products, createProduct });

// inside Products, call the helper function with our new product data
props.createProduct(newProduct);
```
