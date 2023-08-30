import {Box,Button,IconButton,InputAdornment,TextField,Typography} from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid } from "@mui/x-data-grid";
import "./style.css";


const useStyle =makeStyles({
    mainBox: {
        border: "1px solid #ccc",
        padding: "14px",
        boxShadow: "1px 6px 8px 5px #ccc",
    },
    searchBox: {
        borderRadius: "20px",
        height: "41px",
        paddingLeft: "0px",
    },
    tableStyle: {
        height: 307,
        width: "100%",
        marginTop: "4%"
    },

    profileBox: {
        display: "flex",
        marginTop: "1rem",
        alignItems: "center"
    },
    profileLeft: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    imageBox: {
        height: "96px",
        // width: 350,
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 },
        width: "96px",
        borderRadius: "50%",
    },
    profileRightBox: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: 'start',
        gap: "2rem",
        marginLeft: "51px",
    },
    profileRightContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    }
})

const columns = [
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 180,
        valueGetter: (params) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    { field: "contact", headerName: "Contact", width: 180 },
];

const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", contact: 12345678765 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", contact: 12345678765 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", contact: 12345678765 },
    { id: 4, lastName: "Stark", firstName: "Arya", contact: 12345678765 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", contact: 12345678765 },
    { id: 6, lastName: "Melisandre", firstName: null, contact: 12345678765 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", contact: 12345678765 },
    { id: 8, lastName: "Frances", firstName: "Rossini", contact: 12345678765 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", contact: 12345678765 },
];

const ElementStyle = {
    
    searchBox: {
        borderRadius: "20px",
        height: "41px",
        paddingLeft: "0px",
    },
    viewButton: {
        border: "1px solid transparent ",
        borderRadius: "20px",
        minWidth: "10rem",
        marginLeft: "auto",
    },
   
}

const LeftBox = () => {
    const classes =useStyle()
    return (
        <Box>
            <Box>
                <Box
                    style={{
                        display: " flex",
                        alignItems: "center",
                        gap: "10px",

                    }}
                >
                    <Box component="span">
                        <KeyboardBackspaceIcon />
                    </Box>
                    <Typography className="text-color main-heading">
                        Book Appointment
                    </Typography>
                </Box>

                <Box
                    className={classes.mainBox}
                >
                    <Box
                        style={{
                            display: "flex",
                            // padding: "5px",
                        }}
                    >
                        <TextField
                            sx={{ padding: " 0px 8px" }}
                            variant="outlined"
                            // onChange={handleSearch}
                            placeholder="Search By Name/Mobile Number"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" sx={{ marginRight: "0px" }}>
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                sx: ElementStyle.searchBox
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={ElementStyle.viewButton}
                        >
                            View details
                        </Button>
                    </Box>
                    <Box
                        style={{
                            marginBottom: "2rem",
                        }}
                    >
                        <Box className={classes.tableStyle}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                }}
                                onRowClick={(item)=>{
                                        console.log(item)
                                }}
                                className="text-color"
                                pageSizeOptions={[10, 20]}
                            />
                        </Box>
                    </Box>

                    <Box
                        style={{
                            marginTop: "1rem",
                        }}
                    >
                        <Box>
                            <Typography className="text-color heading headingStyle">
                                Profile Detail
                            </Typography>
                        </Box>
                        <Box
                            className={classes.profileBox}
                        >
                            <Box
                                className={classes.profileLeft}
                            >
                                <Box
                                    component="img"
                                    className={classes.imageBox}
                                    alt="The house from the offer."
                                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                                />
                                <Typography sx={{ marginTop: "0.4rem" }}>Ravi Patil</Typography>
                            </Box>
                            <Box
                                className={classes.profileRightBox}
                            >
                                <Box className={classes.profileRightContent}>
                                    <Typography>Location:</Typography>
                                    <Typography>Contact:</Typography>
                                    <Typography>Email Id:</Typography>
                                </Box>
                                <Box className={classes.profileRightContent}>
                                    <Typography>NA</Typography>
                                    <Typography>12345699</Typography>
                                    <Typography>NA</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default LeftBox;
