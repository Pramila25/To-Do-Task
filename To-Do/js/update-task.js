

document.getElementById("searchBut").addEventListener("click", function(event){
	
event.preventDefault();
let searchName = document.getElementById("searchName").value;
var firebaseWebRef = firebase.database().ref("task-data");


	
firebaseWebRef.on("value",function(snapshot){
	
	snapshot.forEach(function (childSnapshot){

	var data = childSnapshot.val();
	// Get today's date
	var todaysDate = new Date();
	var inputDate = new Date(data.tdate);
		if(data.name === searchName ){
		
			if(data.tstatus === 'incomplete' && inputDate.setHours(0,0,0,0) >= todaysDate.setHours(0,0,0,0)){
				populateItem(data,childSnapshot.key);
			}else if( data.tstatus === 'incomplete' && inputDate.setHours(0,0,0,0) > todaysDate.setHours(0,0,0,0)){
				alert("Task Expired !!");	
			}else{
				alert("Task already completed !!");		
			}
			return;		
		}
		
		
	});
	
	

});

});


function populateItem(data,key){
	//console.log(data);
	document.getElementById("name").value = data.name;
	document.getElementById("desc").value = data.desc;
	document.getElementById("tdate").value = data.tdate;
	document.getElementById("hiddenInput").value = key;
	document.getElementById("status").value = data.tstatus;
	
	
	document.getElementById('update-form').style.display === "none" ? document.getElementById('update-form').style.display="block":document.getElementById('update-form').style.display="none";
	
}


document.getElementById("updateBut").addEventListener("click", function(event){
	
event.preventDefault();

let name = document.getElementById("name").value;
let desc = document.getElementById("desc").value;
let tdate = document.getElementById("tdate").value;
var key = document.getElementById("hiddenInput").value;
var tstatus = document.getElementById("status").value;

//update task
var data = {
		"name": name,
		"desc": desc,
		"tdate": tdate,
		"tstatus": tstatus
	};
firebase.database().ref("task-data/"+key).update(data);
alert("Task Details Successfully!!");
	document.getElementById('update-form').style.display === "none" ? document.getElementById('update-form').style.display="block":document.getElementById('update-form').style.display="none";

});
