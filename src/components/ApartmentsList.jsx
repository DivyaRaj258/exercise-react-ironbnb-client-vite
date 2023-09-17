import React, { useState , useEffect } from 'react';
import axios from "axios"; 

function ApartmentsList() {

    const [apartments, setApartments]=useState([]);
    const [loading, setLoading]= useState (true);
    useEffect(() => {
        getApartmentsFromApi();
      }, []);
      
      
      
      const getApartmentsFromApi = () => {
        //axios.get(`${import.meta.env.VITE_API_URL}`)
        axios.get ('https://ironbnb-m3.herokuapp.com/apartments')
          .then(response => {
            setApartments(response.data);
            console.log("I AM HERE **** 3"+ apartments.length);
          })
          .catch((e) => {
            console.log("error getting apartments from the API....", e);
          });
      }
    

    
    

  return (
    <div>
      <h1>Apartments List</h1>
      <ul>
        {apartments.map((apartment)=> (
            <li key = {apartment._id} >
                <img src={apartment.img} alt={apartment.name} style={{ maxWidth: '50px' }} />  
                <p>TITLE : {apartment.title}</p>
                <p>PRICE PER DAY: {apartment.pricePerDay}</p>
                {/*<p>URL: {apartment.img}</p>  */}

                </li>
        ))}
      </ul>
    </div>
  );
}

export default ApartmentsList;
