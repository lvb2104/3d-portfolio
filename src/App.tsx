import { BrowserRouter } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import {
    About,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Navbar,
    StarsCanvas,
    Tech,
    Works,
    Footer, // Import Footer
} from './components';

const App = () => {
    return (
        <BrowserRouter>
            <div className='relative z-0 bg-primary'>
                <header className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                    <Navbar />
                    <Hero />
                </header>
                <main>
                    <About />
                    <Experience />
                    <Tech />
                    <Works />
                    <Feedbacks />
                    <div className='relative z-0'>
                        <Contact />
                        <StarsCanvas />
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
                <SpeedInsights />
            </div>
        </BrowserRouter>
    );
};

export default App;
