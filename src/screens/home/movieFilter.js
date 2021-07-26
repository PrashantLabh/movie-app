/** 
 * THIS COMPONENT IS THE APPLY FILTER COMPONENT 
 * WHICH IS IMPORTED IN THE HOMEPAGE
 * THE STATES OF THE FILTER COMPONENT IS HANDLED INSIDE THE COMPONENT ITSELF
 * **/

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Card,
  Input,
  Select,
  TextField,
  Grid,
  Button,
  FormHelperText,
} from "@material-ui/core";

const FilterForm = ({ handleSubmit, artistList, genreList }) => {

  //STATES
  const [name, setName] = useState("");
  const [genre, setGenre] = useState([]);
  const [artists, setArtists] = useState([]);
  const [releaseStartDate, setReleaseStartDate] = useState("");
  const [releaseEndDate, setReleaseEndDate] = useState("");

  //CONTANTS
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  // USING STYLES FOR MATERIAL UI CLASSES
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    root: {
      maxWidth: 240,
      minWidth: 240,
    },
    media: {
      height: 140,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const classes = useStyles();

  //ON CLICKING APPLY FILTER BUTTON
  const onSubmitFilter = () => {
    handleSubmit({ name, genre, artists, releaseStartDate, releaseEndDate });
  };

  return (
    <Card className={classes.root} style={{ padding: "15px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div>FIND MOVIES BY: </div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl required className="formControl">
                <TextField
                  name="name"
                  label="Movie Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl required className="formControl">
                <InputLabel htmlFor="genre">Genre:</InputLabel>
                <Select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  id="genre"
                  multiple
                >
                  {genreList.map((genre) => (
                    <MenuItem key={"genre" + genre.id} value={genre.genre}>
                      {genre.genre}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl required className="formControl">
                <InputLabel htmlFor="artists">Artists</InputLabel>
                <Select
                  value={artists}
                  onChange={(e) => setArtists(e.target.value)}
                  id="artists"
                  multiple
                >
                  {artistList.map((artist) => (
                    <MenuItem
                      key={"artist" + artist.id}
                      value={artist.first_name}
                    >
                      {artist.first_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl required className="formControl">
                <TextField
                  id="datetime-local"
                  label="Release Date Start"
                  type="date"
                  name="releaseStartDate"
                  value={releaseStartDate}
                  onChange={(e) => setReleaseStartDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl required className="formControl">
                <TextField
                  id="datetime-local"
                  label="Release Date End"
                  type="date"
                  name="releaseEndDate"
                  value={releaseEndDate}
                  onChange={(e) => setReleaseEndDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="primary"
            type="submit"
            variant="contained"
            onClick={onSubmitFilter}
            fullWidth
          >
            APPLY
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FilterForm;
