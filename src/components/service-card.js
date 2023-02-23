import React from 'react'

import PropTypes from 'prop-types'

import './service-card.css'

const ServiceCard = (props) => {
  return (
    <div className="service-card-container">
      <div className="service-card-container1">
        <svg viewBox="0 0 1024 1024" className="service-card-icon">
          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
        </svg>
      </div>
      <h1 className="service-card-text TextXL">{props.heading}</h1>
      <span className="service-card-text1">{props.text}</span>
    </div>
  )
}

ServiceCard.defaultProps = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at vulputate magna, quis vehicula felis. Pellentesque hendrerit risus id lectus luctus volutpat. Curabitur eget ipsum gravida, lacinia nisl consequat, rhoncus sem. Donec at ante vel libero volutpat maximus ac quis elit. Sed blandit eros a libero tincidunt vehicula",
  heading: 'Lorem ipsum dolor',
}

ServiceCard.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default ServiceCard
