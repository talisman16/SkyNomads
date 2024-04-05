import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4">
      <div className="flex items-center mb-8">
        <img src={process.env.PUBLIC_URL + '/Logo/CompanyLogo.png'} alt="Company Logo" className="w-32 h-32 mr-4" />
        <h1 className="text-4xl font-bold text-green-600 dark:text-green-300">About Us</h1>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        SkyNomads is a leading flight reservation company that provides a seamless and hassle-free booking experience for travelers around the world. With a user-friendly interface and a wide range of flight options, we make it easy for our customers to find and book the flights they need.
      </p>
      <h2 className="text-2xl font-bold mb-2 text-green-600 dark:text-green-300">Our History</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        SkyNomads was founded in 2010 with a mission to simplify the flight booking process and provide a better experience for travelers. Over the years, we have grown to become one of the most trusted and reliable flight reservation companies in the industry, serving millions of customers worldwide.
      </p>
      <h2 className="text-2xl font-bold mb-2 text-green-600 dark:text-green-300">Our Mission</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        Our mission is to make flight booking easy, convenient, and accessible to everyone. We strive to provide our customers with the best possible experience, from the moment they start searching for flights to the moment they board their planes.
      </p>
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-green-600 dark:text-green-300">Our Team</h2>
        <Slider {...settings}>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <img src={process.env.PUBLIC_URL + '/Logo/nassim.jpg'} alt="Nassim" className="w-32 h-32 mb-4 rounded-full" />
            <h3 className="text-xl font-bold mb-2 text-green-600 dark:text-green-300">Namous Nassim</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Nassim is a talented developer with a passion for creating intuitive and user-friendly interfaces. She has been instrumental in building the SkyNomads platform and is dedicated to ensuring that our customers have the best possible experience.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <img src={process.env.PUBLIC_URL + '/Logo/yazali.jpg'} alt="Yazali" className="w-32 h-32 mb-4 rounded-full" />
            <h3 className="text-xl font-bold mb-2 text-green-600 dark:text-green-300">Yazali Ahmed</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Yazali is a skilled developer with a keen eye for detail. He has been responsible for implementing many of the advanced features of the SkyNomads platform and is committed to delivering high-quality solutions that meet the needs of our customers.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <img src={process.env.PUBLIC_URL + '/Logo/Khalid.png'} alt="Khalid" className="w-32 h-32 mb-4 rounded-full" />
            <h3 className="text-xl font-bold mb-2 text-green-600 dark:text-green-300">Makoudi Khalid</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Makoudi Khalid possesses an exceptional understanding of relational database concepts, including entity-relationship modeling, normalization techniques, and query optimization. He is proficient in a variety of database management systems.
            </p>
          </div>
        </Slider>
      </section>
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-600 dark:text-green-300">Our Values</h2>
      <p className="text-gray-700 dark:text-gray-300">
        At SkyNomads, we value customer satisfaction, innovation, and collaboration. We believe in working together to create the best possible experience for our customers, and we are committed to constantly improving our products and services to meet their needs.
      </p>
    </div>
  );
}

export default AboutUs;
