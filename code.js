let GameArea = {
	size: 3,
	winLength: 3,
	currentPlayer: "O",

	gameField: document.createElement("div"),
	gameTable: document.createElement("table"),

	renderGameTable: function () {
		for (y = 0; y < this.size; y++) {
			var tr = document.createElement("tr");
			for (x = 0; x < this.size; x++) {
				var td = document.createElement("td");
				var button = document.createElement("button");

				button.innerHTML = "*";
				button.onclick = function () {
					GameArea.playATurn(this);
				};
				button.playable = true;

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

		GameArea.renderGameTable();
	},
};
