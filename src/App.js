import Header from "./components/Header";
import JoinMenu from "./components/JoinMenu";
import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import GameBoard from "./components/GameBoard";

function App() {
  const navigate = useNavigate();
  const [interface_data, set_interface_data] = useState({});
  const [client_data, set_client_data] = useState({});
  const [game_data, set_game_data] = useState({
    "joined_game": false
  });
  const websocket = useRef(null);

  useEffect( () => {
    websocket.current = new WebSocket("ws://localhost:8080");
    websocket.current.onmessage = message => {
      // received server message
      const response = JSON.parse(message.data);

      // receive connect response from server
      if (response.method === "connect") {
        set_client_data({"client_id": response.client_id});
      };

      // receive create response from server
      if (response.method === "create") {
        const game_id = response.game.id;
        set_interface_data({...interface_data, new_game_id: game_id});
      };

      // receive join response from server
      if (response.method === "join") {
        const game = response.game;

        if (!game) {
          set_interface_data({...interface_data, error_message: response.error})
          return;
        }

        set_game_data({...game, joined_game: true})
        console.log("navigating!")
        navigate(`/game/${game.id}`)
      };
    };
  }, []);

  // on new game button press
  const new_game = async () => {
    const client_id = client_data.client_id;

    // user wants to create new game
    const payload = {
      "method": "create",
      "client_id": client_id
    };

    const response = await websocket.current.send(JSON.stringify(payload));
  };

  // on join game button press
  const join_game = async (player_name, game_id) => {
    const client_id = client_data.client_id;

    if (!game_id) {
      set_interface_data({...interface_data, error_message: "Please add a Game ID"});
      return
    }
    else {
      set_interface_data({...interface_data, error_message: ""});
    }

    // user wants to join existing game
    const payload = {
        "method": "join",
        "client_id": client_id,
        "game_id": game_id,
        "player_name": player_name
    };

    const response = await websocket.current.send(JSON.stringify(payload));
  };

  return (
    <div className="container">
      <Header title="Colour Fight" />
      <Routes>
        <Route path="/" exact element={
          <JoinMenu interface_data={interface_data} new_game={new_game} join_game={join_game} />
        } />
        <Route path="/game/:id" exact element={
          <GameBoard game_data={game_data} />
        } />
      </Routes>        
    </div>
  );
}

export default App;
