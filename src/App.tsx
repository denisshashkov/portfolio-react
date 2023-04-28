import { Navbar } from './components';
import {
  About,
  Contact,
  Experience,
  Hero,
  Reviews,
  Services,
  Works,
} from './pages';

export const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Works />
        <Reviews />
        <Contact />
      </main>
    </>
  );
};
