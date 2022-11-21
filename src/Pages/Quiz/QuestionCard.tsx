import * as React from "react";
import { QWrapper, ButtonWrapper } from "./QuestionCard.Styles";
import { AnswerObject } from "./Quiz";



type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions
}) => {
  return (
    <div>
    <QWrapper>
      <p className="number">
        Question: {questionNum} / {totalQuestions}
      </p>
      <p className="question" dangerouslySetInnerHTML={{ __html: question }} />

      {answers.map((answer: string) => (
        <ButtonWrapper
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          key={answer}
        >
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </button>
        </ButtonWrapper>
      ))}
    </QWrapper>
    </div>
    
  );
};

export default QuestionCard;
