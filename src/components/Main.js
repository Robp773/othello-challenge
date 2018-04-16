import React from 'react';
import Board from './Board'
import {connect} from 'react-redux';
import Box from './Box';


export class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            // <Banner/>
            <div>
                <Board turn={this.props.playerTurn} boxData={this.props.boxArray}/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    newGame: state.newGame,
    playerTurn: state.playerTurn,
    boxArray: state.boxArray
});
export default connect(mapStateToProps)(Main);