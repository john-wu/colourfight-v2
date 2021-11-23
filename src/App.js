import Header from "./components/Header";
import JoinMenu from "./components/JoinMenu";
import { useState, useEffect, useRef } from 'react';

function App() {
  const [new_game_id, set_new_game_id] = useState("");
  const [client_data, set_client_data] = useState({});
  const [game_data, set_game_data] = useState({});
  const websocket = useRef(null);

  useEffect( () => {
    websocket.current = new WebSocket("ws://localhost:8080");
    websocket.current.onmessage = message => {
      // received server message
      const response = JSON.parse(message.data);
      console.log(response);

      // receive connect response from server
      if (response.method === "connect") {
        set_client_data({"client_id": response.client_id});
        console.log("Client id set successfully: " + client_data.client_id);
      };

      // receive create response from server
      if (response.method === "create") {
        const game_id = response.game.id;
        set_new_game_id(game_id);
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
  const join_game = () => {

  };

  return (
    <div className="container">
      <Header title="Colour Fight" />
      <JoinMenu new_game_id={new_game_id} new_game={new_game} join_game={join_game} />
    </div>
  );
}

export default App;
