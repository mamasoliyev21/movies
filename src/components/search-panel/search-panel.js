import React from "react";
import { useState } from "react";
import "./search-panel.css";

const SearchPanel  = (props)=>{
  const [term, setTerm] = useState('')
  
  const updateTermHandler =(e)=>{
    const termm = e.target.value.toLowerCase()
    setTerm(termm)
    props.updateTermHandler(term)
  }
  return   <input type="text" onChange={updateTermHandler} className="form-control search-input" placeholder="kinolarni qidirish" value={term} />
}


export default SearchPanel;
