import questions from "./questions.js";


console.log("GuideBloom 已启动 🌱");

console.log(questions);


// 当前题目编号

let currentIndex = 0;


// 当前题目

let currentQuestion;


// 用户选择

let selectedAnswer = null;



// 渲染题目

function renderQuestion(){


    // 防止超过题库

    if(currentIndex >= questions.length){

        document.getElementById("question").innerHTML =
        "🎉 已完成所有题目！";


        document.getElementById("options").innerHTML = "";

        document.getElementById("answer").style.display = "none";

        return;

    }



    currentQuestion = questions[currentIndex];


    selectedAnswer = null;



    const questionElement =
    document.getElementById("question");


    const optionsContainer =
    document.getElementById("options");


    const answerBox =
    document.getElementById("answer");



    // 清空旧内容

    optionsContainer.innerHTML = "";

    answerBox.innerHTML = "";

    answerBox.style.display = "none";



    // 显示题目

    questionElement.innerHTML =
    currentQuestion.question;



    // 创建选项按钮

    currentQuestion.options.forEach(option => {



        const button =
        document.createElement("button");



        button.innerHTML = option;



        button.onclick = function(){



            document
            .querySelectorAll("#options button")
            .forEach(btn => {

                btn.classList.remove("selected");

            });



            button.classList.add("selected");



            selectedAnswer = option;



            console.log("选择了:", selectedAnswer);



        };



        optionsContainer.appendChild(button);


    });


}




// 提交答案

window.submitAnswer = function(){



    const answerBox =
    document.getElementById("answer");



    if(selectedAnswer === null){


        answerBox.style.display = "block";


        answerBox.innerHTML =
        `
        <p>⚠️ 请先选择答案</p>
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




// 下一题

window.nextQuestion = function(){


    currentIndex++;


    console.log("当前题目:", currentIndex);



    renderQuestion();


};



// 页面第一次加载

renderQuestion();