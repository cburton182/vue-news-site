# news-project

This README is a summary of the goals I had for this project, as well Vue features I used to implement those goals

### Dynamically Render data brought in from an API

I wanted to make reusable components that can be rendered with data from the top level of the application.
Good examples of this are the CardFrontPage, CardSection, and SignUpForm components
The cards that make up each Article, receive data using props, such as image url, headline text, and category

### V-for loop to create components for each item in an array

My goal was to send an array of stories and use one customizable component iterated over to create each Article
I also used the index for each iteration to dynamically style the cards. The index determined grid placement

### Other v-directives and Props

I my brief time with Vue, Props and V-directives seem to provide the most utility so far. I used them as much as I could.

### Emit custom events

And passing them up to the top level to be handled.
This is done in both the Navbar and SignUp form

### Use a lifecycle hook

I only scratched the surface with lifecycle hooks and look forward to exploring more.
I used created() to fetch data from an API and prepare that data to be used by my applications components.

This is not Vue specific, but I also consumed the fetch promise using async / await and used some array methods like map, filter
as well as the spread operator to perform some logic to setup the app.

### Dynamic style

Each section is colored dynamically, making them more customizable.
I also enjoyed being able to scope a components style. It allowed me to worry less about using complicated CSS selectors.

### Vue Router

I set up Views and routed to them using the View Router. I plan on learning more about the router and updating this project with it
in the future. My goal is to use params to route to an article page for each specific headline.
