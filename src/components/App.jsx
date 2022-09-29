import { useState } from "react";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section'
import { Statistic } from './Statistic/Statistic'

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeuteral] = useState(0);
  const [bad, setBad] = useState(0);
  

  const handleBtn = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;

        case 'neuteral':
          setNeuteral(prev => prev + 1);
          break;

        case 'bad':
          setBad(prev => prev + 1);
        break;

        default:
          return;
    }
  };



  const countTotalFeedback = () => good + neutral + bad;
  
   const countPossitiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };


  return (
      <>
      <Section title="Please leave the feedback">
          <FeedbackOptions
            options={['good', 'neuteral', 'bad']}
            onLeaveFeedback={handleBtn}
          />
      </Section>
      <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPossitiveFeedbackPercentage()}
            />
          ) : (
            'There is no feedback'
          )}
      </Section>
      </>
    );
  };