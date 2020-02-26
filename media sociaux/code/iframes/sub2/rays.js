function load(){
	document.getElementById("ha").innerHTML = "<p class=\"loading\">Chargement...</p>";
	document.getElementById("sol").innerHTML = "<p class=\"loading\">Chargement...</p>";
	document.getElementById("co2").innerHTML = "<p class=\"loading\">Chargement...</p>";
	document.getElementById("voiture").innerHTML = "<p class=\"loading\">Chargement...</p>";
	setTimeout(function() {
	    time();
	}, Math.floor(Math.random() * 3400));
}

function time(){
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
data(h, m,);
}

function data(heur, min,){
var total = Math.floor(((heur*60)+min)/7.1);
var totalData= (Math.floor(total*139.87)/100)


  document.getElementById("timer").innerHTML = "<p>Vous avez consommé "+totalData+"Mb de données en streaming aujourd'hui.</p>"
	;
  document.getElementById("ha").innerHTML = "<p>Donc <span>"+(Math.floor(totalData*25.8)/100)+" watts / heures</span> consommés.</p>";
	document.getElementById("sol").innerHTML = "<p>Soit <span>"+Math.floor(Math.floor(totalData*25.8/100)*3.506)+" minutes</span> de panneau solaire.</p>";

	document.getElementById("co2").innerHTML = "<p>Soit <span>"+Math.floor(total*1.23)+" Grammes</span> de gaz carbonnique.</p>";
	document.getElementById("voiture").innerHTML = "<p>Soit <span>"+(Math.floor(total*1.33)/100)+" Km</span> en voiture.</p>";

  }
