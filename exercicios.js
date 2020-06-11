var todasNotasEOitavas = [
	"C1", "C#1|Db1", "D1", "D#1|Eb1", "E1", "F1", "F#1|Gb1", "G1", "G#1|Ab1", "A1", "A#1|Bb1", "B1",
	"C2", "C#2|Db2", "D2", "D#2|Eb2", "E2", "F2", "F#2|Gb2", "G2", "G#2|Ab2", "A2", "A#2|Bb2", "B2",
	"C3", "C#3|Db3", "D3", "D#3|Eb3", "E3", "F3", "F#3|Gb3", "G3", "G#3|Ab3", "A3", "A#3|Bb3", "B3",
	"C4", "C#4|Db4", "D4", "D#4|Eb4", "E4", "F4", "F#4|Gb4", "G4", "G#4|Ab4", "A4", "A#4|Bb4", "B4",
	"C5", "C#5|Db5", "D5", "D#5|Eb5", "E5", "F5", "F#5|Gb5", "G5", "G#5|Ab5", "A5", "A#5|Bb5", "B5",
	"C6", "C#6|Db6", "D6", "D#6|Eb6", "E6", "F6", "F#6|Gb6", "G6", "G#6|Ab6", "A6", "A#6|Bb6", "B6",
	"C7", "C#7|Db7", "D7", "D#7|Eb7", "E7", "F7", "F#7|Gb7", "G7", "G#7|Ab7", "A7", "A#7|Bb7", "B7"
];

var nomesIntervalos = [
	"SEGUNDA menor", 
	"SEGUNDA maior", 
	"TERÇA menor", 
	"TERÇA maior", 
	"QUARTA justa", 
	"QUARTA aumentada", 
	"QUINTA diminuta", 
	"QUINTA justa", 
	"QUINTA aumentada",
	"SEXTA menor",
	"SEXTA maior",
	"SEXTA aumentada",
	"SÉTIMA menor",
	"SÉTIMA maior"
];

var codigosIntervalos = [
	"b2", 
	"2", 
	"b3", 
	"3", 
	"4", 
	"#4", 
	"b5", 
	"5", 
	"#5",
	"b6",
	"6",
	"#6",
	"b7",
	"7"
];
	
var distanciaIntervalos =  [
	1, 
	2, 
	3, 
	4, 
	5, 
	6, 
	6, 
	7, 
	8,
	8,
	9,
	10,
	10,
	11
];

var tipoAcordes = [
	"Maior",
	"Menor"
];

var posicoesAcordes = [
	"Posição fundamental",
	"Primeira inversão",
	"Segunda inversão"
]


// ============================================================
// UTIL
// ------------------------------------------------------------

function sortearElementoArray(arr)
{
	return arr[Math.floor(Math.random() * arr.length)];
}

function removerOitava(notaEOitava)
{
	var result = notaEOitava.replace(/1/g,"");
	result = result.replace(/2/g,"");
	result = result.replace(/3/g,"");
	result = result.replace(/4/g,"");
	result = result.replace(/5/g,"");
	result = result.replace(/6/g,"");
	result = result.replace(/7/g,"");
	
	return result;
}

// ------------------------------------------------------------
// UTIL
// ============================================================

// ============================================================
// GERAL
// ------------------------------------------------------------

// Retorna a distância de um intervalo, dado um código de intervalo.
function getDistanciaIntervaloPorCodigo(codigoIntervalo)
{
	return distanciaIntervalos[codigosIntervalos.indexOf(codigoIntervalo)];
}

// Retorna o nome de um intervalo, dado um código de intervalo.
function getNomeIntervaloPorCodigo(codigoIntervalo)
{
	return nomesIntervalos[codigosIntervalos.indexOf(codigoIntervalo)];
}

function getIndiceNotaEOitava (notaEOitava) 
{
	return todasNotasEOitavas.indexOf(notaEOitava)
}

function getNotaIntervalo(notaEOitavaBase, nomeIntervalo) 
{
	var indNota = todasNotasEOitavas.indexOf(notaEOitavaBase)
	var indIntervalo = nomesIntervalos.indexOf(nomeIntervalo)
	
	return todasNotasEOitavas[indNota + distanciaIntervalos[indIntervalo]]
}
/*
function getIntervaloAleatorio() {
	return nomesIntervalos[Math.floor(Math.random() * nomesIntervalos.length)]
}

function getNotaAleatoria(oitava)
{
	if (typeof(oitava) === undefined) {
		console.log("getNotaAleatoria. Oitava:" + oitava)
		return todasNotasEOitavas[Math.floor(Math.random() * todasNotasEOitavas.length)]
	}
	
	var ind = Math.floor(Math.random() * 12) + ((oitava - 1) * 12)
	return todasNotasEOitavas[ind]
}
*/


