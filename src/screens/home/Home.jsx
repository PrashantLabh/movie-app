import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImageList, ImageListItem, ImageListItemBar, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MovieFilter from "./movieFilter";
import {getMovies, getMoviesWithFilter} from "../../services/movieService";
import "./Home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  imageList: {
    flexWrap: "nowrap",
  },
  imageItem: {
    width: 60,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const Home = ({setIsReleased}) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const classes = useStyles();

  useEffect(async () => {
    setMovies((await getMovies()).movies);
	setFilteredMovies((await getMoviesWithFilter({})).movies || []);
	setIsReleased(false)
  }, []);

  const onApplyfilter = async (filters) => {
    setFilteredMovies((await getMoviesWithFilter(filters)).movies);
  };

  return (
    <div>
      <div className="homepage-header">Upcoming Movies</div>
      <div className="homepage-upcoming-list" className={classes.root}>
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <ImageList rowHeight={250} cols={6} className={classes.imageList}>
            {movies.map((item) => (
              <ImageListItem key={item.poster_url}>
                <Link to={`/movie/${item.id}`} key={item.poster_url}>
                  <img
                    src={item.poster_url}
                    alt={item.title}
                    width="100%"
                    height="100%"
                  />
                  <ImageListItemBar title={item.title} />
                </Link>
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </div>
      <div className="homepage-released-movie">
        <div className="movie-list">
          <Container maxWidth="xl" style={{ padding: 0 }}>
            <ImageList rowHeight={350} cols={4} style={{padding: "20px 15px"}}>
              {filteredMovies.map((item) => (
                <ImageListItem key={item.poster_url} style={{padding: "15px"}}>
                  <Link to={`/movie/${item.id}`} key={item.poster_url}>
                    <img
                      src={item.poster_url}
                      alt={item.title}
                      width="100%"
                      height="100%"
                    />
                    <ImageListItemBar
                      title={item.title}
                      subtitle={`Release Date ${new Date(
                        item.release_date
                      ).toDateString()}`}
                    />
                  </Link>
                </ImageListItem>
              ))}
            </ImageList>
          </Container>
        </div>
        <div className="filter" style={{padding: "20px 5px"}}>
          <MovieFilter handleSubmit={onApplyfilter} />
        </div>
      </div>
    </div>
  );
};

export default Home;
