let mainMenu = document.getElementById("mainMenu");
let passAndPlay = document.getElementById("passAndPlay");

function changeScene(scene1, scene2)
{
    scene1.style.display = "none";
    scene2.style.display = "flex";
}

function sceneOne()
{
    changeScene(mainMenu, passAndPlay);
}

function sceneZero()
{
    changeScene(passAndPlay, mainMenu);
}

class Pozicija{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
}

class Pijuni{
    constructor(id, lokacije, boja)
    {
        this.id = id;
        this.lokacije = lokacije;
        this.boja = boja;
    }
    defaultPozicija(id)
    {
        console.log(this.id[3]);
        for(let i=this.id[3]+1-4; i<this.id[3]+1; i++)
        {
            pijunManipulator[i].style.left = baznePozicije[i].x+'px';
            pijunManipulator[i].style.top = baznePozicije[i].y+'px';
        }     
    }
}
//pozicije ploce
let pozicijePloce = [new Pozicija(27,152), new Pozicija(2*26,152), new Pozicija(3*26-1,152), new Pozicija(4*25+2,152), new Pozicija(5*25+1,152),
                     new Pozicija(6*25+2,127), new Pozicija(6*25+2,102), new Pozicija(6*25+2,77), new Pozicija(6*25+2, 53), new Pozicija(6*25+2,28),
                     new Pozicija(6*25+2,4), new Pozicija(7*25+2, 4), new Pozicija(8*25+3.5, 4), new Pozicija(8*25+3, 28), new Pozicija(8*25+3, 53),
                     new Pozicija(8*25+3, 77), new Pozicija(8*25+3, 102), new Pozicija(8*25+3, 127), new Pozicija(9*25+3, 152), new Pozicija(10*25+3, 152),
                     new Pozicija(11*25+3, 152), new Pozicija(12*25+2, 152), new Pozicija(13*25+1, 152), new Pozicija(14*25+2, 152), new Pozicija(14*25+2, 177),
                     new Pozicija(14*25+2, 204),new Pozicija(13*25+2, 204),new Pozicija(12*25+2, 204),new Pozicija(11*25+2.5, 204),new Pozicija(10*25+3, 204),
                     new Pozicija(9*25+3, 204), new Pozicija(8*25+4, 229), new Pozicija(8*25+3, 253),new Pozicija(8*25+3, 278),new Pozicija(8*25+3, 303),
                     new Pozicija(8*25+3, 327),new Pozicija(8*25+3, 352),new Pozicija(7*25+3, 352),new Pozicija(6*25+2, 352),new Pozicija(6*25+2, 327),
                     new Pozicija(6*25+2, 303),new Pozicija(6*25+2, 278),new Pozicija(6*25+2, 253),new Pozicija(6*25+2, 229), new Pozicija(5*25+2, 204),
                     new Pozicija(4*25+2, 204),new Pozicija(3*25+2, 204), new Pozicija(2*25+2, 204),new Pozicija(25+2, 204),new Pozicija(3, 204),
                     new Pozicija(3, 177), new Pozicija(3, 152)];
let pijunManipulator = [document.getElementById("Z1"), document.getElementById("Z2"),document.getElementById("Z3"), document.getElementById("Z4"), 
                        document.getElementById("C1"), document.getElementById("C2"),document.getElementById("C3"), document.getElementById("C4"),
                        document.getElementById("Y1"), document.getElementById("Y2"),document.getElementById("Y3"), document.getElementById("Y4"),
                        document.getElementById("P1"), document.getElementById("P2"),document.getElementById("P3"), document.getElementById("P4")];

let baznePozicije = [new Pozicija(50,50), new Pozicija(50,80), new Pozicija(80,50), new Pozicija(80,80),
                     new Pozicija(275,50), new Pozicija(275,80), new Pozicija(305,50), new Pozicija(305,80),
                     new Pozicija(275,275), new Pozicija(275,305), new Pozicija(305,275), new Pozicija(305,305),
                     new Pozicija(50,275), new Pozicija(50,305), new Pozicija(80,275), new Pozicija(80,305)];


// zeleni
let zeleni = new Pijuni([0,1,2,3], baznePozicije, "zeleni");
zeleni.defaultPozicija();

// crveni
let crveni = new Pijuni([4,5,6,7], baznePozicije, "crveni");
crveni.defaultPozicija();

// zuti
let zuti = new Pijuni([8,9,10,11], baznePozicije, "zuti");
zuti.defaultPozicija();

// plavi
let plavi = new Pijuni([12,13,14,15], baznePozicije, "plavi");
plavi.defaultPozicija();