// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const courseOrProjectCards = eachItem => {
    if (eachItem.categoryId === 'COURSE') {
      return <CourseTimelineCard key={eachItem.id} courseItem={eachItem} />
    }
    return <ProjectTimelineCard key={eachItem.id} projectItem={eachItem} />
  }

  return (
    <div className="container">
      <div className="content-container">
        <div className="heading-container">
          <h1 className="main-head">
            MY JOURNEY OF <br />
            <span className="sub-head">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          items={timelineItemsList}
          theme={{
            secondary: '#ffffff',
          }}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => courseOrProjectCards(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
