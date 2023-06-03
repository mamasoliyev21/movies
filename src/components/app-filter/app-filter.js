import React from 'react'
import './app-filter.css'
const AppFilter = ({updateFIlterHandler,filter}) => {
  return (
    <div className='btn-group'>
      {
        btnsArr.map(btn => 
          <button  key={btn.name} className={`btn ${filter == btn.name ? "btn-dark" : "btn-outline-dark"}`}  onClick={()=> updateFIlterHandler(btn.name)} type='button'>{btn.label}</button>
        )
      }
    </div>
  )
}
const btnsArr = [
  {name: "all", label: "barcha kinolar"},
  {name: "popular", label: "mashhur kinolar"},
  {name: "mostViewers", label: "eng kop korilgan kinolar"},
]

export default AppFilter