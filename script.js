const getClass = (element) => document.getElementsByClassName(element);
const getId = (element) => document.getElementById(element);
const qGetClass = (element) => document.querySelector(element);
getClass("typeTextButton1")[0].onclick = function () {
  if (getClass("centerMenu")[0].style.fontWeight == "bold") {
    getClass("centerMenu")[0].style.fontWeight = "normal";
  } else {
    getClass("centerMenu")[0].style.fontWeight = "bold";
  }
};
getClass("typeTextButton2")[0].onclick = function () {
  if (getClass("centerMenu")[0].style.fontStyle == "oblique") {
    getClass("centerMenu")[0].style.fontStyle = "normal";
  } else {
    getClass("centerMenu")[0].style.fontStyle = "oblique";
  }
};
getClass("typeTextButton3")[0].onclick = function () {
  if (getClass("centerMenu")[0].style.textDecoration == "underline") {
    getClass("centerMenu")[0].style.textDecoration = "none";
  } else {
    getClass("centerMenu")[0].style.textDecoration = "underline";
  }
};
getClass("typeTextButton4")[0].onclick = function () {
  if (getClass("centerMenu")[0].style.textDecoration == "line-through") {
    getClass("centerMenu")[0].style.textDecoration = "none";
  } else {
    getClass("centerMenu")[0].style.textDecoration = "line-through";
  }
};
getClass("centringButton1")[0].onclick = function () {
  getClass("centerMenu")[0].style.textAlign = "start";
};
getClass("centringButton2")[0].onclick = function () {
  getClass("centerMenu")[0].style.textAlign = "center";
};
getClass("centringButton3")[0].onclick = function () {
  getClass("centerMenu")[0].style.textAlign = "end";
};
getClass("textParametersButton1")[0].onclick = function () {
  if (getClass("fontPedigree")[0].style.display == "block") {
    getClass("fontPedigree")[0].style.display = "none";
  } else {
    getClass("fontPedigree")[0].style.display = "block";
  }
};
for (let i = 0; i < getClass("fontPedigree")[0].children.length; i++) {
  getClass("type")[i].onclick = function () {
    getClass("centerMenu")[0].style.fontFamily = getClass("type")[i].innerHTML;
    getClass("fontPedigree")[0].style.display = "none";
  };
}
getClass("textParametersButton2")[0].onclick = function () {
  if (getClass("sizePedigree")[0].style.display == "block") {
    getClass("sizePedigree")[0].style.display = "none";
  } else {
    getClass("sizePedigree")[0].style.display = "block";
  }
};
for (let i = 0; i < getClass("sizePedigree")[0].children.length; i++) {
  getClass("size")[i].onclick = function () {
    getClass("centerMenu")[0].style.fontSize = getClass("size")[i].innerHTML;
    getClass("sizePedigree")[0].style.display = "none";
  };
}
qGetClass(".pallet").onclick = function () {
  qGetClass(".chooseColor").style.display = "block";
  for (let i = 0; i < qGetClass(".colors").children.length; i++) {
    qGetClass(".colors").children[i].onclick = function () {
      getClass("centerMenu")[0].style.color = this.style.color;
    };
  }
};
getClass("exit")[0].onclick = function () {
  getClass("chooseColor")[0].style.display = "none";
};
getClass("exit")[1].onclick = function () {
  getClass("chooseBGColor")[0].style.display = "none";
  getClass("bgColors")[0].style.borderRightWidth = "1px";
  getClass("bgColors")[0].style.borderRightColor = "gray";
  getClass("bgColors")[0].style.borderRightStyle = "solid";
  getClass("bgColors")[0].style.borderTopWidth = "1px";
  getClass("bgColors")[0].style.borderTopColor = "gray";
  getClass("bgColors")[0].style.borderTopStyle = "solid";
  getClass("files")[0].style.color = "rgb(21, 120, 191)";
  getClass("bgColors")[0].style.color = "gray";
  getClass("images")[0].style.color = "rgb(21, 120, 191)";
  getClass("images")[0].style.borderRightWidth = "none";
  getClass("images")[0].style.borderRightColor = "none";
  getClass("images")[0].style.borderRightStyle = "none";
  getClass("images")[0].style.borderTopWidth = "none";
  getClass("images")[0].style.borderTopColor = "none";
  getClass("images")[0].style.borderTopStyle = "none";
  getClass("images")[0].style.borderLeftWidth = "none";
  getClass("images")[0].style.borderLeftColor = "none";
  getClass("images")[0].style.borderLeftStyle = "none";
  getClass("files")[0].style.borderRightWidth = "none";
  getClass("files")[0].style.borderRightColor = "none";
  getClass("files")[0].style.borderRightStyle = "none";
  getClass("files")[0].style.borderTopWidth = "none";
  getClass("files")[0].style.borderTopColor = "none";
  getClass("files")[0].style.borderTopStyle = "none";
  getClass("files")[0].style.borderLeftWidth = "none";
  getClass("files")[0].style.borderLeftColor = "none";
  getClass("files")[0].style.borderLeftStyle = "none";
};
qGetClass(".img").onclick = function () {
  qGetClass(".chooseBGColor").style.display = "block";
  for (let i = 0; i < qGetClass(".bg-colors").children.length; i++) {
    qGetClass(".bg-colors").children[i].onclick = function () {
      getClass("centerMenu")[0].style.backgroundImage= 'none';
      getClass("centerMenu")[0].style.backgroundColor = this.style.backgroundColor;
    };
  }
  
  for(let i=0; i<qGetClass('.bg-images').children.length; i++){
      qGetClass('.bg-images').children[i].onclick = function(){
        let link = qGetClass('.bg-images').children[i].src;
        getClass("centerMenu")[0].style.backgroundImage = `url('${link}')`;
        getClass("centerMenu")[0].style.backgroundRepeat = 'no-repeat';
        getClass("centerMenu")[0].style.backgroundSize = `cover`;
      }
  }

  getClass("bgColors")[0].style.borderRightWidth = "1px";
  getClass("bgColors")[0].style.borderRightColor = "gray";
  getClass("bgColors")[0].style.borderRightStyle = "solid";
  getClass("bgColors")[0].style.borderTopWidth = "1px";
  getClass("bgColors")[0].style.borderTopColor = "gray";
  getClass("bgColors")[0].style.borderTopStyle = "solid";

  getClass("bg-colors")[0].style.display = "flex";
  getClass("bg-images")[0].style.display = "none";
  getClass('bg-files')[0].style.display = 'none';
};
getClass("bgColors")[0].onclick = function () {
  getClass("bgColors")[0].style.borderRightWidth = "1px";
  getClass("bgColors")[0].style.borderRightColor = "gray";
  getClass("bgColors")[0].style.borderRightStyle = "solid";
  getClass("bgColors")[0].style.borderTopWidth = "1px";
  getClass("bgColors")[0].style.borderTopColor = "gray";
  getClass("bgColors")[0].style.borderTopStyle = "solid";
  getClass("files")[0].style.color = "rgb(21, 120, 191)";
  getClass("bgColors")[0].style.color = "gray";
  getClass("images")[0].style.color = "rgb(21, 120, 191)";
  getClass("images")[0].style.borderRightWidth = "none";
  getClass("images")[0].style.borderRightColor = "none";
  getClass("images")[0].style.borderRightStyle = "none";
  getClass("images")[0].style.borderTopWidth = "none";
  getClass("images")[0].style.borderTopColor = "none";
  getClass("images")[0].style.borderTopStyle = "none";
  getClass("images")[0].style.borderLeftWidth = "none";
  getClass("images")[0].style.borderLeftColor = "none";
  getClass("images")[0].style.borderLeftStyle = "none";
  getClass("files")[0].style.borderRightWidth = "none";
  getClass("files")[0].style.borderRightColor = "none";
  getClass("files")[0].style.borderRightStyle = "none";
  getClass("files")[0].style.borderTopWidth = "none";
  getClass("files")[0].style.borderTopColor = "none";
  getClass("files")[0].style.borderTopStyle = "none";
  getClass("files")[0].style.borderLeftWidth = "none";
  getClass("files")[0].style.borderLeftColor = "none";
  getClass("files")[0].style.borderLeftStyle = "none";
  getClass("bg-colors")[0].style.display = "flex";
  getClass("bg-images")[0].style.display = "none";
  getClass("bg-files")[0].style.display = "none";
};
getClass("images")[0].onclick = function () {
  getClass("images")[0].style.borderRightWidth = "1px";
  getClass("images")[0].style.borderRightColor = "gray";
  getClass("images")[0].style.borderRightStyle = "solid";
  getClass("images")[0].style.borderTopWidth = "1px";
  getClass("images")[0].style.borderTopColor = "gray";
  getClass("images")[0].style.borderTopStyle = "solid";
  getClass("images")[0].style.borderLeftWidth = "1px";
  getClass("images")[0].style.borderLeftColor = "gray";
  getClass("images")[0].style.borderLeftStyle = "solid";
  getClass("files")[0].style.color = "rgb(21, 120, 191)";
  getClass("bgColors")[0].style.color = "rgb(21, 120, 191)";
  getClass("images")[0].style.color = "gray";
  getClass("files")[0].style.borderRightWidth = "none";
  getClass("files")[0].style.borderRightColor = "none";
  getClass("files")[0].style.borderRightStyle = "none";
  getClass("files")[0].style.borderTopWidth = "none";
  getClass("files")[0].style.borderTopColor = "none";
  getClass("files")[0].style.borderTopStyle = "none";
  getClass("files")[0].style.borderLeftWidth = "none";
  getClass("files")[0].style.borderLeftColor = "none";
  getClass("files")[0].style.borderLeftStyle = "none";
  getClass("bgColors")[0].style.borderRightWidth = "none";
  getClass("bgColors")[0].style.borderRightColor = "none";
  getClass("bgColors")[0].style.borderRightStyle = "none";
  getClass("bgColors")[0].style.borderTopWidth = "none";
  getClass("bgColors")[0].style.borderTopColor = "none";
  getClass("bgColors")[0].style.borderTopStyle = "none";
  getClass("bg-colors")[0].style.display = "none";
  getClass("bg-images")[0].style.display = "flex";
  getClass("bg-files")[0].style.display = "none";
};
getClass("files")[0].onclick = function () {
  getClass("files")[0].style.borderRightWidth = "1px";
  getClass("files")[0].style.borderRightColor = "gray";
  getClass("files")[0].style.borderRightStyle = "solid";
  getClass("files")[0].style.borderTopWidth = "1px";
  getClass("files")[0].style.borderTopColor = "gray";
  getClass("files")[0].style.borderTopStyle = "solid";
  getClass("files")[0].style.borderLeftWidth = "1px";
  getClass("files")[0].style.borderLeftColor = "gray";
  getClass("files")[0].style.borderLeftStyle = "solid";
  getClass("files")[0].style.color = "gray";
  getClass("bgColors")[0].style.color = "rgb(21, 120, 191)";
  getClass("images")[0].style.color = "rgb(21, 120, 191)";
  getClass("bgColors")[0].style.borderRightWidth = "none";
  getClass("bgColors")[0].style.borderRightColor = "none";
  getClass("bgColors")[0].style.borderRightStyle = "none";
  getClass("bgColors")[0].style.borderTopWidth = "none";
  getClass("bgColors")[0].style.borderTopColor = "none";
  getClass("bgColors")[0].style.borderTopStyle = "none";
  getClass("images")[0].style.borderRightWidth = "none";
  getClass("images")[0].style.borderRightColor = "none";
  getClass("images")[0].style.borderRightStyle = "none";
  getClass("images")[0].style.borderTopWidth = "none";
  getClass("images")[0].style.borderTopColor = "none";
  getClass("images")[0].style.borderTopStyle = "none";
  getClass("images")[0].style.borderLeftWidth = "none";
  getClass("images")[0].style.borderLeftColor = "none";
  getClass("images")[0].style.borderLeftStyle = "none";
  getClass("bg-colors")[0].style.display = "none";
  getClass("bg-images")[0].style.display = "none";
  getClass("bg-files")[0].style.display = "flex";
};
getId('locking').onclick = function(){
  getClass('signIn')[0].style.display = 'flex';
}
let checkLogin = /^admin$/;
let checkPassword = /^admin$/
let login = getId('text');
let password = getId('pass');
getId('signInButton').onclick = function(){
  let value = login.value;
  let check = checkLogin.test(value);
  let value2 = password.value;
  let check2 = checkLogin.test(value2);
  if (value==''&&value2=='') {
    getClass('emptyValue')[0].style.display = 'block';
    getClass('checkLogPass')[0].style.display = 'none';
  }else if(check===false){
    getClass('emptyValue')[0].style.display = 'none';
    getClass('checkLogPass')[0].style.display = 'block';
  }else if(check2==false){
    getClass('emptyValue')[0].style.display = 'none';
    getClass('checkLogPass')[0].style.display = 'block';
  }else{
    getClass('emptyValue')[0].style.display = 'none';
    getClass('checkLogPass')[0].style.display = 'none';
    getClass('signIn')[0].style.display = 'none';
    getId('locking').style.display = 'none';
    getId('unlocking').style.display = 'block';
    getId('editor').disabled = false;
    getId('editor').style.backgroundColor = 'white';
    value = '';
    value2 = '';
  }
}
getId('unlocking').onclick = function(){
  getClass('signOut')[0].style.display = 'flex';
}
getId('cancelButton').onclick = function(){
  getClass('signOut')[0].style.display = 'none';
}
getId('signOutButton').onclick = function(){
  getId('locking').style.display = 'block';
  getId('unlocking').style.display = 'none';
  getId('editor').disabled = true;
  getId('editor').style.backgroundColor = '#bababa';
  getClass('signOut')[0].style.display = 'none';
}
getId('editor').onclick = function(){
  getClass('centerMenu')[0].style.display = 'none';
  getId('textarea').style.display = 'block';
  getClass('head1')[0].style.display = 'none';
  getClass('head2')[0].style.display = 'flex';
  getId('textarea').value = getClass('centerMenu')[0].innerHTML;
}
getClass('redactor1')[0].onclick = function(){
  getClass('centerMenu')[0].innerHTML = getId('textarea').value;
  getClass('centerMenu')[0].style.display = 'block';
  getId('textarea').style.display = 'none';
  getClass('head1')[0].style.display = 'flex';
  getClass('head2')[0].style.display = 'none';
}
getClass('redactor2')[0].onclick = function(){
  getClass('createTable')[0].style.display = 'flex';
}
getClass('exitTable')[0].onclick = function(){
  getClass('createTable')[0].style.display = 'none';
  getClass('invalidValue')[0].style.display = 'none';
}
let f2 = document.forms.f2;
let f3 = document.forms.f3;
let f4 = document.forms.f4;
let f5 = document.forms.f5;
let f6 = document.forms.f6;
let f7 = document.forms.f7;
let f8 = document.forms.f8;
let trQ = '';
let tdQ = '';
let wtdQ = '';
let htdQ = '';
let wbQ = '';
getId('reset').onclick = function(){
  f2.tr.value = '';
  f3.td.value = '';
  f4.wtd.value = '';
  f5.htd.value = '';
  f6.wb.value = '';
  f7.sb.value = 'chooseStyle';
  f8.cb.value = 'chooseColor';
  getClass('invalidValue')[0].style.display = 'none';
}
getId('create').onclick = function(){
  if (f2.tr.value == ''||f3.td.value == ''||f4.wtd.value ==''||f5.htd.value==''||f6.wb.value==''||f7.sb.value == 'chooseStyle'||f8.cb.value == 'chooseColor') {
    getClass('invalidValue')[0].style.display = 'block';
  }else{
    getClass('invalidValue')[0].style.display = 'none';
    createTable();
  }
}
const createTable = ()=>{
  trQ = f2.tr.value; 
  tdQ = f3.td.value; 
  wtdQ = f4.wtd.value;
  htdQ = f5.htd.value;
  wbQ = f6.wb.value; 
  const t = document.createElement('table');
  for(let i =0; i<trQ; i++){
      const tr = document.createElement('tr');
      for(let j = 0; j<tdQ; j++){
          const td =document.createElement('td');
          td.innerText = 'TD';
          td.style.width = `${wtdQ}px`;
          td.style.height = `${htdQ}px`;
          td.style.borderWidth = `${wbQ}px`;
          td.style.borderStyle = sb.value;
          td.style.borderColor = cb.value;
          tr.appendChild(td);
      }
      t.appendChild(tr);
      t.classList.add('tableStyle');
  }
  qGetClass('.centerMenu').appendChild(t);
  getId('textarea').value = getClass('centerMenu')[0].innerHTML;
}
getClass('redactor3')[0].onclick = function(){
  getClass('createOL')[0].style.display = 'flex';
}
getClass('exitOL')[0].onclick = function(){
  getClass('createOL')[0].style.display = 'none';
  getClass('invalidValue2')[0].style.display = 'none';
}
let clQ = '';
let mlQ = '';
let f9 = document.forms.f9;
let f10 = document.forms.f10;
let count = 1;
getId('reset2').onclick = function(){
  f9.cl.value = '';
  f10.ml.value = 'chooseOL';
  getClass('invalidValue2')[0].style.display = 'none';
}
getId('create2').onclick = function(){
  if(f9.cl.value==''||f10.ml.value=='chooseOL'){
    getClass('invalidValue2')[0].style.display = 'block';
  }else{
    getClass('invalidValue2')[0].style.display = 'none';
    createOL();
  }
}
const createOL = ()=>{
  clQ = f9.cl.value;
  const ol = document.createElement('ol');
  for(let i = 0;i<clQ; i++){
      const l = document.createElement('li');
      l.innerText = 'item '+ count;
      count++; 
      ol.style.listStyleType = ml.value;
      ol.appendChild(l);
      ol.classList.add('listStyle');
  }
  qGetClass('.centerMenu').appendChild(ol);
  getId('textarea').value = getClass('centerMenu')[0].innerHTML;
  count = 1;
}
getClass('redactor4')[0].onclick = function(){
  getClass('createUL')[0].style.display = 'flex';
}
getClass('exitUL')[0].onclick = function(){
  getClass('createUL')[0].style.display = 'none';
  getClass('invalidValue3')[0].style.display = 'none';
}
let clQ2 = '';
let mlQ2 = '';
let f11 = document.forms.f11;
let f12 = document.forms.f12;
let count2 = 1;
getId('reset3').onclick = function(){
  f11.cl2.value = '';
  f12.ml2.value = 'chooseUL';
  getClass('invalidValue3')[0].style.display = 'none';
}
getId('create3').onclick = function(){
  if(f11.cl2.value==''||f12.ml2.value=='chooseUL'){
    getClass('invalidValue3')[0].style.display = 'block';
  }else{
    getClass('invalidValue3')[0].style.display = 'none';
    createUL();
  }
}
const createUL = ()=>{
  clQ2 = f11.cl2.value;
  const ul = document.createElement('ul');
  for(let i = 0;i<clQ2; i++){
      const l = document.createElement('li');
      l.innerText = 'item '+ count2;
      count2++; 
      ul.style.listStyleType = ml2.value;
      ul.appendChild(l);
      ul.classList.add('listStyle');
  }
  qGetClass('.centerMenu').appendChild(ul);
  getId('textarea').value = getClass('centerMenu')[0].innerHTML;
  count2 = 1;
}

function previewFile(fileInput) {
  var file = fileInput.files[0];
  var reader = new FileReader();

  reader.addEventListener("load", function() {
    setBackground(reader.result);
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
function setBackground(imageURL){
    getClass('centerMenu')[0].style.backgroundColor = 'none';
    getClass('centerMenu')[0].style.backgroundImage = "url(" + imageURL + ")";
    getClass('centerMenu')[0].style.backgroundSize = "100% auto";
    getClass('centerMenu')[0].style.backgroundRepeat = "no-repeat";
    getClass('centerMenu')[0].style.backgroundPosition = "center top";
}