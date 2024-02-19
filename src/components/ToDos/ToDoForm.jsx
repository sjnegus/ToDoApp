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
                // done: values.done
            }

            axios.put(`https://localhost:7117/api/ToDos/${toDoId}`, toDoToEdit).then(() => {
                setShowEdit(false)
                getToDos()
            })
        }
    }
  return (
    <div>
        <Formik 
        initialValues={{
            done: false,
            todo: todo ? name : '',
            categoryName: categoryName ? categoryName : ''
            }}
        validationSchema={toDoSchema}
        onSubmit={(values) => handleSubmit(values)}>
            {({ errors, touched }) => (
                <Form id='todoForm' className="row text-center m-auto">
                    <div className="form-group m-1 p-1">
                        <Field name='todoName' className='form-control' placeholder="New To Do" />
                        {errors.todoName && touched.todoName &&
                            <div className="text-danger">{errors.todoName}</div>
                        }                        
                    </div>
                    <div className="form-group m-1 p-1">
                        <Field as='select' className='form-control' name='categoryId'>
                            <option value='' disabled>
                                [--Please Choose--]
                            </option>
                            {categories.map(cat =>
                                <option key={cat.categoyId} value={cat.categoyId}>
                                    {cat.categoryName}
                                </option>    
                            )}
                        </Field>                                                
                    </div>
                    <div className="form-group m-3">
                    <button type="submit" className="btn btn-success m-3">
                        Add to List
                    </button>
                </div>
                </Form>
            )}
        </Formik>
    </div>
  )
}