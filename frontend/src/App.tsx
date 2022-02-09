import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Header from './components/Header/Header';
import {CssBaseline, Grid, Paper} from "@mui/material";
import {ColorModeContextProvider} from "./contexts/ColorModeContext";

function App() {

    return (
        <ColorModeContextProvider>
            <CssBaseline/>
                <Grid container sx={{display: 'flex', justifyContent:'center'}} spacing={0}>
                        <Router>
                            <Header/>
                            <Routes>
                                <Route path={"/"} element={<Homepage/>}/>
                                <Route path={"/"} element={<Homepage/>}/>
                            </Routes>
                        </Router>
                </Grid>
        </ColorModeContextProvider>
    );
}

export default App;
