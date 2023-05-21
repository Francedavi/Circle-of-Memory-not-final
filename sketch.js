console.log('Circle of Memory Project');

let icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19, icon20, icon21,icon22, icon23, icon24, icon25, icon26, icon27, icon28, icon29, icon30;
let bgm;

// ประกาศคำถามภายในเกม
let questions = [
  "Can you remember your childhood? \n How was it?",
  "How was your experience in high school? \n Did you have fun?",
  "How are your friends like? \n Are they nice to you?",
  "How is your work/job right now? \n Are you happy with it?",
  "How was your first time traveling far away? \n Where did you go?",
  "How was your first love/relationship ended? \n Have you moved on?",
  "How is your relationship with your family? \n Do they support you?",
  "How was your latest birthday like? \n Was it great?",
  "How was your journey of growing up? \n Was it hard and tiring?",
  "How do you think about yourself? \n Do you love who you are right now?"
]
let currentQuestion = -1 //ให้เริ่มที่ -1 เพื่อให้หน้าเริ่มเกมเงื่อนไข background เริ่มที่คำถามที่ -1 เมื่อกดเริ่มจะบวกไปอีก 1 จึงเริ่มคำถามที่ 0

function preload() {
    icon1 = loadImage('assets/1toy.png');
    icon2 = loadImage('assets/2teddy.png');
    icon3 = loadImage('assets/3plant.png');
    icon4 = loadImage('assets/4notebook.png');
    icon5 = loadImage('assets/5bagpack.png');
    icon6 = loadImage('assets/6headphone.png');
    icon7 = loadImage('assets/7snack.png');
    icon8 = loadImage('assets/8keychain.png');
    icon9 = loadImage('assets/9polaroid.png');
    icon10 = loadImage('assets/10handbag.png');
    icon11 = loadImage('assets/11computer.png');
    icon12 = loadImage('assets/12flashdrive.png');
    icon13 = loadImage('assets/13stamp.png');
    icon14 = loadImage('assets/14travelbag.png');
    icon15 = loadImage('assets/15map.png');
    icon16 = loadImage('assets/16envelope.png');
    icon17 = loadImage('assets/17ring.png');
    icon18 = loadImage('assets/18bouquet.png');
    icon19 = loadImage('assets/19fruit.png');
    icon20 = loadImage('assets/20cup.png'); 
    icon21 = loadImage('assets/21bento.png');
    icon22 = loadImage('assets/22present.png');
    icon23 = loadImage('assets/23cake.png');
    icon24 = loadImage('assets/24cupcake.png');
    icon25 = loadImage('assets/25black.png');
    icon26 = loadImage('assets/26white.png');
    icon27 = loadImage('assets/27red.png');
    icon28 = loadImage('assets/28clover.png');
    icon29 = loadImage('assets/29music.png');
    icon30 = loadImage('assets/30jigsaw.png'); 
    backgroundImg0 = loadImage('bg/background0.JPG');
    backgroundImg1 = loadImage('bg/background1.JPG');
    backgroundImg2 = loadImage('bg/background2.JPG');
    backgroundImg3 = loadImage('bg/background3.JPG');
    backgroundImg4 = loadImage('bg/background4.JPG');
    backgroundImg5 = loadImage('bg/background5.JPG');
    backgroundImg6 = loadImage('bg/background6.JPG');
    backgroundImg7 = loadImage('bg/background7.JPG');
    backgroundImg8 = loadImage('bg/background8.JPG');
    backgroundImg9 = loadImage('bg/background9.JPG');
    backgroundImg10 = loadImage('bg/background10.JPG');
    backgroundStart = loadImage('bg/backgroundStart.JPG');
    bgm = loadSound('bgm.mp3');
}

let tumbler, x, y, sides, len, angle;
let button;
let shareButton;
let startButton;
let reloadButton;

// ใส่ background music
function playSound(){
  bgm.play()
  bgm.loop()
}

