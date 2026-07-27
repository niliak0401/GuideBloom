import questions from "./questions.js";

console.log("GuideBloom 已启动 🌱");

console.log(questions);

const currentQuestion = questions[0];


document.getElementById("question").innerHTML =
    currentQuestion.question;


document.getElementById("answer").innerHTML =
`
<p>答案：${currentQuestion.answer}</p>

<p>
解析：${currentQuestion.explanation}
</p>

<p>
助记：${currentQuestion.memoryTip}
</p>
`;


window.showAnswer = function(){

    document.getElementById("answer").style.display = "block";

}