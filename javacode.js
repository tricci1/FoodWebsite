function confirmForm() {

	var box = document.getElementById("name");
	var box2 = document.getElementById("email");
	var box3 = document.getElementById("Comment");
	

	if (box.value == "" || box2.value == "" || box3.value == "") {
		alert("Please fill out all required fields");
		box.focus();
		box.style.border = "solid 3px red";
		box2.focus();
		box2.style.border = "solid 3px red";
		box3.focus();
		box3.style.border = "solid 3px red";
		return false;
	} else {

		alert("Thank you for giving feedback up! :)");
	}
}
