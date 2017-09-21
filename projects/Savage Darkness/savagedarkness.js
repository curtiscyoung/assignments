var readline = require("readline-sync");
var mirrorShield = 0;
var shieldUpgrade = false;
var sword = 0;
var swordUpgrade = false;
var ancientSword = 0;
var magicSword = 0;
var doorkey = 1;
var boss = true;
var orc = 1;
var torch = 0;
var playerDead = false;
var location = "center";
var gorgonHead = 0;
var ogre = 1;
var nextLevel = 1;
var enemyLocation = "";
var mirrorKnight = 1;


function enemy() {
    var encounter = [1, 2, 3];
    var chance = encounter[Math.floor(Math.random() * encounter.length)];
    if (chance === 1) {
        enemyLocation = "hole";
    } else if (chance === 2) {
        enemyLocation = "stairs";
    } else {
        enemyLocation = "maze";
    }
    if (location === enemyLocation) {
        console.log("The enemy attacks you!!");
    }
}

function test() {
    var encounter = [1, 2, 3];
    var chance = encounter[Math.floor(Math.random() * encounter.length)];
    if (chance === 1) {
        currentEnemy = goblin;
    } else if (chance === 2) {
        currentEnemy = skeletonKnight;
    } else {
        currentEnemy = insanePrisoner;
    }
    console.log(currentEnemy);
}

///////BATTLE FUNCTIONS///////







//////////////////////////////


//Aj suggested having a "stalker" that follows you throught out the game.  have a function that runs a random number, and if lands on a certain value, it changes the "stalkerlocation" variable, and then run a function that checks the players location.  if they match, run a function where the player encounters the stalker.

///now that we know we can adjust values by checking strings inside of objects, let's make an equipped object, which represents what the character is wearing.  We'll make it so a character has to EQUIP a certain item before certain fights.  I'm thinking that we will have a hint or something that explains how it works later in the game, we won't really have it be relevant until you start getting different types of items.  We can have helmets and armor that increase stats, or weapons that unlock special attacks.  Just brainstorming.

var equipped = {
    head: "nothing",
    torso: "worn cloak",
    legs: "ragged pants",
    shoes: "old sandals",
    sword: "nothing",
    shield: "nothing",
    magicitem: "nothing"
};

console.log("");

var name = readline.question("Good evening.  I have been sent to work in your service.  Might I confirm thy name? ");

while (name === "") {
    name = readline.question("I must confirm thy name, m'lord Or art thou nameless? Regardless, adopt a name    ");
}

console.log("");

var lastname = readline.question("Surname?  ")

while (lastname === "") {
    lastname = readline.question("But how shall I say thy official title?  Please, your surname    ");
}

console.log("");

var gender = readline.question("Is thou art a man or woman?  ").toLowerCase();

while (gender != "boy" && gender != "girl" && gender != "man" && gender != "woman" && gender != "tranny") {
    gender = readline.question("Aye, quit fookin around Laddy tell me what ya got down there   ");
}

console.log("");

if (gender === "boy" || gender === "man") {
    console.log("Thank you, Lord " + lastname);
} else if (gender === "girl" || gender === "woman") {
    console.log("Thank you, Lady " + lastname);
} else if (gender === "tranny") {
    console.log("Oh...well...we're respectful of all kinds of people here i really didn't mean to offend please forgive me everyone has  a right to choose what they do with their bodies this seems a little longwinded I'm talking too much aren't I oh well thank you errrr WhateverTheFuckYouAre " + lastname);
}



////////////////////////////////
////////CLASS OBJECTS///////////
////////////////////////////////

var warrior = {
    type: "WARRIOR",
    str: 15,
    def: 10,
    int: 4,
    luk: 6,
    hp: 50,
    exp: 0
};

var wizard = {
    type: "WIZARD",
    str: 4,
    def: 4,
    int: 15,
    luk: 8,
    hp: 25,
    exp: 0

};

