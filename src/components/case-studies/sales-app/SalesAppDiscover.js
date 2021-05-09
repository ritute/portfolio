import React, { Fragment } from 'react'

import SectionCards from 'components/case-studies/SectionCards'
import {
  Section,
  SectionContent,
  SectionHeader,
} from 'components/case-studies/Section'

const InitialProposal = () => (
  <Fragment>
    <SectionContent title='Initial Proposal'>
      I proposed a design with fast and easy access to significant sections.
      <ul>
        <li>Main screen - contains presentations, sorted by most recent by default, with the ability to play from this screen</li>
        <li>Presentation screen - choose assets (from device or web) to arrange on a timeline</li>
      </ul>
    </SectionContent>
    <SectionContent subtitle='Design Principles'>
      <ul>
        <li>Ease of use - minimize interactions (least amount of taps), use a simple nav, and avoid any complex interactions</li>
        <li>Minimize user’s time - make their frequent interactions easily accessible</li>
        <li>Use familiar language and concepts</li>
      </ul>
    </SectionContent>
  </Fragment>
)

const SalesAppDiscover = () => (
  <Section>
    <SectionHeader title='Discover' />
    <SectionContent title='Understanding the Goal'>
      Before doing any ideation, I aimed to understand the target audience and goal with the following research data provided to us.
    </SectionContent>
    <SectionCards title='User Research' data={userResearch} circleColor='#F1E4FF' />
    <SectionContent>
      Given this data alongside performing some research on tablet applications, I arrived at the following set of assumptions and insights to guide me in my process.
    </SectionContent>
    <SectionCards title='Assumptions & Insights' data={assumptions} leftCircle={true} circleColor='#D5FAFC' />
    <InitialProposal />
  </Section>
)

const userResearch = [
  {
    title: 'General Demographics & Attributes',
    items: [
      'Large team of busy sales reps',
      'Spend most of their time on the road visiting prospects & existing clients, having sales conversations with them',
      'Skew more male over female',
      'Generally 30-50 y/o',
      'Cover large areas across the country (eg. may have clients in both Toronto and Ottawa)',
    ]
  },
  {
    title: 'Tech Skills',
    items: [
      'Given tablet ~6 months ago',
      'May have own personal touchscreen devices as well',
      'Understand how to use touchscreen device and familiar with apps, but not experts (couldn’t deal with complex settings or get under the hood)'
    ]
  },
  {
    title: 'Expectations',
    items: [
      'Intuitive, easy-to-use app',
      'Pull from library of existing assets',
      'Put together slideshow-style presentations on the go, while in transit and in between sales meetings',
      'Don\'t need a video editing app or a new PowerPoint/Keynote',
      'Combine into simple presentations'
    ]
  }
]

const assumptions = [
  {
    title: 'Users',
    items: [
      'Age group is not that tech-savvy',
      'Will be playing presentations over and over again to clients',
      'May already be familiar with using existing presentation software',
      'Ability to share content with others could be useful if they work together',
      'Might not always have internet connectivity, so ability to work offline is important'
    ]
  },
  {
    title: 'Physical Environment',
    items: [
      'Ambient light differences (work in sun or dark places)',
      'Ambient noise differences & influence of surrounding people (may need to suddenly turn off sound or pause presentation)',
      'Editing a presentation while in jarring motion (e.g. on train)'
    ]
  },
  {
    title: 'Nature of Tablets',
    items: [
      'Design for “fat fingers”',
      'Difficulty of typing text (use autocomplete, as little typing as possible)',
      'Portrait & landscape modes',
      'Gestural inputs: tap, drag, swipe',
      'Different operation systems (android, iOS)',
      'Limited set of needs over a desktop app'
    ]
  }
]

export default SalesAppDiscover
