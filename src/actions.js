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