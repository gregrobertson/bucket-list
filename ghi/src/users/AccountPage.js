import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddFavorite from '../components/AddFavorites'


function AccountDetails({ accountUrl, ...props }) {
    const [favorites, setFavorites] = useState({})
    const { id } = useParams()

    useEffect(() => {
      async function fetchData() {
        const response = await fetch(accountUrl)
        const data = await response.json();
        setFavorites(data)
        return response
      }
      fetchData();
    },[accountUrl, id])    
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",favorites);

    return (
        <>
        <div key={favorites.email} className='accountdetail'>
            <h1>{favorites.email}</h1>
            {favorites.parks
            ? <div>{favorites.parks.map((park) => {
                return (
                    <div key={park.id}>
                        <h1>{park.id}</h1>
                        <h1>{park.name}</h1>
                        <h1>{park.state}</h1>
                    </div>
                    )       
            })}</div>
            : null
            }
            

        </div>
            {/* {favorites.map((f) => {
                return (
                    <div key={favorites.email} className='accountdetail'>
                        <h1>{f.username}</h1>
                        <h2>{f.first_name}</h2>
                        <h2>{f.last_name}</h2>
                        <h2>{f.email}</h2>
                        <h2>{f.id}</h2>
                    </div>)                
            })} */}
        </>
    )
}
export default AccountDetails;