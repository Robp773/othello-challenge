import React from 'react';
import Board from './Board'
import {connect} from 'react-redux';
import Banner from './Banner';
import Reset from './Reset';
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
        console.log(this.props.spacesTotal)
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
                <Reset/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    playerTurn: state.playerTurn,
    boxArray: state.boxArray,
    whiteTotal: state.whiteCount,
    blackTotal: state.blackCount,
    spacesTotal: state.spaceCount,
});
export default connect(mapStateToProps)(Main);