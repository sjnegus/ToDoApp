import { useState, useEffect } from "react"
import { Formik, Field, Form } from "formik"
import { toDoSchema } from "../../utilities/validationSchema"
import axios from "axios"

export default function ToDoForm({
  todo = ``,
  setShowCreate,
  setShowEdit,
  getToDos,
}) {
  const { toDoId, name, done, categoryId } = todo || ``

  const [categories, setCategories] = useState([])

  const getCategories = () => {
    axios
      .get(`https://localhost:7117/api/Categories`)
      .then((r) => setCategories(r.data))
  }

  const handleSubmit = (values) => {
    console.log(values)
    if (!todo) {
      const toDoToCreate = values

      axios.post(`https://localhost:7117/api/ToDos`, toDoToCreate).then(() => {
        getToDos()
        setShowCreate(false)
      })
    } else {
      const toDoToEdit = {
        toDoId: toDoId,
        name: values.name,
        done: done,
        categoryId: values.categoryId
        
      }

      axios
        .put(`https://localhost:7117/api/ToDos/${toDoId}`, toDoToEdit)
        .then(() => {
          getToDos()
          setShowEdit(false)
        })
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <Formik
      initialValues={{
        name: todo ? name : "",
        done: false,
        categoryId: todo ? categoryId : "",
      }}
      validationSchema={toDoSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ errors, touched }) => (
        <Form id="todoForm">
          <div className="form-group m-3">
            <Field
              name="name"
              className="form-control"
              placeholder="Add New To Do"
            />
            {errors.name && touched.name && (
              <div className="text-danger">{errors.name}</div>
            )}
          </div>
          <div className="form-group m-3">
            <Field as="select" className="form-control" name="categoryId">
              <option value="" disabled>
                [--Please Choose Category--]
              </option>
              {categories.map((cat) => (
                <option key={cat.categoryId} value={cat.categoryId}>
                  {cat.categoryName}
                </option>
              ))}
            </Field>
          </div>
          <div className="form-group m-3">
            <button className="btn btn-success" type="submit" >
              Update List
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
