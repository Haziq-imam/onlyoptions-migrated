import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import Home from './pages/Core/Home/Home';
import About from './pages/Core/About/About';
import Pricing from './pages/Core/Pricing/Pricing';
import Performance from './pages/Core/Performance/Performance';
import HowItWorks from './pages/Core/HowItWorks/HowItWorks';
import Testimonials from './pages/Core/Testimonials/Testimonials';
import Faq from './pages/Core/Faq/Faq';
import Contact from './pages/Core/Contact/Contact';
import Signup from './pages/Core/Signup/Signup';
import Login from './pages/Core/Login/Login';
import Blog from './pages/Core/Blog/Blog';
import FreeTrial from './pages/Core/FreeTrial/FreeTrial';


import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/free-trial" element={<FreeTrial />} />


        {/* 404 Error fallback */}
        <Route path="*" element={<ComingSoon title="Page Not Found" category="Error" />} />
      </Route>
    </Routes>
  );
}

export default App;
