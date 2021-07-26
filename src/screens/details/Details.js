/** 
 * THIS COMPONENT IS THE MOVIE DETAIL COMPONENT 
 * THIS COMPONENT HAVE BACK BUTTON HEADER AND THREE COMPONENTS LEFT, CENTER AND RIGHT DETAIL COMPONENT
 * 
 * **/
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

//Have ImageList,ImageListItem instead of Grid, GridItem as Grid is deprecated in Latest version of Material UI
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  Box,
} from "@material-ui/core";
import YouTube from "react-youtube";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { getMovie } from "../../services/movieService";

import "./Details.css";

const Details = ({ setIsReleased }) => {
    // GETTING ID FROM url Params
  const { id } = useParams();

  //States
  const [movieDetails, setMovieDetails] = useState("");
  const [rating, setRating] = useState(0);

  //Mounting of COmponents
  useEffect(async () => {
    let details = await getMovie(id);
    setMovieDetails(details);
    if (details.status === "RELEASED") setIsReleased(true);
  }, []);

  return (
    <div className="movie-detail-page-container">
      <Typography
        className="back-btn"
        variant="caption"
        display="block"
        gutterBottom
      >
        <Link className="back-btn" to="/">
          {" "}
          &lt; Back to Home{" "}
        </Link>
      </Typography>
      {movieDetails ? (
        <div className="movie-details">
          <div className="left-details">
            <img src={movieDetails.poster_url} />
          </div>
          <div className="center-details">
            <Typography variant="h2" display="block" gutterBottom>
              {movieDetails.title}
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom>
              <Box fontWeight="fontWeightBold" display="inline">
                Genre:&nbsp;
              </Box>
              {movieDetails.genres.join(",")}
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom>
              <Box fontWeight="fontWeightBold" display="inline">
                Duration:&nbsp;
              </Box>
              {movieDetails.duration}
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom>
              <Box fontWeight="fontWeightBold" display="inline">
                Release Date:&nbsp;
              </Box>
              {new Date(movieDetails.release_date).toDateString()}
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom>
              <Box fontWeight="fontWeightBold" display="inline">
                Rating:&nbsp;
              </Box>
              {movieDetails.rating}
            </Typography>
            <br />
            <Typography variant="subtitle1" display="block" gutterBottom>
              <Box fontWeight="fontWeightBold" display="inline">
                Plot: &nbsp;
              </Box>
              {movieDetails.storyline}
            </Typography>
            <br />
            <Typography variant="subtitle1" display="block" gutterBottom>
              <Box fontWeight="fontWeightBold" display="inline">
                Trailer: &nbsp;
              </Box>
            </Typography>
            <YouTube
              videoId={movieDetails.trailer_url.split("v=")[1]}
              opts={{ width: "100%" }}
            />
            ;
          </div>
          <div className="right-details">
            <Typography variant="subtitle1" display="block" gutterBottom>
              <Box fontWeight="fontWeightBold">Rate this movie:</Box>
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom>
              {new Array(5).fill(5).map((item, index) => {
                return (
                  <StarBorderIcon
                    key={`rate-${index}`}
                    style={
                      index < rating
                        ? { color: "red", cursor: "pointer" }
                        : { cursor: "pointer" }
                    }
                    onClick={setRating.bind(null, index + 1)}
                  />
                );
              })}
            </Typography>
            <Typography
              variant="subtitle1"
              display="block"
              style={{ margin: "10px 0px" }}
              gutterBottom
            >
              <Box fontWeight="fontWeightBold">Artists:</Box>
            </Typography>
            <ImageList cols={2}>
              {movieDetails &&
                movieDetails.artists &&
                movieDetails.artists.map((item) => (
                  <ImageListItem key={item.profile_url}>
                    <img
                      src={item.profile_url}
                      alt={item.first_name}
                      width="100%"
                      height="100%"
                    />
                    <ImageListItemBar title={item.first_name} />
                  </ImageListItem>
                ))}
            </ImageList>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Details;
