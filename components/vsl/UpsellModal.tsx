import React, { useEffect } from 'react';
import { X, Gift } from 'lucide-react';

interface UpsellModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAccept: () => void;
    onDecline: () => void;
}

const UpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose, onAccept, onDecline }) => {

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm animate-fade-in">
            <div
                className="bg-white rounded-xl shadow-2xl w-full max-w-sm md:max-w-md relative overflow-hidden flex flex-col p-8 animate-slide-up"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button X */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col items-center text-center">

                    {/* Header Icon: Gift Box (Gold) */}
                    <div className="mb-6">
                        <Gift size={48} className="text-[#F2994A]" />
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl font-bold text-[#2D2D2D] leading-tight mb-4">
                        Espere! Não deixe dinheiro na mesa.
                    </h3>

                    {/* Body Text */}
                    <p className="text-[#2D2D2D] text-base mb-8 leading-relaxed px-2">
                        Você escolheu o Básico. Mas a maioria das donas de salão se arrepende de ficar sem os <strong className="font-bold">Manuais de Implementação</strong>.
                    </p>

                    {/* The Offer Box - Dashed Gold Container */}
                    <div className="w-full border-2 border-dashed border-[#F2C94C] bg-[#FFFCF5] rounded-xl p-6 mb-8">
                        <p className="text-[#2D2D2D] text-sm mb-3">
                            Leve o <strong className="font-bold">PACOTE COMPLETO</strong> (com os 5 Bônus) por uma diferença ridícula:
                        </p>

                        <div className="flex items-center justify-center gap-3">
                            <span className="text-gray-400 text-lg line-through">R$ 37,00</span>
                            <span className="text-4xl font-extrabold text-[#F2994A] tracking-tighter">R$ 27,00</span>
                        </div>
                    </div>

                    {/* Main Button */}
                    <button
                        onClick={onAccept}
                        className="w-full bg-gradient-to-r from-[#F2994A] to-[#F2C94C] text-white font-bold py-4 rounded-lg shadow-[0_4px_14px_0_rgba(242,153,74,0.39)] hover:shadow-[0_6px_20px_rgba(242,153,74,0.23)] hover:-translate-y-1 transform transition-all duration-200"
                    >
                        SIM! QUERO O COMPLETO POR R$ 27
                    </button>

                    {/* Secondary Link */}
                    <button
                        onClick={onDecline}
                        className="mt-4 text-xs text-gray-400 hover:text-gray-600 underline"
                    >
                        Não, obrigado. Vou arriscar sem os bônus.
                    </button>
                </div>

            </div>
        </div>
    );
};

export default UpsellModal;
