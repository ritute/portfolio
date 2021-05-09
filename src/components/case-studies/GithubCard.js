import React, { useState, useEffect } from 'react'
import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
  Grid,
} from '@material-ui/core'
import {
  RepoIcon,
  LinkIcon,
} from '@primer/octicons-react'
import { Zoom } from 'react-awesome-reveal'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '500px',
    padding: theme.spacing(4),
  },
}))

const GithubCard = ({ repoName }) => {
  const classes = useStyles()
  const [repo, setRepoData] = useState({
    full_name: '',
    language: '',
    description: '',
    homepage: '',
    html_url: '',
    owner: {}
  })

  useEffect(() => {
    const fetchData = async() => {
      const result = await axios(`https://api.github.com/repos/ritute/${repoName}`)
      setRepoData(result.data)
    }
    fetchData()
  }, [repoName])

  return (
    <Zoom>
      <Grid container alignItems='center' justify='center'>
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar src={repo.owner.avatar_url} />}
            title={<Typography variant='subtitle1'>{repo.full_name}</Typography>}
            subheader={repo.language}
          />
          <CardContent>
            <Typography variant='body2'>
              {repo.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  variant='outlined'
                  startIcon={<RepoIcon />}
                  href={repo.html_url}
                  target='_blank'>
                  View Repository
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='outlined'
                  startIcon={<LinkIcon />}
                  href={repo.homepage}
                  target='_blank'>
                  View Live Demo
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Zoom>
  )
}

export default GithubCard
