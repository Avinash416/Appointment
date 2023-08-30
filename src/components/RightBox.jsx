import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import {makeStyles} from '@mui/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './style.css'

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];


const useStyles =makeStyles({
  root: {
    border: '1px solid #ccc',
    padding: '0 0 18px 6.3%;',
    boxShadow: '1px 6px 8px 5px #ccc',
    margin: "5% 0 0 2%"
  },
  detailsBox: {
    display: 'flex',
    flexDirection: 'column',
    borderBottom: '1px solid #ccc',
    borderRight: '1px solid #ccc',
    paddingBottom: '15.6%',
    '@media (max-width: 800px)': {
      border: 'none !important',

    }

  },
  appointmentBox: {
    borderBottom: '1px solid #ccc',
    borderLeft: '1px solid #ccc',
    padding: '0 0 10% 5%',
    '@media (max-width: 800px)': {
      border: 'none !important',

    }
  },
  appointmentBoxLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    '@media (max-width: 1000px)':{
      
     
    }
  },
  ButtonBox: {
    display: "flex",
    justifyContent: 'center',
    margin: '3%',
    gap: '3%'
  },
  textField: {
    width: '20%'
  },
  formControl:
  {
    marginTop: '1.8% !important', 
    width: '45%',
    '@media (max-width: 800px)': {
      width: '90%'
    }

  },
  appointTypeSelect: {
    mt: 2,
    width: 300,
    margin: '2% 0 0 -11%',
    '@media (max-width: 800px)': {
      width: 360,
    },
    '@media (max-width: 1200px)': {
      width: 200,
      padding: '0px'
    }
  },
  selectDoctor: {
    m: 1,
    width: 300,

    '@media (max-width: 800px)': {
      width: 330,
    },
    '@media (max-width: 650px)':{
      width: 350,  
      padding:'0px'
    },
    '@media (max-width: 1050px)':{
      width: 360,  
      padding:'0px'
    }
  },
  reasonTextfield: {
    width: '45%',
    margin: '2% 2% 0 0',
    '@media (max-width: 800px)': {
      margin: '3% 2% 0 0',
      width: '90%'
    }
  },
  appointMentTextfield: {
    margin: '2% 0 0 2%',
    width: '89%',
    '@media (max-width: 800px)': {

      width: 330
    },
    '@media (max-width: 600px)':{
      width: 360,  
      padding:'0px'
    },
    '@media (max-width: 1050px)':{
      width: 380,  
      padding:'0px'
    }

  }
})

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ElementStyle = {
  // root: {
  //   border: '1px solid #ccc',
  //   padding: '0 0 18px 6.3%;',
  //   boxShadow: '1px 6px 8px 5px #ccc',
  //   margin: "5% 0 0 2%"
  // },
  // detailsBox: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   borderBottom: '1px solid #ccc',
  //   borderRight: '1px solid #ccc',
  //   paddingBottom: '13%',
  //   '@media (max-width: 800px)': {
  //     border: 'none !important',

  //   }

  // },
  // appointmentBox: {
  //   borderBottom: '1px solid #ccc',
  //   borderLeft: '1px solid #ccc',
  //   padding: '0 0 10% 5%',
  //   '@media (max-width: 800px)': {
  //     border: 'none !important',

  //   }
  // },
  // appointmentBoxLeft: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'flex-start',
  //   justifyContent: 'space-around',
  //   '@media (max-width: 1000px)':{
      
     
  //   }
  // },
  // ButtonBox: {
  //   display: "flex",
  //   justifyContent: 'center',
  //   margin: '3%',
  //   gap: '3%'
  // },
  // ButtonStyle: {
  //   border: '1px solid transparent',
  //   borderRadius: '20px'
  // },
  // textField: {
  //   width: '20%'
  // },
  // formControl:
  // {
  //   mt: 2, width: '45%',
  //   '@media (max-width: 800px)': {
  //     width: '90%'
  //   }

  // },
  appointTypeSelect: {
    mt: 2,
    width: 300,
    margin: '2% 0 0 -11%',
    '@media (max-width: 800px)': {
      width: 360,
    },
    '@media (max-width: 1200px)': {
      width: 200,
      padding: '0px'
    }
  },
  selectDoctor: {
    m: 1,
    width: 300,

    '@media (max-width: 800px)': {
      width: 330,
    },
    '@media (max-width: 650px)':{
      width: 350,  
      padding:'0px'
    },
    '@media (max-width: 1050px)':{
      width: 360,  
      padding:'0px'
    }
  },
  reasonTextfield: {
    width: '45%',
    margin: '2% 2% 0 0',
    '@media (max-width: 800px)': {
      margin: '3% 2% 0 0',
      width: '90%'
    }
  },
  ButtonStyle: {
    border: '1px solid transparent',
    borderRadius: '20px'
  },
  // appointMentTextfield: {
  //   margin: '2% 0 0 2%',
  //   width: '81%',
  //   '@media (max-width: 800px)': {

  //     width: 330
  //   },
  //   '@media (max-width: 600px)':{
  //     width: 360,  
  //     padding:'0px'
  //   },
  //   '@media (max-width: 1050px)':{
  //     width: 360,  
  //     padding:'0px'
  //   }

  // }



}


