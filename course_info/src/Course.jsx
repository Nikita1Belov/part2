import SubTitle from './SubTittle.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'

const Course = ({course}) => {

  return(
    <div>
        <SubTitle course={course}/>
        <Content course={course}/>
        <Total course={course}/>
    </div>
  )
}

export default Course