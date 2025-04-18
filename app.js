let gameC = document.querySelector(".gameContainer")
let box = document.querySelectorAll("#box")
let msgc = document.querySelector(".msgc")
let msg = document.querySelector("#msg")
let container = document.querySelector(".container")
let resetb = document.querySelector("#resetb")
let restartG = document.querySelector("#restartG")
let pn1 = document.querySelector("#pn1")
let pn2 = document.querySelector("#pn2")
let divform = document.querySelector(".form")
// span
let s1 = document.querySelector("#s1")
let s2 = document.querySelector("#s2")
// h2
let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")

let sbt = document.querySelector("#sbt")

let count = 0
let turnO = true
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

box.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO == true) {
            box.innerText = "O";
            turnO = false
        } else {
            box.innerText = "X";
            turnO = true
        }
        box.disabled = true
        chekWinner();
        count++;
        if (count === 9 && box != "") {
            container.classList.add("hide")
            msgc.classList.remove("hide")
            msg.innerText = "DRAW"
        }
    })
})

const chekWinner = () => {
    for (const pattern of winPattern) {
        let val1 = box[pattern[0]].innerHTML;
        let val2 = box[pattern[1]].innerHTML;
        let val3 = box[pattern[2]].innerHTML;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 == val2 && val2 == val3) {
                if (val1 == "O" && val2 == "O" && val3 == "O") {
                    container.classList.add("hide")
                    msgc.classList.remove("hide")
                    msg.innerText = `Winner is ${pn1.value}`
                    for (const boxes of box) {
                        boxes.disabled = true;                     
                    }
                    count = 0;
                    turnO = true
                } else if (val1 == "X" && val2 == "X" && val3 == "X"){
                    container.classList.add("hide")
                    msgc.classList.remove("hide")
                    msg.innerText = `Winner is ${pn2.value}`
                    for (const boxes of box) {
                        boxes.disabled = true;
                    }
                    count = 0;
                    turnO = true
                }
            }
        }
    }
}

const resetGame = () => {
    box.forEach(box => {
        box.innerText = ""
        box.disabled = false
    })
    count = 0
}
function restartGame() {
    container.classList.add("hide")
    divform.style.display = "flex";
    box.forEach(box => {
        box.innerText = ""
        box.disabled = false
    })
    s1.innerText = "";
    s2.innerText = "";
    count = 0
}

function startgame() {
    checkinput();
    msgc.classList.add("hide");
    count = 0
}
function checkinput() {
    if (pn1.value != "" && pn2.value != "") {
        let pan1 = pn1.value;
        let pan2 = pn2.value;
        p1.innerText = ` O = ${pan1} `;
        p2.innerText = ` X = ${pan2} `;
        setTimeout(()=>{ container.classList.remove("hide");
        divform.style.display = "none";},1000)
       
    } if (pn1.value == "" && pn2.value == "") {
        s1.innerText = "*please fill out this field"
        s2.innerText = "*please fill out this field"
    } else if (pn1.value == "" && pn2.value != "") {
        s1.innerText = "*please fill out this field";
        s2.innerText = "";
    } else if (pn2.value == "" && pn1.value != "") {
        s2.innerText = "*please fill out this field"
        s1.innerText = "";
    }
}