const RightBox = () => {
  const classes =useStyles();
  const [personName, setPersonName] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [value, setValue] = React.useState(dayjs('2023-08-11'));


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <div className={classes.root}>
      <form style={{ margin: "4% 0px 0px 2%" }}>

        <Grid container spacing={0} >
          <Grid item xs={6} md={12} lg={6} xl={6}>

            <Box className={classes.detailsBox} sx={{
              '@media (max-width: 600px)': {
                borderBottom: '1px solid transparent !important',
                borderRight: 'none !important',
              },
            }}>
              <Typography className='text-color heading headingStyle'>Details</Typography>
              <FormControl sx={ElementStyle.selectDoctor} size='small'>
                <InputLabel id="demo-multiple-name-label">Select Doctor</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                    //   style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>

              </FormControl>

              <FormControl sx={ElementStyle.selectDoctor} size='small'>
                <InputLabel id="demo-multiple-name-label">Select Appointment Channel</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                    //   style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField className={classes.appointMentTextfield} id="outlined-basic" label="Appointment Title" variant="outlined" />

            </Box>

          </Grid>
          <Grid item xs={12} md={12} lg={6} xl={6}>
            <Box className={classes.appointmentBox}>
              <Typography className='text-color heading headingStyle'>Appointment Details</Typography>
              <Box style={{ display: 'flex', }}>
                <Box className={classes.appointmentBoxLeft}>
                  <Typography>Ravi Patil</Typography>
                  <Typography>Walk in Appointment</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']} >
                      <Box style={{ width: '75%' }}>
                        <TimePicker label="Time" />
                      </Box>
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>

                <Box className={classes.appointmentBoxLeft}>
                  <Typography>PID</Typography>
                  <FormControlLabel
                    sx={{
                      display: 'block',
                    }}
                    control={
                      <Switch
                        checked={loading}
                        onChange={() => setLoading(!loading)}
                        color="primary"
                      />
                    }

                  />

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                      <Box style={{ width: '81%' }}>
                        <DatePicker
                          label="Controlled picker"
                          value={value}
                          onChange={(newValue) => setValue(newValue)}
                        />
                      </Box>
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>


              </Box>
              <FormControl sx={ElementStyle.appointTypeSelect}>
                <InputLabel id="demo-multiple-name-label">Select Appointment Type</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                    //   style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={0} sx={{ marginTop: '5%' }} >
          <Grid item xs={12} md={12} lg={12} xl={12} style={{paddingRight:'3%'}} >
            <Typography className='text-color heading headingStyle'> Vital Information</Typography>
            <Box style={{ display: 'flex', gap: '10px', padding: '1%' }}>
              <TextField size='small' className={classes.textField} id="outlined-basic" label="BP" variant="outlined" />
              <TextField size='small' className={classes.textField} id="outlined-basic" label="Temp" variant="outlined" />
              <TextField size='small' className={classes.textField} id="outlined-basic" label="Height" variant="outlined" />
              <TextField size='small' className={classes.textField} id="outlined-basic" label="Weight" variant="outlined" />
              <TextField size='small' className={classes.textField} id="outlined-basic" label="SPO2" variant="outlined" />
              <TextField size='small' className={classes.textField} id="outlined-basic" label="Pulse Rate" variant="outlined" />

            </Box>

            <Box >
              <TextField size='small' sx={ElementStyle.reasonTextfield} id="outlined-basic" label="Reason" variant="outlined" />
              <FormControl className={classes.formControl} size='small'>
                <InputLabel id="demo-multiple-name-label">Note For Doctor</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box className={classes.ButtonBox}>
              <Button sx={ElementStyle.ButtonStyle} variant="contained">Reset</Button>
              <Button sx={ElementStyle.ButtonStyle} variant="contained">Submit</Button>
            </Box>
          </Grid>

        </Grid>



      </form>

    </div>
  )
}

export default RightBox