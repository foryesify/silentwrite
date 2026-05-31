export default function Menu({ items }) {
  return (
    <div className="wrapper menu">
      {items.forEach(el => (
        <div onClick={el[1]}>el[0]</div>
      ))}
    </div>
  )
}
