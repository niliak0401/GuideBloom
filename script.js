let questions = [];


console.log("GuideBloom 已启动 🌱");

console.log(questions);



let currentIndex = 0;


let currentQuestion;


let selectedAnswer = null;


let hasSubmitted = false;



function renderQuestion(){



    if(currentIndex >= questions.length){


        document.getElementById("progress").innerHTML =
        "🎉 已完成所有题目";


        document.getElementById("question").innerHTML =
        "练习结束";


        document.getElementById("options").innerHTML="";


        return;

    }



    currentQuestion = questions[currentIndex];


    selectedAnswer = null;


    hasSubmitted = false;



    document.getElementById("progress").innerHTML =

    `第 ${currentIndex + 1} / ${questions.length} 题`;



    document.getElementById("question").innerHTML =

    currentQuestion.question;



    const optionsContainer =
    document.getElementById("options");


    optionsContainer.innerHTML="";



    document.getElementById("answer").innerHTML="";



    currentQuestion.options.forEach(option=>{


        const button=document.createElement("button");


        button.innerHTML=option;



        button.onclick=function(){



            if(hasSubmitted){

                return;

            }



            document
            .querySelectorAll("#options button")
            .forEach(btn=>{

                btn.classList.remove("selected");

            });



            button.classList.add("selected");



            selectedAnswer=option;



            console.log("选择了:",selectedAnswer);


        };



        optionsContainer.appendChild(button);



    });


}




window.submitAnswer=function(){



    const answerBox=document.getElementById("answer");



    if(selectedAnswer===null){


        answerBox.innerHTML=

        "⚠️ 请先选择答案";


        return;

    }



    hasSubmitted=true;



    const buttons=
    document.querySelectorAll("#options button");



    buttons.forEach(btn=>{


        btn.disabled=true;



        if(btn.innerHTML===currentQuestion.answer){


            btn.classList.add("correct");


        }



        if(
            btn.innerHTML===selectedAnswer &&
            selectedAnswer!==currentQuestion.answer
        ){


            btn.classList.add("wrong");


        }



    });





    if(selectedAnswer===currentQuestion.answer){


        answerBox.innerHTML=

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


        answerBox.innerHTML=

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





window.nextQuestion=function(){


    currentIndex++;


    console.log("当前题目:",currentIndex);


    renderQuestion();


};




loadQuestions();

async function loadQuestions(){

    const response = await fetch("./data/questions.json");

    questions = await response.json();

    console.log("题库加载成功:", questions);

    renderQuestion();

}