// Write your code

import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectItem} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectItem
  return (
    <div className="projectTimelineCard-container">
      <img src={imageUrl} alt="project" className="img" />
      <div className="title-container">
        <h1 className="heading">{projectTitle}</h1>
        <div className="icon-container">
          <AiFillCalendar className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="visit">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
