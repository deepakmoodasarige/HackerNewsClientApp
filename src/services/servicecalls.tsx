import axios from "axios";
import {topstories} from "./hackernewsurl"

export const getData = async function(start:number, end:number) {
    const arr :any = [];
    try {
      const { data } = await axios.get( topstories
      );
      data.slice(start, end).map((item :any)=> arr.push(item));
    } catch (error) {
      return error;
    }
    return arr;
  };

  export const getDetails = async function(arr:any) {
    const promises = arr.map(async (item:any) => {
      const { data } = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
      );
      return {
        item,
        author: data.by,
        title: data.title,
        score: data.score,
        comments_count: data.descendants,
        time: data.time,
        url:
          data.url != null
            ? data.url
            : `https://news.ycombinator.com/item?id=${item}`
      };
    });
    const results = await Promise.all(promises);
    return results;
  };

  
