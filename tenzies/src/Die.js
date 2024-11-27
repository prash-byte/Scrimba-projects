export default function Die(props) {
  const color = props.isHeld ? '#59E391' : 'white'
    return(
      <div style={{backgroundColor: color}} className="die-comp" onClick={props.holdDice}>
        {props.value}
      </div>
    )
}