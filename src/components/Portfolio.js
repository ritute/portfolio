import React, { Fragment } from 'react'
import {
  makeStyles,
  CssBaseline,
  Container
} from '@material-ui/core'
import {
  MuiThemeProvider,
  // Open issue: https://github.com/mui-org/material-ui/issues/13394
  unstable_createMuiStrictModeTheme as createMuiTheme
} from '@material-ui/core/styles'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Work from './Work'
import About from './About'
import SalesAppCaseStudy from './case-studies/sales-app/SalesAppCaseStudy'
// import SummitStrongCaseStudy from './case-studies/summit-strong/SummitStrongCaseStudy'
import CustomMuiTheme from 'config/muiTheme'
import RouteScrollToTop from './RouteScrollToTop'

const theme = createMuiTheme(CustomMuiTheme)

const useStyles = makeStyles(theme => ({
  main: {
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4, 0),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4, '10%'),
    },
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Header />
      <Container maxWidth='lg'>
        <main className={classes.main}>
          <Work />
        </main>
      </Container>
      <About />
      <Footer />
    </Fragment>
  )
}

const Routes = () => (
  <Switch>
    <Route path='/sales-app-case-study'>
      <SalesAppCaseStudy />
    </Route>
    {/* <Route path='/summit-strong-case-study'>
      <SummitStrongCaseStudy />
    </Route> */}
    <Route path='/'>
      <Home />
    </Route>
    <Redirect to='/' />
  </Switch>
)

const Portfolio = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <RouteScrollToTop />
        <Routes />
      </Router>
    </MuiThemeProvider>
  )
}

export default Portfolio
