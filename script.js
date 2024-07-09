function animateBall() {
    anime({
        targets: '.circle',
        keyframes: [
            /*
            {duration: 3200},
            {translateY: 100, duration: 500}, // 3700
            {translateY: 200, translateX: 50, duration: 500},
            {translateY: 300, translateX: 100, duration: 500},
            {translateY: 400, translateX: 120, duration: 500},
            {duration: 4200}, // 9,400
            */
            ////
            {translateY: 400, translateX: 120, duration: 0},
            {duration: 100},
            {translateY: 420, translateX: 100, duration: 300}, // moving away when big triangle pushes door open // TIME: 9700 MS
            {duration: 2900}, // triangles are fighting // TIME: 12,600 MS
            {translateY: 320, translateX: 200, duration: 800}, // going towards door // 13,400
            {translateY: 300, translateX: 220, duration: 200},
            {translateY: 300, translateX: 290, duration: 500}, // TIME: 14,100 MS
            {duration: 500}, // pause
            {translateY: 330, translateX: 290, duration: 250}, // TIME: 14,850 MS // beginning to close door and hide
            {translateY: 270, translateX: 350, duration: 800}, // closing the door TIME: 15,650 MS
            {duration: 3650}, // TIME: 19,300 MS
            {translateY: 265, translateX: 320, duration: 200}, // 19,500
            {duration: 200}, //19,700
            /*
            {duration: 1600}, // TIME: 21,300
            {translateY: 300, translateX: 270, duration: 300}, // TIME: 21,600 MS // approaching triangles as they attack each other
            {translateY: 400, duration: 300}, // TIME: 21,900 MS
            {duration: 100}, // pauses for a sec // 22,000
            {translateY: 300, translateX: 270, duration: 150}, // running back to behind door
            {translateY: 265, translateX: 320, duration: 100}, // TIME: 22,250 MS
            {duration: 1000}, // 23,250
            {translateY: 270, translateX: 350, duration: 100},
            {translateY: 310, translateX: 360, duration: 100}, // TIME: 23,450
            {duration: 200},
            {translateX: 415, duration: 400}, // TIME: 24,050 MS
            {duration: 6000}, // TIME: 30,050
            {translateY: 500, translateX: 600, duration: 500},
            {translateY: 530, translateX: 500, duration: 150}, // kinda freaking out //
            {translateY: 550, translateX: 600, duration: 150}, // 30,850
            {duration: 500}, // TIME: 31,350
            {translateY: 575, translateX: 615, duration: 250}, // moving to corner
            {duration: 200},
            {translateY: 660, translateX: 630, duration: 300}, // TIME: 32,100
            {duration: 7000}, // 39,100
            {translateY: 600, translateX: 580, duration: 500}, //
            {duration: 300}, // 39,900
            {translateY: 660, translateX: 500, duration: 500}, // spinning in circles
            {translateY: 620, translateX: 450, duration: 200}, // 40,600
            {translateY: 580, translateX: 500, duration: 150}, // 
            {translateY: 590, translateX: 530, duration: 150},
            {translateY: 570, translateX: 570, duration: 150},
            {translateY: 550, translateX: 630, duration: 150},
            {translateY: 500, translateX: 630, duration: 150},
            {translateY: 500, translateX: 560, duration: 150},
            {translateY: 550, translateX: 530, duration: 150},
            {translateY: 590, translateX: 530, duration: 150},
            {translateY: 620, translateX: 450, duration: 150},
            {translateY: 660, translateX: 500, duration: 150},
            {translateY: 590, translateX: 530, duration: 150},
            {translateY: 570, translateX: 570, duration: 150},
            {translateY: 550, translateX: 630, duration: 150},
            {translateY: 500, translateX: 630, duration: 150},
            {translateY: 500, translateX: 560, duration: 150},
            {translateY: 550, translateX: 530, duration: 150},
            {translateY: 590, translateX: 530, duration: 150},
            {translateY: 620, translateX: 450, duration: 150},
            {translateY: 660, translateX: 500, duration: 150},
            {translateY: 590, translateX: 530, duration: 150},
            {translateY: 570, translateX: 570, duration: 150}, // TIME: 43,750 // running around in circles
            {duration: 350}, // TIME: 44,100
            {translateY: 670, translateX: 640, duration: 150}, // getting spooked by larger triangle 
            {duration: 200}, // TIME: 44,450
            {translateY: 650, translateX: 610, duration: 500}, // moving up a bit TIME: 44,950
            {duration: 300}, 
            {translateX: 570, duration: 200}, 
            {translateX: 610, duration: 200}, // 45,650
            {duration: 750}, 
            {translateY: 670, translateX: 640, duration: 150}, // getting spooked by larger triangle again // 46,400
            {duration: 200}, // 46,550
            {translateX: 420, duration: 200}, // in bottom left corner of house // 46,750
            {duration: 100}, // 46,850
            {translateY: 670, translateX: 640, duration: 200}, // in bottom right corner of house 47,050
            {duration: 100}, // 47,150
            {translateY: 300, duration: 200}, //47,550
            {duration: 550}, // 48,100
            {translateX: 360, duration: 150}, // darting out of door // 48,250
            {translateY: 250, translateX: 340, duration: 100}, // 48,350
            {translateX: 300, duration: 50}, // 48,400
            {translateY: 330, duration: 100}, // 48,500
            {duration: 200}, // 48,800
            {translateX: 150, duration: 300},
            {translateY: 300, duration: 200}, 
            {duration: 200}, // 49,500
            {translateX: 100, translateY: 325, duration: 200}, // moving in circles
            {translateX: 100, translateY: 400, duration: 200},
            {translateX: 190, duration: 200},
            {translateY: 325, duration: 200},
            {translateX: 100, duration: 200},
            {translateX: 100, translateY: 400, duration: 200},
            {translateX: 190, duration: 200},
            {translateY: 325, duration: 200},
            {translateX: 100, duration: 200}, // 51,300
            {duration: 300}, // 51,600
            {translateY: 342, duration: 200},
            {duration: 100},
            {translateX: 30, translateY: 350, duration: 200}, // 52,100
            {duration: 700},
            {translateX: 350, translateY: 800, duration: 150}, // running to side of house // 
            {duration: 300},
            {translateX: 600, duration: 80}, // running away
            {duration: 200},
            {translateX: 700, translateY: 730, duration: 20}, // 53,550
            {translateX: 730, translateY: 230, duration: 250}, // running up right side of house
            {translateX: 350, duration: 250},
            {translateX: 230, translateY: 300, duration: 50},
            {translateY: 740, duration: 250},
            {translateX: 380, duration: 50}, // 54,400
            {duration: 2300}, // big triangle going into house
            {translateX: 600, duration: 80},
            {translateX: 700, translateY: 730, duration: 20}, 
            {translateX: 730, translateY: 230, duration: 250}, // running up right side of house
            {translateX: 400, duration: 250},
            {translateX: 350, duration: 300},
            {duration: 200},
            {translateY: 0, translateX: 260, duration: 300},
            */
        ],
        easing: 'linear',
    });
}

