class Kosar {
    constructor() {
        if (localStorage.getItem("kosaram") === null) {
            this.kosar = []
        } else {
            this.kosar = JSON.parse(localStorage.getItem("kosaram"))
            console.log(localStorage.getItem("kosaram"))
        }
        this.megjelenit()
        
    }
    termekEltarolas(termek) {
        this.kosar.push(termek)
        this.adatokKimentese()
        this.megjelenit()
    }
    megjelenit() {
        $("#termekTarolas").empty()
        this.kosar.forEach((element, id) => {
            $("#termekTarolas").append("<div class='termekKosarban'><p>" + element.nev + "</p><p>" + element.ar + "</p></div><input type='button' value='Törlés' class='torlesGomb' id='" + id + "'>")
        });
        $(".torles-gomb").on("click", (event) => {
            console.log(this)
            const aktualisId = $(event.target).attr("id");
            this.kosar.splice(aktualisId, 1);
            this.adatokKimentese()
            this.megjelenit()
        })
        this.termekArOsszeg()
    }
    termekArOsszeg() {
        let osszeg = 0
        this.kosar.forEach(element => {
            osszeg += element.ar
        });
        if (osszeg === 0) {
            $(".osszeg").html("")
        } else {
            $(".osszeg").html(osszeg)
        }
    }

    adatokKimentese() {
        const JSONadathalmaz = JSON.stringify(this.kosar)
        localStorage.setItem("kosaram", JSONadathalmaz)
    }
}

