function e(e,s,i){s&&(e.innerHTML=`\n      <div class="cg-select">\n         <p class="selected">${s}</p>\n          <div class="caret"></div>\n       </div>\n      `),i&&(t(e,i),e.innerHTML=`\n      <div class="cg-select" style = "${i}">\n          <p class="selected" style = "${i}">${s}</p>\n          <div class="caret" style = "${i}"></div>\n      </div>\n    `)}function t(e,t){if(!t)return;const{head:i,caret:l,placeholder:c,lable:n}=t,d=e.querySelector(".cg-select"),o=e.querySelector(".caret"),r=e.querySelector(".selected"),a=e.parentElement.querySelector("h1.label");s(i,d),s(l,o),s(n,a),r&&s(c,r)}function s(e,t){e&&Object.entries(e).forEach((([e,s])=>{t.style[e]=s}))}function i(e,t){const{placeholder:s,selected:i}=e;return t.innerText=s||(i||"Select..."),t}function l(e,t){const s=Math.random().toString(36).substring(2,10);let i={};return i=function(e){return(!e||"object"==typeof e)&&e.hasOwnProperty("id")&&e.hasOwnProperty("title")&&e.hasOwnProperty("value")}(e)?{id:e.id,title:e.title,value:t}:{id:s,title:e,value:t},i}function c(e,t){e.forEach((e=>{e.removeAttribute("selected"),e.textContent===t&&e.setAttribute("selected","selected")}))}function n(e,t,s){e.forEach((e=>{if(1==s)e.textContent===t&&e.setAttribute("selected","selected");else{if(0!=s)return;e.textContent===t&&e.removeAttribute("selected")}}))}function d(e,t,s){const{selectedItems:l,indexes:c,darkTheme:n,multiselectTag:d}=s,o=t.querySelectorAll(".list__item"),r=(t.querySelector(".multiselect-tag"),document.createElementNS("http://www.w3.org/2000/svg","svg")),a=document.createElementNS("http://www.w3.org/2000/svg","path"),h=document.createElementNS("http://www.w3.org/2000/svg","path"),m=t.querySelectorAll("li input");r.setAttribute("viewBox","0 0 10 10"),a.setAttribute("d","M2,8 L8,2"),h.setAttribute("d","M2,2 L8,8"),r.appendChild(a),r.appendChild(h),d&&1==d||(!0!==n&&n||(a.classList.add("pathWhite"),h.classList.add("pathWhite")),!1===n&&(a.classList.add("pathBlack"),h.classList.add("pathBlack")),r.classList.add("svg-icon"),r.classList.add("svg-clear"),e.appendChild(r),r.addEventListener("click",(()=>{e.innerText="",Array.isArray(l)&&(l.splice(0),c.splice(0)),m.forEach((e=>{e.checked=!1})),i(s,e),o.forEach((e=>{e.classList.remove("active")}))})))}function o(e,t,i,l){const{element:c,option:d,indexes:o,selectedItems:r}=e,{placeholder:a,styles:h}=d,m=c.querySelector(".selected"),u=c.querySelectorAll(".nativSelect__nativOption"),p=document.createElement("li"),g=document.createTextNode(t),y=document.createElementNS("http://www.w3.org/2000/svg","svg"),v=document.createElementNS("http://www.w3.org/2000/svg","path"),L=document.createElementNS("http://www.w3.org/2000/svg","path");if(y.setAttribute("viewBox","0 0 10 10"),v.setAttribute("d","M3,7 L7,3"),L.setAttribute("d","M3,3 L7,7"),p.setAttribute("id",`tag-${i}-${l}`),y.classList.add("svg-icon"),y.appendChild(v),y.appendChild(L),p.appendChild(g),p.appendChild(y),h){const{chips:e}=h;s(e,p)}return y.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),n(u,t,!1);const s=o.indexOf(i);let c="";o.splice(s,1),r.splice(s,1),c=l?document.getElementById(`chbox-${l}`):document.getElementById(`chbox-${i}`),c.checked=!1,c.parentElement.classList.remove("active"),r.length||(m.innerText=a),p.parentElement.removeChild(p)})),p}function r(){const e=document.createElement("select");return e.setAttribute("name","dataSelect"),e.classList.add("nativSelect"),e}function a(){const e=document.createElement("option");return e.classList.add("nativSelect__nativOption"),e}function h(e,t){const s=document.createElement("input");return s.type="text",s.classList.add("inputSearch"),s.setAttribute("id",`searchSelect-${e}`),t?s.setAttribute("placeholder",`${t}`):s.setAttribute("placeholder","Search..."),s.addEventListener("click",(e=>{e.preventDefault()})),s}const m={selectPlaceholder:"Выберите элемент...",placeholder:"Поиск...",textInListSearch:"Совпадений нет..."},u={selectPlaceholder:"Select...",placeholder:"Search...",textInListSearch:"No matches..."};class p{#e;#t;#s;#i;#l;#c;#n;#d=[];get value(){return this.#n??null}get indexes(){return this.#d??[]}constructor(e={}){this.#o(e),this.#r(),this.#a(),this.#h()}addItem(e){if(this.#c)return void console.log("can`t add item to category");if(!e)return!1;const t=this.#l.length;this.#l.push(l(e,t)),this.#r()}deleteItem(e){if(this.#c)return void console.log("can`t add item to category");this.#l[e];this.#l.splice(e,1),this.#r()}deleteItemAll(){this.#l.splice(0,this.#l.length),this.#r()}selectIndex(e){if(this.#c)return void console.log("can`t add item to category");const t=this.#e.querySelectorAll(".list__item");if(e>t.length)return;const s=t[e].innerText;this.#r(s)}getElement(e){if(!(e>this.#l.length))return this.#l[e]}disabled(e){if("boolean"!=typeof e)return;const t=this.#e.querySelector(".cg-select"),s=this.#e.querySelector(".nativSelect");!0===e?(this.#e.setAttribute("disabled",!0),s.setAttribute("disabled",!0),t.classList.add("disabled")):(this.#e.removeAttribute("disabled"),s.removeAttribute("disabled"),t.classList.remove("disabled"))}buttonControl(e,t){this.btn=e,e.addEventListener("click",(()=>{if("open"===t)this.#m(!0);else{if("close"!==t)return;this.#u()}}))}addLanguage(e){const{placeholder:t,textInListSearch:s,selectPlaceholder:i}=e,{searchMode:l}=this.#s,c=this.#e.querySelector(".selected"),n=document.createTextNode(i);if(c.appendChild(n),l&&1==l){const e=this.#e.querySelector(".inputSearch"),i=this.#e.querySelector(".noRezult"),l=document.createTextNode(s);e.setAttribute("placeholder",t),e.setAttribute("placeholder",t),i.innerText="",i.appendChild(l)}}#o(e){this.#s=e;const{items:t,multiselect:s,url:i}=this.#s,c=document.querySelector(e.selector);if(!c)throw new Error(`Element with selector ${e.selector}`);this.#e=c,this.#e.addEventListener("click",(e=>{e.preventDefault(),this.#m()})),this.#l=[],s&&1==s&&(this.#n=[]),t||!i?t.forEach(((e,t)=>{e.category&&e.categoryItems?(this.#c=e.category,this.#l.push(this.#c),e.categoryItems.forEach(((e,t)=>{this.#l.push(l(e,t))}))):this.#l.push(l(e,t))})):this.#p()}#g(s){const{styles:i,selected:l,placeholder:c,lable:n,language:d}=this.#s;if(e(this.#e,l||(c||(d&&"ru"===d?m.selectPlaceholder:u.selectPlaceholder))),s&&e(this.#e,s,i),n){const e=document.createElement("h1"),t=document.createTextNode(n);e.appendChild(t),e.classList.add("label"),this.#e.insertAdjacentElement("beforebegin",e)}i&&t(this.#e,i)}#r(e){const{styles:i,multiselect:l,searchMode:c,multiselectTag:n,darkTheme:d,language:o}=this.#s,{list:p,search:g}=i,y=Math.random().toString(36).substring(2,10);e||e&&i?(this.#g(e),t(this.#e,i)):this.#g();const v=document.createElement("ul"),L=r();let f="";this.random=y,c&&(f=h(y,"ru"===o?m.placeholder:u.placeholder),s(g,f),v.appendChild(f)),v.classList.add("list"),i&&s(p,v),this.#e.appendChild(v),this.#l.forEach((e=>{this.#e.appendChild(L);const t=document.createElement("li"),s=a(),i=document.createElement("strong");if(t.classList.add("list__item"),i.classList.add("category"),l&&1==l){const s=document.createElement("input");s.type="checkbox",s.setAttribute("id",`chbox-${e.id}`),t.appendChild(s),n&&1==n&&s.classList.add("displayHide"),L.setAttribute("multiple","multiple")}let c="";e.title?(s.text=e.title,s.value=e.title,c=document.createTextNode(e.title),L.appendChild(s),t.appendChild(c),v.appendChild(t)):(c=document.createTextNode(e),i.appendChild(c),v.appendChild(i))})),this.#l.filter(((e,t)=>("object"!=typeof e&&this.#l.splice(t,1),e))),0==d&&this.#y(),this.#t=this.#e.querySelector(".list"),this.#i=this.#e.querySelector(".caret"),this.#v()}#y(){const{darkTheme:e,searchMode:t}=this.#s,s=this.#e.querySelector(".cg-select"),i=this.#e.querySelector(".caret"),l=this.#e.querySelector("ul.list"),c=this.#e.querySelector(".inputSearch");if(0==e)s.classList.add("selectWhite"),i.classList.add("caretWhite"),l.classList.add("listWhite"),1==t&&c.classList.add("inputWhite");else if(1!=e&&e)throw new Error("Styles error or invalid value entered!")}async#p(){const{url:e,items:t,multiselect:s,multiselectTag:i}=this.#s;if(t)return;if(!e)return;const l=await fetch(e),c=await l.json(),n=r();c.forEach(((e,t)=>{const l={id:e.id,title:e.name,value:t},c=this.#e.querySelector(".list"),d=a(),o=document.createElement("li"),r=document.createTextNode(l.title);if(s&&1==s){const e=document.createElement("input");e.type="checkbox",i&&1==i&&e.classList.add("displayHide"),e.setAttribute("id",`chbox-${l.id}`),n.setAttribute("multiple","multiple"),o.appendChild(e)}o.classList.add("list__item"),d.value=l.title,d.text=l.title,n.appendChild(d),o.appendChild(r),c.appendChild(o),this.#l.push(l)})),this.#e.appendChild(n),this.#l.filter(((e,t)=>("object"!=typeof e&&this.#l.splice(t,1),e))),this.#v()}#m(e){!0===e?(this.#t.classList.add("open"),this.#i.classList.add("caret_rotate")):(this.#t.classList.toggle("open"),this.#i.classList.toggle("caret_rotate"))}#u(){this.#t.classList.remove("open"),this.#i.classList.remove("caret_rotate")}#v(){const{multiselect:e,placeholder:t,selected:s,multiselectTag:l,searchMode:r,closeOnSelect:a,darkTheme:h}=this.#s,m=this.#e.querySelectorAll(".list__item"),u=this.#e.querySelector(".selected"),p=this.#e.querySelectorAll(".nativSelect__nativOption"),g=document.createElement("ul");e&&1==e&&(g.classList.add("multiselect-tag"),u.classList.add("overflow-hidden")),r&&!0===r&&this.#L(this.random),m.forEach(((r,y)=>{r.addEventListener("click",(v=>{const L={placeholder:t,selected:s,selectedItems:this.#n,indexes:this.#d,darkTheme:h,multiselectTag:l},f=this.#l[y];(0==a||e&&1==e)&&(v.stopPropagation(),v.preventDefault());const b=this.#d.indexOf(y);if(e&&1==e){r.classList.toggle("active");const e=r.querySelector('input[type="checkbox"]');if(e){if(v.target instanceof HTMLInputElement||(e.checked=!e.checked),-1===b)if(n(p,f.title,!0),this.#d.push(y),u.innerText="",l&&1==l){this.#n.push(f),u.appendChild(g);const e={option:this.#s,element:this.#e,indexes:this.#d,selectedItems:this.#n};g.appendChild(o(e,f.title,y,f.id))}else this.#n.push(f.title),u.innerText=this.#n;else{if(l&&1==l){const e=document.getElementById(`tag-${y}-${f.id}`);g.removeChild(e)}this.#d.splice(b,1),this.#n.splice(b,1),n(p,f.title,!1)}this.#n.length?l&&1==l?u.appendChild(g):u.innerText=this.#n:i(L,u)}}else u.innerText=f.title,this.#n=f,c(p,f.title),m.forEach((e=>{e.classList.remove("active")})),r.classList.add("active");d(u,this.#e,L)}))}))}#L(e){const{language:t}=this.#s,s=this.#e.querySelector(`#searchSelect-${e}`),i=this.#e.querySelectorAll(".list__item"),l=document.createElement("p");let c="";c=t&&"ru"===t?document.createTextNode(`${m.textInListSearch}`):document.createTextNode(`${u.textInListSearch}`),l.appendChild(c),l.classList.add("displayHide"),l.classList.add("noRezult"),s.parentElement.appendChild(l),s.addEventListener("click",(e=>{e.stopPropagation()})),s.oninput=function(){let e=this.value.trim().toLowerCase(),t=!1;""!=e?(i.forEach((s=>{let i=new RegExp(e,"gi").test(s.textContent);t=t||i,-1==s.textContent.toLowerCase().search(e)?s.classList.add("displayHide"):s.classList.remove("displayHide")})),l.classList.toggle("displayHide",t)):i.forEach((e=>{e.classList.remove("displayHide"),l.classList.add("displayHide")}))}}#a(){const{event:e}=this.#s;e&&e&&"mouseenter"===e&&(this.#e.addEventListener(e,(()=>{this.#m()})),this.#e.addEventListener("mouseleave",(()=>{this.#u()})))}#h(){const e=document.querySelector(`${this.#s.selector}`);document.addEventListener("click",(t=>{if(!t.composedPath().includes(e)){if(this.btn)return;this.#u()}}))}}const g=document.getElementById("first"),y=document.getElementById("codeFirst"),v=document.getElementById("second"),L=document.getElementById("codeSecond"),f=document.getElementById("third"),b=document.getElementById("codeThird"),x=document.getElementById("fourth"),E=document.getElementById("codeFourth"),S=document.getElementById("fifth"),w=document.getElementById("codeFifth");g.addEventListener("click",(()=>{y.classList.toggle("active")})),v.addEventListener("click",(()=>{L.classList.toggle("active")})),f.addEventListener("click",(()=>{b.classList.toggle("active")})),x.addEventListener("click",(()=>{E.classList.toggle("active")})),S.addEventListener("click",(()=>{w.classList.toggle("active")}));new p({selector:".cg-dropdown_one",placeholder:"Выберите авто",lable:"EXAMPLE",items:["BMW",{id:"213sade",title:"Opel",value:1},"Mersedes","MAN","Ferari"],styles:{head:{width:"830px"},list:{width:"824px"}}}),new p({selector:".cg-dropdown_three",placeholder:"URL",url:"https://jsonplaceholder.typicode.com/users",searchMode:!0,darkTheme:!1,language:"ru",styles:{head:{width:"830px"},list:{width:"824px"}}}),new p({selector:".cg-dropdown_categories",placeholder:"Выберите регион",searchMode:!0,items:[{category:"Russia",categoryItems:[{id:"28qwds",title:"Москва",value:0},,"Ростов-на-дону","Саратов","Волгоград","Донецк"]},{category:"USA",categoryItems:["Alabama","Texas","Colorado","Klirens","Los-Angeles"]},{category:"France",categoryItems:["Paris"]}],styles:{head:{width:"830px"},list:{width:"824px"},placeholder:{maxWidth:"500px "}},multiselect:!0,multiselectTag:!0});const C=new p({selector:".cg-dropdown_usedBtn",placeholder:"Выберите авто",searchMode:!0,items:["BMW",{id:"213sade",title:"Opel",value:1},"Mersedes","MAN","max"],styles:{head:{width:"830px",color:"black",backgroundColor:"rgb(176 223 167)"},list:{width:"824px",color:"black",backgroundColor:"rgb(176 223 167)"},caret:{borderTop:"6px solid black"},search:{backgroundColor:"#d7ffff",borderRadius:"5px",borderBottom:"none",width:"95%",color:"black"}},multiselect:!0}),I=document.querySelector(".button__open"),k=document.querySelector(".button__close");C.buttonControl(I,"open"),C.buttonControl(k,"close");const A=new p({selector:".cg-dropdown_checkboxDisable",placeholder:"Выберите авто",searchMode:!0,items:["BMW",{id:"213sade",title:"Opel",value:1},"Mersedes","MAN","max"],styles:{head:{width:"830px"},list:{width:"824px"},placeholder:{maxWidth:"500px "}},multiselect:!0});A.disabled(!0);let T=document.getElementById("checkboxDisable");T.addEventListener("click",(()=>{1==T.checked?A.disabled(!1):A.disabled(!0)}));
//# sourceMappingURL=index.9c9683b4.js.map
