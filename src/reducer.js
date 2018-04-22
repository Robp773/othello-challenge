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
		boxArray: boxArray,
	};
}

export const reducer =  (state = getInitialState(), action) =>{

    if(action.type === 'REGISTER_MOVE'){
        const newState = {...state};
        newState.boxArray[action.boxNum] = {color: action.currentPlayer}
        newState.playerTurn = action.nextPlayer;
        newState[`${action.currentPlayer}Count`]++;
        newState.spaceCount--;
        return Object.assign({}, newState);
    }

    if(action.type === 'REGISTER_CHAIN'){
        const newState = {...state};
        for(let i=0; i<action.chainArray.length; i++){
            newState.boxArray[action.chainArray[i]].color = action.player
        }
        let whiteTotal = 0;
        let blackTotal = 0;
        let spacesTotal;
        for(let i=0; i<newState.boxArray.length; i++){
            if(newState.boxArray[i].color !== null){
                newState.boxArray[i].color === 'white' ? whiteTotal++ : blackTotal++;
            }
        }
        spacesTotal = 64 - whiteTotal - blackTotal;   
   
        return Object.assign({}, newState, {spaceCount: spacesTotal, whiteCount: whiteTotal, blackCount: blackTotal} )
    };

    if(action.type === 'UPDATE_TOTALS'){
        return Object.assign({}, state, {whiteCount: action.whiteTotal, blackCount: action.blackTotal, spaceCount: action.spacesTotal})
    }

    if(action.type === 'RESET_STATE'){
        return Object.assign({}, getInitialState());
    }

return state;
}