// ------------------------------------------------------------
// GERAL
// ============================================================


// ============================================================
// COMPLETAR INTERVALO (ini)
// ------------------------------------------------------------
function SelecionarTeclasBrancasOuPretas() 
{
	var teclasBrancas = document.getElementById("chkGrupoNotasTeclasBrancas").checked;
	var teclasPretas = document.getElementById("chkGrupoNotasTeclasPretas").checked;
	
	document.getElementById("chkNotaC").checked = teclasBrancas;
	document.getElementById("chkNotaD").checked = teclasBrancas;
	document.getElementById("chkNotaE").checked = teclasBrancas;
	document.getElementById("chkNotaF").checked = teclasBrancas;
	document.getElementById("chkNotaG").checked = teclasBrancas;
	document.getElementById("chkNotaA").checked = teclasBrancas;
	document.getElementById("chkNotaB").checked = teclasBrancas;
	
	document.getElementById("chkNotaCsDb").checked = teclasPretas;
	document.getElementById("chkNotaDsEb").checked = teclasPretas;
	document.getElementById("chkNotaFsGb").checked = teclasPretas;
	document.getElementById("chkNotaGsAb").checked = teclasPretas;
	document.getElementById("chkNotaAsBb").checked = teclasPretas;
	
}


function iniciarCompletarOuIdentificarIntervalo(completarOuIdentificar) 
{
	var _tipoIntervalo = []; // (array com os códigos dos tipos de intervalos selecionados)
	var _direcaoIntervalo = []; // "asc", "desc" (array, com 1 ou duas posições)
	var _notasBase = []; // array com as notas selecionadas, já com as oitavas
	var _tipoDestaque; // "inteira", "circulo"

	var chkTipoIntervalo = document.getElementsByName("chkTipoIntervalo");
	var chkDirecaoIntervalo = document.getElementsByName("chkDirecaoIntervalo");
	var chkNotas = document.getElementsByName("chkNotas");
	var radTeclaInteira = document.getElementById("radTipoDestaqueTeclaInteira");

	for (var i = 0; i < chkTipoIntervalo.length; i++)
	{
		if (chkTipoIntervalo[i].checked)
		{
			_tipoIntervalo.push(chkTipoIntervalo[i].value);
		}
	}
	
	for (var i = 0; i < chkDirecaoIntervalo.length; i++)
	{
		if (chkDirecaoIntervalo[i].checked)
		{
			_direcaoIntervalo.push(chkDirecaoIntervalo[i].value);
		}
	}
	
	for (var i = 0; i < chkNotas.length; i++) 
	{
		if (chkNotas[i].checked) 
		{
			_notasBase.push(chkNotas[i].value.replace("|", "4|") + "4");
		}			
	}
	
	if (radTeclaInteira.checked) 
		_tipoDestaque = "inteira"
	else
		_tipoDestaque = "circulo";

	if (_tipoIntervalo.length == 0) 
	{
		alert("Selecione ao menos um tipo de intervalo.");
		return;
	}
	
	if (_direcaoIntervalo.length == 0) 
	{
		alert("Selecione ao menos uma direção.");
		return;
	}
	
	if (_notasBase.length == 0)
	{
		alert("Selecione ao menos uma nota base.");
		return;
	}

	localStorage["_tipoIntervalo"] = _tipoIntervalo
	localStorage["_direcaoIntervalo"] = _direcaoIntervalo
	localStorage["_notasBase"] = _notasBase
	localStorage["_tipoDestaque"] = _tipoDestaque
	
	if (completarOuIdentificar == "completar")
		window.location.href = "completarIntervaloExecucao.html";
	else if (completarOuIdentificar == "identificar")
		window.location.href = "identificarIntervaloExecucao.html";
}

var _notaBaseSorteada = "";
var _codigoIntervaloSorteado = "";
var _direcaoSorteada = "";
var _respostaEsperada = "";

