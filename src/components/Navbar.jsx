import React from 'react'
import { Tabs, Tab, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import { BiRestaurant } from 'react-icons/bi';
import { GrRestaurant } from 'react-icons/gr';
import Homepage from './Homepage';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';

function Navbar(props) {
    const { match, history } = props;
    const { params } = match;
    const { page } = params;

    const tabNameToIndex = {
        0: "home",
        1: "menu",
        2: "contact",
        3: "about"
    }

    const indexToTabName = {
        "home": 0,
        "menu": 1,
        "contact": 2,
        "about": 3
    }

    const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

    const handleChange = (event, newValue) => {
        history.push(`/${tabNameToIndex[newValue]}`);
        setSelectedTab(newValue);
    };

    const useStyles = makeStyles(() => ({
        appBarStyles: {
        },
        typographyStyles: {
            flex: 1,
        },
        tabsStyles: {
        }
    }));
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.appBarStyles}>
                <Toolbar>
                    <Typography className={classes.typographyStyles}>
                        <BiRestaurant />Restaurant Manager <GrRestaurant />
                    </Typography>
                    <div>
                        <Tabs className={classes.tabsStyles}
                            value={selectedTab} onChange={handleChange} centered>
                            <Tab label="Home" />
                            <Tab label="Menu" />
                            <Tab label="Contact" />
                            <Tab label="About" />
                        </Tabs>
                    </div>
                </Toolbar>
            </AppBar>
            {selectedTab === 0 && <Homepage />}
            {selectedTab === 1 && <Menu />}
            {selectedTab === 2 && <Contact />}
            {selectedTab === 3 && <About />}
        </div>
    )
}

export default Navbar
