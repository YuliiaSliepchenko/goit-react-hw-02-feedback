import { Component } from 'react';
import {FeedbackOptions} from '../feedbackOptions/FeedbackOptions';
import {Statistics} from '../statistics/Statistics.jsx';
import {Section} from '../section/Section';
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
    return (
    <div className={s.conteiner}>
      <Section title="Please leave feedback">
    <FeedbackOptions options={feedBackStatus}onClick={this.handleClick}/>
    </Section>
    <Section title="Statiatics">
    <Statistics options={feedBackStatus} state={this.state}/>
    </Section>
    </div>
  );
};}
 
