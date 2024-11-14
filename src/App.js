// src/App.js

// Import the React library from 'react'.
// Even though we're not directly using React here, importing it can be necessary for JSX transformations,
// depending on your project's configuration and version of React.
import React from 'react'

// Import the 'PostForm' component from the 'components' directory.
// This component is responsible for rendering the form that allows users to add new posts.
import PostForm from './components/PostForm'

// Import the 'PostList' component from the 'components' directory.
// This component displays the list of posts fetched from the API or stored in the application's state.
import PostList from './components/PostList'

// Define the 'App' component as a functional component using an arrow function.
// The 'App' component serves as the root component of your application,
// and it composes the 'PostForm' and 'PostList' components to build the UI.
const App = () => (
  // Return a JSX element that will be rendered to the DOM.
  // The JSX syntax allows you to write HTML-like code in JavaScript.
  <div>
    {/* Render the 'PostForm' component to display the form for adding new posts. */}
    <PostForm />

    {/* Render a horizontal rule (<hr />) to visually separate the form from the list of posts. */}
    <hr />

    {/* Render the 'PostList' component to display the list of existing posts. */}
    <PostList />
  </div>
)

// Export the 'App' component as the default export of this module.
// This allows other files, like 'index.js', to import and use the 'App' component.
export default App
