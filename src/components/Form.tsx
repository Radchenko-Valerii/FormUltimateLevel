import { createStyles, makeStyles } from "@mui/styles";
import React, { FC } from "react"
import { IFormComponent } from "../types/types"

const useStyles = makeStyles((theme: any) =>
createStyles({
  root: {
    width: "100%",
    marginTop: "5px"
  },
}),
);

export const Form: FC<IFormComponent> = ({children, ...props}) => {
  const classes = useStyles();

  return (<form 
    className={classes.root} 
    noValidate 
    {...props}
    >
      {children}
    </form>)
}