import React from 'react';
import Board from './Board'
import {connect} from 'react-redux';
import Banner from './Banner';
import Reset from './Reset';
import {updateTotals} from '../actions'


export class Main extends React.Component{

    render(){
        console.log('render')
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