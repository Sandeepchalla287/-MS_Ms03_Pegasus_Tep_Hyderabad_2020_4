//Selecting the Elements from box ID 
function getWinner() {
    var box1 = document.getElementById("box1"),
        box2 = document.getElementById("box2"),
        box3 = document.getElementById("box3"),
        box4 = document.getElementById("box4"),
        box5 = document.getElementById("box5"),
        box6 = document.getElementById("box6"),
        box7 = document.getElementById("box7"),
        box8 = document.getElementById("box8"),
        box9 = document.getElementById("box9"),
        win = document.getElementById("win");
        win1 = document.getElementById("win1");

// Selecting Winner from Possibities:
    if      (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
    { win.innerHTML = 'Win'; } 
    else if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) 
    { win.innerHTML = 'Win'; } 
    else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) 
    { win.innerHTML = 'Win'; } 
    else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) 
    { win.innerHTML = 'Win'; }
    else if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
    { win.innerHTML = 'Win'; }
    else if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
    { win.innerHTML = 'Win'; }
    else if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
    { win.innerHTML = 'Win'; }
    else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
    { win.innerHTML = 'Win'; }

}

var boxes = document.querySelectorAll("#table td"),X_or_O = 0;
// console.log(boxes);

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click",function() {
        if(this.innerHTML !== "X" && this.innerHTML !== "O") //Not clicking on the X and O again
    {
        if (X_or_O % 2 === 0) {
            // console.log(X_or_O);
            this.innerHTML = 'X'; // Setting the first player to 'X'
            getWinner();
            X_or_O++;
        } else {
            // console.log(X_or_O); // Setting the first player to 'O'
            this.innerHTML = 'O';
            getWinner();
            X_or_O++;
        }
    }
    })
}