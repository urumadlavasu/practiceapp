import React from 'react'
import { Formik, useFormik } from 'formik'
import { useAddProductMutation } from '../../services/products'
function AddProduct() {
 var[addFn] = useAddProductMutation()
  var ProductForm = useFormik({
    initialValues:{
        "title": "",
        "price": 1200,
        "description": "",
        "category": "",
        "image": "",
        "rating": {
            "rate":0,
            "count":0,
        },
    },
    onSubmit:(values)=>{
      // console.log(values)
      addFn(values).then(()=>{alert("product added success")})

  }
  })
  return (
    <div className='mybox' >
        <h1>AddProduct</h1>
        <form onSubmit={ProductForm.handleSubmit}>
            <input type="text" placeholder='title' name='title' onChange={ProductForm.handleChange} onBlur={ProductForm.handleBlur} /> 
            <br />
            <input type="text" placeholder='price' name='price' onChange={ProductForm.handleChange} onBlur={ProductForm.handleBlur} /> 
            <br />
            <input type="text" placeholder='description' name='description' onChange={ProductForm.handleChange} onBlur={ProductForm.handleBlur} /> 
            <br />
            <input type="text" placeholder='category' name='category' onChange={ProductForm.handleChange} onBlur={ProductForm.handleBlur} /> 
            <br />
            <input type="text" placeholder='image' name='image' onChange={ProductForm.handleChange} onBlur={ProductForm.handleBlur} /> 
            <br />
              <button>Add product</button>
        </form>
    </div>
  )
}

export default AddProduct