let settings = [];
let roomsSet = [];

let setArea = [];

let sortDirection = 0;

let roomAreas = document.getElementsByClassName('roomArea');

function reloadSett() {
    settings = [];
    roomsSet = [];
    setArea = [];
    roomAreas = document.getElementsByClassName('roomArea');

    var checkBox = document.getElementsByClassName("checkbox__square");
    for(let i = 0; i < checkBox.length; i++) {
        checkBox[i].innerHTML = "";
    }

    for (let i = 0; i < roomAreas.length; i++) {
        setArea.push(true);
        checkMark(i);
    }


    for (let i = 0; i < roomAreas.length; i++) {
        let newSrt = roomAreas[i].innerHTML;
        newSrt = newSrt.replace(' м2', '');
        newSrt = newSrt.replace(',', '.');

        settings.push(newSrt);
        if (setArea[i]) {

            for (let j = 0; j < input.length; j++) {
                if (input[j].area == newSrt) {
                    roomsSet.push(input[j]);
                    break;
                }
            }
        }
    }

    if (sortDirection == 0 || sortDirection == 1) {
        roomsSet = sortRooms(roomsSet, 'area', 'ASC');
    }
    if (sortDirection == 2) {
        roomsSet = sortRooms(roomsSet, 'area', 'DESC');
    }
    if (sortDirection == 3) {
        roomsSet = sortRooms(roomsSet, 'price', 'ASC');
    }
    if (sortDirection == 4) {
        roomsSet = sortRooms(roomsSet, 'price', 'DESC');
    }

    //console.log(sortDirection);

    var element1 = document.getElementById("searching__result_content");
    element1.innerHTML = "";

    for (let i = 0; i < roomsSet.length; i++) {

        element1.appendChild(generateRoom(roomsSet[i]));
    }
}

function setSettings() {
    roomsSet = [];
    for (let i = 0; i < roomAreas.length; i++) {
        if (setArea[i]) {
            for (let j = 0; j < input.length; j++) {
                if (input[j].area == settings[i]) {
                    roomsSet.push(input[j]);
                    break;
                }
            }
        }
    }
    
    if (sortDirection == 0 || sortDirection == 1) {
        roomsSet = sortRooms(roomsSet, 'area', 'ASC');
    }
    if (sortDirection == 2) {
        roomsSet = sortRooms(roomsSet, 'area', 'DESC');
    }
    if (sortDirection == 3) {
        roomsSet = sortRooms(roomsSet, 'price', 'ASC');
    }
    if (sortDirection == 4) {
        roomsSet = sortRooms(roomsSet, 'price', 'DESC');
    }

    element1.innerHTML = "";

    for (let i = 0; i < roomsSet.length; i++) {

        element1.appendChild(generateRoom(roomsSet[i]));
    }
}

function checkMark(id) {
    var checkBox = document.getElementsByClassName("checkbox__square");
    var curCheck = checkBox[id];

    if (curCheck.innerHTML == "") {
        let avatar = document.createElement('img');
        avatar.className = "checkbox_check";
        avatar.src = "./src/img/png/check.png";

        curCheck.appendChild(avatar);

    } else {
        curCheck.innerHTML = "";
    }

}

function settingsArea(id) {
    if (setArea[id]) {
        setArea[id] = false;
    } else {
        setArea[id] = true;

    }
    checkMark(id);
    setSettings();
}

reloadSett();

function isEquiped(room, equipment){
  var roomEquip = room.equipment;

  for(let i = 0; i < roomEquip.length; i++){
      if(roomEquip[i] == equipment){
          console.log(equipment);
          return true;
      }
  }

  return false;
}


var yay = isEquiped(roomsSet[0],"empty.png");