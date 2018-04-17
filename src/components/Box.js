import React from 'react';
import './Box.css';
import { registerMove, registerChain } from '../actions';
import {connect} from 'react-redux';

export class Box extends React.Component{
    constructor(props){
        super(props);
        this.state = {chain: []}
    }
    boxClicked(id, currentPlayer){
        let results;
        let nextPlayer;
        if(currentPlayer === 'white'){
            nextPlayer =  'black';
        }
        else{
            nextPlayer = 'white'
        } 
        if(this.props.boxArray[id].color){
            alert('Spot already taken')
        }
        else{
            this.props.dispatch(registerMove(id, currentPlayer, nextPlayer))
            this.chainFinder(id, currentPlayer, nextPlayer, this.props.boxArray)
        }        

    }

    chainFinder(currentSpot, currentPlayer, nextPlayer, array){
        let NW = -9;
        let N = -8;
        let NE = -7;
        let W = -1;
        let E = 1;
        let SW = 7;
        let S = 8;
        let SE = 9; 
        let spotTracker = currentSpot;
        let directionArray = [NW, N, NE, W, E, SW, S, SE]
        // loop through the different directions
        for(let i =0; i<directionArray.length; i++){
            spotTracker = currentSpot; 
            // console.log('-----------------------------')
            // console.log(`for loop running for ${directionArray[i]} direction`)               
            let results = [];
            // check that the first spot in each direction to scan is not off the board
            if(array[spotTracker + directionArray[i]]){
                // console.log('next spot is not off the board')
                // if the next spot is the opposite of the piece placed...        
                while(array[spotTracker + directionArray[i]].color === nextPlayer){
                    // console.log('while loop running... next spot is the opposite')
                    if(spotTracker + directionArray[i] <= 7 || spotTracker + directionArray[i] >=56){
                        // console.log(`end of board: ${results}`)
                        spotTracker = currentSpot;                        
                        return;
                    }
                   else {
                       results.push(spotTracker + directionArray[i]);
                    // increment the spot tracker to keep moving forward
                        spotTracker = spotTracker + directionArray[i];
                    // if the next spot is the current player, end of chain  
                        if(array[spotTracker + directionArray[i]].color === currentPlayer){
                            // console.log(`current player ${currentPlayer} next spot of same color is ${spotTracker + directionArray[i]}`)
                            // console.log(`end of chainchain found: ${results}`)
                            this.props.dispatch(registerChain(results, currentPlayer))
                            return;                     
                   }              
                }        
            }                 
        }
    }
    }
    render(){
        let arraySpot = this.props.boxArray[this.props.id];

      
        return(
            <div onClick={()=>{this.boxClicked(this.props.id, this.props.currentPlayer)}} className='box'>{this.props.id}
                <div className={arraySpot.color}></div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
currentPlayer: state.playerTurn,
boxArray: state.boxArray
});
export default connect(mapStateToProps)(Box);