import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}

      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">Paint Bros Vancouver</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-white/90 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-white/90 hover:text-white transition-colors">About Us</a>
              <a href="#services" className="text-white/90 hover:text-white transition-colors">Services</a>
              <a href="#contact" className="text-white/90 hover:text-white transition-colors">Contact</a>
            </nav>
            <a href="tel:7783874513" className="bg-white text-indigo-700 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Painting & Home Renovation Services in Vancouver
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Since 2014
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7783874513"
                className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Get Free Estimate
              </a>
              <a
                href="mailto:paintbros.reno@gmail.com"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-900 hover:bg-gray-50 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">About Us</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Paint Bros Vancouver</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At Paint Bros & Home Renovation, we believe every home deserves to look its best – inside and out.
              We're a locally owned business with years of experience in painting, remodeling, and home improvements.
              From small touch-ups to complete makeovers, we bring skill, care, and attention to detail to every project.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Craftsmanship</h4>
                <p className="text-gray-600">Quality work with attention to every detail</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Reliability</h4>
                <p className="text-gray-600">We show up when we say we will</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Clean Work</h4>
                <p className="text-gray-600">We work clean and respect your space</p>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mt-12 text-center">
              Your home is more than walls and floors – it's where life happens.
              Let's make it a place you're proud to show off.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Our Services</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              number="1"
              title="Interior Painting"
              description="Transform your living spaces with professional interior painting. From single rooms to entire homes, we deliver flawless finishes that bring your vision to life."
            />

            <ServiceCard
              number="2"
              title="Exterior Painting"
              description="Protect and beautify your home's exterior with durable, weather-resistant paint. We prepare surfaces properly to ensure long-lasting, stunning results."
            />

            <ServiceCard
              number="3"
              title="Drywall Repair"
              description="Expert drywall repair and installation services. We fix holes, cracks, and damage, ensuring smooth, seamless walls ready for painting."
            />

            <ServiceCard
              number="4"
              title="Flooring"
              description="Quality flooring installation and refinishing. From hardwood to laminate, we help you choose and install the perfect floors for your home."
            />

            <ServiceCard
              number="5"
              title="Kitchen Renovation"
              description="Complete kitchen remodeling services tailored to your needs and budget. Create the kitchen you've always dreamed of with our expert team."
            />

            <ServiceCard
              number="6"
              title="Bathroom Renovation"
              description="Transform your bathroom into a beautiful, functional space. From fixtures to finishes, we handle every detail of your bathroom renovation."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Our Promise</h3>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">We Don't Stop Until You Love the Results</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Clients choose us because we combine craftsmanship with reliability. Our services are tailored
                to fit your vision and budget, and we're committed to delivering exceptional results every time.
              </p>

              <div className="space-y-4">
                <FeatureItem text="Years of experience in painting and home improvements" />
                <FeatureItem text="Locally owned and operated in Vancouver" />
                <FeatureItem text="Free, no-obligation quotes" />
                <FeatureItem text="Fully insured and professional team" />
                <FeatureItem text="Clean, efficient work process" />
                <FeatureItem text="Competitive pricing without compromising quality" />
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">From Small Touch-Ups to Complete Makeovers</h3>
              <p className="text-gray-600 mb-6">
                No project is too big or too small. Whether you need a quick refresh or a complete home
                transformation, we bring the same level of skill, care, and attention to detail.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span>Detailed project planning and consultation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span>High-quality materials and proven techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span>Transparent communication throughout the project</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span>Timely completion with minimal disruption</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free quote and let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7783874513"
              className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call: (778) 387-4513
            </a>
            <a
              href="mailto:paintbros.reno@gmail.com"
              className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Get In Touch</h3>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Paint Bros Vancouver</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to get your home painted, and renovated, looking like new today?
                Reach out to us for a free consultation and quote.
                We're here to answer all your questions and help you plan your perfect home improvement.
              </p>

              <div className="space-y-4">
                <ContactInfo
                  label="Phone"
                  value="(778) 387-4513"
                  href="tel:7783874513"
                />
                <ContactInfo
                  label="Email"
                  value="paintbros.reno@gmail.com"
                  href="mailto:paintbros.reno@gmail.com"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Service Area</p>
                  <p className="text-lg text-gray-900">Vancouver, BC & Greater Vancouver Area</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Follow Us</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/share/1PTEpVhKhf/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-gray-700 transition-colors"
                    >
                      <FaFacebook className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.instagram.com/mypaintbros/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-gray-700 transition-colors"
                    >
                      <FaInstagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Paint Bros Vancouver</h3>
              <p className="text-gray-400">
                Professional painting and home renovation services in Vancouver, BC.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: <a href="tel:7783874513" className="hover:text-white transition-colors">(778) 387-4513</a></li>
                <li>Email: <a href="mailto:paintbros.reno@gmail.com" className="hover:text-white transition-colors">paintbros.reno@gmail.com</a></li>
                <li>Service Area: Vancouver, BC</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Paint Bros Vancouver. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component Helpers
function ServiceCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <span className="text-4xl font-bold text-gray-200 mr-3">{number}</span>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      <svg className="w-6 h-6 text-black mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

function ContactInfo({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div>
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{label}</p>
      <a href={href} className="text-lg text-gray-900 hover:text-gray-700 transition-colors">
        {value}
      </a>
    </div>
  );
}
