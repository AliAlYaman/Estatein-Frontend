import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQCards = ({ faqs = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const faqsPerPage = 3;

  // Get the current FAQs based on pagination
  const indexOfLastFaq = currentPage * faqsPerPage;
  const indexOfFirstFaq = indexOfLastFaq - faqsPerPage;
  const currentFaqs = faqs.slice(indexOfFirstFaq, indexOfLastFaq);

  // Function to handle page change
  const handleNextPage = () => {
    if (currentPage < Math.ceil(faqs.length / faqsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full  py-8 px-4 md:px-10 lg:px-28 my-10 lg:my-20 ">
         <h2 className="font-bold  mb-4 text-white font-Urbanist text-[24px] md:text-[28px] text-start">Frequently Asked Questions</h2>
         <p className='mb-16 font-Urbanist text-[#999999] text-[14px] md:text-[16px] leading-relaxed'>Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 text-white ">
        {currentFaqs.length > 0 ? (
          currentFaqs.map((faq, index) => (
            <div key={index} className="flex flex-col justify-between border p-6 rounded-md shadow-md bg-tertiary border-gray-700 max-[520px]:w-[520px] py-16">
              <h3 className="font-bold text-lg mb-4">{faq.question}</h3>
              <p className="text-sm text-gray-400 mb-10">{faq.answer}</p>
              <Link to='' className="w-full text-[14px] md:text-[14px] font-semibold rounded-md border border-gray-700 px-4 py-3 whitespace-nowrap md:w-fit font-Urbanist">Read More</Link>
            </div>
          ))
        ) : (
          <p>No FAQs available.</p>
        )}
      </div>

      <div className="flex justify-between items-center mt-8 text-white">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`rounded-2xl px-1 py-1 border border-gray-500 ${currentPage === 1 ? 'bg-secondary cursor-not-allowed' : 'bg-secondary text-white hover:bg-gray-500'}`}
        >
          <img src="assets/icons/arrow-left.png" alt="" />
        </button>

        <span className="text-gray-500">{currentPage} of {Math.ceil(faqs.length / faqsPerPage)}</span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(faqs.length / faqsPerPage)}
          className={`rounded-2xl px-1 py-1 border border-gray-500 ${currentPage === Math.ceil(faqs.length / faqsPerPage) ? 'bg-secondary cursor-not-allowed' : 'bg-secondary text-white hover:bg-gray-500'}`}
        >
          <img src="assets/icons/arrow-right.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default FAQCards;
