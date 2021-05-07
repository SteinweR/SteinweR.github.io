
//Основопологающие перменные :

var heroHP = 100; //Здоровье героя
var heroLVL = 1; //Уровень героя
var heroATK = 2; //Сила атаки героя (Дальнейший урон просчитывается с помощью формул)
var heroART = [0,0,0,0,0,0,0,0,0,0,0,0];
var globalSOUND = 0.7; //Преднастройка звуков
var globalMUSIC = 0.7; //Преднастройка музыки

/*
Параметры рамки :
120 , 30
Параметры основного окна :
114 23
*/

//Основые каналы звуков
var audioBUTTON = new Audio();
audioBUTTON.preload = 'auto';

//Включаем основные CARDS
HiddenSwith('MainScreen','on');
HiddenSwith('MainBorder','on');
HiddenSwith('MainTop','on');


//Включаем превостепенные CARDS
HiddenSwith('NEWGAME_BUTTON','on');
HiddenSwith('OPTIONS_OPEN_BUTTON','on');
HiddenSwith('TITLES_OPEN_BUTTON','on');
HiddenSwith('CHANGELOG_OPEN_BUTTON','on');
//CARDS для поднастройки





//Вводим MAIN данные
document.getElementById('MainBorder').value = BORDER_1;
document.getElementById('MainScreen').value = OP_1;
document.getElementById('MainTop').value = TOP_1;

document.getElementById('NEWGAME_BUTTON').value = NEWGAME_BUTTON_1;
document.getElementById('OPTIONS_OPEN_BUTTON').value = OPTIONS_BUTTON_1;
document.getElementById('TITLES_OPEN_BUTTON').value = TITLES_BUTTON_1;
document.getElementById('CHANGELOG_OPEN_BUTTON').value = CHANGELOG_BUTTON_1;
document.getElementById('OPTIONS_BACK_BUTTON').value = OPTIONS_BACK_BUTTON_1;
document.getElementById('OPTIONS_SAVE_BUTTON').value = OPTIONS_SAVE_BUTTON_1;
document.getElementById('OPTIONS_LOAD_BUTTON').value = OPTIONS_LOAD_BUTTON_1;
document.getElementById('OPTIONS_SOUND_BUTTON').value = OPTIONS_SOUND_BUTTON_1;
document.getElementById('OPTIONS_SEND_BUTTON').value = OPTIONS_SEND_BUTTON_1;

document.getElementById('MUSIC_AREA').value = OPTIONS_1_MUSIC_7;
document.getElementById('SOUND_AREA').value = OPTIONS_1_SOUND_7;

document.getElementById('MUSIC_DOWN').innerHTML = OPTIONS_1_DOWN;
document.getElementById('SOUND_DOWN').innerHTML = OPTIONS_1_DOWN;
document.getElementById('MUSIC_UP').innerHTML = OPTIONS_1_UP;
document.getElementById('SOUND_UP').innerHTML = OPTIONS_1_UP;



