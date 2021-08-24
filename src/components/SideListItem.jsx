export default function SideListItem(props) {
  const { isSelectedCripto, selectCripto, item } = props
  const { id, name } = item

  // const id = item.id
  // const name = item.name
  return (
    <li>
      <button
        className={isSelectedCripto(id) ? 'selected' : ''}
        onClick={() => selectCripto(id)}
      >
        {name}
      </button>
    </li>
  )
}
