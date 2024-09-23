const questions = [
    { question: "What is your name?", key: "name" },
    { question: "What is your date of birth?", key: "dob" },
    { question: "What is your email?", key: "email" },
    { question: "What is your phone number?", key: "phone" },
    { question: "Describe your work experience", key: "workExperience" },
    { question: "Describe your school experience", key: "schoolExperience" },
    { question: "List your skills", key: "skills" },
    { question: "What sports do you play?", key: "sports" },
    { question: "What are your hobbies?", key: "hobbies" }
];

let currentQuestionIndex = 0;
let resumeData = {};

// DOM Elements
const questionText = document.getElementById('question');
const userInput = document.getElementById('user-input');
const nextButton = document.getElementById('next-btn');
const skipButton = document.getElementById('skip-btn');
const resumeOutput = document.getElementById('resume-output');
const resumeContent = document.getElementById('resume-content');
const formContainer = document.getElementById('form-container');

// Load First Question
function loadQuestion(index) {
    if (index >= questions.length) {
        displayResume();
        return;
    }
    
    questionText.innerText = questions[index].question;
    userInput.value = '';
    userInput.placeholder = 'Enter here...';
}

// Display Resume Output
function displayResume() {
    formContainer.classList.add('hidden');
    resumeOutput.classList.remove('hidden');

    let resumeHtml = '';
    for (const [key, value] of Object.entries(resumeData)) {
        resumeHtml += `<strong>${key.replace(/([A-Z])/g, ' $1')}:</strong> ${value}<br><br>`;
    }
    resumeContent.innerHTML = resumeHtml;
}

// Event Listeners
nextButton.addEventListener('click', () => {
    const inputValue = userInput.value.trim();
    
    if (inputValue !== '') {
        resumeData[questions[currentQuestionIndex].key] = inputValue;
    }
    
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
});

skipButton.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
});

// Initialize first question
loadQuestion(currentQuestionIndex);

