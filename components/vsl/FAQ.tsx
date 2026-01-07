import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { clsx } from 'clsx';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full p-4 text-left focus:outline-none bg-gray-50 hover:bg-gray-100 transition"
            >
                <span className="font-semibold text-gray-900 pr-4">{question}</span>
                {isOpen ? (
                    <ChevronUp className="text-gray-500 flex-shrink-0" size={20} />
                ) : (
                    <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                )}
            </button>

            <div
                className={clsx(
                    "transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="p-4 bg-white text-gray-700 border-t border-gray-100">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const faqs = [
        {
            q: "Não tenho computador, consigo usar pelo celular?",
            a: "Sim! O Protocolo foi desenhado para ser lido direto no seu celular. Você não precisa de computador e não precisa baixar planilhas complexas. Se você sabe ler uma mensagem no WhatsApp, consegue aplicar o Detector."
        },
        {
            q: "Meu salão é pequeno (ou atendo em casa), serve para mim?",
            a: "Com certeza. O 'Sócio Oculto' é ainda mais perigoso para quem trabalha sozinha, pois você não tem margem para erro. O Protocolo vai te ajudar a ver o dinheiro sobrar, independente se você tem equipe ou é 'eu-quipe'."
        },
        {
            q: "Como recebo o acesso? Chega pelo Correio?",
            a: "Não. O acesso é 100% online. Assim que sua compra for aprovada, você recebe um e-mail com o link para baixar o Manual do Protocolo e começar agora mesmo."
        },
        {
            q: "E se eu não achar nenhum erro financeiro?",
            a: "Eu duvido muito. Mas se isso acontecer, você tem a Garantia Blindada de 30 dias. Basta me enviar um e-mail e eu devolvo 100% do seu dinheiro, sem perguntas."
        },
        {
            q: "Tenho pouco tempo, é curso longo?",
            a: "Não. Não é um curso com aulas teóricas cansativas. É um Manual Prático de leitura rápida. Você lê o passo a passo e aplica no seu salão em poucos minutos, sem perder horas na frente da tela."
        }
    ];

    return (
        <section className="bg-white py-12 px-4">
            <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                    Perguntas Frequentes
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <FAQItem key={idx} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
