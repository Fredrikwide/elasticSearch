import { IElasticHits } from "../Interfaces/Types";

const url: string = '';

export const getProductsFromElastic = async (searchString: string, useMatch: boolean): Promise<IElasticHits> => { 
  return searchString && await (await fetch(url ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: useMatch ? JSON.stringify({ 
      "query": {
        "match": {
          "product.name": searchString
        }
      }
    }) : JSON.stringify({ 
      "query": { 
        "match_phrase_prefix": {
          "product.name": searchString
        }
      }
    }),
  })).json();
};