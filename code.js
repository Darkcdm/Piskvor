let GameArea = {
	size: 3,
	winLength: 3,
	currentPlayer: "O",

	gameField: document.createElement("div"),
	gameTable: document.createElement("table"),
	gameBillboard: document.createElement("div"),

	load: function () {
		if (this.gameField) {
			this.gameField.remove();
		}

		this.renderGameTable();
		this.renderGameBillboard();
	},

	renderGameBillboard: function () {
		if (document.getElementById("heading")) {
			document.getElementById("heading").remove();
		}

		var heading = document.createElement("h5");
		heading.id = "heading";
		heading.innerHTML = "Current player is: " + this.currentPlayer;

		this.gameBillboard.appendChild(heading);

		document.getElementById("body").appendChild(this.gameBillboard);
	},

	renderGameTable: function () {
		for (y = 0; y < this.size; y++) {
			var tr = document.createElement("tr");
			for (x = 0; x < this.size; x++) {
				var td = document.createElement("td");
				var button = document.createElement("button");

				button.innerHTML = "*";
				button.onclick = function () {
					GameArea.playATurn(this);
					GameArea.renderGameBillboard();
				};
				button.playable = true;
				button.id = this.getGridID(x, y);

				td.appendChild(button);
				tr.appendChild(td);
			}
			this.gameTable.appendChild(tr);
		}
		this.gameField.appendChild(this.gameTable);
		document.getElementById("body").appendChild(this.gameField);
	},
	playATurn: function (button) {
		if (!button.playable) {
			return;
		}

		button.innerHTML = this.currentPlayer;

		if (this.currentPlayer == "O") {
			this.currentPlayer = "X";
		} else {
			this.currentPlayer = "O";
		}
		button.playable = false;
	},
	checkWin: function (button) {},

	/*
	pairing function = pi
	................................
	[[GRID TO ID]]
	pi(x,y) = z

	z = ( ((x+y+1)*(x+y)) /2 ) + y
	
	--------------------------------
	[[ID TO GRID]]
	w = floorDown(sqrt((z*8) + 1) - 1)  /2);

	t = ((w+1)*w)/2;

	y = z - t;

	x = w - y;

	................................
	Examples
		To calculate π(47, 32):

		x + y = 79,
		79 + 1 = 80,
		79 × 80 = 6320,
		6320 ÷ 2 = 3160,
		3160 + y = 3192,
		so π(47, 32) = 3192.

		To find x and y such that π(x, y) = 3192 = z:

		8 * z = 25 536,
		25 536 + 1 = 25 537,
		√25 537 = 159.799,
		159.799 - 1 = 158.799,
		159.799 / 2 = 79,8995,
		⌊79,8995⌋ = 79,
		-------
		w = 79;
		-------

		w + 1 = 80,
		w * 80 = 6 320,
		6 320 / 2 = 3160,
		----------
		t = 3 160;
		----------

		z - t = 32,
		----------
		y = 32;
		----------

		w - y = 78,
		----------
		x = 47;
		----------

	*/
	getGridID: function (x, y) {
		return ((x + y + 1) * (x + y)) / 2 + y;
	},
	getGridCoords: function (z) {
		w = Math.floor((Math.sqrt(z * 8 + 1) - 1) / 2);

		t = ((w + 1) * w) / 2;

		y = z - t;

		x = w - y;

		const coords = [x, y];
		return coords;
	},
};

let InputArea = {
	inputField: document.createElement("div"),

	size: document.createElement("input"),
	winLength: document.createElement("input"),
	playButton: document.createElement("button"),

	load: function () {
		this.size.type = "number";
		this.size.name = "size";
		this.size.placeholder = "Game Area Size";
		this.size.min = 3;

		this.winLength.type = "number";
		this.winLength.name = "winLength";
		this.winLength.placeholder = "Win Length";
		this.winLength.min = 3;

		this.playButton.innerText = "Let's Play";

		this.playButton.onclick = function () {
			InputArea.collectData();
		};
		this.inputField.id = "inputField";
		this.inputField.setAttribute("class", "gameArea");

		this.inputField.appendChild(this.size);
		this.inputField.appendChild(this.winLength);
		this.inputField.appendChild(this.playButton);

		document.getElementById("body").appendChild(this.inputField);
	},

	collectData: function () {
		sizeValue = this.size.value;
		winLengthValue = this.winLength.value;
		sizeValue = parseInt(sizeValue);
		winLengthValue = parseInt(winLengthValue);
		//typeof sizeValue != "number"
		//sizeValue == null || sizeValue == " " || sizeValue == ""
		if (isNaN(sizeValue)) {
			console.log("size is not set");
			console.log(typeof sizeValue);
			console.log(sizeValue);
			return;
		}
		if (typeof winLengthValue != "number") {
			console.log("winLength is not set");
			console.log(winLengthValue);
			console.log(isNaN(winLengthValue));
			return;
		}
		if (sizeValue < 3) {
			console.log("size is lower then 3");
			return;
		}
		if (winLengthValue < 3) {
			console.log("winLength is lower then 3");
			return;
		}
		GameArea.size = sizeValue;
		GameArea.winLength = winLengthValue;
		console.log(GameArea.size, GameArea.winLength);
		console.log("both values are valid ");
		console.log(sizeValue, winLengthValue);

		this.inputField.remove();
		GameArea.load();
	},
};
