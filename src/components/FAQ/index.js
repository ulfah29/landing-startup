/** @jsxImportSource @emotion/react */
import { useRef, useState } from 'react';
import { faqContainer, accordionWrapper, faqContent } from './styles';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const data = [
        {
         question: 'What are accordion components?',
         answer: 'Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.' ,
        },
        {
         question: 'What are they used for?',
         answer: 'They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.',
        },
        {
         question: 'Accordion as a musical instrument',
         answer: 'The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.',
        },
        {
         question: 'Can I create an accordion component with a different framework?',
         answer: 'Yes of course, it is very possible to create an accordion component with another framework.',
        }
    ];

    const AccordionItem = ({ question, answer, isOpen, onClick }) => {
        const contentHeight = useRef();
         return(
            <div css={accordionWrapper} >
                <button className={`accordionList ${isOpen ? 'active' : ''}`} onClick={onClick} >
                    <div className='question-content'>{question}</div>
                    <div className='arrow-icon'></div>
                </button>
            
                <div ref={contentHeight} className='answer-container' style={
                    isOpen
                    ? { height: 'auto' }
                    : { height: '0px' }
                    }>
                    <p className='answer-content'>{answer}</p>
                </div>
            </div>
        )
    }
    
    const Accordion = () => {
        return (
            <div>
                {data.map((item, index) => (
                    <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={activeIndex === index}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        )
    }

    return (
        <div css={faqContainer}>
            <h2>Frequently Ask Question</h2>
            <div css={faqContent}>{Accordion()}</div>
        </div>
    )
}

export default FAQ;
