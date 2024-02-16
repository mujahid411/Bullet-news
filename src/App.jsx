import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import NewsList from './components/NewsList'; 
import Header from './components/Header';

function App() {
  const [news, setNews] = useState([]);
  

  async function getNews() {
    try {
      let response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
      let value = response.data;
      setNews(value);
    } catch (error) {
      console.error(error);
    }
  }



  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
    <div className=''>
    <Header/>
      <NewsList news={news}/>
      </div>
    </>
  );
}

export default App;
