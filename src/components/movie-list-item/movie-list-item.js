import React from "react";
import { Component } from "react";
import {FaCookieBite, FaLeaf} from 'react-icons/fa'
import {AiOutlineDelete} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import './movie-list-item.css'


const MoviListItem = (props) => {
  const {filmname, viverew,favorite,like, onDelete,ontoggleProp} = props

  return (
    <li className={`list-group-item d-flex justify-content-between ${favorite && 'favorite'} ${like && 'like'}`}>
    <span  onClick={ontoggleProp} className="list-group-item-label "  data-toggle="like">{filmname}</span>
    <input className="list-group-item-input " type="number" defaultValue={viverew} />
    <div className="d-flex justify-content-center align-items-center">
      <button className="btn-cookie btn-sm" onClick={ontoggleProp} data-toggle ='favorite'>
           <FaCookieBite className="cokie-icon"/>
      </button>
      <button className="btn-trash btn-sm">
           <AiOutlineHeart className="heard-icon"/>
      </button>
      <button onClick={onDelete} className="btn-star btn-sm">
           <AiOutlineDelete className="cokie-icon"/>
      </button>
    </div>
  </li>
  );
};

export default MoviListItem;
