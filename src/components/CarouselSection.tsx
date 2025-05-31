import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselSection = () => (
  <Carousel autoPlay infiniteLoop showThumbs={false}>
    <div style={{ width: "100%", height: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img
      src="/images/pf-1.jpg"
      alt="Slide 1"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    <div style={{ width: "100%", height: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img
      src="/images/pf-2.jpg"
      alt="Slide 2"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    <div style={{ width: "100%", height: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img
      src="/images/pf-3.jpg"
      alt="Slide 3"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    <div style={{ width: "100%", height: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img
      src="/images/pf-4.jpg"
      alt="Slide 4"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  </Carousel>
);

export default CarouselSection;
