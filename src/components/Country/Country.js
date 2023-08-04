import React from 'react';

const Country = (props) => {
    const {name, region,population,flag}= props.country
    const flagStyle = {height: '50px'};
    const handleAddCountry= props.handleAddCountry;
   



    const countryStyle = {border: '1px solid blue',boxShadow: '2px 2px 10px', margin:'10px', padding: '10px'}
    const buttonStyle = {
        backgroundImage: "linear-gradient( orange, yellow,lightgreen)",
         width:'150px',
         padding:"10px",
         borderRadius: "10px"
    }
    return (
        <div style={countryStyle}>
            <h4>This is {name}</h4>
            <img style={flagStyle} src={flag} alt="" />
            <h6>Population: {population}</h6>
            <p><small>Region: {region}</small></p>
            <button onClick={()=> handleAddCountry(props.country)} style={buttonStyle}>Add Country</button>

        </div>
    );
};

export default Country;