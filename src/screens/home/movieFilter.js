import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';

const FilterForm = ({ handleSubmit }) => {

  const [name, setName] = useState('');
  const [genre, setGenre] = useState([]);
  const [artists, setArtists] = useState([]);
  const [releaseStartDate, setReleaseStartDate] = useState('');
  const [releaseEndDate, setReleaseEndDate] = useState('');
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

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
      },
    root: {
      maxWidth: 240,
      minWidth: 240
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

  const onSubmitFilter = () => {
    handleSubmit({name, genre, artists, releaseStartDate, releaseEndDate})
  }

  return (<Card className={classes.root} style={{padding: "15px"}}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
         <div>FIND MOVIES BY: </div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                style={{ width: 200 }}
                label="Movie Name"
                name="name"
                size="small"
                value={name}
                onChange={e => setName(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <Select
                    labelId="demo-mutiple-name-label"
                    id="movie-genre"
                    multiple
                    label="Genre"
                    value={genre}
                    input={<Input />}
                    MenuProps={MenuProps}
                    onChange={e => setGenre(e.target.value)}
                    >
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
            </Grid>
            <Grid item xs={12}>
                <Select
                    id="artists"
                    label="Artists"
                    multiple
                    value={artists}
                    input={<Input />}
                    MenuProps={MenuProps}
                    onChange={e => setArtists(e.target.value)}
                    >
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="datetime-local"
                label="Release Date Start"
                type="date"
                name="releaseStartDate"
                className={classes.textField}
                value={releaseStartDate}
                onChange={e => setReleaseStartDate(e.target.value)}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="datetime-local"
                label="Release Date End"
                type="date"
                name="releaseEndDate"
                className={classes.textField}
                value={releaseEndDate}
                onChange={e => setReleaseEndDate(e.target.value)}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" type="submit" variant="contained" onClick={onSubmitFilter}>
            APPLY
          </Button>
        </Grid>
      </Grid>
  </Card>);
};

export default FilterForm;