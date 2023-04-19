import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="item-container">
      <img src={imgUrl} className="image" alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
