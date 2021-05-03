import React from 'react'
import { Tabs, Tab, AppBar } from '@material-ui/core';

function Navbar() {
    const [selectedValue, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }
    return (
        <div>
            <AppBar>
                <Tabs value={selectedValue} onChange={handleChange} centered>
                    <Tab label="Home page" />
                    <Tab label="Contact" />
                </Tabs>
            </AppBar>
        </div>
    )
}

export default Navbar
