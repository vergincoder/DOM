// Задания 

5
function buttonClickZ5(){
    var input = document.getElementById("inputZ5");
    alert(input.value)
}

6
function buttonClickZ6(){
    var input = document.getElementById("inputZ6");
    input.value = "Ой, я поменял свой текст!";
}
    
7
function buttonClickZ7(){
    var elem = document.getElementById("imgZ7");
    elem.src = "./assets/img/322868_1100-800x825.jpg";
}

8
function buttonClickZ8(elem){
    alert(elem.value);
}

9
function buttonClickZ9(elem){
    elem.value = "Ой, я поменял текст!";
}

10
function buttonClickZ10(elem){
    elem.value = "Ой, я поменял текст!";
}

function stopZ10(elem){
    elem.value = "Ой, а теперь еще раз поменял!";
}

11
function buttonClickZ11(elem){
    elem.value = "Ку-ку";
}

12
function buttonClickZ12(elem){
    elem.value = 'О, теперь на меня больше не нажать!';
    elem.disabled = true;
}

13
function overZ13(elem){
    elem.src = "./assets/img/Mouse-Control-1080x675.jpg";
}
function outZ13(elem){
    elem.src = "./assets/img/322868_1100-800x825.jpg";
}

14
function buttonClickZ14(){
    let elem = document.getElementById("inputZ14");
    elem.style.color = "red";
    elem.style.width = "300px";
}

15
function buttonClickZ15(){
    let input = document.getElementById("inputZ15");
    input.style.display = 'none';
}
function buttonClick2Z15(){
    let input2 = document.getElementById("inputZ15");
    input2.style.display = 'inline-block';
}

16
function buttonClickZ16(elem){
    elem = document.getElementById('inputZ16');
    elem.value = "Ой, я поменял свой текст и css!";
    elem.style.color = 'red';
    elem.style.borderRadius = '15px';
    elem.style.width = '300px';
    elem.style.height = '50px';
}

17
function blockerZ17(){
    let blocker = document.getElementById('blockerZ17id');
    let block = document.getElementById('blocker');
    let unblocker = document.getElementById('unblockerZ17');
    blocker.value = 'О, теперь на меня больше не нажать!';
    blocker.disabled = true;
    unblocker.style.display = 'block';
}
function unblockerZ17(){	
    let blocker= document.getElementById('blockerZ17id');
    let unblocker = document.getElementById('unblockerZ17');
    blocker.value = 'О, на меня снова можно нажимать!';
    blocker.disabled = false;
    unblocker.style.display = 'none';
}

18
function buttonClickZ18(elem){
    elem.value = parseInt(elem.value) + 1;
}

19
function buttonClickZ19(){
    let elem = document.getElementById('inputZ19');
    elem.value = 'Теперь я плаваю справа!';
    elem.style = "float:right";
}

20
function buttonClickZ20(){
    let elem = document.getElementById('inputZ20');
    elem.value = 'Мои классы  css: ' + elem.className;
}

21
function buttonClickZ21(){
    let elem = document.getElementById('helloZ21');
    let elem2 = document.getElementById('byeZ21');
    let val = elem.value
    elem.value = elem2.value;
    elem2.value = val
}

22
function buttonClickZ22(){
    let inp = document.getElementById("inpZ22");
    let result = document.getElementById("inp2Z22");
    value = inp.value;
    result.value = value * value;
}

23
function buttonClickZ23(){
    let inp = document.getElementById("inpZ23");
    value = inp.value;
    if(!isNaN(value)){
        let result = document.getElementById("resultZ23");   
        result.value = value * value;
    }else{
        alert("Вы ввели не число!")
    }
}

24
function buttonClickZ24(elem){
    elem.disabled = true;
    elem.style.cursor = 'not-allowed';
}

25
function symZ25(text){
    var input = document.getElementById('inputZ25');
    input.value = input.value + text;
}


// Следующая ссылка
1
function buttonClickZ26(){
    let parZ26 = document.getElementById('parZ26');
    parZ26.innerHTML = 'Ку-ку! А я <b>жирный</b>!';
}

2
function buttonClickZ27(){
    let parZ27 = document.getElementById('parZ27');
    parZ27.innerHTML = '<h3>Абзац превратился в h3!</h3>';
}

3
function buttonClickZ28(){
    let parZ28 = document.getElementById('parZ28');
    parZ28.outerHTML = '<h3>' + parZ28.innerHTML + '</h3>';
}

