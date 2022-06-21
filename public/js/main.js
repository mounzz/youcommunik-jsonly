class ItemHtml{
    constructor(_type,_atr,_atrLink,_parent){
        this._type = document.createElement(_type);
        if(_atr.length != 0){
            this._atr = this._type.setAttribute(_atr,_atrLink);
        }
        this._parent = _parent.appendChild(this._type); 
    }
    insertHtml(_x){
        this._type.innerHTML = _x
    }
    addAtr(_x,_y){
        this._type.setAttribute(_x,_y)
    }
    delChild(){
        this._type.remove()
    }
}

let containerSite = new ItemHtml("div","class","containerSite", document.body);

// header
let header = new ItemHtml("header","","containerNav", containerSite._type);
let nav = new ItemHtml("nav","","containerNav", header._type);
// nav
let containerNav = new ItemHtml("div","class","containerNav", nav._type);

// logo
let logoNav = new ItemHtml("div", "class","logoNav", containerNav._type)
let logoNavImg = new ItemHtml("img","src","public/img/logo-horizontal-fond-noir-couleur.png",logoNav._type)
logoNavImg.addAtr("class", "logoNavImg")

// navigation
let navliens = new ItemHtml("div", "class", "navliens", containerNav._type)
let navlien1 = new ItemHtml("p", "class", "lienNav", navliens._type)
navlien1.insertHtml("home")
let navlien2 = new ItemHtml("p", "class", "lienNav", navliens._type)
navlien2.insertHtml("packages")
let navlien3 = new ItemHtml("p", "class", "lienNav", navliens._type)
navlien3.insertHtml("outils")
let navlien4 = new ItemHtml("p", "class", "lienNav", navliens._type)
navlien4.insertHtml("projets")
let navlien5 = new ItemHtml("p", "class", "lienNav", navliens._type)
navlien5.insertHtml("temoignages")
let navlien6 = new ItemHtml("p", "class", "lienNav", navliens._type)
navlien6.insertHtml("contact")

//header pack

let containerHeader = new ItemHtml("div", "class", "containerHeader", header._type)
let imgHeader = new ItemHtml("div", "class", "imgHeader", containerHeader._type)
let headerImg = new ItemHtml("img","src","public/img/packages.png",imgHeader._type)
headerImg.addAtr("class", "headerImg")
let texteHeader = new ItemHtml("div", "class", "texteHeader", containerHeader._type)
let titreHeader = new ItemHtml("h1", "", "", texteHeader._type)
titreHeader.insertHtml("À chaque étape son pack")
let sousTitreHeader = new ItemHtml("p","class","sousTitreHeader",texteHeader._type)
sousTitreHeader.insertHtml("naître, grandir et prospérer.")


// main


let main = new ItemHtml("main","","",containerSite._type)

//eclosion

let mainContainer = new ItemHtml("div", "class", "mainContainer",main._type)
// titre

let titreContainer = new ItemHtml("div", "class", "titreContainer", mainContainer._type)
let titreMain = new ItemHtml("div", "class", "titreMain", titreContainer._type)
titreMain.insertHtml("Eclosion")

//contenu
let mainContenu = new ItemHtml("div", "class", "mainContenu", mainContainer._type)
let imgGauche = new ItemHtml("div", "class", "imgGauche", mainContenu._type)
let gauche = new ItemHtml("img", "src", "public/img/icon-eclosion.png", imgGauche._type)

let mainTexte = new ItemHtml("div", "class", "mainTexte", mainContenu._type)
mainTexte.insertHtml("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit sunt cum quo nihil exercitationem voluptatum, eum praesentium quaerat doloremque ducimus illum veritatis reprehenderit voluptates molestiae vel adipisci temporibus quidem. Minima facere repellendus quaerat cum in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br><br> Impedit sunt cum quo nihil exercitationem voluptatum, eum praesentium quaerat doloremque ducimus illum veritatis reprehenderit voluptates molestiae vel adipisci temporibus quidem. Minima facere repellendus quaerat cum in.")


//images
let containerImg = new ItemHtml("div", "class", "containerImg", mainContainer._type)

let img1 = new ItemHtml("img", "src", "public/img/Logo-logo.png", containerImg._type)
let img2 = new ItemHtml("img", "src", "public/img/icon-charte-graphic.png", containerImg._type)
let img3 = new ItemHtml("img", "src", "public/img/site-single-page.png", containerImg._type)
let img4 = new ItemHtml("img", "src", "public/img/carte-visite.png", containerImg._type)



//evolution

let mainContainer1 = new ItemHtml("div", "class", "mainContainer",main._type)
// titre

let titreContainer1 = new ItemHtml("div", "class", "titreContainer", mainContainer1._type)
let titreMain1 = new ItemHtml("div", "class", "titreMain", titreContainer1._type)
titreMain1.insertHtml("Evolution")

//contenu
let mainContenu1 = new ItemHtml("div", "class", "mainContenu", mainContainer1._type)
let imgGauche1 = new ItemHtml("div", "class", "imgGauche", mainContenu1._type)
let gauche1 = new ItemHtml("img", "src", "public/img/icon-evolution.png", imgGauche1._type)

