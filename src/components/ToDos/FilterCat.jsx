// This component will house a button for each category, as well as an "All" button for removing filtering in Resources.jsx
import { useState, useEffect } from "react"
import axios from "axios"
import { ImEye, ImEyeBlocked } from 'react-icons/im'

// Below, we destructure the setFilter function off of the props object
export default function FilterCat({ setFilter, showDone, setShowDone, setCurrentCategory }) {
  // We need the categories from the API to map the buttons, so store them in a hook!
  const [categories, setCategories] = useState([])

  const handleCurrentCat = (id) => {
    setFilter(id)
    if(id !== 0) {
    axios.get(`https://localhost:7117/api/Categories/${id}`).then(response => {
      setCurrentCategory(response.data.categoryName)
    })
  } else {
    setFilter(id)
    setCurrentCategory('all categories')
  }
  }

  //Below, we write the functionality of getCategories directly in a useEffect, essentially cutting out the "middle man" function.
  useEffect(() => {
    axios.get(`https://localhost:7117/api/Categories`).then((response) => {
      // console.log(response)
      setCategories(response.data)
    })
  }, [])
  return (
     <div className="text-center mt-5">
        <button onClick={() => handleCurrentCat(0)} className="btn btn-outline-warning bg-dark m-2">
            All
        </button>
        {/* Below, we map all of the categories to a button that will be used to filter resources on that category */}
        {categories.map(c => 
          <button key={c.categoryId} onClick={() => handleCurrentCat(+c.categoryId)} className="btn btn-outline-warning bg-dark m-2">
            {c.categoryName}
          </button>    
        )}

        {!showDone ?
          <button className="btn btn-success m-1" onClick={() => setShowDone(true)}>
            Show Complete &ensp; <ImEye />
          </button>  :
          <button className="btn btn-danger m-1" onClick={() => setShowDone(false)}>
            Hide Complete &ensp; <ImEyeBlocked/>
          </button>
      }
     </div>
    )
}