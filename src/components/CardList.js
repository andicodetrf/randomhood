import React from "react";
import Card from "./Card";

//wrap js in {} when in a html div, so it knows to evaluate

//reads the props received from App.js (Parent) and render smth. this is a pure function. receive same input and will return the same output. deterministic. - pure components - no need to know about anything other than the pure function that it receives smth and returns smth
const CardList = ({ robots }) => {

    //to display error in development. log detail error will not display in actual deployed state, keep refreshing to see
    // if (true){
    //     throw new Error('Noooo')
    // }


	//need provide a key=id especially for loop so that if that card gets deleted, react would know to change the DOM for that one card instead of scanning through and changing all
	// const cardComponent = robots.map((user, i) => {
	// 	return (
	// 		<Card
	// 			key={i}
	// 			id={robots[i].id}
	// 			name={robots[i].name}
	// 			email={robots[i].email}
	// 		/>
	// 	);
	// });

	return (
            <div>
            {
                robots.map((user, i) => {
                    return(
                    <Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />  
                    
                    )
                })
            }
            {/* {cardComponent} */}
        </div>
    )
};

export default CardList;
