import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ControlledCarousel from "../Carousel/index";
import Button from "react-bootstrap/Button";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import LinearScaleOutlinedIcon from "@material-ui/icons/LinearScaleOutlined";
import Graph1 from "../Graph1";
import Graph2 from "../Graph2"
import Games from "../Games";

interface IProps {}

interface IState {
  selectedGraph: string;
  gamerName: string;
  gamerPic: string;
  gamerStatus: string;
  gamerTeamLogo: string;
  gamerRating: number;
  gamerContacts: number;
}

class trialView extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      selectedGraph: "KIQ",
      gamerName: `Ulises "ErPajarillo" González`,
      gamerPic: `https://i.imgur.com/XvBsrZW.png`,
      gamerStatus: "Gamer Profesional",
      gamerTeamLogo: `https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/d/d9/Vodafone_Giantslogo_square.png/220px-Vodafone_Giantslogo_square.png?version=74aaef322984b9aff14c6b3c3774840f`,
      gamerRating: 70,
      gamerContacts: 450

    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event: any) {
    console.log("HOLA");
    this.setState({ selectedGraph: event.target.value });
    console.log(this.state.selectedGraph);
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="separationDiv" style={{ height: 300 }}></div>
          <div className="row">
            <div className="col-12">
              <div className="row mb-4">
                <div className=" offset-7 col-5">
                  <Games />
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid cardContainer">
            <div className="col-12 ">
              <div className="row">
                <div className="col-4 mt-5" style={{ height: 300 }}>
                  <h4 className="ml-4">
                    <strong>{this.state.gamerName}</strong>
                  </h4>
                  <h5 className="status d-flex justify-content-center mr-3">
                    {this.state.gamerStatus}
                  </h5>
                  <p className="text-center history mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    eligendi eveniet praesentium ipsam nobis quae cum ut beatae
                    atque, quas minus quasi? Dolores perspiciatis ad minus
                    placeat exercitationem quae eius.
                  </p>
                  <div className="row justify-content-center ml-1">
                    <a className="eraseLink" href="#">
                      {this.state.gamerContacts} Contactos{" "}
                    </a>
                    <p className=" ml-2 mr-2">
                      <LinearScaleOutlinedIcon
                        style={{ fontSize: "large", color: "grey" }}
                      />
                    </p>
                    <a className="eraseLink" href="#">
                      {" "}
                      Detalles Contacto{" "}
                    </a>
                  </div>
                  <div className="row"></div>
                  <div className="row">
                    <div className="col-3">
                      <a href="#">
                        <img
                          className="teamLogo mr-4 d-flex pb-2"
                          src={this.state.gamerTeamLogo}
                        ></img>
                      </a>
                    </div>
                    <div className="ml-3 col-5">
                      <div className="row" style={{height: 25}}>
                        <h4 className=" offset-4">
                          <strong>{this.state.gamerRating}</strong>
                        </h4>
                      </div>
                      <div className="row">
                        <Rating
                          name="half-rating-read"
                          defaultValue={this.state.gamerRating / 20}
                          precision={0.1}
                          readOnly
                          size="large"
                          emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <Button href="#" className="contactButton mt-2" size="sm">
                        Contacta
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-3 mt-5">
                  <img
                    className="gamerPic ml-4"
                    src={this.state.gamerPic}
                  ></img>
                  <div
                    className=" ml-4 d-flex align-items-end"
                    style={{ position: "absolute", marginTop: "220px" }}
                  >
                    <a href="#">
                      <img
                        src="../../../logoinsta.png"
                        className="d-flex mr-2"
                        style={{ height: 30, width: 30 }}
                      />
                    </a>
                    <a href="#">
                      <img
                        src="https://icons.iconarchive.com/icons/sicons/basic-round-social/512/twitter-icon.png"
                        className="d-flex  mr-2"
                        style={{ height: 30, width: 30 }}
                      />
                    </a>
                    <a href="#">
                      <img
                        src="../../../facebook.png"
                        className="d-flex  mr-2"
                        style={{ height: 30, width: 30 }}
                      />
                    </a>
                    <a href="#">
                      <img
                        src="../../../twitch.png"
                        className="d-flex  mr-2"
                        style={{ height: 30, width: 30 }}
                      />
                    </a>
                    <a href="#">
                      <img
                        src="../../../youtube.png"
                        className="d-flex  mr-2"
                        style={{ height: 30, width: 40 }}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-5">
                  <div className=" row d-flex justify-content-end mt-2">
                    <a
                      style={{ fontSize: 12, color: "grey", cursor: "pointer" }}
                    >
                      editar
                      <EditOutlinedIcon
                        style={{ fontSize: "medium", cursor: "pointer" }}
                      />{" "}
                    </a>
                  </div>
                  
                  <div className="row" style={{ height: 300, width: 400 }}>
                  <select
                      value={this.state.selectedGraph}
                      onChange={this.handleChange}
                      className="custom-select d-flex justify-content-center"
                      style={{
                        width: 80,
                        height: 27,
                        fontSize: 10,
                        position: "absolute"
                      }}
                    >
                      <option value={"KIQ"}>KIQ</option>
                      <option value={"followers"}>Followers</option>
                    </select>
                    {this.state.selectedGraph === "KIQ" ? (
                      <Graph1 />
                    ) : (
                      <Graph2 />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="carou mb-5">
              <ControlledCarousel />
            </div>
          </div>
        </div>
        <div className="separationDiv" style={{ height: 300 }}></div>
      </>
    );
  }
}

export default trialView;
