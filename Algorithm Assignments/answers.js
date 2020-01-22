//Chapter 1 page16
//Setting and Swapping
let myNumber = 42;
let myName = 'Yihan Chen';
temp = myNumber;
myNumber = myName;
myName = temp;

//Print -52 to 106
for(var i=-52;i<1067;i++){
	console.log(i);
}

//Don't worry,Be Happy
function beCheerful():
	for(var i=0;i<98;i++){
		console.log("good morning!");
	}

//Multiples of Three-But Not All
for(var i=-300;i<1;i++){
	if(i!=-3 or i!=-6){
		console.log(3*i);
	}
}

//Printing Integers with While
let x = 2000
while(x<5281){
	console.log(x);
	x+=1;
}

//Your Say It's Your Birthday
function birthday(a,b):
	if(a==3 && b==21){
		console.log("How did you know?");
	}else{
		console.log("Just another day")
	}

//Leap year
function leapYear(year):
	if(year%400==0 || (year%4==0 && year%100!=0)){
		console.log("Leap year");
	}else{
		console.log("Not Leap year");
	}

//Print and Count
let count=0;
for(var i=512;i<4097;i++){
	if(i%5==0){
		console.log(i)
		count+=1;
	}	
}
console.log(count);

//Multiples of six
let x=0;
while(x<60000){
	if(x%6==0){
		console.log(x);
	}
	x+=1;
}

//Counting, the Dojo Way
for(var i=1;i<101;i++){
	if(i%5==0){
		console.log("Coding");
	}else if(i%10==0){
		console.log("Dojo");
	}else{
		console.log(i);
	}
}

//What do you know
function whatDoYouKnow(incoming):
	console.log(incoming);

//Whoa,That sucker's Huge
let sum=0;
for(i=-300000;i<300001;i++){
	if(i%2!=0){
		sum+=i;
	}
}
console.log(sum);

//Coundwodn by Fours
let x=2016;
while(x>0){
	console.log(x);
	x-=4;
}

//Flexible Countdown
function flexibleCountdown(lowNum,highNum,mult){
	while(highNum-mult>lowNum){
		if(highNum%mult==0){
			console.log(highNum);
			highNum-=mult;
		}else{
			highNum-=1;
		}
		}
	}

//The Final Countdown
function finalCountdown(mult,low,high,skip){
	while(low+multi<hight){
		if(low%mult!=0){
			low+=1;
		}else if(low%mult==0 && low!=skip){
			console.log(low);
			low+=mult
		}
	}
}

//page 20
//Count Down
function countDown(integer){
	let arr=[];
	for(var i=integer;0<=i;i--){
		arr.push(i);
	}
	console.log(arr.length);
}

//Print and Return
let arr=[1,2]
function printReturn(arr){
	console.log(arr[0]);
	return arr[1]
}

//First Plus Length
//if the first value is a string, sum will be the concatenation of two values
//if the first value is a boolean,sum will be arr.length+1 for true or arr.length+0 for false
let arr = [1,2,3,4,5];
function firstPlus(arr){
	sum = arr[0]+arr.length
	return sum
}

//Values greater than second
let arr=[1,3,5,7,9,13]
function valuesGreater(arr){
	let count = 0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]>arr[1]){
			console.log(arr[i]);
			count+=1;
		}
	}
	return count
}

//Values greater than second generalized
function valueGreaterGen(arr){
	let count = 0
	if(arr.length==1){
		console.log(count);
	}else{
		for(var i=0;i<arr.length;i++){
			if(arr[i]>arr[1]){
				count+=1;
			}
		}
		console.log(count);
	}
}

//This length, That value
function lengthValue(num1,num2){
	let arr=[];
	if(num1==num2){
		console.log("Jinx");
	}else{
		for(var i=0;i<num1;i++){
			arr[i]=num2;
		}
	}
}

//Fit the First Value
function fitFistValue(arr){
	if(arr==null){
		return "invalid arr"
	}else if(arr[0]>arr.length){
		console.log("Too big!");
	}else if(arr[0]<arr.length){
		console.log("Too small!");
	}else{
		console.log("Just right!");
	}
}

//Fahrenheit to Celsius
function fahrenheitToCelsius(fDegrees){
	return (fDegrees-32)/Celsius
}

//Page 22
//Biggies Size
function makeItBig(arr){
	for(var i=0;i<arr.length;i++){
		if(arr[i]>0){
			arr[i]="big";
		}
	}
	return arr
}

//Print Low,Return High
function printLowHigh(arr){
	let low=arr[0];
	let high=arr[0];
	if(arr==null){return -1}
	for(var i=0;i<arr.length;i++){
		if(arr[i]>high){
			high=arr[i];
		}else if(arr[i]<low){
			low=arr[i];
		}
	}
	console.log(low);
	return high
}

//Double Vision
function doubleVision(arr){
	for(var i=0;i<arr.length;i++){
		newarr[i]=arr[i]*2;
	}
	return newarr
}

//Count Positives
function countPos(arr){
	let pos = 0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]>0){
			pos+=1;
		}
	}
	arr[arr.length-1]=pos;
	return arr
}

//Evens and Odds
function evensAndOdds(arr){
	for(var i=0;i<arr.length-2;i++){
		if(arr[i]%2==0 && arr[i+1]%2==0 && arr[i+2]==0){
			console.log("Even more so");
		}else if(arr[i]%2!=0 && arr[i+1]%2!=0 && arr[i+2]!=0){
			console.log("That's the odd!");
		}
	}
}

//Increment the Seconds
function incrementSeconds(arr){
	for(var i=0;i<arr.length;i++){
		if(arr[i]%2!=0){
			arr[i]+=1;
		}
		console.log(arr[i])
	}
	return arr
}

//Previous lenghts
function prevLen(arr){
	//length before index 0 is 0
	arr[0]=0;
	for(var i=1;i<arr.length;i++){
		arr[i]=arr[i-1].length;
	}
	return arr
}

//Add Seven to Most
function addSevenToMost(arr){
	let newarr = []
	for(var i=1;i<arr.length;i++){
		arr[i]+=7;
	}
	return newarr
}

//Reverse Array
function reverseArray(arr){
	let newarr = []
	for(var i=arr.length-1;0<=i;i--){
		newarr.push(arr[i]);
	}
	return newarr
}

//Outlook: Negative
function outlookNeg(arr){
	for(var i=0;i<arr.length;i++){
		if(arr[i]>0){
			arr[i]*=-1;
		}
	}
	return arr
}

//Always Hungry
function alwaysHungry(arr){
	let count=0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]=='food'){
			console.log("yummy");
			count+=1;
		}
	}
	if(count!=0){
		console.log("I'm hungry");
	}
}

//Swap Toward the Center
function swapTowardCenter(arr){
	let temp;
	let l=0;
	let r=arr.length-1;
	if(arr==null){return arr}
	if(arr.length%2==0){
		while(r-l!=1){
			temp = arr[l];
			arr[l] = arr[r];
			arr[r] = temp;
			l+=1;
			r-=1;
		}
	}else if(arr.length%2!=0){
		while(l!=r){
			temp = arr[l];
			arr[l]=arr[r];
			arr[r]=temp;
			l+=1;
			r-=1;
		}
	}
	return arr
}

//Scale the Array
function scaleArray(arr,num){
	for(var i=0;i<arr.length;i++){
		arr[i]*=num;
	}
	return arr
}