let mainTexte1 = new ItemHtml("div", "class", "mainTexte", mainContenu1._type)
mainTexte1.insertHtml("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit sunt cum quo nihil exercitationem voluptatum, eum praesentium quaerat doloremque ducimus illum veritatis reprehenderit voluptates molestiae vel adipisci temporibus quidem. Minima facere repellendus quaerat cum in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br><br> Impedit sunt cum quo nihil exercitationem voluptatum, eum praesentium quaerat doloremque ducimus illum veritatis reprehenderit voluptates molestiae vel adipisci temporibus quidem. Minima facere repellendus quaerat cum in.")


//images
let containerImg1 = new ItemHtml("div", "class", "containerImg", mainContainer1._type)

let img5 = new ItemHtml("img", "src", "public/img/Logo-logo.png", containerImg1._type)
let img6 = new ItemHtml("img", "src", "public/img/icon-charte-graphic.png", containerImg1._type)
let img8 = new ItemHtml("img", "src", "public/img/reseaux-sociaux.png", containerImg1._type)
let img9 = new ItemHtml("img", "src", "public/img/carte-visite.png", containerImg1._type)
let img7 = new ItemHtml("img", "src", "public/img/site-vitrine.png", containerImg1._type)




//envol

let mainContainer2 = new ItemHtml("div", "class", "mainContainer",main._type)
// titre

let titreContainer2 = new ItemHtml("div", "class", "titreContainer", mainContainer2._type)
let titreMain2 = new ItemHtml("div", "class", "titreMain", titreContainer2._type)
titreMain2.insertHtml("Envol")

//contenu
let mainContenu2 = new ItemHtml("div", "class", "mainContenu", mainContainer2._type)
let imgGauche2 = new ItemHtml("div", "class", "imgGauche", mainContenu2._type)
let gauche2 = new ItemHtml("img", "src", "public/img/icon-eclosion.png", imgGauche2._type)

let mainTexte2 = new ItemHtml("div", "class", "mainTexte", mainContenu2._type)
mainTexte2.insertHtml("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit sunt cum quo nihil exercitationem voluptatum, eum praesentium quaerat doloremque ducimus illum veritatis reprehenderit voluptates molestiae vel adipisci temporibus quidem. Minima facere repellendus quaerat cum in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br><br> Impedit sunt cum quo nihil exercitationem voluptatum, eum praesentium quaerat doloremque ducimus illum veritatis reprehenderit voluptates molestiae vel adipisci temporibus quidem. Minima facere repellendus quaerat cum in.")


//images
let containerImg2 = new ItemHtml("div", "class", "containerImg", mainContainer2._type)

let img10 = new ItemHtml("img", "src", "public/img/icon-analyse-flux-web.png", containerImg2._type)
let img11 = new ItemHtml("img", "src", "public/img/icon-campagne-facebook.png", containerImg2._type)
let img12 = new ItemHtml("img", "src", "public/img/icon-campagne-facebook.png", containerImg2._type)
let img13 = new ItemHtml("img", "src", "public/img/icon-campagne-e-mailing.png", containerImg2._type)



//footer

let footer = new ItemHtml("footer", "", "", containerSite._type)
let containerFooter = new ItemHtml("div", "class", "containerFooter", footer._type)
let pack = new ItemHtml("div", "class", "contenuFooter", containerFooter._type)
let outils = new ItemHtml("div", "class", "contenuFooter", containerFooter._type)
let socialMedia = new ItemHtml("div", "class", "contenuFooter", containerFooter._type)

let packText = new ItemHtml("div", "class", "packtext", pack._type)
packText.insertHtml("Packs")

let packContenu = new ItemHtml("div", "class", "contenuFooterImg", pack._type)


let img14 = new ItemHtml("img", "src", "public/img/icon-eclosion.png", packContenu._type)
let img15 = new ItemHtml("img", "src", "public/img/icon-evolution.png", packContenu._type)
let img16 = new ItemHtml("img", "src", "public/img/icon-envole.png", packContenu._type)

let outilText = new ItemHtml("div", "class", "packtext", outils._type)
outilText.insertHtml("Outils")

let outilContenu = new ItemHtml("div", "class", "contenuFooterImg", outils._type)

let img17 = new ItemHtml("img", "src", "public/img/identite-graphique.png", outilContenu._type)
let img18 = new ItemHtml("img", "src", "public/img/reseaux-sociaux.png", outilContenu._type)
let img19 = new ItemHtml("img", "src", "public/img/print.png", outilContenu._type)



let mediaText = new ItemHtml("div", "class", "packtext", socialMedia._type)
mediaText.insertHtml("Social Media")


let socialContenu = new ItemHtml("div", "class", "contenuFooterImg", socialMedia._type)

let img20 = new ItemHtml("img", "src", "public/img/social-f.png", socialContenu._type)
let img21 = new ItemHtml("img", "src", "public/img/google-plus.png", socialContenu._type)


