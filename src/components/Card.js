import React from 'react';

const Card = (props) => {
    const {name, email, id} = props;
    return (
        // <h1>RoboFriends</h1>
        
        <div className="bg-navy yellow dib br3 ma2 ph4 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?set=set5`} width="200px" height="200px"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        
    )
}

export default Card;