import Traditions from "./Traditions"

const Christmas = (props) => {
  console.log(props);
  return (
    <div>
      <h4>Christmas</h4>
      {props.traditions.map(tradition =>
        <Traditions tradition={tradition}/>
      )}
    </div>
  )
}

export default Christmas