export const shuffleArray = (array: any[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

export type Question = {
    topic: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  };

export type QuestionState = Question & { answers: string[] };

export enum Topic {
    PERCEIVABLE = "perceivable",
    OPERABLE = "operable",
    UNDERSTANDABLE = "understandble",
    ROBUST = "robust"
  };

export const questions = {
    "results": [
        {
            "topic": "perceivable",
            "question": "All of the following are examples of implementing the perceivability principle EXCEPT:",
            "correct_answer": "Using page numbers",
            "incorrect_answers": [
                "Text to speech",
                "Text resizing",
                "Sufficient color contrast"
            ]
        },
        {
            "topic": "perceivable",
            "question": "All of the following are examples of implementing the perceivability principle EXCEPT:",
            "correct_answer": "Using page numbers",
            "incorrect_answers": [
                "Text to speech",
                "Text resizing",
                "Sufficient color contrast"
            ]
        }

    ]
}

export const fetchQuestions  = (
    amount: number,
    topic: Topic
) => {
    return questions.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer
        ])
    }));
};
  