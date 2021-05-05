import { Card, Paper, Grid, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

export default function About() {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1
        },
        CardMedia: {
            height: 0,
            paddingTop: '56%'
        },
        paper: {
            height: '80%',
            width: '80%'
        },
        control: {
            padding: theme.spacing(2)
        }
    }));

    const classes = useStyles();
    const authors = [{
        0: {
            name: "Roland Dominik Szilágyi"
        },
        1: {
            name: "Máté Szathmári"
        }
    }]
    console.log(process.env.PUBLIC_URL + '/logo192.png')

    return (

        <div>
            <Grid container justify="center" spacing={2}>
                {/* {authors.map((index, author) => ( */}
                <Grid key={0} item xs={6} xm={4}>
                    <Paper className={classes.paper} >
                        <Card>
                            {/* <img src={process.env.PUBLIC_URL + '/logo192.png'}/> */}
                            <CardMedia className={classes.cardMedia} image={process.env.PUBLIC_URL + '/logo192.png'} />
                            <CardContent>
                                <Typography>Roland Dominik Szilágyi</Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid key={1} item xs={6}>
                    <Paper className={classes.paper} >
                        <Card>
                            {/* <img src={process.env.PUBLIC_URL + '/mate_szathmari.png'}/> */}
                            <CardMedia
                                style={{ height: 0, paddingTop: '55%' }}
                                image={process.env.PUBLIC_URL + '/mate_szathmari.png'} title="Máté Szathmári" />
                            <CardContent>
                                <Typography>Máté Szathmári</Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                {/* ))} */}
            </Grid>
        </div>
    )
}