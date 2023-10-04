import React from "react";
import {Typography} from "@mui/material";
import NavBar from "../main/head/NavBar"


import classes from "./MainBody.css";

const MainBody = ()=>{
    return(
        <div className={classes.pokeGround}>
            <div>
                <Typography level="h1" className={classes.pokerFont}>Gustavo</Typography>
            </div>
            <div>
                <h2 className={classes.pokerFont}>Poke Dex</h2>
            </div>
        </div>
    )
};
export default MainBody;