var thief = {
    type: "THIEF",
    str: 9,
    def: 7,
    int: 8,
    luk: 15,
    hp: 35,
    exp: 0

};

////////////////////////
/////////////////////////

///////////////////////////////
///////ENEMY OBJECTS LVL 1/////
///////////////////////////////


var goblin = {
    type: "GOBLIN",
    str: 12,
    def: 10,
    magDef: 5,
    hp: 50
}

var insanePrisoner = {
    type: "PRISONER",
    str: 25,
    def: 5,
    magDef: 3,
    hp: 60
}

var skeletonKnight = {
    type: "SKELKNIGHT",
    str: 12,
    def: 10,
    magDef: 5,
    hp: 50
}

var currentEnemy = {};

/////////////////////////////
/////////////////////////////


console.log("");

console.log("Choose your build:  ")

console.log(warrior);

console.log(wizard);

console.log(thief);

console.log("");

var build = readline.question("What kind of fighter will you be?     ").toLowerCase()

while (build != "warrior" && build != "wizard" && build != "thief") {
    build = readline.question("QUIT BEIN A FOOKIN CUNT AND CHOOSE UR CLASS YA FOOK!!!!   ")
}
if (build === "warrior") {
    var character = warrior;
} else if (build === "wizard") {
    var character = wizard;
} else if (build === "thief") {
    var character = thief;
};

console.log("");

console.log(name + " " + lastname + " : ");

console.log(character);


//////////////////////////////////
//////END GAME LOOP///////////////

while (playerDead === true) {
    readline.question("You are dead");
}

//////////////////////////////////
//////////////////////////////////

//////////////////////////////
/////INVENTORY FUNCTION///////

function inventory() {
    console.log("")
    console.log("Doorkey: " + doorkey + " Sword: " + sword + " Mirror Shield: " + mirrorShield + " Torch: " + torch + " Gorgon Head: " + gorgonHead);
    console.log("");

}

////////////////////////////////
///////////////////////////////

///////////////////////////////
///////LEVEL UP FUNCTIONS//////
///////////////////////////////

function checkExp() {
    if (character.exp >= nextLevel) {
        levelUp();
    }
}

function levelUp() {
    console.log("");
    console.log("YOU LEVELED UP!")

    if (character.type === "THIEF") {
        character.hp = character.hp + 10;
        character.luk = character.luk + 5;
        character.int = character.int + 1;
        character.str = character.str + 3;
        character.def = character.def + 3;
    } else if (character.type === "WARRIOR") {
        character.hp = character.hp + 20;
        character.luk = character.luk + 1;
        character.int = character.int + 0;
        character.str = character.str + 5;
        character.def = character.def + 5;
    } else if (character.type === "WIZARD") {
        character.hp = character.hp + 5;
        character.luk = character.luk + 1;
        character.int = character.int + 5;
        character.str = character.str + 0;
        character.def = character.def + 2;

    }
    console.log(name + " " + lastname + ": ")
    console.log(character);
    nextLevel = nextLevel * 2;
}



//////////////////
//BOSS FUNCTIONS//
//////////////////

function doorUnlock() {
    console.log("The door swings open and you see a dark, dark night.  You aren't sure what lies ahead.  You leave the room.")
    finalBoss();
}



function doorLocked() {
    console.log("");
    var lockedDoor = readline.question("You approach the monsterous door.  You try to open it but it won't budge.  You head back.")
    turnBack();

}

function finalBoss() {
    var count = 0;
    var choice = readline.question("the enemy attacks you")
    var interval = setTimeout(choice, 3000)
    if (choice === "slash") {
        clearTimeout(interval);
        console.log("you attacked in time!")
    } else {
        console.log("you miss!!")
    }

}


function damage() {
    console.log("you take damage!!!")
}

/////////////////////////////////////////
/////////////////////////////////////////
///////////TURN BACK/////////////////////

function turnBack() {
    console.log("");
    console.log("You head back to the center of the room");
    console.log("");
    question();

}

