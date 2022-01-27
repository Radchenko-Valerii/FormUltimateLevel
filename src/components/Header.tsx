import { createStyles, makeStyles } from '@mui/styles';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      margin: "5px",
      textAlign: 'center',
      fontSize: "35px",
      color: "red",
      textShadow: "1px 1px darkmagenta"
    },
  }),
);

// const theme = createTheme();

export const Header = () => {
  const classes = useStyles();
  return (<Typography 
    className={classes.root} 
    component="h1" 
    variant="h5"> 
    Enter the FORM 
    </Typography>
  );
}