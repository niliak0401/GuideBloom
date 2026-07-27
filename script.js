import questions from "./questions.js";

console.log("GuideBloom 已启动 🌱");

console.log(questions);

const currentQuestion = questions[0];

let selectedAnswer = null;

const optionsContainer =
document.getElementById("options");


currentQuestion.options.forEach(option => {

    const button = document.createElement("button");

    button.innerHTML = option;


    button.onclick = function(){


        // 清除其他按钮的选中状态

        document
        .querySelectorAll("#options button")
        .forEach(btn => {

            btn.classList.remove("selected");

        });


        // 给当前按钮添加选中状态

        button.classList.add("selected");


        selectedAnswer = option;


        console.log("选择了:", selectedAnswer);

    };


    optionsContainer.appendChild(button);

});

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
window.submitAnswer = function(){

    const answerBox = document.getElementById("answer");


    if(selectedAnswer === null){

        answerBox.style.display = "block";

        answerBox.innerHTML =
        `
        <p>⚠️ 请先选择一个答案</p>
        `;

        return;
    }


    answerBox.style.display = "block";


    if(selectedAnswer === currentQuestion.answer){

        answerBox.innerHTML =
        `
        <p>✅ 回答正确！</p>

        <p>
        解析：
        ${currentQuestion.explanation}
        </p>

        <p>
        助记：
        ${currentQuestion.memoryTip}
        </p>
        `;

    }else{

        answerBox.innerHTML =
        `
        <p>❌ 回答错误</p>

        <p>
        正确答案：
        ${currentQuestion.answer}
        </p>

        <p>
        解析：
        ${currentQuestion.explanation}
        </p>

        <p>
        助记：
        ${currentQuestion.memoryTip}
        </p>
        `;
    }

};
