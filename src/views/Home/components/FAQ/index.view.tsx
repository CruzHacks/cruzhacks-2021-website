import * as React from "react";
import "./faq.scss";

type FAQ = {
  question: string;
  answer: string;
};

interface FAQProps {
  questionAnswersColumnLeft: FAQ[];
  questionAnswersColumnRight: FAQ[];
  questionAnswersColumnMiddle: FAQ[];
}

const FAQComponent: React.FC<FAQProps> = ({
  questionAnswersColumnLeft,
  questionAnswersColumnRight,
  questionAnswersColumnMiddle,
}: FAQProps) => {
  return (
    <div className="FAQ">
      <div className="FAQ__whiteRect">
        <div className="FAQ__text--container">
          <div className="FAQ__text--header">Frequently Asked Questions</div>
        </div>
        <div className="FAQ__pinkRect--left">
          {Object.values(questionAnswersColumnLeft).map(
            ({ question, answer }) => {
              return (
                <>
                  <div className="FAQ__text--question">{question}</div>
                  <div className="FAQ__text--answer">{answer}</div>
                </>
              );
            }
          )}
        </div>
        <div className="FAQ__pinkRect--middle">
          {Object.values(questionAnswersColumnMiddle).map(
            ({ question, answer }) => {
              return (
                <>
                  <div className="FAQ__text--question">{question}</div>
                  <div className="FAQ__text--answer">{answer}</div>
                </>
              );
            }
          )}
        </div>
        <div className="FAQ__pinkRect--right">
          {Object.values(questionAnswersColumnRight).map(
            ({ question, answer }) => {
              return (
                <>
                  <div className="FAQ__text--question">{question}</div>
                  <div className="FAQ__text--answer">{answer}</div>
                </>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
