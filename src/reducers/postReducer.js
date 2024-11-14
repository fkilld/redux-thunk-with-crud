// src/reducers/postReducer.js

const initialState = {
  // Define the initial state for the post reducer
  posts: [], // Initialize posts as an empty array
  loading: false, // Initialize loading as false, indicating no ongoing request
  error: null, // Initialize error as null, indicating no errors
}

const postReducer = (state = initialState, action) => {
  // Define the postReducer function that takes the current state and an action as parameters
  switch (
    action.type // Switch statement to handle different action types
  ) {
    case 'FETCH_POSTS_REQUEST': // Handle request actions for fetching, adding, updating, and deleting posts
    case 'ADD_POST_REQUEST':
    case 'UPDATE_POST_REQUEST':
    case 'DELETE_POST_REQUEST':
      return { ...state, loading: true } // Set loading to true to indicate a request in progress

    case 'FETCH_POSTS_SUCCESS': // Handle successful fetch action
      return { ...state, loading: false, posts: action.payload } // Update posts with fetched data and set loading to false

    case 'ADD_POST_SUCCESS': // Handle successful add action
      return {
        ...state, // Spread the existing state
        loading: false, // Set loading to false
        posts: [...state.posts, action.payload], // Add the new post to the existing posts array
      }

    case 'UPDATE_POST_SUCCESS': // Handle successful update action
      return {
        ...state, // Spread the existing state
        loading: false, // Set loading to false
        posts: state.posts.map(
          (
            post // Map over posts to update the modified post
          ) => (post.id === action.payload.id ? action.payload : post) // Replace the post if IDs match; otherwise, keep the original
        ),
      }

    case 'DELETE_POST_SUCCESS': // Handle successful delete action
      return {
        ...state, // Spread the existing state
        loading: false, // Set loading to false
        posts: state.posts.filter((post) => post.id !== action.payload), // Filter out the post with the given ID
      }

    case 'FETCH_POSTS_FAILURE': // Handle failure actions for fetching, adding, updating, and deleting posts
    case 'ADD_POST_FAILURE':
    case 'UPDATE_POST_FAILURE':
    case 'DELETE_POST_FAILURE':
      return { ...state, loading: false, error: action.payload } // Set loading to false and update error with the error message

    default: // Default case if no matching action type is found
      return state // Return the current state unchanged
  }
}

export default postReducer // Export the postReducer function as the default export
