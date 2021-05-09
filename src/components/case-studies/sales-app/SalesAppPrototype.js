import React from 'react'

import {
  Section,
  SectionContent,
  SectionHeader,
} from 'components/case-studies/Section'
import SalesAppThumbnail from 'components/thumbnails/SalesAppThumbnail'

const SalesAppPrototype = () => {
  return (
    <Section>
      <SectionHeader title='Prototype' />
      <SectionContent>
        I created an interactive prototype to demonstrate the user flow of working on and previewing a presentation. Here the user selects an existing presentation to edit and drags a new asset to their timeline. They can drag up or down to rearrange it. Finally the user previews the presentation to view their slideshow of arranged assets.
      </SectionContent>
      <SalesAppThumbnail />
    </Section>
  )
}

export default SalesAppPrototype
