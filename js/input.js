let input = [{
        id: 1,
        name: "Эконом",
        image: "econom_cat.png",
        size: "Размеры (ШхГхВ) - 90х70х180 см",
        square: "Площадь - 0,63 м2",
        price: "100₽"

    },
    {
        id: 2,
        name: "Эконом плюс",
        image: "econom_plus_cat.png",
        size: "Размеры (ШхГхВ) - 90х100х180 см",
        square: "Площадь - 0,90 м2",
        price: "200₽"

    },
    {
        id: 3,
        name: "Комфорт",
        image: "comfort_cat.png",
        size: "Размеры (ШхГхВ) - 100х125х180 см",
        square: "Площадь - 1,13 м2",
        price: "250₽"


    },
    {
        id: 4,
        name: "Сьют",
        image: "suite_cat.png",
        size: "Размеры (ШхГхВ) - 125х125х180 см",
        square: "Площадь - 1,56 м2",
        price: "350₽"


    },
    {
        id: 5,
        name: "Люкс",
        image: "lux_cat.png",
        size: "Размеры (ШхГхВ) - 160х160х180 см",
        square: "Площадь - 2,56 м2",
        price: "500₽"


    },
    {
        id: 6,
        name: "Супер-Люкс",
        image: "super_lux_cat.png",
        size: "Размеры (ШхГхВ) - 180х160х180 см",
        square: "Площадь - 2,88 м2",
        price: "600₽"

    }
]

let imageSrc = "./src/img/png/cats_room/";

function addAvatar(unit) {
    let avatar = document.createElement('div');
    avatar.className = "result__room_img";
    let imageTag = document.createElement('img');

    imageTag.src = imageSrc + unit.image;

    avatar.appendChild(imageTag);

    return avatar;

}


function generateRoom(room) {
    let roomCard = document.createElement('div');
    roomCard.className = "result__room";

    roomCard.appendChild(addAvatar(room));
    return roomCard;
}

document.body.appendChild(generateRoom(input[0]));