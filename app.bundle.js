!function(){"use strict";class e{constructor(e){this.number=e}verification(){return!(this.number.length<13||this.number.length>19||this.algorithm()%10!=0)}algorithm(){const e=Array.from(this.number),t=[],s=[],r=[];if(e.length%2!=0){for(let r=0;r<e.length;r+=2)t.push(Number(e[r+1])),s.push(Number(e[r]));t.pop()}else for(let r=0;r<e.length;r+=2)t.push(Number(e[r])),s.push(Number(e[r+1]));for(const e of t){let t=2*e;if(t>=10){const e=Array.from(String(t));t=Number(e[0])+Number(e[1])}r.push(t)}return r.concat(s).reduce(((e,t)=>e+t),0)}}class t{constructor(e){this.number=Array.from(e)}typeSearch(){const e={mir:["2"],express:["34","37"],maestro:["50","56","57","58","63","67"],mastercard:["51","52","53","54","55"],union:["62"],visa:["4"]};let t="",s="";this.number.length>=2&&(s=this.number.slice(0,2).join(""));for(const[r,i]of Object.entries(e))if(i.includes(this.number[0])||i.includes(s)){t=r;break}return t}}new class{constructor(e){"string"==typeof e&&(e=document.querySelector(e)),this.element=e,this.cards=document.querySelectorAll(".card"),this.inputField=document.querySelector(".form-control"),this.verifyBtn=document.querySelector(".btn"),this.marker=document.querySelector(".marker"),this.onClick=this.onClick.bind(this),this.onPress=this.onPress.bind(this),this.verifyBtn.addEventListener("click",this.onClick),this.inputField.addEventListener("keyup",this.onPress)}onPress(e){e.preventDefault(),"Enter"===e.key&&this.verifyBtn.click();const s=new t(this.inputField.value).typeSearch();this.typeDisplay(s)}onClick(){return""===this.inputField.value?(alert("Поле номера карты пусто"),(this.marker.classList.contains("incorrect")||this.marker.classList.contains("correct"))&&(this.marker.classList.value="marker undefined"),!1):(!1===new e(this.inputField.value).verification()?(this.marker.classList.remove("undefined"),this.marker.classList.remove("correct"),this.marker.classList.add("incorrect")):(this.marker.classList.remove("undefined"),this.marker.classList.remove("incorrect"),this.marker.classList.add("correct")),!0)}typeDisplay(e){for(const t of this.cards)!1===t.classList.contains(e)&&""!==e?t.classList.add("greyed"):(!0===t.classList.contains(e)&&""!==e||""===e&&t.classList.contains("greyed"))&&t.classList.remove("greyed")}}(".widget")}();