function setup() {
	createCanvas(720, 1500);
	world.gravity.y = 10;
    playSound()
  
  
  // สร้างปุ่มเริ่มเกม
  let startButton = createButton('START');
  startButton.position(width/2-110, 1400);
  startButton.size(220, 70);
  startButton.style("font-family", "Poppins");
  startButton.style("font-size", "32px");
  startButton.style('background-color', 'white');
  startButton.mousePressed(startGame);
  startButton.addClass('hidden');
  
  // สร้างฟังก์ชันเริ่มเกม
  function startGame() {
  currentQuestion += 1
  startButton.style("display", "none"); 
  
  // สร้างปุ่ม the best
  button = createButton('the best :)');
  button.size(100, 40);
  button.style("font-family", "Poppins");
  button.style("font-size", "16px");
  button.style('background-color', '#a8e6cf');
  button.position(width/2 + 140, 720);
  button.mousePressed(function mousePressed() {
  
    currentQuestion += 1 //ถ้ากดแล้วจะบวกเพิ่ม 1 เพื่อไปยังคำถามถัดไป 
		let chance = int(1,30); 
        // ตั้งเงื่อนไขว่าเมื่อกดปุ่มจะมี sprite รูปต่าง ๆ drop ลงมาต่างกันในแต่ละข้อแล้วแต่คำถาม
		if (currentQuestion == 1) {
			sprite = new Sprite(icon1, mouseX, mouseY);
		} else if (currentQuestion == 2) {
			sprite = new Sprite(icon4, mouseX, mouseY);
		} else if (currentQuestion == 3) {
			sprite = new Sprite(icon7, mouseX, mouseY);
		} else if (currentQuestion == 4) {
			sprite = new Sprite(icon10, mouseX, mouseY);
		} else if (currentQuestion == 5) {
			sprite = new Sprite(icon13, mouseX, mouseY);
		} else if (currentQuestion == 6) {
			sprite = new Sprite(icon16, mouseX, mouseY);
		} else if (currentQuestion == 7) {
			sprite = new Sprite(icon19, mouseX, mouseY);
		} else if (currentQuestion == 8) {
			sprite = new Sprite(icon22, mouseX, mouseY);
		} else if (currentQuestion == 9) {
			sprite = new Sprite(icon25, mouseX, mouseY);
		} else if (currentQuestion == 10) {
			sprite = new Sprite(icon28, mouseX, mouseY);
		} 
  
	});
  
  
  // สร้างปุ่ม nothing special 
  button = createButton('nothing special :/')
  button.size(160, 40);
  button.style("font-family", "Poppins");
  button.style("font-size", "16px");
  button.style('background-color', '#ffeead');
  button.position(width/2 - 65, 720);
  button.mousePressed(function mousePressed() {
    
    currentQuestion += 1 //ถ้ากดแล้วจะบวกเพิ่ม 1 เพื่อไปยังคำถามถัดไป
		let chance = int(1,30); 
        // ตั้งเงื่อนไขว่าเมื่อกดปุ่มจะมี sprite รูปต่าง ๆ drop ลงมาต่างกันในแต่ละข้อแล้วแต่คำถาม
		if (currentQuestion == 1) {
			sprite = new Sprite(icon2, mouseX, mouseY);
		} else if (currentQuestion == 2) {
			sprite = new Sprite(icon5, mouseX, mouseY);
		} else if (currentQuestion == 3) {
			sprite = new Sprite(icon8, mouseX, mouseY);
		} else if (currentQuestion == 4) {
			sprite = new Sprite(icon11, mouseX, mouseY);
		} else if (currentQuestion == 5) {
			sprite = new Sprite(icon14, mouseX, mouseY);
		} else if (currentQuestion == 6) {
			sprite = new Sprite(icon17, mouseX, mouseY);
		} else if (currentQuestion == 7) {
			sprite = new Sprite(icon20, mouseX, mouseY);
		} else if (currentQuestion == 8) {
			sprite = new Sprite(icon23, mouseX, mouseY);
		} else if (currentQuestion == 9) {
			sprite = new Sprite(icon26, mouseX, mouseY);
		} else if (currentQuestion == 10) {
			sprite = new Sprite(icon29, mouseX, mouseY);
		} 
    
	});
  
  
  // สร้างปุ่ม the worst
  button = createButton('the worst :(')
  button.size(120, 40);
  button.style("font-family", "Poppins");
  button.style("font-size", "16px");
  button.style('background-color', '#ffaaa5');
  button.position(width/2 - 230, 720);
  button.mousePressed(function mousePressed() {
    
    currentQuestion += 1 //ถ้ากดแล้วจะบวกเพิ่ม 1 เพื่อไปยังคำถามถัดไป
		let chance = int(1,30); 
        // ตั้งเงื่อนไขว่าเมื่อกดปุ่มจะมี sprite รูปต่าง ๆ drop ลงมาต่างกันในแต่ละข้อแล้วแต่คำถาม
		if (currentQuestion == 1) {
			sprite = new Sprite(icon3, mouseX, mouseY);
		} else if (currentQuestion == 2) {
			sprite = new Sprite(icon6, mouseX, mouseY);
		} else if (currentQuestion == 3) {
			sprite = new Sprite(icon9, mouseX, mouseY);
		} else if (currentQuestion == 4) {
			sprite = new Sprite(icon12, mouseX, mouseY);
		} else if (currentQuestion == 5) {
			sprite = new Sprite(icon15, mouseX, mouseY);
		} else if (currentQuestion == 6) {
			sprite = new Sprite(icon18, mouseX, mouseY);
		} else if (currentQuestion == 7) {
			sprite = new Sprite(icon21, mouseX, mouseY);
		} else if (currentQuestion == 8) {
			sprite = new Sprite(icon24, mouseX, mouseY);
		} else if (currentQuestion == 9) {
			sprite = new Sprite(icon27, mouseX, mouseY);
		} else if (currentQuestion == 10) {
			sprite = new Sprite(icon30, mouseX, mouseY);
		} 
    
	});
  
    // สร้างวงกลมที่หมุนตลอดเพื่อรองรับ sprite ที่ถูก drop ลงมา  
	x = width * 0.5;
	y = height * 0.55;
	sides = 100;
	len = 640 / sides;
	angle = 360 / sides;
	let s = [len, angle, len, -angle, len, angle, sides];
	tumbler = new Sprite(x, y, s, 'kinematic');
	tumbler.rotationSpeed = 0.6;
  
    // สร้างปุ่มบันทึกรูปภาพหน้าจอเมื่อเกมจบ
    shareButton = createButton('share your circle')
    shareButton.style("display", "none");
    shareButton.mousePressed(saveNow);

    // สร้างปุ่มเริ่มใหม่เมื่อเกมจบ
    reloadButton = createButton('RESTART')
    reloadButton.style("display", "none");
    reloadButton.mousePressed(reloadPage);
  }
}

