import React from 'react';
import {Story, Meta} from '@storybook/react';
import {Rating} from "./Rating";
import {UncontrollerRating} from "./UncontrollerRating";


export default {
    title: 'Rating',
    component: UncontrollerRating,
};
export const EmptyStars = () => <Rating value={0}/>
export const RatingStars1 = () => <Rating value={1}/>
export const RatingStars2 = () => <Rating value={2}/>
export const RatingStars3 = () => <Rating value={3}/>
export const RatingStars4 = () => <Rating value={4}/>
export const RatingStars5 = () => <Rating value={5}/>
export const Uncontroller = () => <UncontrollerRating/>

