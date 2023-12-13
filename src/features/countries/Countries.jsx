import React from 'react'
import { useGetAllCountriesQuery } from '../../services/countries'
import { Link,Outlet } from 'react-router-dom'

function Countries() {
   var { isLoading, data} = useGetAllCountriesQuery()
//    console.log(data)
     console.log(isLoading)
  return (
    <div className='mybox' >
        <h1>Countries</h1>
       <div style={{display:"flex",flexWrap:"Wrap"}} >
            <ul style={{width:"20%"}} >
                  {
                      isLoading && <img src="https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif" alt="" />
                  }
                  {
                    data && data.map((country)=>{
                      return <li>
                        <Link to={`countryDetails/${country.name.common}`}>{country.name.common}</Link>
                        </li>
                    }) 
                  }
              </ul>
              <div style={{width:"70%"}} >
              <Outlet></Outlet> 
              </div>
        </div> 
       
       
    </div>
  )
}

export default Countries