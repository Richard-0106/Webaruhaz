$(function () {
    
    function beolvas(termekek,szulo, osztaly) {
      const  szuloElem = $(szulo)
      const  sablonElem = $("#sablon .kartya")
      
        
       
        sablonElem.show()
        szuloElem.empty()
            for (let index = 0; index < termekek.length; index++) {
                const ujElem = sablonElem.clone().appendTo(szuloElem)
                const ujkartya = new osztaly(ujElem, termekek[index])
            }
        sablonElem.hide()
    }
    window.beolvas = beolvas
})