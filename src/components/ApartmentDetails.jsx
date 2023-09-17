import React from 'react';

function ApartmentDetails() {
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/apartments/${apartmentId}`)
            .then( response => {
                setApartmentDetails(response.data)
            })
            .catch( e => {
                console.log("error getting apartment details from API", e)
            })
    }, [])



  return (
    <div>
      <h1>Apartment Details</h1>
    </div>
  );
}

export default ApartmentDetails;
