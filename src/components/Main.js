import React from 'react';
import { blogs } from '../data';
import BlogCard from './BlogCard';

function Main() {
  return (
    <div className="main-container">
      {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  );
}

export default Main;
