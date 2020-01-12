import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import LockIcon from '@material-ui/icons/Lock';
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import Grid from '@material-ui/core'
// core components
import GridContainer from "../Components/Grid/GridContainer.js";
import GridItem from "../Components/Grid/GridItem.js";
import Card from "../Components/Card/Card.js";
import CardHeader from "../Components/Card/CardHeader.js";
import CardBody from "../Components/Card/CardBody.js";
import CardFooter from "../Components/Card/CardFooter.js";
import Button from "../Components/CustomButtons/Button.js";
import CustomInput from "../Components/CustomInput/CustomInput";

import styles from "./LoginCardStyle";

const useStyles = makeStyles(styles);

export default function SectionLogin(props) {

  const classes = useStyles();
  return (
    <div className={classes.section} style={{justifyContent:'center'}}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <form className={classes.form}>
                {/* <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Login</h4>
                  <div className={classes.socialLine}>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={e => e.preventDefault()}
                    >
                      <i className={classes.socialIcons + " fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={e => e.preventDefault()}
                    >
                      <i className={classes.socialIcons + " fab fa-facebook"} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={e => e.preventDefault()}
                    >
                      <i
                        className={
                          classes.socialIcons + " fab fa-google-plus-g"
                        }
                      />
                    </Button>
                  </div>
                </CardHeader> */}
                {/* <p className={classes.divider}>Or Be Classical</p> */}
                <div style={{float: "right"}}>
                <Button simple color = "primary" style={{marginLeft: '10px', border: "0"}} onClick = {props.close}>X</Button></div>
                <div style={{clear: "right"}}></div>
                <h2 style={{textAlign: 'center', color:'black'}}>SIGN IN</h2>
                <CardBody>
                  {/* <CustomInput
                    labelText="First Name..."
                    id="first"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  /> */}
                  <CustomInput
                    labelText="Email..."
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "email",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="pass"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "password",
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockIcon className={classes.inputIconsColor} />     
                        </InputAdornment>
                      ),
                      autoComplete: "off"
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button simple color="primary" size="lg">
                    Get started
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
