let settings = [];
let roomsSet = [];
let settEquip = ["empty.png", "bed.png", "claw.png", "games.png", "house.png"];

let setArea = [];

let sortDirection = 0;

let roomAreas = document.getElementsByClassName('roomArea');
let roomEquips = document.getElementsByClassName('roomEquip');

let priceRange = [];




function reloadSett() {
    settings = [];
    roomsSet = [];
    setArea = [];
    roomAreas = document.getElementsByClassName('roomArea');
    roomEquips = document.getElementsByClassName('roomEquip');

    document.getElementById("from").value = "";
    document.getElementById("from").placeholder = "от 100";
    document.getElementById("to").value = "";
    document.getElementById("to").placeholder = "до 600";
    priceRange = [100, 600];


    var checkBox = document.getElementsByClassName("checkbox__square");
    for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].innerHTML = "";
    }

    for (let i = 0; i < (roomAreas.length + roomEquips.length); i++) {
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


function isEquiped(room, equipment) {
    var roomEquip = room.equipment;

    for (let i = 0; i < roomEquip.length; i++) {
        if (roomEquip[i] == equipment) {

            return true;
        }
    }

    return false;
}

function isRoomInArray(roomArray, room) {

    for (let i = 0; i < roomArray.length; i++) {
        if (roomArray[i].id == room.id) {
            return true;
        }
    }

    return false;
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

    var roomsEq = [];
    for (let i = roomAreas.length; i < setArea.length; i++) {
        if (setArea[i]) {
            for (let j = 0; j < input.length; j++) {
                if (isEquiped(input[j], settEquip[i - roomAreas.length])) {
                    roomsEq.push(input[j]);
                }
            }

        }
    }


    var roomAll = [];

    for (let i = 0; i < roomsSet.length; i++) {

        for (let j = 0; j < roomsEq.length; j++) {

            if (roomsSet[i].id == roomsEq[j].id &&
                roomsEq[j].price >= priceRange[0] &&
                roomsEq[j].price <= priceRange[1]) {

                roomAll.push(roomsEq[j]);
                break;
            }
        }
    }

    roomsSet = [];
    roomsSet = roomAll;

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

    //console.log(curCheck.innerHTML);

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

function settingsEquip(equipment, id) {
    if (setArea[id]) {
        setArea[id] = false;
    } else {
        setArea[id] = true;

    }
    checkMark(id);
    setSettings();
}

function priceFilter(id) {

    if ((id == 0 && Number.parseInt(document.getElementsByClassName("setting__input")[id].value) < priceRange[1]) ||
        (id == 1 && Number.parseInt(document.getElementsByClassName("setting__input")[id].value) > priceRange[0])) {
        priceRange[id] = Number.parseInt(document.getElementsByClassName("setting__input")[id].value);
        document.getElementById("wrong_input").innerHTML = "";

    } else {
        if (id == 0) {
            document.getElementsByClassName("setting__input")[id].value = priceRange[1];
            priceRange[0] =priceRange[1];
        } else {
            document.getElementsByClassName("setting__input")[id].value = priceRange[0];
            priceRange[1] =priceRange[0]; 
        }
    }
    setSettings();
}



reloadSett();