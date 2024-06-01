//Arrays para armazenar os dados!
var anguloAarray = [];
var anguloBarray = [];
var catetoXAarray = [];
var catetoYAarray = [];
var hipotenusaAarray = [];
var areaTriangulo = [];
var perimetroTriangulo = [];


function limpar() {
    //Limpa o básico!
    document.getElementById('paragrafoa').innerHTML = "";
    document.getElementById('paragrafob').innerHTML = "";
    document.getElementById('paragrafox').innerHTML = "";
    document.getElementById('paragrafoy').innerHTML = "";
    document.getElementById('paragrafoz').innerHTML = "";
    document.getElementById('paragrafo1').innerHTML = "";
    document.getElementById('paragrafo2').innerHTML = "";
    document.getElementById('erro').innerHTML = "";
    anguloAarray = [];
    anguloBarray = [];
    catetoXAarray = [];
    catetoYAarray = [];
    hipotenusaAarray = [];
    areaTriangulo = [];
    perimetroTriangulo = [];
}

function limpartudo() {
    //Limpa o básico e onde insere informações!
    limpar()
    document.getElementById('cateto-1').value = "";
    document.getElementById('angulo-1').value = "";
    document.getElementById('angulo-2').value = "";
    document.getElementById('cateto-1').value = "";
    document.getElementById('cateto-2').value = "";
    document.getElementById('hipotenusa').value = "";
}

function presseguir() {
    //Ao clicar calcular ele chama a funcao limpar
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

    // Checando pelas caracteristicas se é um triangulo ou não!
    if (catetoXAarray.length == 1 && catetoYAarray.length == 1 && hipotenusaAarray.length == 1) {
        // Possuindo os 3 valores o codigo barra
        document.getElementById('erro').innerHTML = "Tente remover o valor da Hipotenusa ou algum Cateto!";
    } else if (catetoXAarray.length == 0 && catetoYAarray.length == 0 && hipotenusaAarray.length == 0 && anguloAarray.length == 0 && anguloBarray.length == 0) {
        // Não possuir valor de X, Y, Z, A OU B codigo barra
        document.getElementById('erro').innerHTML = "Foneça dados!";
    } else if (anguloAarray[0] >= 90 || anguloBarray[0] >= 90) {
        // Angulos inseridos não podem ser maiores ou iguais que 90
        document.getElementById('erro').innerHTML = "Esse triangulo não existe!";
    } else if (catetoXAarray[0] == hipotenusaAarray[0] && catetoYAarray.length == 0 || catetoYAarray[0] == hipotenusaAarray[0] && catetoXAarray.length == 0) {
        // X igual a Z e Y não tendo o valor de Y ou Y igual a Z e não tendo valor de X o codigo barra
        document.getElementById('erro').innerHTML = "Esse triangulo não existe!";
    } else if (anguloAarray.length == 1 && anguloBarray.length == 1) {
        // FUNIL com os dois angulos inseridos
        if (catetoXAarray.length == 1 && catetoYAarray.length == 1 && hipotenusaAarray.length == 0) {
            // Inserindo os dois angulos e de X, Y não de Z o codigo barra
            document.getElementById('erro').innerHTML = "Esse triangulo não existe!";
        } else if (catetoXAarray.length == 1 && catetoYAarray.length == 0 && hipotenusaAarray.length == 1) {
            // Inserindo os dois angulos e de X e Z o codigo barra
            document.getElementById('erro').innerHTML = "Esse triangulo não existe!";
        } else if (catetoXAarray.length == 0 && catetoYAarray.length == 1 && hipotenusaAarray.length == 1) {
            // Inserindo os dois angulos e de Y e Z o codigo barra
            document.getElementById('erro').innerHTML = "Esse triangulo não existe!";
        } else if (catetoXAarray.length == 0 && catetoYAarray.length == 0 && hipotenusaAarray.length == 0) {
            // Inserindo os dois angulos e nenhum outro o codigo barra.
            document.getElementById('erro').innerHTML = "Esse triangulo não existe!";
        } else {
            stage2();
        }
    } else {
        stage2();
    }
}

function stage2() {
    //Funções que o código vai chamar!
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
    //Calcula a area do Triangulo!
    var areaTri = (catetoXAarray[0] * catetoYAarray[0]) / 2;
    var perimeTri = Number(catetoXAarray[0]) + Number(catetoYAarray[0]) + Number(hipotenusaAarray[0]);
    areaTriangulo.push(areaTri)
    perimetroTriangulo.push(perimeTri)
}

function prosseguindo() {

    function ehTrianguloRetangulo(a, b, c, tolerancia = 1e-10) {
        // Ordena os lados para garantir que 'c' seja o maior
        let lados = [a, b, c].sort((x, y) => x - y);
        let [lado1, lado2, hipotenusa] = lados;
    
        // Verifica o Teorema de Pitágoras com uma margem de tolerância
        let diferenca = Math.abs(Math.pow(lado1, 2) + Math.pow(lado2, 2) - Math.pow(hipotenusa, 2));
        
        return diferenca <= tolerancia;
    }
    
    // Exemplo de uso:
    let a = catetoXAarray[0];
    let b = catetoYAarray[0];
    let c = hipotenusaAarray[0];
    
    if (ehTrianguloRetangulo(a, b, c)) {
        //Aproximando os números finais para exibir
        var aanguloA = Number(anguloAarray[0]).toFixed(3);
        var aanguloB = Number(anguloBarray[0]).toFixed(3);
        var ccatetoX = Number(catetoXAarray[0]).toFixed(3);
        var ccatetoY = Number(catetoYAarray[0]).toFixed(3);
        var hhipotenusa = Number(hipotenusaAarray[0]).toFixed(3);
        var aareatriangulo = Number(areaTriangulo[0]).toFixed(3);
        var pperimetrotriangulo = Number(perimetroTriangulo[0]).toFixed(3);

        //Exibindo na tela!
        document.getElementById('paragrafoa').innerHTML = `${aanguloA} \u00B0`;
        document.getElementById('paragrafob').innerHTML = `${aanguloB} \u00B0`;
        document.getElementById('paragrafox').innerHTML = ccatetoX;
        document.getElementById('paragrafoy').innerHTML = ccatetoY;
        document.getElementById('paragrafoz').innerHTML = hhipotenusa;
        document.getElementById('paragrafo1').innerHTML = aareatriangulo;
        document.getElementById('paragrafo2').innerHTML = pperimetrotriangulo;
    } else {
        document.getElementById('erro').innerHTML = "Revise os dados fornecidos!";
    }
}