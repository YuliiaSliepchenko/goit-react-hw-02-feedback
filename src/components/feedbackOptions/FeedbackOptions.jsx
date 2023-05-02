import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options,onClick}) => {
    return (
        <div className={s.btn_item}>
        {options.map(name => (
            <button className={s.btn} key={name} onClick={() => onClick(name)}>{name}</button>
          ))}  
          </div>  
    );
};


FeedbackOptions.propTypes = {
     options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired,
}