function animateSmallTriangle() {
    anime({
        targets: '.smallTriangleWrapper',
        keyframes: [
            /*
            {duration: 3200},
            {translateY: 100, duration: 500},
            {translateY: 200, translateX: 50, duration: 500},
            {translateY: 300, translateX: 100, duration: 500}, // ROTATION #1
            {translateY: 400, translateX: 120, duration: 500},
            {translateY: 430, translateX: 150, duration: 300}, // beginning to rotate around circle
            {translateY: 600, translateX: 100, duration: 500}, // ROTATION #2
            {translateY: 600, translateX: 135, duration: 500}, // ROTATION #3 // 6500
            {translateY: 420, translateX: -100, duration: 1000}, // 7500
            {translateY: 300, translateX: 70, duration: 1000}, // triangle next to circle on left // ROTATION #4 // 8500
            {translateY: 280, translateX: 160, duration: 500}, // 9000
            {translateY: 250, translateX: 200, duration: 300}, // triangle is at the 'door' of the rectangle // TIME: 9300 MS // ROTATION #5
            */
           ////
            {translateY: 250, translateX: 200, duration: 0},
            {translateY: 200, translateX: 180, duration: 200}, // triangle moving away from big triangle as door opens
            {translateY: 200, translateX: 120, duration: 200},
            {translateY: 280, translateX: 100, duration: 200}, // TIME: 9900 MS // getting attacked by big triangle
            {translateY: 300, translateX: 0, duration: 300}, // rebound from attack // 10,200
            {duration: 200}, // wait after rebound // 10,400
            {translateY: 275, translateX: 95, duration: 150}, // attacking big triangle // 10,550
            {translateY: 270, translateX: 30, duration: 150}, // rebounding // 10,700
            {translateY: 275, translateX: 95, duration: 150}, // attacking big triangle second time // 10,850
            {translateY: 270, translateX: 20, duration: 150}, // rebounding // 11,000
            {translateY: 270, translateX: 100, duration: 150}, // attacking big triangle third time // 11,150
            {translateY: 300, translateX: 10, duration: 150}, // rebounding // 11,300
            {duration: 500}, // waiting for big triangle response // 11,800
            {duration: 1400}, // big triangle attacking it // TIME: 13,200 MS
            {translateY: 350, translateX: -80, duration: 200}, // rebound from attack // TIME: 13,400 MS
            {duration: 450}, // 13,850
            {translateY: 500, duration: 200}, // rebound from attack // TIME: 14,050 MS
            {duration: 400}, // wait after rebound // 14,450
            {translateY: 420, duration: 800}, // re-approaching big triangle // TIME: 15,250 MS
            {duration: 1300}, // pause // TIME: 16,550 MS
            {translateY: 400, duration: 300}, // re-approaching big triangle a little more // TIME: 16,850 MS
            {duration: 500}, // getting attacked by big triangle // TIME: 17,350 MS
            {translateY: 600, translateX: -100, duration: 200}, // rebounding
            {translateX: 0, duration: 400}, //rebounding // TIME: 17, 950 MS
            {duration: 100}, // 
            {translateY: 500, duration: 200}, // attacking big triangle
            {translateY: 600, duration: 200}, // rebounding // 18,450
            {translateY: 570, translateX: 50, duration: 200}, // moving after rebounding // TIME: 18,650 MS
            {duration: 200}, // getting attacked by big triangle
            {translateY: 620, translateX: 100, duration: 150}, // rebound // TIME:19,000 MS
            {duration: 200}, // getting attacked
            {translateY: 640, translateX: 220, duration: 200}, // rebound from attack // 
            {translateY: 650, translateX: 230, duration: 300}, // rebounding/wiggling // 19,700
            /*
            {duration: 150}, 
            {translateX: 313, duration: 100}, // rebound from attack // TIME: 19,950 MS
            {duration: 2500}, // getting attacked // 22,450
            {translateX: 300, duration: 350}, // moving after attack towards side of house // TIME: 22,800 MS
            {translateY: 700, duration: 350}, // moving toward side of house 
            {translateY: 750, duration: 350},  // 23,500
            {translateX: 360, translateY: 735, duration: 250}, // TIME: 23,750
            {duration: 4000}, // big triangle is moving around, small triangle is hiding behind house 27,750
            {translateX: 400, duration: 300}, // moving away from big triangle // TIME: 28,050
            {duration: 100},
            {translateX: 520, duration: 300}, // moving away from big triangle again // TIME: 28,450
            {duration: 1300}, //29,750
            {translateX: 340, duration: 1500}, // moving back towards front of house // TIME: 31,250 MS
            {translateX: 320, duration: 200}, // TIME: 31,450
            {duration: 4000}, // waiting // TIME: 35,450
            {translateY: 690, translateX: 313, duration: 900}, // TIME: 36,350
            {duration: 1500}, // 37,850
            {translateY: 550, duration: 1800}, // moving up toward door // TIME: 39,650
            {translateY: 350, translateX: 280, duration: 2000}, // TIME: 41,650
            {translateY: 315, translateX: 290, duration: 500}, // TIME: 42,150
            {duration: 2500}, // 44,650
            {translateX: 230, duration: 500},
            {duration: 400}, // 45,550
            {translateY: 280, duration: 500}, // moving into doorway  TIME: 46,050
            {translateX: 290, translateY: 280, duration: 600}, //46,650
            {duration: 1450}, // 48,100
            {translateX: 280, translateY: 250, duration: 50}, //
            {translateX: 240, translateY: 390, duration: 100},//48,250
            {duration: 100}, // 48,350
            {translateX: 295, duration: 100}, // closing door (locking big triangle inside)
            {duration: 100}, 
            {translateX: 240, translateY: 400, duration: 100},
            {duration: 150}, // 48,800
            {translateX: 110, duration: 300},
            {translateY: 430, duration: 200},
            {duration: 200}, // 49,500
            {translateX: 135, translateY: 405, duration: 200}, // moving in circles
            {translateX: 135, translateY: 330, duration: 200},
            {translateX: 30, duration: 200},
            {translateY: 405, duration: 200},
            {translateX: 135, duration: 200},
            {translateX: 135, translateY: 330, duration: 200},
            {translateX: 30, duration: 200},
            {translateY: 405, duration: 200}, // 51,300
            {duration: 300},
            {translateY: 390, duration: 200},
            {duration: 100}, // 51,900
            {translateY: 450, duration: 100}, // 52,000
            {duration: 100},
            {translateX: -100, duration: 200},
            {translateY: 300, duration: 200},
            {translateX: 50, duration: 200}, // 52,700
            {duration: 100},
            {translateX: 350, translateY: 800, duration: 150}, // running to side of house //
            {duration: 300},
            {translateX: 650, duration: 80}, // running away
            {duration: 200},
            {translateX: 650, translateY: 700, duration: 20}, // 53,550
            {translateY: 200, duration: 250}, // running up right side of house
            {translateX: 250, duration: 250},
            {translateX: 180, translateY: 360, duration: 50},
            {translateY: 780, translateX: 200, duration: 250},
            {translateX: 380, duration: 50}, // 54,400
            {duration: 2300}, // big triangle going inside house
            {translateX: 650, duration: 80}, // running away
            {translateX: 650, translateY: 700, duration: 20}, 
            {translateY: 200, duration: 250}, // running up right side of house
            {translateX: 300, duration: 250},
            {translateX: 230, duration: 300},
            {duration: 200},
            {translateY: 0, translateX: 180, duration: 350},
            */
        ],
        easing: 'linear',
    });
}

