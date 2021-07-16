import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
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
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <>
    {projects.map((project, index) => (

        <Card className={classes.root} key={index}>
        <CardHeader
          title={project.name}
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image={project.image}
          title="image description here"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.short}
          </Typography>
        </CardContent>
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
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Application Description:</Typography>
            <Typography paragraph>
              {project.description}
            </Typography>
            <Typography paragraph>
            {project.tech}
            </Typography>        
          </CardContent>
        </Collapse>
      </Card>

        ))}
   </>
  );
}

