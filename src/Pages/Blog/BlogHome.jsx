import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogHome() {
    const blogPosts = [
        {
            id: 1,
            title: "Building an NFL Prediction Model",
            description: "Deep dive into my NFL game prediction model using Python, machine learning, and statistical analysis.",
            date: "January 2025",
            link: "/blog/nfl-model",
            image: "./img/scoreboard.jpg"
        },
        {
            id: 2,
            title: "First Semester of My Master's Program",
            description: "Reflections on my first semester at UT Austin's Master's of Computer Science program, focusing on Algorithms and Optimization.",
            date: "May 2025",
            link: "/blog/masters-semester-1",
            image: "./img/about-me.jpeg"
        }
    ];

    return (
        <div className="blog-home">
            <section className="blog-hero">
                <div className="blog-hero-content">
                    <h1>My Blog</h1>
                    <p>Thoughts on technology, engineering, and my journey from military to tech</p>
                </div>
            </section>
            
            <section className="blog-posts-section">
                <div className="blog-posts-container">
                    {blogPosts.map((post) => (
                        <Link to={post.link} key={post.id} className="blog-post-card">
                            <div className="blog-post-image">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="blog-post-content">
                                <div className="blog-post-date">{post.date}</div>
                                <h2 className="blog-post-title">{post.title}</h2>
                                <p className="blog-post-description">{post.description}</p>
                                <span className="blog-read-more">Read More →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
