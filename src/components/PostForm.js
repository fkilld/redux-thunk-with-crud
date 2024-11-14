// src/components/PostForm.js
import React, { useState } from 'react' // Import React and the useState hook for managing state
import { useDispatch } from 'react-redux' // Import useDispatch hook from react-redux for dispatching actions
import { addPost } from '../actions/postActions' // Import the addPost action creator

const PostForm = () => {
  // Define a functional component named PostForm
  const [title, setTitle] = useState('') // Initialize 'title' state variable with an empty string
  const [body, setBody] = useState('') // Initialize 'body' state variable with an empty string
  const dispatch = useDispatch() // Get the dispatch function from Redux to dispatch actions

  const handleSubmit = (e) => {
    // Define a function to handle form submission
    e.preventDefault() // Prevent the default form submission behavior
    dispatch(addPost({ title, body })) // Dispatch the addPost action with title and body as payload
    setTitle('') // Reset the 'title' state variable to an empty string
    setBody('') // Reset the 'body' state variable to an empty string
  }

  return (
    // Return the JSX to render the component
    <div>
      {' '}
      {/* Root div container */}
      <h2>Add New Post</h2> {/* Heading for the form */}
      <form onSubmit={handleSubmit}>
        {' '}
        {/* Form element with onSubmit handler */}
        <div>
          {' '}
          {/* Container for the title input */}
          <label>Title:</label> {/* Label for the title input */}
          <br /> {/* Line break */}
          <input
            value={title} // Set the value of the input to the 'title' state variable
            onChange={(e) => setTitle(e.target.value)} // Update 'title' state on input change
            required // Make the input field required
          />
        </div>
        <div>
          {' '}
          {/* Container for the body textarea */}
          <label>Body:</label> {/* Label for the body textarea */}
          <br /> {/* Line break */}
          <textarea
            value={body} // Set the value of the textarea to the 'body' state variable
            onChange={(e) => setBody(e.target.value)} // Update 'body' state on textarea change
            required // Make the textarea field required
          ></textarea>
        </div>
        <button type='submit'>Add Post</button>{' '}
        {/* Submit button for the form */}
      </form>
    </div>
  )
}

export default PostForm // Export the PostForm component as the default export
