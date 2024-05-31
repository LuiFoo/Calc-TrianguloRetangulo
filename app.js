var anguloAarray = [];
var anguloBarray = [];
var catetoXAarray = [];
var catetoYAarray = [];
var hipotenusaAarray = [];
var areaTriangulo = [];
var perimetroTriangulo = [];

function limpar() {
    document.getElementById('paragrafoa').innerHTML = "";
    document.getElementById('paragrafob').innerHTML = "";
    document.getElementById('paragrafox').innerHTML = "";
    document.getElementById('paragrafoy').innerHTML = "";
    document.getElementById('paragrafoz').innerHTML = "";
    document.getElementById('erro').innerHTML = "";
    anguloAarray = [];
    anguloBarray = [];
    catetoXAarray = [];
    catetoYAarray = [];
    hipotenusaAarray = [];
    areaTriangulo = [];
    perimetroTriangulo = [];
}

function presseguir() {
    limpar()

    //Adicionando valores em Array
    if (document.getElementById('angulo-1').value > 0) {
        Number(anguloAarray.push(document.getElementById('angulo-1').value));
    }
    if (document.getElementById('angulo-2').value > 0) {
        Number(anguloBarray.push(document.getElementById('angulo-2').value));
    }
    if (document.getElementById('cateto-1').value > 0) {
        Number(catetoXAarray.push(document.getElementById('cateto-1').value));
    }
    if (document.getElementById('cateto-2').value > 0) {
        Number(catetoYAarray.push(document.getElementById('cateto-2').value));
    }
    if (document.getElementById('hipotenusa').value > 0) {
        Number(hipotenusaAarray.push(document.getElementById('hipotenusa').value));
    }
    stage2();
}

function stage2() {
    pitagoras();
    trigonometria();
    areaeperimetro();
    prosseguindo();
}

function pitagoras() {
    //Descobrindo Hipotenusa com dados de Y e X
    if (hipotenusaAarray.length == 0 && catetoXAarray[0] > 0 && catetoYAarray[0] > 0) {
        var pitagorasHip = (catetoXAarray[0] ** 2 + catetoYAarray[0] ** 2) ** 0.5;
        hipotenusaAarray.push(pitagorasHip);
        stage2();
    } else if (hipotenusaAarray[0] > 0 && catetoXAarray.length == 0 && catetoYAarray[0] > 0) {
        var pitagorasCatX = (hipotenusaAarray[0] ** 2 - catetoYAarray[0] ** 2) ** 0.5;
        catetoXAarray.push(pitagorasCatX);
        stage2();
    } else if (hipotenusaAarray[0] > 0 && catetoXAarray[0] > 0 && catetoYAarray.length == 0) {
        var pitagorasCatY = (hipotenusaAarray[0] ** 2 - catetoXAarray[0] ** 2) ** 0.5;
        catetoYAarray.push(pitagorasCatY);
        stage2();
    }
}

