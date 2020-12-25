var countm=0;
var countc=0;
var matchplayed=5;
var state=0;
function random() {
	var x=Math.floor((Math.random() * 10) + 1);
	x=x%3;
	return x;
}
function reset(){
	location.reload();
}
function fun1(){
	if(state==1)
		return;
	var a=0;
	var b=random();
	var txt="";
	if(a==b){
		txt+="Match tied";
		matchplayed--;
	}
	else{
		if(b==1){
			txt+="Computer wins as paper beat rock";
			countc++;
		}
		else{
			txt+="Mankind wins as rock beat scissor";
			countm++;
		}
	}
	console.log(txt);
	if(countm+countc==matchplayed){
		if(countm>countc)
			txt+="<br>5 match series completed Mankind wins";
		else
			txt+="<br>5 match series completed Computer wins";
		state=1;
	}
	document.getElementById('result').innerHTML=txt;
}
function fun2(){
	if(state==1)
		return;
	var a=1;
	var b=random();
	var txt="";
	if(a==b){
		txt+="Match tied";
		matchplayed--;
	}
	else{
		if(b==2){
			txt+="Computer wins as scissor beat paper";
			countc++;
		}
		else{
			txt+="Mankind wins as paper beat rock";
			countm++;
		}
	}
	console.log(txt);
	if(countm+countc==matchplayed){
		state=1;
		if(countm>countc)
			txt+="<br>5 match series completed Mankind wins";
		else
			txt+="<br>5 match series completed Computer wins";
	}
	document.getElementById('result').innerHTML=txt;
}
function fun3(){
	if(state==1)
		return;
	var a=2;
	var b=random();
	var txt="";
	if(a==b){
		txt+="Match tied";
		matchplayed--;
	}
	else{
		if(b==0){
			txt+="Computer wins as rock beat scissor";
			countc++;
		}
		else{
			txt+="Mankind wins as scissor beat paper";
			countm++;
		}
	}
	console.log(txt);
	if(countm+countc==matchplayed){
		state=1;
		if(countm>countc)
			txt+="<br>5 match series completed Mankind wins";
		else
			txt+="<br>5 match series completed Computer wins";
	}
	document.getElementById('result').innerHTML=txt;
}