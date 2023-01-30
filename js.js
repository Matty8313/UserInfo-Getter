let redBlock
let yellowBlock
let greyBlock
let greenBlock
let blackBlock
let blueBlock
/*function time(event){
	let timeOnBlock
	if(timeOnBlock === undefined){
		timeOnBlock = 0
	}
	let blockName =  event.target.id
	
	if(true){

	}
}*/
function stopTime(){
	clearInterval(MouseData)
}

function time(event){
	switch (event.target.id){
		case 'a':
			MouseData = setInterval(function(){
			if(redBlock === undefined){
				redBlock = 0
			}
			redBlock++
			//console.log(event.target.id, redBlock)
			}, 1000)
			break;
		case 'b':
			MouseData = setInterval(function(){
			if(yellowBlock === undefined){
				yellowBlock = 0
			}
			yellowBlock++
			//console.log(event.target.id, yellowBlock)
			}, 1000)
			break;
		case 'c':
			MouseData = setInterval(function(){
			if(greyBlock === undefined){
				greyBlock = 0
			}
			greyBlock++
			//console.log(event.target.id, greyBlock)
			}, 1000)
			break;
		case 'd':
			MouseData = setInterval(function(){
			if(greenBlock === undefined){
				greenBlock = 0
			}
			greenBlock++
			//console.log(event.target.id, greenBlock)
			}, 1000)
			break;
		case 'e':
			MouseData = setInterval(function(){
			if(blackBlock === undefined){
				blackBlock = 0
			}
			blackBlock++
			//console.log(event.target.id, blackBlock)
			}, 1000)
			break;
		case 'f':
			MouseData = setInterval(function(){
			if(blueBlock === undefined){
				blueBlock = 0
			}
			blueBlock++
			//console.log(event.target.id, blueBlock)
			}, 1000)
			break;
		
	}
}
function ShowTime(){
	console.log(
"czerwony: " + redBlock + " sekund",
"żółty: " + yellowBlock  + " sekund",
"szary: " + greyBlock  + " sekund",
"zielony: " + greenBlock  + " sekund",
"czarny: " + blackBlock  + " sekund",
"niebieski: " + blueBlock  + " sekund")
}
	 const IDinterval = setInterval(function(){
	timer++
	}, 1000)
function getScroll(){
	let WindowScroll = window.scrollY
	let heightOfSite = document.body.scrollHeight
	let DeviceHeight = window.innerHeight/heightOfSite * 100
	let percentageOfSiteScroll = WindowScroll/heightOfSite * 100
	let percentageOfSiteScrollEnd = percentageOfSiteScroll + DeviceHeight
	//console.log(WindowScroll, heightOfSite, screen.height)
	

	if(timer > 1){
		saveData(percentageOfSiteScroll, percentageOfSiteScrollEnd, DeviceHeight, "userek")
		console.log(TableUser)
		timer = 0
		//
	
	}
}
const TableUser = []
	let timer = 0

	
function saveData(start, end, height, user){

	
		let x = start
		let y = end
		let z = height
		let userName = user
		TableUser.push(x, y, z, "name", "time: " + timer)
		
		
	
}