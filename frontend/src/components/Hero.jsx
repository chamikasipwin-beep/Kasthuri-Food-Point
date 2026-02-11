import { useSpring, animated } from '@react-spring/web';
import './Hero.css';

const Hero = () => {
    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { tension: 280, friction: 60 },
    });

    const buttonSpring = useSpring({
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
        delay: 400,
        config: { tension: 300, friction: 10 },
    });

    const scrollToMenu = () => {
        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="home">
            <div className="hero-background"></div>
            <div className="container hero-content">
                <animated.div style={fadeIn} className="hero-text">
                    <h1>Authentic Sri Lankan Cuisine</h1>
                    <p className="hero-subtitle">
                        Experience the rich flavors of traditional Sri Lankan food in Wagolla, Embogama.
                    </p>
                </animated.div>
            </div>
        </section>
    );
};

export default Hero;
