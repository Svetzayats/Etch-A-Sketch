let container = document.querySelector('.container');
let grids = document.getElementsByClassName('grid');

//create squares in container 
function createGrid(numberSquares) { 
	for (let row = 1; row <= numberSquares; row++) {
		let gridRow = document.createElement('div'); 
		gridRow.classList.add('gridRow'); 
		gridRow.style.height = (480 / numberSquares) + 'px'; 

		for (let col = 1; col <= numberSquares; col++) {
			let grid = document.createElement('div'); 
			grid.classList.add('grid'); 
			grid.style.width = (480 / numberSquares) + 'px'; 
			grid.style.backgroundColor = "rgb(255, 255, 255)"; 
			gridRow.append(grid); 
			}
		container.append(gridRow); 
	}
	changeColor(); 
}

//random number between 0 and 255 
function randomForRGB() {
    let rand = Math.random() * (256);
    rand = Math.floor(rand);
    return rand;
  }

//random color function
function getRandomColor() {
  	let r = randomForRGB() + ", ";
  	let g = randomForRGB() + ", "; 
  	let b = randomForRGB() + ")";
  	let color = 'rgb(' + r + g + b; 	
  	if (color !== "rgb(255, 255, 255)") return color;
  	else getRandomColor(); 
}


function changeColor() {
	for (let grid of grids) {
		grid.onmouseover = function () {
			if (grid.style.backgroundColor !== "rgb(255, 255, 255)") {
				let colorGrid = grid.style.backgroundColor
					.slice(4, grid.style.backgroundColor.length - 1)
					.split(', ');  
				let r = Math.round(+colorGrid[0] * 0.9); 
				let g = Math.round(+colorGrid[1] * 0.9); 
				let b = Math.round(+colorGrid[2] * 0.9); 
				let color = 'rgb(' + r + ', ' + g + ', ' + b + ")"; 
				grid.style.backgroundColor = color; 
			} else {
				let randomColor = getRandomColor();
				grid.style.backgroundColor = randomColor;
			}  	
		};  
	}
}		

//change size of grid
let buttonChangeSize = document.getElementById('size'); 
buttonChangeSize.onclick = changeSizeGrid; 
function askSizeGrid () {
	let number = prompt ('Enter size for the grid, integer number between 1 and 64', '16'); 
	if (number === null) {
		alert ('You did not input anything');
		return 16;
	}
	else {
		if (isNaN(number)) {
			alert ('It is not number, try again');  
			changeSizeGrid(); 
		}
		else {
			number = +number; 
			if (number < 1 || number > 64) {
				alert ('Number is not between 1 and 64. Try again!'); 
				changeSizeGrid(); 
			}
			if (number - Math.trunc(number)) {
				alert('Number is not integer. Try again!'); 
				changeSizeGrid();  
			}
		}
	}
	return number;  	
}

function changeSizeGrid() {
	let size = askSizeGrid(); 
	container.innerHTML = "";
	createGrid(size);  
}

//clear: white grid with user size 
let buttonClear = document.getElementById('clear'); 
buttonClear.onclick = clearGrid; 
function clearGrid() {
	for (let grid of grids) {
	grid.style.backgroundColor = "rgb(255, 255, 255)";  	
	};  
}

	