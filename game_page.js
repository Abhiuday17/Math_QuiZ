
player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name+" : "
document.getElementById("player2_name").innerHTML = player2_name+" : "

document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score

document.getElementById("Question_player").innerHTML = "Question Turn "+ player1_name
document.getElementById("Answer_player").innerHTML = "Answer Turn "+ player2_name

function send(){
    n1 = document.getElementById("first_number").value
    n2 = document.getElementById("second_number").value
    actual_answer = parseInt(n1)*parseInt(n2)

    Question = "<h4 id = 'word_display'> Q.  " + n1 +" x " + n2 + "</h4>"
    Input_Box = "<br> Answer: <input type ='text' id = 'input_check_box'>"
    Check_Button = "<br> <br> <button class = 'btn btn-info' onclick = 'check()'> Check</button>"
    row = Question + Input_Box + Check_Button
    document.getElementById("Output").innerHTML = row
    document.getElementById("first_number").value = ""
    document.getElementById("second_number").value = ""
   

}

question_Turn = "player1"
answer_turn = "player2"

function check(){
    get_answer = document.getElementById("input_check_box").value
    answer = get_answer.toLowerCase()

    if(answer == actual_answer){
        if(answer_turn == "player1"){
            player1_score = player1_score+1
            document.getElementById("player1_score").innerHTML = player1_score
            

        }
        else{
            player2_score = player2_score+1
            document.getElementById("player2_score").innerHTML = player2_score
        }
    }
    if(question_Turn == "player1"){
        question_Turn = "player2"
        document.getElementById("Question_player").innerHTML = "Question Turn "+ player2_name
    }
    else{
        question_Turn = "player2"
        document.getElementById("Question_player").innerHTML = "Question Turn "+ player1_name
    }
    if(answer_turn == "player1"){
        answer_turn = "player2"
        document.getElementById("Answer_player").innerHTML = "Answer Turn "+ player2_name
    }
    else{
        answer_turn = "player1"
        document.getElementById("Answer_player").innerHTML = "Answer Turn "+ player1_name
    }
    document.getElementById("Output").innerHTML = ""
}