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

        // 36 / 36
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
        // console.log(action.boxNum)
        // console.log(action.nextPlayer)


        state.boxArray[action.boxNum] = {color: action.currentPlayer}
        state.playerTurn = action.nextPlayer;

    state = Object.assign({}, state)

    // console.log(state)
    return state;
    
    }

return state;
}
