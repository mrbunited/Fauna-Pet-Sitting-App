import React from "react";
import Grid from '@material-ui/core/Grid';
import SignIn from "../../components/SignIn";
import PetSitter from "../../components/PetSitter";

const MainPage = () => (
  <Grid container> 
  <SignIn spacing={8} />
<PetSitter spacing={8} />
</Grid>
);

export default MainPage;
