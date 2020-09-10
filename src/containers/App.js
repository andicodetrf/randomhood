import React, { Component } from "react";
// import { robots } from "./robots";
import SearchBox from "../components/SearchBox.js";
import CardList from "../components/CardList.js";
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

// const state ={
//     robots: robots,
//     searchfield: ''
// }

//STATE - an object that describes your application. & state that decribes this application is the robots and whatever is entered in the search box and state is able to change, able to change the value of the search box (val of input) and change what gets displayed.
//a parent feeds state into a child component and as soon as child component receive a state, it is a property; that child can never change that property. the parent just tells it what state is, and the child receives as robot.

//PROPS - property that we keep passing down. props are always just input that we get and we never modify them. props are things that come out of State


//CHILDREN - 

//state usually live in parent component. things that can change and affect our app. the parent component that passes the state to diff children components
class App extends Component {
	//constructor & render methods are prebuilt React component methods
	constructor() {
		super()
		this.state = {
            // robots: robots,
			robots: [],
			searchfield: "",
        };
        
        // console.log('1')
	}


    //fetch is a window object. a tool that lets us make requests to servers
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())
        .then(users => {this.setState({robots: users})});
        // .then( response => {
        //     return response.json();
        // })
        // .then(users => {
        //     this.setState({robots: users});
        // });
        // 
        // console.log('2')
    }



	//custom function for search
	//
	onSearchChange = (event) => {
		// console.log(event.target.value);
		//searchfield starts with '', then whenever you type into the searchbox, searchfield gets updated with input below
		this.setState({ searchfield: event.target.value });
		//never do this.state.searchfield = xxx

		//the value of this.state.robots is not refering to the App. instead referring to the input value (coz the event happend in the input) which does not have a state. therefore, must always do onsearchchange = (event) => { } instead of onsearchchange(event) {} so that this.state.robots will reference this App (Parent)


        //put this filter into render to render the filtered robot page.
		// const filteredRobots = this.state.robots.filter(rob => {
		//     return rob.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		// })
		// console.log(filteredRobots);
	};

	render() {
        // //if you dont want to keep doing this.state.robots then destructure here:
        // const {robots, searchfield } = this.state;

        const filteredRobots =
        this.state.robots.filter((rob) => {
			return rob.name
				.toLowerCase()
                .includes(this.state.searchfield.toLowerCase());

        });
        //if it is an if else, can make it into ternary
        // if (!this.state.robots.length){
            //means if robots == 0 (which naturally is false), make it true via ! and execute this if block
            
            return !this.state.robots.length ? 
            (
                <div className="tc main-load-div">
                    <h1 className="tracking-in-expand">RandomHood</h1>
                    <div className="loader"></div>
                    <p> loading </p>
                    <footer>
                        Adapted from RoboFriends - By Andi L
                    </footer>
                </div>
            ) : 
            (
                <div className="tc">
                    <h1 className="tracking-in-expand">RandomHood</h1>
                    <SearchBox searchChange={this.onSearchChange} />
    
                    {/* its now referencing App's constructor this.state robots:robots and passed down as props to cardlist etc*/}
    
                    {/* SHOWING ALL ROBOTS (WITH & WITHOUT STATE)*/}
                    {/* <CardList robots={this.state.robots} /> */}
                    {/* <CardList robots={robots} /> */}
    
                    {/* SHOWING ALL OR FILTERED ROBOTS */}
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

        //     if(!this.state.robots.length){
        //     return (
        //         <div className="tc main-load-div">
        //             <h1 className="tracking-in-expand">RoboFriends</h1>
        //             <div className="loader"></div>
        //             <p> loading </p>
        //             <footer>
        //                 footer
        //             </footer>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div className="tc">
        //             <h1 className="tracking-in-expand">RoboFriends</h1>
        //             <SearchBox searchChange={this.onSearchChange} />
    
        //             {/* its now referencing App's constructor this.state robots:robots and passed down as props to cardlist etc*/}
    
        //             {/* SHOWING ALL ROBOTS (WITH & WITHOUT STATE)*/}
        //             {/* <CardList robots={this.state.robots} /> */}
        //             {/* <CardList robots={robots} /> */}
    
        //             {/* SHOWING ALL OR FILTERED ROBOTS */}
        //             <Scroll>
        //                 <CardList robots={filteredRobots} />
        //             </Scroll>

        //             <footer className="pv4">
        //                 footer
        //             </footer>
    
        //         </div>
        //     );


        // }
		
	}
}

export default App;
