const Course = (props) => {
  const otsikko = props.course.name;
  return (
    <div>
      <Header nimi={otsikko} />
      <Content courses={props.course.parts} />
      <Total course={props.course} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.nimi}</h1>;
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      {props.courses.map((value) => {
        return (
          <Part part={value} key={value.id} />
        );
      })}
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Total = (props) => {
  //let sum = 0;
  const summa = props.course.parts.reduce((sum, currentValue) => sum + currentValue.exercises, 0)
    
  return <b>Number of exercises {summa} </b>;
};

export default Course;
