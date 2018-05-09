function hidePhotos() {

	// when you  add pictures change the number
	var numOfPhotos = 7;
	var currentPic = 0;

	for(var p = 1; p < numOfPhotos; p++)
	{
		var photoID = "image" + p;
		document.getElementById(photoID).style.display = "none";
	}
}


function doRightClick(){

	varPhotoID = "image" + currentPic;
	document.getElementByID(photoID).style.display = "none";
	currentPIc--;

	if(currentPic < 0)
	{
		currentPic= numOfPhotos-1;
	}

	photoID = "large" + currentPic;
	document.getElementByID(photoID).style.display = "block";
}

function doLeftClick(){

	var photoID = "image" + currentPic;
	document.getElementByID(photoID).style.display = "none";

	currentPic++;
	if(currentPic >= numOfPhotos)
	{
		currentPic=0;
	}

	photoID = "image" + currentPic;
	document.getElementByID(photoID).style.display = "block";

}
 
hidePhotos();