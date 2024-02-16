import { useState, useEffect } from "react"
import axios from "axios"

import SingleToDo from "./SingleToDo"
import FilterCat from "./FilterCat"




export default function Todos() {
  const [toDos, setToDos] = useState([]);
  const [filter, setFilter] = useState(0);

  const getToDos = () => {
    axios.get(`https://localhost:7117/api/ToDos`).then((response) => {
      console.log(response)
      setToDos(response.data)
    }) 
  }
  useEffect(() => {
    getToDos()
  }, []);

  return (
    
    <section className="categories">
      <article className="p-2">
        <h1 className="text-center">ToDos</h1>
      </article>

      <FilterCat setFilter={setFilter} />

      <div className="container">
        <article className='todoContainer row justify-content-center text-center'>
          {filter === 0 ? toDos.map(r => 
            <SingleToDo key={r.toDoId} todo={r} />
          ) :
          toDos.filter(r => r.categoryId === filter).map(r => 
            <SingleToDo key={r.toDoId} todo={r} />
          )}
          {filter !== 0 && toDos.filter(r => r.categoryId === filter).length === 0 &&
            <h2 className="alert alert-warning text-dark">There are no results for this category.</h2>
          }
        </article>
      </div>
    </section>
  )
}