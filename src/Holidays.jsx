import Christmas from "./Christmas"
import NewYears from "./NewYears"

const Holidays = (props) => {
  return (
    <div>
      <h4>Holidays</h4>
      <Christmas 
        traditions={["cookies", "caroling", "presents"]}
      />
      <NewYears />
    </div>
  )
}

export default Holidays