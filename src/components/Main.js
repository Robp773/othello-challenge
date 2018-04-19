import React from 'react';
import Board from './Board'
import {connect} from 'react-redux';
import Banner from './Banner';
import {updateTotals} from '../actions'


export class Main extends React.Component{

    componentWillUpdate(){
        let whiteTotal = 0;
        let blackTotal = 0;
        let spacesTotal;
        for(let i=0; i<this.props.boxArray.length; i++){
            if(this.props.boxArray[i].color !== null){
                this.props.boxArray[i].color === 'white' ? whiteTotal++ : blackTotal++;
            }
        }
        spacesTotal = 64 - whiteTotal - blackTotal;        
        this.props.dispatch(updateTotals(whiteTotal, blackTotal, spacesTotal))
    }

    render(){
        return(            
            <div>
                <Banner 
                    whiteTotal={this.props.whiteTotal} 
                    blackTotal={this.props.blackTotal}
                    spaceTotal={this.props.spacesTotal}
                    playerTurn={this.props.playerTurn}
                />
                <Board 
                    turn={this.props.playerTurn} 
                    boxData={this.props.boxArray}
                />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    newGame: state.newGame,
    playerTurn: state.playerTurn,
    boxArray: state.boxArray,
    whiteTotal: state.whiteCount,
    blackTotal: state.blackCount,
    spacesTotal: state.spaceCount,
});
export default connect(mapStateToProps)(Main);