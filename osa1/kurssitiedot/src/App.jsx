
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

  {props.course.parts.map(value => {
    
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
  props.course.parts.forEach(value => {
    sum += value.exercises
  });
return (
  <div>
    <p>Number of exercises {sum} </p>
  </div>
)
}

const App = () => {
  
  const course = {

  name: 'Half Stack application development',

  parts: [
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

}
  
  return (
    <div>
      <Header nimi='Half Stack application development'/>
      
      <Content course={course}/>
      
      <Total course={course}/>
    </div>
  )
}

      export default App