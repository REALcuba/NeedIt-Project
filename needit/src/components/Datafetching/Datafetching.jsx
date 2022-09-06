import React, {useState, useEffect}from 'react';
import axios from 'axios'

function Datafetching() {
    const [userData, setUserData] = useState({})
    const [id, setID] = useState(1)

    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            console.log(res);
            setUserData(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }, ([]))
  return (
    <div className='container profile' >
        <h3>{userData.username}</h3>
        <h3>{userData.name}</h3>
        <h3>{userData.email}</h3>
        <h3>{userData.phone}</h3>
        {/* <ul>
        {userData.map(user =>(
            <li key={user.id}>
                {user.name}
            </li>
          ))
        }
        </ul> */}
        
    </div>
  )
}

export default Datafetching