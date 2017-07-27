var allButton = $(":button"); // selectionne tous les boutons

function add(a, b) { // Fonction qui additionne deux arguments entre eux
	return a+b;
}

function subtract(a, b) { // Fonction qui soustrait deux arguments entre eux
	return a-b;
}

function multiply(a, b) { // Fonction qui multiplie deux arguments entre eux
	return a*b;
}

function divide(a, b) { // Fonction qui divise deux arguments entre eux
	return a/b;
}


allButton.click(function(){
	var value = $(this).html(); // Prends la valeur du bouton sur lequel on clique
	var calc = [];
	var result;
	var len = calc.length;

	//for (var i = 0; i < len; i ++) {

		// calc.push(value);
		console.log(value);

		/*if (value === "+") {
			result = add();
		}

		if (value === "-") {
			result = subtract();
		}


		if (value === "*") {
			result = multiply();
		}

		if (value === "/") {
			result = divide();
		}

		$("#result").text(result); */
	//}
});


/* Méthode 2

var clickOnMe = $("#buttonForm"); 

// <Méthode 2>
function add(a, b) {
	return a+b;
}

function subtract(a, b) {
	return a-b;
}

function multiply(a, b) {
	return a*b;
}

function divide(a, b) {
	return a/b;
}

clickOnMe.click(function(){
	var input1 = parseInt($("#input1").val());
	var input2 = parseInt($("#input2").val());
	var operator = $("#selectOperation").val();
	var result;

	if (operator === "+") {
		result = add(input1,input2);
	}

	if (operator === "-") {
		result = subtract(input1,input2);
	}


	if (operator === "*") {
		result = multiply(input1,input2);
	}

	if (operator === "/") {
		result = divide(input1,input2);
	}

	$("#result").text(result);
}); 

fin Méthode 2 */


// Premières opérations sur JavaScript 

/* var maVar1 = Number(prompt("Veuillez saisir votre première variable")); // Déclaration Variable 1

var maVar2 = Number(prompt("Veuillez saisir votre deuxième variable")); // Déclaration Variable 2

result = maVar2+maVar1; // Déclaration Variable 3 afin de prendre le résultat pour une addition et non une concaténation

alert("Voici le résultat de votre saisie" + " " + maVar1 + "+" + maVar2 + " " + "=" + " " + result);

alert("Voici le résultat de votre saisie" + " " + maVar1 + "*" + maVar2 + " " + "=" + " " + maVar2*maVar1); */


/* function add (param1, param2)
{
  var result;
  result = param1 + param2;
  return result;
}

function mul (param1, param2)
{
  var result1;
  result1 = param1 * param2;
  return result1;
}

var nb1 = Number(prompt("Entrez le premier nombre"));
var nb2 = Number(prompt("Entrez le deuxième nombre"));

alert("Le résultat de votre addition est" + " " + add(nb1,nb2) + " " + "et celle de votre multiplication est" + " " + mul(nb1,nb2)); */