function solicitarCompletarIntervalo() 
{
	_notaBaseSelecionada = sortearElementoArray(localStorage["_notasBase"].split(","));	
	_codigoIntervaloSorteado = sortearElementoArray(localStorage["_tipoIntervalo"].split(","));
	_direcaoSorteada = sortearElementoArray(localStorage["_direcaoIntervalo"].split(","));
	
	var distancia = getDistanciaIntervaloPorCodigo(_codigoIntervaloSorteado);
	
	if (_direcaoSorteada == "asc")
		_respostaEsperada = todasNotasEOitavas[todasNotasEOitavas.indexOf(_notaBaseSelecionada) + distancia];
	else
		_respostaEsperada = todasNotasEOitavas[todasNotasEOitavas.indexOf(_notaBaseSelecionada) - distancia];	
	
	var container = document.getElementById("antesTecladoContainer")
	
	container.style = "text-align: left;";
	container.innerHTML = "<span style='color: #159957'>Complete o intervalo com uma </span>" +
	    "<span style='color: blue'>" + getNomeIntervaloPorCodigo(_codigoIntervaloSorteado) + 
		"</span>, <span style='color: orange'>" + _direcaoSorteada.replace("asc", "ascendente").replace("desc", "descendente") + "</span>";
	
	pressionarNotas(_notaBaseSelecionada, "yellow", localStorage["_tipoDestaque"]);
	
	// iniciarCronometroExercicioCompletarIntervalo();
}

function clicouProximoCompletarIntervalo() 
{
	document.getElementById("botaoProximoContainer").style = "display:none";
	solicitarCompletarIntervalo();
}


function conferirResposta(resposta) 
{
	pararCronometroExercicioCompletarIntervalo();
	if (resposta == _respostaEsperada)
	{
		pressionarNotas(_notaBaseSelecionada + "," + resposta, "yellow,lime", localStorage["_tipoDestaque"]);
		aguardar(1000, solicitarCompletarIntervalo);
	}
	else
	{
		pressionarNotas(_notaBaseSelecionada + "," + resposta + "," + _respostaEsperada, "yellow,orangered,lime", localStorage["_tipoDestaque"]);
		document.getElementById("antesTecladoContainer").innerHTML = "<span style='color: orangered'>Clique na resposta correta para continuar: </span>"+
			"<span style='color: blue'>" + getNomeIntervaloPorCodigo(_codigoIntervaloSorteado) + 
			"</span>, <span style='color: orange'>" + _direcaoSorteada.replace("asc", "ascendente").replace("desc", "descendente") + "</span>";
		
	}
}

var _crono;
function iniciarCronometroExercicioCompletarIntervalo() 
{
	_crono = iniciarCronometro(tratarTickExercicioCompletarIntervalo);
}

function pararCronometroExercicioCompletarIntervalo() 
{
	pararCronometro(_crono);
}

function tratarTickExercicioCompletarIntervalo(tempo)
{
	var container = document.getElementById("aposTecladoContainer");
	
	container.style = "text-align: center; font-size: larger";
	container.innerHTML = tempo;
}

// ------------------------------------------------------------
// COMPLETAR INTERVALO (fim)
// ============================================================


// ============================================================
// IDENTIFICAR INTERVALO (ini)
// ------------------------------------------------------------

function solicitarIdentificarIntervalo() 
{
	limparCoresBotoesIntervalos();
    document.getElementById("antesTecladoContainer").innerHTML = "";
	
	var notaBaseSelecionada = sortearElementoArray(localStorage["_notasBase"].split(","));	
	var codigoIntervaloSorteado = sortearElementoArray(localStorage["_tipoIntervalo"].split(","));
	
	_respostaEsperada = getNomeIntervaloPorCodigo(codigoIntervaloSorteado);	
	var distancia = getDistanciaIntervaloPorCodigo(codigoIntervaloSorteado);
	
	var segundaNota = todasNotasEOitavas[todasNotasEOitavas.indexOf(notaBaseSelecionada) + distancia];
	
	pressionarNotas(notaBaseSelecionada + "," + segundaNota, "yellow,yellow", localStorage["_tipoDestaque"]);
	
	var container = document.getElementById("antesTecladoContainer")
	
	container.style = "text-align: left;";
	container.innerHTML = "<span style='color: #159957'>Identifique o intervalo. </span>";
	
	
	//iniciarCronometroExercicioIdentificarIntervalo();
}

