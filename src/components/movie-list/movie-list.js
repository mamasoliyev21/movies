import React from "react";
import MoviListItem from "../movie-list-item/movie-list-item";

const MovieList = ({ data, onDelete,  ontoggleProp }) => {
  // console.log(data);
  return (
    <>
      {data.map((item) => (
        <ul   key={item.id} className="movie-list">
          <MoviListItem
            like ={item.like}
            filmname={item.name}
            viverew={item.viverew}
            favorite={item.favorite}
            onDelete={() => onDelete(item.id)}
            ontoggleProp={e => ontoggleProp(item.id, e.currentTarget.getAttribute("data-toggle"))}
          />
        </ul>
      ))}
    </>
  );
};

export default MovieList;
