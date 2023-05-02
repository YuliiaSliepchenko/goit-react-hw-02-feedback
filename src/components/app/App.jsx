import { Component } from 'react';
import {FeedbackOptions} from '../feedbackOptions/FeedbackOptions';
import {Statistics} from '../statistics/Statistics.jsx';
import { Section } from '../section/Section';
import {Notification} from '../notification/Notification'
import s from './App.module.css';


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
     const hasFeedback = Object.values(this.state).some(item => item > 0);
    return (
    <div className={s.conteiner}>
      <Section title="Please leave feedback">
    <FeedbackOptions options={feedBackStatus}onClick={this.handleClick}/>
    </Section>
    <Section title="Statiatics">
   { hasFeedback ? <Statistics options={feedBackStatus} state={this.state}/>: <Notification message="There is no feedback"></Notification>}
    </Section>
    </div>
  );
};}
 