function conferirRespostaIdentificarIntervalo(botaoResposta)
{
	//pararCronometroExercicioIdentificarIntervalo();
	var resposta = (botaoResposta.innerText + "\n").split("\n");
	var respostaConfere = false;
	
	for (var i = 0; i < resposta.length - 1; i++) 
	{
		respostaConfere = resposta[i].trim() == _respostaEsperada;
		if (respostaConfere) 
			break;
	}	
	
	if (respostaConfere)
	{
		botaoResposta.style.backgroundColor = "lime";
		aguardar(1000, solicitarIdentificarIntervalo);
	}
	else
	{
		//pressionarNotas(_notaBaseSelecionada + "," + resposta + "," + _respostaEsperada, "yellow,orangered,lime");
		//document.getElementById("botaoProximoContainer").style = "display:block";
		botaoResposta.style.backgroundColor = "orangered";
		
		var botoesIntervalos = document.getElementsByName("btnIntervalo");
		for (var i = 0; i < botoesIntervalos.length; i++) 
		{
			resposta = (botoesIntervalos[i].innerText + "\n").split("\n");
			respostaConfere = false;
			
			for (var j = 0; j < resposta.length - 1; j++) 
			{
				respostaConfere = resposta[j].trim() == _respostaEsperada;
				if (respostaConfere) 
					break;
			}	
			
			if (respostaConfere) 
			{
				botoesIntervalos[i].style.backgroundColor = "lime";
		        document.getElementById("antesTecladoContainer").innerHTML = "<span style='color: orangered'>Clique na resposta correta para continuar. </span>";
				break
			}
		}	
	}
}

function limparCoresBotoesIntervalos()
{
	var botoes = document.getElementsByName("btnIntervalo");
	
	for (var i = 0; i < botoes.length; i++)
	{
		botoes[i].style.background = "white";
	}
}

function iniciarCronometroExercicioIdentificarIntervalo() 
{
	_crono = iniciarCronometro(tratarTickExercicioIdentificarIntervalo);
}

function pararCronometroExercicioIdentificarIntervalo() 
{
	pararCronometro(_crono);
}

function tratarTickExercicioIdentificarIntervalo(tempo)
{
	var container = document.getElementById("aposTecladoContainer");
	
	container.style = "text-align: center; font-size: larger;";
	container.innerHTML = tempo;
}

// ------------------------------------------------------------
// IDENTIFICAR INTERVALO (fim)
// ============================================================


// ============================================================
// ACORDES - GERAL (ini)
// ------------------------------------------------------------
function getRegraFormacaoAcorde(tipoAcorde, posicao)
{
	if (posicao == "Posição fundamental")
	{
		if (tipoAcorde == "Maior")
			return "0,4,7";
		else if (tipoAcorde == "Menor")
			return "0,3,7";
		return "";
	}
	else if (posicao == "Primeira inversão")
	{
		if (tipoAcorde == "Maior")
			return "-8,-5,0";
		else if (tipoAcorde == "Menor")
			return "-9,-5,0";
		return "";
	}
	else if (posicao == "Segunda inversão")
	{
		if (tipoAcorde == "Maior")
			return "-5,0,4";
		else if (tipoAcorde == "Menor")
			return "-5,0,3";
		return "";
	}
}

function getNotasAcorde(notaBase, tipoAcorde, posicao) 
{
	var result = [];
	var arrRegra = getRegraFormacaoAcorde(tipoAcorde, posicao).split(",");	
	
	var indNotaBase = todasNotasEOitavas.indexOf(notaBase);
	
	for (var i = 0; i < arrRegra.length; i++) 
	{
		result.push(todasNotasEOitavas[(indNotaBase + parseInt(arrRegra[i]))]);
	}	
	return result.toString();
}

// ------------------------------------------------------------
// ACORDES - GERAL (fim)
// ============================================================


