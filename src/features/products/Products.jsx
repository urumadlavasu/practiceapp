import React from 'react'
import { useAddProductMutation, useDeletePostMutation, useGetAllProductsQuery, useLazyGetAllProductsQuery } from '../../services/products'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Products() {
 var {data,isLoading} = useGetAllProductsQuery()
 var[fn] = useDeletePostMutation()
 var[rfn] = useLazyGetAllProductsQuery()
 var navi = useNavigate()
//  console.log(data)
// console.log(isLoading)

function deleteProduct(id){
        fn(id).then((res)=>{
            alert("product deleted")
            rfn();
        })
}
function editProduct(id){
    // alert("product edited")
        navi(`/editProduct/${id}`)
        
}

// function deleteProduct(id){
//   axios.delete(`http://localhost:4000/products/${id}`)          
//   .then(()=>{
//     alert("delete aypoindhi")
// })
// }
  return (
    <div className='mybox'>
        <h1>Products</h1>
        {
            isLoading && <img src="https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif" alt="" />
        }
        <ul id="products" >
            {
                data && data.map((product)=>{
                    return <li>
                        <img src={product.image} alt="" />
                        {product.title}
                        <i class="bi bi-trash" onClick={()=>{deleteProduct(product.id)}}></i>
                        <i class="bi bi-pencil-square" onClick={()=>{editProduct(product.id)}}></i>
                          </li>
                    
                })
            }
        </ul>
    </div>
  )
}

export default Products