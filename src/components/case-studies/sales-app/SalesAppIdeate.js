import React from 'react'

import {
  Section,
  SectionContent,
  SectionHeader,
  SectionMedia,
} from 'components/case-studies/Section'

import sketchesImage from 'images/sales-app/sketches.png'
import userFlowImage from 'images/sales-app/flow.png'
import wireframesImage from 'images/sales-app/wireframes.png'
import revisedWireframesImage from 'images/sales-app/wireframe-revisions.png'

const SalesAppIdeate = () => (
  <Section>
    <SectionHeader title='Ideate' />
    <SectionContent title='Generate Ideas'>
      I started with sketching out various ideas with pen and paper and laying out the user flow. I researched other presentation software for ideas during this process.
    </SectionContent>
    <SectionMedia src={sketchesImage} width='1049' height='601' />
    <SectionMedia src={userFlowImage} width='1097' height='433' />
    <SectionContent title='Wireframes'>
      I then proceeded to create mid-fidelity wireframes with Balsamiq to further the development of my idea. These were shared with my classmates and reviewed by my instructor.
    </SectionContent>
    <SectionContent subtitle='Key Decisions & Insights'>
      <ul>
        <li>Use of thumbnail grid for list of presentations - easy target for tablet users since it establishes generous height for the item to make it easier to tap on, and image helps identify item/scan quickly</li>
        <li>Typical presentation software such as Keynote allow you to add a lot of custom content to your slides, so the current slide has big focus and takes up most space; in this case, a single slide doesn't need to be the focus as it consists of a single simple asset that is non-customizable</li>
      </ul>
    </SectionContent>
    <SectionMedia src={wireframesImage} width='1016' height='693' />
    <SectionContent subtitle='Wireframe Revisions'>
      I later made a realization that to improve the usability of the presentation UI, the emphasis needed to be placed on browsable assets as this would be a primary function. Instead of having the user open up a modal that shows the available assets, I moved it directly into the UI to the left of the timeline to make it super easy to select and drag items into the timeline.
    </SectionContent>
    <SectionMedia src={revisedWireframesImage} width='3737' height='1387' />
  </Section>
)

export default SalesAppIdeate
