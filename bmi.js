console.log("Hello world")

function computeBMI(boy,kilo){
    return kilo / Math.pow(boy,2)       
}

function hesapla() {

    var kilo      =document.getElementById("kilo").value
    var boy     =document.getElementById("boy").value

    var sonuc=computeBMI(boy,kilo)
    console.log(sonuc)
    document.getElementById("sonuc").innerHTML= "sonuç: " + sonuc
}


















    



  