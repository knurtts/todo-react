import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    card: {
        minWidth: 275
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform:"scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
});

export default function ToDoCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return(
        <Box m={1}>
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Todo Item!
                </Typography>
                <Typography variant="h5" component="h2">
                    {bull} Buy new guitar
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn to Shred</Button>
            </CardActions>
        </Card>
        </Box>
    );
};