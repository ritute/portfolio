import React from 'react'
import {
  Section,
  SectionHeader,
  SectionContent,
} from 'components/case-studies/Section'

const SalesAppLearnings = () => (
  <Section>
    <SectionHeader title='Project Learnings' />
    <SectionContent>
      What I have learned from this project
      <ul>
        <li>How to use Figma to design high-fidelity mockups and create an interactive prototype</li>
        <li>How to use colors and typography to create a holistic look & feel</li>
        <li>Although this project was fictional and its purpose was to have us familiarize with hi-fidelity mockups and tools, it would have been very beneficial to involve users throughout the design process. The pivotal realization I made to move the asset library directly into the presentation UI to the left of the timeline could have been identified earlier on through user testing and observing how they compose a presentation.</li>
      </ul>
    </SectionContent>
  </Section>
)

export default SalesAppLearnings