////////////////////////
//////////////////////////////////////////////////////////
//////////////CENTER ROOM/////////////////////////////////
function question() {
    console.log("");
    var phase = readline.question("What will you do?  TYPE ONE OF THESE COMMANDS>>>>DOOR || STAIRS || HOLE || LAKE || LOCATION || PASSWORD || INV || EQUIPPED        ").toLowerCase();
    if (phase === "door" || phase === "go through door" || phase === "enter door" || phase === "go into door" || phase === "open the door" || phase === "open door") {
        checkForKey();
    } else if (phase === "hole") {
        holeChoice();
    } else if (phase === "stairs") {
        checkForTorch();
    } else if (phase === "location") {
        console.log("");
        readline.question("You are back in the center of the room.  There's a giant door and lumbering, unknown shape in front of it.  There are stairs that descend into total darkness to your left.  A frozen lake is behind you.  And there is a hole in the wall and what smells like fire coming from it.  ")
        question();
    } else if (phase === "inv") {
        inventory();
        question();
    } else if (phase === "test") {
        test();
        question();

    } else {
        console.log("");
        readline.question("That is not a command. Please type in a command listed");
        question();
    }
}

function tooDark() {
    console.log("");
    console.log("You try to go down the stairs, but the darkness is too thick.")
    turnBack();
}



/////////////////////////////////////////////////////
//////////STAIRS PATH////////////////////////////////
function ogreDeathLeft() {
    console.log("");
    console.log("You run to the left to avoid the ogre, but because of the darkness you fail to see the pit.  You run right off the edge, and fall 1,000 feet onto spikes.  They mutilate your body.")
    dead();
}

function ogreDeathRight() {
    console.log("");
    console.log("You run to the right.  The ogre anticipates your move and grabs you.  He holds you up to his face and you stare into his huge, bloodshot eyes.  He crushes you in his hands, you feel your entrails explode out every orifice.");
    dead();
    question();

}

function noReactDeath() {
    console.log("");
    console.log("you hesitate, and the orge reaches you.  He kicks you with his massive feet, and your body breaks in half.")
    dead();
}

function ogreSurvive() {
    console.log("");
    console.log("You courageously run inbetween the ogres legs.  He is surprised at your prowess and bravery, and watches you run inbetween his massive legs. THINK OF OGRE BATTLE SCENARIO")
    character.exp = character.exp + 10;
    checkExp();
    console.log("exp needed for next level: " + nextLevel)
    postOgreChoice();
}

function postOgreChoice() {
    console.log("");
    readline.question(" You breathe a sigh of momentary relief.  You look around, or at least, you try to---it is darker than any other room you have encountered thus far.  The torch only helps see a few around you, and you feel this darkness to not be natural, it feels penetrating, oppresive, savagely bleak, like you take darkness into your lungs with each breath.  ");
    console.log("");
    readline.question("You look to your side.  There is a massive pit, if you had dodged left from the Ogre you surely would have fallen to your death, whether by hitting the floor or starvation from falling and never reaching anything, you aren't sure if the pit has a bottom.  You walk along the side of the drop and scan the edge----alas!  A ladder!  A steel, rusty ladder, leading down.  Maybe there is a bottom.  Only one way to find out.  ");
    console.log("");
    readline.question("...but, maybe you should just continue further down the edge, see if there is anything on this level.  Besides, you venture that the pit below is already darker than this evil, evil dark you inhabit now.  ");
    console.log("");
    readline.question("You look off to the right.  The ogre's corpse lay yonder.  You see that past the stalagmite that fell him, there appears to be more ground to cover.  A forest of stalagmites stretch out before you.  ");
    console.log("");
    var choice = readline.question("WHAT DO YOU DO?>>>>>>>>COMMANDS : LADDER || EDGE || STALAGMITE FOREST")
}


function ogreDead() {
    ogre -= 1;
}

