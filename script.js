let startBtn = document.getElementById("start");
let pergunta = document.getElementById("pergunta");
let img = document.getElementById("img");
let timer = document.getElementById("timer");
let res1 = document.getElementById("res1");
let res2 = document.getElementById("res2");
let res3 = document.getElementById("res3");
let res4 = document.getElementById("res4");
let btns = document.getElementsByClassName("btns");
let avançar = document.getElementById("avançar");
let avançar2 = document.getElementById("avançar2");
let avançar3 = document.getElementById("avançar3");
let avançar4 = document.getElementById("avançar4");
let avançar5 = document.getElementById("avançar5");
let avançar6 = document.getElementById("avançar6");
let avançar7 = document.getElementById("avançar7");
let avançar8 = document.getElementById("avançar8");
let avançar9 = document.getElementById("avançar9");
let finalizar = document.getElementById("finalizar");
let score = 0;
let scoreTxt = document.getElementById("score");
let scoreTexto = document.getElementById("scoreTxt");
let tWidth = 280;
let h2 = document.getElementById("h2");
let final;
let verificador;


function q1() {
    startBtn.style.display = 'none';
    timer.style.display = 'block';
    pergunta.innerText = 'Qual destes fenômenos naturais pode causar um tsunami?';
    img.style.backgroundImage = 'url(tsunami.jpg)';
    verificador = setInterval(() => {
        tWidth -= 400 / 2666;
        timer.style.width = `${tWidth}px`;

        if (tWidth <= 0) {
            clearInterval(verificador);
        }
    });
    let final = setInterval(() => {
        if (tWidth <= 0) {
            res2.style.backgroundColor = 'green';
            res1.removeEventListener('click', check1);
            res2.removeEventListener('click', check2);
            res3.removeEventListener('click', check3);
            res4.removeEventListener('click', check4);
            clearInterval(final);
        }
    });
    document.querySelectorAll(".btns").forEach(item => {
        item.style.display = 'block';
    });
    res1.innerText = 'A) Furacão';
    res2.innerText = 'B) Terremoto submarino';
    res3.innerText = 'C) Chuva forte';
    res4.innerText = 'D) Erupção solar';

    function check1() {
        res1.style.backgroundColor = 'red';
        res2.style.backgroundColor = 'green';
        res1.removeEventListener('click', check1);
        res2.removeEventListener('click', check2);
        res3.removeEventListener('click', check3);
        res4.removeEventListener('click', check4);
        clearInterval(final);
        clearInterval(verificador);
    }
    
    function check2() {
        res2.style.backgroundColor = 'green';
        score += 10;
        scoreTxt.innerText = score;
        res1.removeEventListener('click', check1);
        res2.removeEventListener('click', check2);
        res3.removeEventListener('click', check3);
        res4.removeEventListener('click', check4);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check3() {
        res3.style.backgroundColor = 'red';
        res2.style.backgroundColor = 'green';
        res1.removeEventListener('click', check1);
        res2.removeEventListener('click', check2);
        res3.removeEventListener('click', check3);
        res4.removeEventListener('click', check4);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check4() {
        res4.style.backgroundColor = 'red';
        res2.style.backgroundColor = 'green';
        res1.removeEventListener('click', check1);
        res2.removeEventListener('click', check2);
        res3.removeEventListener('click', check3);
        res4.removeEventListener('click', check4);
        clearInterval(final);
        clearInterval(verificador);
    }

    res1.addEventListener('click', check1);
    res2.addEventListener('click', check2);
    res3.addEventListener('click', check3);
    res4.addEventListener('click', check4);
}

function q2() {
    tWidth = 280;
    timer.style.width = `${tWidth}px`;
    document.querySelectorAll('.btns').forEach(item => {
        item.style.backgroundColor = 'white';
    });
    pergunta.innerText = 'Qual destas doenças é causada por um vírus?';
    img.style.backgroundImage = 'url(virus.jpg)';
    verificador = setInterval(() => {
        tWidth -= 600 / 4000;
        timer.style.width = `${tWidth}px`;

        if (tWidth <= 0) {
            clearInterval(verificador);
        }
    });
    final = setInterval(() => {
        if (tWidth <= 0) {
            res1.style.backgroundColor = 'green';
            res1.removeEventListener('click', check12);
            res2.removeEventListener('click', check22);
            res3.removeEventListener('click', check32);
            res4.removeEventListener('click', check42);
            clearInterval(final);
        }
    });
    res1.innerText = 'A) Gripe ';
    res2.innerText = 'B) Malária';
    res3.innerText = 'C) Escorbuto';
    res4.innerText = 'D) Tuberculose';

    function check12() {
        res1.style.backgroundColor = 'green';
        score += 10;
        scoreTxt.innerText = score;
        res1.removeEventListener('click', check12);
        res2.removeEventListener('click', check22);
        res3.removeEventListener('click', check32);
        res4.removeEventListener('click', check42);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check22() {
        res2.style.backgroundColor = 'red';
        res1.style.backgroundColor = 'green';
        res1.removeEventListener('click', check12);
        res2.removeEventListener('click', check22);
        res3.removeEventListener('click', check32);
        res4.removeEventListener('click', check42);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check32() {
        res3.style.backgroundColor = 'red';
        res1.style.backgroundColor = 'green';
        res1.removeEventListener('click', check12);
        res2.removeEventListener('click', check22);
        res3.removeEventListener('click', check32);
        res4.removeEventListener('click', check42);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check42() {
        res4.style.backgroundColor = 'red';
        res1.style.backgroundColor = 'green';
        res1.removeEventListener('click', check12);
        res2.removeEventListener('click', check22);
        res3.removeEventListener('click', check32);
        res4.removeEventListener('click', check42);
        clearInterval(final);
        clearInterval(verificador);
    }

    res1.addEventListener('click', check12);
    res2.addEventListener('click', check22);
    res3.addEventListener('click', check32);
    res4.addEventListener('click', check42);
}

function q3() {
    tWidth = 280;
    timer.style.width = `${tWidth}px`;
    document.querySelectorAll('.btns').forEach(item => {
        item.style.backgroundColor = 'white';
    });
    pergunta.innerText = 'Qual desses números é um número primo?';
    img.style.backgroundImage = 'url(prime.jpg)';
    verificador = setInterval(() => {
        tWidth -= 600 / 4000;
        timer.style.width = `${tWidth}px`;

        if (tWidth <= 0) {
            clearInterval(verificador);
        }
    });
    final = setInterval(() => {
        if (tWidth <= 0) {
            res3.style.backgroundColor = 'green';
            res1.removeEventListener('click', check13);
            res2.removeEventListener('click', check23);
            res3.removeEventListener('click', check33);
            res4.removeEventListener('click', check43);
            clearInterval(final);
        }
    });
    res1.innerText = 'A) 25';
    res2.innerText = 'B) 15';
    res3.innerText = 'C) 17';
    res4.innerText = 'D) 20';

    function check13() {
        res1.style.backgroundColor = 'red';
        res3.style.backgroundColor = 'green';
        res1.removeEventListener('click', check13);
        res2.removeEventListener('click', check23);
        res3.removeEventListener('click', check33);
        res4.removeEventListener('click', check43);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check23() {
        res2.style.backgroundColor = 'red';
        res3.style.backgroundColor = 'green';
        res1.removeEventListener('click', check13);
        res2.removeEventListener('click', check23);
        res3.removeEventListener('click', check33);
        res4.removeEventListener('click', check43);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check33() {
        res3.style.backgroundColor = 'green';
        score += 10;
        scoreTxt.innerText = score;
        res1.removeEventListener('click', check13);
        res2.removeEventListener('click', check23);
        res3.removeEventListener('click', check33);
        res4.removeEventListener('click', check43);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check43() {
        res4.style.backgroundColor = 'red';
        res3.style.backgroundColor = 'green';
        res1.removeEventListener('click', check13);
        res2.removeEventListener('click', check23);
        res3.removeEventListener('click', check33);
        res4.removeEventListener('click', check43);
        clearInterval(final);
        clearInterval(verificador);
    }

    res1.addEventListener('click', check13);
    res2.addEventListener('click', check23);
    res3.addEventListener('click', check33);
    res4.addEventListener('click', check43);
}

function q4() {
    tWidth = 280;
    timer.style.width = `${tWidth}px`;
    document.querySelectorAll('.btns').forEach(item => {
        item.style.backgroundColor = 'white';
    });
    pergunta.innerText = 'Qual é o metal mais abundante na crosta terrestre?';
    img.style.backgroundImage = 'url(aluminum.jpg)';
    verificador = setInterval(() => {
        tWidth -= 600 / 4000;
        timer.style.width = `${tWidth}px`;

        if (tWidth <= 0) {
            clearInterval(verificador);
        }
    });
    final = setInterval(() => {
        if (tWidth <= 0) {
            res2.style.backgroundColor = 'green';
            res1.removeEventListener('click', check14);
            res2.removeEventListener('click', check24);
            res3.removeEventListener('click', check34);
            res4.removeEventListener('click', check44);
            clearInterval(final);
        }
    });
    res1.innerText = 'A) Ouro ';
    res2.innerText = 'B) Alumínio ';
    res3.innerText = 'C) Ferro';
    res4.innerText = 'D) Cobre';

    function check14() {
        res1.style.backgroundColor = 'red';
        res2.style.backgroundColor = 'green';
        res1.removeEventListener('click', check14);
        res2.removeEventListener('click', check24);
        res3.removeEventListener('click', check34);
        res4.removeEventListener('click', check44);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check24() {
        res2.style.backgroundColor = 'green';
        score += 10;
        scoreTxt.innerText = score;
        res1.removeEventListener('click', check14);
        res2.removeEventListener('click', check24);
        res3.removeEventListener('click', check34);
        res4.removeEventListener('click', check44);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check34() {
        res3.style.backgroundColor = 'red';
        res2.style.backgroundColor = 'green';
        res1.removeEventListener('click', check14);
        res2.removeEventListener('click', check24);
        res3.removeEventListener('click', check34);
        res4.removeEventListener('click', check44);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check44() {
        res4.style.backgroundColor = 'red';
        res2.style.backgroundColor = 'green';
        res1.removeEventListener('click', check14);
        res2.removeEventListener('click', check24);
        res3.removeEventListener('click', check34);
        res4.removeEventListener('click', check44);
        clearInterval(final);
        clearInterval(verificador);
    }

    res1.addEventListener('click', check14);
    res2.addEventListener('click', check24);
    res3.addEventListener('click', check34);
    res4.addEventListener('click', check44);
}

function q5() {
    tWidth = 280;
    timer.style.width = `${tWidth}px`;
    document.querySelectorAll('.btns').forEach(item => {
        item.style.backgroundColor = 'white';
    });
    pergunta.innerText = 'Em que ano aconteceu a Independência do Brasil?';
    img.style.backgroundImage = 'url(brazil.jpg)';
    verificador = setInterval(() => {
        tWidth -= 600 / 4000;
        timer.style.width = `${tWidth}px`;

        if (tWidth <= 0) {
            clearInterval(verificador);
        }
    });
    final = setInterval(() => {
        if (tWidth <= 0) {
            res2.style.backgroundColor = 'green';
            res1.removeEventListener('click', check15);
            res2.removeEventListener('click', check25);
            res3.removeEventListener('click', check35);
            res4.removeEventListener('click', check45);
            clearInterval(final);
        }
    });
    res1.innerText = 'A) 1500 ';
    res2.innerText = 'B) 1822 ';
    res3.innerText = 'C) 1789';
    res4.innerText = 'D) 1889';

    function check15() {
        res1.style.backgroundColor = 'red';
        res2.style.backgroundColor = 'green';
        res1.removeEventListener('click', check15);
        res2.removeEventListener('click', check25);
        res3.removeEventListener('click', check35);
        res4.removeEventListener('click', check45);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check25() {
        res2.style.backgroundColor = 'green';
        score += 10;
        scoreTxt.innerText = score;
        res1.removeEventListener('click', check15);
        res2.removeEventListener('click', check25);
        res3.removeEventListener('click', check35);
        res4.removeEventListener('click', check45);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check35() {
        res3.style.backgroundColor = 'red';
        res2.style.backgroundColor = 'green';
        res1.removeEventListener('click', check15);
        res2.removeEventListener('click', check25);
        res3.removeEventListener('click', check35);
        res4.removeEventListener('click', check45);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check45() {
        res4.style.backgroundColor = 'red';
        res2.style.backgroundColor = 'green';
        res1.removeEventListener('click', check15);
        res2.removeEventListener('click', check25);
        res3.removeEventListener('click', check35);
        res4.removeEventListener('click', check45);
        clearInterval(final);
        clearInterval(verificador);
    }

    res1.addEventListener('click', check15);
    res2.addEventListener('click', check25);
    res3.addEventListener('click', check35);
    res4.addEventListener('click', check45);
}

function q6() {
    tWidth = 280;
    timer.style.width = `${tWidth}px`;
    document.querySelectorAll('.btns').forEach(item => {
        item.style.backgroundColor = 'white';
    });
    pergunta.innerText = 'Qual dessas invenções NÃO foi criada por Thomas Edison?';
    img.style.backgroundImage = 'url(thomas.jpg)';
    verificador = setInterval(() => {
        tWidth -= 600 / 4000;
        timer.style.width = `${tWidth}px`;

        if (tWidth <= 0) {
            clearInterval(verificador);
        }
    });
    final = setInterval(() => {
        if (tWidth <= 0) {
            res1.style.backgroundColor = 'green';
            res1.removeEventListener('click', check16);
            res2.removeEventListener('click', check26);
            res3.removeEventListener('click', check36);
            res4.removeEventListener('click', check46);
            clearInterval(final);
        }
    });
    res1.innerText = 'A) Avião ';
    res2.innerText = 'B) Lâmpada elétrica ';
    res3.innerText = 'C) Câmera de cinema';
    res4.innerText = 'D) Fonógrafo';

    function check16() {
        res1.style.backgroundColor = 'green';
        score += 10;
        scoreTxt.innerText = score;
        res1.removeEventListener('click', check16);
        res2.removeEventListener('click', check26);
        res3.removeEventListener('click', check36);
        res4.removeEventListener('click', check46);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check26() {
        res2.style.backgroundColor = 'red';
        res1.style.backgroundColor = 'green';
        res1.removeEventListener('click', check16);
        res2.removeEventListener('click', check26);
        res3.removeEventListener('click', check36);
        res4.removeEventListener('click', check46);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check36() {
        res3.style.backgroundColor = 'red';
        res1.style.backgroundColor = 'green';
        res1.removeEventListener('click', check16);
        res2.removeEventListener('click', check26);
        res3.removeEventListener('click', check36);
        res4.removeEventListener('click', check46);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check46() {
        res4.style.backgroundColor = 'red';
        res1.style.backgroundColor = 'green';
        res1.removeEventListener('click', check16);
        res2.removeEventListener('click', check26);
        res3.removeEventListener('click', check36);
        res4.removeEventListener('click', check46);
        clearInterval(final);
        clearInterval(verificador);
    }

    res1.addEventListener('click', check16);
    res2.addEventListener('click', check26);
    res3.addEventListener('click', check36);
    res4.addEventListener('click', check46);
}

function q7() {
    tWidth = 280;
    timer.style.width = `${tWidth}px`;
    document.querySelectorAll('.btns').forEach(item => {
        item.style.backgroundColor = 'white';
    });
    pergunta.innerText = 'Qual é o nome do processo pelo qual as plantas produzem seu próprio alimento?';
    img.style.backgroundImage = 'url(plant.jpg)';
    verificador = setInterval(() => {
        tWidth -= 600 / 4000;
        timer.style.width = `${tWidth}px`;

        if (tWidth <= 0) {
            clearInterval(verificador);
        }
    });
    final = setInterval(() => {
        if (tWidth <= 0) {
            res4.style.backgroundColor = 'green';
            res1.removeEventListener('click', check17);
            res2.removeEventListener('click', check27);
            res3.removeEventListener('click', check37);
            res4.removeEventListener('click', check47);
            clearInterval(final);
        }
    });
    res1.innerText = 'A) Osmose ';
    res2.innerText = 'B) Fermentação ';
    res3.innerText = 'C) Respiração celular';
    res4.innerText = 'D) Fotossíntese';

    function check17() {
        res1.style.backgroundColor = 'red';
        res4.style.backgroundColor = 'green';
        res1.removeEventListener('click', check17);
        res2.removeEventListener('click', check27);
        res3.removeEventListener('click', check37);
        res4.removeEventListener('click', check47);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check27() {
        res2.style.backgroundColor = 'red';
        res4.style.backgroundColor = 'green';
        res1.removeEventListener('click', check17);
        res2.removeEventListener('click', check27);
        res3.removeEventListener('click', check37);
        res4.removeEventListener('click', check47);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check37() {
        res3.style.backgroundColor = 'red';
        res4.style.backgroundColor = 'green';
        res1.removeEventListener('click', check1);
        res2.removeEventListener('click', check2);
        res3.removeEventListener('click', check3);
        res4.removeEventListener('click', check4);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check47() {
        res4.style.backgroundColor = 'green';
        score += 10;
        scoreTxt.innerText = score;
        res1.removeEventListener('click', check17);
        res2.removeEventListener('click', check27);
        res3.removeEventListener('click', check37);
        res4.removeEventListener('click', check47);
        clearInterval(final);
        clearInterval(verificador);
    }

    res1.addEventListener('click', check17);
    res2.addEventListener('click', check27);
    res3.addEventListener('click', check37);
    res4.addEventListener('click', check47);
}

function q8() {
    tWidth = 280;
    timer.style.width = `${tWidth}px`;
    document.querySelectorAll('.btns').forEach(item => {
        item.style.backgroundColor = 'white';
    });
    pergunta.innerText = 'Qual destes planetas tem maior número de luas?';
    img.style.backgroundImage = 'url(planet.jpg)';
    verificador = setInterval(() => {
        tWidth -= 600 / 4000;
        timer.style.width = `${tWidth}px`;

        if (tWidth <= 0) {
            clearInterval(verificador);
        }
    });
    final = setInterval(() => {
        if (tWidth <= 0) {
            res1.style.backgroundColor = 'green';
            res1.removeEventListener('click', check18);
            res2.removeEventListener('click', check28);
            res3.removeEventListener('click', check38);
            res4.removeEventListener('click', check48);
            clearInterval(final);
        }
    });
    res1.innerText = 'A) Júpiter ';
    res2.innerText = 'B) Marte ';
    res3.innerText = 'C) Netuno';
    res4.innerText = 'D) Terra';

    function check18() {
        res1.style.backgroundColor = 'green';
        score += 10;
        scoreTxt.innerText = score;
        res1.removeEventListener('click', check18);
        res2.removeEventListener('click', check28);
        res3.removeEventListener('click', check38);
        res4.removeEventListener('click', check48);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check28() {
        res2.style.backgroundColor = 'red';
        res1.style.backgroundColor = 'green';
        res1.removeEventListener('click', check18);
        res2.removeEventListener('click', check28);
        res3.removeEventListener('click', check38);
        res4.removeEventListener('click', check48);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check38() {
        res3.style.backgroundColor = 'red';
        res1.style.backgroundColor = 'green';
        res1.removeEventListener('click', check18);
        res2.removeEventListener('click', check28);
        res3.removeEventListener('click', check38);
        res4.removeEventListener('click', check48);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check48() {
        res4.style.backgroundColor = 'red';
        res1.style.backgroundColor = 'green';
        res1.removeEventListener('click', check18);
        res2.removeEventListener('click', check28);
        res3.removeEventListener('click', check38);
        res4.removeEventListener('click', check48);
        clearInterval(final);
        clearInterval(verificador);
    }

    res1.addEventListener('click', check18);
    res2.addEventListener('click', check28);
    res3.addEventListener('click', check38);
    res4.addEventListener('click', check48);
}

function q9() {
    tWidth = 280;
    timer.style.width = `${tWidth}px`;
    document.querySelectorAll('.btns').forEach(item => {
        item.style.backgroundColor = 'white';
    });
    pergunta.innerText = 'Que tipo de rocha se forma a partir do resfriamento do magma?';
    img.style.backgroundImage = 'url(rock.jpg)';
    verificador = setInterval(() => {
        tWidth -= 600 / 4000;
        timer.style.width = `${tWidth}px`;

        if (tWidth <= 0) {
            clearInterval(verificador);
        }
    });
    final = setInterval(() => {
        if (tWidth <= 0) {
            res4.style.backgroundColor = 'green';
            res1.removeEventListener('click', check19);
            res2.removeEventListener('click', check29);
            res3.removeEventListener('click', check39);
            res4.removeEventListener('click', check49);
            clearInterval(final);
        }
    });
    res1.innerText = 'A) Sedimentar ';
    res2.innerText = 'B) Calcária ';
    res3.innerText = 'C) Metamórfica';
    res4.innerText = 'D) Ígnea ';

    function check19() {
        res1.style.backgroundColor = 'red';
        res4.style.backgroundColor = 'green';
        res1.removeEventListener('click', check19);
        res2.removeEventListener('click', check29);
        res3.removeEventListener('click', check39);
        res4.removeEventListener('click', check49);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check29() {
        res2.style.backgroundColor = 'red';
        res4.style.backgroundColor = 'green';
        res1.removeEventListener('click', check19);
        res2.removeEventListener('click', check29);
        res3.removeEventListener('click', check39);
        res4.removeEventListener('click', check49);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check39() {
        res3.style.backgroundColor = 'red';
        res4.style.backgroundColor = 'green';
        res1.removeEventListener('click', check19);
        res2.removeEventListener('click', check29);
        res3.removeEventListener('click', check39);
        res4.removeEventListener('click', check49);
        clearInterval(final);
        clearInterval(verificador);
    }

    function check49() {
        res4.style.backgroundColor = 'green';
        score += 10;
        scoreTxt.innerText = score;
        res1.removeEventListener('click', check19);
        res2.removeEventListener('click', check29);
        res3.removeEventListener('click', check39);
        res4.removeEventListener('click', check49);
        clearInterval(final);
        clearInterval(verificador);
    }

    res1.addEventListener('click', check19);
    res2.addEventListener('click', check29);
    res3.addEventListener('click', check39);
    res4.addEventListener('click', check49);
}

function q10() {
    tWidth = 280;
    timer.style.width = `${tWidth}px`;
    document.querySelectorAll('.btns').forEach(item => {
        item.style.backgroundColor = 'white';
    });
    pergunta.innerText = 'Você é um bebê?';
    img.style.backgroundImage = 'url(baby.jpg)';
    verificador = setInterval(() => {
        tWidth -= 600 / 4000;
        timer.style.width = `${tWidth}px`;

        if (tWidth <= 0) {
            clearInterval(verificador);
        }
    });
    final = setInterval(() => {
        if (tWidth <= 0) {
            res1.style.backgroundColor = 'green';
            res2.style.backgroundColor = 'green';
            res3.style.backgroundColor = 'green';
            res1.removeEventListener('click', check110);
            res2.removeEventListener('click', check210);
            res3.removeEventListener('click', check310);
            res4.removeEventListener('click', check410);
            finalizar.style.display = 'block';
            clearInterval(final);
        }
    });
    res1.innerText = 'A) Sim ';
    res2.innerText = 'B) Sim ';
    res3.innerText = 'C) Sim';
    res4.innerText = 'D) Não';

    function check110() {
        res1.style.backgroundColor = 'green';
        res2.style.backgroundColor = 'green';
        res3.style.backgroundColor = 'green';
        score += 10;
        scoreTxt.innerText = score;
        res1.removeEventListener('click', check110);
        res2.removeEventListener('click', check210);
        res3.removeEventListener('click', check310);
        res4.removeEventListener('click', check410);
        clearInterval(verificador);
        finalizar.style.display = 'block';
    }

    function check210() {
        res1.style.backgroundColor = 'green';
        res2.style.backgroundColor = 'green';
        res3.style.backgroundColor = 'green';
        score += 10;
        scoreTxt.innerText = score;
        res1.removeEventListener('click', check110);
        res2.removeEventListener('click', check210);
        res3.removeEventListener('click', check310);
        res4.removeEventListener('click', check410);
        clearInterval(verificador);
        finalizar.style.display = 'block';
    }

    function check310() {
        res1.style.backgroundColor = 'green';
        res2.style.backgroundColor = 'green';
        res3.style.backgroundColor = 'green';
        score += 10;
        scoreTxt.innerText = score;
        res1.removeEventListener('click', check110);
        res2.removeEventListener('click', check210);
        res3.removeEventListener('click', check310);
        res4.removeEventListener('click', check410);
        clearInterval(verificador);
        finalizar.style.display = 'block';
    }

    function check410() {
        res4.style.backgroundColor = 'red';
        score = 0;
        scoreTxt.innerText = score;
        alert('Você vai perder todos os seus pontos...');
        res1.removeEventListener('click', check110);
        res2.removeEventListener('click', check210);
        res3.removeEventListener('click', check310);
        res4.removeEventListener('click', check410);
        clearInterval(verificador);
        finalizar.style.display = 'block';
    }

    res1.addEventListener('click', check110);
    res2.addEventListener('click', check210);
    res3.addEventListener('click', check310);
    res4.addEventListener('click', check410);
    finalizar.addEventListener('click', () => {
        document.querySelectorAll(".container").forEach(item => {
            item.style.display = 'none';
        });
        document.querySelectorAll(".avanc").forEach(item => {
            item.style.display = 'none';
        });
        scoreTexto.style.display = 'none';
        document.querySelectorAll(".endContainer").forEach(item => {
            item.style.display = 'grid';
        });
        document.getElementById("pontos").innerText = score;

        if (score == 100) {
            h2.innerText = 'Uau, arrasou!'
        } else if (score < 100 && score >= 50) {
            h2.innerText = 'Quase lá!';
        } else if (score < 50 && score > 0) {
            h2.innerText = 'Vamos lá, não desista! Podemos melhorar!';
        } else {
            h2.innerText = 'É, acho que você é um bebê...';
        }

        document.getElementById('reset').addEventListener('click', () => {
            window.location.reload();
        });
    });
}

startBtn.addEventListener('click', () => {
    q1();
    avançar.style.display = 'block';
});

avançar.addEventListener('click', () => {
    clearInterval(final);
    clearInterval(verificador);
    avançar.style.display = 'none';
    q2();
    avançar2.style.display = 'block';
});

avançar2.addEventListener('click', () => {
    clearInterval(final);
    clearInterval(verificador);
    avançar2.style.display = 'none';
    q3();
    avançar3.style.display = 'block';
});

avançar3.addEventListener('click', () => {
    clearInterval(final);
    clearInterval(verificador);
    avançar3.style.display = 'none';
    q4();
    avançar4.style.display = 'block';
});

avançar4.addEventListener('click', () => {
    clearInterval(final);
    clearInterval(verificador);
    avançar4.style.display = 'none';
    q5();
    avançar5.style.display = 'block';
});

avançar5.addEventListener('click', () => {
    clearInterval(final);
    clearInterval(verificador);
    avançar5.style.display = 'none';
    q6();
    avançar6.style.display = 'block';
});

avançar6.addEventListener('click', () => {
    clearInterval(final);
    clearInterval(verificador);
    avançar6.style.display = 'none';
    q7();
    avançar7.style.display = 'block';
});

avançar7.addEventListener('click', () => {
    clearInterval(final);
    clearInterval(verificador);
    avançar7.style.display = 'none';
    q8();
    avançar8.style.display = 'block';
});

avançar8.addEventListener('click', () => {
    clearInterval(final);
    clearInterval(verificador);
    avançar8.style.display = 'none';
    q9();
    avançar9.style.display = 'block';
});

avançar9.addEventListener('click', () => {
    clearInterval(final);
    clearInterval(verificador);
    avançar9.style.display = 'none';
    q10();
});