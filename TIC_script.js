var visited = 0;
let box = document.getElementsByClassName('box');
let check = true;
function winning() {
    if (((box[0].innerHTML === "X") && (box[1].innerHTML === "X") && (box[2].innerHTML === "X")) || ((box[0].innerHTML === "○") && (box[1].innerHTML === "○") && (box[2].innerHTML === "○"))) {
        let array = [0, 1, 2];
        for (i in array) {
            box[array[i]].animate([
                { fontSize: 'initial' },
                { fontSize: '8vw', color: 'purple', offset: 0.25 },
                { fontSize: '10vw', color: 'purple', offset: 0.5 },
                { fontSize: '8vw', color: 'purple', offset: 0.75 },
                { fontSize: '10vw', color: 'purple' }
            ], {
                duration: 1000
            });
        }
        setTimeout(restart, 2000);

    }
    else if (((box[0].innerHTML === "X") && (box[3].innerHTML === "X") && (box[6].innerHTML === "X")) || ((box[0].innerHTML === "○") && (box[3].innerHTML === "○") && (box[6].innerHTML === "○"))) {
        let array = [0, 3, 6];
        for (i in array) {
            box[array[i]].animate([
                { fontSize: 'initial' },
                { fontSize: '8vw', color: 'purple', offset: 0.25 },
                { fontSize: '10vw', color: 'purple', offset: 0.5 },
                { fontSize: '8vw', color: 'purple', offset: 0.75 },
                { fontSize: '10vw', color: 'purple' }
            ], {
                duration: 1000
            });
        }
        setTimeout(restart, 1000);
    }
    else if (((box[0].innerHTML === "X") && (box[4].innerHTML === "X") && (box[8].innerHTML === "X")) || ((box[0].innerHTML === "○") && (box[4].innerHTML === "○") && (box[8].innerHTML === "○"))) {
        let array = [0, 4, 8];
        for (i in array) {
            box[array[i]].animate([
                { fontSize: 'initial' },
                { fontSize: '8vw', color: 'purple', offset: 0.25 },
                { fontSize: '10vw', color: 'purple', offset: 0.5 },
                { fontSize: '8vw', color: 'purple', offset: 0.75 },
                { fontSize: '10vw', color: 'purple' }
            ], {
                duration: 1000
            });
        }
        setTimeout(restart, 1000);
    }
    else if (((box[1].innerHTML === "X") && (box[4].innerHTML === "X") && (box[7].innerHTML === "X")) || ((box[1].innerHTML === "○") && (box[4].innerHTML === "○") && (box[7].innerHTML === "○"))) {
        let array = [1, 4, 7];
        for (i in array) {
            box[array[i]].animate([
                { fontSize: 'initial' },
                { fontSize: '8vw', color: 'purple', offset: 0.25 },
                { fontSize: '10vw', color: 'purple', offset: 0.5 },
                { fontSize: '8vw', color: 'purple', offset: 0.75 },
                { fontSize: '10vw', color: 'purple' }
            ], {
                duration: 1000
            });
        }
        setTimeout(restart, 1000);
    }
    else if (((box[2].innerHTML === "X") && (box[5].innerHTML === "X") && (box[8].innerHTML === "X")) || ((box[2].innerHTML === "○") && (box[5].innerHTML === "○") && (box[8].innerHTML === "○"))) {
        let array = [2, 5, 8];
        for (i in array) {
            box[array[i]].animate([
                { fontSize: 'initial' },
                { fontSize: '8vw', color: 'purple', offset: 0.25 },
                { fontSize: '10vw', color: 'purple', offset: 0.5 },
                { fontSize: '8vw', color: 'purple', offset: 0.75 },
                { fontSize: '10vw', color: 'purple' }
            ], {
                duration: 1000
            });
        }

        setTimeout(restart, 1000);
    }
    else if (((box[2].innerHTML === "X") && (box[4].innerHTML === "X") && (box[6].innerHTML === "X")) || ((box[2].innerHTML === "○") && (box[4].innerHTML === "○") && (box[6].innerHTML === "○"))) {
        let array = [2, 4, 6];
        for (i in array) {
            box[array[i]].animate([
                { fontSize: 'initial' },
                { fontSize: '8vw', color: 'purple', offset: 0.25 },
                { fontSize: '10vw', color: 'purple', offset: 0.5 },
                { fontSize: '8vw', color: 'purple', offset: 0.75 },
                { fontSize: '10vw', color: 'purple' }
            ], {
                duration: 1000
            });
        }
        setTimeout(restart, 1000);
    }
    else if (((box[3].innerHTML === "X") && (box[4].innerHTML === "X") && (box[5].innerHTML === "X")) || ((box[3].innerHTML === "○") && (box[4].innerHTML === "○") && (box[5].innerHTML === "○"))) {
        let array = [3, 4, 5];
        for (i in array) {
            box[array[i]].animate([
                { fontSize: 'initial' },
                { fontSize: '8vw', color: 'purple', offset: 0.25 },
                { fontSize: '10vw', color: 'purple', offset: 0.5 },
                { fontSize: '8vw', color: 'purple', offset: 0.75 },
                { fontSize: '10vw', color: 'purple' }
            ], {
                duration: 1000
            });
        }
        setTimeout(restart, 1000);
    }
    else if (((box[6].innerHTML === "X") && (box[7].innerHTML === "X") && (box[8].innerHTML === "X")) || ((box[6].innerHTML === "○") && (box[7].innerHTML === "○") && (box[8].innerHTML === "○"))) {
        let array = [6, 7, 8];
        for (i in array) {
            box[array[i]].animate([
                { fontSize: 'initial' },
                { fontSize: '8vw', color: 'purple', offset: 0.25 },
                { fontSize: '10vw', color: 'purple', offset: 0.5 },
                { fontSize: '8vw', color: 'purple', offset: 0.75 },
                { fontSize: '10vw', color: 'purple' }
            ], {
                duration: 1000
            });
        }
        setTimeout(restart, 1000);
    }
}

function restart() {
    for (i = 0; i < 9; i++) {
        box[i].innerHTML = '';
    }
    visited = 0;
};


function Click(i) {
   
    if (check) {
        if (!(box[i].innerHTML == "X" || box[i].innerHTML == "○")) {
            box[i].innerHTML = "X";
            check = false;
            visited++;
        }

        winning();
    }
    else {
        if (!(box[i].innerHTML == "X" || box[i].innerHTML == "○")) {
            box[i].innerHTML = "○";
            check = true;
            visited++;
        }
        winning();
    }
    if (visited == 9) {
        setTimeout(restart, 500);
    }
};

