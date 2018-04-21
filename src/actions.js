export const registerMove = (num, currentPlayer, nextPlayer) =>({
    type: 'REGISTER_MOVE',
    boxNum: num,
    currentPlayer: currentPlayer,
    nextPlayer: nextPlayer
});

export const registerChain = (array, currentPlayer) =>({
    type: 'REGISTER_CHAIN',
    chainArray: array,
    player: currentPlayer,
});

export const updateTotals = (white, black, spaces) =>({
    type: 'UPDATE_TOTALS',
    whiteTotal: white,
    blackTotal: black,
    spacesTotal: spaces
});

export const resetState = () =>({
    type: 'RESET_STATE'
});