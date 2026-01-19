const correctAnswers = {
    q1: 'a',  // Python pour Data Science et IA
    q2: 'b',  // RAG = Retrieval-Augmented Generation
    q3: 'a',  // React pour interfaces utilisateur
    q4: 'c',  // TensorFlow pour Deep Learning
    q5: 'a',  // API = Application Programming Interface
    q6: 'b',  // Scrum = méthodologie Agile
    q7: 'a',  // FastAPI pour créer des API
    q8: 'a',  // LLM = Large Language Model
    q9: 'b',  // PostgreSQL = SGBD
    q10: 'a', // Git = gestion de versions
    q11: 'b', // POST pour créer une ressource
    q12: 'a'  // Docker pour conteneurisation
};

const questions = {
    q1: "Quel est le principal usage de Python ?",
    q2: "Que signifie RAG en Intelligence Artificielle ?",
    q3: "React est principalement utilisé pour ?",
    q4: "Quelle bibliothèque Python est utilisée pour le Deep Learning ?",
    q5: "Que signifie API ?",
    q6: "Scrum est une méthodologie ?",
    q7: "FastAPI est un framework pour ?",
    q8: "Qu'est-ce qu'un LLM ?",
    q9: "PostgreSQL est ?",
    q10: "Git est utilisé pour ?",
    q11: "Quelle méthode HTTP est utilisée pour créer une ressource ?",
    q12: "Docker est utilisé pour ?"
};

const answerOptions = {
    q1: {
        a: "Data Science et IA",
        b: "Uniquement pour le web",
        c: "Seulement pour mobile",
        d: "Design graphique"
    },
    q2: {
        a: "Random Access Generator",
        b: "Retrieval-Augmented Generation",
        c: "Rapid Algorithm Growth",
        d: "Recursive AI Gateway"
    },
    q3: {
        a: "Créer des interfaces utilisateur",
        b: "Gérer des bases de données",
        c: "Créer des serveurs",
        d: "Faire du machine learning"
    },
    q4: {
        a: "Pandas",
        b: "Flask",
        c: "TensorFlow",
        d: "Django"
    },
    q5: {
        a: "Application Programming Interface",
        b: "Advanced Python Integration",
        c: "Automated Program Installer",
        d: "Application Process Identifier"
    },
    q6: {
        a: "De programmation",
        b: "Agile de gestion de projet",
        c: "De base de données",
        d: "De sécurité"
    },
    q7: {
        a: "Créer des API web rapides avec Python",
        b: "Développer des applications mobiles",
        c: "Gérer des bases de données",
        d: "Créer des jeux vidéo"
    },
    q8: {
        a: "Large Language Model",
        b: "Linear Learning Method",
        c: "Local Logic Module",
        d: "Language Link Manager"
    },
    q9: {
        a: "Un langage de programmation",
        b: "Un système de gestion de base de données",
        c: "Un framework JavaScript",
        d: "Un outil de design"
    },
    q10: {
        a: "La gestion de versions de code",
        b: "Créer des sites web",
        c: "Analyser des données",
        d: "Faire du machine learning"
    },
    q11: {
        a: "GET",
        b: "POST",
        c: "DELETE",
        d: "UPDATE"
    },
    q12: {
        a: "La conteneurisation d'applications",
        b: "Créer des bases de données",
        c: "Designer des interfaces",
        d: "Écrire du code Python"
    }
};


document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    
    if (quizForm) {
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let score = 0;
            let totalQuestions = Object.keys(correctAnswers).length;
            let userAnswers = {};
            for (let question in correctAnswers) {
                const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
                if (userAnswer) {
                    userAnswers[question] = userAnswer.value;
                    if (userAnswer.value === correctAnswers[question]) {
                        score++;
                    }
                }
            }
          
            displayResults(score, totalQuestions, userAnswers);
            
           
            document.getElementById('quizResults').scrollIntoView({ behavior: 'smooth' });
        });
        const resetBtn = document.getElementById('resetBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', function() {
                quizForm.reset();
                document.getElementById('quizResults').style.display = 'none';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
});

