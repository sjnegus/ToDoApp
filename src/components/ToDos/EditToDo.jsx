import { Modal } from 'react-bootstrap'
import ToDoForm from './ToDoForm'

export default function EditToDo({ todo, showEdit, setShowEdit, getToDos }) {
    const { name } = todo
  return (
    <Modal
    show={showEdit}
    onHide={() => setShowEdit(false)}>
        <Modal.Header closeButton>
            <h3>Editing {name}</h3>
        </Modal.Header>
        <Modal.Body>
            <ToDoForm getToDos={getToDos} setShowEdit={setShowEdit} todo={todo} />
        </Modal.Body>
    </Modal>
  )
}