function stairsChoice() {
    var choice = readline.question("You walk down the stairs.  It leads into darkness. It leads to cave.  You travel further down it, and it leads into a larger room....suddenly, an ogre emerges from the darkness and starts running towards you!!!   What do you do?   TYPE ONES OF THESE COMMANDS:   dodge left, dodge right, between legs, inventory  ").toLowerCase();
    if (choice === "dodge left") {
        ogreDeathLeft();
    } else if (choice === "dodge right") {
        ogreDeathRight();
    } else if (choice === "between legs") {
        ogreSurvive();
    } else if (choice === "inventory") {
        inventory();
        stairsChoice();
    } else {
        noReactDeath();
    }

}

//////////////////////////////
///////CHECK FUNCTIONS////////
function checkForTorch() {
    if (torch === 0) {
        tooDark();
    } else {
        stairsChoice();
    }
}

function checkForOrc() {
    if (orc === 1) {
        orcFight();
    } else {
        orcDead();
    }
}

function checkForKnight() {
    if (mirrorKnight === 1) {
        cave();
    } else {
        emptyCave();
    }

}

function checkForKey() {
    if (doorkey === 0) {
        doorLocked();
    } else {
        doorUnlock();
    }
}

function orcShieldCheck() {
    if (mirrorShield === 0) {
        stoneDeath();
    } else {
        gorgonReact();
    }
}

function LakeShieldCheck() {
    if (mirrorShield === 0) {
        fireballDeath();
    } else {
        fireballReact();
    }
}
//////////////////////////////

/////////////////////////////////
///////ORC FUNCTIONS/////////////

function orcFight() {
    console.log("");
    ///figure out a way to implement a timeout that runs orcHesitate() if the user doesn't react within 5 seconds. 
    var choice = readline.question("You travel into the hole.  It leads to a cave.  You travel towards the gleam....suddenly, you hear a monstrous cry, and see an orc running towards you!  He holds a decapitated head by the its long hair, it's too dark to tell, but it looks like a woman's.  The only light you have is the torch in the orc's other hand.  He lunges at you!  COMMANDS:  grab arm, run away, dodge left, dodge right").toLowerCase();
    if (choice === "grab arm") {
        orcGrab();
    } else if (choice === "run away") {
        turnBack();
    } else if (choice === "dodge left") {
        orcLeft();
    } else if (choice === "dodge right") {
        orcRight();
    } else {
        orcHesitate();
    }
}


function orcRight() {
    console.log("");
    console.log("The orc anticipates your move.  He quickly forms out of the lunge to follow your direction with a swing of his decapitated head.  The hair extends further than you expected it too, and it's long hair wraps around your neck!!  The orc then pulls you in violently, and sends your face directly into the flame of his torch. You scream in agony as your face collides with the flames.  He binds your still with the hair of the head and melts your face.  You die slowly and painfully.");
    dead();

}

function orcLeft() {
    console.log("");
    console.log("You try to dodge left, but the orc anticipates your move. He fakes out of his lunge and grabs your right arm as your dodging left.  He tears it out of it's socket.  As you scream in agony, he smacks you across the face with it.  As you are on the ground, he rips out each of your limbs.  The orc will have a full course meal tonight");
    dead();
}

function orcHesitate() {
    console.log("");
    console.log("He punches you in the stomach.  He then rips your head off.  Learn to react quicker.");
    dead();
}

function orcGrab() {
    console.log("");
    var choice = readline.question("You stop the arm right before it reaches your eye.  The orc howls in frustration.  He then swings the head at you!  TYPE A COMMAND :  duck, block   ").toLowerCase();
    if (choice === "duck") {
        orcGrabCont();
    } else if (choice === "block") {
        orcGrabDeath();
    } else {
        orcGrabDeath();
    }

    function orcGrabDeath() {
        console.log("");
        console.log("You try and block, but you arms are too busy holding his knife back.  He clocks you with the head and crushes your head. Lords orc are strong.")
        dead();
    }

}