function displayResults(score, total, userAnswers) {
    const resultsDiv = document.getElementById('quizResults');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const correctAnswersDiv = document.getElementById('correctAnswers');
    const percentage = Math.round((score / total) * 100);
    let message = '';
    
    if (percentage >= 90) {
        message = 'Excellent ! 🎉 Expert en programmation !';
    } else if (percentage >= 75) {
        message = 'Très bien ! 👏 Solides connaissances !';
    } else if (percentage >= 60) {
        message = 'Bien ! 👍 Continuez à apprendre !';
    } else if (percentage >= 50) {
        message = 'Pas mal ! 📚 Encore des progrès à faire !';
    } else {
        message = 'Continuez à étudier ! 💪 Vous allez y arriver !';
    }

    scoreDisplay.innerHTML = `
        <div>
            <p style="font-size: 2.5rem; margin-bottom: 1rem;">${message}</p>
            <p style="font-size: 1.8rem;">Score : ${score}/${total} (${percentage}%)</p>
        </div>
    `;

    let answersHTML = '<h4 style="color: var(--dark-color); font-size: 1.5rem; margin-bottom: 1.5rem;">Réponses correctes :</h4>';
    
    for (let question in correctAnswers) {
        const userAnswer = userAnswers[question];
        const correctAnswer = correctAnswers[question];
        const isCorrect = userAnswer === correctAnswer;
        
        answersHTML += `
            <div style="padding: 1.5rem; margin-bottom: 1rem; border-left: 5px solid ${isCorrect ? '#10b981' : '#ef4444'}; background: ${isCorrect ? 'rgba(16, 185, 129, 0.05)' : 'rgba(239, 68, 68, 0.05)'}; border-radius: 10px;">
                <h4 style="color: var(--dark-color); margin-bottom: 0.8rem;">${questions[question]}</h4>
                <p style="margin-bottom: 0.5rem;"><strong>Votre réponse :</strong> ${answerOptions[question][userAnswer] || 'Non répondue'}</p>
                ${!isCorrect ? `<p style="margin-bottom: 0.5rem;"><strong>Réponse correcte :</strong> ${answerOptions[question][correctAnswer]}</p>` : ''}
                <p style="color: ${isCorrect ? '#10b981' : '#ef4444'}; font-weight: bold; font-size: 1.1rem;">
                    ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </p>
            </div>
        `;
    }
    
    correctAnswersDiv.innerHTML = answersHTML;
    resultsDiv.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !subject || !message) {
                showMessage('Veuillez remplir tous les champs obligatoires.', 'error');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Veuillez entrer une adresse email valide.', 'error');
                return;
            }

            const mailtoLink = `mailto:youssef.abdelmoula@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
 
            showMessage('Votre message a été préparé ! Un client email va s\'ouvrir.', 'success');

            setTimeout(() => {
                window.location.href = mailtoLink;
            }, 1000);

            setTimeout(() => {
                contactForm.reset();
            }, 2000);
        });
    }
});

function showMessage(text, type) {
    const messageDiv = document.getElementById('formMessage');
    if (messageDiv) {
        messageDiv.textContent = text;
        messageDiv.className = `form-message ${type}`;
        messageDiv.style.display = 'block';

        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
console.log('%c🚀 Bienvenue sur mon site !', 'color: #a5a4a5; font-size: 20px; font-weight: bold;');
console.log('%cCe site a été développé par Youssef Abdelmoula', 'color: #64748b; font-size: 14px;');
console.log('%cTechnologies : HTML5, CSS3, JavaScript, Python, React', 'color: #64748b; font-size: 12px;');
console.log('%cPassionné par l\'IA et l\'entrepreneuriat ', 'color: #06b6d4; font-size: 14px;');
