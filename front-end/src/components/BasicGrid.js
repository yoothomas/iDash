import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicList from './BasicList.js';

/* Pull sizing from user config*/
let emailWidth = 8;
let noteWidth = 4;

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs = "auto">
          <Item>xs</Item>
        </Grid>
        <Grid item xs = {emailWidth}>
          <Item>Email:</Item>
        </Grid>
        <Grid item xs={noteWidth}>
          <Item>Notes:</Item>
        </Grid>
        <BasicList />
      </Grid>
    </Box>
  );
}