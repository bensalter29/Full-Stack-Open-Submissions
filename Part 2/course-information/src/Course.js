const Part = ({part}) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Content = ({parts}) => {
    let exerciseSum = parts.map(part => part.exercises)
        .reduce((accumulator, currentValue) => accumulator + currentValue)

    return (
        <>
            {parts.map((part, i) => <Part key={i} part={part}/>)}
            <p><strong>total of {exerciseSum} exercises</strong></p>
        </>
    )
}

const Course = ({course}) => {
    let name = course.name
    let parts = course.parts

    return (
        <div>
            <h2>{name}</h2>
            <Content parts = {parts}/>
        </div>
    )
}

export default Course