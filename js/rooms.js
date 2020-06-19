let imageSrc = "./src/img/png/cats_room/";
let imageSrc_1 = "./src/img/png/equipment/";

function addAvatar(unit) {
    let avatar = document.createElement('div');
    avatar.className = "result__room_img";
    let imageTag = document.createElement('img');

    imageTag.src = imageSrc + unit.image;

    avatar.appendChild(imageTag);

    return avatar;

}

function addIcons(imageName) {
    let avatar = document.createElement('img');
    avatar.className = "room_equip";
    avatar.src = imageSrc_1 + imageName;

    return avatar;

}



function generateRoom(room) {
    let roomCard = document.createElement('div');
    roomCard.className = "result__room";

    roomCard.appendChild(addAvatar(room));

    let roomResult = document.createElement('div');
    roomResult.className = "result__room_body";

    let roomtitle = document.createElement('div');
    roomtitle.className = "result__room_title";
    roomtitle.innerHTML = room.name;

    roomResult.appendChild(roomtitle);

    let roomtext_1 = document.createElement('div');
    roomtext_1.className = "result__room_text";
    roomtext_1.innerHTML = room.size;

    roomResult.appendChild(roomtext_1);

    let roomtext_2 = document.createElement('div');
    roomtext_2.className = "result__room_text";
    roomtext_2.innerHTML = room.square;

    roomResult.appendChild(roomtext_2);

    let roomtext_5 = document.createElement('div');
    roomtext_5.className = "result__room_equip";

    let roomtext_5_1 = document.createElement('div');
    roomtext_5_1.className = "result__room_text";
    roomtext_5_1.innerHTML = "Оснащение номера";

    let roomtext_5_2 = document.createElement('div');
    roomtext_5_2.className = "room_equip__content";

    let rommEq = room.equipment;

    for (let i = 0; i < rommEq.length; i++) {

        roomtext_5_2.appendChild(addIcons(rommEq[i]));
    }


    roomtext_5.appendChild(roomtext_5_1);
    roomtext_5.appendChild(roomtext_5_2);


    roomResult.appendChild(roomtext_5);

    let roomtext_3 = document.createElement('div');
    roomtext_3.className = "result__room_equip";

    let roomtext_3_1 = document.createElement('div');
    roomtext_3_1.className = "result__room_text";
    roomtext_3_1.innerHTML = "Цена за сутки:";

    let roomtext_3_2 = document.createElement('div');
    roomtext_3_2.className = "result__room_price";
    roomtext_3_2.innerHTML = room.price + '₽';

    roomtext_3.appendChild(roomtext_3_1);
    roomtext_3.appendChild(roomtext_3_2);


    roomResult.appendChild(roomtext_3);





    let roomtext_4 = document.createElement('div');
    roomtext_4.className = "room__button";

    let roomtext_4_1 = document.createElement('div');
    roomtext_4_1.className = "room__button-text";
    roomtext_4_1.innerHTML = "Забронировать";

    let roomtext_4_2 = document.createElement('div');
    roomtext_4_2.className = "room__button-paw";
    roomtext_4_2.innerHTML = '<img src="./src/img/png/paw_reverse.png" alt="">';

    roomtext_4.appendChild(roomtext_4_1);
    roomtext_4.appendChild(roomtext_4_2);

    roomResult.appendChild(roomtext_4);
    roomCard.appendChild(roomResult);

    return roomCard;
}

function getRoomFromArrayById(rooms, id) {
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].id == id) {
            return rooms[i];
        }
    }
}

function sortRooms(rooms, sortBy = 'area', orderInd = 'ASC') {
    let sortedArray = [];

    let idArray = [];
    for (let i in rooms) {
        idArray.push(rooms[i].id);
    }

    if (rooms.length > 0) {
        let maxId;
        let maxRoom;

        for (let i = 0; i < idArray.length; i++) {
            maxId = i;
            maxRoom = getRoomFromArrayById(rooms, idArray[i]);

            for (let j = (i + 1); j < idArray.length; j++) {
                let maxRoomNew = getRoomFromArrayById(rooms, idArray[j]);
                if (orderInd == 'DESC') {
                    if (maxRoomNew.area > maxRoom.area && sortBy == 'area') {
                        maxId = j;
                        maxRoom = maxRoomNew;
                    }
                    if (maxRoomNew.price > maxRoom.price && sortBy == 'price') {
                        maxId = j;
                        maxRoom = maxRoomNew;
                    }
                }
                if (orderInd == 'ASC') {
                    if (maxRoomNew.area < maxRoom.area && sortBy == 'area') {
                        maxId = j;
                        maxRoom = maxRoomNew;
                    }
                    if (maxRoomNew.price < maxRoom.price && sortBy == 'price') {
                        maxId = j;
                        maxRoom = maxRoomNew;
                    }
                }
            }

            let temp = idArray[i];
            idArray[i] = idArray[maxId];
            idArray[maxId] = temp;

            sortedArray.push(maxRoom);
        }

    }


    return sortedArray;
}
/*
let element = document.getElementById("searching__result_content");
let sortedInput = input;//sortRooms(input, 'area', 'ASC');

for (let i = 0; i < sortedInput.length; i++) {

    element.appendChild(generateRoom(sortedInput[i]));
}*/