import Modal from "react-bootstrap/Modal"
import CategoryForm from "./CategoryForm"

export default function EditCategory({
  category,
  showEdit,
  setShowEdit,
  getCategories,
}) {
  const { categoryName } = category
  return (
    <Modal show={showEdit} onHide={() => setShowEdit(false)} size="lg">
      <Modal.Header closeButton>
        <h2>Editing {categoryName}</h2>
      </Modal.Header>
      <Modal.Body>
        <CategoryForm
          category={category}
          setShowEdit={setShowEdit}
          getCategories={getCategories}
        />
      </Modal.Body>
    </Modal>
  )
}
