function getFormvalue() {
    //Write your code here
	let fname = document.querySelector('[name = "fname"]').value.trim()
	let lname = document.querySelector('[name = "lname"]').value.trim()

	alert(fname + " " + lname)
}
