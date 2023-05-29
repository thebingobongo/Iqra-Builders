import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Values.css';
import data from '../../utils/accordion';

const Values = () => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const handleAccordionChange = (index) => {
        setExpandedIndex(index);
    };

    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./bahria-homes-2.jpg" alt="" />
                    </div>
                </div>

                {/* right side */}
                <div className="flexColStart v-right">
                    <span className="orangeText">Our Values</span>
                    <span className="primaryText">The Way we Operate</span>
                    <span className="secondaryTextDark">
                        We strive for excellence in every aspect of our work, from providing exceptional customer service to delivering high-quality construction and property management services.
                    </span>

                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={true}
                        preExpanded={[expandedIndex]}
                        onChange={handleAccordionChange}
                    >
                        {data.map((item, i) => (
                            <AccordionItem
                                className="accordionItem"
                                key={i}
                                uuid={i}
                            >
                                <AccordionItemHeading>
                                    <AccordionItemButton className="flexCenter accordionButton">
                                        <AccordionItemState>
                                            {({ expanded }) => (
                                                <div className={`flexCenter icon ${expanded ? 'expanded' : 'collapsed'}`}>
                                                    {item.icon}
                                                </div>
                                            )}
                                        </AccordionItemState>
                                        <span className="primaryText">{item.heading}</span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Values;
