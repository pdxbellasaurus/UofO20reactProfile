import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LaunchIcon from '@material-ui/icons/Launch';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import projects from "../projects.json";
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 365
             },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    
  }));

export default function ProjectCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(-1);

  const handleExpandClick = (i) => {
    setExpanded(expanded === i ? -1 : i);
  };

  return (
    <Container >
     
      <Grid container direction="row" alignItems="flex-start" spacing={2}>
  
    {projects.map((project, index) => (
      <Grid item xs={5} >
        <Card className={classes.root} key={index} bgcolor="primary.main" height='100%'>
        <CardHeader
          title={project.name}
          subheader={project.short}
        />
        <CardMedia
          className={classes.media}
          image={project.image}
          title="image description here"
        />
       
        <CardActions disableSpacing>
          <IconButton aria-label="launch application" href={project.app}>
            <LaunchIcon />
          </IconButton>
          <IconButton aria-label="visit respository" href={project.repo}> 
            <BookOutlinedIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={() => handleExpandClick (index)}
            aria-expanded={expanded === index}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded === index} timeout="auto" unmountOnExit >
          <CardContent>
           <Typography variant="body2" component="p">
              {project.description}
            </Typography>
            <hr/>
            <Typography paragraph variant="body2" component="p">
           <strong>Made with:</strong>   
              <br/>
            {
              project.tech.map((item, i) => (
                <img key={i} alt={item.name} src={item.badge}/>
              ))
            }   
            {/* {project.tech} */}
            </Typography> 

               
          </CardContent>
        </Collapse>
      </Card>
</Grid>

        ))}
        </Grid>
   </Container>
  );
}

