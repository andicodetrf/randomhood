import React from 'react';

//every props have children
//Scroll is a new component created that wraps the cardlist component
        //style={{}} outer curly is JS exp, inner curly is an object and you can style that object
        //overflow-y (css)
        //overflowY (jsx)
const Scroll = (props) => {
    // console.log(props)
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    )

}

export default Scroll;





