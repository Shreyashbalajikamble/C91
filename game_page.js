player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML= player1_name;
document.getElementById("player2_name").innerHTML= player2_name+":";
document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;
document.getElementById("player_question").innerHTML= "Question turn"+player1_name;
document.getElementById("player_answer").innerHTML= "Answer turn"+player2_name;

function send(){
    get_word= document.getElementById("word").value;
    get_word=get_word.toLowerCase();
    w1=get_word.charAt(1);
    med=Math.floor(get_word.length/2);
    w2=get_word.charAt(med);
    last=get_word.length-1;
    w3=get_word.charAt(last);
    r1=get_word.replace(w1,"_");
    r2=r1.replace(w2,"_");
    r3=r2.replace(w3,"_");
    question="<h4 id='question'>"+r3+"</h4>";
    input="<br><input id='input' type='text'>";
    button="<br><br><button id='check' class='btn btn-info' onclick='check()'>Check</button>";
    row=question+input+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").innerHTML="";
}