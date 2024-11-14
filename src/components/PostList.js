// src/components/PostList.js
import React, { useEffect } from 'react' // Import React and the useEffect hook for side effects
import { useSelector, useDispatch } from 'react-redux' // Import hooks to interact with the Redux store
import { fetchPosts, deletePost } from '../actions/postActions' // Import action creators for fetching and deleting posts

const PostList = () => {
  // Define a functional component named PostList
  const dispatch = useDispatch() // Get the dispatch function to dispatch actions to the Redux store
  const { posts, loading, error } = useSelector((state) => state.postState) // Extract posts, loading, and error from the Redux state

  useEffect(() => {
    // useEffect hook to perform side effects after the component renders
    dispatch(fetchPosts()) // Dispatch the fetchPosts action to load posts from the API
  }, [dispatch]) // Dependency array; runs the effect whenever dispatch changes

  const handleDelete = (id) => {
    // Define a function to handle the deletion of a post
    dispatch(deletePost(id)) // Dispatch the deletePost action with the post's ID
  }

  if (loading) return <p>Loading...</p> // If loading is true, display a loading message
  if (error) return <p>Error: {error}</p> // If there's an error, display the error message

  return (
    // Return the JSX to render the component UI
    <div>
      {' '}
      {/* Root div container */}
      <h2>Posts List</h2> {/* Heading for the list of posts */}
      {posts.map(
        (
          post // Map over the posts array to render each post
        ) => (
          <div key={post.id}>
            {' '}
            {/* Container for each post, using post ID as the key */}
            <h3>{post.title}</h3> {/* Display the title of the post */}
            <p>{post.body}</p> {/* Display the body/content of the post */}
            {/* Add update functionality as needed */} 
            <button onClick={() => handleDelete(post.id)}>Delete</button>{' '}
            {/* Button to delete the post */}
          </div>
        )
      )}
    </div>
  )
}

export default PostList // Export the PostList component as the default export
