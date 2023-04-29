import React, { useState } from "react";
import "./react.css";

function App() {
  const [blogPosts, setBlogPosts] = useState([
    {
      title: "My First Blog Post",
      date: "April 17, 2023",
      author: "Bharath",
      content: "All you need to know is that whatever you have to do is NOW because sometimes NOW is NEVER, and that’s when you regret it. And in this fast-paced world, you can not afford to have regret at any time."
    },
    {
      title: "My Second Blog Post",
      date: "April 20, 2023",
      author: "Kalyan",
      content: " In this never-ending rat race, we get frustrated and lose all hope every now and then. We feel as though we don’t have anything left to strive for."  },
    {
      title: "My Third Blog Post",
      date: "April 25, 2023",
      author: "Aravind",
      content: "Someone might be really good at one thing and bad at another, while someone else might be the exact opposite."
    },
  ]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {blogPosts.map((blogPost, index) => (
              <div key={index} className="blog-post">
                <h2>{blogPost.title}</h2>
                <p className="date">{blogPost.date}</p>
                <p className="author">{blogPost.author}</p>
                <p>{blogPost.content}</p>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="sidebar">
              <h2>Popular Posts</h2>
              <ul>
                <li>
                  <a href="#">My First Blog Post</a>
                </li>
                <li>
                  <a href="#">My Second Blog Post</a>
                </li>
                <li>
                  <a href="#">My Third Blog Post</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
