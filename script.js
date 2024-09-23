const questions = [
    { question: "What is your full name?", key: "name" },
    { question: "What is your date of birth?", key: "dob" },
    { question: "What is your email address?", key: "email" },
    { question: "What is your phone number?", key: "phone" },
    { question: "Describe your work experience (Place, Location, Start Time, End Time, Skills learned)", key: "workExperience" },
    { question: "Describe your school experience (School Name, Location, Start Time, End Time, Majors, Classes taken)", key: "schoolExperience" },
    { question: "List your leadership experiences (Positions, Responsibilities)", key: "leadershipExperience" },
    { question: "List any accolades (Award Name, Date received)", key: "accolades" },
    { question: "List your technical and soft skills", key: "skills" },
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
const editButton = document.getElementById('edit-btn');

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

    let resumeHtml = '<h2>Resume</h2>';
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

// Edit Button - Take user back to input form
editButton.addEventListener('click', () => {
    resumeOutput.classList.add('hidden');
    formContainer.classList.remove('hidden');
    currentQuestionIndex = 0;
    loadQuestion(currentQuestionIndex);
});
