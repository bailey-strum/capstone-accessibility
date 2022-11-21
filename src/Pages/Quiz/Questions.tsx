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
            "topic": "operable",
            "question": "What input device(s) should be considered the baseline input device(s)?",
            "correct_answer": "Keyboard alone",
            "incorrect_answers": ["Keyboard and mouse", "Mouse alone", "Vocal"]
        },
        
        {
            "topic": "operable",
            "question": " Which is not expected functionality for a keyboard to be capable of doing?",
            "correct_answer": "Navigate a mouse pointer in a x/y fashion",
            "incorrect_answers": ["Easily navigate through a page", "Reliably capable of using functionality", "Close the webpage" ]
        },
        
        {
            "topic": "operable",
            "question": "The operable principle focuses on?",
            "correct_answer": "Ensures that as many people as possible can use the webpage regardless of input device or personal circumstance",
            "incorrect_answers": ["Ensuring that the webpage is viewable for as many people as possible", "Ensures that people are able to understand the webpage", "Ensures that people can operate the website in only a single precise way so that it can be optimized"]
        },
        
        {
            "topic": "operable",
            "question": "You really want to include some specific content on your website since it’s become a viral trend recently, but the content contains rapidly changing light frequencies. What should you do?",
            "correct_answer": "Include the content, warn the user once or multiple times, and provide a easy and immediate exit to the content once started",
            "incorrect_answers": ["Include the content, just include a warning before showing it but don’t let the user exit the content once the lightshow is started", "Include the content, the user knows what they want and if it hurts them that isn’t your problem", "Never include any content that has flashing lights or dangerous light frequencies, meaning no videos or other formats such as gifs"]
        },
        
        {
            "topic": "operable",
            "question": "What is an easy, user-friendly  way of navigating through a website’s multiple pages?",
            "correct_answer": "Top-down directories",
            "incorrect_answers": ["Bottom-up directories", "Exiting the website and googling for the specific page", "Entering the page in their web browsers search bar"]
        },
        
        {
            "topic": "operable",
            "question": "What is an example of expected controls the user should have for video content?",
            "correct_answer": "Pause",
            "incorrect_answers": ["Automatic machine learning algorithm that determines what an item is in the video when clicked on", "Ability to auto translate the subtitles of the video into the top 100 most commonly read languages", "Download the entire video in a comprehensive and detailed text format"]
        },
        
        {
            "topic": "operable",
            "question": "What key is used by the user to typically navigate web pages with a single keystroke to go forward?",
            "correct_answer": "Tab",
            "incorrect_answers": ["Shift-Tab", "Ctrl-Tab", "Space bar"]
        },
        
        {
            "topic": "operable",
            "question": "What key is used by the user to typically navigate web pages with a double keystroke to go backward?",
            "correct_answer": "Shift-Tab",
            "incorrect_answers": ["Tab", "Ctrl-Tab", "Space bar"]
        },
        
        {
            "topic": "operable",
            "question": "What is not an example of an input device?",
            "correct_answer": "Printer",
            "incorrect_answers": ["Keyboard", "Vocal (speech to text)", "Digital Keyboard"]
        },
        
        {
            "topic": "operable",
            "question": "You have been commissioned to create a high pace web browser game. This is a rhythm game where very high dexterous and precise movements are required to succeed. Which of the following should you do?",
            "correct_answer": "Include difficulty options - allow the user to choose between assisted, normal, hard, and very hard",
            "incorrect_answers": ["Don't include any options for the user to tweak their personal experience. The game designer had a specific vision for the game, and only specific people are worthy of playing the game", "Include minimal options for the user to tweak their personal experience. Only give control of volume" , "Allow the user to directly edit the game files and provide no protections in case they break it"]
        },

        {
            "topic": "robust",
            "question": "As of 2022, what is the most popular web browser?",
            "correct_answer": "Google chrome",
            "incorrect_answers": ["Safari", "Edge", "Tor"]
        },
        
        {
            "topic": "robust",
            "question": "As of 2022, what is the most popular operating system for desktop/laptop?",
            "correct_answer": "Windows",
            "incorrect_answers": ["MacOS", "Linux", "ChromeOS"]
        },
        
        {
            "topic": "robust",
            "question": "As of 2022 what is the most popular operating system for mobile?",
            "correct_answer": "Android",
            "incorrect_answers": ["IOS", "Origin OS", "Oxygen OS"]
        },
        
        {
            "topic": "robust",
            "question": "You are told that a website you made isn’t usable in any operating system besides Windows 10 specifically. What should you do? ",
            "correct_answer": "Figure out how to get the website to be usable on the most popular operating systems",
            "incorrect_answers": ["Disregard them, they should be using windows anyway", "Outsource the problem, you have better things to be doing", "Figure out how to get the website to work on all operating systems"]
        },
        
        {
            "topic": "robust",
            "question": "You are creating functionality for a website and are being limited by common standards. What should you do?",
            "correct_answer": "Conform to the standards",
            "incorrect_answers": ["Disregard the standards, other websites should conform to yours", "Manipulate the standards heavily", "Conform to some standards only" ]
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
  