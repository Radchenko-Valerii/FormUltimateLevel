import React, { FC, ReactNode } from "react"
import { Container } from '@mui/material';
import { createStyles, makeStyles } from "@mui/styles";
import { IDefaultComponent } from "../types/types";



const useStyles = makeStyles((theme: any) =>
createStyles({
  root: {
    marginTop: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
}),
);

export const MainContainer: FC<IDefaultComponent> = ({ children, ...props}) =>{
  const styles = useStyles();

  
  
  return (<Container className={styles.root} maxWidth="sm" {...props}>
  {children}
  </Container>)
}