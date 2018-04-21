import React from 'react';
import './Reset.css';
import {resetState} from '../actions';
import { connect } from 'react-redux';
export class Reset extends React.Component{      
    
    onReset(){
            console.log('onreset')
            this.props.dispatch(resetState())
        }

    render(){
  
        return(
            <div id='resetBG'>
                <div id='resetBGTwo'>
                    <button id='resetBtn' onClick={()=>{this.onReset()}}>Reset</button>
                </div>
            </div>
        )
    }
}

export default connect()(Reset);