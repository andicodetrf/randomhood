import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants'


export const setSearchField = (text) => {
    console.log(text) //toshow you everything you type is being sent through the actions
    
    return {
        
        type: CHANGE_SEARCH_FIELD, //action. capitalized coz its a constant. convention. 
        payload: text //sending whatever data to the reducer
    }
    
}

//requestRobots action becomes a higher order function where it returns dispatch function
//redux thunk recognises that this action is gonna return a function hence it'll give it 'dispatch' in order for the scoped functions to be called

// when requestrobots run as action. the flow is: 
// 1. it goes into the thunk middleware and dispatch 1st function request-robots-pending to the reducer. 
// 2. when it returns a result in thunk, thunk will dispatch either success or error to the reducer

export const requestRobots = () => (dispatch) => {
    
    dispatch({type: REQUEST_ROBOTS_PENDING});     
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( data => dispatch({
        type: REQUEST_ROBOTS_SUCCESS, 
        payload: data
    }))
    .catch(error => dispatch({
        type: REQUEST_ROBOTS_FAILED, 
        payload: error
    }))
    
}


