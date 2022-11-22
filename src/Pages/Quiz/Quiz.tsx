import * as React from "react";
import {stats} from "../../firebase";


//Imported Components

//Imported Styling
//import loader image

import Wrapper from "../../Components/Wrapper";
import QuestionCard from "./QuestionCard";
import { fetchQuestions, QuestionState, Topic } from "./Questions";
import { GlobalStyle, QZWrapper } from "./Quiz.Styles";

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  correctAnswer: string;
  answer: string;
  correct: boolean;
};

export default function Quiz() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [questions, setQuestions] = React.useState<QuestionState[]>([]);
  const [number, setNumber] = React.useState<number>(0);
  const [gameOver, setGameOver] = React.useState<boolean>(true);
  const [userAnswers, setUserAnswers] = React.useState<AnswerObject[]>([]);
  const [score, setScore] = React.useState<number>(0);
  const [complete, setComplete] = React.useState<boolean>(false);
  const [topic, setTopic] = React.useState(Topic.PERCEIVABLE);

  const startQuiz = async () => {
    setComplete(false);
    setLoading(true);
    const new_questions = fetchQuestions(TOTAL_QUESTIONS, topic);
    setQuestions(new_questions);
    setLoading(false);
    setGameOver(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        correctAnswer: questions[number].correct_answer,
        answer,
        correct
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const handleNext = () => {
    if (number < TOTAL_QUESTIONS - 1) setNumber((prev) => prev + 1);
    else {
      setComplete(true);
      stats(topic,score);
    }
  };

  const handleTopic = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //@ts-ignore
    setTopic(e.target.value);
  };

  console.log(number);

  return (
    <Wrapper>
      
      <QZWrapper>
        <h1>Accessibility Quiz</h1>
        {complete && <div className="complete">Quiz is complete</div>}

        {gameOver || complete ? (
          <>
            <button className="start" onClick={startQuiz}>
              Start Quiz
            </button>
            <p>Select Topic</p>
            <select value={topic} onChange={handleTopic}>
              {Object.keys(Topic).map((key) => (
                <option key={key} value={Topic[key as keyof typeof Topic]}>
                  {key}
                </option>
              ))}
            </select>
          </>
        ) : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading ? <img src={require('./../../Assets/images/loading.gif')} alt="loading" /> : null}
        {!loading && !gameOver && !complete && (
          <QuestionCard
            questionNum={number + 1}
            question={questions[number].question}
            answers={questions[number].answers}
            totalQuestions={TOTAL_QUESTIONS}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {!loading && !gameOver && !complete && !!userAnswers[number] && (
          <button className="next" onClick={handleNext}>
            Next Question
          </button>
        )}
      </QZWrapper>
    </Wrapper>
  );
}