function rotateSmallTriangle() {
    anime({
        targets: '.smallTriangle',
        keyframes: [
            /*
            {duration: 4200},
            {rotateZ: -20, duration: 500}, // #1
            {duration: 800}, // beginning to rotate around circle // TIME: 5500 MS
            {rotateZ: 60, duration: 500}, // #2
            {rotateZ: 30, duration: 500}, // #3
            {duration: 1000},
            {rotateZ: 80, duration: 1000}, // triangle next to circle on left // #4 // TIME: 8500 MS
            {duration: 500},
            */
            ///////
            {rotateZ: 0, duration: 0}, // triangle is at the 'door' of the rectangle
            /////
            {duration: 500},
            {duration: 500},
            {rotateZ: 20, duration: 200}, // attacking big triangle // #5
            {rotateZ: 30, duration: 100}, // TIME: 10, 600 MS
            {duration: 2700}, // waiting for big triangle response
            {rotateZ: 10, duration: 100}, // rebounding from big triangle attack // TIME: 13,300 MS
            {duration: 350},
            {rotateZ: 0, duration: 100}, // rebound after big triangle attack // TIME: 13, 750 MS
            {duration: 3600}, // TIME: 17,350
            {rotateZ: -70, duration: 400}, // TIME: 17,750
            {duration: 1350},
            {rotateZ: -50, duration: 200},
            {rotateZ: -75, duration: 200}, // TIME: 19,500 MS
            {duration: 100},
            {rotateZ: -30, duration: 100}, // 19,700
            /*
            {duration: 2500}, // TIME: 22,200
            {rotateZ: -40, duration: 100}, // going toward side of house
            {duration: 100},
            {rotateZ: -35, duration: 100}, // TIME: 22,500
            {duration: 200},
            {rotateZ: -90, duration: 100}, // at side of house
            {duration: 550},
            {rotateZ: -120, duration: 100}, // side of house against wall // TIME: 23,450
            {duration: 8400}, // 31,850
            {rotateZ: -80, duration: 150}, // 32,000
            {duration: 3150},
            {rotateZ: -30, duration: 400}, // 35,550
            {duration: 4000}, // 39550
            {rotateZ: -10, duration: 2000}, // 41550
            {rotateZ: 30, duration: 500}, // 42050
            {duration: 3700}, // 45,750
            {rotateZ: 80, duration: 200}, // 45,950
            {duration: 2000}, // 
            {rotateZ: 30, duration: 100},
            {duration: 200},
            {rotateZ: 10, duration: 100}, // 48,350
            {duration: 4000}, // 52,350
            {rotateZ: 50, duration: 150},
            */
        ],
        easing: 'linear',
    });
}

