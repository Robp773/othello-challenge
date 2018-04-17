const initialState = {
    newGame: true,
    playerTurn: 'white',
    boxArray: [
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        // 9
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        // 18
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        // 27 28
        {color: 'white'},
        {color: 'black'},

        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},

        // 36 / 37
        {color: 'black'},
        {color: 'white'},

        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},               
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null}, 
        {color: null},
        {color: null},
        {color: null},
        {color: null},
        {color: null},
    ]
};

export const reducer =  (state = initialState, action) =>{

    if(action.type === 'REGISTER_MOVE'){
        state.boxArray[action.boxNum] = {color: action.currentPlayer}
        state.playerTurn = action.nextPlayer;
        state = Object.assign({}, state)
    return state;
    }

    if(action.type === 'REGISTER_CHAIN'){
        for(let i=0; i<action.chainArray.length; i++){
            state.boxArray[action.chainArray[i]].color = action.player
        }
       return Object.assign({}, state)
    };
return state;
}
