// src/actions/postActions.js
import axios from 'axios' // Import axios for making HTTP requests

const API_URL = 'https://jsonplaceholder.typicode.com/posts' // Define the base API URL for posts

// Action to fetch posts from the API
export const fetchPosts = () => async (dispatch) => {
  // Define an asynchronous fetchPosts function using Redux Thunk
  dispatch({ type: 'FETCH_POSTS_REQUEST' }) // Dispatch an action to indicate the fetch request has started
  try {
    const response = await axios.get(API_URL) // Make a GET request to fetch posts from the API
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data }) // Dispatch success action with fetched data as payload
  } catch (error) {
    dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message }) // Dispatch failure action with error message as payload
  }
}

// Action to add a new post to the API
export const addPost = (post) => async (dispatch) => {
  // Define an asynchronous addPost function using Redux Thunk
  dispatch({ type: 'ADD_POST_REQUEST' }) // Dispatch an action to indicate the add request has started
  try {
    const response = await axios.post(API_URL, post) // Make a POST request to add a new post with data from the 'post' parameter
    dispatch({ type: 'ADD_POST_SUCCESS', payload: response.data }) // Dispatch success action with added post data as payload
  } catch (error) {
    dispatch({ type: 'ADD_POST_FAILURE', payload: error.message }) // Dispatch failure action with error message as payload
  }
}

// Action to update an existing post in the API
export const updatePost = (post) => async (dispatch) => {
  // Define an asynchronous updatePost function using Redux Thunk
  dispatch({ type: 'UPDATE_POST_REQUEST' }) // Dispatch an action to indicate the update request has started
  try {
    const response = await axios.put(`${API_URL}/${post.id}`, post) // Make a PUT request to update a post by its ID
    dispatch({ type: 'UPDATE_POST_SUCCESS', payload: response.data }) // Dispatch success action with updated post data as payload
  } catch (error) {
    dispatch({ type: 'UPDATE_POST_FAILURE', payload: error.message }) // Dispatch failure action with error message as payload
  }
}

// Action to delete a post from the API
export const deletePost = (id) => async (dispatch) => {
  // Define an asynchronous deletePost function using Redux Thunk
  dispatch({ type: 'DELETE_POST_REQUEST' }) // Dispatch an action to indicate the delete request has started
  try {
    await axios.delete(`${API_URL}/${id}`) // Make a DELETE request to delete a post by its ID
    dispatch({ type: 'DELETE_POST_SUCCESS', payload: id }) // Dispatch success action with deleted post ID as payload
  } catch (error) {
    dispatch({ type: 'DELETE_POST_FAILURE', payload: error.message }) // Dispatch failure action with error message as payload
  }
}
