import { useState, useEffect } from "react"
import axios from "axios"
import SingleCategory from "./SingleCategory"
import { useAuth } from "../../contexts/AuthContext"
import CreateCategory from "./CreateCategory"

export default function Categories() {
  const [categories, setCategories] = useState([])

  // Hooks for create functionality
  const { currentUser } = useAuth()
  const [showCreate, setShowCreate] = useState(false)

  const getCategories = () => {
    axios.get(`https://localhost:7117/api/Categories`).then((response) => {
      console.log(response)
      setCategories(response.data)
    })
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <section className="categories">
      <article className="p-2">
        <h1 className="text-center">Categories</h1>
      </article>
      {/* BEGIN CREATE UI */}
      {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL &&
          <div id="create-bg" className=" p-2 mb-3  text-center">
            {showCreate ? 
              <>
              <button onClick={() => setShowCreate(false)} className="btn btn-warning">
                Cancel
              </button>
              <CreateCategory setShowCreate={setShowCreate} getCategories={getCategories} />
              </> :
              <>
              <button onClick={() => setShowCreate(true)} className="btn btn-warning">
                Create Category
              </button>
              </>
            }
          </div>          
        }
      {/* END CREATE UI */}

      <article className="container">
        <table className="table table-dark bg-dark my-5 text-center">
          <thead>
          <tr>
              <th>Name</th>
              <th>Description</th>
              {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL &&
                 <th>Actions</th>
              }
            </tr>
          </thead>
          <tbody>
            {/* READ UI BEGINS */}
            {categories.map((c) => (
              <SingleCategory key={c.categoryId} getCategories={getCategories} category={c} />
            ))}
            {/* READ UI ENDS */}
          </tbody>
        </table>
      </article>
    </section>
  )
}
