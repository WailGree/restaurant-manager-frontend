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
            padding: '5%' //Fixes page overflow
        },
        containerGrid: {
            paddingLeft: '20px',
            paddingRight: '20px',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        }
    })
    const classes = useStyle();
    const exampleItems = [];
    for (let i = 1; i <= 100; i++) {
        exampleItems.push({ name: `Example ${i}`, description: `Example ${i} description` });
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={6} className={classes.containerGrid}>
                {exampleItems.map((item, index) => (
                    <Grid item key={index} xs={gridItemxs} xl={gridItemxl} lg={gridItemlg} sm={gridItemsm} md={gridItemmd}>
                        <MenuItem item={item} />
                    </Grid>
                ))};
            </Grid>
        </div>
    )
}