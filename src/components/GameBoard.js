import ScoreBoard from "./ScoreBoard"
import Button from "./Button"

const GameBoard = ({ game_data, click_ball }) => {
    const on_click_ball = (e) => {
        const ball_id = e.target.id;
        click_ball(ball_id);
    };

    return (
        <>
            <ScoreBoard game_data={game_data} />
            <div className="gameBoard" >
                {game_data.balls && [...Array(game_data.balls)].map((item , index) => (
                    <Button color={game_data.state[`${index}`] && game_data.state[`${index}`].player_colour} borderRadius="50%" width="80px" height="80px" key={index} id={index} onClick={on_click_ball} />
                ))}
            </div>
        </>
    )
}

export default GameBoard
