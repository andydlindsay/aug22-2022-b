# BREAKOUT - React Data Flow

### To Do
- [x] Review React Data Flow
- [x] Model Data Flow for Tweeter
- [x] Q&A

### Two Main Types of Data
* props - data from outside the component
* state - data that belongs to a component

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

App - state user info, tweets info, helpers to update state `createTweet`
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


prop drilling - props pass through a component that doesn't use them



getInterviewersForDay(state, state.day); => [interviewers]

day
days
interviewers
appointments


inside App
const newProduct = (newProduct) => {
  $.post('/products', {newProduct})
    .then(() => {
      setProducts([...products, newProduct]);
    });
};
Products({ products, newProduct })

inside Products
props.newProduct(product)



