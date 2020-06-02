
function iniciarCronometro (funcaoTratarTick) 
{
	// Set the date we're counting from
	var countDate = new Date().getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {
		// Get today's date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = now - countDate;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
		var result = seconds + "s ";
		
		if (minutes > 0)
			result = minutes + "m " + result;
		
		if (hours > 0)
			result = hours + "h " + result;
		
		if (days > 0)
			result = days + "d " + result;
		
		funcaoTratarTick(result);
	}, 1000);
	
	return x;
}

function pararCronometro (cronometro)
{
	clearInterval(cronometro);
}

function aguardar(tempoMs, funcaoAposAguardar)
{
	setTimeout(function() {
		funcaoAposAguardar();
		
	}, tempoMs);
}