function animateBigTriangle() {
    anime({
        targets: '.bigTriangleWrapper',
        keyframes: [
            /*
            {translateX: -50, duration: 500},
            {translateX: -65, duration: 300}, // ROTATION #1
            {translateX: 30, duration: 1000}, // closing the door // 1800
            {translateX: 80, translateY: 200, duration: 800}, // 2600
            {translateX: 50, translateY: 300, duration: 500}, // ROTATION #2
            {duration: 4000}, // 7100
            {translateX: 200, translateY: 200, duration: 100}, // ROTATION #3
            {duration: 800}, // 8000
            {translateX: 100, translateY: 100, duration: 100}, 
            {duration: 200},
            {translateX: 150, translateY: 50, duration: 100},
            {translateX: -20, translateY: -40, duration: 400}, // opening the door again // ROTATION #4 // 8800
            {duration: 500}, // TIME: 9300 MS
            */
            ////
            {translateX: -20, translateY: -40, duration: 0},
            {translateX: -80, translateY: -80, duration: 200}, // exiting door towards small triangle
            {translateX: -100, translateY: -170, duration: 200}, // preparing to attack small triangle // ROTATION #5
            {translateX: -200, translateY: -110, duration: 200}, // attacking small triangle // TIME: 9900 MS
            {duration: 1400}, // small triangle attacking it
            {duration: 1500}, //shaking head // 12,800
            {translateX: -170, translateY: -130, duration: 200}, // winding up to attack small triangle
            {translateX: -300, translateY: -110, duration: 200}, // attacking small triangle // TIME: 13,200 MS
            {translateX: -350, translateY: -150, duration: 250}, // rebounding
            {duration: 200}, // waiting to attack again // 13650
            {translateX: -400, translateY: -70, duration: 200}, // attacking small triangle again 
            {duration: 2850}, // waiting period // TIME: 16,700 MS
            {translateY: -120, duration: 450}, // moving away from small triangle in order to attack again // 17150
            {translateX: -420, translateY: -20, duration: 200}, // attacking again // 
            {duration: 200}, // waiting // TIME: 17,550
            {translateX: -400, translateY: 100, duration: 300}, // moving toward small triangle // 
            {duration: 900}, // getting attacked by small triangle // TIME: 18,750 MS
            {translateX: -350, translateY: 180, duration: 150}, // attacking small triangle // TIME: 18,900
            {translateX: -400, translateY: 200, duration: 150}, // moving back to attack again // TIME: 19,050 MS
            {translateX: -325, translateY: 230, duration: 100}, // attacking small triangle again // TIME: 19,150 MS
            {duration: 150},
            {translateX: -300, translateY: 280, duration: 300}, // preparing to attack again // TIME: 19,600 MS
            {duration: 100}, // 19,700
            /*
            {duration: 50}, 
            {translateX: -190, translateY: 290, duration: 100}, // attacking again // TIME: 19,850 MS
            {duration: 200},
            {translateX: -250, duration: 600}, // backing up to attack // TIME: 20,650
            {translateX: -100, duration: 100}, // attacking again - small triangle against wall
            {translateX: -200, translateY: 350, duration: 600}, // backing up to attack again // TIME: 21,350 MS
            {translateX: -100, translateY: 320, duration: 100}, // attacking again - small triangle against wall
            {translateX: -220, translateY: 270, duration: 600}, // backing up to attack again // TIME: 22,050 MS
            {translateX: -100, translateY: 275, duration: 100}, // attacking again - small triangle against wall 
            {translateX: -220, translateY: 270, duration: 500}, // backing up // TIME: 22,650
            {duration: 400},
            {translateX: -170, translateY: 300, duration: 150}, // TIME: 23,200
            {duration: 500},
            {translateX: -400, translateY: 75, duration: 600}, // TIME: 24, 300 MS
            {duration: 300}, // TIME: 24,600
            {translateY: 350, duration: 500}, // TIME: 25,100 
            {duration: 500},
            {translateX: -420, translateY: 60, duration: 600}, // TIME: 26,200 MS // moving up and down, small triangle is behind house
            {duration: 500},
            {translateY: 420, duration: 500}, // 27,200
            {duration: 300},
            {translateX: -200, duration: 250},  // TIME: 27,750 // moving toward small triangle
            {duration: 500},
            {translateX: -50, duration: 200}, // moving toward small triangle again // 28,450 MS
            {duration: 750}, // TIME: 29,200
            {translateX: -200, translateY: 300, duration: 200}, // going toward door
            {translateX: -230, translateY: 150, duration: 200},
            {duration: 200}, // 29,800
            {translateX: -85, translateY: -50, duration: 250}, // TIME: 30,050 // opening door
            {duration: 100}, 
            {translateX: -145, duration: 800}, // opening door // TIME: 30,950
            {duration: 200},
            {translateX: -140, translateY: -90, duration: 200},
            {translateX: -90, translateY: -80, duration: 200}, // TIME: 31,550
            {duration: 800}, // waiting // TIME: 32,350
            {translateX: -120, translateY: -60, duration: 400}, // pushing door open more
            {duration: 200}, // TIME: 32,950
            {translateX: -90, translateY: -80, duration: 200}, // entering door
            {translateX: -30, translateY: 0, duration: 900}, // entering door more
            {translateX: 0, translateY: 30, duration: 900}, // entering door more // TIME: 34,950
            {translateX: -45, duration: 500}, // closing door // TIME: 35,450
            {duration: 200}, // pause // TIME: 35,650
            {translateX: 10, duration: 500}, // closing door // 
            {duration: 500},
            {translateX: 40, translateY: 40, duration: 500}, // moving toward circle // TIME: 37,150
            {duration: 7000}, // 44,150
            {translateX: 50, translateY: 90, duration: 50}, // spooking small circle // 44,200
            {duration: 300}, // 44,500
            {translateX: 70, translateY: 70, duration: 200}, // moving left and right 
            {translateX: 30, duration: 200}, // moving left and right 44,900
            {translateX: 70, duration: 200}, // moving left and right //45,100
            {duration: 1250}, // 46,350
            {translateX: 50, translateY: 120, duration: 100}, // spooking small circle again //46,450
            {duration: 100}, // 46,550
            {translateX: 100, translateY: 180, duration: 100}, // advancing toward small circle in corner // 46,650
            {duration: 250}, // 46,800
            {translateX: 60, duration: 150}, // advancing toward circle again // TIME: 46,950
            {duration: 150}, // 47,100
            {translateX: 110, translateY: 220, duration: 100}, // spooking again
            {duration: 100},
            {translateX: 130, translateY: 100, duration: 700}, // approaching circle slowly // 48,000
            {duration: 50},
            {translateX: 140, translateY: 30, duration: 100}, // 48,150
            {duration: 150},
            {translateX: 0, duration: 200}, // banging into door 1
            {duration: 200},
            {translateX: 100, duration: 300}, // rebound // 49,000
            {duration: 300},
            {translateX: 0, duration: 200}, // 49,500 // banging into door 2
            {duration: 100},
            {translateX: 80, duration: 200}, //rebound
            {duration: 300}, // 50,100
            {translateX: 0, translateY: 0, duration: 100}, // banging into door 3 // 
            {duration: 100},
            {translateX: 90, duration: 200}, // rebound
            {duration: 300}, // 50,800
            {translateX: 0, translateY: -50, duration: 100}, // banging into door 4 // 50,900
            {duration: 900}, // 51,800
            {translateX: -100, translateY: -70, duration: 300}, // 52,100
            {duration: 200},
            {translateX: -180, translateY: -90, duration: 200}, // 52,450
            {duration: 400}, // 52,850
            {translateY: 400, duration: 350}, // 53,200 // chasing circle and triangle around house
            {translateX: 310, duration: 350}, // 
            {translateY: -150, duration: 350}, // 53,900
            {translateX: -100, duration: 250}, // 54,150
            {translateX: -250, translateY: 0, duration: 100},
            {duration: 300}, // 54,550
            {translateX: -180, translateY: -100, duration: 200}, // 54,750 // dipping into door
            {translateX: -110, duration: 200}, // 
            {translateX: -30, translateY: 0, duration: 200}, // 55,150
            {duration: 600},
            {translateX: -40, duration: 200},
            {translateX: -180, translateY: -100, duration: 300}, // 56,250
            {translateX: -200, duration: 50},
            {duration: 400}, // 56,700
            {translateX: -100, translateY: 400, duration: 350}, // running toward bottom of house
            {duration: 400}, // pausing
            {translateX: 310, translateY: 430, duration: 400}, // running under house // 57,850
            {duration: 100}, 
            {translateY: -150, duration: 450}, // 
            {translateX: -100, duration: 400}, // 58,650
            {translateX: -250, translateY: 0, duration: 200},
            {duration: 300},
            {translateX: -290, translateY: 80, duration: 100},
            {duration: 100},
            {translateX: -350, duration: 100}, // getting all mad
            {duration: 100},
            {translateX: -270, translateY: -30, duration: 100}, // 59,650
            {duration: 1000},
            {translateX: -320, translateY: 50, duration: 100},
            {duration: 100},
            {translateX: -250, duration: 100},
            {duration: 100},
            {translateX: -320, duration: 100},
            {duration: 100},
            {translateX: -270, translateY: -30, duration: 100}, // 
            {duration: 200},
            {translateX: -200, translateY: 50, duration: 200}, 
            {translateX: -150, translateY: 30, duration: 50}, // 61,850 // slamming door
            {duration: 500},
            {translateX: -80, translateY: 10, duration: 200},
            {duration: 200}, // 62,750
            {translateX: -150, translateY: 70, duration: 400}, // re-opening door
            {duration: 100},
            {translateX: -200, translateY: 100, duration: 100},
            {duration: 200},
            {translateX: -150, translateY: 70, duration: 100}, // 63,650 // slamming door shut again
            {duration: 500}, // 64,150
            {translateX: -80, translateY: 10, duration: 100}, // breaking door
            {translateX: 150, translateY: 30, duration: 200},
            {duration: 500},
            {translateY: -45, duration: 50}, // breaking wall
            {duration: 300},
            {translateX: 45, duration: 50}, // pushing door piece
            {duration: 100},
            {translateX: 60, duration: 100}, // rebound
            {duration: 200},
            {translateY: -110, duration: 50}, // pushing left wall
            {duration: 100},
            {translateX: 100, translateY: -50, duration: 100}, // rebound
            {translateX: 130, translateY: -95, duration: 50}, // pushing right wall
            */
        ],
        easing: 'linear',
    });
}

