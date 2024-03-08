// import React from "react"
import { useState } from "react"
import { FaEdit, FaTrashAlt } from "react-icons/fa"
import axios from "axios"
// import { useAuth } from "../../contexts/AuthContext"
import EditToDo from "./EditToDo"

export default function SingleToDo({ todo, getToDos }) {
  const { toDoId, name, category, done } = todo

  const [showEdit, setShowEdit] = useState(false)

  // const currentUser = useAuth()

const completeTask = () => {
  let updatedToDo = {
    toDoId: toDoId,
    name: name,
    category: category, // Include the category here
    done: !done,
  };
  axios
    .put(`https://localhost:7117/api/ToDos/${toDoId}`, updatedToDo)
    .then((response) => {
      console.log(response);
      getToDos();
    })
    .catch((error) => {
      console.error("Error completing task:", error);
    });
};


  const deleteToDo = (id) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      axios.delete(`https://localhost:7117/api/ToDos/${id}`)
      .then(() => getToDos())
    }
  }

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          className="checkbox"
          checked={done}
          onChange={() => completeTask()}
        />
      </td>
      <td>{name}</td>
      <td>{category ? category.categoryName : "No Category"}</td>

      <td className="text-center">
        <button
          className="fs-5 rounded"
          id="editLink"
          onClick={() => setShowEdit(true)}
        >
          <FaEdit />
        </button>
        &emsp;
        <button
          className="fs-5 rounded"
          id="deleteLink"
          onClick={() => deleteToDo(toDoId)}
        >
          <FaTrashAlt />
        </button>
        {showEdit && (
          <EditToDo
            todo={todo}
            getToDos={getToDos}
            showEdit={showEdit}
            setShowEdit={setShowEdit}
          />
        )}
      </td>
    </tr>
  )
}
