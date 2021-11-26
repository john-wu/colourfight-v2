const ScoreBoard = ({ game_data }) => {
    return (
        <div className="scoreBoard">
            {game_data.clients && Object.values(game_data.clients).map((client) => (
                <>
                    <p 
                        className={`playerName ${client.player_name}Name`} 
                        style={{borderColor: `${client.player_colour}`}} 
                        key={`${client.player_name}Name`} 
                    >{client.player_name}</p>
                    <p 
                        className={`playerScore ${client.player_name}Score`} 
                        style={{borderColor: `${client.player_colour}`}} 
                        key={`${client.player_name}Score`} 
                    >{game_data.scores ? game_data.scores[client.player_name] : 0}</p>
                </>
            ))}
        </div>
    )
}

export default ScoreBoard
