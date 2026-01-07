import React from 'react';

const ScaleDiagnostic: React.FC = () => {
    return (
        <section className="bg-[#F5E6E0] py-16 px-4">
            <div className="max-w-md mx-auto">
                {/* Title */}
                <h2 className="text-center text-[26px] font-bold text-[#2D2D2D] mb-10 leading-tight">
                    3 Steps to S.C.A.L.E. Your Profit
                </h2>

                {/* Timeline Steps Container */}
                <div className="relative pl-4 flex flex-col">

                    {/* Step 1 */}
                    <div className="relative flex items-start gap-4 pb-12">
                        {/* Connecting Line (To Step 2) */}
                        <div className="absolute left-[23px] top-6 bottom-[-24px] w-0.5 bg-[#C9A227]/30"></div>

                        <div className="z-10 flex-shrink-0 w-12 h-12 bg-white rounded-full border-2 border-[#C9A227] flex items-center justify-center shadow-lg text-[#2D2D2D]">
                            <span className="material-symbols-outlined">lock_open</span>
                        </div>
                        <div className="pt-2 relative z-10">
                            <h3 className="font-bold text-[#2D2D2D] text-lg leading-tight">
                                Access The System
                            </h3>
                            <p className="text-gray-600 text-sm mt-1 leading-snug">
                                Get instant access to the S.C.A.L.E. Diagnostic™ Framework.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-start gap-4 pb-12">
                        {/* Connecting Line (To Step 3) */}
                        <div className="absolute left-[23px] top-6 bottom-[-24px] w-0.5 bg-[#C9A227]/30"></div>

                        <div className="z-10 flex-shrink-0 w-12 h-12 bg-white rounded-full border-2 border-[#C9A227] flex items-center justify-center shadow-lg text-[#2D2D2D]">
                            <span className="material-symbols-outlined">travel_explore</span>
                        </div>
                        <div className="pt-2 relative z-10">
                            <h3 className="font-bold text-[#2D2D2D] text-lg leading-tight">
                                Spot The Hidden Leaks
                            </h3>
                            <p className="text-gray-600 text-sm mt-1 leading-snug">
                                Use the diagnostic checklists to find exactly where you are losing money.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-start gap-4">
                        {/* No Connecting Line */}

                        <div className="z-10 flex-shrink-0 w-12 h-12 bg-[#2D2D2D] rounded-full border-2 border-[#2D2D2D] flex items-center justify-center shadow-lg text-white">
                            <span className="material-symbols-outlined">trending_up</span>
                        </div>
                        <div className="pt-2 relative z-10">
                            <h3 className="font-bold text-[#2D2D2D] text-lg leading-tight">
                                Plug & Profit
                            </h3>
                            <p className="text-gray-600 text-sm mt-1 leading-snug">
                                Implement the fixes immediately to stop the bleeding and increase margins.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ScaleDiagnostic;
