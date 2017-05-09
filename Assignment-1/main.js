// Author: Manjeet Singh Bargoti
var customName = document.getElementById('customname');
var randombtn = document.querySelector('.randombtn');
var story = document.querySelector('.story');

function randomStoryArray (array) 
{
	var random = Math.floor(Math.random()*array.length);
	return array[random];
}

// Content Text of Story

var storyText = 'It is a long established fact that a reader, because :insertx:, Lorem Ipsum is not simply random text. :inserty:, The standard chunk of Lorem Ipsum used since the 1500s, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum".';
var insertX = ['Hemanth nick name is Hemu', 'Hemanth Hem', 'Andhra Pradesh'];
var insertY = ['Nagraja know as Nagappa', 'Nagraja Venky', 'Karnataka'];
var insertZ = ['Manjeet Singh Bargoti is Manjeet', 'Web Developer', 'Uttar Pradesh'];

// Event Listener

randombtn.addEventListener('click', result);

// Result function

function result() 
{
	var newStory = storyText;

	var xItem = randomStoryArray(insertX);
	var yItem = randomStoryArray(insertY);
	var zItem = randomStoryArray(insertZ);

	newStory = newStory.replace(':insertx:', xItem);
	newStory = newStory.replace(':insertx:', xItem);
	newStory = newStory.replace(':inserty:', yItem);
	newStory = newStory.replace(':insertz:', zItem);

	if(customName.value != '') {
		var name = customName.value;
		newStory = newStory.replace('Bob', name);
	}

	if(document.getElementById("uk").checked) {
		newStory = newStory.replace('It is a long established fact that a reader', 'Lorem Ipsum is simply dummy text the printing and typesetting industry');
		newStory = newStory.replace('Lorem Ipsum is not simply random text', 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters');
	}

	story.textContent = newStory;
	story.style.visibility = 'visible';
}


