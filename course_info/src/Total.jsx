const Total = ({course}) => {
  const initialValue = 0
  const sum = course.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    initialValue
  )
  return (
    <div>
      <b>total of {sum} exercises</b>
    </div>
  )
}

export default Total