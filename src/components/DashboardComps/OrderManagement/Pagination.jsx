
import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    className={`px-4 py-2 text-sm rounded-2xl border ${currentPage === index + 1 ? 'border-primary text-primary' : 'border-gray-300'
                        }`}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
