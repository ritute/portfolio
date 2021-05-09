import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core'

import Footer from 'components/Footer'
import SalesAppThumbnail from 'components/thumbnails/SalesAppThumbnail'
import Overview from 'components/case-studies/Overview'
import ProcessOverview from 'components/case-studies/ProcessOverview'
import Banner from 'components/case-studies/Banner'
import ScrollTop from 'components/ScrollTop'
import SalesAppDiscover from './SalesAppDiscover'
import SalesAppLearnings from './SalesAppLearnings'
import SalesAppIdeate from './SalesAppIdeate'
import SalesAppDesign from './SalesAppDesign'
import SalesAppPrototype from './SalesAppPrototype'
import SalesAppDevelop from './SalesAppDevelop'
import {
  DiscoverIcon,
  IdeateIcon,
  DesignIcon,
  PrototypeIcon
} from 'components/icons/LordIcons'

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
  }
}))

const SalesAppCaseStudy = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <main className={classes.root}>
        <Banner {...bannerProps} />
        <Overview sections={overviewSections} />
        <ProcessOverview steps={processSteps} />
        <SalesAppDiscover />
        <SalesAppIdeate />
        <SalesAppDesign />
        <SalesAppPrototype />
        <SalesAppDevelop />
        <SalesAppLearnings />
      </main>
      <ScrollTop />
      <Footer />
    </Fragment>
  )
}

const overviewSections = [
  {
    title: 'Project Brief',
    description: 'As part of the UI & Visual Design course during my UX  studies at the University of Toronto, we were asked to design a fictional tablet app for sales reps to create quick presentations on the go. With the set of requirements and user research data given to us, the purpose of this project was to apply our learnings of UI design to come up with a solution, alongside familiarizing with prototyping tools. The more thorough process of UX and testing were not part of the scope.'
  },
  {
    title: 'The Goal',
    description: 'Design a tablet app that allows sales reps to build simple yet powerful custom presentations out of a library of content (video clips, images and other visual assets) on the go.'
  },
  {
    title: 'Requirements',
    description:
      <ul>
        <li>Browse through a library of existing assets of video clips, images & PDF docs</li>
        <li>Preview assets</li>
        <li>Arrange assets on a timeline to compose a presentation</li>
        <li>Preview presentation</li>
        <li>Set start/end points for video clips</li>
        <li>Save/open/edit presentations and re-arrange them</li>
        <li>Play presentations with an option for full-screen mode</li>
      </ul>
  },
  {
    title: 'Responsibilities',
    description: 'Wireframing, prototyping, and visual design (individual project)'
  },
  {
    title: 'Deliverables',
    description: 'Mid-fidelity wireframes, hi-fidelity clickable prototype'
  },
  {
    title: 'Tools',
    description: 'Balsamiq Mockups, MockFlow, Flowchart Designer, Figma'
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
  title: 'Sales Presentation Tablet App - UI Design',
  description: 'Allows sales reps to build simple yet powerful custom presentations on the go',
  thumbnail: SalesAppThumbnail
}

export default SalesAppCaseStudy
