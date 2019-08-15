var gigID = document.getElementByID("gigID");
var gigTopic = document.getElementByID("gigTopic");
var gigCategory = document.getElementByID("gigCategory");
var gigPrice = document.getElementByID("gigPrice");
var gigImage = document.getElementByID("gigImage");
var submitBtn = document.getElementByID("submitBtn");

//	var database = firebase.database();

function submitClick() {

	var firebaseRef = firebase.database().ref();

	firebaseRef.child("Text").push().set("test1");

	//firebase.database().ref()..child("text").set("test2");

}