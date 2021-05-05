import { Card, Paper, Grid, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

export default function About() {

    const gridItemxl = 2;
    const gridItemlg = 4;
    const gridItemmd = 6;
    const gridItemsm = 8;
    const gridItemxs = 12;

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            padding: '5%' //Fixes page overflow
        },
        containerGrid: {
            paddingLeft: '10%',
            paddingRight: '10%',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        card: {
            width: 400,
        },
        cardMedia: {
            height: 600,
            width: 'auto',
            paddingTop: '55%'
        }
    }));
    const classes = useStyles();

    const authors = [
        {
            name: 'Roland Dominik Szilágyi',
            image: 'roland_dominik_szilagyi.png',

        },
        {
            name: 'Máté Szathmári',
            image: 'mate_szathmari.png'
        }
    ];

    const gridItems = authors.map((index, author) => (
        <Grid key={index} item xl={gridItemxl}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={process.env.PUBLIC_URL + '/' + author.image} title={author.name + ' image'} />
                <Typography>{author.name}</Typography>
            </Card>
        </Grid>
    ));
    return (
        <div>
            <Grid container spacing={0} className={classes.containerGrid}>
                <Grid item xl={gridItemxl}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={process.env.PUBLIC_URL + '/roland_dominik_szilagyi.png'} title="Máté Szathmári image" />
                        <Typography>Roland Dominik Szilágyi</Typography>
                    </Card>
                </Grid>
                <Grid item xl={gridItemxl}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={process.env.PUBLIC_URL + '/mate_szathmari.png'} title="Máté Szathmári" />
                        <Typography>Máté Szathmári</Typography>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}