import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getCoordinates } from "../../actions/userActions";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

class UserMap extends Component {
  state = {
    x: null,
    y: null
  };
  componentDidMount() {
    const { params } = this.props.match;
    console.log(params);
    this.props.getCoordinates(params.id);
  }

  componentWillReceiveProps(nextProps) {
    const { coordinates } = nextProps.address;
    this.setState({
      x: coordinates[0],
      y: coordinates[1]
    });
  }

  render() {
    const Map = ReactMapboxGl({
      accessToken:
        "pk.eyJ1IjoibWl0enp6IiwiYSI6ImNqem54NThwejAyd2gzY3A4d3dsczhmYnIifQ.Cyp8oJvCLM6g73DW0qGmKg"
    });
    return (
      <div className="container">
        <div className="main" style={{ textAlign: "center" }}>
          <h1>Mapa dojazdu</h1>
          <hr />
          {this.props.address.userLogged.isClient === false ? (
            <Link to={`/orders`}>
              <button className="btn btn-info shadow-none">
                Powróć do zamówień
              </button>
            </Link>
          ) : (
            <Link to={`/ordersClient`}>
              <button className="btn btn-info shadow-none">
                Powróć do Twoich zamówień
              </button>
            </Link>
          )}

          <hr />
          <center>
            <Map
              style={`mapbox://styles/mitzzz/cjznx5nza02ud1cpbml37g697`}
              containerStyle={{
                height: "100vh",
                width: "100vh"
              }}
              center={[this.state.x, this.state.y]}
            >
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}
              >
                <Feature coordinates={[this.state.x, this.state.y]} />
              </Layer>
              <Layer type="line">
                <Feature coordinates={[this.state.x, this.state.y]} />
              </Layer>
            </Map>
          </center>
        </div>
      </div>
    );
  }
}

UserMap.propTypes = {
  getCoordinates: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  address: state.address
});

export default connect(
  mapStateToProps,
  { getCoordinates }
)(UserMap);
