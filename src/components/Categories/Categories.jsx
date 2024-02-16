import { useState, useEffect } from "react"
import axios from "axios"
import SingleCategory from "./SingleCategory"

export default function Categories() {
  const [categories, setCategories] = useState([])

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
      <article className="container rounded-4">
        <table className="table rounded-4 table-dark bg-info my-5 text-center">
          <thead>
            <tr>
              <th><strong>Name</strong></th>
              <th><strong>Description</strong></th>
            </tr>
          </thead>
          <tbody>
          {categories.map(c =>
          <SingleCategory key={c.categoryId} category={c} />
          )}
          </tbody>
        </table>
      </article>
    </section>
  )
}
