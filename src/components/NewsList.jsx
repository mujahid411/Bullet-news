import React from 'react';
import NewsItem from './NewsItem';
import { useEffect,useState } from 'react';
import axios from 'axios'

const NewsList = React.memo(({  news }) => {
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 30;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function singleNews(id) {
    try {
      let response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
      let value = response.data;
      return value;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function initialFetchData() {
      try {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const promises = news.slice(startIndex, endIndex).map(id => singleNews(id));
        const results = await Promise.all(promises);
        setData(results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  
    initialFetchData();
  }, [currentPage, news]);
  
  function goToPrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage-1);
      window.scrollTo(0, 0);
    }
  }
  function goToNextPage() {
    const lastPage = Math.ceil(news.length / itemsPerPage);
    if (currentPage < lastPage) {
      setCurrentPage(currentPage+1);
      window.scrollTo(0, 0);
    }
  }
  

  return (
    <div>
    <div id="wrapper">
      {data.length > 0 ? (
        data.map((item, index) => (
          <NewsItem key={item.id} index={index + 1} id={item.id} title={item.title} url={item.url} by={item.by} currentPage={currentPage} />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
    <center>
    <div className="pagination">
  <button className='btn' onClick={() => goToPrevPage()}>{'<'}</button>
  <span>Page {currentPage}</span>
  <button className='btn' onClick={() => goToNextPage()}>{'>'}</button>
</div>
</center>

    </div>
  );
});

export default NewsList;

