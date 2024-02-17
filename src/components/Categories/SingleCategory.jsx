import { useAuth } from "../../contexts/AuthContext"
import { useState, useEffect } from "react"
import {FaEdit, FaTrashAlt } from 'react-icons/fa'

import axios from "axios"
import EditCategory from "./EditCategory"


export default function SingleCategory({ category, getCategories }) {
    const { categoryName, categoryDescription, categoryId } = category

    // Hooks for edit
    const { currentUser } = useAuth()
    const [showEdit, setShowEdit] = useState(false);

    const [toDos, setToDos] = useState([]);

    useEffect(() => {
      axios.get(`https://localhost:7117/api/ToDos`).then(x => setToDos(x.data))
    }, []);

    const deleteCat = (id) => {
      if(window.confirm(`Are you sure you want to delete ${categoryName}?`)){
        if(toDos.filter(x => x.categoryId === id).length > 0){
          window.alert(`ERROR: Cannot delete the category ${categoryName} because it contains the following resources:
          ${toDos.filter(x => x.categoryId === id).map(x => `\n${x.name}`)}\nPlease delete these items or reassign them to a different category before deleting ${categoryName}!`)
        } else {
          axios.delete(`https://localhost:7117/api/Categories/${id}`).then(() => getCategories())
        }
      }
    }


  return (
    <tr>
        <td>{categoryName}</td>
        <td>{categoryDescription}</td>
        {/* EDIT UI BEGIN */}
        {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL &&
          <td>
            <button className="m-1 rounded" onClick={() => setShowEdit(true)} id="editLink"><FaEdit /></button>
            <button className="m-1 rounded" onClick={() => deleteCat(categoryId)} id="deleteLink"><FaTrashAlt /></button>
            {showEdit && 
            <EditCategory category={category} showEdit={showEdit} setShowEdit={setShowEdit} getCategories={getCategories} />
            }
          </td>
        }
        {/* EDIT UI END */}
        <td></td>
    </tr>
  )
}