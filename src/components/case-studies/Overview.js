import React from 'react'
import PropTypes from 'prop-types'
import {
  Section,
  SectionContent
} from './Section'

const Overview = (props) => {
  return (
    <Section>
      {props.sections.map((section, index) => (
        <SectionContent key={index} title={section.title}>
          {section.description}
        </SectionContent>
      ))}
    </Section>
  )
}

Overview.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]).isRequired
  }))
}

export default Overview
