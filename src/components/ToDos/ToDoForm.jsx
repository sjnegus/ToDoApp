import { useState,useEffect } from "react";
import { Formik, Field, Form } from 'formik'
import { toDoSchema } from "../../utilities/validationSchema";
import axios from "axios";

export default function ToDoForm({todo = ``, setShowCreate, setShowEdit, getToDos }) {
    const { toDoId, name, done, categoryName} = todo || ``

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7117/api/Categories`)
    }, []);

    const handleSubmit = (values) => {
        console.log(values)
        if(!todo){
            const toDoToCreate = values

            axios.post(`https://localhost:7117/api/ToDos`, toDoToCreate).then(() => {
                setShowCreate(false)
                getToDos()
            })
        }else{
            const toDoToEdit = {
                toDoId: toDoId,
                name: values.name,
                categoryName: values.categoryName,
                done: values.done
            }
        }
    }
  return (
    <div>ToDoForm</div>
  )
}