function orcPhase2() {
    console.log("");
    console.log(" You handspring backwards out of the range of the swing.  He narrowly misses you. The orc is furious.  He pulls the head back to his hand.  He roars in mocking, and palms the head like a ball.  He then points the eyes at you, and it is then you realize that it is a Gorgon's head!  The eyes glow a luminous white. You must stop the stonegaze from reaching you.  ");
    orcShieldCheck();

}

function stoneDeath() {
    console.log("");
    var choice = readline.question("You feel your body freeze.  You can't move a muscle, and you feel every liquid in your body harden.  You try to scream but your lungs can no longer pass wind air through them.  In silent agony, your body becomes the pained statue ever existed.  Quite an artist, this orc.");
    dead();
}

function gorgonReact() {
    console.log("");
    var choice = readline.question("What will you do?  LIST OF COMMANDS>>>>> THROW TORCH AT ORC || BLOCK    ").toLowerCase();
    if (choice === "throw" || choice === "torch" || choice === "throw torch") {
        orcTorchKill();
    } else if (choice === "block") {
        orcPhase3();
    } else {
        console.log("that's not a command")
        gorgonReact();
    }
}

function orcPhase3() {
    console.log("");
    var choice = readline.question("You throw your shield up.  You can no longer see the orc because your shield is so massive and it is so dark.  He is somewhere on the other side of your shield in the darkness, howling and laughing horribly.  His mocking turns to a language of frustration, however, and you hear him approaching you beyond your shield.  You panic---you only see what is around you, but if you try to oreint your position, you might open yourself up to an attack from the orc.  WHAT DO YOU DO? COMMANDS:  ATTACK FORWARD || SPIN ATTACK || HOLD TORCH UP ||      ");
    if (choice === "attack forward" || choice === "attack" || choice === "a") {
        orcPhase3Death();
    } else if (choice === "spin attack" || choice === "s" || choice === "spin") {
        orcSpinDeath();
    } else if (choice === "hold torch up" || choice === "h" || choice === "torch" || choice === "htu") {
        orcVictory();
    } else {
        console.log("THAT IS NOT A COMMAND")
        orcPhase3();
    }

    function orcVictory() {
        console.log("");
        readline.question("You hold the torch as high as you can so you make light all around you. You still can't see past your shield, however, but you hear the orc start howling.  You feel yourself fill with fear, but the howling doesn't sound mocking anymore, it sounds pained, in agony.  It suddenly ends abrubtly, like a rock was shoved down his throat.  You wait a moment, and slowly lower your shield...the orc, he has been turned the stone.  He wasn't able to see his reflection until you illuminated the area around you, and it seems he held the gorgon head up to the mirror...nice work.  Sometimes defense is the best attack.")
        console.log("");
        readline.question("The gorgon head remains in his stone hands. You take it.  Maybe it'll come in handy.")
        console.log("");
        readline.question("YOU NOW POSSESS THE GORGON HEAD");
        console.log("");
        readline.question("You take the torch too.")
        console.log("");
        readline.question("YOU NOW POSSESS THE TORCH");
        console.log("");
        gorgonHead += 1;
        torch += 1;
        character.exp = character.exp + 4;
        checkExp();
        inventory();
        orcDead();
    }

}

function orcPhase3Death() {
    console.log("");
    console.log("You bravely drop your defense and attack directly in front of you.  The orc is close enough to see, but your attack is just barely out of range.  He laughs in derision, and lunges forward and punches you in the stomach.  The wind is knocked out of you and before you can catch your breath, he grabs you by the neck.  He holds the Gorgon head right in your face so your eyes meet its white gaze.  There's no escape.")
    stoneDeath();
}

function orcSpinDeath() {
    console.log("");
    console.log("You drop your defense and spin in a deadly spin attack, like you're Link or something.  You scream in triumph and anger, but when your attack is complete, you only feel more disorientated than before.  You don't even have a moment to realize you have failed before the orc grabs you from behind by the back of your hair.  He yanks violently down, and breaks your head off.")
    dead();

}

