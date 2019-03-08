import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    //calls parents constructor function
    super(props);

    //initialzed state with a key:value pair
    //this is the only time we do direct assignment to this.state (this.state = x)
    this.state = {lat: null};

    //get the users current location as soon as the app launches
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setState to change a states value
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  //React says we have to define render!!
  render()  {
        return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
