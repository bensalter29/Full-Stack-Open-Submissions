import React from "react";

const Header = (props) => (
    <h1>{props.courseName}</h1>
)

const Part = (props) => <p>{props.part.name} {props.part.exercises}</p>

const Content = (props) => {
  return (
      <div>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
      </div>
  )
}

const Total = (props) => (
    <p>Number of exercises {props.total}</p>
)

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
        <Header courseName={course.name} />
        <Content parts={course.parts} />
        <Total total={course.parts.length} />
      </div>
  )
}

export default App

