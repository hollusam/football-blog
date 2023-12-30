import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import articles from '../data/articles.json';
import LiveScore from '../components/LiveScore';
import News from '../components/News';
import Fixture from '../components/Fixture';

const Home = () => {
  const [news, setNews] = useState([]);
  const [liveScores, setLiveScores] = useState([]);
  const [fixtures, setFixtures] = useState([]);
  const Article = ({ title, content }) => (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );

  useEffect(() => {
    // Fetch data (replace with actual APIs)
    const fetchData = async () => {
      try {
        const newsResponse = await axios.get('/api/news');
        const liveScoresResponse = await axios.get('/api/live-scores');
        const fixturesResponse = await axios.get('/api/fixtures');

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
        <Article key={article.id} title={article.title} content={article.content} />
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
        {liveScores && liveScores.length > 0 ? (
          liveScores.map((score) => (
            <LiveScore key={score.id} score={score} />
          ))
        ) : (
          <p>No live scores available</p>
        )}
      </div>

      <div>
        <h2>Fixtures</h2>
        {fixtures && fixtures.length > 0 ? (
          fixtures.map((fixture) => (
            <Fixture key={fixture.id} fixture={fixture} />
          ))
        ) : (
          <p>No fixtures available</p>
        )}
      </div>
    </div>
  </div>
  );
};

export default Home;
