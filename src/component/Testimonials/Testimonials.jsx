import React from "react";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Tech Blogger",
    comment:
      "This blog consistently provides insightful articles that help me stay current in the tech world. Highly recommend!",
    
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    
  },
  {
    name: "John Smith",
    role: "Developer & Reader",
    comment:
      "The content here is top-notch. Well-researched, well-written, and always relevant. A must-follow for any developer.",
   avatar: "https://randomuser.me/api/portraits/women/44.jpg",
   
  },
  {
    name: "Emily Chan",
    role: "Startup Founder",
    comment:
      "Reading this blog helped me make better product decisions. It’s my go-to source for tech strategy tips.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const TestimonialCard = ({ name, role, comment, avatar }) => (
  <div className="testimonial-card">
    <img src={avatar} alt={name} className="testimonial-avatar" />
    <p className="testimonial-comment">"{comment}"</p>
    <h4 className="testimonial-name">{name}</h4>
    <p className="testimonial-role">{role}</p>
  </div>
);

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h2>What Our Readers Say</h2>
      <div className="testimonial-list">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
