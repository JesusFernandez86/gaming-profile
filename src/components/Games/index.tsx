import React, { PureComponent } from "react";
import { IGame, IGames } from "../../interfaces/IGame";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import produce from "immer";
let gamesList = [
  {
    id: 1,
    name: "CS:GO",
    picturePath: "../../../cs.png",
    added: false,
    isHovering: false
  },
  {
    id: 2,
    name: "Fifa",
    picturePath: "../../../fifa20.png",
    added: false,
    isHovering: false
  },
  {
    id: 3,
    name: "Fortnite",
    picturePath: "../../../fortnite.jpg",
    added: false,
    isHovering: false
  },
  {
    id: 4,
    name: "Minecraft",
    picturePath: "../../../minecraft.png",
    added: false,
    isHovering: false
  },
  {
    id: 5,
    name: "LOL",
    picturePath: "../../../leagueoflegends.png",
    added: false,
    isHovering: false
  }
];
interface IProps {}
interface IState {
  games: IGames;
  gamesNumber: number;
}
class Games extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      games: { byId: {}, order: [] },
      gamesNumber: 0
    };
    this.addGame = this.addGame.bind(this);
    this.enterHover = this.enterHover.bind(this);
    this.exitHover = this.exitHover.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
  }
  addGame(game: IGame) {
    this.setState(state =>
      produce(state, drafState => {
        drafState.games.byId[game.id] = game;
        drafState.games.order.push(game.id);
      })
    );
    this.setState(prevState => ({
      gamesNumber: prevState.gamesNumber + 1
    }));
    gamesList[game.id - 1].added = true;
  }
  deleteGame(id: number) {
    this.setState(state =>
      produce(state, drafState => {
        delete drafState.games.byId[id];
        drafState.games.order.splice(id, 1);
      })
    );
    this.setState(prevState => ({
      gamesNumber: prevState.gamesNumber - 1
    }));
    gamesList[id - 1].added = false;
  }
  enterHover(game: IGame) {
    this.setState(state =>
      produce(state, drafState => {
        drafState.games.byId[game.id].isHovering = true;
      })
    );
  }
  exitHover(game: IGame) {
    this.setState(state =>
      produce(state, drafState => {
        drafState.games.byId[game.id].isHovering = false;
      })
    );
  }
  render() {
    console.log(this.state);
    console.log("gameslist", gamesList);
    const { byId } = this.state.games;
    const games = Object.values(byId);
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-1">
                <AddOutlinedIcon
                className="mt-3"
                  style={{ cursor: "pointer" }}
                  data-target="#addgames"
                  data-toggle="modal"
                />
              </div>
              {this.state.gamesNumber < 6 &&
                games.map(game => (
                  <div
                    className="d-flex flex-row"
                    onMouseLeave={() => this.exitHover(game)}
                    onMouseEnter={() => this.enterHover(game)}
                    style={{ marginLeft: "20px" }}
                  >
                    <img
                      style={{ borderRadius: "50%", height: 60, width: 60 }}
                      src={game.picturePath}
                    />
                    {game.isHovering && (
                      <div
                        onClick={() => this.deleteGame(game.id)}
                        style={{
                          height: "8px",
                          width: "8px",
                          color: "red",
                          cursor: "pointer"
                        }}
                      >
                        <span>x</span>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* --------------------MODAL------------------- */}
        <div
          className="modal fade"
          id="addgames"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  JUEGOS
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {gamesList.map(game => (
                  <ul>
                    {!game.added ? (
                      <li
                        key={game.id}
                        onClick={() => this.addGame(game)}
                        style={{ cursor: "pointer" }}
                      >
                        {game.name}
                      </li>
                    ) : (
                      <li key={game.id} style={{ color: "red" }}>
                        {game.name}
                      </li>
                    )}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Games;