function rotateBigTriangle() {
    anime({
        targets: '.bigTriangle',
        keyframes: [
            /*
            {duration: 500},
            {rotateZ: 30, duration: 300}, // #1
            {duration: 1000}, // closing the door
            {duration: 800},
            {rotateZ: 0, duration: 500}, // #2
            {duration: 4000},
            {rotateZ: 10, duration: 100}, // #3
            {duration: 800},
            {duration: 100},
            {duration: 200},
            {duration: 100},
            {rotateZ: 80, duration: 400}, // opening the door again // #4 //8800
            {duration: 500}, // going through door more // 9300
            */

            {rotateZ: 80, duration: 0},
            {duration: 300},

            {rotateZ: 10, duration: 200}, // #5 // TIME: 9800
            {duration: 1550}, // small triangle attacking big triangle
            {rotateZ: -10, duration: 300}, // big triangle "shaking head"
            {rotateZ: 15, duration: 300}, // big triangle "shaking head"
            {rotateZ: -8, duration: 300}, // big triangle "shaking head"
            {rotateZ: 10, duration: 300}, // big triangle "shaking head"
            {rotateZ: 0, duration: 300}, // big triangle "shaking head" // TIME: 12,850
            {duration: 600},
            {rotateZ: -20, duration: 100}, // rotating head to attack small triangle // TIME: 13,550
            {duration: 500},
            {rotateZ: -40, duration: 100}, // TIME: 14,150 MS
            {duration: 3200}, 
            {rotateZ: -60, duration: 100}, // TIME: 17, 450 MS
            {duration: 1000},
            {rotateZ: -80, duration: 100}, // TIME: 18,550 MS
            {duration: 250},
            {rotateZ: -120, duration: 100}, // TIME: 18,900 MS
            {duration: 400},
            {rotateZ: -150, duration: 100}, // TIME: 19,400 MS
            {duration: 300}, // 19,700
            /*
            {duration: 200},
            {rotateZ: -155, duration: 100},
            {rotateZ: -145, duration: 100},
            {rotateZ: -150, duration: 100}, // TIME: 20,200 MS
            {duration: 1000},
            {rotateZ: -170, duration: 200}, // TIME: 21,400 MS
            {duration: 350},
            {rotateZ: -140, duration: 100}, // TIME: 21,850 MS
            {duration: 1050},
            {rotateZ: -110, duration: 100}, // TIME: 23,000
            {duration: 1700},
            {rotateZ: -130, duration: 200}, // TIME: 24,900
            {duration: 2000},
            {rotateZ: -140, duration: 250}, // TIME: 27,150
            {duration: 700},
            {rotateZ: -150, duration: 100}, // TIME: 27,950
            {duration: 300},
            {rotateZ: -170, duration: 150},
            {rotateZ: -140, duration: 150},
            {rotateZ: -170, duration: 150},
            {rotateZ: -140, duration: 150},
            {rotateZ: -170, duration: 150}, // TIME: 29,000
            {duration: 500},
            {rotateZ: -140, duration: 100}, // TIME: 29,600
            {duration: 1400}, // TIME: 30,900
            {rotateZ: -100, duration: 200}, // 31,100
            {duration: 19000},
            {rotateZ: -50, duration: 100}, // 50,200
            {duration: 800}, // 51,000
            {rotateZ: -30, duration: 200}, 
            {rotateZ: -60, duration: 200},
            {rotateZ: -30, duration: 200},
            {rotateZ: -60, duration: 200}, // 51,800
            {duration: 500},
            {rotateZ: -100, duration: 200}, // 52,500
            {duration: 2700}, // 55,200
            {rotateZ: -120, duration: 50},
            {duration: 100},
            {rotateZ: -100, duration: 50},
            {duration: 100},
            {rotateZ: -120, duration: 50},
            {duration: 400}, // 55,950
            {rotateZ: -80, duration: 300}, // 56,250
            {duration: 1500},
            {rotateZ: -120, duration: 200}, // 57,950
            {duration: 2000}, // 59,850
            {rotateZ: 300, duration: 300},
            {duration: 4600},
            {rotateZ: 340, duration: 200},
            */
        ],
        easing: 'linear',
    });
}