// ฟังก์ชันบันทึกรูปภาพหน้าจอ
function saveNow(){
  saveCanvas()
}

// ฟังก์ชันโหลดเพจใหม่
function reloadPage(){
  location.reload();
}

function draw() {   
  
  // สร้างเงื่อนไข if ในการแสดงภาพพื้นหลังให้สอดคล้องกับลำดับคำถาม  
  if(currentQuestion === -1){
     background(backgroundStart);
   } else if(currentQuestion === 0){
     background(backgroundImg0);
   } else if (currentQuestion === 1){
     background(backgroundImg1);
   } else if (currentQuestion === 2){
     background(backgroundImg2);
   } else if (currentQuestion === 3){
     background(backgroundImg3);
   } else if (currentQuestion === 4){
     background(backgroundImg4);
   } else if (currentQuestion === 5){
     background(backgroundImg5);
   } else if (currentQuestion === 6){
     background(backgroundImg6);
   } else if (currentQuestion === 7){
     background(backgroundImg7);
   } else if (currentQuestion === 8){
     background(backgroundImg8);
   } else if (currentQuestion === 9){
     background(backgroundImg9);
   } else if (currentQuestion >=10){
     background(backgroundImg10);
   }

    // สร้างเงื่อนไข if ในกรณีที่ถามครบ 10 คำถามแล้วจะแสดงปุ่ม share ขึ้นมา
    if (currentQuestion >= 10){
    shareButton.size(350, 82);
    shareButton.style("display", "block");
    shareButton.style("font-family", "Poppins");
    shareButton.style("font-size", "32px");
    shareButton.style('background-color', '#FFBDCA');
    shareButton.position(width/2-170, 1300);
    }
  
    // สร้างเงื่อนไข if ในกรณีที่ถามครบ 10 คำถามแล้วจะแสดงปุ่ม restart ขึ้นมา
    if (currentQuestion >= 10){
    reloadButton.size(180, 80);
    reloadButton.style("display", "block");
    reloadButton.style("font-family", "Poppins");
    reloadButton.style("font-size", "32px");
    reloadButton.style('background-color', 'white');
    reloadButton.position(width/2-90, 1400);
    }
  
  // สร้างเงื่อนไข if ว่าคำถามจะจบลงที่ 10 คำถาม
  if (currentQuestion >= 0 && currentQuestion <= 10 ) {
  text(questions[currentQuestion],360,385);
  textAlign(CENTER);
  textFont('Poppins');
  textSize(25)
  }
}