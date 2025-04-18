import { Button } from "../shared/Button";
const ContactSection = () => {
    return (
      <section className="w-full min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#f1f7ff] via-white to-[#fff1f1] px-4 py-10 md:py-20">
        <div className="max-w-4xl w-full text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#000]">
            Connect with Our Digital Marketing Experts
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Reach Out for Tailored Strategies and Results-Driven Solutions. <br />
            Let's Elevate Your Online Presence Together
          </p>
  
          
          <div className="bg-white mt-8 md:mt-10 rounded-xl shadow-xl p-6 md:p-10 w-full max-w-3xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                         <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter your Number"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your Total No of Vehicles:"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-blue-500"
                  />
                </div>
              </div>
  
            
              <div className="space-y-2">
                <label className="block text-sm font-semibold mb-1">Message</label>
                <textarea
                  rows="8"
                  placeholder="Enter your Message."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm resize-none outline-blue-500"
                />
              </div>
            </form>
  
                <div className="font-semibold px-10 py-3">
             <Button className="w-[180px] md:w-[233px]" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  