function trigonometria() {
    // Seno A
    if (anguloAarray.length == 0 && catetoXAarray.length == 1 && hipotenusaAarray.length == 1) {
        // Descobrindo Angulo A com X / Z
        var senoA = catetoXAarray[0] / hipotenusaAarray[0];
        var angulosA_radianos = Math.asin(senoA);
        var angulos_graus = angulosA_radianos * (180 / Math.PI);
        anguloAarray.push(angulos_graus);
        stage2();
    } else if (anguloAarray.length == 1 && catetoXAarray.length == 0 && hipotenusaAarray.length == 1) {
        // Descobrindo X COM SENO(A) * Z
        var anguloRadianos = anguloAarray[0] * (Math.PI / 180);
        var senoADesZ = Math.sin(anguloRadianos);
        var catetoX = senoADesZ * hipotenusaAarray[0];
        catetoXAarray.push(catetoX);
        stage2();
    } else if (anguloAarray.length == 1 && catetoXAarray.length == 1 && hipotenusaAarray.length == 0) {
        // Descobrindo Z com X / SENO(A)
        var anguloRadianos = anguloAarray[0] * (Math.PI / 180);
        var senoADesX = Math.sin(anguloRadianos);
        var hipot = catetoXAarray[0] / senoADesX;
        hipotenusaAarray.push(hipot);
        stage2();
    }

    // Seno B
    if (anguloBarray.length == 1 && catetoYAarray.length == 1 && hipotenusaAarray.length == 0) {
        // Descobrindo Z com Y / SENO(B)
        var anguloRadianos = anguloBarray[0] * (Math.PI / 180);
        var senoBDesZ = Math.sin(anguloRadianos);
        var hipot = catetoYAarray[0] / senoBDesZ;
        hipotenusaAarray.push(hipot);
        stage2();
    }

    // Cos B
    if (anguloBarray.length == 0 && catetoXAarray.length == 1 && hipotenusaAarray.length == 1) {
        // Descobrindo Angulo B com X / Z
        var cosB = catetoXAarray[0] / hipotenusaAarray[0];
        var angulosB_radianos = Math.acos(cosB);
        var angulosB_graus = angulosB_radianos * (180 / Math.PI);
        anguloBarray.push(angulosB_graus);
        stage2();
    } else if (anguloBarray.length == 1 && catetoXAarray.length == 0 && hipotenusaAarray.length == 1) {
        // Descobrindo X COM COS(B) * Z
        var anguloRadianos = anguloBarray[0] * (Math.PI / 180);
        var senoBDesX = Math.cos(anguloRadianos);
        var catetoX = senoBDesX * hipotenusaAarray[0];
        catetoXAarray.push(catetoX);
        stage2();
    } else if (anguloBarray.length == 1 && catetoXAarray.length == 1 && hipotenusaAarray.length == 0) {
        // Descobrindo Z com X / COS(B)
        var anguloRadianos = anguloBarray[0] * (Math.PI / 180);
        var senoBDesZ = Math.cos(anguloRadianos);
        var hipot = catetoXAarray[0] / senoBDesZ;
        hipotenusaAarray.push(hipot);
        stage2();
    }
    
    // COS A
    if (anguloAarray.length == 1 && catetoYAarray.length == 1 && hipotenusaAarray.length == 0) {
        // Descobrindo Z com X / COS(B)
        var anguloRadianos = anguloAarray[0] * (Math.PI / 180);
        var senoAYDesZ = Math.cos(anguloRadianos);
        var hipot = catetoYAarray[0] / senoAYDesZ;
        hipotenusaAarray.push(hipot);
        stage2();
    }
    
}

function areaeperimetro() {
    var areaTri = (catetoXAarray[0] * catetoYAarray[0]) / 2;
    var perimeTri = Number(catetoXAarray[0]) + Number(catetoYAarray[0]) + Number(hipotenusaAarray[0]);
    areaTriangulo.push(areaTri)
    perimetroTriangulo.push(perimeTri)
}

function prosseguindo() {
    if (anguloAarray.length == 0 || anguloBarray.length == 0 || catetoXAarray.length == 0 || catetoYAarray.length == 0 || hipotenusaAarray.length == 0) { 
        document.getElementById('erro').innerHTML = "Erro Wello Horld";
    } else {
        document.getElementById('paragrafoa').innerHTML = `${anguloAarray[0]} \u00B0`;
        document.getElementById('paragrafob').innerHTML = `${anguloBarray[0]} \u00B0`;
        document.getElementById('paragrafox').innerHTML = catetoXAarray[0];
        document.getElementById('paragrafoy').innerHTML = catetoYAarray[0];
        document.getElementById('paragrafoz').innerHTML = hipotenusaAarray[0];
        document.getElementById('paragrafo1').innerHTML = areaTriangulo[0];
        document.getElementById('paragrafo2').innerHTML = perimetroTriangulo[0];
    }
}