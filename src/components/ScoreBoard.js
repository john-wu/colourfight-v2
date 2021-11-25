const ScoreBoard = ({ game_data }) => {
    const clients = Object.values(game_data.clients);

    return (
        <div className="scoreBoard">
            {clients.map((client) => (
                <>
                    <p>{client.player_name}</p>
                    <p>score</p>
                </>
            ))}
        </div>
    )
}

export default ScoreBoard
