export default function SingleToDo({ todo }) {
    const { name, categoryName, done} = todo
  return (
    <tr>
        <td>{name}</td>
        <td>{categoryName}</td>
        <td>{done}</td>
    </tr>
  )
}