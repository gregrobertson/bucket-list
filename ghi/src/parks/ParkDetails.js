import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import id from "./ParksList"

const parkUrl = "http://localhost:8080/parks/list/"

function ParkDetails({Url, ...props}) {
    const [park, setPark] = useState({})
    const { id } = useParams()


    useEffect(() => {
        async function fetchData() {    
            const detailUrl = Url + id;
            const response = await fetch(detailUrl);
            const data = await response.json();
            setPark(data);
            return response;
        }
        fetchData();
    }, [Url, id])

  return (
    <div className='parkslist'>
          <div key={park.id} className="row">
            <div className="col-9">
              <h2 className="featurette-heading">{park.name}</h2>
              <h4><span className="text-muted">{"   " + park.city + ", " + park.state}</span></h4>
              <p className="lead">{park.description}</p>
            </div>
            <div className="col-3 photo">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto parksphoto"  
                      src={park.image_url} alt="" />
            </div>
            <hr className="featurette-divider" />
          </div>
    </div>
  )
}
export default ParkDetails

