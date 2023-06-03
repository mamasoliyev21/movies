import React, { useState } from "react";
import AppInfo from "../app-info/app-info";
import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import SearchPanel from "../search-panel/search-panel";
import "./app.css";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../context";

const App = () => {
  const [data, setData] = useState([
    { name: "spider man", viverew: 822, favorite: false, id: 1, like: false },
    { name: "ertugrul", viverew: 892, favorite: false, id: 2, like: false },
    { name: "hulk", viverew: 552, favorite: false, id: 4, like: false },
  ]);


  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("");
  const onDelete = (id) => {
    setData(data.filter(c => c.id !== id));
  };

  const addForm = (item) => {
    const newItem = {
      id: uuidv4(),
      viverew: item.viverew,
      name: item.name,
      favorite: false,
      like: false
    };
    const newArr = [...data, newItem];
    setData(newArr);
  };

  const ontoggleProp = (id, prop) => {
    const newArr = data.map((item) => {
      if (item.id === id) {
        return { ...item, [prop]: !item[prop] };
      }
      return item;
    });
    setData(newArr)
  };
  const searchHAndler = (arr, term) => {
    if (term === 0) {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };
const   filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => c.like);
      case "mostViewers":
        return arr.filter((c) => c.viverew > 800);
      default:
        return arr;
      }
    };
    const updateTermHandler = term => setTerm(term)
    const updateFIlterHandler = filter => setFilter(filter)

    return (
      <div className="app font-monospace">
        <div className="content ">
          <AppInfo allMovies={data.length} favoriteMovie={ data.filter(c => c.favorite).length} />
          <div className="search-panel">
            <SearchPanel updateTermHandler={updateTermHandler} />
            <AppFilter
              filter={filter}
              updateFIlterHandler={updateFIlterHandler}
            />
            <MovieList
              ontoggleProp={ontoggleProp}
              data={filterHandler(searchHAndler(data, term),filter)}
              onDelete={onDelete}
            />
            <MoviesAddForm addForm={addForm} />
          </div>
        </div>
      </div>
    );
  }; 

// class App extends Component {

//   render() {
//     const { data, term, filter } = this.state;
//     const allMovies = data.length;
//     const favoriteMovie = data.filter((c) => c.favorite).length;
//     const visibalData = this.filterHandler(
//       this.searchHAndler(data, term),
//       filter
//     );
  
//   }
// }

export default App;
