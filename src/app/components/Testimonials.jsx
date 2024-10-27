const Testimonial = ({ quote, author, role }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600 mb-4">"{quote}"</p>
      <p className="font-bold">{author}</p>
      <p className="text-gray-500">{role}</p>
    </div>
  );
  
  const Testimonials = () => {
    const testimonials = [
      {
        quote: "This app has revolutionized how our team manages projects. It's intuitive and powerful!",
        author: "Jane Doe",
        role: "Project Manager"
      },
      {
        quote: "I've tried many work management tools, but this one stands out for its simplicity and effectiveness.",
        author: "John Smith",
        role: "Freelance Developer"
      },
    ];
  
    return (
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;