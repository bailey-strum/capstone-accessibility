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
            "question": "The perceivable principle focuses on?",
            "correct_answer": "Ensuring users can access information using one or more of their senses",
            "incorrect_answers": ["Writing text that is easy to decode", "Making sure keyboard controls can access all functionality", "Implementing compatibility with different browsers"]
        },
         
        {
            "topic": "perceivable",
            "question": "One of the key parts of implementing the perceivable principle is?",
            "correct_answer": "Presenting information in different ways",
            "incorrect_answers": ["Using a lot of images", "Making complicated stylings", "Using color as the main distinguisher between elements"]
        },
        
        {
            "topic": "perceivable",
            "question": "Elements important to the perceivability principle include?",
            "correct_answer": "Adaptability and distinguishability",
            "incorrect_answers": ["Adaptability and readability", "Readability and predictability", "Predictability and distinguishability"]
        },
        
        {
            "topic": "perceivable",
            "question": "Adaptability in a nutshell means?",
            "correct_answer": "Content should have multiple ways of being presented",
            "incorrect_answers": ["Making it easy for users to see and hear content", "Resizing your windows properly", "Using the alt attribute in the html image tag"]
        },
        
        {
            "topic": "perceivable",
            "question": "Distinguishability can be improved by?",
            "correct_answer": "Making the default colors sufficiently contrasting",
            "incorrect_answers": ["Giving long text alternatives for visuals", "Using a lot of graphs and charts", "Use the same html tag for everything"]
        },
        
        {
            "topic": "perceivable",
            "question": "Understanding the content of your website should depend on?",
            "correct_answer": "None of these answers",
            "incorrect_answers": ["Color", "Size", "Orientation"]
        },
        
        {
            "topic": "perceivable",
            "question": "Practicing good semantics means?",
            "correct_answer": "Organizing and structuring the information well",
            "incorrect_answers": ["Using informal semantics", "Presenting the information in only one way", "Ciphering the information"]
        },
        
        {
            "topic": "perceivable",
            "question": "User input expectations and UI purposes should always be?",
            "correct_answer": "Identifiable",
            "incorrect_answers": ["Hard to find", "Intricately styled", "Represented without context"]
        },
        
        {
            "topic": "perceivable",
            "question": "Text alternatives should describe?",
            "correct_answer": "All of these are correct",
            "incorrect_answers": ["Why the content is there", "What information it gives the user", "The words you’d use to convey its function"]
        },
        
        {
            "topic": "perceivable",
            "question": "Text content can be made more accessible by?",
            "correct_answer": "All of these are correct",
            "incorrect_answers": ["Having text to speech", "Allowing resizing and reflow", "Having good color contrast ratios"]
        },
        
        {
            "topic": "perceivable",
            "question": "The perceivable principle’s goal with non-text content is to?",
            "correct_answer": "Give the user an experience as close as possible to being able to see it",
            "incorrect_answers": ["Make it more emphasized than the text content", "Convey all decoration and formatting in assistive technology interpretations", "Always just use voice narration to explain everything"]
        },
    
        {
            "topic": "perceivable",
            "question": "Alternates for audio and video files can include?",
            "correct_answer": "Transcripts, closed captioning, and sign language",
            "incorrect_answers": ["Text to speech", "The alt and title attributes", "Charts and animations"]
        },     
        
        {
            "topic": "perceivable",
            "question": "Interface components, such as input and form controls should be?",
            "correct_answer": "Labeled",
            "incorrect_answers": ["Images, not text", "Customizable by the user", "Avoidable"]
        },
        
        {
            "topic": "perceivable",
            "question": "Anti-aliased text is?",
            "correct_answer": "Smoothing of graphics to make it more readable",
            "incorrect_answers": ["Always necessary", "Useful to improve your color contrast ratios", "Not relevant to perceivability"]
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
            "topic": "understandable",
            "question": "The understandable principle focuses on?",
            "correct_answer": "Authoring text that is readable ands understandable by as broad an audience as possible",
            "incorrect_answers": ["Ensuring users can access information using one or more of their senses", "Using lots of labels", "Providing compatibility with various hardware and software formats"]
        },
        
        {
            "topic": "understandable",
            "question": "Decoding the text refers to?",
            "correct_answer": "Recognizing written or typed words and connecting them to their associated meanings",
            "incorrect_answers": ["Putting it through a translator", "Providing a glossary for technical terms", "Writing summaries for long text"]
        },
        
        {
            "topic": "understandable",
            "question": "You can improve readability by",
            "correct_answer": "Using common, familiar words",
            "incorrect_answers": ["Using technical jargon", "Writing with run-on sentences", "Using ambiguous terms"]
        },
        
        {
            "topic": "understandable",
            "question": "A mechanism for finding definitions should be provided for?",
            "correct_answer": "All of these are correct",
            "incorrect_answers": ["Unusual words", "Unusual phrases", "Abbreviations"]
        },
        
        {
            "topic": "understandable",
            "question": "Lessening the amount of mental energy required to decode your text will?",
            "correct_answer": "Give users more energy to actually understand what is written",
            "incorrect_answers": ["Make your website more plain and simple", "Increase the need to use visuals like graphs and illustrations", "Require use of complex technical language"]
        },
        
        {
            "topic": "understandable",
            "question": "Readability is concerned with?",
            "correct_answer": "Being as clear and unambiguous as possible",
            "incorrect_answers": ["Knowing what the primary language is", "Warning the user about context changes", "Consistency of navigation"]
        },
        
        {
            "topic": "understandable",
            "question": "An example of providing access to definitions is?",
            "correct_answer": "A glossary",
            "incorrect_answers": ["An illustration", "A summary", "Spoken pronunciation"]
        },
        
        {
            "topic": "understandable",
            "question": "Which of the following require the primary language to be identifiable?",
            "correct_answer": "All of these are correct",
            "incorrect_answers": ["Braille translation technology", "Definition seeking user agents", "Speech synthesizers"]
        },
     
        {
            "topic": "understandable",
            "question": "Predictability involves",
            "correct_answer": "presentation and layout",
            "incorrect_answers": ["Layout and Disorientation", "Preferences and Disorientation", "Disorientation and Presentation"]
        },
    
        {
            "topic": "understandable",
            "question": "To make navigation more intuitive, UI should exhibit?",
            "correct_answer": "Repeated components and structures",
            "incorrect_answers": ["Unexpected context changes", "Different relative order for each page", "Inconsistent placement of buttons"]
        },
        
        {
            "topic": "understandable",
            "question": "Input assistance involves",
            "correct_answer": "ll of these are correct",
            "incorrect_answers": ["Error messages and warnings", "Descriptive instructions", "Asking for confirmation"]
        },
    
        {
            "topic": "understandable",
            "question": "Context-sensitive help is",
            "correct_answer": "Specific suggestions for a particular audience",
            "incorrect_answers": ["Providing the expected format of entry", "Automatic error identification", "Needing user input"]
        },
              
        {
            "topic": "understandable",
            "question": "Examples of consistent navigation include",
            "correct_answer": "Headers and footers",
            "incorrect_answers": ["Absence of labels", "Inaccessible links depending on what page you’re on", "Menus with unorganized subsections"]
        },
        
        {
            "topic": "understandable",
            "question": "Context changes should happen",
            "correct_answer": "With consent of the user",
            "incorrect_answers": ["Unpredictably", "Inconsistently", "As often as possible"]
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
  