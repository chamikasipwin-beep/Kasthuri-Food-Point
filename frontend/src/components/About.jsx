import { useSpring, animated } from '@react-spring/web';
import './About.css';

const About = () => {
    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(30px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { tension: 280, friction: 60 },
    });

    return (
        <animated.section style={fadeIn} className="about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image-container">
                        <img
                            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200"
                            alt="Chef preparing Sri Lankan food"
                            className="about-image"
                        />
                        <div className="experience-badge">
                            <span className="years">15+</span>
                            <span className="text">Years of Culinary Excellence</span>
                        </div>
                    </div>

                    <div className="about-content">
                        <h2 className="section-title">Our Story</h2>
                        <h3 className="about-highlight">Authentic Flavors from Wagolla, Embogama</h3>
                        <p className="about-text">
                            Welcome to Kasthuri Food Point, your premier destination for authentic Sri Lankan cuisine.
                            Located in the heart of Wagolla, Embogama, we pride ourselves on bringing the rich,
                            spicy, and vibrant flavors of our heritage to your table.
                        </p>
                        <p className="about-text">
                            Our journey started with a simple passion: to serve the best Kottu, Fried Rice,
                            and Devilled dishes in the region. We use only the freshest ingredients and
                            traditional recipes passed down through generations.
                        </p>

                        <div className="about-features">
                            <div className="feature-item">
                                <span className="feature-icon">🥘</span>
                                <div>
                                    <h4>Traditional Recipes</h4>
                                    <p>Authentic spices and slow-cooked perfection.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">👨‍🍳</span>
                                <div>
                                    <h4>Expert Chefs</h4>
                                    <p>Mastering the art of Sri Lankan culinary traditions.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🚚</span>
                                <div>
                                    <h4>Local Delivery</h4>
                                    <p>Bringing warmth and flavor to Wagolla and beyond.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </animated.section>
    );
};

export default About;
