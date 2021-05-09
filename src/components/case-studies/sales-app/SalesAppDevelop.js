import React from 'react'

import {
  Section,
  SectionContent,
  SectionHeader,
} from 'components/case-studies/Section'

import GithubCard from 'components/case-studies/GithubCard'

const SalesAppDevelop = () => (
  <Section>
    <SectionHeader title='Develop' />
    <SectionContent>
      As a personal project to familiarize with React/Redux and Material UI, I decided to implement my design as a web app.
    </SectionContent>
    <GithubCard repoName='sales-presentation-app' />
  </Section>
)

export default SalesAppDevelop
