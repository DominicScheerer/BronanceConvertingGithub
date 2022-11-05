import React, { useState } from "react";
import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    Avatar,
    Container,
    useTheme,
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import DrawerComp from "./DrawerComp";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bronanceFinalSmallLogo from './bronanceFinalSmallLogo.png';

const theme = createTheme({

    palette: {

        primary: {

            main: '#4d725c'

        },

        secondary: {

            main: '#ffffff'

        },

        info: {

            main: '#2f4136'

        }

    }

});

const NavigationBar = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <React.Fragment>

            <AppBar sx={{ background: "#4D725C" }}>

                <Toolbar>
                    {/* PersonIcon */}
                    {/* this might be best to be bronance logo actually below */}
                    {/* <ShoppingCartIcon sx={{ transform: "scale(2)" }} /> */}
                    {/* <Tab icon={<Avatar variant="square" alt="B" src="bronanceSquare.png" />} /> */}
                    <Tab icon={<Container component="img" sx={{ height: '90%', width: '90%' }} src={bronanceFinalSmallLogo}/>} />

                    
                    {isMatch ? (
                        <>
                        {/* this is for a message but instead we are having it just close out and write nothing when going to hamburger menu */}
                            {/* <i><Typography sx={{ fontSize: "0.8rem", textAlign: "right", color: "#DCDCDC" }}>
                                5 Available Tabs:
                            </Typography></i> */}
                            <DrawerComp />
                        </>
                    ) : (
                        <>

                            <Tabs
                                //   if we want to center for whatever reason use below
                                // sx={{ marginLeft: "auto" }}
                                //adding bronance logo (HOW TO FIX?)
                                //<Container component="img" sx={{ height: '100%', width: '100%' }} src={logo} />

                                //This is to change tab color
                                //we might want to change this to white, might be more visually pleasing
                                TabIndicatorProps={{
                                    sx: { backgroundColor: "#2D343E" }
                                }}
                                // indicatorColor = "secondary"
                                textColor="inherit"
                                value={value}
                                onChange={(e, value) => setValue(value)}
                            >
                                <Tab label="MEAL OFFERINGS" />
                                <Tab label="HEALTH GUIDELINES" />
                                <Tab label="CONTACT US" />
                            </Tabs>

                            <ThemeProvider theme={theme}>
                                {/* for some reason in this layout was the only way i could get it to go on the right as a button layout.  Maybe we make the backgrounds of them transparent or green to blend in? */}
                                <Button style={{"backgroundColor":"#528265","marginLeft":"auto"}} variant="contained" color='primary'>
                                    <ShoppingCartIcon sx={{ transform: "scale(1)" }} />
                                </Button>
                                <Button style={{"backgroundColor":"#528265","marginLeft":"10px"}} variant="contained">
                                    <PersonIcon sx={{ transform: "scale(1)" }} />
                                </Button>

                            </ThemeProvider>
                        </>
                    )}

                </Toolbar>

            </AppBar>

        </React.Fragment>
    );
};

export default NavigationBar;