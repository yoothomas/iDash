import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicList from './BasicList.js';
import TodoList from './TodoList.js';
import { getHeadlines } from './News.js';
import { Container, Header } from "semantic-ui-react";
import ArticleList from './ArticleList.js';

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

class BasicGrid extends React.Component {
    state = {
        articles: [],
        newsAPIError: "",
    };

    async componentDidMount() {
        try {
            const response = await getHeadlines();
            this.setState({ articles: response.articles });
          } catch (error) {
            this.setState({ apiError: "Could not find any articles" });
          }
    }

    render() {
        const { articles, newsAPIError } = this.state;
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
                <Container>
                    <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
                        Top Headlines
                    </Header>
                    {articles.length > 0 && <ArticleList articles={articles} />}
                    {newsAPIError && <p>Could not fetch any articles. Please try again.</p>}
                    </Container>
                  
                  {/*<BasicList /> */}
                </Grid>
                {/* <BasicList /> */}
              </Grid>
            </Box>
          );
    }
    
}

export default BasicGrid;