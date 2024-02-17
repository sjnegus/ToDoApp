export default function SingleToDo({ todo }) {
    const { name, category, done} = todo
    console.log(todo)
  return (
    <tr>
        <td>{done}</td>
        <td>{name}</td>
        <td>{category ? category.categoryName : 'No Category'}</td>
        <td></td>
    </tr>
  )
}