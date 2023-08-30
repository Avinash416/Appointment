import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LeftBox from "./LeftBox";
import { Container, Grid, Typography } from "@mui/material";
import RightBox from "./RightBox";
import HomeIcon from "@mui/icons-material/Home";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import SettingsIcon from "@mui/icons-material/Settings";
import "./style.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));
const ElementStyle = {
    listItem: {
        minHeight: 48,
        justifyContent: "center",
        p: 1.5,
    },
    footerBox: {
        flex: 1,
        width: "100%",
        padding: "20px"
    },
    footer: {

        px: 2,
        position: "fixed",
        bottom: "0",
        width: "100%",
        backgroundColor: (theme) =>
            theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
    }

}
export default function SideBar() {
    //   const [open, setOpen] = React.useState(false);

    return (
        <div>
            <Box sx={{ display: "flex" }}>
                <Drawer
                    variant="permanent"
                    open={false}
                    PaperProps={{
                        sx: {
                            width: 200,
                            backgroundColor: "rgb(1, 144, 253)",
                            height: "100vh",
                        },
                    }}
                >
                    <List>
                        <ListItem disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={ElementStyle.listItem}
                            >
                                <ListItemIcon
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <HomeIcon sx={{ fontSize: 30, color: "#FFF" }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={ElementStyle.listItem}
                            >
                                <ListItemIcon
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <AutoAwesomeMosaicIcon sx={{ fontSize: 30, color: "#FFF" }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={ElementStyle.listItem}
                            >
                                <ListItemIcon
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <PersonalVideoIcon sx={{ fontSize: 30, color: "#FFF" }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={ElementStyle.listItem}
                            >
                                <ListItemIcon
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <AssignmentTurnedInIcon
                                        sx={{ fontSize: 30, color: "#FFF" }}
                                    />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={ElementStyle.listItem}
                            >
                                <ListItemIcon
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <PeopleOutlineIcon sx={{ fontSize: 30, color: "#FFF" }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={ElementStyle.listItem}
                            >
                                <ListItemIcon
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <AssignmentIcon sx={{ fontSize: 30, color: "#FFF" }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={ElementStyle.listItem}
                            >
                                <ListItemIcon
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <PeopleIcon sx={{ fontSize: 30, color: "#FFF" }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={ElementStyle.listItem}
                            >
                                <ListItemIcon
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <DirectionsWalkIcon sx={{ fontSize: 30, color: "#FFF" }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={ElementStyle.listItem}
                            >
                                <ListItemIcon
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <LocalHospitalIcon sx={{ fontSize: 30, color: "#FFF" }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={ElementStyle.listItem}
                            >
                                <ListItemIcon
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <MedicalServicesIcon sx={{ fontSize: 30, color: "#FFF" }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={ElementStyle.listItem}
                            >
                                <ListItemIcon
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <BrandingWatermarkIcon sx={{ fontSize: 30, color: "#FFF" }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={ElementStyle.listItem}
                            >
                                <ListItemIcon
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <SettingsIcon sx={{ fontSize: 30, color: "#FFF" }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
                <Box sx={ElementStyle.footerBox}>
                    {/* Use Grid with spacing 0 and width 100% */}
                    <Grid container spacing={2} style={{ width: "100%" }}>
                        <Grid item xs={12} md={5} lg={5} xl={5}>
                            <LeftBox />
                        </Grid>
                        <Grid item xs={12} md={7} lg={7} xl={7}>
                            <RightBox />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box
                component="footer"
                sx={ElementStyle.footer}
            >
                <Container maxWidth="sm">
                    <Typography className="text-color footer-style" variant="body2">
                        {"Powered By RajYug IT Solutions Pvt Ltd © 2022"}
                    </Typography>
                </Container>
            </Box>
        </div>
    );
}
