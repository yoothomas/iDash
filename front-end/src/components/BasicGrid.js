import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicList from './BasicList.js';
import TodoList from './TodoList.js';

/* Pull sizing from user config*/
let noteWidth = 3;
let emailWidth = 5;
let newsWidth = 4;

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        <Grid item xs = {noteWidth}>
          <Item>Todo List</Item>
          <TodoList />
        </Grid>
        <Grid item xs = {emailWidth}>
          <Item>Email</Item>
        </Grid>
        <Grid item xs={newsWidth}>
          <Item>News</Item>
          <BasicList />
        </Grid>
        {/* <BasicList /> */}
      </Grid>
      {/* <Grid item xs={newsWidth}>
          <Item>Bookmarks</Item>
          <TodoList />
        </Grid> */}
    </Box>
  );
}