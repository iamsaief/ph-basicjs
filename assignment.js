/**
 * Problem-1 : Convert Feet to Mile
 */
function feetToMile(num) {
	if (num > 0) {
		const result = (num / 5280).toFixed(4);
		console.log(result);
	} else {
		console.log("⚠️  Please, give me a positive number");
	}
}
// feetToMile(-1);
// feetToMile(10);

/**
 * Problem-2 : Calculate Wood
 */
function woodCalculator(numOfChair, numOfTable, numOfBed) {
	let totalWood = 0;
	const chair = numOfChair * 1;
	const table = numOfTable * 3;
	const bed = numOfBed * 5;

	totalWood = chair + table + bed;

	console.log("🌳 Wood needed = ", totalWood, " cubic feet");
}
// woodCalculator(5, 2, 5);

/**
 * Problem-3 : Calculate Brick
 */
function brickCalculator(numOfFloor) {
	let oneToTenth = 10 * 15;
	let tenToTwentieth = 10 * 12;
	let restOfFloors = 0;

	let totalFeet = 0;
	let totalBrick = 0;

	if (numOfFloor > 20) {
		restOfFloors = (numOfFloor - 20) * 10;
		totalFeet = oneToTenth + tenToTwentieth + restOfFloors;
	} else {
		if (numOfFloor > 10) {
			restOfFloors = (numOfFloor - 10) * 12;
			totalFeet = oneToTenth + restOfFloors;
		} else {
			totalFeet = numOfFloor * 15;
		}
	}
	totalBrick = totalFeet * 1000;
	console.log("🏠 Brick needed = ", totalBrick);
}
// brickCalculator(6);
// brickCalculator(11);
// brickCalculator(21);

/**
 * Problem-4 : Find who has the smallest name
 */
function tinyFriend(friendsArray) {
	let smallestName = friendsArray[0];

	for (let i = 0; i < friendsArray.length; i++) {
		if (friendsArray[i].length <= 1) {
			smallestName = "";
			console.log(`The names are not valid 😏`);
		} else if (smallestName.length > friendsArray[i].length) {
			smallestName = friendsArray[i];
		}
	}
	console.log(smallestName);
}
// tinyFriend(["Shakib", "Tamim", "Mushi", "Mash", "Mahmudullah", "Mustafiz"]);
