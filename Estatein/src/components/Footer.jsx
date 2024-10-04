export default function Footer() {
    const columns = [
      {
        title: 'Home',
        links: ['Hero Section', 'Features', 'Properties', 'Testimonials', "FAQ's"]
      },
      {
        title: 'About Us',
        links: ['Our Story', 'Our Works', 'How It Works', 'Our Team', 'Our Clients']
      },
      {
        title: 'Properties',
        links: ['Portfolio', 'Categories']
      },
      {
        title: 'Services',
        links: ['Valuation Mastery', 'Strategic Marketing', 'Negotiation Wizardry', 'Closing Success', 'Property Management', 'Contact Form', 'Our Offices']
      }
    ];
  
    return (
      <footer className="bg-black text-white py-12 w-full px-24">
        <div className="container mx-auto xl:px-1">
          {/* Grid layout for footer columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[url('assets/logo/logo.png')] bg-cover rounded-md mr-2"></div>
                <span className="text-xl font-bold">Estatein</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600 w-full sm:w-auto sm:flex-grow"
                />
                <button
                  type="submit"
                  className="bg-gray-800 border border-gray-700 border-l-0 text-white px-3 py-[10px] rounded-r-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 mt-4 sm:mt-0 sm:ml-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
            {columns.map((column, index) => (
              <div key={index} className="sm:text-left text-center">
                <h3 className="font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          {/* Bottom section */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 text-center md:text-left">©2023 Estatein. All Rights Reserved. Terms & Conditions</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
  {['facebook', 'instagram', 'twitter', 'linkedin', 'youtube'].map((social, index) => (
    <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
      <span className="sr-only">{social}</span>
      {social === 'facebook' && (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {social === 'instagram' && (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.054 1.982.24 2.737.511a5.499 5.499 0 011.96 1.26c.603.603 1.1 1.31 1.45 2.045.348.737.572 1.623.65 2.743.055 1.263.068 1.645.068 4.857s-.012 3.595-.07 4.859c-.054 1.172-.24 1.983-.51 2.739a5.473 5.473 0 01-1.26 1.96c-.603.603-1.31 1.1-2.045 1.45-.737.348-1.623.572-2.743.65-1.263.055-1.645.068-4.857.068s-3.595-.012-4.857-.07c-1.17-.054-1.983-.24-2.739-.51a5.473 5.473 0 01-1.96-1.26 5.473 5.473 0 01-1.45-2.045c-.348-.737-.572-1.623-.65-2.743-.055-1.263-.068-1.645-.068-4.857s.012-3.595.07-4.857c.054-1.17.24-1.983.51-2.739a5.499 5.499 0 011.26-1.96c.603-.603 1.31-1.1 2.045-1.45.737-.348 1.623-.572 2.743-.65 1.263-.055 1.645-.068 4.857-.068m0-2.163c-3.28 0-3.687.014-4.973.071-1.29.058-2.18.271-2.94.576a7.612 7.612 0 00-2.694 1.605A7.612 7.612 0 00.764 5.75c-.305.76-.518 1.65-.576 2.94-.057 1.287-.071 1.693-.071 4.973s.014 3.687.071 4.973c.058 1.29.271 2.18.576 2.94a7.612 7.612 0 001.605 2.694 7.612 7.612 0 002.694 1.605c.76.305 1.65.518 2.94.576 1.287.057 1.693.071 4.973.071s3.687-.014 4.973-.071c1.29-.058 2.18-.271 2.94-.576a7.612 7.612 0 002.694-1.605 7.612 7.612 0 001.605-2.694c.305-.76.518-1.65.576-2.94.057-1.287.071-1.693.071-4.973s-.014-3.687-.071-4.973c-.058-1.29-.271-2.18-.576-2.94a7.612 7.612 0 00-1.605-2.694 7.612 7.612 0 00-2.694-1.605c-.76-.305-1.65-.518-2.94-.576-1.287-.057-1.693-.071-4.973-.071zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.163a3.999 3.999 0 110-7.997 3.999 3.999 0 010 7.997zm6.406-10.965a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {social === 'twitter' && (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M23 3a10.55 10.55 0 01-3.014.825 5.355 5.355 0 002.358-2.95 10.724 10.724 0 01-3.416 1.307 5.336 5.336 0 00-9.09 4.865A15.14 15.14 0 011.67 2.9a5.325 5.325 0 001.646 7.123A5.248 5.248 0 01.96 9.64v.068a5.335 5.335 0 004.282 5.227 5.382 5.382 0 01-2.407.092 5.338 5.338 0 004.985 3.703A10.709 10.709 0 010 20.805a15.132 15.132 0 008.181 2.4c9.82 0 15.186-8.134 15.186-15.186 0-.23-.006-.46-.017-.688A10.847 10.847 0 0023 3z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {social === 'linkedin' && (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M4.98 3.5C3.334 3.5 2 4.836 2 6.48v11.04c0 1.644 1.334 2.98 2.98 2.98h11.04c1.644 0 2.98-1.334 2.98-2.98V6.48c0-1.644-1.334-2.98-2.98-2.98H4.98zM8.65 17.017H5.813V10.5H8.65v6.517zM7.23 9.28a1.674 1.674 0 110-3.348 1.674 1.674 0 010 3.348zm8.504 7.737h-2.837v-3.1c0-.737-.014-1.686-1.028-1.686-1.029 0-1.186.804-1.186 1.635v3.15H9.842V10.5h2.727v.902h.04c.38-.718 1.308-1.476 2.693-1.476 2.877 0 3.41 1.892 3.41 4.35v2.742h-.001z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {social === 'youtube' && (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M22.54 6.42a2.77 2.77 0 00-1.95-1.96C18.84 4 12 4 12 4s-6.84 0-8.59.46a2.77 2.77 0 00-1.95 1.96 29.94 29.94 0 00-.46 5.58 29.94 29.94 0 00.46 5.58 2.77 2.77 0 001.95 1.96c1.75.46 8.59.46 8.59.46s6.84 0 8.59-.46a2.77 2.77 0 001.95-1.96 29.94 29.94 0 00.46-5.58 29.94 29.94 0 00-.46-5.58zm-13.52 7.69V9.88l5.77 2.12-5.77 2.11z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </a>
  ))}
</div>

          </div>
        </div>
      </footer>
    );
  }
  