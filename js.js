
function changePicPos0() {
   let pos0= changePics(0);
}

function changePicPos1() {
    changePics(1);

}

function changePicPos2() {
    changePics(2);
    // checkResult();
}

function changePicPos3() {
    changePics(3);
    // checkResult();
}

function changePics(pos) {
    let temp = Math.floor(12 * Math.random());
    switch (temp) {
        case 0:
            document.getElementById('pos' + pos).src = "image/bear1.jpg";
            break;
        case 1:
            document.getElementById('pos' + pos).src = "image/cat1.jpg";
            break;
        case 2:
            document.getElementById('pos' + pos).src = "image/dog1.jpg";
            break;
        case 3:
            document.getElementById('pos' + pos).src = "image/bear2.jpg";
            break;
        case 4:
            document.getElementById('pos0').src = "image/cat2.jpg";
            break;
        case 5:
            document.getElementById('pos' + pos).src = "image/dog2.jpg";
            break;
        case 6:
            document.getElementById('pos' + pos).src = "image/bear3.jpg";
            break;
        case 7:
            document.getElementById('pos' + pos).src = "image/cat3.jpg";
            break;
        case 8:
            document.getElementById('pos' + pos).src = "image/dog3.jpg";
            break;
        case 9:
            document.getElementById('pos' + pos).src = "image/bear4.jpg";
            break;
        case 10:
            document.getElementById('pos' + pos).src = "image/cat4.jpg";
            break;
        case 11:
            document.getElementById('pos' + pos).src = "image/dog4.jpg";
            break;
    }
    return temp
}

// function check() {
//     let pos0 = changePics(0);
//     let pos1 = changePics(1);
//     let pos2 = changePics(2);
//     let pos3 = changePics(3);
// if(pos0===0&&pos1===3&&pos2===6&&pos3===9)alert("Bearrrr!!!!!");
//     // if(pos0==0&&pos1==3&&pos2==6&&pos3==9)alert ("Bearrrr!!!");
//     // if(pos0==0&&pos1==3&&pos2==6&&pos3==9)alert ("Bearrrr!!!");
//     // if(pos0==0&&pos1==3&&pos2==6&&pos3==9)alert ("Bearrrr!!!");
// }