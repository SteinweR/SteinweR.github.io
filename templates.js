//Сдесь хранятся все кадры и сценки игры , никаких функций и скриптов ! 



//
var NEWGAME_BUTTON_1 = "   1. Начать игру\n";
var NEWGAME_BUTTON_2 = "///1. Начать игру///\n////////////////////";

var OPTIONS_BUTTON_1 = "   2. Настройки\n";
var OPTIONS_BUTTON_2 = "///2. Настройки//\n/////////////////";

var TITLES_BUTTON_1 = "  3. Титры \n";
var TITLES_BUTTON_2 = "//3. Титры///\n/////////////";

var CHANGELOG_BUTTON_1 = "  4. Список обновлений / изменений\n";
var CHANGELOG_BUTTON_2 = "//4. Список обновлений / изменений///\n/////////////////////////////////////"

var OPTIONS_BACK_BUTTON_1 = "                                        Выйти  обратно                               \n";
var OPTIONS_BACK_BUTTON_2 = "////////////////////////////////////////Выйти  обратно//////////////////////////////////////////\n////////////////////////////////////////////////////////////////////////////////////////////////";

var OPTIONS_SAVE_BUTTON_1 = "           1. Загрузить данные                  ";
var OPTIONS_SAVE_BUTTON_2 = "///////////1. Загрузить данные//////////////////\n////////////////////////////////////////////////";

var OPTIONS_LOAD_BUTTON_1 = "                  2. Сохранить данные";
var OPTIONS_LOAD_BUTTON_2 = "//////////////////2. Сохранить данные//////////////\n///////////////////////////////////////////////////";

var OPTIONS_SOUND_BUTTON_1 = "   Нажмите чтобы\n     проверить";
var OPTIONS_SOUND_BUTTON_2 = "///Нажмите чтобы//\n/////проверить////";

var OPTIONS_SEND_BUTTON_1 = "      Отправить";
var OPTIONS_SEND_BUTTON_2 = "//////Отправить/////\n////////////////////";




//Кадры опеннинга
var OP_1 = "\n\n\n\n\n\n\n\n\n      ты любишь кабачки?\n        ()         ()\n         \\  ____   /\n          \\/*~ *\\\\/\n           \\____//\n           //  \\\\";

