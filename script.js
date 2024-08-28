const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "Leo Tolstoy", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "In what year did World War II end?",
        options: ["1942", "1945", "1948", "1950"],
        answer: "1945"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Osmium", "Oganesson", "Oxonium"],
        answer: "Oxygen"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: "Nile"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Kyoto", "Osaka", "Tokyo", "Nagasaki"],
        answer: "Tokyo"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "India", "Japan", "South Korea"],
        answer: "Japan"
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: "Blue Whale"
    },
    {
        question: "Which is the tallest mountain in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
        answer: "Mount Everest"
    },
    {
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"],
        answer: "Alexander Fleming"
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        answer: "Mercury"
    },
    {
        question: "What is the national flower of Japan?",
        options: ["Cherry Blossom", "Rose", "Tulip", "Lily"],
        answer: "Cherry Blossom"
    },
    {
        question: "Which is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        answer: "Vatican City"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "Which language is the most widely spoken in the world?",
        options: ["English", "Spanish", "Chinese", "Hindi"],
        answer: "Chinese"
    },
    {
        question: "Who was the first person to walk on the moon?",
        options: ["Yuri Gagarin", "Buzz Aldrin", "Michael Collins", "Neil Armstrong"],
        answer: "Neil Armstrong"
    },
    {
        question: "Which country is the largest by land area?",
        options: ["China", "Canada", "United States", "Russia"],
        answer: "Russia"
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Cucumber"],
        answer: "Avocado"
    },
    {
        question: "Which is the most populated country in the world?",
        options: ["India", "United States", "China", "Indonesia"],
        answer: "China"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "Which is the largest desert in the world?",
        options: ["Sahara", "Gobi", "Arctic", "Antarctic"],
        answer: "Antarctic"
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "John Adams", "Benjamin Franklin", "George Washington"],
        answer: "George Washington"
    },
    {
        question: "What is the hardest rock?",
        options: ["Granite", "Marble", "Diamond", "Quartz"],
        answer: "Diamond"
    },
    {
        question: "What is the longest bone in the human body?",
        options: ["Femur", "Humerus", "Tibia", "Fibula"],
        answer: "Femur"
    },
    {
        question: "Which continent is the Sahara Desert located on?",
        options: ["Asia", "South America", "Africa", "Australia"],
        answer: "Africa"
    },
    {
        question: "Which country gave the Statue of Liberty to the United States?",
        options: ["United Kingdom", "Germany", "France", "Italy"],
        answer: "France"
    },
    {
        question: "What is the largest island in the world?",
        options: ["Greenland", "Madagascar", "Borneo", "Australia"],
        answer: "Greenland"
    },
    {
        question: "What is the smallest unit of life?",
        options: ["Organ", "Tissue", "Cell", "Atom"],
        answer: "Cell"
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Charlotte Brontë", "Mary Shelley", "Jane Austen", "Emily Brontë"],
        answer: "Jane Austen"
    },
    {
        question: "What is the speed of light?",
        options: ["299,792 km/s", "299,792 m/s", "300,000 km/h", "150,000 km/s"],
        answer: "299,792 km/s"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Brain"],
        answer: "Skin"
    },
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        answer: "Michelangelo"
    },
    {
        question: "Which element is commonly known as quicksilver?",
        options: ["Lead", "Mercury", "Tin", "Zinc"],
        answer: "Mercury"
    },
    {
        question: "What is the largest organ inside the human body?",
        options: ["Liver", "Heart", "Brain", "Lung"],
        answer: "Liver"
    },
    {
        question: "Who is the author of the Harry Potter series?",
        options: ["J.R.R. Tolkien", "J.K. Rowling", "Stephen King", "George R.R. Martin"],
        answer: "J.K. Rowling"
    },
    {
        question: "Which country is known for the dance, the Tango?",
        options: ["Brazil", "Argentina", "Spain", "Mexico"],
        answer: "Argentina"
    },
    {
        question: "What is the main gas found in the air we breathe?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen"
    },
    {
        question: "What is the largest type of deer?",
        options: ["Elk", "Reindeer", "Moose", "Red Deer"],
        answer: "Moose"
    },
    {
        question: "Who developed the first successful polio vaccine?",
        options: ["Albert Sabin", "Louis Pasteur", "Edward Jenner", "Jonas Salk"],
        answer: "Jonas Salk"
    },
    {
        question: "Which artist cut off part of his own ear?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"],
        answer: "Vincent van Gogh"
    },
    {
        question: "What is the main ingredient in traditional hummus?",
        options: ["Chickpeas", "Lentils", "Black Beans", "Soybeans"],
        answer: "Chickpeas"
    },
    {
        question: "In which country can you visit Machu Picchu?",
        options: ["Brazil", "Peru", "Colombia", "Chile"],
        answer: "Peru"
    },
    {
        question: "Which planet has the most moons?",
        options: ["Mars", "Jupiter", "Saturn", "Uranus"],
        answer: "Saturn"
    },
    {
        question: "What is the smallest country by population?",
        options: ["Nauru", "Tuvalu", "Vatican City", "Monaco"],
        answer: "Vatican City"
    },
    {
        question: "Which ocean is the deepest?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Which Shakespeare play features the characters Rosencrantz and Guildenstern?",
        options: ["Hamlet", "Macbeth", "Othello", "King Lear"],
        answer: "Hamlet"
    },
    {
        question: "Which planet is known as the Morning Star or the Evening Star?",
        options: ["Mars", "Venus", "Mercury", "Jupiter"],
        answer: "Venus"
    },
    {
        question: "What is the smallest bone in the human body?",
        options: ["Stapes", "Incus", "Malleus", "Cochlea"],
        answer: "Stapes"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        answer: "Au"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Florence Nightingale"],
        answer: "Marie Curie"
    },
    {
        question: "Which is the smallest continent by land area?",
        options: ["Europe", "Australia", "Antarctica", "South America"],
        answer: "Australia"
    },
    {
        question: "In what year did the Titanic sink?",
        options: ["1910", "1912", "1914", "1916"],
        answer: "1912"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const endGameButton = document.getElementById('end-game-btn');
const resultElement = document.getElementById('result');

function showQuestion() {
    nextButton.style.display = 'none';
    endGameButton.style.display = 'none';
    resultElement.style.display = 'none';
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(button, option));
        optionsElement.appendChild(button);
    });
}

function selectOption(button, option) {
    const currentQuestion = questions[currentQuestionIndex];
    if (option === currentQuestion.answer) {
        score++;
        button.style.backgroundColor = '#2ecc71'; // Correct answer green
    } else {
        button.style.backgroundColor = '#e74c3c'; // Wrong answer red
    }
    Array.from(optionsElement.children).forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === currentQuestion.answer) {
            btn.style.backgroundColor = '#2ecc71'; // Highlight the correct answer
        }
    });
    nextButton.style.display = 'block';
    endGameButton.style.display = 'block';
}

function showResult() {
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    nextButton.style.display = 'none';
    endGameButton.style.display = 'none';
    resultElement.style.display = 'block';
    resultElement.textContent = `You scored ${score} out of ${questions.length}`;
}

function endGame() {
    currentQuestionIndex = questions.length; // Move to the end
    showResult();
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

endGameButton.addEventListener('click', endGame);

// Initialize the first question
showQuestion();
