import React from "react";
import { Container, List, Header, Grid, Image } from "semantic-ui-react";

const ArticleItem = (props) => {
    const { article } = props;
    return (
      <List.Item style={{ padding: 10 }}>
        <Grid>
          <Grid.Column
            width={11}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Header as="h3" style = {{ margin: "10px 0", textAlign: "left", justifyContent: "left" }}>
                <a href={article.url}>{article.title}</a></Header>
            <List.Description style={{ margin: "10px 0", textAlign: "left", justifyContent: "left" }}>
              {article.description}
            </List.Description>
            <List bulleted horizontal>
              <List.Item>
                <a href={article.url}>{article.source.name}</a>
              </List.Item>
              <List.Item>{article.publishedAt.split("T")[0]}</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5} style = {{ padding: 20}}>
            <Image src={article.urlToImage} />
          </Grid.Column>
        </Grid>
      </List.Item>
    );
  };
  
const ArticleList = (props) => {
    return (
      <List divided style={{ maxWidth: 900, margin: "0 auto" }}>
        {props.articles.map((article, index) => (
          <ArticleItem article={article} key={article.title + index} />      ))}
          
      </List>
      // we should try to use a unique id generator since we might want to update the headlines
    );
};

export default ArticleList;