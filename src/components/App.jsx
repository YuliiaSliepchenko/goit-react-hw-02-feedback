import { Component } from 'react';
import PropTypes from 'prop-types';
import {FeedbackOptions} from './feedbackOptions/FeedbackOptions';
import {Statistics} from './statistics/Statistics.jsx';
import {Section} from './section/Section';


const feedBackStatus = ['good', 'neutral','bad'];

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }; 
  
  
  handleClick = (value) => {
    this.setState(prevState => ({[value]:prevState[value] + 1})) 
  }
  render() { 
    return (
    <div>
      <Section title="Please leave feedback">
    <FeedbackOptions options={feedBackStatus}onClick={this.handleClick}/>
    </Section>
    <Section title="Statiatics">
    <Statistics options={feedBackStatus} state={this.state}/>
    </Section>
    </div>
  );
};}
 
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  options: PropTypes.array,
  state: PropTypes.object,
  onClick: PropTypes.bool,
}