function orcTorchKill() {
    console.log("");
    console.log("You throw the torch you picked up directly at the orc.  It hits him in his face and he screams in pain.  Howevevr, the gorgon eye is still upon you...")
    stoneDeath();

}

function orcDuckDeath() {
    console.log("You duck once again skillfully, and it narrowly misses your head, however, the orc is onto your strategy, and swings again, this time bringing in vertically down onto your now ducking body.  He smashes your head, and fractures your skull. You fall to the ground, and jumps on you and eats your face.  He takes his time, chewing off each part of your face.  Looks like he'll be having a second meal.")
    dead();
}

function orcGrabHesitate() {
    console.log("You hesitate, and the head smashes vertically across your face.  You feel your brain stem snap and your brain smacks up against the side of your skull.  You die instantly.  Man, orcs can hit hard.")
    dead();

}

function orcGrabCont() {
    console.log("");
    var choice = readline.question("You duck just in time, and he swings the decapitated head over yours.  He swings so hard, he throws off his center of balance and drops the torch!!  You scramble to pick it up, and just as you grab it, you turn around and see he is running towards you, swinging the decapitated head by its long hair, like some sort of ball and chain. He swings it at you!  COMMANDS:  handspring, duck  ").toLowerCase();
    if (choice === "handspring") {
        orcPhase2();
    } else if (choice === "duck") {
        orcDuckDeath();
    } else {
        orcGrabHesitate();
    }
}

function orcDead() {
    console.log("");
    console.log("The orc is dead");
    console.log("");
    console.log("You go back from where you came")
    orc -= 1;
    holeChoice();

}


////////////DEATH FUNCTIONS/////////////////


function dead() {
    console.log("YOU ARE DEAD.  GAME OVER.");
    playerDead = true;
}

//////////////////////////////////////////
//////////////////////////////////////////


function holeChoice() {
    location = "hole";
    console.log("");
    var choice = readline.question("The hole is open wide. You notice that it splits into two directions.  You see something gleam within the darkness somewhere in the right cave....the key?  You hear someone mumbling as well.  Perhaps someone who can help?  Or a madman waiting to slit your throat.  The other cave looks less dark...maybe there's an opening to the outside. What will you do?  COMMANDS>>>>>LEFT RIGHT BACK INV      ").toLowerCase();
    if (choice === "right") {
        checkForOrc();
    } else if (choice === "turn back") {
        turnBack();
    } else if (choice === "inv") {
        inventory();
        holeChoice();
    } else if (choice === "left") {
        holeLeft();
    } else {
        holeChoice();
    }
}

////////CLIFF PATH/////////////

function holeLeft() {
    console.log("");
    console.log("You go into the left cave.  You travel in darkness for a bit, but it eventually it gets lighter and you see what appears to be an opening to the outside.  A cool breeze blows across your face.  You grow anxious at the idea of escaping this wretched place.  You move towards the opening.")
    console.log("");
    console.log("You emerge from the opening.  It most certainly does lead outside, but onto a narrow cliff.  There is only a narrow path along side a cliff wall.  The path wraps around the mountain out of sight.  ")
    console.log("");
    var choice = readline.question("WHAT WILL YOU DO?  LIST OF COMMANDS: path, turn back      ")
    if (choice === "path") {
        pathChoice();
    } else if (choice === "turn back") {
        holeChoice();
    } else {
        holeLeft();
    }
}

