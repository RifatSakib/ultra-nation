import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
const[countries, setCountries]= useState([])
const [cart,setCart]= useState([])
useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then (data =>setCountries(data))
    .catch(error => console.log(error))
},[])

const handleAddCountry = (country) => {
  console.log('Country Added',country);
  const newCart = [...cart,country];
  setCart(newCart);  


} 


  return (
    <div className="App">
     <h1> Country Loaded: {countries.length} </h1> 
     <h5>Country Added:{cart.length} </h5>
     <Cart cart= {cart}></Cart>
    <ul>
      {
      countries.map (country => <Country  country= {country} key= {country.alpha3Code}handleAddCountry={handleAddCountry}></Country>)
    }
      
    </ul>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
