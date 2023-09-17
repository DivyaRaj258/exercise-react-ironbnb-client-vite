import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function CreateApartment() {

    const [title, setTitle ] = useState("");
    const[imageURL,  setImageURL] = useState ("");
    const[price,  setPrice] = useState ("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitting form...")
        
        const newApartment = {
            img : imageURL,
            title : title,
            pricePerDay : price
        }

        axios.post('https://ironbnb-m3.herokuapp.com/apartments', newApartment)
        .then( (response)=> {
            
            console.log(response)
            navigate("/apartments");

        })
        .catch((e)=> {

            console.log("Error creating new apartment", e)
        })

    }

  return (
    <>
        <form onSubmit = {handleSubmit} >

            <label >
                    Title: 
                <input 
                    type= "text"
                    name= "title" 
                    value = {title}
                    onChange= {(e) => { setTitle(e.target.value) }} 
                />
            </label>
            <label >
                    Image URL: 
                <input 
                    type= "text"
                    name= "imageURL" 
                    value = {imageURL}
                    onChange= {(e) => { setImageURL(e.target.value) }} 
                />
            </label>
            <label >
                    Price: 
                <input 
                    type= "number"
                    min={1}
                    max={999}
                    name= "price" 
                    value = {price}
                    onChange= {(e) => { setPrice(e.target.value) }} 
                />
            </label>
            <button>Create</button>
        </form>
    </>

  );
}

export default CreateApartment;