function pathChoice() {
    console.log("");
    console.log("You walk along the narrow path.  The path is so thin, you can barely walk on it.  Take even one false step, and it is surely death.")
    console.log("");
    console.log("As you are walking, there is a cave along the path that leads into the mountain. The path continues past the cave, leading further around the mountain.  ")
    console.log("");
    var choice = readline.question("What will you do?  LIST OF COMMANDS: continue path, cave, turn back      ");
    if (choice === "continue path") {
        pathBoulder();
    } else if (choice === "cave") {
        checkForKnight();
    } else if (choice === "turn back") {
        console.log("");
        console.log("you got back the way you came")
        holeLeft();
    } else {
        console.log("");
        console.log("not a command.  Make a decision");
        pathChoice();
    }

}

///////////MIRROR KNIGHT FIGHT////////////////

function emptyCave() {
    console.log("");
    readline.question("You enter the cave where you fought The Mirror Knight, but he isn't there anymore.  The reflective surfaces are gone, it's just an empty cave.")
    console.log("");
    readline.question("You turn back to the path.");
    pathChoice();

}


function cave() {
    console.log("");
    readline.question("You enter a large spacious room. There are mirrors everywhere.  Even moments after stepping in, your orientation is skewed.  You see there are reflections of yourself everywhere, it is impossible to tell how to leave, you end up running into a reflective surface.  You wander aimlessly, before suddenly you feel enclosed between 4 reflections of yourself, one North, one South, one West, and one East.  You can't seem to get out, it's an enclosed box.");
    console.log("");
    console.log("You suddenly feel your body unconciously shift to the center of the ''room'', like some unknown force put you there. The reflections suddenly unsheath swords!  They all raise them in unison and prepare to execute you with a downward slash. You gamble that maybe one of the reflections can't hurt you...are you going crazy?  Can reflections hurt you? Regardless, there's no where to run but towards one of the reflections.");
    console.log("");
    var choice = readline.question("Which mirror do you run towards?  COMMANDS>>>>> NORTH SOUTH EAST WEST     ").toLowerCase();
    if (choice === "north" || choice === "n") {
        MirrorWin1();
    } else {
        MirrorDeath();
    }
}

function MirrorDeath() {
    console.log("");
    console.log("You choose wrong.  The sword comes directly down onto your head.  It chops you perfectly in half down to your torso.  You stand split down the middle.  You really need to deal with some of your inner demons. ")
    dead();

}

function MirrorWin1() {
    console.log("");
    console.log("The attack doesn't go past the mirror's surface.  You hug it's surface.  The other reflection's attacks, however, are very real.  You see three swords slash downwards and stop perpendicular  to the floor.  Their tips meet in the middle of the room.  The swords are taken back into their reflections.  You feel yourself reorient to the center of the room.  The reflections raise their swords again.  You must choose again.")
    console.log("");
    var choice = readline.question("What mirror do you run towards>>>NORTH SOUTH EAST WEST  ").toLowerCase();
    if (choice === "east" || choice === "e") {
        MirrorWin2();
    } else {
        MirrorDeath();
    }
}

function MirrorWin2() {
    console.log("");
    var choice = readline.question("You are successful yet again.  You watch the swords come down.  You are back in the center of the room.  They raise their swords.  How long can you keep doing this? Which mirror do you choose>>>>NORTH SOUTH EAST WEST   ")
    if (choice === "south" || choice === "s") {
        MirrorWin3();
    } else {
        MirrorDeath();
    }
}

function MirrorWin3() {
    console.log("");
    readline.question("You run into your reflection and you actually feel the surface move forward.  You stumble but manage to keep your footing.  When you look up, all the reflective surfaces are gone.  You are back in what appears to be a regular cave.  There is a stout man on the ground.  He possesses no weapons, but he has a shield....a reflective shield.  It's a mirror shield.  He stands up.  ");
    console.log("");
    readline.question(" 'You know yourself better than anybody.  I'm impressed.  Most people don't know which version of themselves to trust.  And now you're stronger' ");
    console.log("");
    readline.question("He gestures down at your hand.  You suddenly realize you are holding something.  The sword!  From the other versions of you, you hold it now. ");
    sword += 1;
    readline.question("YOU NOW POSSESS THE SWORD");
    console.log("");
    readline.question("'Take this too, I'm tired of projecting everyone onto themselves.' ");
    console.log("");
    readline.question("He hands you his shield.");
    console.log("");
    readline.question("Before you can thank him, he vanishes");
    console.log("");
    readline.question("YOU NOW POSSESS THE SHIELD");
    mirrorShield += 1;
    console.log("");
    mirrorKnight--;
    character.exp = character.exp + 4;
    checkExp();
    inventory();
    readline.question("You head back out the way you came.")
    pathChoice();
}

