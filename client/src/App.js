import React from "react"
import { Container,AppBar,Typography,Grow,Grid } from "@material-ui/core";
import memories from "./images/memeories.png"
import Posts from "./components/posts/posts.js";
import Form from "./components/form/form.js";
import useStyles from "./styles.js"

const App=()=>{
    const classes =useStyles();
    return(
        <Container maxidth="lg">
            <AppBar ClassName={classes.appBar} postion="static" color="inherit">
                <Typography className={classes.heading} varient="h2" align="center">Memories

                </Typography>
                <img className={classes.image}src="{memories}" alt="memeories" height="60"></img>

            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignitems="stretch" sapcing={3}>
                        <Grid item xs={12} sm={7}></Grid>
<Posts/>
                    
                    <Grid item xs={12} sm={4}>

                   <Form/>
                    </Grid>
</Grid>
                    
                </Container>
            </Grow>
        </Container>
    )
}
export default App;