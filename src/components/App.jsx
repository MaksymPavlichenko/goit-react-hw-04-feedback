import { Component } from "react";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section'
import { Statistic } from './Statistic/Statistic'

export class App extends Component {
  state ={
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtn = event => {
    const { name } = event.target;
    this.setState(preventValue =>{
      return { [name]: preventValue[name] + 1 };
    });
  };

  countTotalFeedback = () => 
    Object.values(this.state).reduce((acc, el) => (acc += el), 0);
  
  countPossitiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
      <Section title="Please leave the feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleBtn}
          ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPossitiveFeedbackPercentage()}
            ></Statistic>
          ) : (
            'There is no feedback'
          )}
      </Section>
      </>
    );
  }
}