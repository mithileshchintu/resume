// function Loadjson(file,callback){
// var xhr = new XMLHttpRequest();
// xhr.overrideMimeType("application/json");
// xhr.open("GET",file,true);
// xhr.onreadystatechange=function(){
// 	if(xhr.readyState === 4 && xhr.status == "200"){
//  callback(xhr.responseText);
//  	}
// };
// xhr.send(null);
// }
// Loadjson("data.json",function(text){
// var data = JSON.parse(text);
//  console.log(data);
// basics(data.details);
// carrerinfo(data.carrer);
// educationinfo(data.education);
// skillset(data.skills);
// achievement(data.achievements);
// })
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
			})
		})
	}

var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data);
 	basics(data.details);
 	carrerinfo(data.carrer);
 	educationinfo(data.education);
 	skillset(data.skills);
   	achievement(data.achievements);
  })



var left = document.querySelector(".left");
function basics(det) {
	var img = document.createElement("img");
	img.src = det.image;
	left.appendChild(img);
    var name1 = document.createElement("h3")
	name1.textContent = det.name;
	left.appendChild(name1);
	var phoneno=document.createElement("h3")
	phoneno.textContent = det.phoneno;
	left.appendChild(phoneno);
	var email=document.createElement("h3")
	email.textContent = det.email;
	left.appendChild(email);
	var add=document.createElement("h2");
	add.textContent="address";
	left.appendChild(add);
	var hr=document.createElement("hr");
	left.appendChild(hr);
	hr.href="vignan's nirula";
	hr.textContent=det.address;
	left.appendChild(hr);
}
var right = document.querySelector(".right");
function carrerinfo(info){
	var car=document.createElement("h3");
	car.textContent = "carrer objective";
	right.appendChild(car);

	var ca = document.createElement("hr");
	right.appendChild(ca);

	var c = document.createElement("p");
	c.textContent=info.info;
	right.appendChild(c);
}
function educationinfo(edu) {
var ed = document.createElement("h1");
ed.textContent = "educational qualification";
right.appendChild(ed);
var equ = document.createElement("h2")
right.appendChild(equ);

var table1 = document.createElement("table");
table1.border = "2";
right.appendChild(table1);

tabledata = "";
for(i=0;i<edu.length;i++){
	tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].percentage+"</td></tr>";
}
table1.innerHTML = tabledata;
}
function skillset(skill){
	var sk = document.createElement("h1");
	sk.textContent = "technical skills";
	right.appendChild(sk);

	var hr = document.createElement("hr");
	right.appendChild(hr);

	for(i=0;i<skill.length;i++){
		var s = document.createElement("h3");
		s.textContent = skill[i].title;
		right.appendChild(s);

		var ul = document.createElement("ul");
		var li = document.createElement("li");
		li.textContent = skill[i].info;
		ul.appendChild(li);
		right.appendChild(ul);
	}
}
	function achievement(a){
		var a1 = document.createElement("h1");
		a1.textContent = "achievements";
		right.appendChild(a1);
		var hr = document.createElement("hr");
		right.appendChild(hr);
		for(i=0;i<a.length;i++){
			var ul = document.createElement("ul");
			var li = document.createElement("li");
			li.textContent = a[i].title;
			ul.appendChild(li);
			right.appendChild(ul);
		}
		}
		function openpage(){
			window.open("resume.html","_self",true)
		}