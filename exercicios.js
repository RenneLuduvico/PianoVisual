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
	"2a. menor", 
	"2a. maior", 
	"3a. menor", 
	"3a. maior", 
	"4a. justa", 
	"4a. aumentada", 
	"5a. diminuta", 
	"5a. justa", 
	"5a. aumentada",
	"6a. menor",
	"6a. maior",
	"6a. aumentada",
	"7a. menor",
	"7a. maior"
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


// ============================================================
// UTIL
// ------------------------------------------------------------

function sortearElementoArray(arr)
{
	return arr[Math.floor(Math.random() * arr.length)];
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
	console.log(notaEOitavaBase + "," + nomeIntervalo)
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

var _tipoIntervalo = []; // (array com os códigos dos tipos de intervalos selecionados)
var _direcaoIntervalo = []; // "asc", "desc" (array, com 1 ou duas posições)
var _notasBase = []; // array com as notas selecionadas, já com as oitavas
var _tipoDestaque; // "inteira", "cirulo"

function iniciarCompletarIntervalo() 
{
	_direcaoIntervalo = [];
	_notasBase = [];

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
	
	document.getElementById("opcoesCompletarIntervaloContainer").style.display = "none";
	document.getElementById("keyboardContainer").style.display = "block";
	
	solicitarCompletarIntervalo();
}

var _notaBaseSorteada = "";
var _codigoIntervaloSorteado = "";
var _direcaoSorteada = "";
var _respostaEsperada = "";

function solicitarCompletarIntervalo() 
{
	_notaBaseSelecionada = sortearElementoArray(_notasBase);
	_codigoIntervaloSorteado = sortearElementoArray(_tipoIntervalo);
	_direcaoSorteada = sortearElementoArray(_direcaoIntervalo);
	
	var distancia = getDistanciaIntervaloPorCodigo(_codigoIntervaloSorteado);
	
	if (_direcaoSorteada == "asc")
		_respostaEsperada = todasNotasEOitavas[todasNotasEOitavas.indexOf(_notaBaseSelecionada) + distancia];
	else
		_respostaEsperada = todasNotasEOitavas[todasNotasEOitavas.indexOf(_notaBaseSelecionada) - distancia];	
	
	var container = document.getElementById("antesTecladoContainer")
	
	container.style = "text-align: center;";
	container.innerHTML = getNomeIntervaloPorCodigo(_codigoIntervaloSorteado) + ", " + _direcaoSorteada +
	    "<div style='display:none' id='botaoProximoContainer'><input type='button' value='Próximo' onclick='javacript:clicouProximoCompletarIntervalo();'></div>";
	
	pressionarNotas(_notaBaseSelecionada, "yellow", _tipoDestaque);
	
	iniciarCronometroExercicioCompletarIntervalo();
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
		pressionarNotas(_notaBaseSelecionada + "," + resposta, "yellow,lime");
		aguardar(1000, solicitarCompletarIntervalo);
	}
	else
	{
		pressionarNotas(_notaBaseSelecionada + "," + resposta + "," + _respostaEsperada, "yellow,orangered,lime");
		document.getElementById("botaoProximoContainer").style = "display:block";
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
	
	container.style = "text-align: center;";
	container.innerHTML = tempo;
}

// ------------------------------------------------------------
// COMPLETAR INTERVALO (fim)
// ============================================================