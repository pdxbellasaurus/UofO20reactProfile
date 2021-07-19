import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import ProjectCard from './ProjectCard';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary'>
      {'Copyright © '}
      {new Date().getFullYear()}{' '}
      <Link color='inherit' href='https://github.com/pdxbellasaurus/'>
        Carrie Young | <strong>PDX</strong>bellasaurus
      </Link>
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    marginBottom: theme.spacing(20),
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white
  
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    width: '100%',
    bottom: 0,
    position: 'fixed',
    marginTop: 'auto',
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.dark,
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container component='main' className={classes.main} maxWidth='md'>
        <Typography variant='h2' component='h1' gutterBottom>
          Greetings!
          <br />
          My name is Carrie Young.
        </Typography>
        <Typography variant='h5' component='h2' gutterBottom>
          {'I am a budget and finance professional, delving into the world'}
          {' of full stack development to master new skills, and challenge '}
          {'my creativity and adaptability.'}
                
        </Typography>
        <Typography variant='body1' >
            See and interact with some of my work below.
          </Typography>
        
      </Container>
    <Container>
    <Typography variant='h3' component='h2' gutterBottom>
         My Work
        </Typography>
    <ProjectCard/>
    </Container>
    
      <footer className={classes.footer}>
        <Container maxWidth='md'>
          <Typography variant='body1'>
            More about me, my work and how to contact me:
          </Typography>
          <Grid container direction='row' alignItems='center' spacing={5}>
            <Grid item>
              <Link href='https://github.com/pdxbellasaurus/'>
                <GitHubIcon
                  marginRight='1rem'
                  fontSize='large'
                  style={{ color: '#211F1F' }}
                />
              </Link>
            </Grid>
            <Grid item>
              <Link href='mailto: carrieannyoung@gmail.com'>
                <MailOutlineIcon
                  fontSize='large'
                  style={{ color: '#14213d' }}
                />
              </Link>
            </Grid>

            <Grid item>
              <Link>
                <LinkedInIcon fontSize='large' style={{ color: '#0072b1' }} />
              </Link>
            </Grid>
          </Grid>
          
          <Copyright />
          <Typography style={{ color: '#14353d' }}>
            {'Made with '} <span style={{ color: '#3d1421' }}>❤</span> {'and '} 
            <img alt='material ui' src="https://img.shields.io/badge/Material--UI-0081CB?style=flat&logo=material-ui&logoColor=white"/>
          </Typography>
          
        </Container>
      </footer>
    </div>
  );
}
