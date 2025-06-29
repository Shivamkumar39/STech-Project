import HeroSlider from '../components/Heroslider';
import Services from '../sections/Services';
import Reviews from '../sections/Reviews';
import HomePlans from '../sections/HomePlane';


const HomePage = () => {
  return (
    <div className="font-sans">
      <HeroSlider />

      {/* Section Components */}
      <Services />
      <HomePlans/>
      <Reviews />
    </div>
  );
};

export default HomePage;
