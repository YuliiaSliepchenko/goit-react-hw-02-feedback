import PropTypes from 'prop-types';
import s from './Sections.module.css';
export const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={s.title}>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};