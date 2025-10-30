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
<section className="bg-gray-100 py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
      What Our Readers Say
    </h2>

    <div className="grid gap-10 md:grid-cols-3">
      {/* Testimonial Card 1 */}
      <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <img
          src="https://i.pravatar.cc/100?img=20"
          alt="User"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h4 className="font-semibold text-lg text-gray-800">Anjali Sharma</h4>
        <p className="text-sm text-gray-500 mb-3">Frontend Developer</p>
        <p className="text-gray-600">
          “I absolutely love the blog’s clean design and detailed tutorials. It’s my go-to for learning React!”
        </p>
      </div>

      {/* Testimonial Card 2 */}
      <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <img
          
          src="https://i.pravatar.cc/100?img=12"
          alt="User"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h4 className="font-semibold text-lg text-gray-800">Rohit Verma</h4>
        <p className="text-sm text-gray-500 mb-3">Full Stack Engineer</p>
        <p className="text-gray-600">
          “Great content and easy to follow. This blog helped me level up my backend skills quickly.”
        </p>
      </div>

      {/* Testimonial Card 3 */}
      <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <img
          src="https://i.pravatar.cc/100?img=36"
          alt="User"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h4 className="font-semibold text-lg text-gray-800">Meena Desai</h4>
        <p className="text-sm text-gray-500 mb-3">UI/UX Designer</p>
        <p className="text-gray-600">
          “The design inspiration I get from this blog is unmatched. Clean, informative, and engaging!”
        </p>
      </div>
    </div>
  </div>
</section>

    {/* Advanced Footer */}
<footer className="bg-gray-900 text-gray-300 pt-16 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-700">
    
    {/* Brand Info */}
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">MyBlog</h2>
      <p className="text-sm leading-relaxed">
        A modern platform for developers to share knowledge, publish articles, and explore cutting-edge tech tutorials.
      </p>
      <button className="mt-6 bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition">
        Get Started
      </button>
    </div>

    {/* Useful Links */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
      <ul className="space-y-3 text-sm">
        <li><a href="/" className="hover:text-yellow-400">Home</a></li>
        <li><a href="/blogs" className="hover:text-yellow-400">All Blogs</a></li>
        <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
        <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
      </ul>
    </div>

    {/* Categories */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
      <ul className="space-y-3 text-sm">
        <li><a href="#" className="hover:text-yellow-400">React</a></li>
        <li><a href="#" className="hover:text-yellow-400">JavaScript</a></li>
        {/* <li><a href="#" className="hover:text-yellow-400">Node.js</a></li> */}
        <li><a href="#" className="hover:text-yellow-400">UI/UX</a></li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
      <div className="flex space-x-5 text-xl">
        <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="hover:text-gray-400"><i className="fab fa-github"></i></a>
        <a href="#" className="hover:text-blue-500"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <p className="text-sm mt-6 text-gray-500">
        Join 5,000+ developers reading our weekly tips.
      </p>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 pb-10 text-sm text-gray-500">
    <p>&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a href="/privacy" className="hover:text-yellow-400">Privacy</a>
      <a href="/terms" className="hover:text-yellow-400">Terms</a>
    </div>
  </div>
</footer>


    </>
  );
};

export default Home;
