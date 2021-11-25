import ScoreBoard from "./ScoreBoard"

const GameBoard = ({ game_data }) => {
    return (
        <div className="gameBoard" >
            <ScoreBoard game_data={game_data} />
            <h3>Game Board</h3>
        </div>
    )
}

export default GameBoard
