function setFocus(aField) {
document.forms[0][aField].focus();
}

function isAnEmailAddress(aTextField) {
if (document.forms[0][aTextField].value.length<5) {
return false;
}
else if (document.forms[0][aTextField].value.indexOf("@") < 1) {
return false;
}
else if (document.forms[0][aTextField].value.length -
 document.forms[0][aTextField].value.indexOf("@") < 4) {
return false;
}
else { return true; }
}

function isEmpty(aTextField) {
if ((document.forms[0][aTextField].value.length==0) ||
 (document.forms[0][aTextField].value==null)) {
return true;
}
else { return false; }
}

function validate() {

if (isEmpty("name")) {
	alert("Please fill in your name");
	setFocus("name");
	return false;
}

if (isEmpty("email")) {
	alert("Please fill in the email address");
	setFocus("email");
	return false;
}

if (!isAnEmailAddress("email")) {
	alert("The entered email address is invalid.");
	setFocus("email");
	return false;
}

if (isEmpty("message")) {
	alert("Please fill in the message");
	setFocus("message");
	return false;
}
return true;
}