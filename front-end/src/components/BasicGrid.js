import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicList from './BasicList.js';
import TodoList from './TodoList.js';
import { getHeadlines, NewsWidget } from './News.js';
import { Container, Header } from "semantic-ui-react";
import ArticleList from './ArticleList.js';
import { DEFAULT_ARTICLE_NUM } from '../config.js'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import CalendarWidget from './Calendar.js';

/* Pull sizing from user config*/
let noteWidth = 3;
let calendarWidth = 5;
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
                <Draggable>
                <Grid item xs = {noteWidth}>
                  <Item>
                  <Header as="h3" style={{ textAlign: "center", padding: 0 }}>
                    Todo List
                    </Header>
                    <TodoList />
                  </Item>
                  
                </Grid>
                </Draggable>
                <Draggable>
                <Grid item xs = {calendarWidth}>
                  <Item>
                  <Header as="h3" style={{ textAlign: "center", padding: 0 }}>
                    Calendar
                    </Header>
                    <CalendarWidget />
                      </Item>
                </Grid>
                </Draggable>
                
                <Draggable>
                <Grid item xs = {newsWidth}>
                    <Item>
                        <Header as="h3" style={{ textAlign: "center", padding: 0 }}>
                            Top Headlines
                        </Header>
                        {articles.length > 0 && <ArticleList articles={articles.slice(0, DEFAULT_ARTICLE_NUM)} />}
                        {newsAPIError && <p>Could not fetch any articles. Please try again.</p>}
                    </Item>
                    {/*add button to "load more"*/}
                    
                    {/*<BasicList /> */}
                </Grid>
                </Draggable>
                {/* <BasicList /> */}
              </Grid>
            </Box>
          );
    }
    
}

export default BasicGrid;
