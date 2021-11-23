import Button from "./Button"

const JoinMenu = ( { new_game_id, new_game, join_game } ) => {

    return (
        <div className="joinMenu">
            <Button text="New Game" onClick={new_game} />
            <label>{new_game_id}</label>

            <label>Player Name</label>
            <input type="text" placeholder="Enter Player Name"></input>

            <label>Game ID</label>
            <input type="text" placeholder="Enter Game ID"></input>

            <Button text="Join Game" onClick={join_game} />
        </div>
    )
}

export default JoinMenu
