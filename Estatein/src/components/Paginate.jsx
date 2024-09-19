import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { fetchProperties } from "../services/api/api";


function Items({ currentItems }) {
  return (
    <>
      <div className="flex flex-col  items-start justify-center w-full px-4 md:px-10 lg:px-20 my-10 lg:my-20 text-white  gap-6">
        <p className="font-Urbanist font-semibold text-[24px] md:text-[28px]">
          Featured Properties
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4">
          <p className="font-Urbanist text-[#999999] text-[14px] md:text-[16px] leading-relaxed">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein. Click "View Details" for more
            information.
          </p>
          <button className="text-[14px] md:text-[14px] font-semibold rounded-md border border-gray-700 px-4 py-3 whitespace-nowrap">
            View All Properties
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-4 md:px-10 lg:px-16">
        {currentItems &&
          currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-secondary border border-gray-600 font-Urbanist text-white shadow-md rounded-lg overflow-hidden p-3"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">
                  {item.subtitle}
                </p>

                <div className="flex flex-wrap w-full justify-between items-center gap-2 py-3">
                  <div className="flex items-center gap-2 px-2 py-1 bg-[#262626] rounded-full">
                    <img
                      src="assets/icons/bedroom.png"
                      alt="bedroom"
                      className="h-4"
                    />
                    <p className="text-xs sm:text-sm whitespace-nowrap">
                      {item.bedroom}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 px-2 py-1 bg-[#262626] rounded-full">
                    <img
                      src="assets/icons/bathroom.png"
                      alt="bathroom"
                      className="h-4"
                    />
                    <p className="text-xs sm:text-sm whitespace-nowrap">
                      {item.bathroom}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 px-2 py-1 bg-[#262626] rounded-full">
                    <img
                      src="assets/icons/villa.png"
                      alt="villa"
                      className="h-4"
                    />
                    <p className="text-xs sm:text-sm whitespace-nowrap">
                      {item.type}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-4 py-2">
                  <div className="flex flex-col">
                  <p className="text-sm text-[#999999]">Price:</p>
                <p className="text-white text-lg font-bold">{item.price}</p>
                  </div>
                <button className="mt-4 px-4 py-2 w-full text-sm  bg-primary text-white rounded-md hover:bg-blue-600">
                  View Property Details
                </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export const PaginatedItems = ({ itemsPerPage }) => {
  const [items, setItems] = useState([])
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  const fetchProp = async () => {
    const properties = await fetchProperties(); // Fetch the properties
    setItems(properties); // Update items
     // Update page count
  };

  useEffect(() => {
    fetchProp();
  }, []);
  return (
    <div className="flex max-[520px]:w-[520px] flex-col items-center justify-center space-y-8 px-4 md:px-8">
      <Items currentItems={currentItems} />

      <ReactPaginate
        breakLabel={null} // No break label needed since we're removing page numbers
        nextLabel="→" // Using an arrow for "Next"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="←" // Using an arrow for "Previous"
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-between w-full px-[52px]" // Adjusting spacing for the arrows
        pageClassName="hidden" // Hiding the page numbers
        previousClassName="block"
        previousLinkClassName="px-3 py-2 bg-primary text-white rounded-md hover:bg-gray-600 mx-6"
        nextClassName="block"
        nextLinkClassName="px-3 py-2 bg-primary text-white rounded-md hover:bg-gray-600 mx-6"
        activeClassName="hidden" // No active class needed since we're hiding numbers
      />
    </div>
  );
};
