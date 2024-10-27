const ContactForm = () => {
    return (
      <div className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" rows="4" className="w-full p-2 border rounded" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactForm;