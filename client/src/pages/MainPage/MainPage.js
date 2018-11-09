import React from "react";
import Grid from '@material-ui/core/Grid';
import SignIn from "../../components/SignIn";
import PetSitter from "../../components/PetSitter";
import Nav from "../../components/Nav";

const MainPage = () => (
  

  <Grid container> 
  <Nav />
  <Grid container>
  <SignIn spacing={8} />
  </Grid>
{/* <PetSitter spacing={8} /> */}
</Grid>
);

export default MainPage;
