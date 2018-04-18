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
                // if the next spot is the opposite of the piece placed...        
                while(array[spotTracker + directionArray[i]].color === nextPlayer){
                    // if the next spot goes off the board return
                    if(spotTracker + directionArray[i] <=0 || spotTracker + directionArray[i] >=63 ){
                        return;
                    }
                    else if(directionArray[i] === 1 || directionArray[i] === -1){
                        let overlapArray = [8 ,16, 24, 32, 40, 48, 56, 7, 15, 23, 31, 39, 47, 55]

                        for(let y=0; y<overlapArray.length; y++){
                            if(spotTracker + directionArray[i] === overlapArray[y]){
                                return;
                            }
                        }
                    }

                        // if current spot being checked is on the top or bottom edges of the board
                      else if(spotTracker + directionArray[i] <=7 || spotTracker + directionArray[i] >=56){
                            // and the direction being searched is left to right 
                            // the next spot is the opposite player end the chain and return 
                            if(array[spotTracker + directionArray[i]].color === nextPlayer && directionArray[i] * directionArray[i] !== 1){
                                return;
                            }
                            // else if the current spot was found going north/south or diagonally
                            // and the current player's piece is found 
                            else if(array[spotTracker + directionArray[i]].color === currentPlayer){
                                // if there was a chain involved at this point, send it to store
                                if(results.length > 0){
                                    this.props.dispatch(registerChain(results, currentPlayer))
                                    return;             
                                }
                            }
                        }
                       results.push(spotTracker + directionArray[i]);
                        // increment the spot tracker to keep moving forward
                        spotTracker = spotTracker + directionArray[i];
                        // if the next spot is the current player, end of chain  
                        if(array[spotTracker + directionArray[i]].color === currentPlayer){
                            // console.log(`current player ${currentPlayer} next spot of same color is ${spotTracker + directionArray[i]}`)
                            // console.log(`end of chainchain found: ${results}`)
                            this.props.dispatch(registerChain(results, currentPlayer))                     
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