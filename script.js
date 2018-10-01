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
			gridRow.append(grid); 
			}
		container.append(gridRow); 
	}
	changeColor(); 
}

//color function
function getRandomColor() {
  	let letters = '0123456789ABCDEF';
  	let color = '#';
  	for (let i = 0; i < 6; i++) {
    	color += letters[Math.round(Math.random() * 16)];
  	}
  	if (color !== "#FFFFFF") return color;
  	else getRandomColor(); 
}

function changeColor() {
	for (let grid of grids) {
		grid.onmouseover = function () {
		let randomColor = getRandomColor();
		grid.style.backgroundColor = randomColor;  	
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
		return false;  
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
	grid.style.backgroundColor = '#FFFFFF';  	
	};  
}

	