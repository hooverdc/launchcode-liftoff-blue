import axios from "axios";
import log from "eslint-plugin-react/lib/util/log.js";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import * as React from "react";
import {useEffect, useState} from "react";

export default function HarryPotter(){
    const [movie, setMovie] =  useState({});
    const getMovie = async () => {await axios.get("https://www.omdbapi.com/?t=Harry+Potter&plot=full&apikey=bea35a3d")
        .then(response => setMovie(response.data))};

    useEffect(() => {
        getMovie()
    }, []);
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image={movie.Poster}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {movie.Title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {movie.Plot}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>


        </>
    );
}

