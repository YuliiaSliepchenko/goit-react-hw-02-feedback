import React from 'react';
import PropTypes from 'prop-types';
 
import {countTotalFeedback} from '../helpers/countTotalFeedback';
import {countPositiveFeedbackPercentage} from '../helpers/countPositsvePersage';
import s from './Statistics.module.css';

export const Statistics = ({options,state}) => {
    

    return( 
    
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
     </div>
     );
   
};

Statistics.propTypes = {
    options: PropTypes.array,
    state: PropTypes.object,
}


