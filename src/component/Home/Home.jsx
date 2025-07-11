import React from "react";
import Testimonials from "../Testimonials/Testimonials";
import BlogCard from "../BlogCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="relative w-full h-[80vh] overflow-hidden ">
          {/* Carousel */}
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={4000}
            transitionTime={800}
            showArrows={false}
            >
            <div>
              <img
                className="h-[80vh] w-full object-cover"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Tech Blog"
              />
            </div>
            <div>
              <img
                className="h-[80vh] w-full object-cover"
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                alt="Tutorial"
              />
            </div>
            <div>
              <img
                className="h-[80vh] w-full object-cover"
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                alt="Tutorial"
              />
            </div>
            <div>
              <img
                className="h-[80vh] w-full object-cover"
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
                alt="Inspiration"
              />
            </div>
          </Carousel>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center px-4 z-20">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl mb-4">
              Welcome to <span className="text-yellow-300">MyBlog</span>
            </h1>
            <p className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto">
              Discover amazing articles, tutorials, and stories curated just for
              you.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Card Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Latest Articles
          </h2>
          <BlogCard />
        </div>
      </section>

      {/* 3-Image Row Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="https://images.unsplash.com/photo-1522199710521-72d69614c702"
            alt="Sample 1"
            className="rounded-xl shadow-lg object-cover w-full h-64"
          />
          <img
            src="https://images.unsplash.com/photo-1522199710521-72d69614c702"
            alt="Sample 2"
            className="rounded-xl shadow-lg object-cover w-full h-64"
          />
          <img
            src="https://images.unsplash.com/photo-1522199710521-72d69614c702"
            alt="Sample 3"
            className="rounded-xl shadow-lg object-cover w-full h-64"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            What Our Readers Say
          </h2>
          <Testimonials />
        </div>
      </section>
    </>
  );
};

export default Home;
