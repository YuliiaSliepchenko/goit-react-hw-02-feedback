import React from 'react';
import PropTypes from 'prop-types';
 
import {countTotalFeedback} from '../helpers/countTotalFeedback';
import {countPositiveFeedbackPercentage} from '../helpers/countPositsvePersage';
import {Notification} from '../notification/Notification'
import s from './Statistics.module.css';

export const Statistics = ({options,state}) => {
    const hasFeedback = Object.values(state).some(item => item > 0);

    return( 
    hasFeedback ?   
    <div className={s.statis}>
        {options.map(name => (
         <span className={s.item_statis} key={name}>
           {name}:{state[name]}
           </span>
            ))} 
           <span className={s.item_statis}>Total:{countTotalFeedback(state)}
           </span>
           <span className={s.item_statis}>
             Positive feedback:{countPositiveFeedbackPercentage(state.good,countTotalFeedback(state))}%
             </span>
     </div>: <Notification message="There is no feedback"></Notification>
     );
   
};

Statistics.propTypes = {
    options: PropTypes.array,
    state: PropTypes.object,
}


