import { NEWS_API_KEY } from "../config";
import { COUNTRY } from "../config";

export const getHeadlines = async () => {
    const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${NEWS_API_KEY}`
    );
    const json = await response.json();
    return json;
}



