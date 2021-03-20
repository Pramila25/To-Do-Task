

document.getElementById("addButton").addEventListener("click", function(event){
event.preventDefault();

let name = document.getElementById("name").value;
let desc = document.getElementById("desc").value;
let tdate = document.getElementById("tdate").value;


var firebaseWebRef = firebase.database().ref("task-data");
var data = {
		"name": name,
		"desc": desc,
		"tdate": tdate,
		"tstatus":"incomplete"
	};
	
firebaseWebRef.push(data);
alert("Task Added successfully!!");
	
});
	
