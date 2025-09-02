import React from 'react';
import { Link } from 'react-router-dom';

export default function DeepLearningPost() {
    return (
        <div className="blog-post">
            <div className="blog-post-header">
                <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
                <div className="blog-post-meta">
                    <span className="blog-post-date">September 2025</span>
                    <span className="blog-post-category">Deep Learning</span>
                </div>
                <h1 className="blog-post-title">Vision-Language Models and Autonomous Driving in SuperTuxKart</h1>
                <img src="./img/tuxkart.jpg" alt="SuperTuxKart" className="blog-post-hero-image" />
            </div>

            <div className="blog-post-content">
                <section>
                    <h2>Project Overview</h2>
                    <p>
                        I developed two advanced machine learning projects using the SuperTuxKart racing game as a testbed: TuxKartVision (vision-language models) and deep learning planners for autonomous driving. Both projects demonstrate state-of-the-art computer vision, NLP, and reinforcement learning techniques applied to dynamic, real-world-like environments.
                    </p>
                </section>

                <section>
                    <h2>TuxKartVision: Vision-Language Models</h2>
                    <p>
                        TuxKartVision implements a generative multimodal transformer (MLLM) and a contrastive CLIP-style model for image-text understanding and multi-choice question answering. The system processes SuperTuxKart gameplay images and contextual questions, handling spatial reasoning, object detection, and situational awareness.
                    </p>
                    <ul>
                        <li>Automated question-answer and caption generation from game metadata (200k+ examples)</li>
                        <li>Custom CLIP implementation with attention-weighted pooling and robust contrastive learning</li>
                        <li>Optimized training pipeline: gradient checkpointing, LoRA fine-tuning, large-batch support</li>
                    </ul>
                    <p>
                        <strong>Results:</strong> The models achieve strong performance on vision-language tasks, including robust QA and high accuracy on multi-choice questions.
                    </p>
                    <p>
                        <a href="https://github.com/natelove02/TuxKartVision" target="_blank" rel="noopener noreferrer">View TuxKartVision on GitHub →</a>
                    </p>
                </section>

                <section>
                    <h2>Deep Learning for Autonomous Driving</h2>
                    <p>
                        This project implements and benchmarks MLP, Transformer, and CNN-based planners for end-to-end autonomous driving in SuperTuxKart. Each model was trained and evaluated using a custom pipeline and grader, leveraging state, boundary, and image data to control a kart in the game.
                    </p>
                    <ul>
                        <li>MLPPlanner: Multi-layer perceptron for state and boundary data</li>
                        <li>TransformerPlanner: Perceiver-style cross-attention for fusing state and boundary info</li>
                        <li>CNNPlanner: Convolutional neural network for direct perception-based control</li>
                        <li>Automated grader measures lateral error, off-track rate, and driving score</li>
                        <li>Flexible, modular training and evaluation pipeline</li>
                    </ul>
                    <p>
                        <strong>Results:</strong>
                    </p>
                    <ul>
                        <li>MLPPlanner: Score 0.97, Lateral Error 0.12, Off-Track Rate 0.03</li>
                        <li>TransformerPlanner: Score 0.95–0.98, Lateral Error 0.13–0.15, Off-Track Rate 0.02–0.04</li>
                        <li>CNNPlanner: Score 0.96, Lateral Error 0.14, Off-Track Rate 0.03</li>
                    </ul>
                    <p>
                        <strong>Key Features:</strong> Flexible data pipelines, custom grader, reproducible results, and ready-to-showcase code. <a href="https://github.com/natelove02/TuxKartModel" target="_blank" rel="noopener noreferrer">View Autonomous Driving Project on GitHub →</a>
                    </p>
                </section>

                <section>
                    <h2>Technical Highlights</h2>
                    <ul>
                        <li>Advanced data generation: automated QA and caption pipelines, spatial reasoning logic</li>
                        <li>Memory and training efficiency: gradient checkpointing, large-batch support, LoRA</li>
                        <li>Production-ready: robust error handling, logging, and monitoring</li>
                    </ul>
                </section>

                <section>
                    <h2>Applications and Impact</h2>
                    <p>
                        These projects showcase practical applications of deep learning in autonomous systems, computer vision, and multimodal AI. They serve as reference implementations for vision-language modeling, contrastive learning, and end-to-end driving in simulated environments.
                    </p>
                </section>

                <div className="blog-post-footer">
                    <p>
                        <strong>Explore the code:</strong>
                        <a href="https://github.com/natelove02/TuxKartVision" target="_blank" rel="noopener noreferrer"> TuxKartVision</a> |
                        <a href="https://github.com/natelove02/TuxKartModel" target="_blank" rel="noopener noreferrer"> Autonomous Driving</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
