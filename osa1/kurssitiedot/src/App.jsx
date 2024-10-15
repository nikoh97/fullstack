
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

  {props.parts.map(value => {
    
    return <Part teksti={value.name} harjoitus={value.exercises}/>
  })}
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
  let sum = 0
  props.parts.forEach(value => {
    sum += value.exercises
  });
return (
  <div>
    <p>Number of exercises {sum} </p>
  </div>
)
}

const App = () => {
  
  const course = 'Half Stack application development'

  const parts = [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
    {
    name: 'Using props to pass data',
    exercises: 7
    },
    {
    name: 'State of a component',
    exercises: 14
    }
  ]
  
  return (
    <div>
      <Header nimi='Half Stack application development'/>
      
      <Content parts={parts}/>
      
      <Total parts={parts}/>
    </div>
  )
}

export default App