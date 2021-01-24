import React from "react";
import { withStyles } from "@material-ui/core/styles";
import schedule from "./assets/schedule.jpg";
import colours from "./colours";

const style = theme => ({
    largeImage: {
        marginTop: "-20px",
        backgroundImage: `url(${schedule})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "80vh",
        position: "relative",
        "&::after": {
            content: '"Welcome to Easy Syllabus!"',
            position: "absolute",
            boxSizing: "border-box",
            width:"100%",
            backgroundColor: "white",
            textAlign: "center",
            fontSize: "50px",
            color: colours.blue,
            overflow: "hidden",
            bottom: 0,
            fontWeight: "bold",
            [theme.breakpoints.down("xs")]: {
                fontSize: "28px",
                paddingTop: "10%",
            },
        }
    },
})

class JumbotronWithOverlay extends React.Component {
    render() {
        const { classes } = this.props;

        return(
            <React.Fragment>
                <div className={classes.largeImage}>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(style)(JumbotronWithOverlay);