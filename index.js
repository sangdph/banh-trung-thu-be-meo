const moonCakes = [
  {
    id: 0,
    img: "banh-trung-thu-0.png",
    name: "Bánh trung thu nhân đậu xanh",
  },
  {
    id: 1,
    img: "banh-trung-thu-1.png",
    name: "Bánh trung thu nhân đậu đỏ",
  },
  {
    id: 2,
    img: "banh-trung-thu-2.png",
    name: "Bánh trung thu nhân khoai môn hạt sen",
  },
  {
    id: 3,
    img: "banh-trung-thu-3.png",
    name: "Bánh trung thu nhân thập cẩm",
  },
  {
    id: 4,
    img: "banh-trung-thu-4.png",
    name: "Bánh trung thu dẻo",
  },
  {
    id: 5,
    img: "banh-trung-thu-5.jpg",
    name: "Bánh trung thu chay",
  },
  {
    id: 6,
    img: "banh-trung-thu-6.jpg",
    name: "Bánh trung thu coconut",
  },
  {
    id: 7,
    img: "banh-trung-thu-7.jpg",
    name: "Bánh trung si cu la",
  },
  {
    id: 8,
    img: "banh-trung-thu-8.jpg",
    name: "Bánh trung thu mè đen",
  },
];

const brands = [
  {
    id: 0,
    name: "Kinh Đô",
  },
  {
    id: 1,
    name: "Như Lan",
  },
  {
    id: 2,
    name: "Đồng Khánh",
  },
  {
    id: 3,
    name: "Người iu làm",
  },
  {
    id: 4,
    name: "Starbucks",
  },
  {
    id: 5,
    name: "Cùng ngiu làm",
  },
  {
    id: 6,
    name: "Phúc Long",
  },
  {
    id: 7,
    name: "Em gái làm",
  },
  {
    id: 8,
    name: "Bạn thân làm",
  },
  {
    id: 9,
    name: "Cùng ngiu làm",
  },
  {
    id: 10,
    name: "Calisa",
  },
  {
    id: 11,
    name: "Đứa bạn ghét tặng",
  },
  {
    id: 12,
    name: "Cùng ngiu làm",
  },
  {
    id: 13,
    name: "Tự làm, tự ăn",
  },
];

const types = [
  "1 trứng",
  "2 trứng",
  "Hong có cái trứng nào =)))",
  "Phủ vàng 24k",
  "Chứa 100% tình yêu",
  "Chứa 3 bần bất lực 7 phần nuông chiều",
  "Ăn một miếng hạnh phúc đời",
  "Ăn một miêng đang ế thoát ế",
  "Ăn một miếng ngiu chở đi chơi",
  "Ăn một miếng ngiu mua trà sữa cho uống",
  "Ăn một miếng ngiu chở đi ăn",
  "Ăn một miếng ngiu chở đi mua đồ",
  "Ăn một miếng tự nhiên trúng số",
];

const wishs = [
    "Chú cuội và chị Hằng chúc các bạn lúc nào cũng cảm thấy dui dẻ và hạnh phúc bên người mình yêu",
    "Chú cuội và chị Hằng chúc các bạn sớm trúng vé số, trúng rồi nhớ chia chú Cuội và chị Hằng dới nha",
    "Chú cuội và chị Hằng chúc các bạn ăn bánh trung thu ngon miệng, càng ăn càng đẹp, càng ăn càng may mắn",
    "Chú cuội và chị Hằng chúc các bạn tăng 5kg sau mùa trung thu, chúc bạn được ngiu chở đi mua nhiều đồ mới mà hong cần phải đợi tới Tết",
    "Chú cuội và chị Hằng chúc các bạn ăn bánh trung thu ngon miệng, hết mùa trung thu được mua đồ mới ",
    "Chú cuội và chị Hằng chúc bạn và ngiu hết mùa trung thu vẫn mặc dừa đồ, dù có ăn bao nhiêu dáng dẫn đẹp",
    "Chú cuội và chị Hằng chúc các bạn đang ế cắn nhẹ bánh trung thu cái tự nhiên Crush tỏ tình, mấy bạn có ngiu thì được iu cưng hơn nữa",
    "Chú cuội và chị Hằng chúc các bạn học kì sau hong làm mà dẫn có ăn, deadline hong cần chạy là tự xong",
    "Chú cuội và chị Hằng chúc các bạn hạnh phúc bên gia đình và ngiu",
    "Chú cuội và chị Hằng chúc các bạn đang ế cắn nhẹ bánh trung thu cái tự nhiên Crush tỏ tình, mấy bạn có ngiu thì được iu chở đi chơi, chở đi ăn",
    "Chú cuội và chị Hằng chúc các bạn đang ế cắn nhẹ bánh trung thu cái tự nhiên Crush tỏ tình, mấy bạn có ngiu thì được iu chở đi ăn, chở đi nhảy đầm",
    "Chú cuội và chị Hằng chúc các bạn đang ế cắn nhẹ bánh trung thu cái tự nhiên Crush tỏ tình, mấy bạn có ngiu thì được iu chở đi mua đồ, chở đi ăn",
    "Chú cuội và chị Hằng chúc các bạn đang ế cắn nhẹ bánh trung thu cái tự nhiên Crush tỏ tình, mấy bạn có ngiu thì được iu chở đi nhậu, chở đi quẩy",
];

const musics = [
    {
        id: 1,
        srcMucic: 'noel-ve.mp3',
    },{
        id: 2,
        srcMucic: 'cau-hon.mp3',
    },{
        id: 3,
        srcMucic: 'noi-nay-co-anh.mp3',
    },{
        id: 4,
        srcMucic: 'em-la-hoang-hon.mp3',
    }
]

document.addEventListener('click', loadMusic);
function loadMusic (){
    var randomMusic = Math.floor(Math.random()*4);
      var audio = document.querySelector('.my-audio');
  audio.outerHTML = `<audio style='display:none' controls autoplay>
        <source src="./assets/${musics[randomMusic].srcMucic}" type="audio/ogg">
        </audio>`;
}

function randomBanhTrungThu() {
  var html = document.querySelector(".containt-moon-cake");
  var btn = document.querySelector('.btn-random');
  btn.outerHTML = `<button class='btn-random' style="cursor: not-allowed;">Bắt đầu</button>`;
  console.log(btn);
  var timeRandom = 1000 * (Math.ceil(Math.random() * 3) + 15);
  console.log(timeRandom);
  //random
  var intervalID = setInterval(function () {
    var randomMoonCake = Math.floor(Math.random() * 9);
    var randomBrand = Math.floor(Math.random() * 14);
    var randomType = Math.floor(Math.random() * types.length);
    var randomWish = Math.floor(Math.random()*wishs.length);

    console.log(randomMoonCake, randomType, randomBrand);
    html.innerHTML = `
        <img class="img-moon-cake" src="./assets/${moonCakes[randomMoonCake].img}"/>
        <div class="content">
                <h1>Tên: </h1>${moonCakes[randomMoonCake].name}
                <h1>Loại bánh: </h1> ${types[randomType]}
                <h1>Thương hiệu: </h1>${brands[randomBrand].name}
                <h1>Lời chúc của chú Cuội và chị Hằng: </h1> ${wishs[randomWish]}
        </div>
        `;
  }, 100);

  // intervalID;
  //stop
  setTimeout(function () {
    var btnn = document.querySelector('.btn-random');
    btnn.outerHTML = `<button class='btn-random' onclick="randomBanhTrungThu()">Bắt đầu</button>`;
    clearInterval(intervalID);
  }, timeRandom);
  
}
