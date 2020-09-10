import React, { Component } from 'react'

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }
    
    //its like trycatch. its react;s lifecyclehook
    componentDidCatch(){
        this.setState({hasError: true})
    }

    render(){
        if (this.state.hasError){
            return <h1> Oooppss! That is not good </h1>
        } 
        return this.props.children

    }
    
}


export default ErrorBoundary;