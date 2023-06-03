import React from 'react'
import { useState } from 'react'
import './movies-add-form.css'

const MoviesAddForm = ({addForm})=>{
 const [state, setState] = useState({name: '', views: ""})
 const changeHAndlerInput =(e)=>{
    setState({...state, [e.target.name]: e.target.value})
  }
  const addFormHandler =e =>{
    e.preventDefault()
    if(state.name === "" || state.views ==="")return
    const data = {name:state.name, viverew: state.views}
    addForm(data)
    console.log(state.views);
    setState({name: "", viverew:  ''})
  }
  return (
    <div className='movies-add-form'>
        <h3>  Yangi kino qoshish </h3> 
        <form className='add-form d-flex' onSubmit={addFormHandler}>
           <input onChange={changeHAndlerInput} type='text' className='form-control new-post-label ' placeholder='Qanday kino?' name='name' value={state.name}  ></input>
           <input onChange={changeHAndlerInput} type='number'  className='form-control new-post-label ' placeholder='Necha marotaba korilgan' name='views' value={state.views}></input>
           <button type='submit' className='btn btn-outline-dark '>
            Qoshish
           </button>
        </form>
    </div>
  )
}


 

export default MoviesAddForm 