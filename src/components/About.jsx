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

    const gridItemxl = 2;
    const gridItemlg = 4;
    const gridItemmd = 6;
    const gridItemsm = 8;
    const gridItemxs = 12;

    return (

        <div>
            <Grid container alignItems="flex-start" spacing={25}>
                <Grid item xl={gridItemxl}>
                    <Card>
                        <CardMedia
                            style={{ height: 600, paddingTop: '55%', leftPadding: '20px' }}
                            image={process.env.PUBLIC_URL + '/roland_dominik_szilagyi.png'} title="Máté Szathmári" />
                        <Typography>Roland Dominik Szilágyi</Typography>
                    </Card>
                </Grid>
                <Grid item xl={gridItemxl}>
                    <Card>
                        <CardMedia
                            style={{ height: 600, paddingTop: '55%' }}
                            image={process.env.PUBLIC_URL + '/mate_szathmari.png'} title="Máté Szathmári" />
                        <Typography>Máté Szathmári</Typography>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}