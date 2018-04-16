import React from 'react';
import './Box.css';
import { registerMove } from '../actions';
import {connect} from 'react-redux';

export class Box extends React.Component{
  
    boxClicked(id, currentPlayer){

        let NW = -9;
        let N =-8;
        let NE =-7;
        let W =-1;
        let E = 1;
        let SW = 7;
        let S = 8;
        let SE = 9; 
        let directionArray = [NW, N, NE, W, E, SW, S, SE]

        let nextPlayer;
        if(currentPlayer === 'white'){
            nextPlayer =  'black';
        }
        else{
            nextPlayer = 'white'
        }        
        
        this.props.dispatch(registerMove(id, currentPlayer, nextPlayer))
        console.log('--------------------------')
        console.log(`box ${id} clicked by ${currentPlayer} player`)
        for(let i = 0; i<directionArray.length; i++){        
            let resultArray = [];
            if(this.props.boxArray[id+directionArray[i]]){
                if(this.props.boxArray[(id+directionArray[i])].color === currentPlayer){
                console.log(`the box ${directionArray[i]} spaces away is the same color`);
            }
            else if(this.props.boxArray[(id+directionArray[i])].color === -1){
                console.log('off the board')
            }

            else if(this.props.boxArray[(id+directionArray[i])].color === null){
                console.log(`empty space ${directionArray[i]} spaces away`)
            }

            // if the adjacent piece does not come back as null/undefined/or the same as the
            // current player's piece, call the chainFinder function
            else {
                console.log(`the box to the ${directionArray[i]} is the opposite color`);
                this.chainFinder(id, currentPlayer, this.props.boxArray, directionArray[i])
            }

            }
        } 

    }

    chainFinder(currentSpot, currentPlayer, array, direction){
        let resultsArray = [currentSpot]
        // continue checking in the same direction until
            // hitting an undefined or null spot - should break the chain and return
            // hitting a spot that matches the same color as the currentPlayer
                // this should return a results array of index spots to be flipped over

    //         let indexCounter;
    //     while(!(typeof(array[currentSpot +direction].color) === 'undefined')){
    //           indexCounter = currentSpot + direction
    //           console.log(array[indexCounter])
    //     }                
    }



    render(){
        let arraySpot = this.props.boxArray[this.props.id];

      
        return(
            <div onClick={()=>{this.boxClicked(this.props.id, this.props.currentPlayer)}} className={`box ${arraySpot.color}`}></div>
        )
    }
}

const mapStateToProps = state => ({
currentPlayer: state.playerTurn,
boxArray: state.boxArray
});
export default connect(mapStateToProps)(Box);