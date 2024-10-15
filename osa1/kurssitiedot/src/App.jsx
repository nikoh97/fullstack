
const Header = (props) => {
return(
  <div>
    <h1>{props.nimi}</h1>
  </div>
)

} 

const Content = (props) => {
console.log(props)
return (
  <div>
    <Part teksti={props.part1.name} harjoitus={props.part1.exercises}/>
    <Part teksti={props.part2.name} harjoitus={props.part2.exercises}/>
    <Part teksti={props.part3.name} harjoitus={props.part3.exercises}/>
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
  
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  return (
    <div>
      <Header nimi='Half Stack application development'/>
      
      <Content part1={part1} part2={part2} part3={part3}/>
      
      <Total yht= {part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App