export default function SingleCategory({ category }) {
    const { categoryName, categoryDescription } = category
  return (
    <tr>
        <td>{categoryName}</td>
        <td>{categoryDescription}</td>
    </tr>
  )
}