4
function buttonClickZ29(){
    let inpZ29 = +document.getElementById("inpZ29").value;
    let inp2Z29 = +document.getElementById("inp2Z29").value;
    let resultZ29 = document.getElementById("resultZ29");
    resultZ29.innerHTML = inpZ29 + inp2Z29;
}

5
function buttonClickZ30(){
    let pZ30 = document.getElementsByTagName('p');
    for(let i = 0; i < pZ30.length; i++){
        pZ30[i].innerHTML = "Ку-Ку!";
    }
}

6
function buttonClickZ31(){
    let resZ31 = document.getElementsByClassName('www');
    for(let j = 0; j < resZ31.length; j++){
        resZ31[j].innerHTML = j ;
    }
}

7
function buttonClickZ32(){
    let resZ32 = document.querySelectorAll('p.Www');
    for(let k = 0; k < resZ32.length; k++){
        resZ32[k].innerHTML = k + 1;
    }
}

8
function buttonClickZ33(){
    let parZ33 = document.getElementById('parZ33');
    alert(parZ33.getAttribute("class"));
}

9
function inpZ34(){
    let parZ34 = document.getElementById('parZ34');
    alert(parZ34.getAttribute("class"));
}
function inp2Z34(){
    let parZ34 = document.getElementById('parZ34');
    parZ34.removeAttribute('class');
    alert('Класс удален! Нажмите на первую кнопку чтобы проверить это!');
}

10
function inpZ35(){
    let parZ35 = document.getElementById('parZ35');
    alert(parZ35.getAttribute("class"));
}
function inp2Z35(){
    let parZ35 = document.getElementById('parZ35');
    parZ35.setAttribute("class", "new-class");
    alert('Класс удален! Нажмите на первую кнопку чтобы проверить это!');
}

11
function txtZ36(elem){
    let textZ36 = document.getElementById("textZ36");
    textZ36.innerHTML = elem.value;
}

12
function buttonClickZ37(){
    resz37 = document.getElementsByTagName("a");
    for(let i = 0;i < resz37.length; i++){
        resz37[i].innerHTML = resz37[i].innerHTML + "(" + resz37[i].getAttribute('href') + ")";
    }
}

13
function buttonClickZ38(elem){
    let par = document.getElementById('parZ38');
    par.innerHTML = 'Привет, мир!';
    par.style.color ='red';
    elem.disabled  =  true;
    elem.value  =  'О, на меня нельзя больше нажать!';
}

14
function buttonClickZ39(){
    par = document.getElementsByTagName("p");
    for(let i = 0; i < par.length; i++){
            par[i].innerHTML = i;
        }
}

15
function buttonClickZ40(){
    par = document.getElementsByTagName("p");
    for(let i = 0; i < par.length; i++){
            par[i].innerHTML = i + '. ' + par[i].innerHTML;
        }
}


// Третья ссылка
1
let date41 = new Date();
console.log(date41.getDate());

2
let date42 = new Date();
console.log(date42.getMonth() + 1);

3
let date43 = new Date();
console.log(date43.getFullYear());

4
let date44 = new Date();
function dateFunc(elem){
    if(elem > 0 && elem < 10){
        return '0' + elem
    }
    return elem;
}
console.log(dateFunc(date44.getHours()) + ':' + dateFunc(date44.getMinutes()) + ':' + dateFunc(date44.getSeconds()) + ' ' + dateFunc(date44.getDate()) + '.' + (date44.getMonth() + 1) + '.' + date44.getFullYear());

5
let date45 = new Date();
alert(date45.getDay());

6
let date46 = new Date();
let day46 = date46.getDay();
function showDay46(day46){
    let days46 = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    return days46[day46 - 1];
}
console.log(showDay46(day46));

7
let date47= new Date(2015, 0, 7);
let day47 = date47.getDay();
function showDay47(day47){
    let days47= ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    return days47[day47 - 1];
}
console.log(showDay47(day47));

8
let date48 = new Date();
let minute48 = Math.floor(date48.getTime() / (1000 * 60));
console.log(minute48);

9
let date49 = new Date();
let time49 = date49.getTime();
let day49 = Date.parse('1988-03-01T00:00:00');
let res49 = time49 - day49;
res49 = res49 / (1000 * 60 * 60);
console.log(res49);

10
let date50 = new Date();
let time50 = new Date(date50.getFullYear(), date50.getMonth(), date50.getDate(), 0, 0, 0);
let res50 = Math.floor((date50.getTime() - time50.getTime()) / 1000);
console.log(res50);

