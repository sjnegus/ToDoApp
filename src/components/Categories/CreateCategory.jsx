import CategoryForm from "./CategoryForm"

export default function CreateCategory({ setShowCreate, getCategories }) {
  return (
    <div className="createCategory m-2 text-center">
        <CategoryForm setShowCreate={setShowCreate} getCategories={getCategories}></CategoryForm>
    </div>
  )
}