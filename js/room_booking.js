    //console.log(window.location.hash.substr(1));

    let catId = window.location.hash.substr(1);
    let mainCat = getRoomFromArrayById(input, catId);

    function translateEquip(equip) {
        if ("empty.png" == equip) {
            return "Пустая комната";
        }
        if ("bed.png" == equip) {
            return "Лежак";
        }
        if ("claw.png" == equip) {
            return "Когтеточка";
        }
        if ("games.png" == equip) {
            return "Игровой комплекс - 3 яруса";
        }
        if ("house.png" == equip) {
            return "Домик";
        }

    }

    function addEquipRow(equip) {

        let roomEquip = document.createElement('div');
        roomEquip.className = "result__room_equip";

        let avatar = document.createElement('img');
        avatar.className = "room_equip";
        avatar.src = imageSrc_1 + equip;

        roomEquip.appendChild(avatar);

        let equipText = document.createElement('div');
        equipText.className = "result__room_text";
        equipText.innerHTML = translateEquip(equip);

        roomEquip.appendChild(equipText);

        return roomEquip;

    }

    function generateBookingRoom(room) {

        let roomResult = document.getElementById("main_room_text");
        roomResult.innerHTML = '';

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
        roomtext_5.className = "result__room_text";
        roomtext_5.innerHTML = "Оснащение номера";

        roomResult.appendChild(roomtext_5);

        let rommEq = room.equipment;

        for (let i = 0; i < rommEq.length; i++) {

            roomResult.appendChild(addEquipRow(rommEq[i]));
        }


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
    }


    generateBookingRoom(mainCat);