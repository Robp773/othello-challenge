export const registerMove = (num, currentPlayer, nextPlayer) =>({
    type: 'REGISTER_MOVE',
    boxNum: num,
    currentPlayer: currentPlayer,
    nextPlayer: nextPlayer
});