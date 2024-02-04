/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
	name: "Jackson Appiah",
	photo: "images/Photo.jpg",
	favoriteFoods: [
          "Pizza", 
          "Jolof Rice", 
          "Kenkey", 
          "Kelewele", 
          "Waakye", 
          "Oil Rice", 
          "Banku With Tilapia Fish"
     ],
	hobbies: [
          "Drawing", 
          "Playing Video Games", 
          "Volleyball"
     ],
	placesLived: [],

}



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
	{
		place: "Buduburam, Ghana",
		length: "10 years"
	}
)

myProfile.placesLived.push(
	{
		place: "CrossRiver, Nigeria",
		length: "2 years"
	}
	)
	
myProfile.placesLived.push(
	{
		place: "Kumasi, Ghana",
		length: "1 years"
	}
	)
	
myProfile.placesLived.push(
	{
		place: "Dansoman, Ghana",
		length: "1 year"
	}
)

myProfile.placesLived.push(
	{
		place: "Winneba, Ghana",
		length: "5 year"
	}
)


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
     let li = document.createElement("li");
     li.textContent = food;
     document.querySelector("#favorite-foods").appendChild(li);
 });
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
	const newLi = document.createElement('li')
	newLi.textContent = hobby
	document.getElementById("hobbies").appendChild(newLi)
});


/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
     let dt = document.createElement("dt");
     let dd = document.createElement("dd");
     dt.textContent = place.place;
     dd.textContent = place.length;
     document.querySelector("#places-lived").appendChild(dt);
     document.querySelector("#places-lived").appendChild(dd);
});

