import React, { useState, useEffect } from "react";
import { ROBOTS } from "../robots";
import SearchBox from "../components/SearchBox.js";
import CardList from "../components/CardList.js";
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


function App(){

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0)
    //useEffect gets called after every render (by default, without 2nd arg) - it will run endlessly if there is a setState or fetch within. ordinary function or console log will run only once. 
    //with 2nd arg [] ---> it acts like componentDidMount. runs only once after the first render
    //with a state or states included in 2nd arg, UE will watch if there is any changes (comparison) between previous and now, if there is, then it fires.

    //Sequence with [] as 2nd arg (similar to CMD):
    //1. state is updated with initialized empty [] for robots
    //2. renders
    //3. useEffect fires -fetch Data and mount like ComponentDidMount - updates robots state, trigger re-render
    //4. renders

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())
        .then(users => setRobots(users));
        console.log('effect')
    }, [])

    //to show 2nd param comparison for useEffect
    // useEffect(() => {
    //     console.log('UE Count', count)
    // }, [count])
    
    const onSearchChange = (event) => {
        setSearchfield(event.target.value)

    }; 
    
    const filteredRobots = robots.filter((rob) => {
        return rob.name
            .toLowerCase()
            .includes(searchfield.toLowerCase());
    });

    console.log('renders')
    return (
            !robots.length ? (
        
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
                {/* <div>{count}</div>
                <button onClick={()=>setCount(count+1)}>Count Up</button> */}
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


export default App;
