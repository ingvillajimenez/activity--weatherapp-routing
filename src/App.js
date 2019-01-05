import React, { Component } from 'react';
import './App.css';

import {Link, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Country from './Country';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        openLocation: false,
        locations: [],
        dailyForecast: []
      };

      this.clickNewCity = this.clickNewCity.bind(this);
      this.saveNewLocation = this.saveNewLocation.bind(this);
      this.getCoordinates = this.getCoordinates.bind(this);
      this.getForecast = this.getForecast.bind(this);
  }

  clickNewCity() {
    this.setState({
      openLocation: true
    });
  }

  saveNewLocation(e) {
    let locationName = e.target.value.toLowerCase();
    if(e.keyCode === 13) {
      this.setState({
        openLocation: false,
        locations: this.state.locations.concat([locationName])
      });
    }
  }

  getForecast(lat, lng) {
    fetch('https://api.darksky.net/forecast/a28bbc2c6d16059bf1df86c0e15bfa10/' + lat + "," + lng)
      .then(response => response.json())
      .then(myJson => {
        this.setState({
          dailyForecast: myJson.daily.data
        });
      });
  }

  getCoordinates(location) {
    fetch('http://www.mapquestapi.com/geocoding/v1/address?key=sk3WkoiBEGTDkZO82Z8hQAhvPT9Y7GoW&location=' + location)
      .then(response => response.json())
      .then(myJson => {
        let {lat} = myJson.results[0].locations[0].latLng;
        let {lng} = myJson.results[0].locations[0].latLng;
        this.getForecast(lat, lng); // To call getForecast function use 'this'. 
      }); 
  }

  render() {
    var moment = require('moment');
    return(
      <React.Fragment>
      <Link to="/home">Home</Link>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/countries/:countryName" component={Country} />
      </Switch>

      <div className='app'>
        <header className='app__header'>
          <button className='app__add' onClick={this.clickNewCity}>
            <i className="fas fa-plus-circle"></i> New city
          </button>
        </header>
        <div className='grid'>
          <aside className='app__aside'>
            <h1 className='app__title'>All countries</h1>
            {
              this.state.locations.map((location, index) => {
                return(
                  <Link 
                  key={index} 
                  href='#' 
                  className='app__country' 
                  onClick={() => this.getCoordinates(location)}
                  to={"/countries/" + location}>
                  {location}
                  </Link>
                );
              })
            }
            {this.state.openLocation && 
            <input type='text' placeholder='Location' className='app__input' onKeyUp={this.saveNewLocation} />}
          </aside>
          <section className='app__view'>
            {
              this.state.dailyForecast.map((dayForcast, index) => {
                return(
                  <div key={index} className='data__day'>
                  <h2>{moment(dayForcast.time, "X").format('dddd').slice(0,3)}</h2>
                  <h4>{moment(dayForcast.time, "X").format('L')}</h4>
                  <i className="fas fa-cloud-sun"></i>
                  <h3>Temp.</h3>
                  <h3><strong>{dayForcast.temperatureHigh}</strong></h3>
                  <h3>Pres.</h3>
                  <h3><strong>{dayForcast.pressure}</strong></h3>
                  <h3>Wind.</h3>
                  <h3><strong>{dayForcast.windSpeed}</strong></h3>
                  </div>
                );
              })
            }
          </section>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
