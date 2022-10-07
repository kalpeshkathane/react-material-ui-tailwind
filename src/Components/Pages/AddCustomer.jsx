import React, { useState,useMemo  } from 'react'
import {FormControl , MenuItem, Select, InputLabel, Button, TextField, Card, CardContent, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useFormik } from 'formik';
import { signUpSchema } from '../../schemas';
import countryList from 'react-select-country-list'
import { Country, State, City }  from 'country-state-city';


import { Add } from '@mui/icons-material'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const initialValues = {
    name: '',
    phone: '',
    email: '',
    address: '',
    country:'',
    state: '',
    city: '',
    pincode: ''
}


function AddCustomer() {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values,action) => {
        console.log(values);
        action.resetForm();
      },
    });
    console.log(errors);

    
  return (
        <div>
            <Typography gutterBottom variant='h6' aliegn="Start">
                <b>Add New Customer</b>
            </Typography>
            <Card style={{ maxWidth: 550, margin: "0 auto", padding: "10px 10px" }}>
                <CardContent>

                    <form onSubmit={handleSubmit}>
                        <Grid container >
                            <Grid xs={12} marginBottom={2} >
                                <TextField fullWidth label="Name" placeholder='Enter Name' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                {errors.name && touched.name ? (<p className="form-error text-red-600">{errors.name}</p>) : null}
                            </Grid>
                            <Grid xs={12} marginBottom={2} >
                                <TextField fullWidth label="Phone Number" placeholder='Enter Phone Number' name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                                {errors.phone && touched.phone ? (<p className="form-error text-red-600">{errors.phone}</p>) : null}

                            </Grid>
                            <Grid xs={12} marginBottom={2} >
                                <TextField fullWidth label="Email" placeholder='Enter Email'name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                {errors.email && touched.email ? (<p className="form-error text-red-600">{errors.email}</p>) : null}
    
                            </Grid>
                            <Grid xs={12} marginBottom={2} >
                                <TextField fullWidth label="Address" placeholder='Enter Address' name='address' value={values.address} onChange={handleChange} onBlur={handleBlur}/>

                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2} columns={16} paddingTop={2}>
                                        <Grid item xs={8}>
                                        {/* <TextField fullWidth label="Country" placeholder='Select Country' name='country' value={values.country} onChange={handleChange} onBlur={handleBlur} /> */}
                                        <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                        <Select labelId="demo-simple-select-label" 
                                                name='country'
                                                id="demo-simple-select"
                                                value={values.country}
                                                label="Country"
                                                onChange={handleChange} onBlur={handleBlur}>
                                        <MenuItem value={"India"}>India</MenuItem>
                                        <MenuItem value={"Iran"}>Iran</MenuItem>
                                        <MenuItem value={"Russia"}>Russia</MenuItem>
                                        <MenuItem value={"Indonesia"}>Indonesia</MenuItem>
                                        </Select>
                                        </FormControl>
                                      </Grid>

                                        <Grid item xs={8}>
                                            {/* <TextField fullWidth label="State" placeholder='Select State' name='state' value={values.state} onChange={handleChange} onBlur={handleBlur}/> */}
                                            <FormControl fullWidth>
                                            <InputLabel id="demo-select-small">State</InputLabel>
                                            <Select labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    name="state"
                                                    value={values.state}
                                                    label="State"
                                                    onChange={handleChange}>
                                             <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
                                             <MenuItem value={"Gujrat"}>Gujrat</MenuItem>
                                             <MenuItem value={"Karnataka"}>Karnataka</MenuItem>
                                             <MenuItem value={"Keral"}>Keral</MenuItem>
                                             <MenuItem value={"Uttarpradesh"}>Uttarpradesh</MenuItem>
                                           </Select>
                                          </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} columns={16} paddingTop={2}>
                                        <Grid item xs={8}>
                                        <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                                        <Select labelId="demo-simple-select-label" 
                                                name='city'
                                                id="demo-simple-select"
                                                value={values.city}
                                                label="City"
                                                onChange={handleChange} onBlur={handleBlur}>
                                        <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                                        <MenuItem value={"Pune"}>Pune</MenuItem>
                                        <MenuItem value={"Nasik"}>Nasik</MenuItem>
                                        <MenuItem value={"Nagar"}>Nagar</MenuItem>
                                        </Select>
                                        </FormControl>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField fullWidth label="Pincode" placeholder='Enter Pincode' name='pincode' value={values.pincode} onChange={handleChange} onBlur={handleBlur}/>

                                        </Grid>
                                    </Grid>
                                </Box>

                                <Grid paddingTop={2}>
                                    <Button variant="contained" type="submit" color="warning" style={{ backgroundColor: "orange", padding: "10" }} startIcon={<Add />} >
                                        Add Customer
                                    </Button>
                                </Grid>

                            </Grid></Grid>
                    </form>

                </CardContent>
            </Card>
        </div>

    )
}

export default AddCustomer