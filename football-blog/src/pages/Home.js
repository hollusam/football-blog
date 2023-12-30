import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Article from '../components/Article';
import LiveScore from '../components/LiveScore';
import News from '../components/News';
import Fixture from '../components/Fixture';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [news, setNews] = useState([]);
  const [liveScores, setLiveScores] = useState([]);
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    // Fetch data (replace with actual APIs)
    const fetchData = async () => {
      try {
        const articlesResponse = await axios.get('/api/articles');
        const newsResponse = await axios.get('/api/news');
        const liveScoresResponse = await axios.get('/api/live-scores');
        const fixturesResponse = await axios.get('/api/fixtures');

        setArticles(articlesResponse.data);
        setNews(newsResponse.data);
        setLiveScores(liveScoresResponse.data);
        setFixtures(fixturesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="header">
        <h1>Football Blog</h1>
      </div>

      <div className="container">
        <Link to="/team">Go to Team Page</Link>

        <div>
          <h2>Latest Articles</h2>
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>

        <div>
          <h2>Latest News</h2>
          {news.map((newsItem) => (
            <News key={newsItem.id} newsItem={newsItem} />
          ))}
        </div>

        <div>
          <h2>Live Scores</h2>
          {liveScores.matches.map((match) => (
            <LiveScore key={match.id} match={match} />
          ))}
        </div>

        <div>
          <h2>Fixtures</h2>
          {fixtures.matches.map((match) => (
            <Fixture key={match.id} match={match} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
