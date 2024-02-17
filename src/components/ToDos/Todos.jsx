import { useState, useEffect } from "react"
import axios from "axios"
import { useAuth } from "../../contexts/AuthContext"
import { Container, Table } from "react-bootstrap"
import SingleToDo from "./SingleToDo"
import FilterCat from "./FilterCat"

export default function Todos() {
  const [toDos, setToDos] = useState([])
  const [filter, setFilter] = useState(0)
  const [showDone, setShowDone] = useState(false)

  const { currentUser } = useAuth()

  const getToDos = () => {
    axios.get(`https://localhost:7117/api/ToDos`).then((response) => {
      console.log(response)
      setToDos(response.data)
    })
  }
  useEffect(() => {
    getToDos()
  }, [])

  return (
    <section className="categories">
      <article className="p-2">
        <h1 className="text-center">ToDos</h1>
      </article>

      <FilterCat
        showDone={showDone}
        setShowDone={setShowDone}
        setFilter={setFilter}
      />

      <Container className="pt-4">
        <Table bordered hover variant="dark">
          <thead>
            <tr>
              <th>Done?</th>
              <th>To Do</th>
              <th>Category</th>
              {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL && (
                <th>Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {!showDone ? (
              <>
                {filter === 0
                  ? toDos
                      .filter((r) => r.done === false)
                      .map((r) => (
                        <SingleToDo
                          key={r.toDoId}
                          todo={r}
                          getToDos={getToDos}
                        />
                      ))
                  : toDos
                      .filter(
                        (r) => r.categoryId === filter && r.done === false
                      )
                      .map((r) => (
                        <SingleToDo
                          key={r.toDoId}
                          todo={r}
                          getToDos={getToDos}
                        />
                      ))}
              </>
            ) : (
              <>
                {filter === 0
                  ? toDos.map((r) => (
                      <SingleToDo key={r.toDoId} todo={r} getToDos={getToDos} />
                    ))
                  : toDos
                      .filter((r) => r.categoryId === filter)
                      .map((r) => (
                        <SingleToDo
                          key={r.toDoId}
                          todo={r}
                          getToDos={getToDos}
                        />
                      ))}
              </>
            )}
          </tbody>
        </Table>
        {!showDone ? (
          <>
            {filter !== 0 &&
              toDos.filter((x) => x.done === false && x.categoryId === filter)
                .length === 0 && (
                <h2 className="alert alert-warning text-dark">
                  There are no incomplete To Do items in this category.
                </h2>
              )}
          </>
        ) : (
          <>
            {filter !== 0 &&
              toDos.filter((x) => x.categoryId === filter).length === 0 && (
                <h2 className="alert alert-warning text-dark">
                  There are no To Do items in this category.
                </h2>
              )}
          </>
        )}
      </Container>
    </section>
  )
}
