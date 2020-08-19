var total="", operator=0, cooperator, num;
function send0(){total+='0'; writeit();}
function send1(){total+='1'; writeit();}
function send2(){total+='2'; writeit();}
function send3(){total+='3'; writeit();}
function send4(){total+='4'; writeit();}
function send5(){total+='5'; writeit();}
function send6(){total+='6'; writeit();}
function send7(){total+='7'; writeit();}
function send8(){total+='8'; writeit();}
function send9(){total+='9'; writeit();}
function add(){operator=1; cooperator=operator; document.getElementById("demo").innerHTML = "+"; change();}
function minus(){operator=2; cooperator=operator; document.getElementById("demo").innerHTML = "-"; change();}
function multiply(){operator=3; cooperator=operator; document.getElementById("demo").innerHTML = "*"; change();}
function divide(){operator=4; cooperator=operator; document.getElementById("demo").innerHTML = "/"; change();}
function change(){num=Number(total); operator=0; total="";}
function cl (){total = " "; document.getElementById("demo").innerHTML = total;}
function del(){if(operator == 0){var len = total.length; total = total.slice(0,len-1);writeit();}}

function result()
{
switch(cooperator)
{
case 1:
	total=Number(total);
	total = total+num;
	break;
case 2:
	total = Number(total);
	total = num - total;
	break;
case 3:
	total = Number(total);
	total = num * total;
	break;
case 4:
	total = Number(total);
	total = num/total;
	break;
}
writeit();
}
function writeit(){document.getElementById("demo").innerHTML = total;}