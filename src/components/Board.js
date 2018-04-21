import React from 'react';
import './Board.css';
import Box from './Box';
export default class Board extends React.Component{     

    render(){
        let displayArray = [];
        for(let i=0; i<this.props.boxData.length; i++){
            
            displayArray.push(<Box boxArray={this.props.boxData} key={i} id={i}/>)
        }        
        return(
            <div id='boardParent'>
                <div>{displayArray}</div>
            </div>
        )
    }
}