function Excuse() {
	
	var myDog = ['рыбка', 'собака'];
  var ate = ['выбросила', 'порвала', 'забыла','сломала','облила'];
  var myHomework = ['домашку', 'тетрадку', 'дверь', 'работу'];
	
	var who = myDog[Math.round(Math.random()*(myDog.length-1))];
	var did = ate[Math.round(Math.random()*(ate.length-1))];
	var what = myHomework[Math.round(Math.random()*(myHomework.length-1))];
	
	document.getElementById('excuses').innerHTML = '<div>Моя ' + who + ' ' + did + '<br> мою ' + what + '.</div>'
	
}