//Функция для эффекта подсвечивания при наводке / нажатии кнопкок
function ButtonLightEffect(name){
if(name == 'NEWGAME_BUTTON'){document.getElementById('NEWGAME_BUTTON').value = NEWGAME_BUTTON_2;}
if(name == 'OPTIONS_OPEN_BUTTON'){document.getElementById('OPTIONS_OPEN_BUTTON').value = OPTIONS_BUTTON_2;}
if(name == 'TITLES_OPEN_BUTTON'){document.getElementById('TITLES_OPEN_BUTTON').value = TITLES_BUTTON_2;}
if(name == 'CHANGELOG_OPEN_BUTTON'){document.getElementById('CHANGELOG_OPEN_BUTTON').value = CHANGELOG_BUTTON_2;}
if(name == 'RESET_1'){document.getElementById('NEWGAME_BUTTON').value = NEWGAME_BUTTON_1; document.getElementById('OPTIONS_OPEN_BUTTON').value = OPTIONS_BUTTON_1; document.getElementById('TITLES_OPEN_BUTTON').value = TITLES_BUTTON_1; document.getElementById('CHANGELOG_OPEN_BUTTON').value = CHANGELOG_BUTTON_1;}

if(name == 'OPTIONS_1_LIGHT_1'){document.getElementById('OPTIONS_BACK_BUTTON').value = OPTIONS_BACK_BUTTON_2;}
if(name == 'OPTIONS_1_LIGHT_2'){document.getElementById('OPTIONS_LOAD_BUTTON').value = OPTIONS_LOAD_BUTTON_2;}
if(name == 'OPTIONS_1_LIGHT_3'){document.getElementById('OPTIONS_SAVE_BUTTON').value = OPTIONS_SAVE_BUTTON_2;}
if(name == 'OPTIONS_1_LIGHT_4'){document.getElementById('OPTIONS_SOUND_BUTTON').value = OPTIONS_SOUND_BUTTON_2;}
if(name == 'OPTIONS_1_LIGHT_5'){document.getElementById('OPTIONS_SEND_BUTTON').value = OPTIONS_SEND_BUTTON_2;}
if(name == 'OPTIONS_1_DOWN_LIGHT_1'){document.getElementById('MUSIC_DOWN').innerHTML = OPTIONS_1_DOWN_LIGHT_1;}
if(name == 'OPTIONS_1_DOWN_LIGHT_2'){document.getElementById('SOUND_DOWN').innerHTML = OPTIONS_1_DOWN_LIGHT_2;}
if(name == 'OPTIONS_1_UP_LIGHT_1'){document.getElementById('MUSIC_UP').innerHTML = OPTIONS_1_UP_LIGHT_1;}
if(name == 'OPTIONS_1_UP_LIGHT_2'){document.getElementById('SOUND_UP').innerHTML = OPTIONS_1_UP_LIGHT_2;}
if(name == 'RESET_2'){document.getElementById('OPTIONS_BACK_BUTTON').value = OPTIONS_BACK_BUTTON_1; document.getElementById('OPTIONS_SAVE_BUTTON').value = OPTIONS_SAVE_BUTTON_1; document.getElementById('OPTIONS_LOAD_BUTTON').value = OPTIONS_LOAD_BUTTON_1; document.getElementById('OPTIONS_SOUND_BUTTON').value = OPTIONS_SOUND_BUTTON_1; document.getElementById('OPTIONS_SEND_BUTTON').value = OPTIONS_SEND_BUTTON_1;}
if(name == 'RESET_3'){document.getElementById('MainTop').value = TOP_2; document.getElementById('MainScreen').value = OPTIONS_1;}
if(name == 'RESET_4'){document.getElementById('MUSIC_DOWN').innerHTML = OPTIONS_1_DOWN; document.getElementById('SOUND_DOWN').innerHTML = OPTIONS_1_DOWN; document.getElementById('SOUND_UP').innerHTML = OPTIONS_1_UP; document.getElementById('MUSIC_UP').innerHTML = OPTIONS_1_UP;}

}

//Функция влючения / выключения hidden
function HiddenSwith(id,mode){if(mode == 'on'){document.getElementById(id).hidden = false;}if(mode == 'off'){document.getElementById(id).hidden = true;}}

