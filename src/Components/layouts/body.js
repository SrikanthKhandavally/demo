import React from 'react';
import MediaControlCard from '../../Views/ProductsListCard'
import Grid from '@material-ui/core/Grid';
import { fade } from '@material-ui/core/styles/colorManipulator';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    divSpace: {
      marginLeft: 150
    },
    hStyle: {
      marginLeft: 80,
      color: 'grey'
    },
    feedback: {
      backgroundColor: '#31B0D5',
      color: 'white',
      padding: 10,
      borderRadius: 4,
      borderColor: '#46b8da',
    },
    mybutton: {
      position: 'fixed',
      bottom: -4,
      right: 10
    },
    button: {
      position: 'absolute',
      right: 0,
      bottom: 0
  
    },
    divStyle: {
      paddingLeft: '6%'
  
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: '#f2f2f2',
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing.unit * 2,
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 3,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    modalStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      top: '40%',
      left: '40%',
    },
    textField: {
      width: 200,
    },
  });
class Body extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <h1 className={classes.hStyle} > What can we help you with??</h1>
                <div className={classes.divStyle}>
                    <Grid container spacing={24}>
                        <Grid item >
                            <MediaControlCard />
                        </Grid>
                        <Grid item >
                            <MediaControlCard />
                        </Grid>
                        <Grid item >
                            <MediaControlCard />
                        </Grid>
                    </Grid>
                </div>
                <h1 className={classes.hStyle}> More products to eat...</h1>
            </div>


        )
    }
}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Body);
