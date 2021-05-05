import { Card, Grid, CardMedia, CardHeader, CardActions, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
        cardHeader: {
            backgroundColor: 'black',
            color: 'white'
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
            gitHubPage: 'https://github.com/WailGree',
            linkedInPage: 'https://www.linkedin.com/in/wailgree/'
        },
        {
            name: 'Máté Szathmári',
            image: 'mate_szathmari.png',
            gitHubPage: 'https://github.com/mateszathmari',
            linkedInPage: 'https://www.linkedin.com/in/mateszathmari/'
        }
    ];

    return (
        <div>
            <Grid container spacing={0} className={classes.containerGrid}>
                {authors.map((author, index) => (
                    <Grid key={index} item xl={gridItemxl} lg={gridItemlg} md={gridItemmd} sm={gridItemsm} xs={gridItemxs}>
                        <Card className={classes.card}>
                            <CardHeader title={author.name} />
                            <CardMedia
                                className={classes.cardMedia}
                                image={process.env.PUBLIC_URL + '/' + author.image} title={author.name + ' image'} />
                            <CardActions disableSpacing>
                                <IconButton href={author.gitHubPage} aria-label={'Visit ' + author.name + '\'s GitHub profile'}>
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton href={author.linkedInPage} aria-label={'Visit ' + author.name + '\'s LinkedIn profile'}>
                                    <LinkedInIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}