class Termek{
    constructor(elem,adat){
        this.elem=elem
        this.adat=adat
    }
    setAdat(ertek){
        this.nev.html(ertek.nev)
        this.ar.html(ertek.ar)
        this.leiras.html(ertek.leiras)
        this.kep.attr("src", ertek.kep)

    }
}
class TermekGaleria extends Termek{
    constructor(elem,adat){
        super(elem,adat)
        this.nev=this.elem.children("h3")
        this.ar=this.elem.children("#ar")
        this.kep=this.elem.children("img")  
        this.leiras=this.elem.children("#leiras")
        this.gomb=this.elem.children("#kosarba")
        this.kep=this.elem.children("img")  
        this.setAdat(this.adat)
        this.gomb.on("click",()=>{
            this.kattintasEsemeny()
        });
    }
    kattintasEsemeny(){
        let esemeny=new CustomEvent("termekValasztas",{detail:this.adat})
        window.dispatchEvent(esemeny)  
    }
}
class TermekAdmin extends Termek{
    constructor(elem,adat){
        super(elem,adat)
        this.nev=this.elem.children(".nev")
        this.ar=this.elem.children(".ar")
        this.kep=this.elem.find(".kep")  
        this.leiras=this.elem.children(".leiras")
        this.torlesgomb=this.elem.find(".torles-gomb")
        this.modositgomb=this.elem.find(".modosit-gomb")
        this.setAdat(this.adat)
        console.log(this.elem)
        this.torlesgomb.on("click",()=>{
            this.torlesEsemeny()
        });
        this.modositgomb.on("click",()=>{
            this.modositEsemeny()
        });
    }
    torlesEsemeny(){
        let esemeny=new CustomEvent("termekTorles",{detail:this.adat})
        window.dispatchEvent(esemeny)
    }
    modositEsemeny(){
        let esemeny=new CustomEvent("termekModositas",{detail:this.adat})
        window.dispatchEvent(esemeny)
    }

}