//////////////BOULDER PATH//////////////////
////////////////////////////////////////////

function pathBoulder() {
    console.log("");
    console.log("You continue down the path.  The path grows more and more narrow, you can barely stand on it, you hug the mountain wall.  You hear a loud thunderous crash above you.  You look up---boulders rain down from the above you!  You must react")
    console.log("");
    var choice = readline.question("What do you do? LIST OF COMMANDS>>>>>>RUN LEFT || RUN RIGHT").toLowerCase();
    if (choice === "run left" || choice === "left") {
        boulderDeath();
    } else if (choice === "run right" || choice === "right") {
        boulderSurvive();
    } else {
        boulderHesitate();
    }
}

function boulderDeath() {
    console.log("");
    console.log("you run to the left but trip and start to fall off the cliff.  You grab onto the side of the path!  You hold on for dear life, thank god for you quick reactions...however...the boulders above are still hurdling down at you.  You can't react in time, one the size of a horse lands on your arms and breaks them off from your body. You cry in agony for 3000 feet down....you bloodloss kills you before you can even reach the bottom....your corpse explodes on impact.")
    dead();
}

function boulderSurvive() {
    console.log("");
    console.log("You run to the right.  You look up---a hail of boulders plummets towards you.  You quickly scan the side of the cliff for options.  You notice that there is a little inline in the wall that can protect you.  You go inside of it, and the boulders plummets past you, just in the nick of time.  You wait for the rumbling to stop and get back on the path.  Nice work.  You continue down the path.")
    dyingAdventurer();
}

function boulderHesitate() {
    console.log("");
    console.log("You freeze.  You don't react quick enough, and a boulder lands directly on your head and smashes it to pieces.  Your already dead body falls off the cliff. ")
    dead();

}

function dyingAdventurer() {
    console.log("");
    readline.question("You travel further down the path until it leads to a small clearing.  A man lay half crushed under a boulder, his torso still visible.  He coughs up blood.  You rush over to him");
    console.log("");
    readline.question("'There isn't much time for me.  But maybe I can still help you.  If you do not know yourself, remember NES.   Remember.....NES......'")
    console.log("");
    readline.question("He dies.  NES?  What does that mean?  Must be important.")
    console.log("");
    console.log("you head back down the path.");
    pathChoice();

}
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
////////RANDOM FIGHT FUNCTIONS/////////////////////////
///////////////////////////////////////////////////////


function encounterW1() {
    var encounter = [1, 2, 3, 4, 5, 6, 7, 8]
    var chance = encounter[Math.floor(Math.random() * encounter.length)];
    if (chance === 1 || chance === 3 || chance === 5 || chance === 8) {
        console.log("");
        console.log("an " + goblin.type + " appears!!!");
    } else {
        console.log("you continue safely");
    }
    question();
}









///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

console.log("");

readline.question("You find yourself in a dark room.  You can't see much, but the room feels large and spacious.  There is a large iron double sided door.  There is an enormous lock, larger than any lock you've ever seen, keeping the door closed. ");

console.log("");

readline.question("Off to your left, you see a flight of stairs, carved out from the stone and leading down into some darker pit.  The stairs disappear into total darkness, you can't see a thing.");

console.log("");

readline.question("You look to the right of the room.  There's a giant hole in the wall.  You hear someoone---or something---cackle in the dark.  There appears to be a faint luminous glow somewhere in the darkness, and the smell of fire.");

console.log("");

question();
