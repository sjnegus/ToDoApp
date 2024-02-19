import ToDoForm from "./ToDoForm"

export default function CreateToDo({ setShowCreate, getToDos }) {
  return (
    <article className="createResource m-2 text-white justify-content-center">
        <ToDoForm setShowCreate={setShowCreate} getToDos={getToDos} />
    </article>
  )
}