// ============================================================
// DITADO DE ACORDES 1 (ini)
// ------------------------------------------------------------
function iniciarDitadoAcordes1() 
{
	var notasBase = []; // array com as notas selecionadas, já com as oitavas
	var tiposAcorde = []; // (array com os tipos de acorde selecionados)
	var posicoesAcorde = []; // (array com as posições de acorde selecionadas)

	var chkNotas = document.getElementsByName("chkNotas");
	var chkTipoAcorde = document.getElementsByName("chkTipoAcorde");
	var chkPosicaoAcorde = document.getElementsByName("chkPosicaoAcorde");
	var txtTempoEntreAcordes = document.getElementById("txtTempoEntreAcordes");
	var radCoresIguais = document.getElementById("radCoresIguais");

	for (var i = 0; i < chkNotas.length; i++) 
	{
		if (chkNotas[i].checked) 
		{
			notasBase.push(chkNotas[i].value.replace("|", "4|") + "4");
		}			
	}

	for (var i = 0; i < chkTipoAcorde.length; i++)
	{
		if (chkTipoAcorde[i].checked)
		{
			tiposAcorde.push(chkTipoAcorde[i].value);
		}
	}
	
	for (var i = 0; i < chkPosicaoAcorde.length; i++)
	{
		if (chkPosicaoAcorde[i].checked)
		{
			posicoesAcorde.push(chkPosicaoAcorde[i].value);
		}
	}	
	
	if (notasBase.length == 0)
	{
		alert("Selecione ao menos uma nota base.");
		return;
	}

	if (tiposAcorde.length == 0) 
	{
		alert("Selecione ao menos um tipo de acorde.");
		return;
	}
	
	if (posicoesAcorde.length == 0) 
	{
		alert("Selecione ao menos uma posição.");
		return;
	}
	
	localStorage["notasBase"] = notasBase
	localStorage["tiposAcorde"] = tiposAcorde;
	localStorage["posicoesAcorde"] = posicoesAcorde;
	localStorage["tempoEntreAcordes"] = txtTempoEntreAcordes.value;
	localStorage["coresIguais"] = radCoresIguais.checked;
	
	window.location.href = "ditadoAcordes1Execucao.html";
}

var _notaBaseAtual = "?";
var _notaBaseApresentacaoAtual = "?";
var _tipoAcordeAtual = "?";
var _posicaoAcordeAtual = "?";
function solicitarDitadoAcordes1() 
{
	var notaBaseSorteada = sortearElementoArray(localStorage["notasBase"].split(","));	
	var tipoAcordeSorteado = sortearElementoArray(localStorage["tiposAcorde"].split(","));
	var posicaoAcordeSorteado = sortearElementoArray(localStorage["posicoesAcorde"].split(","));
	var tempoEntreAcordes = parseInt(localStorage["tempoEntreAcordes"]);	
	
	if (_notaBaseAtual != "?") 
	{
		var notasAcorde = getNotasAcorde(_notaBaseAtual, _tipoAcordeAtual, _posicaoAcordeAtual);	
		var cores = "";
		
		if (localStorage["coresIguais"] == "true")
		{
			cores = "lime";
		}
		else
		{
			if (_posicaoAcordeAtual == "Posição fundamental") 
				cores = "lime,yellow,cyan";
			else if (_posicaoAcordeAtual == "Primeira inversão") 
				cores = "yellow,cyan, lime";
			else if (_posicaoAcordeAtual == "Segunda inversão") 
				cores = "cyan,lime,yellow";
		}
		
		pressionarNotas(notasAcorde, cores, localStorage["_tipoDestaque"]);	
	}

	var notaBaseApresentacao = notaBaseSorteada;
	if (notaBaseApresentacao.includes("|"))
	{
		var auxNotaBase = notaBaseApresentacao.split("|");
		notaBaseApresentacao = sortearElementoArray(auxNotaBase);
	}
	
	notaBaseApresentacao = notaBaseApresentacao.substring(0, notaBaseApresentacao.length - 1);
	
	if (tipoAcordeSorteado == "Menor")
	{
		notaBaseApresentacao += "m";
	}
	
	var containerApos = document.getElementById("aposTecladoContainer");
	containerApos.style = "text-align: left; font-size: larger;";
	containerApos.innerHTML = "<span class='blink'>Próximo acorde: </span><span style='color: blue'>" + notaBaseApresentacao + "</span>, <span style='color: orange'>" + posicaoAcordeSorteado.toLowerCase() + "</span>";

	var containerAntes = document.getElementById("antesTecladoContainer");
	containerAntes.style = "text-align: left;";
	containerAntes.innerHTML = "<span style='color: #159957'>Acorde atual: </span><span style='color: blue'>" + _notaBaseApresentacaoAtual + "</span>, <span style='color: orange'>" + _posicaoAcordeAtual.toLowerCase() + "</span>";
	
	_notaBaseAtual = notaBaseSorteada;
	_notaBaseApresentacaoAtual = notaBaseApresentacao;
	_tipoAcordeAtual = tipoAcordeSorteado;
	_posicaoAcordeAtual = posicaoAcordeSorteado;
	
    aguardar(tempoEntreAcordes * 1000, solicitarDitadoAcordes1);
}


