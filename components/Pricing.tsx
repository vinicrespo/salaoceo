import React from 'react';

interface PricingProps {
    onBuy: (plan: 'basic' | 'complete') => void;
}

const Pricing: React.FC<PricingProps> = ({ onBuy }) => {
    return (
        <section id="pricing" className="py-12 px-4 bg-[#FAF8F5]">
            <div className="max-w-md mx-auto flex flex-col gap-8">

                {/* Section Header */}
                <div className="text-center mb-2">
                    <h2 className="text-3xl font-bold text-[#2D2D2D] mb-2">Choose Your Path</h2>
                    <p className="text-gray-500 text-sm">One-time payment. Lifetime access.</p>
                </div>

                {/* CARD A: COMPLETE BUNDLE (BEST VALUE) */}
                <div className="relative bg-white rounded-xl border-2 border-[#C9A227] shadow-xl overflow-hidden transform scale-[1.02] z-10">
                    {/* Badge */}
                    <div className="bg-[#C9A227] text-white text-center text-xs font-bold uppercase tracking-widest py-1.5">
                        Best Value — Most Popular
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-extrabold text-[#2D2D2D] uppercase leading-tight mb-1">
                            Complete Profit Bundle
                        </h3>
                        <p className="text-[#C9A227] font-medium text-sm mb-4">
                            The Full System + All 5 Bonuses
                        </p>

                        <div className="flex items-baseline gap-2 mb-6 border-b border-gray-100 pb-4">
                            <span className="text-gray-400 line-through text-sm font-medium">$497 Value</span>
                            <span className="text-4xl font-extrabold text-[#2D2D2D]">$37</span>
                        </div>

                        <ul className="space-y-3 mb-6">
                            {[
                                "The S.C.A.L.E. Diagnostic™ System (Main)",
                                "BONUS 1: The $100K Salon Roadmap",
                                "BONUS 2: Profit-First Pricing Protocol",
                                "BONUS 3: Client Retention Playbook",
                                "BONUS 4: Salon SOPs Library",
                                "BONUS 5: 90-Day Implementation Calendar"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-green-600 text-lg shrink-0">check_circle</span>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => onBuy('complete')}
                            className="w-full bg-[#C9A227] hover:bg-[#B8860B] text-white font-bold text-lg py-4 rounded-lg shadow-lg shadow-[#C9A227]/20 transition-all active:scale-[0.98]"
                        >
                            YES, FIX MY SALON (BEST VALUE)
                        </button>
                    </div>
                </div>

                {/* CARD B: BASIC (CORE FRAMEWORK) */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-[#2D2D2D] uppercase leading-tight mb-1">
                            Core Framework
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            The Diagnostic Tool Only
                        </p>

                        <div className="flex items-baseline gap-2 mb-6 border-b border-gray-100 pb-4">
                            <span className="text-3xl font-bold text-[#2D2D2D]">$9.90</span>
                        </div>

                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start gap-3 text-sm">
                                <span className="material-symbols-outlined text-[#6B6B6B] text-lg shrink-0">check</span>
                                <span className="text-gray-600">The S.C.A.L.E. Diagnostic™ Framework</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm opacity-60">
                                <span className="material-symbols-outlined text-red-400 text-lg shrink-0">cancel</span>
                                <span className="text-gray-400">No Implementation Bonuses included</span>
                            </li>
                        </ul>

                        <button
                            onClick={() => onBuy('basic')}
                            className="w-full bg-gray-50 hover:bg-gray-100 text-[#2D2D2D] font-bold text-base py-3 rounded-lg border border-gray-200 transition-all"
                        >
                            Get Core Framework Only
                        </button>
                    </div>
                </div>

                {/* RISK REVERSAL: The Safety Net */}
                <div className="bg-[#FAF8F5] rounded-xl p-6 text-center border border-[#C9A227]/10 mt-4">
                    <div className="flex justify-center mb-3">
                        <span className="material-symbols-outlined text-[#2D2D2D] text-3xl">verified_user</span>
                    </div>
                    <h4 className="font-bold text-[#2D2D2D] text-lg mb-2">30-Day 'Actually Useful' Guarantee</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        If you don't find at least ONE profit leak you can fix immediately, simply email us and we'll refund every penny. No questions asked.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Pricing;
