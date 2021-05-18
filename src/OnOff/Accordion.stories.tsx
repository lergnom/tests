import React from 'react';
import {Story, Meta} from '@storybook/react';
import Accordion from "./Accordion";
import UncontrollerAccordion from "./UncontrollerAccordion";


export default {
    title: 'Accordion',
    component: Accordion, UncontrollerAccordion

};
export const AccordionUncontroller = () => <UncontrollerAccordion/>


