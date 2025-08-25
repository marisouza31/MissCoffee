const quizData = [
    { question: "Como você prefere começar o dia?", options: ["Com calma e silêncio", "Com energia total"] },
    { question: "Qual sabor mais te agrada?", options: ["Doce e suave", "Forte e marcante"] },
    { question: "Escolha um momento ideal para o café:", options: ["Manhã ensolarada", "Noite fria", "Intervalo rápido"] }
];

const resultsMap = {
    "0-0-0": { text: "Você é um Cappuccino! Aconchegante e equilibrado.", img: "assets/img-quiz/cafe-cappucino.avif" },
    "0-0-1": { text: "Você é um Mocha! Doce e intenso.", img: "assets/img-quiz/cafe-mocha.png"},
    "0-0-2": { text: "Você é um Espresso! Direto e marcante.", img: "assets/img-quiz/cafe-expresso.png" },
    "0-1-0": { text: "Você é um Espresso! Direto e marcante.", img: "assets/img-quiz/cafe-expresso.png" },
    "1-0-0": { text: "Você é um Mocha! Doce e intenso.", img: "assets/img-quiz/cafe-mocha.png" },
    "1-1-1": { text: "Você é um Café Preto! Clássico e indispensável.", img: "assets/img-quiz/cafe-preto (1).avif" }
};

let currentQuestion = 0;
let answers = [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach((opt, index) => {
        optionsEl.innerHTML += `
        <label>
            <input type="radio" name="option" value="${index}"> ${opt}
        </label>
        `;
    });

    // Mostrar ou esconder o botão Voltar
    backBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";

    // Pré-selecionar resposta anterior
    const prevAnswer = answers[currentQuestion];
    if (prevAnswer !== undefined) {
        const radio = document.querySelector(`input[name="option"][value="${prevAnswer}"]`);
        if (radio) radio.checked = true;
    }
}

nextBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
        alert("Escolha uma opção!");
        return;
    }

    answers[currentQuestion] = selected.value; // substitui se voltar e mudar
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

backBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});

function showResult() {
    document.getElementById("quiz").style.display = "none";
    const key = answers.join("-");
    const result = resultsMap[key] || { 
        text: "Você é único(a)! Uma mistura especial de sabores.", 
        img: "assets/img-quiz/cafe-emformato-coracao.png" 
    };

    resultEl.innerHTML = `
        <img src="${result.img}" alt="Resultado" style="width:80px; height:auto; margin-bottom:10px;">
        <div>${result.text}</div>
        <button id="restartBtn">Refazer Quiz</button>
    `;

    // Anúncio dinâmico
    const adContainer = document.getElementById("ad-container");
    const adText = adContainer.querySelector(".ad-text");
    const adButton = adContainer.querySelector(".ad-button");

    if(result.text.includes("Você é único")) {
        adText.textContent = "🌟 Você é único(a)! Conheça nossos cafés especiais.";
        adButton.textContent = "Clique aqui!";
        adButton.href = "index.html#menu-cafe"
    } else {
        adText.textContent = "☕ Compre e experimente esse café agora!";
        adButton.textContent = "Comprar Agora!";
        adButton.href = "index.html#menu-cafe";
    }

    adContainer.style.display = "block";

    document.getElementById("restartBtn").addEventListener("click", () => {
        currentQuestion = 0;
        answers = [];
        resultEl.innerHTML = "";
        document.getElementById("quiz").style.display = "block";
        adContainer.style.display = "none";
        loadQuestion();
    });
}


loadQuestion();