//Настройки
var OPTIONS_1 = " ||                                                  || ||                2. Сохранить данные               ||\n ||                                                  || ||                                                  ||\n===============================================================================================================\n                                               Музыка / Звуки\n===============================================================================================================\n Регулирование громкости музыки           ||   Нажмите чтобы   ||               Регулирование громкости звуков\n   ◀| ▂ ▃ ▄ ▅ ▆ ▇ █ |▶               ||     проверить     ||                   ◀| ▂ ▃ ▄ ▅ ▆ ▇ █ |▶\n===============================================================================================================\n                                              Ввод особого кода\n===============================================================================================================\n                    ||                                                                    ||\n                    ||                                                                    ||\n                    ||                                                                    ||\n                    ||                                                                    ||\n                    ||                                                                    ||\n                    ||                                                                    ||\n                    ========================================================================\n                                          ||                     ||\n                                          ||      Отправить      ||\n                                          =========================";
//Музыка                                                            ||
var OPTIONS_1_DOWN = "◀|";
var OPTIONS_1_UP = "|▶";
var OPTIONS_1_UP_LIGHT_1 = "|▷";
var OPTIONS_1_UP_LIGHT_2 = "|▷";
var OPTIONS_1_DOWN_LIGHT_1 = "◁|";
var OPTIONS_1_DOWN_LIGHT_2 = "◁|";
var OPTIONS_1_MUSIC_7 = " Регулирование громкости музыки \n   ◀| ▂ ▃ ▄ ▅ ▆ ▇ █ |▶ ";
var OPTIONS_1_MUSIC_6 = " Регулирование громкости музыки \n   ◀| ▂ ▃ ▄ ▅ ▆ ▇   |▶ ";
var OPTIONS_1_MUSIC_5 = " Регулирование громкости музыки \n   ◀| ▂ ▃ ▄ ▅ ▆      |▶ ";
var OPTIONS_1_MUSIC_4 = " Регулирование громкости музыки \n   ◀| ▂ ▃ ▄ ▅         |▶ ";
var OPTIONS_1_MUSIC_3 = " Регулирование громкости музыки \n   ◀| ▂ ▃ ▄            |▶ ";
var OPTIONS_1_MUSIC_2 = " Регулирование громкости музыки \n   ◀| ▂ ▃              |▶ ";
var OPTIONS_1_MUSIC_1 = " Регулирование громкости музыки \n   ◀| ▂                 |▶ ";
var OPTIONS_1_MUSIC_0 = " Регулирование громкости музыки \n   ◀|                    |▶ ";
//Звуки
var OPTIONS_1_SOUND_7 = "       Регулирование громкости звуков \n         ◀| ▂ ▃ ▄ ▅ ▆ ▇ █ |▶ ";
var OPTIONS_1_SOUND_6 = "       Регулирование громкости звуков \n         ◀| ▂ ▃ ▄ ▅ ▆ ▇   |▶ ";
var OPTIONS_1_SOUND_5 = "       Регулирование громкости звуков \n         ◀| ▂ ▃ ▄ ▅ ▆      |▶ ";
var OPTIONS_1_SOUND_4 = "       Регулирование громкости звуков \n         ◀| ▂ ▃ ▄ ▅         |▶ ";
var OPTIONS_1_SOUND_3 = "       Регулирование громкости звуков \n         ◀| ▂ ▃ ▄            |▶ ";
var OPTIONS_1_SOUND_2 = "       Регулирование громкости звуков \n         ◀| ▂ ▃              |▶ ";
var OPTIONS_1_SOUND_1 = "       Регулирование громкости звуков \n         ◀| ▂                 |▶ ";
var OPTIONS_1_SOUND_0 = "       Регулирование громкости звуков \n         ◀|                    |▶ ";
//Настройки подсветка
var OPTIONS_1_LIGHT_4 = " ||           1. Загрузить данные                  || ||                  2. Сохранить данные               ||\n ||                                                || ||                                                    ||\n===============================================================================================================\n                                               Музыка / Звуки\n===============================================================================================================\n Регулирование громкости музыки           ||///Нажмите чтобы///||               Регулирование громкости звуков\n   ◀| ▂ ▃ ▄ ▅ ▆ ▇ █ |▶               ||/////проверить/////||                   ◀| ▂ ▃ ▄ ▅ ▆ ▇ █ |▶\n===============================================================================================================\n                                              Ввод особого кода\n===============================================================================================================\n                    ||                                                                    ||\n                    ||                                                                    ||\n                    ||                                                                    ||\n                    ||                                                                    ||\n                    ||                                                                    ||\n                    ||                                                                    ||\n                    ========================================================================\n                                          ||                     ||\n                                          ||      Отправить      ||\n                                          =========================";
var OPTIONS_1_LIGHT_5 = " ||           1. Загрузить данные                  || ||                  2. Сохранить данные               ||\n ||                                                || ||                                                    ||\n===============================================================================================================\n                                               Музыка / Звуки\n===============================================================================================================\n Регулирование громкости музыки           ||   Нажмите чтобы   ||               Регулирование громкости звуков\n   ◀| ▂ ▃ ▄ ▅ ▆ ▇ █ |▶               ||     проверить     ||                   ◀| ▂ ▃ ▄ ▅ ▆ ▇ █ |▶\n===============================================================================================================\n                                              Ввод особого кода\n===============================================================================================================\n                    ||                                                                    ||\n                    ||                                                                    ||\n                    ||                                                                    ||\n                    ||                                                                    ||\n                    ||                                                                    ||\n                    ||                                                                    ||\n                    ========================================================================\n                                          ||/////////////////////||\n                                          ||//////Отправить//////||\n                                          =========================";
//Кадры границ кнопок TOP
var TOP_1 = "//   ||                     ||                  ||              ||                                      ||   \\\\\n\\\\   ||                     ||                  ||              ||                                      ||   //";
var TOP_2 = "//   ||                                        Выйти  обратно                                           ||   \\\\\n\\\\   ||                                                                                                 ||   //";

//Кадры-рамки
var BORDER_1 = "====================================================================================================================\n||//                                                                                                            \\\\||\n||\\\\                                                                                                            //||\n====================================================================================================================\n||//                                                                                                            \\\\||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||                                                                                                                ||\n||\\\\                                                                                                            //||\n====================================================================================================================\n//                                                                                                                \\\\\n\\\\                                                                                                                //\n====================================================================================================================";