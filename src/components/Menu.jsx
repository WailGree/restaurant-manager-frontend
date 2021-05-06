import MenuItem from './MenuItem';
import { Grid, makeStyles } from '@material-ui/core';

export default function Menu() {
    const gridItemxl = 2;
    const gridItemlg = 3;
    const gridItemmd = 4;
    const gridItemsm = 5;
    const gridItemxs = 12;

    const useStyle = makeStyles({
        root: {
            flexGrow: 1,
            padding: '2%',
            overflowX: 'hidden' //Fixes page overflow
        },
        containerGrid: {
            paddingLeft: '20px',
            paddingRight: '20px',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        }
    })
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Grid container spacing={6} className={classes.containerGrid}>
                <Grid item xs={gridItemxs} xl={gridItemxl} lg={gridItemlg} sm={gridItemsm} md={gridItemmd}>
                    <MenuItem />
                </Grid>
                <Grid item xs={gridItemxs} xl={gridItemxl} lg={gridItemlg} sm={gridItemsm} md={gridItemmd}>
                    <MenuItem />
                </Grid>

                <Grid item xs={gridItemxs} xl={gridItemxl} lg={gridItemlg} sm={gridItemsm} md={gridItemmd}>
                    <MenuItem />
                </Grid>
                <Grid item xs={gridItemxs} xl={gridItemxl} lg={gridItemlg} sm={gridItemsm} md={gridItemmd}>
                    <MenuItem />
                </Grid>
                <Grid item xs={gridItemxs} xl={gridItemxl} lg={gridItemlg} sm={gridItemsm} md={gridItemmd}>
                    <MenuItem />
                </Grid>
                <Grid item xs={gridItemxs} xl={gridItemxl} lg={gridItemlg} sm={gridItemsm} md={gridItemmd}>
                    <MenuItem />
                </Grid>
            </Grid>
        </div>
    )
}