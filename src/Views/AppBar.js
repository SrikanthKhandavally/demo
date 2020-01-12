import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Modal from './Modal'
import ProductList from './ProductsListCard'
import { Grid } from '@material-ui/core';
import SimpleImageSlider from "react-simple-image-slider";
import Carousel from "nuka-carousel";
import { maxWidth } from '@material-ui/system';



const images = [
  {url:'download.jpg'},
  {url: 'intro_cream_of_crop.jpg'}
]
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));



export default function SearchAppBar() {
  const classes = useStyles();

const [modelOpen, setModelOpen] = React.useState(false);

const setLoginModal = () => {   
    console.log(modelOpen)
    setModelOpen(true);
}

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button color="inherit" onClick = {setLoginModal} >Login</Button>
        </Toolbar>
      </AppBar>
      <Modal clicked = {modelOpen}/>
      <br />
      <h1 style = {{marginLeft: 80, color: 'grey'}}>What can we help you with??</h1>
      <div style = {{paddingLeft: '6%'}}>
        <Grid container spacing = {4}>
          <Grid item>
            <ProductList />
          </Grid>
          <Grid item>
            <ProductList />
          </Grid> 
          <Grid item>
            <ProductList />
          </Grid> 
        </Grid>
      </div>
      <br />
      <div class style = {{width: '60%', height: '70%', position: 'absolute', margin: 'auto', left: '20%'}}>
      <Carousel>
        <img maxWidth = "100%" maxHeight = "100%" src="https://www.active.com/Assets/nutrition/fruits-veggies.jpg"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
      </Carousel>
      </div>
    </div>
  );
}