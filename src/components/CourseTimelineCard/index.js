// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseItem} = props
  const {courseTitle, description, duration, tagsList} = courseItem
  return (
    <div className="CourseTimelineCard-container">
      <div className="title-container">
        <h1 className="heading">{courseTitle}</h1>
        <div className="icon-container">
          <AiFillClockCircle className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="list">
        {tagsList.map(eachItem => (
          <li key={eachItem.id}>
            <p className="tagItem">{eachItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