11
let date51 = new Date();
let time51 = new Date(date51.getFullYear(), date51.getMonth(), date51.getDate(), 0, 0, 0);
let res51 = Math.floor((date51.getTime() - time51.getTime()) / 1000);
res51 = 86400 - res51;
console.log(res51)


// Четвертая ссылка
1
function cntZ41(){
    let counterZ41 = document.getElementById('counterZ41');
    counterZ41.innerHTML = parseInt(counterZ41.innerHTML) + 1;
}
function buttonClickZ41(){  
    window.setInterval(cntZ41, 500);
}

2
function counterZ42(){
    let counterZ42 = document.getElementById('counterZ42');
    counterZ42.innerHTML = parseInt(counterZ42.innerHTML) + 1;
}
function buttonClickZ42(){
    window.timerId = window.setInterval(counterZ42, 500);
    document.getElementById('inpZ42').disabled = true;
    document.getElementById('inp2Z42').disabled = false;
}
function buttonClick2Z42(){
    window.clearInterval(window.timerId);
    document.getElementById('inpZ42').disabled = false;
    document.getElementById('inp2Z42').disabled = true;
}

3
// Запустить onload="intervl()" в BODY
function intervlZ43(){ 
    window.timeShower = window.setInterval(timerrZ43, 500);
}
function timerrZ43(){    
    let clockZ43 = document.getElementById("clockZ43");
    let dateZ43 = new Date();
    clockZ43.innerHTML = prettier(dateZ43.getHours()) + ":" + prettier(dateZ43.getMinutes()) + ":" + prettier(dateZ43.getSeconds()); 
}
function prettier(num){
    if(num <=9){
        return '0'+num;
    }else{
        return num;
    } 
}

// 4
function buttonClickZ44(){
    window.timerId = window.setInterval(timerZ44, 1000);
    let inpZ44 = document.getElementById('inputZ44');
    inpZ44.disabled = true;
}
function timerZ44(){
    let runZ44 = document.getElementById("runZ44");
    let numZ44 = parseInt(runZ44.innerHTML)-1;
    runZ44.innerHTML = numZ44;
    if(numZ44 == 0) {endZ44();
        let stopperZ44 = document.getElementById("endZ44");
        stopperZ44.innerHTML = "Обратный отсчет завершен";
    }
}
function endZ44(){
    window.clearInterval(window.timerId);
}
	
// 5
let imgZ46 = document.getElementById("imgZ46");
function timerZ46(){
    window.tictacZ46 = window.setInterval(funcZ46, 1000);
}
let numZ46 = 1;
function funcZ46(){
    if(numZ46 == 1 || numZ46 == 2){
        numZ46 += 1;
    }else{numZ46 = 1;}
    imgZ46.src = './assets/img/' + numZ46 + '.png';
}

// 6
let img1Z47 = document.getElementById("img1Z47");
let img2Z47 = document.getElementById("img2Z47");
let img3Z47 = document.getElementById("img3Z47");

function timerZ47(){
    window.tictac = window.setInterval(funcZ47, 1000);
    document.getElementById('inpZ47').disabled = true;
}
function funcZ47(){
    let mainImgZ47 = img1Z47.src;
    img1Z47.src = img2Z47.src;
    img2Z47.src = img3Z47.src;
    img3Z47.src = mainImgZ47;
}

7
let img1Z48 = document.getElementById("img1Z48");
let img2Z48 = document.getElementById("img2Z48");
let img3Z48 = document.getElementById("img3Z48");
let img4Z48 = document.getElementById("img4Z48");
let img5Z48 = document.getElementById("img5Z48");
let img6Z48 = document.getElementById("img6Z48");

function timerZ48(){
    window.tictacZ48 = window.setInterval(funcZ48, 1000);
    document.getElementById('inpZ48').disabled = true;
    document.getElementById('stopperZ48').disabled = false;
}
function funcZ48(){
    let mainImgZ48 = img1Z48.src;
    img1Z48.src = img2Z48.src;
    img2Z48.src = img3Z48.src;
    img3Z48.src =  img4Z48.src;
    img4Z48.src =  img5Z48.src
    img5Z48.src =  img6Z48.src
    img6Z48.src = mainImgZ48;
}
function stopperZ48(){
    window.clearInterval(window.tictacZ48);
    document.getElementById('inpZ48').disabled = false;
    document.getElementById('stopperZ48').disabled = true;
}