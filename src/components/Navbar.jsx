import React from 'react'
import { Tabs, Tab, AppBar } from '@material-ui/core';
import Homepage from './Homepage';
import Contact from './Contact';

function Navbar(props) {
    const { match, history } = props;
    const { params } = match;
    const { page } = params;

    const tabNameToIndex = {
        0: "home",
        1: "contact"
    }

    const indexToTabName = {
        "home": 0,
        "contact": 1
    }

    const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

    const handleChange = (event, newValue) => {
        history.push(`/${tabNameToIndex[newValue]}`);
        setSelectedTab(newValue);
    }

    return (
        <div>
            <AppBar position="static">
                <Tabs value={selectedTab} onChange={handleChange} centered>
                    <Tab label="Home" />
                    <Tab label="Contact" />
                </Tabs>
            </AppBar>
            {selectedTab === 0 && <Homepage />}
            {selectedTab === 1 && <Contact />}
        </div>
    )
}

export default Navbar
