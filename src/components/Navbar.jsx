import React from 'react'
import { Tabs, Tab, AppBar } from '@material-ui/core';
import Homepage from './Homepage';
import Contact from './Contact';

function Navbar() {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }
    return (
        <>
            <div>
                <AppBar position="static">
                    <Tabs value={selectedTab} onChange={handleChange} centered>
                        <Tab label="Home page" />
                        <Tab label="Contact" />
                    </Tabs>
                </AppBar>
                {selectedTab === 0 && <Homepage />}
                {selectedTab === 1 && <Contact />}
            </div>
        </>
    )
}

export default Navbar
