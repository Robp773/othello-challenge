function getInitialState() {
	let boxArray = [];
	boxArray.length = 64;
	boxArray.fill({color: null}, 0, 64);
	boxArray[27] = {color: 'white'};
	boxArray[36] = {color: 'white'};
	boxArray[28] = {color: 'black'};
	boxArray[35] = {color: 'black'};
	return {
		newGame: true,
		playerTurn: 'white',
		whiteCount: 2,
		blackCount: 2,
		spaceCount: 60,
		chainArray: [],
		boxArray: boxArray,
	};
}

export const reducer =  (state = getInitialState(), action) =>{

    // need to figure out how to do this differently
    if(action.type === 'REGISTER_MOVE'){
        const newState = {...state};
        newState.boxArray[action.boxNum] = {color: action.currentPlayer}
        newState.playerTurn = action.nextPlayer;
        return Object.assign({}, newState);
    }

    if(action.type === 'REGISTER_CHAIN'){
        for(let i=0; i<action.chainArray.length; i++){
            state.boxArray[action.chainArray[i]].color = action.player
        }
       return Object.assign({}, state, {chainArray: action.chainArray})
    };

    if(action.type === 'UPDATE_TOTALS'){
        return Object.assign({}, state, {whiteCount: action.whiteTotal, blackCount: action.blackTotal, spaceCount: action.spacesTotal})
    }

    if(action.type === 'RESET_STATE'){
        return Object.assign({}, getInitialState());
    }
    
return state;
}
