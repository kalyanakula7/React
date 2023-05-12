import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from '@mui/material/Link';

import BlogCard from './BlogCard';

function Nav() {
  const [apiContent, setApiContent] = useState('');

  useEffect(() => {
    // Function to fetch API data
    const fetchApiData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=dfb7a7c0c9924744b9be61ddda2df3f4');

        // Update the API content in the state
        setApiContent(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch API data initially
    fetchApiData();

    // Fetch API data every 60 seconds
    const interval = setInterval(fetchApiData, 60000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="nav-container" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
      <nav>
        <ul className="nav-links">
        <Link underline='none' variant='button'  href="/">
            Home
              </Link>
        </ul>
      </nav>
      <div className="api-content">
        {apiContent.length > 0 && (
          apiContent.map((article) => <BlogCard blog={article} />)
        )}
      </div>
    </div>
  );
}

export default Nav;