// ------------------------------------------------------------
// DITADO DE ACORDES 1 (fim)
// ============================================================



// ============================================================
// IDENTIFICAR ACORDE (ini)
// ------------------------------------------------------------
function iniciarIdentificarAcorde() 
{
	var notasBase = []; // array com as notas selecionadas, já com as oitavas
	var tiposAcorde = []; // (array com os tipos de acorde selecionados)
	var posicoesAcorde = []; // (array com as posições de acorde selecionadas)

	var chkNotas = document.getElementsByName("chkNotas");
	var chkTipoAcorde = document.getElementsByName("chkTipoAcorde");
	var chkPosicaoAcorde = document.getElementsByName("chkPosicaoAcorde");

	for (var i = 0; i < chkNotas.length; i++) 
	{
		if (chkNotas[i].checked) 
		{
			notasBase.push(chkNotas[i].value.replace("|", "4|") + "4");
		}			
	}

	for (var i = 0; i < chkTipoAcorde.length; i++)
	{
		if (chkTipoAcorde[i].checked)
		{
			tiposAcorde.push(chkTipoAcorde[i].value);
		}
	}
	
	for (var i = 0; i < chkPosicaoAcorde.length; i++)
	{
		if (chkPosicaoAcorde[i].checked)
		{
			posicoesAcorde.push(chkPosicaoAcorde[i].value);
		}
	}	
	
	if (notasBase.length == 0)
	{
		alert("Selecione ao menos uma nota base.");
		return;
	}

	if (tiposAcorde.length == 0) 
	{
		alert("Selecione ao menos um tipo de acorde.");
		return;
	}
	
	if (posicoesAcorde.length == 0) 
	{
		alert("Selecione ao menos uma posição.");
		return;
	}
	
	localStorage["notasBase"] = notasBase
	localStorage["tiposAcorde"] = tiposAcorde;
	localStorage["posicoesAcorde"] = posicoesAcorde;
	
	window.location.href = "identificarAcordeExecucao.html";
}

function solicitarIdentificarAcorde() 
{
	limparCoresBotoesAcordes();
    document.getElementById("antesTecladoContainer").innerHTML = "";
	
	var notaBaseSorteada = sortearElementoArray(localStorage["notasBase"].split(","));	
	var tipoAcordeSorteado = sortearElementoArray(localStorage["tiposAcorde"].split(","));
	var posicaoAcordeSorteado = sortearElementoArray(localStorage["posicoesAcorde"].split(","));
	
	var notasAcorde = getNotasAcorde(notaBaseSorteada, tipoAcordeSorteado, posicaoAcordeSorteado);
    pressionarNotas(notasAcorde, 'lime', localStorage["_tipoDestaque"]);	

	_respostaEsperada = removerOitava(notaBaseSorteada);
	
	if (tipoAcordeSorteado == "Menor")
	{
		_respostaEsperada = _respostaEsperada.replace("|", "m|") + "m";
	}
	
	var container = document.getElementById("antesTecladoContainer")
	
	container.style = "text-align: left;";
	container.innerHTML = "<span style='color: #159957'>Identifique o acorde. </span>";
}

function conferirRespostaIdentificarAcorde(botaoResposta)
{
	var resposta = botaoResposta.innerText.replace("\n", "|");
	
	if (resposta == _respostaEsperada)
	{
		botaoResposta.style.backgroundColor = "lime";
		aguardar(1000, solicitarIdentificarAcorde);
	}
	else
	{
		botaoResposta.style.backgroundColor = "orangered";
		
		var botoesAcorde = document.getElementsByName("btnAcorde");
		for (var i = 0; i < botoesAcorde.length; i++) 
		{
			resposta = botoesAcorde[i].innerText.replace("\n", "|");
			
			if (resposta == _respostaEsperada) 
			{
				botoesAcorde[i].style.backgroundColor = "lime";
		        document.getElementById("antesTecladoContainer").innerHTML = "<span style='color: orangered'>Clique na resposta correta para continuar. </span>";
				break
			}
		}	
	}
}

function limparCoresBotoesAcordes()
{
	var botoes = document.getElementsByName("btnAcorde");
	
	for (var i = 0; i < botoes.length; i++)
	{
		botoes[i].style.background = "white";
	}
}
// ------------------------------------------------------------
// IDENTIFICAR ACORDE (fim)
// ============================================================
