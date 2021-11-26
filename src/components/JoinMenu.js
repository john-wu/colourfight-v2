import Button from "./Button";
import { useState } from "react";

const JoinMenu = ( { interface_data, new_game, join_game } ) => {
    const [player_name, set_player_name] = useState("");
    const [game_id, set_game_id] = useState("");

    const on_click_join = (e) => {
        e.preventDefault();
        join_game(player_name, game_id);
    }

    return (
        <div className="joinMenu">
            <Button text="New Game" onClick={new_game} />
            <label>{interface_data && interface_data.new_game_id}</label>

            <label>Player Name</label>
            <input type="text" placeholder="Enter Player Name" value={player_name} onChange={(e) => set_player_name(e.target.value)} ></input>

            <label>Game ID</label>
            <input type="text" placeholder="Enter Game ID" value={game_id} onChange={(e) => set_game_id(e.target.value)}></input>

            <Button text="Join Game" onClick={on_click_join} />
            <label style={{color: "red"}} >{interface_data && interface_data.error_message}</label>
        </div>
    );
};

export default JoinMenu;
