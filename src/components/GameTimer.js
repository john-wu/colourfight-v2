const GameTimer = ({ game_data }) => {
    return (
        <div className="gameTimer">
            <p>Time Remaining: {game_data.time}</p>
        </div>
    )
}

export default GameTimer
