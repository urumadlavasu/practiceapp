import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsDetailsByIdQuery, useUpdateProductMutation } from '../../services/products'
import { Formik, useFormik } from 'formik'
function EditProduct() {
    var {pid} = useParams()
    // console.log(pid)
   var {data,isLoading} = useGetProductsDetailsByIdQuery(pid);
  var[ufn] = useUpdateProductMutation()
//    console.log(data)
var ProductForm = useFormik({
    initialValues: {title:''},
    onSubmit: (values)=>{
        ufn(values).then(()=>{
          alert("updated")
        })
    }
  });
  React.useEffect(()=>{
    console.log(data)
    ProductForm.setValues(data)
  },[data])

  return (
    <div className='mybox'>
        <h1>EditProduct</h1>
        <form onSubmit={ProductForm.handleSubmit}>
            <input type="text" placeholder='title' value={ProductForm.values?.title} name='title' onChange={ProductForm.handleChange} onBlur={ProductForm.handleBlur} /> 
            <br />
            <input type="text" placeholder='price' name='price' value={ProductForm.values?.price} onChange={ProductForm.handleChange} onBlur={ProductForm.handleBlur} /> 
            <br />
            <input type="text" placeholder='description' name='description' value={ProductForm.values?.description} onChange={ProductForm.handleChange} onBlur={ProductForm.handleBlur} /> 
            <br />
            <input type="text" placeholder='category' name='category' value={ProductForm.values?.category} onChange={ProductForm.handleChange} onBlur={ProductForm.handleBlur} /> 
            <br />
            <input type="text" placeholder='image' name='image' value={ProductForm.values?.image} onChange={ProductForm.handleChange} onBlur={ProductForm.handleBlur} /> 
            <br />
              <button>Update product</button>
        </form>
    </div>
  )
}

export default EditProduct