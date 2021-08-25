
let menu = {
	"entrees" :	[
					{"nom":"Choisir", "prix":0.00, "image":"../RestaurantOrganisation/public/images/default.jpg"},
					{"nom":"Salade Verte", "prix":5.95, "image":"../RestaurantOrganisation/public/images/entrees/saladeVerte.jpg"},
					{"nom":"Escargot", "prix": 4.95, "image":"../RestaurantOrganisation/public/images/entrees/escargot.jpg"}
				],
	
	"repas" : 	[
					{"nom":"Choisir", "prix":0.00, "image":"../RestaurantOrganisation/public/images/default.jpg"},
					{"nom":"Sphagetti", "prix":8.95, "image":"../RestaurantOrganisation/public/images/repas/spaghetti.jpg"},
					{"nom":"Lasagne","prix": 9.95, "image":"../RestaurantOrganisation/public/images/repas/lasagne.jpg"}
				]
};
//Les tableaux des entrées et des repas
let tabEntrees = menu.entrees;
let tabRepas = menu.repas;

function chargerChoixMenu(){
	//Référencer les select des entrées et des repas
	let selEntrees = document.getElementById('entrees');
	let selRepas = document.getElementById('repas');
	
	//Pour le select entrées
	for(uneEntree of tabEntrees){
		selEntrees.options[selEntrees.options.length] = new Option(uneEntree.nom, uneEntree.nom.substring(0,3));
	}
	
	//Pour le select repas
	for(unRepas of tabRepas){
		selRepas.options[selRepas.options.length] = new Option(unRepas.nom, unRepas.nom.substring(0,3));
	}
	
}

function choixEntree(){
	let selEntrees = document.getElementById('entrees');
    let prixEntree = tabEntrees[selEntrees.selectedIndex].prix;
	let imageEntree = tabEntrees[selEntrees.selectedIndex].image;
	document.getElementById('prixEntree').innerHTML="$"+prixEntree.toFixed(2);
	document.getElementById('imageEntree').src = imageEntree;

}

function choixRepas(){
	let selRepas = document.getElementById('repas');
    let prixRepas = tabRepas[selRepas.selectedIndex].prix;
	let imageRepas = tabRepas[selRepas.selectedIndex].image;
	document.getElementById('prixRepas').innerHTML="$"+prixRepas.toFixed(2);
	document.getElementById('imageRepas').src = imageRepas;  
	
}
// Fonction pour calcul total, sous et taxes
function sousTotal(signal){
	let selEntrees = document.getElementById('entrees');
    let prixEntree = tabEntrees[selEntrees.selectedIndex].prix;
	let selRepas = document.getElementById('repas');
    let prixRepas = tabRepas[selRepas.selectedIndex].prix;
	let sousTotal = (prixEntree + prixRepas);
	let taxes = (prixEntree + prixRepas)*0.1495;
	let total = sousTotal + taxes; 
	document.getElementById('sousTotal').innerHTML = sousTotal.toFixed(2)+ " " + signal;
	document.getElementById('taxes').innerHTML = taxes.toFixed(2) + " " + signal;
	document.getElementById('total').innerHTML = total.toFixed(2)+ " " + signal;
}
