import React, { Fragment } from 'react'

import {
  Section,
  SectionContent,
  SectionHeader,
  SectionMedia,
  SectionWithBackground,
} from 'components/case-studies/Section'

import styleGuideImage from 'images/sales-app/style-guide.png'
import designImage from 'images/sales-app/design.png'

const SalesAppDesign = () => {
  return (
    <Fragment>
      <Section>
        <SectionHeader title='Design' />
        <SectionContent title='Look & Feel'>
          I decided to use Material Design as my design system with the following customizations. I chose to go with a dark blue for the primary color to denote corporate/trust/professional and accomodate audience preferences (skew more towards males).
          <SectionMedia src={styleGuideImage} width='836' height='583' />
        </SectionContent>
        <SectionContent title='Hi-Fidelity Mockups'>
          I converted the mid-fidelity wireframes to hi-fidelity mockups in Figma using the proposed style guide.
        </SectionContent>
      </Section>
      <SectionWithBackground>
        <SectionMedia src={designImage} width='2212' height='1608' />
      </SectionWithBackground>
    </Fragment>
  )
}

export default SalesAppDesign
