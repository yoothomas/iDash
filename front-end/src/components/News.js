import { NEWS_API_KEY } from "./config";
import { COUNTRY } from "./config";

export const getTopArticles = async () => {
    try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=" + COUNTRY + 
          "&apiKey=ddfe4b88e00242459c252ddf6be8eed4=${NEWS_API_KEY}"
        );
        const json = await response.json();
        console.log(json);
    } catch (error) {
    console.log(error);
    }
}

