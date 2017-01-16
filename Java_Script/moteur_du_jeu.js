/**
 * Created by Eric KAY on 30/06/2016.
 */

var index=0;
var res = document.getElementById("resultat");
var score = document.getElementById("score");
var questions=["150*10 = ?", "15*15 = ?", "23*6 = ?", "12*5 = ?", "45*15 = ?",
    "156/6 = ?", "452+3*4 = ?", "15/5 = ?", "750*6/2 = ?", "1200-50/25 = ?"
    ,"5*9-4/6+15 = ?","17/2-1.5*10+17 = ?","50/50*50-50+50 = ?","50+50*50-50/50","50-50*50+50/50 = ?",
    "35/35+35*35-35 = ?","35-35+35/35*35 = ?","-35-35+35/35*35 = ?","35*35-35/35+35 = ?","15*8-6+9/10-25*84+36-+5/89*10+1950 = ?"];
var assertions=[
    //1
    [
        "1500",
        "150,0",
        "1050",
        "15000",
        "1750"
    ],//2
    [
        "275",
        "-225",
        "225",
        "252",
        "-252"
    ],
    //3
    [
        "15,6",
        "-165",
        "-156",
        "156",
        "165"
    ],//4
    [
        "0,6",
        "60",
        "6",
        "-60",
        "464"
    ],//5
    [
        "657",
        "67,5",
        "-675",
        "6750",
        "675"
    ],//6
    [
        "226",
        "260",
        "26",
        "-26",
        "26,05"
    ],//7
    [
        "156",
        "-646",
        "64",
        "46",
        "464"
    ],//8
    [
        "0,3",
        "-3",
        "3,5",
        "3",
        "4"
    ],//9
    [
        "225",
        "2250",
        "2250,5",
        "-2250",
        "22,5"
    ],//10
    [
        "1198",
        "11,98",
        "-119,8",
        "119,8",
        "-1198"
    ],//11
    [
        "10",
        "45",
        "60",
        "6",
        "-60"
    ],//12
    [
        "10",
        "-10",
        "100",
        "1,0",
        "-100"
    ],//13
    [
        "500",
        "50",
        "-250",
        "-50",
        "250"
    ],[//14
        "-50",
        "-2549",
        "50",
        "2549",
        "100"
    ],[//15
        "50",
        "225",
        "156",
        "-50",
        "-2449"
    ],[//16
        "1191",
        "-1191",
        "35",
        "3",
        "-35"
    ],[//17
        "-35",
        "1191",
        "675",
        "35",
        "2549"
    ],[//18
        "35",
        "-3,5",
        "-35",
        "70",
        "350"
    ],[//19
        "125,9",
        "1259",
        "-35",
        "-1259",
        "1529"
    ],[//20
        "890",
        "1259",
        "-1259",
        "3900",
        "0"
    ],
];

var reponses=[
    0,2,3,1,4,2,4,3,1,0,2,0,1,3,4,0,3,2,1,4
];

var question=document.getElementById("question");
var choix1=document.getElementById("assertion1");
var choix2=document.getElementById("assertion2");
var choix3=document.getElementById("assertion3");
var choix4=document.getElementById("assertion4");
var choix5=document.getElementById("assertion5");
var suivant=document.getElementById("suivant");

var point=0;
var pourc=0;

formaterElement(index);

choix1.onclick=function(){
    var text=trierNav(assertion1);
    testerReponse(text);
};
choix2.onclick=function(){
    var text=trierNav(assertion2);
    testerReponse(text);
};
choix3.onclick=function(){
    var text=trierNav(assertion3);
    testerReponse(text);
};
choix4.onclick=function(){
    var text=trierNav(assertion4);
    testerReponse(text);
};
choix5.onclick=function(){
    var text=trierNav(assertion5);
    testerReponse(text);
};
function QuestionSvte(){
    if(index==questions.length-1){
        pourcentage=(point/(questions.length))*100;
        var pourc = pourcentage%10;
        var arrondi = Math.round(pourc);
        if (pourc < 0.5) {
            var _pourcentage= Math.floor(pourcentage);
            testPourcent(_pourcentage);
        } else if ((pourc >= 0.5) && (pourc < 0.9))
        {
            _pourcentage= Math.ceil(pourcentage);
            testPourcent(_pourcentage);
        }

        if(confirm("Voulez-vous recommencer?")){
            index=0;
            point=0;
        }
        else{
            location="index.html";
        }
    }
    else
        index++;
    formaterElement(index);
}

function testerReponse(text){
    var res = document.getElementById("resultat");
    var score = document.getElementById("score");
    if(text==assertions[index][reponses[index]]){
        point++;
        res.innerHTML="Correct !!!!!!"
        res.style.color ="blue";
        score.style.color ="dodgerblue";
        score.innerHTML = point;

    }else{
        res.innerHTML="Incorrect !!!!!!"
        res.style.color ="red";
        score.innerHTML = point;
    }
    QuestionSvte();
}
var btnRecomm = document.getElementById("Recomm");
var btnAnn = document.getElementById("ann");
btnRecomm.onclick=function(){
    if(confirm("Voulez-vous recommencer?")){
        index=0;

        res.innerHTML="Courage tu vas y arriver";
        score.innerHTML ="Vous avez: 0 %";
    }
    else{
        //on fait rien
    }
};
btnAnn.onclick=function(){
    if(confirm("Voulez-vous Annuler?")){
        location="page_d'acceuil.html";
    }
    else{
        //on fait rien
    }
};

function testPourcent(_pourcentage){

    if(_pourcentage<=49,9){
        res.size="10px";
        res.color="red";
        score.color="red";
        res.innerHTML="Votre cerveau necessite beaucoup d'exercice";
        score.innerHTML ="Vous avez: "+_pourcentage+" %";
    }else if(49,9>=_pourcentage <=70){
        res.size="10px";
        score.color="purple";
        res.innerHTML="Félicitation !!! vous bon";
        score.innerHTML ="Vous avez: "+_pourcentage+" %";
    }else if(71>=_pourcentage <=90){
        res.size="10px";
        score.color="dodgerblue";
        res.innerHTML="Excellent !!! Je vous applaudit";
        score.innerHTML ="Vous avez: "+_pourcentage+" %";
    }else if(91>=_pourcentage <=100) {
        res.size = "10px";
        score.color="blue";
        res.innerHTML = "Vous etes Surdoué et Vous avez gagné 1 000$ ";
        score.innerHTML ="Vous avez: "+_pourcentage+" %";
    }else{
        alert("Une erreur est survenue veillez recommencer");
    }

}

function formaterElement(index){

    var question_txt=document.createTextNode(questions[index]);
    var assertion1_txt=document.createTextNode(assertions[index][0]);
    var assertion2_txt=document.createTextNode(assertions[index][1]);
    var assertion3_txt=document.createTextNode(assertions[index][2]);
    var assertion4_txt=document.createTextNode(assertions[index][3]);
    var assertion5_txt=document.createTextNode(assertions[index][4]);

    question.replaceChild(question_txt,question.firstChild);
    assertion1.replaceChild(assertion1_txt,assertion1.firstChild);
    assertion2.replaceChild(assertion2_txt,assertion2.firstChild);
    assertion3.replaceChild(assertion3_txt,assertion3.firstChild);
    assertion4.replaceChild(assertion4_txt,assertion4.firstChild);
    assertion5.replaceChild(assertion5_txt,assertion5.firstChild);
}

function trierNav(element){
    var text;
    if(element.textContent)
        text=element.textContent;
    else if(element.innerText)
        text=element.innerText;
    else
        text="";
    return text;

}

