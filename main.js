// variáveis dos contadores
var session_seconds = "00";
var session_minutes = 25;

var shortbreak_seconds = "00";
var shortbreak_minutes = 5;

var longbreak_seconds = "00";
var longbreak_minutes = 10;

// arquivos de áudio
var click_sound = new Audio("click.mp3");
var bell = new Audio("bell.mp3");

// começando o timer
function template_timer() {
    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;
}

function start_timer() {
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
    click_sound.play();

    // troca os valores de minutos e segundos para iniciar o timer
    session_minutes = 24;
    session_seconds = 59;

    // adiciona os minutos e segundos na página
    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;

    // começa a contagem
    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);

    // Funções
    // contador de minutos (timer)
    function minutesTimer() {
        session_minutes = session_minutes - 1;
        document.getElementById("minutes").innerHTML = session_minutes;
    }

    // contador de segundos (timer)
    function secondsTimer() {
        session_seconds = session_seconds - 1;
        document.getElementById("seconds").innerHTML = session_seconds;

        // checagem para verificar se os minutos e segundos chegaram no valor 0
        // se chegou em 0, então termine a contagem
        if (session_seconds <= 0) {
            if (session_minutes <= 0) {
                // para o timer (limpa os contadores)
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                // adiciona uma mensagem ao html
                document.getElementById("done").innerHTML =
                    "Tarefa finalizada! Faça uma pausa! :)";

                // torna visível a div da mensagem
                document.getElementById("done").classList.add("show_message");

                // emite um sinal sonoro que indica o fim da contagem
                bell.play();
            }

            // reseta os segundos do timer para 60
            session_seconds = 60;
        }
    }
}

// começando a pausa curta
function template_short() {
    document.getElementById("minutes").innerHTML = shortbreak_minutes;
    document.getElementById("seconds").innerHTML = shortbreak_seconds;
}

function short_break() {
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
    click_sound.play();

    // troca os valores de minutos e segundos para iniciar o timer
    shortbreak_minutes = 4;
    shortbreak_seconds = 59;

    // adiciona os minutos e segundos na página
    document.getElementById("minutes").innerHTML = shortbreak_minutes;
    document.getElementById("seconds").innerHTML = shortbreak_seconds;

    // começa a contagem
    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);

    // Funções
    // contador de minutos (pausa curta)
    function minutesTimer() {
        shortbreak_minutes = shortbreak_minutes - 1;
        document.getElementById("minutes").innerHTML = shortbreak_minutes;
    }

    // contador de segundos (pausa curta)
    function secondsTimer() {
        shortbreak_seconds = shortbreak_seconds - 1;
        document.getElementById("seconds").innerHTML = shortbreak_seconds;

        // checagem para verificar se os minutos e segundos chegaram no valor 0
        // se chegou em 0, então termine a contagem
        if (shortbreak_seconds <= 0) {
            if (shortbreak_minutes <= 0) {
                // para o timer (limpa os contadores)
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                // adiciona uma mensagem ao html
                document.getElementById("done").innerHTML =
                    "Sua pausa curta chegou ao fim! Podemos voltar ao trabalho! :)";

                // torna visível a div da mensagem
                document.getElementById("done").classList.add("show_message");

                // emite um sinal sonoro que indica o fim da contagem
                bell.play();
            }

            // reseta os segundos do timer para 60
            shortbreak_seconds = 60;
        }
    }
}

// começando a pausa longa  
function template_long() {
    document.getElementById("minutes").innerHTML = longbreak_minutes;
    document.getElementById("seconds").innerHTML = longbreak_seconds;
}
function long_break() {
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
    click_sound.play();

    // troca os valores de minutos e segundos para iniciar o timer
    longbreak_minutes = 9;
    longbreak_seconds = 59;

    // adiciona os minutos e segundos na página
    document.getElementById("minutes").innerHTML = longbreak_minutes;
    document.getElementById("seconds").innerHTML = longbreak_seconds;

    // começa a contagem
    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);

    // Funções
    // contador de minutos (pausa longa)
    function minutesTimer() {
        longbreak_minutes = longbreak_minutes - 1;
        document.getElementById("minutes").innerHTML = longbreak_minutes;
    }

    // contador de segundos (pausa longa)
    function secondsTimer() {
        longbreak_seconds = longbreak_seconds - 1;
        document.getElementById("seconds").innerHTML = longbreak_seconds;

        // checagem para verificar se os minutos e segundos chegaram no valor 0
        // se chegou em 0, então termine a contagem
        if (longbreak_seconds <= 0) {
            if (longbreak_minutes <= 0) {
                // para o timer (limpa os contadores)
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                // adiciona uma mensagem ao html
                document.getElementById("done").innerHTML =
                    "Sua pausa longa chegou ao fim! Podemos voltar ao trabalho! :)";

                // torna visível a div da mensagem
                document.getElementById("done").classList.add("show_message");

                // emite um sinal sonoro que indica o fim da contagem
                bell.play();
            }

            // reseta os segundos do timer para 60
            longbreak_seconds = 60;
        }
    }
}