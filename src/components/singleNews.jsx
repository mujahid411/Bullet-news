import { useState } from "react";

import React from 'react'

const singleNews = () => {

     async function singleNews(){
        try {
         // let response = await axios.get('https://hacker-news.firebaseio.com/v0/item');
         // let id= req.query.id;
         let response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${news[0]}.json?print=pretty`);
         // let value = JSON.stringify(response.data)
         let value = response.data.title
          console.log(value)

         return <h1>{value}</h1>
       //  res.send(value);
        } catch (error) {
         console.error(error)
        }
    }
  return (
    <div>
        {}
    </div>
  )
}

export default singleNews