function animateDoor() {
    anime({
        targets: '.door',
        keyframes: [
            /*
            {rotateZ: -45, translateX: -70, translateY: -20, duration: 0},
            {duration: 900},
            {rotateZ: 0, translateX: 0, translateY: 0, duration: 800}, // closing the door // 1700
            {duration: 7000}, // 8700
            {rotateZ: -10, translateX: -20, translateY: 0, duration: 200}, // opening the door // TIME: 8900 MS
            {rotateZ: -20, translateX: -30, translateY: 0, duration: 100}, // TIME: 9000 MS
            {duration: 300}, 
            */
            ////
            {rotateZ: -20, translateX: -30, translateY: 0, duration: 0},
            {rotateZ: -45, translateX: -70, translateY: -20, duration: 100}, // TIME: 9400 MS
            {duration: 5600}, // TIME: 15,000 MS
            {rotateZ: -20, translateX: -30, translateY: 0, duration: 700},
            {duration: 4000}, // 19,700
            /*
            {duration: 4150}, // TIME: 23,850
            {rotateZ: 0, translateX: 0, translateY: 0, duration: 300},
            {duration: 5800}, // TIME: 29,950
            {rotateZ: -20, translateX: -30, duration: 900}, // TIME: 30,850
            {duration: 1400}, // TIME: 32,250
            {rotateZ: -35, translateX: -55, translateY: -15, duration: 500}, // TIME: 32,750
            {duration: 3100}, // TIME: 35850
            {rotateZ: 0, translateX: 0, translateY: 0, duration: 500}, // TIME: 36,350
            {duration: 8400}, // 44,750
            {rotateZ: -20, translateX: -30, translateY: 0, duration: 700}, // small triangle opening door // 45, 450
            {duration: 2900}, // 48,350
            {rotateZ: 0, translateX: 0, duration: 80}, // 48,430
            {duration: 3370}, // 51,800
            {rotateZ: -10, translateX: -20, translateY: 0, duration: 200}, // big triangle opening door
            {rotateZ: -35, translateX: -55, translateY: -20, duration: 300}, // // 52,100
            {duration: 9850},
            {rotateZ: 0, translateX: 0, translateY: 0, duration: 80}, // big triangle slamming door shut
            {duration: 800}, // 
            {rotateZ: -45, translateX: -70, translateY: -20, duration: 300}, // big triangle opening door again
            {duration: 600},
            {rotateZ: 0, translateX: 0, translateY: 0, duration: 200},
            */
        ],
        easing: 'linear',
    });
}

animateBall(); // Start ball animation
animateSmallTriangle(); // Start small triangle animation
rotateSmallTriangle();
animateBigTriangle(); // Start big triangle animation
rotateBigTriangle();
animateDoor(); // Start door animation