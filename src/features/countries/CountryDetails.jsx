import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCountryDetailsByNameQuery } from '../../services/countries'

function CountryDetails() {
  var {cname} = useParams()
   var {data,isLoading}= useGetCountryDetailsByNameQuery(cname)
   console.log(data)
  return (
    <div className='mybox' >
        <h1>CountryDetails of {cname}</h1>
        {
            data  && <img src={data[0].flags[0]} alt="" width={"200px"} />
        }
    </div>
  )
}
export default CountryDetails