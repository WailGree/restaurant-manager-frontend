import MenuItem from './MenuItem';
import { Grid, makeStyles } from '@material-ui/core';

export default function Menu() {
    const gridItemxl = 2;
    const gridItemlg = 3;
    const gridItemmd = 4;
    const gridItemsm = 5;
    const gridItemxs = 12;

    const useStyle = makeStyles({
        containerGrid: {
            paddingLeft: '20px',
            paddingRight: '20px'
        }
    })
    const classes = useStyle();

    return (
        <div>
            <Grid container spacing={4} alignContent="center" alignItems="center" className={classes.gridContainer}>
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