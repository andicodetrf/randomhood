import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
// import { ROBOTS } from "../robots";
import SearchBox from "../components/SearchBox.js";
import CardList from "../components/CardList.js";
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { requestRobots, setSearchField } from '../actions'

//------------------- REDUX --------------------------- 
//actions >> reducers >> store >> update view
//actions >>(action goes through middleware before hitting reducers)>> reducers >> store >> update view
//middleware for eg redux-logger(to log prevState & next State for the reducer), 
//middleware - redux-thunk (for async like ajax calls. a middleware that provides getState & dispatch fn that are passed on. handle sideeffects - like ajax calls) 


//------------------- REDUX ---------------------------

const mapStateToProps = state => {
    //the state searchfield that this is gonna return is going to be used as props in App.
    return {
        //state.reducerFn.action if there are many reducers and in index file calls for rootreducer. if only 1 and you made that as your reducer in index file, thn change to state.searchField
        searchField: state.searchRobots.searchField,
        // searchField: state.searchField
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error

    }
}

//dispatch is what triggers the action
//use dispatch to send actions to reducer
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),

        //work coz of redux thunk. request robots is gonna return a function
        onRequestRobots: () => dispatch(requestRobots())
    }
}


function App(props){
    const {searchField, robots, onRequestRobots, onSearchChange, isPending} = props
    // console.log(props.store.getState())
    // const [robots, setRobots] = useState([]);
    // const [searchField, setSearchField] = useState('');

    //now searchfield and onsearchange would come down as props from the store. 

 

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then( response => response.json())
        // .then(users => setRobots(users));
        // console.log('effect')
        onRequestRobots()
    }, [])

    
    // const onSearchChange = (event) => {
    //     setSearchField(event.target.value)
    // }; 
    
    const filteredRobots = robots.filter((rob) => {
        return rob.name
            .toLowerCase()
            .includes(searchField.toLowerCase());
    });

    console.log('renders')
    return (
            // !props.robots.length ? (
            isPending ? (
        
            <div className="tc main-load-div">
                <h1 className="tracking-in-expand">RandomHood</h1>
                <div className="loader"></div>
                <p> loading </p>
                <footer>
                    Adapted from RoboFriends - By Andi L
                </footer>
            </div>
            ) : (
        
            <div className="tc">
                <h1 className="tracking-in-expand">RandomHood</h1>
                <SearchBox searchChange={onSearchChange} />

                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>

                <footer className="pv4">
                Adapted from ZTM RoboFriends - <a href="https://andrealau.netlify.app/">Andi L</a>
                </footer>

            </div>
            
        )
    )

    
}

//connect is gonna run and return another function and that other function is gonna run App
//connect is gonna make App subscribe to any state changes in the redux store. 
//App is now aware of the redux store. now it needs to know which piece needs to be interested in the store, eg. searchfield and robots
export default connect(mapStateToProps, mapDispatchToProps)(App);
