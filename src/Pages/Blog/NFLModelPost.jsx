import React from 'react';
import { Link } from 'react-router-dom';

export default function NFLModelPost() {
    return (
        <div className="blog-post">
            <div className="blog-post-header">
                <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
                <div className="blog-post-meta">
                    <span className="blog-post-date">January 2025</span>
                    <span className="blog-post-category">Machine Learning</span>
                </div>
                <h1 className="blog-post-title">Building an NFL Prediction Model: From Data to Predictions</h1>
                <img src="./img/scoreboard.jpg" alt="NFL Scoreboard" className="blog-post-hero-image" />
            </div>

            <div className="blog-post-content">
                <section>
                    <h2>The Challenge</h2>
                    <p>
                        Predicting NFL game outcomes is one of the most challenging problems in sports analytics. 
                        With 32 teams, countless variables, and the inherent unpredictability of football, building 
                        an accurate prediction model requires careful consideration of multiple factors and sophisticated 
                        machine learning techniques.
                    </p>
                </section>

                <section>
                    <h2>Data Collection and Preprocessing</h2>
                    <p>
                        The foundation of any good prediction model is quality data. For this project, I collected 
                        comprehensive NFL data including:
                    </p>
                    <ul>
                        <li><strong>Team Statistics:</strong> Offensive and defensive metrics, yards per game, points scored/allowed</li>
                        <li><strong>Player Performance:</strong> Key player injuries, quarterback ratings, rushing yards</li>
                        <li><strong>Historical Data:</strong> Head-to-head records, home/away performance</li>
                        <li><strong>Environmental Factors:</strong> Weather conditions, travel distance, rest days</li>
                        <li><strong>Advanced Metrics:</strong> Expected points added (EPA), success rate, DVOA ratings</li>
                    </ul>
                    
                    <p>
                        Using Python's Beautiful Soup library, I scraped data from multiple sources and created 
                        a comprehensive dataset spanning multiple seasons. The data preprocessing phase involved 
                        handling missing values, normalizing statistics, and creating meaningful feature engineering.
                    </p>
                </section>

                <section>
                    <h2>Model Architecture</h2>
                    <p>
                        I experimented with several machine learning approaches before settling on a hybrid model:
                    </p>
                    
                    <h3>1. Convolutional Neural Network (CNN)</h3>
                    <p>
                        Using PyTorch, I built a CNN that processes team statistics as 2D matrices, allowing the 
                        model to identify spatial patterns in team performance metrics. This approach proved 
                        particularly effective at recognizing complex relationships between offensive and defensive statistics.
                    </p>

                    <h3>2. Feature Engineering Pipeline</h3>
                    <p>
                        I created several derived features that significantly improved model performance:
                    </p>
                    <ul>
                        <li>Momentum indicators (recent form over last 4 games)</li>
                        <li>Strength of schedule adjustments</li>
                        <li>Home field advantage quantification</li>
                        <li>Rest and travel impact factors</li>
                    </ul>

                    <h3>3. Ensemble Approach</h3>
                    <p>
                        The final model combines predictions from multiple algorithms:
                    </p>
                    <ul>
                        <li>CNN for pattern recognition in team statistics</li>
                        <li>Random Forest for handling categorical variables</li>
                        <li>Gradient Boosting for final prediction refinement</li>
                    </ul>
                </section>

                <section>
                    <h2>Results and Performance</h2>
                    <p>
                        After extensive testing and validation, the model achieved:
                    </p>
                    <ul>
                        <li><strong>Accuracy:</strong> 63.2% on game outcomes (win/loss)</li>
                        <li><strong>Spread Accuracy:</strong> 58.7% against the betting spread</li>
                        <li><strong>Over/Under:</strong> 61.4% accuracy on total points predictions</li>
                    </ul>

                    <p>
                        These results consistently outperformed basic statistical models and random chance, 
                        demonstrating the value of machine learning approaches in sports prediction.
                    </p>
                </section>

                <section>
                    <h2>Key Learnings and Challenges</h2>
                    
                    <h3>Data Quality is Everything</h3>
                    <p>
                        The biggest lesson was the importance of clean, consistent data. NFL statistics 
                        can be reported differently across sources, and handling these inconsistencies 
                        was crucial for model performance.
                    </p>

                    <h3>Feature Selection Matters</h3>
                    <p>
                        Not all statistics are predictive. Through extensive testing, I found that 
                        recent performance weighted more heavily than season averages, and certain 
                        advanced metrics like EPA were more predictive than traditional box score stats.
                    </p>

                    <h3>The Unpredictability Factor</h3>
                    <p>
                        Football has an inherent randomness that limits prediction accuracy. Injuries, 
                        weather, and pure chance play significant roles that even the best models 
                        struggle to capture completely.
                    </p>
                </section>

                <section>
                    <h2>Technical Implementation</h2>
                    <p>
                        The project leveraged several key technologies:
                    </p>
                    <ul>
                        <li><strong>Python:</strong> Primary development language</li>
                        <li><strong>PyTorch:</strong> Deep learning framework for CNN implementation</li>
                        <li><strong>pandas:</strong> Data manipulation and analysis</li>
                        <li><strong>Beautiful Soup:</strong> Web scraping for data collection</li>
                        <li><strong>scikit-learn:</strong> Traditional ML algorithms and preprocessing</li>
                        <li><strong>matplotlib/seaborn:</strong> Data visualization and analysis</li>
                    </ul>
                </section>

                <section>
                    <h2>Future Improvements</h2>
                    <p>
                        There are several areas where I plan to enhance the model:
                    </p>
                    <ul>
                        <li>Real-time data integration for live odds and injury reports</li>
                        <li>Player-level modeling for more granular predictions</li>
                        <li>Advanced weather impact analysis</li>
                        <li>Expansion to other sports (NBA, MLB)</li>
                        <li>Development of a web interface for easy prediction access</li>
                    </ul>
                </section>

                <section>
                    <h2>Conclusion</h2>
                    <p>
                        Building this NFL prediction model has been an incredible learning experience that 
                        combined my interests in sports, data science, and machine learning. While perfect 
                        prediction remains elusive (and probably impossible), the project demonstrated 
                        the power of combining domain knowledge with advanced analytics.
                    </p>
                    
                    <p>
                        The skills I developed in data collection, preprocessing, model selection, and 
                        evaluation have been invaluable for my broader machine learning journey and 
                        complement the theoretical knowledge I'm gaining in my Master's program at UT Austin.
                    </p>
                </section>

                <div className="blog-post-footer">
                    <p>
                        <strong>Check out the code:</strong> 
                        <a href="https://github.com/natelove02/NFL-Model" target="_blank" rel="noopener noreferrer"> 
                            View on GitHub →
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
