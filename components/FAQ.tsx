import React from 'react';

const FAQ: React.FC = () => {
    return (
        <section className="bg-white py-12 px-4 border-t border-gray-100">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-center text-[#2D2D2D] mb-8">Frequently Asked Questions</h2>

                <div className="space-y-4">

                    {/* Q1 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-[#FAF8F5] px-5 py-4 font-bold text-[#2D2D2D] text-sm sm:text-base">
                            I barely have time to breathe. Is this long?
                        </div>
                        <div className="px-5 py-4 text-gray-600 text-sm leading-relaxed">
                            No. It's designed for busy owners. 15 minutes to start.
                        </div>
                    </div>

                    {/* Q2 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-[#FAF8F5] px-5 py-4 font-bold text-[#2D2D2D] text-sm sm:text-base">
                            Does this work for solo stylists?
                        </div>
                        <div className="px-5 py-4 text-gray-600 text-sm leading-relaxed">
                            Yes, but it's specifically powerful if you want to grow or hire.
                        </div>
                    </div>

                    {/* Q3 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-[#FAF8F5] px-5 py-4 font-bold text-[#2D2D2D] text-sm sm:text-base">
                            Is this a subscription?
                        </div>
                        <div className="px-5 py-4 text-gray-600 text-sm leading-relaxed">
                            No. One-time payment. Lifetime access.
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
