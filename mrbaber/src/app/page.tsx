import Navbar from '@/components/Navbar/Index';
import Services from '@/components/Services/Index';
import About from '@/components/About/Index';
import Blog from '@/components/Blog/Index';
import Gallery from '@/components/Gallery/Index';
import Slider from '@/components/Slider/Index';
import Contact from '@/components/Contact/Index';
import Footer from '@/components/Footer/Index';

export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
      <Services />
      <Blog />
      <Gallery />
      <Slider />
      <Contact />
      <Footer />
    </main>
  )
}
