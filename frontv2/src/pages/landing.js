import React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  videoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    '& video': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  content: {
    color: theme.palette.common.white,
    textAlign: 'center',
    padding: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(6),
    },
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      fontSize: '4rem',
    },
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

function HeroSection() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.heroContainer}>
      <Box className={classes.videoContainer}>
        <video src="/videos/video-1.mp4" autoPlay loop muted />
      </Box>
      <Box className={classes.content}>
        <Typography variant="h1" className={classes.title}>
          ADVENTURE AWAITS
        </Typography>
        <Typography variant="h4" className={classes.subtitle}>
          What are you waiting for?
        </Typography>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => navigate('/login')}
        >
          Explore Now
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;