//Активация настроек
function OPTIONS(mode){
if(mode == 'act'){
//Сначала меняет TOP и SCREEN
document.getElementById('MainTop').value = TOP_2;
document.getElementById('MainScreen').value = OPTIONS_1;
HiddenSwith('OPTIONS_BACK_BUTTON','on');
HiddenSwith('OPTIONS_SAVE_BUTTON','on');
HiddenSwith('OPTIONS_LOAD_BUTTON','on');
HiddenSwith('OPTIONS_SOUND_BUTTON','on');
HiddenSwith('SpecialCode','on');
HiddenSwith('OPTIONS_SEND_BUTTON','on');
HiddenSwith('MUSIC_AREA','on');
HiddenSwith('SOUND_AREA','on');
HiddenSwith('MUSIC_DOWN','on');
HiddenSwith('SOUND_DOWN','on');
HiddenSwith('MUSIC_UP','on');
HiddenSwith('SOUND_UP','on');

HiddenSwith('NEWGAME_BUTTON','off');
HiddenSwith('OPTIONS_OPEN_BUTTON','off');
HiddenSwith('TITLES_OPEN_BUTTON','off');
HiddenSwith('CHANGELOG_OPEN_BUTTON','off');
}
if(mode == '!act'){
document.getElementById('MainTop').value = TOP_1;
document.getElementById('MainScreen').value = OP_1;
HiddenSwith('OPTIONS_BACK_BUTTON','off');
HiddenSwith('OPTIONS_SAVE_BUTTON','off');
HiddenSwith('OPTIONS_LOAD_BUTTON','off');
HiddenSwith('OPTIONS_SOUND_BUTTON','off');
HiddenSwith('SpecialCode','off');
HiddenSwith('OPTIONS_SEND_BUTTON','off');
HiddenSwith('MUSIC_AREA','off');
HiddenSwith('SOUND_AREA','off');
HiddenSwith('MUSIC_DOWN','off');
HiddenSwith('SOUND_DOWN','off');
HiddenSwith('MUSIC_UP','off');
HiddenSwith('SOUND_UP','off');


HiddenSwith('NEWGAME_BUTTON','on');
HiddenSwith('OPTIONS_OPEN_BUTTON','on');
HiddenSwith('TITLES_OPEN_BUTTON','on');
HiddenSwith('CHANGELOG_OPEN_BUTTON','on');
}
if(mode == 'load'){
}
if(mode == 'save'){
}
if(mode == 'checksound'){
    let random = Math.floor(Math.random() * (20 - 1) + 1);
    console.log(random);
    audioBUTTON.volume = globalSOUND;
    if(random == 8){audioBUTTON.src = 'https://cdn.discordapp.com/attachments/640482358247555093/826724445682794516/BULLET.wav';}
    audioBUTTON.play();
}

if(mode == 'send'){
    let code = document.getElementById('SpecialCode').value;
    if(code == 'yasosubibu'){alert('samsosi');}

    if(code == 'see all box'){
    let array = Array.from(document.all).map(i => i.id);
    let end = false;
    let x = 0;
    while(end == false){
    try{
    let aaa = document.querySelector("#" + array[x]);
    aaa.style.backgroundColor = "#" + String(Math.floor(Math.random() * (10 - 1) + 1)) + String(Math.floor(Math.random() * (10 - 1) + 1)) + String(Math.floor(Math.random() * (10 - 1) + 1)) + String(Math.floor(Math.random() * (10 - 1) + 1)) + String(Math.floor(Math.random() * (10 - 1) + 1)) + String(Math.floor(Math.random() * (10 - 1) + 1));
    aaa = document.querySelector("." + array[x]);
    aaa.style.backgroundColor = "#" + String(Math.floor(Math.random() * (10 - 1) + 1)) + String(Math.floor(Math.random() * (10 - 1) + 1)) + String(Math.floor(Math.random() * (10 - 1) + 1)) + String(Math.floor(Math.random() * (10 - 1) + 1)) + String(Math.floor(Math.random() * (10 - 1) + 1)) + String(Math.floor(Math.random() * (10 - 1) + 1));
    } catch {}
    x = x + 1;
    if(x >= array.length){
        end = true;
    }
    }
    }
    
    document.getElementById('SpecialCode').value = "";
}

if(mode == 'sounddown' && globalSOUND != 0.0){
globalSOUND = globalSOUND - 0.1;
globalSOUND = parseFloat(globalSOUND.toPrecision(3));
}
if(mode == 'soundup' && globalSOUND != 0.7){
globalSOUND = globalSOUND + 0.1;
globalSOUND = parseFloat(globalSOUND.toPrecision(3));
}
if(mode == 'musicdown' && globalMUSIC != 0.0){
globalMUSIC = globalMUSIC - 0.1;
globalMUSIC = parseFloat(globalMUSIC.toPrecision(3));
}
if(mode == 'musicup' && globalMUSIC != 0.7){
globalMUSIC = globalMUSIC + 0.1;
globalMUSIC = parseFloat(globalMUSIC.toPrecision(3));
}

if(mode == 'sounddown' || mode == 'soundup' || mode == 'musicdown' || mode == 'musicup'){
if(globalSOUND == 0.7){document.getElementById('SOUND_AREA').value = OPTIONS_1_SOUND_7;}
if(globalSOUND == 0.6){document.getElementById('SOUND_AREA').value = OPTIONS_1_SOUND_6;}
if(globalSOUND == 0.5){document.getElementById('SOUND_AREA').value = OPTIONS_1_SOUND_5;}
if(globalSOUND == 0.4){document.getElementById('SOUND_AREA').value = OPTIONS_1_SOUND_4;}
if(globalSOUND == 0.3){document.getElementById('SOUND_AREA').value = OPTIONS_1_SOUND_3;}
if(globalSOUND == 0.2){document.getElementById('SOUND_AREA').value = OPTIONS_1_SOUND_2;}
if(globalSOUND == 0.1){document.getElementById('SOUND_AREA').value = OPTIONS_1_SOUND_1;}
if(globalSOUND == 0.0){document.getElementById('SOUND_AREA').value = OPTIONS_1_SOUND_0;}

if(globalMUSIC == 0.7){document.getElementById('MUSIC_AREA').value = OPTIONS_1_MUSIC_7;}
if(globalMUSIC == 0.6){document.getElementById('MUSIC_AREA').value = OPTIONS_1_MUSIC_6;}
if(globalMUSIC == 0.5){document.getElementById('MUSIC_AREA').value = OPTIONS_1_MUSIC_5;}
if(globalMUSIC == 0.4){document.getElementById('MUSIC_AREA').value = OPTIONS_1_MUSIC_4;}
if(globalMUSIC == 0.3){document.getElementById('MUSIC_AREA').value = OPTIONS_1_MUSIC_3;}
if(globalMUSIC == 0.2){document.getElementById('MUSIC_AREA').value = OPTIONS_1_MUSIC_2;}
if(globalMUSIC == 0.1){document.getElementById('MUSIC_AREA').value = OPTIONS_1_MUSIC_1;}
if(globalMUSIC == 0.0){document.getElementById('MUSIC_AREA').value = OPTIONS_1_MUSIC_0;}
}


}

