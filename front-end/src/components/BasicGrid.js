import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicList from './BasicList.js';

/* Pull sizing from user config*/
let emailWidth = 10;
let noteWidth = 10;
let calendarWidth = 10;

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} justifyContent="center" alignTems="center" direction="row">
        
        <Grid item emails = {emailWidth}>
            <Item><BasicList /></Item>
        </Grid>

        <Grid item notes = {noteWidth}>
            <Item>Notes:</Item>
        </Grid>

        <Grid item calendar = {calendarWidth}>
            <Item>Calendar</Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}