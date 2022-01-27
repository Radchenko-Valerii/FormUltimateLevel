import { Button } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React, { FC } from "react"
import { IDefaultComponent } from "../types/types"

const useStyles = makeStyles((theme: any) =>
createStyles({
  root: {
    margin: "5px",
    marginTop: "5px"
  },
}),
);


export const PrimaryButton: FC<IDefaultComponent> = ({ children, props }) => {
  
  const classes = useStyles()
  
  return (<Button
    className={classes.root} 
    type="submit" 
    fullWidth 
    variant="contained" 
    color="primary" 
    {...props}>{children}</Button>)
}