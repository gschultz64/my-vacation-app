import React, { Component } from 'react';
import './App.css';
import Location from './Location';
import Event from './Event';

var places = [
  {
    name: "Edinburgh Castle",
    address: "Castlehill, Edinburgh EH1 2NG, UK",
    type: "Landmark"
  },
  {
    name: "Royal Botanic Garden Edinburgh",
    address: "Arboretum Pl, Edinburgh EH3 5NZ, UK",
    type: "Park"
  },
  {
    name: "The World's End",
    address: "2-8 High St, Edinburgh EH1 1TB, UK",
    type: "Pub"
  },
  {
    name: "National Museum of Scotland",
    address: "Chambers St, Edinburgh EH1 1JF, UK",
    type: "Museum"
  }
]

var events = [
  {
    title: "Architecture Tour of Dean Village",
    venue: "Stockbridge Market Saunders St Entrance - Meeting Point",
    date: "21 August"
  },
  {
    title: "Edinburgh – A Tale of Two Towns",
    venue: "Outside Greyfriars Bobby Bar",
    date: "24 August"
  },
  {
    title: "Caledonian Folk and Blues at the Guildford: 24th Year",
    venue: "Guildford Arms",
    date: "22 August"
  }
]

class App extends Component {
  render() {
    var mappedPlaces = places.map((place, i) => {
      return (<Location 
                name={place.name} 
                address={place.address} 
                type={place.type} 
                key={i}
              />)
    });
    var mappedEvents = events.map((event, i) => {
      return (<Event 
                title={event.title}
                venue={event.venue}
                date={event.date}
                key={i}
              />)
    });
    return (
      <div className="App">
        <header className="App-header purple darken-4">
          <h1 className="App-title">Genevieve's Vacation</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col s12 m5 z-depth-3 grey lighten-5">
              <h2><a href="https://goo.gl/maps/CBAPd145c882" target="blank">Places to visit in Scotland</a></h2>
              {mappedPlaces}
            </div>
            <div className="col s12 m5 offset-m2 z-depth-3 grey lighten-5">
              <h2><a href="https://tickets.edfringe.com/" target="blank">Festival Fringe Events</a></h2>
              {mappedEvents}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
