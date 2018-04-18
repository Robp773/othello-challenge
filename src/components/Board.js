import React from 'react';
import './Board.css';
import Box from './Box';
export default class Board extends React.Component{

    constructor(props){
        super(props);
        this.state = {displayArray: []}
        
    }
    componentWillMount(){        
        let displayArray = [];
        for(let i=0; i<this.props.boxData.length; i++){
            displayArray.push(<Box key={i} id={i}/>)
        }            
        this.setState({displayArray: displayArray})
    }

    render(){

        return(
            <div id='boardParent'>Board
                <div>{this.state.displayArray}</div>
            </div>
        )
    }
}