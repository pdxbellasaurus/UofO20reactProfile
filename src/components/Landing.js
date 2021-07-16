import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';


function Copyright() {
    
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      {new Date().getFullYear()}
      {' '}
      <Link color="inherit" href="https://github.com/pdxbellasaurus/">
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
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.secondary.light
  },
}));

export default function Landing() {
    
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
         <Container component="main" className={classes.main} maxWidth="md">
 <Typography variant="h2" component="h1" gutterBottom>
 Greetings! 
 <br/>
 My name is Carrie Young.
 </Typography>
 <Typography variant="h5" component="h2" gutterBottom>
   {'I am a budget and finance professional, delving into the world'} 
  {' of full stack development to master new skills, and challenge my creativity'} 
   {' and adaptability.'}

 </Typography>
 <Typography variant="body1">Sticky footer placeholder.</Typography>
<Container>
<ProjectCard></ProjectCard>

</Container>

</Container>

      <footer className={classes.footer}>
        <Container maxWidth="md">
          <Typography variant="body1">More about me, my work and how to contact me:</Typography>
          <Grid container direction="row" alignItems="center" spacing={5}>
  <Grid item>
  <Link href="https://github.com/pdxbellasaurus/">
    <GitHubIcon marginRight="1rem" fontSize="large" style={{ color: '#211F1F' }}/>
   </Link>
  </Grid>
  <Grid item>
  <Link href="mailto: carrieannyoung@gmail.com">
          <MailOutlineIcon  fontSize="large" style={{ color: '#14213d' }}/>
          </Link>
  </Grid>

  <Grid item>
  <Link>
          <LinkedInIcon fontSize="large" style={{ color: '#0072b1' }}/>
          </Link>
  </Grid>
</Grid>         
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}