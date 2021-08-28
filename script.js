
function functionsomme()
{
  let x1=(document.getElementById("text1").value)*51.99;
  let x2=(document.getElementById("text2").value)*54.99;
  let x3=(document.getElementById("text3").value)*61.50;
  let x4= (document.getElementById("text4").value)*49.99;
  let somme=x1+x2+x3+x4;
  document.getElementById("demo").innerHTML ="Total:"+" "+somme+" "+"euro";
}

//1
//fontion soustraction1

function myfunctionmoin()
{
 let val;
 let num=document.getElementById("text1").value;
 
 val=num-1;
 if (val>=0){
 let str="euro"
 document.getElementById("text1").value=val;
 document.getElementById("grid-itemtotal1").innerHTML="Total:"+" "+51.99*val+" "+str;

 }
 else { alert("alert");}



}

//fontion soustraction2

function myfunctionmoin2()
{
 let val;
 let num=document.getElementById("text2").value;
 
 val=num-1;
 if (val>=0){
 let str="euro"
 document.getElementById("text2").value=val;
  document.getElementById("grid-itemtotal2").innerHTML="Total:"+" "+54.99*val+" "+str;

 }
 else { alert("alert");}

}

function myfunctionmoin3()
{
 let val;
 let num=document.getElementById("text3").value;
 
 val=num-1;
 if (val>=0){
 let str="euro"
 document.getElementById("text3").value=val;
 document.getElementById("grid-itemtotal3").innerHTML="Total:"+" "+49.99*val+" "+str;

 }
 else { alert("alert");}

}
function myfunctionmoin4()
{
 let val;
 let num=document.getElementById("text4").value;
 
 val=num-1;
 if (val>=0){
 let str="euro"
 document.getElementById("text4").value=val;
 document.getElementById("grid-itemtotal4").innerHTML="Total:"+" "+65.50*val+" "+str;

 }
 else { alert("alert");}

}

//fontion addition1
 function myfunctionplus()
{
 
let val;
let num;
 num=Number(document.getElementById("text1").value);
 val= num + 1;
 if(val<100)
 {
 document.getElementById("text1").value=val;
 document.getElementById("grid-itemtotal1").innerHTML="Total:"+" "+51.99*val+" "+"euro";

 }
 else
 {
   alert ("stock fini");
 }
}


//fontion addition2
function myfunctionplus2()
{
 
let val;
let num;
 num=Number(document.getElementById("text2").value);
 val= num + 1;
 if(val<100)
 {
 document.getElementById("text2").value=val;
 document.getElementById("grid-itemtotal2").innerHTML="Total:"+" "+54.99*val+" "+"euro";

 }
 else
 {
   alert ("stock fini");
 }
}
function myfunctionplus3()
{
 
let val;
let num;
 num=Number(document.getElementById("text3").value);
 val= num + 1;
 if(val<100)
 {
 document.getElementById("text3").value=val;
 document.getElementById("grid-itemtotal3").innerHTML="Total:"+" "+49.99*val+" "+"euro";

 }
 else
 {
   alert ("stock fini");
 }
}
function myfunctionplus4()
{
 
let val;
let num;
 num=Number(document.getElementById("text4").value);
 val= num + 1;
 if(val<100)
 {
 document.getElementById("text4").value=val;
 document.getElementById("grid-itemtotal4").innerHTML="Total:"+" "+61.50*val+" "+"euro";

 }
 else
 {
   alert ("stock fini");
 }
}



//fonction supprimer

function functionsupprimer1() 
{
let p1=document.getElementById("div1");
p1.remove();

}
function functionsupprimer2() 
{
let p2=document.getElementById("div2");
p2.remove();
}

function functionsupprimer3() 
{
let p3=document.getElementById("div3");
p3.remove();

}
function functionsupprimer4() 
{
let p4=document.getElementById("div4");
p4.remove();

}

function functioncoeur()
{
  let element=document.getElementById("coeur");
  element.setAttribute('src', 'http://www.influenth.com/wp-content/uploads/2016/12/Capture-d%E2%80%99e%CC%81cran-2016-12-19-a%CC%80-14.20.48.png');

}
function functioncoeur2()
{
  let element=document.getElementById("coeur2");
  element.setAttribute('src', 'http://www.influenth.com/wp-content/uploads/2016/12/Capture-d%E2%80%99e%CC%81cran-2016-12-19-a%CC%80-14.20.48.png');

}
function functioncoeur3()
{
  let element=document.getElementById("coeur3");
  element.setAttribute('src', 'http://www.influenth.com/wp-content/uploads/2016/12/Capture-d%E2%80%99e%CC%81cran-2016-12-19-a%CC%80-14.20.48.png');

}
function functioncoeur4()
{
  let element=document.getElementById("coeur4");
  element.setAttribute('src', 'http://www.influenth.com/wp-content/uploads/2016/12/Capture-d%E2%80%99e%CC%81cran-2016-12-19-a%CC%80-14.20.48.png');

}

//function totaux

function alert()
{

alert("ok");
}




 

