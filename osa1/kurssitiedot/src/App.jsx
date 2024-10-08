
const Header = (props) => {
return(
  <div>
    <h1>{props.nimi}</h1>
  </div>
)

} 

const Content = (props) => {

return (
  <div>
    <Part teksti={props.teksti1} harjoitus={props.harjoitus1}/>
    <Part teksti={props.teksti2} harjoitus={props.harjoitus2}/>
    <Part teksti={props.teksti3} harjoitus={props.harjoitus3}/>
  </div>
)

}

const Part = (props) => {
return (
  <div>
  <p>{props.teksti} {props.harjoitus}</p>
  </div>

)

}

const Total = (props) => {
return (
  <div>
    <p>Number of exercises {props.yht} </p>
  </div>
)
}

const App = () => {
  
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div>
      <Header nimi='Half Stack application development'/>
      
      <Content teksti1={part1} harjoitus1={exercises1} teksti2={part2} harjoitus2={exercises2}teksti3={part3} harjoitus3={exercises3}/>
      
      <Total yht= {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App