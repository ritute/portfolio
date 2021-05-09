import React, { Fragment } from 'react'

import Footer from 'components/Footer'
import SummitStrongThumbnail from 'components/thumbnails/SummitStrongThumbnail'
import Overview from 'components/case-studies/Overview'
import ProcessOverview from 'components/case-studies/ProcessOverview'
import Banner from 'components/case-studies/Banner'
import ScrollTop from 'components/ScrollTop'
import SummitStrongDiscover from './SummitStrongDiscover'
import SummitStrongLearnings from './SummitStrongLearnings'
import SummitStrongIdeate from './SummitStrongIdeate'
import SummitStrongDesign from './SummitStrongDesign'
// import SalesAppPrototype from './SalesAppPrototype'

import {
  DiscoverIcon,
  IdeateIcon,
  DesignIcon,
  PrototypeIcon
} from 'components/icons/LordIcons'

const SummitStrongCaseStudy = () => {
  return (
    <Fragment>
      <main>
        <Banner {...bannerProps} />
        <Overview sections={overviewSections} />
        <ProcessOverview steps={processSteps} />
        <SummitStrongDiscover />
        <SummitStrongIdeate />
        <SummitStrongDesign />
        {/* <SalesAppPrototype /> */}
        <SummitStrongLearnings />
        <ScrollTop />
      </main>
      <Footer />
    </Fragment>
  )
}

const overviewSections = [
  {
    title: 'Project Brief',
    description:
      <div>
        <p>A self-initiated personal project to design an app for endurance athletes to track their training</p>
        <p>Having spent the past few years passionately engaged in ultra-running and the world of endurance, I was interested in designing a new app to help track training. In particular, after discovering the exceptional Uphill Athlete books and resources with an aim to structure and improve my training, I wanted a tool to help me out with this. </p>
      </div>
  },
  {
    title: 'The Goal',
    description: 'Design an app for endurance athletes to track their training'
  },
  {
    title: 'Responsibilities',
    description: 'User research, prototyping, and UI design'
  },
  {
    title: 'Tools',
    description: 'Figma'
  },
]

const processSteps = [
  {
    title: 'Discover',
    icon: DiscoverIcon,
    description: 'Learn audience, understand goal and look at other ideas'
  },
  {
    title: 'Ideate',
    icon: IdeateIcon,
    description: 'Create several sketches of potential solutions and wireframes'
  },
  {
    title: 'Design',
    icon: DesignIcon,
    description: 'Design the hi-fidelity mockups'
  },
  {
    title: 'Prototype',
    icon: PrototypeIcon,
    description: 'Create a clickable prototype to demonstrate the design'
  },
]

const bannerProps = {
  title: 'Summit Strong - UI/UX Design',
  description: 'A training platform for the mountain athlete',
  thumbnail: SummitStrongThumbnail
}

export default SummitStrongCaseStudy
