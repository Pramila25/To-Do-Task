

var firebaseWebRef = firebase.database().ref("task-data");
firebaseWebRef.on("value",function(snapshot){
	snapshot.forEach(function (childSnapshot){
	var data = childSnapshot.val();
	if(data.tstatus === 'incomplete'){
	addItem(data,childSnapshot.key);
	}
	});
		

});



function addItem(data,key){
	//console.log(data);
	var rootDiv = document.getElementById("dynamic-list");
	var fdiv = document.createElement("div");
	fdiv.setAttribute('id',key+"0");
	fdiv.setAttribute('class','card');
	rootDiv.appendChild(fdiv);
	
	var cardDiv = document.getElementById(key+"0");
	var cardBodyDiv = document.createElement("div");
	cardBodyDiv.setAttribute('id',key+"1");
	cardBodyDiv.setAttribute('class','card-body');
	cardDiv.appendChild(cardBodyDiv);
	
	var cardDiv = document.getElementById(key+"1");
	var cardBody_titleDiv = document.createElement("div");
	cardBody_titleDiv.setAttribute('id',key+"2");
	cardBody_titleDiv.setAttribute('class','card-title');
	cardBody_titleDiv.appendChild(document.createTextNode(data.name));
	cardDiv.appendChild(cardBody_titleDiv);
	
	var cardBody_titleDiv = document.getElementById(key+"2");
	var h3 = document.createElement("h4");
	h3.setAttribute('id',key+"3");
	h3.appendChild(document.createTextNode(data.desc));
	cardBody_titleDiv.appendChild(h3);
	
	var cardBody_titleDiv = document.getElementById(key+"2");
	var h4 = document.createElement("h4");
	h4.setAttribute('id',key+"4");
	h4.appendChild(document.createTextNode('DeadLine: '+ data.tdate));
	cardBody_titleDiv.appendChild(h4);

	//To check the past date
	var inputDate = new Date(data.tdate);

	// Get today's date
	var todaysDate = new Date();

// call setHours to take the time out of the comparison
if(inputDate.setHours(0,0,0,0) < todaysDate.setHours(0,0,0,0)) {
   var cardBody_titleDiv = document.getElementById(key+"2");
	var h4 = document.createElement("h4");
	h4.setAttribute('id',key+"5");
	h4.setAttribute('class','expired');
	h4.appendChild(document.createTextNode('Due date Passed. Missed Task'));
	cardBody_titleDiv.appendChild(h4);
}


	
}
	

