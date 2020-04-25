import React from 'react';
import Productlist from './productlist/productlist';


class App extends React.Component {
  render(){
    const cleanser = require("./db.json/cleanser.json")
  return (
    <div>
     <Productlist products={cleanser} id ="1" title = "Pick a cleanser"/>
     <Productlist products={cleanser} id ="2" title = "Pick a serum"/>
     <Productlist products={cleanser} id ="3" title = "Pick a moisturizer"/>
     <Productlist products={cleanser} id ="4" title = "Pick a eye cream"/>
     
    </div>
  );
}
}

export default App;
