/**
WEB222
Name : HARJOVAN SINGH
Date : 07/12/2022
StuID : 112982228 
*/
const today=document.querySelector(".para p span");
const montharr=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
let dateob=new Date();
const date= dateob.getDate();
const month= dateob.getMonth();
const year= dateob.getFullYear();
today.innerHTML=`Date: ${date} ${montharr[month]} ${year}`;

const otherbtn=document.querySelector('.btn-other');
const txtbox=document.querySelector('.txtbox');
otherbtn.addEventListener('onmouseup',()=>{ 
    if(otherbtn.checked){
    txtbox.classList.toggle('txtbox_apear');
}});