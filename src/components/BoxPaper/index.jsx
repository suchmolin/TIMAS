import React from "react";
import ResponsiveAppBar from '../ResponsiveAppBar';
import { Container, Paper} from '@mui/material';
import FormLogin from '../FormLogin';


const BoxPaper = () => {
    return(
        <Container
            sx={{
            display:"flex",
            justifyContent:"center"
            }}
        > 
            <Paper sx={{bgcolor:"#fafafa", marginTop:"50px", width:"90%",}} elevation={7}>
                <ResponsiveAppBar/>
                <FormLogin/>
            </Paper>
        </Container>
    );
}

export default BoxPaper;