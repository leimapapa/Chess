
function whichPiece(box){
	
	var boxRow = (box[3]*1);
	
	var boxColumn = (box[4]*1);
	
	var boxId = 'box' + boxRow + boxColumn;
	
	var boxIdString = 'box' + boxRow + boxColumn;
	
	var boxIdJquery = '$("#' + boxId + '")';
	
	var boxyBox = eval(boxIdJquery);
	
	$(".chessSquare").removeClass("currentPiece shadowed shadowEnemy");
	
	boxyBox.toggleClass("currentPiece");
	
	var box1 = "'box1";
	var box2 = "'box2";
	var box3 = "'box3";
	var box4 = "'box4";
	var box5 = "'box5";
	var box6 = "'box6";
	var box7 = "'box7";
	var box8 = "'box8";
	var endQuote = "'";
	
	for (var i=1; i<9; i++){
		var redoMoveFunctions1 = '$("#box1' + i + '").attr("onclick","javascript:whichPiece(' + box1 + i + endQuote + ')")';
		var redoMoveFunctions2 = '$("#box2' + i + '").attr("onclick","javascript:whichPiece(' + box2 + i + endQuote + ')")';
		var redoMoveFunctions3 = '$("#box3' + i + '").attr("onclick","javascript:whichPiece(' + box3 + i + endQuote + ')")';
		var redoMoveFunctions4 = '$("#box4' + i + '").attr("onclick","javascript:whichPiece(' + box4 + i + endQuote + ')")';
		var redoMoveFunctions5 = '$("#box5' + i + '").attr("onclick","javascript:whichPiece(' + box5 + i + endQuote + ')")';
		var redoMoveFunctions6 = '$("#box6' + i + '").attr("onclick","javascript:whichPiece(' + box6 + i + endQuote + ')")';
		var redoMoveFunctions7 = '$("#box7' + i + '").attr("onclick","javascript:whichPiece(' + box7 + i + endQuote + ')")';
		var redoMoveFunctions8 = '$("#box8' + i + '").attr("onclick","javascript:whichPiece(' + box8 + i + endQuote + ')")';
		eval(redoMoveFunctions1);
		eval(redoMoveFunctions2);
		eval(redoMoveFunctions3);
		eval(redoMoveFunctions4);
		eval(redoMoveFunctions5);
		eval(redoMoveFunctions6);
		eval(redoMoveFunctions7);
		eval(redoMoveFunctions8);
	}
	
	if (boxyBox.hasClass("tower1B")){
		towerMove(boxIdString,boxRow,boxColumn,"blackPiece-1");
	} else if (boxyBox.hasClass("tower2B")){
		towerMove(boxIdString,boxRow,boxColumn,"blackPiece-2");
	} else if (boxyBox.hasClass("knight1B")){
		knightMove(boxIdString,boxRow,boxColumn,"blackPiece-1");
	} else if (boxyBox.hasClass("knight2B")){
		knightMove(boxIdString,boxRow,boxColumn,"blackPiece-2");
	} else if (boxyBox.hasClass("bishop1B")){
		bishopMove(boxIdString,boxRow,boxColumn,"blackPiece-1");
	} else if (boxyBox.hasClass("bishop2B")){
		bishopMove(boxIdString,boxRow,boxColumn,"blackPiece-2");
	} else if (boxyBox.hasClass("queenB")){
		queenMove(boxIdString,boxRow,boxColumn,"blackPiece");
	} else if (boxyBox.hasClass("kingB")){
		kingMove(boxIdString,boxRow,boxColumn,"blackPiece");
	} else if (boxyBox.hasClass("pawn1B")){
		pawnMoveB(boxIdString,boxRow,boxColumn,"blackPiece-1");
	} else if (boxyBox.hasClass("pawn2B")){
		pawnMoveB(boxIdString,boxRow,boxColumn,"blackPiece-2");
	} else if (boxyBox.hasClass("pawn3B")){
		pawnMoveB(boxIdString,boxRow,boxColumn,"blackPiece-3");
	} else if (boxyBox.hasClass("pawn4B")){
		pawnMoveB(boxIdString,boxRow,boxColumn,"blackPiece-4");
	} else if (boxyBox.hasClass("pawn5B")){
		pawnMoveB(boxIdString,boxRow,boxColumn,"blackPiece-5");
	} else if (boxyBox.hasClass("pawn6B")){
		pawnMoveB(boxIdString,boxRow,boxColumn,"blackPiece-6");
	} else if (boxyBox.hasClass("pawn7B")){
		pawnMoveB(boxIdString,boxRow,boxColumn,"blackPiece-7");
	} else if (boxyBox.hasClass("pawn8B")){
		pawnMoveB(boxIdString,boxRow,boxColumn,"blackPiece-8");
	} else if (boxyBox.hasClass("pawnStart1B")){
		pawnStartMoveB(boxIdString,boxRow,boxColumn,"blackPiece-1");
	} else if (boxyBox.hasClass("pawnStart2B")){
		pawnStartMoveB(boxIdString,boxRow,boxColumn,"blackPiece-2");
	} else if (boxyBox.hasClass("pawnStart3B")){
		pawnStartMoveB(boxIdString,boxRow,boxColumn,"blackPiece-3");
	} else if (boxyBox.hasClass("pawnStart4B")){
		pawnStartMoveB(boxIdString,boxRow,boxColumn,"blackPiece-4");
	} else if (boxyBox.hasClass("pawnStart5B")){
		pawnStartMoveB(boxIdString,boxRow,boxColumn,"blackPiece-5");
	} else if (boxyBox.hasClass("pawnStart6B")){
		pawnStartMoveB(boxIdString,boxRow,boxColumn,"blackPiece-6");
	} else if (boxyBox.hasClass("pawnStart7B")){
		pawnStartMoveB(boxIdString,boxRow,boxColumn,"blackPiece-7");
	} else if (boxyBox.hasClass("pawnStart8B")){
		pawnStartMoveB(boxIdString,boxRow,boxColumn,"blackPiece-8");
	} else if (boxyBox.hasClass("tower1W")){
		towerMove(boxIdString,boxRow,boxColumn,"whitePiece-1");
	} else if (boxyBox.hasClass("tower2W")){
		towerMove(boxIdString,boxRow,boxColumn,"whitePiece-2");
	} else if (boxyBox.hasClass("knight1W")){
		knightMove(boxIdString,boxRow,boxColumn,"whitePiece-1");
	} else if (boxyBox.hasClass("knight2W")){
		knightMove(boxIdString,boxRow,boxColumn,"whitePiece-2");
	} else if (boxyBox.hasClass("bishop1W")){
		bishopMove(boxIdString,boxRow,boxColumn,"whitePiece-1");
	} else if (boxyBox.hasClass("bishop2W")){
		bishopMove(boxIdString,boxRow,boxColumn,"whitePiece-2");
	} else if (boxyBox.hasClass("queenW")){
		queenMove(boxIdString,boxRow,boxColumn,"whitePiece");
	} else if (boxyBox.hasClass("kingW")){
		kingMove(boxIdString,boxRow,boxColumn,"whitePiece");
	} else if (boxyBox.hasClass("pawn1W")){
		pawnMoveW(boxIdString,boxRow,boxColumn,"whitePiece-1");
	} else if (boxyBox.hasClass("pawn2W")){
		pawnMoveW(boxIdString,boxRow,boxColumn,"whitePiece-2");
	} else if (boxyBox.hasClass("pawn3W")){
		pawnMoveW(boxIdString,boxRow,boxColumn,"whitePiece-3");
	} else if (boxyBox.hasClass("pawn4W")){
		pawnMoveW(boxIdString,boxRow,boxColumn,"whitePiece-4");
	} else if (boxyBox.hasClass("pawn5W")){
		pawnMoveW(boxIdString,boxRow,boxColumn,"whitePiece-5");
	} else if (boxyBox.hasClass("pawn6W")){
		pawnMoveW(boxIdString,boxRow,boxColumn,"whitePiece-6");
	} else if (boxyBox.hasClass("pawn7W")){
		pawnMoveW(boxIdString,boxRow,boxColumn,"whitePiece-7");
	} else if (boxyBox.hasClass("pawn8W")){
		pawnMoveW(boxIdString,boxRow,boxColumn,"whitePiece-8");
	} else if (boxyBox.hasClass("pawnStart1W")){
		pawnStartMoveW(boxIdString,boxRow,boxColumn,"whitePiece-1");
	} else if (boxyBox.hasClass("pawnStart2W")){
		pawnStartMoveW(boxIdString,boxRow,boxColumn,"whitePiece-2");
	} else if (boxyBox.hasClass("pawnStart3W")){
		pawnStartMoveW(boxIdString,boxRow,boxColumn,"whitePiece-3");
	} else if (boxyBox.hasClass("pawnStart4W")){
		pawnStartMoveW(boxIdString,boxRow,boxColumn,"whitePiece-4");
	} else if (boxyBox.hasClass("pawnStart5W")){
		pawnStartMoveW(boxIdString,boxRow,boxColumn,"whitePiece-5");
	} else if (boxyBox.hasClass("pawnStart6W")){
		pawnStartMoveW(boxIdString,boxRow,boxColumn,"whitePiece-6");
	} else if (boxyBox.hasClass("pawnStart7W")){
		pawnStartMoveW(boxIdString,boxRow,boxColumn,"whitePiece-7");
	} else if (boxyBox.hasClass("pawnStart8W")){
		pawnStartMoveW(boxIdString,boxRow,boxColumn,"whitePiece-8");
	}
} // END whichPiece()

function towerMove(box,boxRow,boxColumn,pieceColor){
	
	var boxy = "box";
	var oldBox = box.toString();
	console.log(box);
	var piece = "tower";
	var whichTeam = pieceColor[0].toUpperCase();
	var specificPiece = piece + pieceColor[11] + whichTeam;
	console.log(specificPiece);
	if (whichTeam == "W")
		var enemyTeam = "blackPiece";
	else if (whichTeam == "B")
		var enemyTeam = "whitePiece";
	
	var boxRow1 = (boxRow + 1).toString();
	var boxColumn1 = (boxColumn).toString();
	var boxRow2 = (boxRow + 2).toString();
	var boxColumn2 = (boxColumn).toString();
	var boxRow3 = (boxRow + 3).toString();
	var boxColumn3 = (boxColumn).toString();
	var boxRow4 = (boxRow + 4).toString();
	var boxColumn4 = (boxColumn).toString();
	var boxRow5 = (boxRow + 5).toString();
	var boxColumn5 = (boxColumn).toString();
	var boxRow6 = (boxRow + 6).toString();
	var boxColumn6 = (boxColumn).toString();
	var boxRow7 = (boxRow + 7).toString();
	var boxColumn7 = (boxColumn).toString();
	var boxRow8 = (boxRow - 1).toString();
	var boxColumn8 = (boxColumn).toString();
	var boxRow9 = (boxRow - 2).toString();
	var boxColumn9 = (boxColumn).toString();
	var boxRow10 = (boxRow - 3).toString();
	var boxColumn10 = (boxColumn).toString();
	var boxRow11 = (boxRow - 4).toString();
	var boxColumn11 = (boxColumn).toString();
	var boxRow12 = (boxRow - 5).toString();
	var boxColumn12 = (boxColumn).toString();
	var boxRow13 = (boxRow - 6).toString();
	var boxColumn13 = (boxColumn).toString();
	var boxRow14 = (boxRow - 7).toString();
	var boxColumn14 = (boxColumn).toString();
	var boxRow15 = (boxRow).toString();
	var boxColumn15 = (boxColumn - 1).toString();
	var boxRow16 = (boxRow).toString();
	var boxColumn16 = (boxColumn - 2).toString();
	var boxRow17 = (boxRow).toString();
	var boxColumn17 = (boxColumn - 3).toString();
	var boxRow18 = (boxRow).toString();
	var boxColumn18 = (boxColumn - 4).toString();
	var boxRow19 = (boxRow).toString();
	var boxColumn19 = (boxColumn - 5).toString();
	var boxRow20 = (boxRow).toString();
	var boxColumn20 = (boxColumn - 6).toString();
	var boxRow21 = (boxRow).toString();
	var boxColumn21 = (boxColumn - 7).toString();
	var boxRow22 = (boxRow).toString();
	var boxColumn22 = (boxColumn + 1).toString();
	var boxRow23 = (boxRow).toString();
	var boxColumn23 = (boxColumn + 2).toString();
	var boxRow24 = (boxRow).toString();
	var boxColumn24 = (boxColumn + 3).toString();
	var boxRow25 = (boxRow).toString();
	var boxColumn25 = (boxColumn + 4).toString();	
	var boxRow26 = (boxRow).toString();
	var boxColumn26 = (boxColumn + 5).toString();	
	var boxRow27 = (boxRow).toString();
	var boxColumn27 = (boxColumn + 6).toString();	
	var boxRow28 = (boxRow).toString();
	var boxColumn28 = (boxColumn + 7).toString();	
	
	var potentialBox1 = boxy + boxRow1 + boxColumn1;
	var potentialBox2 = boxy + boxRow2 + boxColumn2;
	var potentialBox3 = boxy + boxRow3 + boxColumn3;
	var potentialBox4 = boxy + boxRow4 + boxColumn4;
	var potentialBox5 = boxy + boxRow5 + boxColumn5;
	var potentialBox6 = boxy + boxRow6 + boxColumn6;
	var potentialBox7 = boxy + boxRow7 + boxColumn7;
	var potentialBox8 = boxy + boxRow8 + boxColumn8;
	var potentialBox9 = boxy + boxRow9 + boxColumn9;
	var potentialBox10 = boxy + boxRow10 + boxColumn10;
	var potentialBox11 = boxy + boxRow11 + boxColumn11;
	var potentialBox12 = boxy + boxRow12 + boxColumn12;
	var potentialBox13 = boxy + boxRow13 + boxColumn13;
	var potentialBox14 = boxy + boxRow14 + boxColumn14;
	var potentialBox15 = boxy + boxRow15 + boxColumn15;
	var potentialBox16 = boxy + boxRow16 + boxColumn16;
	var potentialBox17 = boxy + boxRow17 + boxColumn17;
	var potentialBox18 = boxy + boxRow18 + boxColumn18;
	var potentialBox19 = boxy + boxRow19 + boxColumn19;
	var potentialBox20 = boxy + boxRow20 + boxColumn20;
	var potentialBox21 = boxy + boxRow21 + boxColumn21;
	var potentialBox22 = boxy + boxRow22 + boxColumn22;
	var potentialBox23 = boxy + boxRow23 + boxColumn23;
	var potentialBox24 = boxy + boxRow24 + boxColumn24;
	var potentialBox25 = boxy + boxRow25 + boxColumn25;
	var potentialBox26 = boxy + boxRow26 + boxColumn26;
	var potentialBox27 = boxy + boxRow27 + boxColumn27;
	var potentialBox28 = boxy + boxRow28 + boxColumn28;
	
	var potentialBoxJquery1 = '$("#' + potentialBox1 + '")';
	var potentialBoxJquery2 = '$("#' + potentialBox2 + '")';
	var potentialBoxJquery3 = '$("#' + potentialBox3 + '")';
	var potentialBoxJquery4 = '$("#' + potentialBox4 + '")';
	var potentialBoxJquery5 = '$("#' + potentialBox5 + '")';
	var potentialBoxJquery6 = '$("#' + potentialBox6 + '")';
	var potentialBoxJquery7 = '$("#' + potentialBox7 + '")';
	var potentialBoxJquery8 = '$("#' + potentialBox8 + '")';
	var potentialBoxJquery9 = '$("#' + potentialBox9 + '")';
	var potentialBoxJquery10 = '$("#' + potentialBox10 + '")';
	var potentialBoxJquery11 = '$("#' + potentialBox11 + '")';
	var potentialBoxJquery12 = '$("#' + potentialBox12 + '")';
	var potentialBoxJquery13 = '$("#' + potentialBox13 + '")';
	var potentialBoxJquery14 = '$("#' + potentialBox14 + '")';
	var potentialBoxJquery15 = '$("#' + potentialBox15 + '")';
	var potentialBoxJquery16 = '$("#' + potentialBox16 + '")';
	var potentialBoxJquery17 = '$("#' + potentialBox17 + '")';
	var potentialBoxJquery18 = '$("#' + potentialBox18 + '")';
	var potentialBoxJquery19 = '$("#' + potentialBox19 + '")';
	var potentialBoxJquery20 = '$("#' + potentialBox20 + '")';
	var potentialBoxJquery21 = '$("#' + potentialBox21 + '")';
	var potentialBoxJquery22 = '$("#' + potentialBox22 + '")';
	var potentialBoxJquery23 = '$("#' + potentialBox23 + '")';
	var potentialBoxJquery24 = '$("#' + potentialBox24 + '")';
	var potentialBoxJquery25 = '$("#' + potentialBox25 + '")';
	var potentialBoxJquery26 = '$("#' + potentialBox26 + '")';
	var potentialBoxJquery27 = '$("#' + potentialBox27 + '")';
	var potentialBoxJquery28 = '$("#' + potentialBox28 + '")';
	
	var boxyBox1 = eval(potentialBoxJquery1);
	var boxyBox2 = eval(potentialBoxJquery2);
	var boxyBox3 = eval(potentialBoxJquery3);
	var boxyBox4 = eval(potentialBoxJquery4);
	var boxyBox5 = eval(potentialBoxJquery5);
	var boxyBox6 = eval(potentialBoxJquery6);
	var boxyBox7 = eval(potentialBoxJquery7);
	var boxyBox8 = eval(potentialBoxJquery8);
	var boxyBox9 = eval(potentialBoxJquery9);
	var boxyBox10 = eval(potentialBoxJquery10);
	var boxyBox11 = eval(potentialBoxJquery11);
	var boxyBox12 = eval(potentialBoxJquery12);
	var boxyBox13 = eval(potentialBoxJquery13);
	var boxyBox14 = eval(potentialBoxJquery14);
	var boxyBox15 = eval(potentialBoxJquery15);
	var boxyBox16 = eval(potentialBoxJquery16);
	var boxyBox17 = eval(potentialBoxJquery17);
	var boxyBox18 = eval(potentialBoxJquery18);
	var boxyBox19 = eval(potentialBoxJquery19);
	var boxyBox20 = eval(potentialBoxJquery20);
	var boxyBox21 = eval(potentialBoxJquery21);
	var boxyBox22 = eval(potentialBoxJquery22);
	var boxyBox23 = eval(potentialBoxJquery23);
	var boxyBox24 = eval(potentialBoxJquery24);
	var boxyBox25 = eval(potentialBoxJquery25);
	var boxyBox26 = eval(potentialBoxJquery26);
	var boxyBox27 = eval(potentialBoxJquery27);
	var boxyBox28 = eval(potentialBoxJquery28);
	
	if (boxRow>=1 && boxRow<=8 && boxColumn>=1 && boxColumn<=8){
		
		if (boxyBox1.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox1 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox1 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox1 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox1 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox1 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox1 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox2 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox2 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox2 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox2 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox2 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox2 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox3 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox3 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox3 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox3 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox3 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox3 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox4 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox4 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox4 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox4 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox4 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox4 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox5 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox5 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox5 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox5 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox5 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox5 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass("blank") && boxyBox6.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox6 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox6 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox6 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass("blank") && boxyBox6.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox6 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox6 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox6 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass("blank") && boxyBox6.hasClass("blank") && boxyBox7.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox7 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox7 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox7 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass("blank") && boxyBox6.hasClass("blank") && boxyBox7.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox7 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox7 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox7 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox8 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox8 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox8 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox8 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox8 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox8 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox9 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox9 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox9 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox9 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox9 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox9 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox10 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox10 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox10 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox10 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox10 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox10 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox11 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox11 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox11 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox11 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox11 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox11 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox12 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox12 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox12 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox12 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox12 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox12 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass("blank") && boxyBox13.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox13 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox13 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox13 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass("blank") && boxyBox13.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox13 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox13 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox13 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass("blank") && boxyBox13.hasClass("blank") && boxyBox14.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox14 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox14 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox14 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass("blank") && boxyBox13.hasClass("blank") && boxyBox14.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox14 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox14 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox14 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox15 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox15 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox15 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox15 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox15 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox15 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox16 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox16 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox16 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox16 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox16 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox16 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox17 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox17 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox17 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox17 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox17 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox17 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox18 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox18 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox18 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox18 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox18 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox18 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox19 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox19 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox19 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox19 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox19 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox19 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass("blank") && boxyBox20.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox20 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox20 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox20 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass("blank") && boxyBox20.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox20 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox20 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox20 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass("blank") && boxyBox20.hasClass("blank") && boxyBox21.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox21 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox21 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox21 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass("blank") && boxyBox20.hasClass("blank") && boxyBox21.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox21 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox21 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox21 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox22 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox22 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox22 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox22 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox22 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox22 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox23 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox23 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox23 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox23 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox23 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox23 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox24 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox24 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox24 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox24 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox24 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox24 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox25 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox25 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox25 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox25 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox25 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox25 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox26 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox26 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox26 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox26 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox26 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox26 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass("blank") && boxyBox27.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox27 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox27 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox27 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass("blank") && boxyBox27.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox27 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox27 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox27 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass("blank") && boxyBox27.hasClass("blank") && boxyBox28.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox28 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox28 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox28 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass("blank") && boxyBox27.hasClass("blank") && boxyBox28.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox28 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox28 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox28 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
	}
}

function knightMove(box,boxRow,boxColumn,pieceColor){
	
	var boxy = "box";
	var oldBox = box.toString();
	console.log(box);
	var piece = "knight";
	var whichTeam = pieceColor[0].toUpperCase();
	var specificPiece = piece + pieceColor[11] + whichTeam;
	console.log(specificPiece);
	if (whichTeam == "W")
		var enemyTeam = "blackPiece";
	else if (whichTeam == "B")
		var enemyTeam = "whitePiece";	
	
	//down2right1
	var boxRow1 = (boxRow + 2).toString();
	var boxColumn1 = (boxColumn + 1).toString();
	//down2left1
	var boxRow2 = (boxRow + 2).toString();
	var boxColumn2 = (boxColumn - 1).toString();
	//up2right1
	var boxRow3 = (boxRow - 2).toString();
	var boxColumn3 = (boxColumn + 1).toString();
	//up2left1
	var boxRow4 = (boxRow - 2).toString();
	var boxColumn4 = (boxColumn - 1).toString();
	//down1right2
	var boxRow5 = (boxRow + 1).toString();
	var boxColumn5 = (boxColumn + 2).toString();
	//down1left2
	var boxRow6 = (boxRow + 1).toString();
	var boxColumn6 = (boxColumn - 2).toString();
	//up1right2
	var boxRow7 = (boxRow - 1).toString();
	var boxColumn7 = (boxColumn + 2).toString();
	//up1left2
	var boxRow8 = (boxRow - 1).toString();
	var boxColumn8 = (boxColumn - 2).toString();
	
	var potentialBox1 = boxy + boxRow1 + boxColumn1;
	var potentialBox2 = boxy + boxRow2 + boxColumn2;
	var potentialBox3 = boxy + boxRow3 + boxColumn3;
	var potentialBox4 = boxy + boxRow4 + boxColumn4;
	var potentialBox5 = boxy + boxRow5 + boxColumn5;
	var potentialBox6 = boxy + boxRow6 + boxColumn6;
	var potentialBox7 = boxy + boxRow7 + boxColumn7;
	var potentialBox8 = boxy + boxRow8 + boxColumn8;
	
	var potentialBoxJquery1 = '$("#' + potentialBox1 + '")';
	var potentialBoxJquery2 = '$("#' + potentialBox2 + '")';
	var potentialBoxJquery3 = '$("#' + potentialBox3 + '")';
	var potentialBoxJquery4 = '$("#' + potentialBox4 + '")';
	var potentialBoxJquery5 = '$("#' + potentialBox5 + '")';
	var potentialBoxJquery6 = '$("#' + potentialBox6 + '")';
	var potentialBoxJquery7 = '$("#' + potentialBox7 + '")';
	var potentialBoxJquery8 = '$("#' + potentialBox8 + '")';
	
	var boxyBox1 = eval(potentialBoxJquery1);
	var boxyBox2 = eval(potentialBoxJquery2);
	var boxyBox3 = eval(potentialBoxJquery3);
	var boxyBox4 = eval(potentialBoxJquery4);
	var boxyBox5 = eval(potentialBoxJquery5);
	var boxyBox6 = eval(potentialBoxJquery6);
	var boxyBox7 = eval(potentialBoxJquery7);
	var boxyBox8 = eval(potentialBoxJquery8);
	
	if (boxRow>0 && boxRow<9 && boxColumn>0 && boxColumn<9){
		
		if (boxyBox1.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox1 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox1 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox1 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox1 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox1 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox1 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox2.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox2 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox2 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox2 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox2.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox2 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox2 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox2 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox3.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox3 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox3 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox3 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox3.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox3 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox3 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox3 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox4.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox4 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox4 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox4 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox4.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox4 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox4 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox4 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox5.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox5 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox5 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox5 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox5.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox5 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox5 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox5 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox6.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox6 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox6 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox6 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox6.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox6 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox6 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox6 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox7.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox7 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox7 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox7 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox7.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox7 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox7 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox7 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox8 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox8 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox8 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox8 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox8 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox8 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
	}
}

function bishopMove(box,boxRow,boxColumn,pieceColor){
	
	var boxy = "box";
	var oldBox = box.toString();
	console.log(box);
	var piece = "bishop";
	var whichTeam = pieceColor[0].toUpperCase();
	var specificPiece = piece + pieceColor[11] + whichTeam;
	console.log(specificPiece);
	if (whichTeam == "W")
		var enemyTeam = "blackPiece";
	else if (whichTeam == "B")
		var enemyTeam = "whitePiece";
	
	var boxRow1 = (boxRow + 1).toString();
	var boxColumn1 = (boxColumn - 1).toString();
	var boxRow2 = (boxRow + 2).toString();
	var boxColumn2 = (boxColumn - 2).toString();
	var boxRow3 = (boxRow + 3).toString();
	var boxColumn3 = (boxColumn - 3).toString();
	var boxRow4 = (boxRow + 4).toString();
	var boxColumn4 = (boxColumn - 4).toString();
	var boxRow5 = (boxRow + 5).toString();
	var boxColumn5 = (boxColumn - 5).toString();
	var boxRow6 = (boxRow + 6).toString();
	var boxColumn6 = (boxColumn - 6).toString();
	var boxRow7 = (boxRow + 7).toString();
	var boxColumn7 = (boxColumn - 7).toString();
	var boxRow8 = (boxRow + 1).toString();
	var boxColumn8 = (boxColumn + 1).toString();
	var boxRow9 = (boxRow + 2).toString();
	var boxColumn9 = (boxColumn + 2).toString();
	var boxRow10 = (boxRow + 3).toString();
	var boxColumn10 = (boxColumn + 3).toString();
	var boxRow11 = (boxRow + 4).toString();
	var boxColumn11 = (boxColumn + 4).toString();
	var boxRow12 = (boxRow + 5).toString();
	var boxColumn12 = (boxColumn + 5).toString();
	var boxRow13 = (boxRow + 6).toString();
	var boxColumn13 = (boxColumn + 6).toString();
	var boxRow14 = (boxRow + 7).toString();
	var boxColumn14 = (boxColumn + 7).toString();
	var boxRow15 = (boxRow - 1).toString();
	var boxColumn15 = (boxColumn - 1).toString();
	var boxRow16 = (boxRow - 2).toString();
	var boxColumn16 = (boxColumn - 2).toString();
	var boxRow17 = (boxRow - 3).toString();
	var boxColumn17 = (boxColumn - 3).toString();
	var boxRow18 = (boxRow - 4).toString();
	var boxColumn18 = (boxColumn - 4).toString();
	var boxRow19 = (boxRow - 5).toString();
	var boxColumn19 = (boxColumn - 5).toString();
	var boxRow20 = (boxRow - 6).toString();
	var boxColumn20 = (boxColumn - 6).toString();
	var boxRow21 = (boxRow - 7).toString();
	var boxColumn21 = (boxColumn - 7).toString();
	var boxRow22 = (boxRow - 1).toString();
	var boxColumn22 = (boxColumn + 1).toString();
	var boxRow23 = (boxRow - 2).toString();
	var boxColumn23 = (boxColumn + 2).toString();
	var boxRow24 = (boxRow - 3).toString();
	var boxColumn24 = (boxColumn + 3).toString();
	var boxRow25 = (boxRow - 4).toString();
	var boxColumn25 = (boxColumn + 4).toString();
	var boxRow26 = (boxRow - 5).toString();
	var boxColumn26 = (boxColumn + 5).toString();
	var boxRow27 = (boxRow - 6).toString();
	var boxColumn27 = (boxColumn + 6).toString();
	var boxRow28 = (boxRow - 7).toString();
	var boxColumn28 = (boxColumn + 7).toString();
	
	var potentialBox1 = boxy + boxRow1 + boxColumn1;
	var potentialBox2 = boxy + boxRow2 + boxColumn2;
	var potentialBox3 = boxy + boxRow3 + boxColumn3;
	var potentialBox4 = boxy + boxRow4 + boxColumn4;
	var potentialBox5 = boxy + boxRow5 + boxColumn5;
	var potentialBox6 = boxy + boxRow6 + boxColumn6;
	var potentialBox7 = boxy + boxRow7 + boxColumn7;
	var potentialBox8 = boxy + boxRow8 + boxColumn8;
	var potentialBox9 = boxy + boxRow9 + boxColumn9;
	var potentialBox10 = boxy + boxRow10 + boxColumn10;
	var potentialBox11 = boxy + boxRow11 + boxColumn11;
	var potentialBox12 = boxy + boxRow12 + boxColumn12;
	var potentialBox13 = boxy + boxRow13 + boxColumn13;
	var potentialBox14 = boxy + boxRow14 + boxColumn14;
	var potentialBox15 = boxy + boxRow15 + boxColumn15;
	var potentialBox16 = boxy + boxRow16 + boxColumn16;
	var potentialBox17 = boxy + boxRow17 + boxColumn17;
	var potentialBox18 = boxy + boxRow18 + boxColumn18;
	var potentialBox19 = boxy + boxRow19 + boxColumn19;
	var potentialBox20 = boxy + boxRow20 + boxColumn20;
	var potentialBox21 = boxy + boxRow21 + boxColumn21;
	var potentialBox22 = boxy + boxRow22 + boxColumn22;
	var potentialBox23 = boxy + boxRow23 + boxColumn23;
	var potentialBox24 = boxy + boxRow24 + boxColumn24;
	var potentialBox25 = boxy + boxRow25 + boxColumn25;
	var potentialBox26 = boxy + boxRow26 + boxColumn26;
	var potentialBox27 = boxy + boxRow27 + boxColumn27;
	var potentialBox28 = boxy + boxRow28 + boxColumn28;
	
	var potentialBoxJquery1 = '$("#' + potentialBox1 + '")';
	var potentialBoxJquery2 = '$("#' + potentialBox2 + '")';
	var potentialBoxJquery3 = '$("#' + potentialBox3 + '")';
	var potentialBoxJquery4 = '$("#' + potentialBox4 + '")';
	var potentialBoxJquery5 = '$("#' + potentialBox5 + '")';
	var potentialBoxJquery6 = '$("#' + potentialBox6 + '")';
	var potentialBoxJquery7 = '$("#' + potentialBox7 + '")';
	var potentialBoxJquery8 = '$("#' + potentialBox8 + '")';
	var potentialBoxJquery9 = '$("#' + potentialBox9 + '")';
	var potentialBoxJquery10 = '$("#' + potentialBox10 + '")';
	var potentialBoxJquery11 = '$("#' + potentialBox11 + '")';
	var potentialBoxJquery12 = '$("#' + potentialBox12 + '")';
	var potentialBoxJquery13 = '$("#' + potentialBox13 + '")';
	var potentialBoxJquery14 = '$("#' + potentialBox14 + '")';
	var potentialBoxJquery15 = '$("#' + potentialBox15 + '")';
	var potentialBoxJquery16 = '$("#' + potentialBox16 + '")';
	var potentialBoxJquery17 = '$("#' + potentialBox17 + '")';
	var potentialBoxJquery18 = '$("#' + potentialBox18 + '")';
	var potentialBoxJquery19 = '$("#' + potentialBox19 + '")';
	var potentialBoxJquery20 = '$("#' + potentialBox20 + '")';
	var potentialBoxJquery21 = '$("#' + potentialBox21 + '")';
	var potentialBoxJquery22 = '$("#' + potentialBox22 + '")';
	var potentialBoxJquery23 = '$("#' + potentialBox23 + '")';
	var potentialBoxJquery24 = '$("#' + potentialBox24 + '")';
	var potentialBoxJquery25 = '$("#' + potentialBox25 + '")';
	var potentialBoxJquery26 = '$("#' + potentialBox26 + '")';
	var potentialBoxJquery27 = '$("#' + potentialBox27 + '")';
	var potentialBoxJquery28 = '$("#' + potentialBox28 + '")';
	
	var boxyBox1 = eval(potentialBoxJquery1);
	var boxyBox2 = eval(potentialBoxJquery2);
	var boxyBox3 = eval(potentialBoxJquery3);
	var boxyBox4 = eval(potentialBoxJquery4);
	var boxyBox5 = eval(potentialBoxJquery5);
	var boxyBox6 = eval(potentialBoxJquery6);
	var boxyBox7 = eval(potentialBoxJquery7);
	var boxyBox8 = eval(potentialBoxJquery8);
	var boxyBox9 = eval(potentialBoxJquery9);
	var boxyBox10 = eval(potentialBoxJquery10);
	var boxyBox11 = eval(potentialBoxJquery11);
	var boxyBox12 = eval(potentialBoxJquery12);
	var boxyBox13 = eval(potentialBoxJquery13);
	var boxyBox14 = eval(potentialBoxJquery14);
	var boxyBox15 = eval(potentialBoxJquery15);
	var boxyBox16 = eval(potentialBoxJquery16);
	var boxyBox17 = eval(potentialBoxJquery17);
	var boxyBox18 = eval(potentialBoxJquery18);
	var boxyBox19 = eval(potentialBoxJquery19);
	var boxyBox20 = eval(potentialBoxJquery20);
	var boxyBox21 = eval(potentialBoxJquery21);
	var boxyBox22 = eval(potentialBoxJquery22);
	var boxyBox23 = eval(potentialBoxJquery23);
	var boxyBox24 = eval(potentialBoxJquery24);
	var boxyBox25 = eval(potentialBoxJquery25);
	var boxyBox26 = eval(potentialBoxJquery26);
	var boxyBox27 = eval(potentialBoxJquery27);
	var boxyBox28 = eval(potentialBoxJquery28);
	
	if (boxRow>=1 && boxRow<=8 && boxColumn>=1 && boxColumn<=8){
		
		if (boxyBox1.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox1 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox1 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox1 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox1 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox1 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox1 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox2 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox2 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox2 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox2 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox2 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox2 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox3 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox3 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox3 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox3 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox3 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox3 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox4 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox4 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox4 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox4 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox4 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox4 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox5 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox5 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox5 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox5 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox5 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox5 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass("blank") && boxyBox6.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox6 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox6 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox6 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass("blank") && boxyBox6.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox6 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox6 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox6 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass("blank") && boxyBox6.hasClass("blank") && boxyBox7.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox7 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox7 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox7 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass("blank") && boxyBox6.hasClass("blank") && boxyBox7.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox7 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox7 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox7 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox8 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox8 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox8 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox8 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox8 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox8 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox9 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox9 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox9 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox9 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox9 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox9 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox10 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox10 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox10 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox10 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox10 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox10 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox11 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox11 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox11 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox11 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox11 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox11 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox12 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox12 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox12 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox12 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox12 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox12 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass("blank") && boxyBox13.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox13 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox13 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox13 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass("blank") && boxyBox13.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox13 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox13 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox13 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass("blank") && boxyBox13.hasClass("blank") && boxyBox14.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox14 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox14 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox14 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass("blank") && boxyBox13.hasClass("blank") && boxyBox14.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox14 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox14 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox14 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox15 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox15 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox15 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox15 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox15 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox15 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox16 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox16 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox16 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox16 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox16 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox16 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox17 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox17 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox17 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox17 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox17 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox17 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox18 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox18 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox18 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox18 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox18 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox18 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox19 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox19 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox19 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox19 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox19 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox19 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass("blank") && boxyBox20.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox20 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox20 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox20 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass("blank") && boxyBox20.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox20 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox20 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox20 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass("blank") && boxyBox20.hasClass("blank") && boxyBox21.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox21 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox21 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox21 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass("blank") && boxyBox20.hasClass("blank") && boxyBox21.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox21 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox21 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox21 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox22 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox22 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox22 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox22 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox22 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox22 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox23 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox23 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox23 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox23 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox23 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox23 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox24 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox24 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox24 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox24 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox24 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox24 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox25 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox25 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox25 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox25 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox25 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox25 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox26 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox26 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox26 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox26 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox26 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox26 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass("blank") && boxyBox27.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox27 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox27 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox27 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass("blank") && boxyBox27.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox27 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox27 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox27 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass("blank") && boxyBox27.hasClass("blank") && boxyBox28.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox28 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox28 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox28 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass("blank") && boxyBox27.hasClass("blank") && boxyBox28.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox28 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox28 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox28 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
	}
}

function queenMove(box,boxRow,boxColumn,pieceColor){
	
	var boxy = "box";
	var oldBox = box.toString();
	console.log(box);
	var piece = "queen";
	var whichTeam = pieceColor[0].toUpperCase();
	var specificPiece = piece + whichTeam;
	console.log(specificPiece);
	if (whichTeam == "W")
		var enemyTeam = "blackPiece";
	else if (whichTeam == "B")
		var enemyTeam = "whitePiece";
	
	var boxRow1 = (boxRow + 1).toString();
	var boxColumn1 = (boxColumn).toString();
	var boxRow2 = (boxRow + 2).toString();
	var boxColumn2 = (boxColumn).toString();
	var boxRow3 = (boxRow + 3).toString();
	var boxColumn3 = (boxColumn).toString();
	var boxRow4 = (boxRow + 4).toString();
	var boxColumn4 = (boxColumn).toString();
	var boxRow5 = (boxRow + 5).toString();
	var boxColumn5 = (boxColumn).toString();
	var boxRow6 = (boxRow + 6).toString();
	var boxColumn6 = (boxColumn).toString();
	var boxRow7 = (boxRow + 7).toString();
	var boxColumn7 = (boxColumn).toString();
	var boxRow8 = (boxRow - 1).toString();
	var boxColumn8 = (boxColumn).toString();
	var boxRow9 = (boxRow - 2).toString();
	var boxColumn9 = (boxColumn).toString();
	var boxRow10 = (boxRow - 3).toString();
	var boxColumn10 = (boxColumn).toString();
	var boxRow11 = (boxRow - 4).toString();
	var boxColumn11 = (boxColumn).toString();
	var boxRow12 = (boxRow - 5).toString();
	var boxColumn12 = (boxColumn).toString();
	var boxRow13 = (boxRow - 6).toString();
	var boxColumn13 = (boxColumn).toString();
	var boxRow14 = (boxRow - 7).toString();
	var boxColumn14 = (boxColumn).toString();
	var boxRow15 = (boxRow).toString();
	var boxColumn15 = (boxColumn - 1).toString();
	var boxRow16 = (boxRow).toString();
	var boxColumn16 = (boxColumn - 2).toString();
	var boxRow17 = (boxRow).toString();
	var boxColumn17 = (boxColumn - 3).toString();
	var boxRow18 = (boxRow).toString();
	var boxColumn18 = (boxColumn - 4).toString();
	var boxRow19 = (boxRow).toString();
	var boxColumn19 = (boxColumn - 5).toString();
	var boxRow20 = (boxRow).toString();
	var boxColumn20 = (boxColumn - 6).toString();
	var boxRow21 = (boxRow).toString();
	var boxColumn21 = (boxColumn - 7).toString();
	var boxRow22 = (boxRow).toString();
	var boxColumn22 = (boxColumn + 1).toString();
	var boxRow23 = (boxRow).toString();
	var boxColumn23 = (boxColumn + 2).toString();
	var boxRow24 = (boxRow).toString();
	var boxColumn24 = (boxColumn + 3).toString();
	var boxRow25 = (boxRow).toString();
	var boxColumn25 = (boxColumn + 4).toString();	
	var boxRow26 = (boxRow).toString();
	var boxColumn26 = (boxColumn + 5).toString();	
	var boxRow27 = (boxRow).toString();
	var boxColumn27 = (boxColumn + 6).toString();	
	var boxRow28 = (boxRow).toString();
	var boxColumn28 = (boxColumn + 7).toString();			
	var boxRow29 = (boxRow + 1).toString();
	var boxColumn29 = (boxColumn + 1).toString();	
	var boxRow30 = (boxRow + 2).toString();
	var boxColumn30 = (boxColumn + 2).toString();	
	var boxRow31 = (boxRow + 3).toString();
	var boxColumn31 = (boxColumn + 3).toString();	
	var boxRow32 = (boxRow + 4).toString();
	var boxColumn32 = (boxColumn + 4).toString();	
	var boxRow33 = (boxRow + 5).toString();
	var boxColumn33 = (boxColumn + 5).toString();	
	var boxRow34 = (boxRow + 6).toString();
	var boxColumn34 = (boxColumn + 6).toString();	
	var boxRow35 = (boxRow + 7).toString();
	var boxColumn35 = (boxColumn + 7).toString();		
	var boxRow36 = (boxRow - 1).toString();
	var boxColumn36 = (boxColumn - 1).toString();	
	var boxRow37 = (boxRow - 2).toString();
	var boxColumn37 = (boxColumn - 2).toString();	
	var boxRow38 = (boxRow - 3).toString();
	var boxColumn38 = (boxColumn - 3).toString();	
	var boxRow39 = (boxRow - 4).toString();
	var boxColumn39 = (boxColumn - 4).toString();	
	var boxRow40 = (boxRow - 5).toString();
	var boxColumn40 = (boxColumn - 5).toString();	
	var boxRow41 = (boxRow - 6).toString();
	var boxColumn41 = (boxColumn - 6).toString();	
	var boxRow42 = (boxRow - 7).toString();
	var boxColumn42 = (boxColumn - 7).toString();		
	var boxRow43 = (boxRow + 1).toString();
	var boxColumn43 = (boxColumn - 1).toString();	
	var boxRow44 = (boxRow + 2).toString();
	var boxColumn44 = (boxColumn - 2).toString();	
	var boxRow45 = (boxRow + 3).toString();
	var boxColumn45 = (boxColumn - 3).toString();	
	var boxRow46 = (boxRow + 4).toString();
	var boxColumn46 = (boxColumn - 4).toString();	
	var boxRow47 = (boxRow + 5).toString();
	var boxColumn47 = (boxColumn - 5).toString();	
	var boxRow48 = (boxRow + 6).toString();
	var boxColumn48 = (boxColumn - 6).toString();	
	var boxRow49 = (boxRow + 7).toString();
	var boxColumn49 = (boxColumn - 7).toString();	
	var boxRow50 = (boxRow - 1).toString();
	var boxColumn50 = (boxColumn + 1).toString();	
	var boxRow51 = (boxRow - 2).toString();
	var boxColumn51 = (boxColumn + 2).toString();	
	var boxRow52 = (boxRow - 3).toString();
	var boxColumn52 = (boxColumn + 3).toString();	
	var boxRow53 = (boxRow - 4).toString();
	var boxColumn53 = (boxColumn + 4).toString();	
	var boxRow54 = (boxRow - 5).toString();
	var boxColumn54 = (boxColumn + 5).toString();	
	var boxRow55 = (boxRow - 6).toString();
	var boxColumn55 = (boxColumn + 6).toString();	
	var boxRow56 = (boxRow - 7).toString();
	var boxColumn56 = (boxColumn + 7).toString();
	
	var potentialBox1 = boxy + boxRow1 + boxColumn1;
	var potentialBox2 = boxy + boxRow2 + boxColumn2;
	var potentialBox3 = boxy + boxRow3 + boxColumn3;
	var potentialBox4 = boxy + boxRow4 + boxColumn4;
	var potentialBox5 = boxy + boxRow5 + boxColumn5;
	var potentialBox6 = boxy + boxRow6 + boxColumn6;
	var potentialBox7 = boxy + boxRow7 + boxColumn7;
	var potentialBox8 = boxy + boxRow8 + boxColumn8;
	var potentialBox9 = boxy + boxRow9 + boxColumn9;
	var potentialBox10 = boxy + boxRow10 + boxColumn10;
	var potentialBox11 = boxy + boxRow11 + boxColumn11;
	var potentialBox12 = boxy + boxRow12 + boxColumn12;
	var potentialBox13 = boxy + boxRow13 + boxColumn13;
	var potentialBox14 = boxy + boxRow14 + boxColumn14;
	var potentialBox15 = boxy + boxRow15 + boxColumn15;
	var potentialBox16 = boxy + boxRow16 + boxColumn16;
	var potentialBox17 = boxy + boxRow17 + boxColumn17;
	var potentialBox18 = boxy + boxRow18 + boxColumn18;
	var potentialBox19 = boxy + boxRow19 + boxColumn19;
	var potentialBox20 = boxy + boxRow20 + boxColumn20;
	var potentialBox21 = boxy + boxRow21 + boxColumn21;
	var potentialBox22 = boxy + boxRow22 + boxColumn22;
	var potentialBox23 = boxy + boxRow23 + boxColumn23;
	var potentialBox24 = boxy + boxRow24 + boxColumn24;
	var potentialBox25 = boxy + boxRow25 + boxColumn25;
	var potentialBox26 = boxy + boxRow26 + boxColumn26;
	var potentialBox27 = boxy + boxRow27 + boxColumn27;
	var potentialBox28 = boxy + boxRow28 + boxColumn28;
	var potentialBox29 = boxy + boxRow29 + boxColumn29;
	var potentialBox30 = boxy + boxRow30 + boxColumn30;
	var potentialBox31 = boxy + boxRow31 + boxColumn31;
	var potentialBox32 = boxy + boxRow32 + boxColumn32;
	var potentialBox33 = boxy + boxRow33 + boxColumn33;
	var potentialBox34 = boxy + boxRow34 + boxColumn34;
	var potentialBox35 = boxy + boxRow35 + boxColumn35;
	var potentialBox36 = boxy + boxRow36 + boxColumn36;
	var potentialBox37 = boxy + boxRow37 + boxColumn37;
	var potentialBox38 = boxy + boxRow38 + boxColumn38;
	var potentialBox39 = boxy + boxRow39 + boxColumn39;
	var potentialBox40 = boxy + boxRow40 + boxColumn40;
	var potentialBox41 = boxy + boxRow41 + boxColumn41;
	var potentialBox42 = boxy + boxRow42 + boxColumn42;
	var potentialBox43 = boxy + boxRow43 + boxColumn43;
	var potentialBox44 = boxy + boxRow44 + boxColumn44;
	var potentialBox45 = boxy + boxRow45 + boxColumn45;
	var potentialBox46 = boxy + boxRow46 + boxColumn46;
	var potentialBox47 = boxy + boxRow47 + boxColumn47;
	var potentialBox48 = boxy + boxRow48 + boxColumn48;
	var potentialBox49 = boxy + boxRow49 + boxColumn49;
	var potentialBox50 = boxy + boxRow50 + boxColumn50;
	var potentialBox51 = boxy + boxRow51 + boxColumn51;
	var potentialBox52 = boxy + boxRow52 + boxColumn52;
	var potentialBox53 = boxy + boxRow53 + boxColumn53;
	var potentialBox54 = boxy + boxRow54 + boxColumn54;
	var potentialBox55 = boxy + boxRow55 + boxColumn55;
	var potentialBox56 = boxy + boxRow56 + boxColumn56;
	
	var potentialBoxJquery1 = '$("#' + potentialBox1 + '")';
	var potentialBoxJquery2 = '$("#' + potentialBox2 + '")';
	var potentialBoxJquery3 = '$("#' + potentialBox3 + '")';
	var potentialBoxJquery4 = '$("#' + potentialBox4 + '")';
	var potentialBoxJquery5 = '$("#' + potentialBox5 + '")';
	var potentialBoxJquery6 = '$("#' + potentialBox6 + '")';
	var potentialBoxJquery7 = '$("#' + potentialBox7 + '")';
	var potentialBoxJquery8 = '$("#' + potentialBox8 + '")';
	var potentialBoxJquery9 = '$("#' + potentialBox9 + '")';
	var potentialBoxJquery10 = '$("#' + potentialBox10 + '")';
	var potentialBoxJquery11 = '$("#' + potentialBox11 + '")';
	var potentialBoxJquery12 = '$("#' + potentialBox12 + '")';
	var potentialBoxJquery13 = '$("#' + potentialBox13 + '")';
	var potentialBoxJquery14 = '$("#' + potentialBox14 + '")';
	var potentialBoxJquery15 = '$("#' + potentialBox15 + '")';
	var potentialBoxJquery16 = '$("#' + potentialBox16 + '")';
	var potentialBoxJquery17 = '$("#' + potentialBox17 + '")';
	var potentialBoxJquery18 = '$("#' + potentialBox18 + '")';
	var potentialBoxJquery19 = '$("#' + potentialBox19 + '")';
	var potentialBoxJquery20 = '$("#' + potentialBox20 + '")';
	var potentialBoxJquery21 = '$("#' + potentialBox21 + '")';
	var potentialBoxJquery22 = '$("#' + potentialBox22 + '")';
	var potentialBoxJquery23 = '$("#' + potentialBox23 + '")';
	var potentialBoxJquery24 = '$("#' + potentialBox24 + '")';
	var potentialBoxJquery25 = '$("#' + potentialBox25 + '")';
	var potentialBoxJquery26 = '$("#' + potentialBox26 + '")';
	var potentialBoxJquery27 = '$("#' + potentialBox27 + '")';
	var potentialBoxJquery28 = '$("#' + potentialBox28 + '")';
	var potentialBoxJquery29 = '$("#' + potentialBox29 + '")';
	var potentialBoxJquery30 = '$("#' + potentialBox30 + '")';
	var potentialBoxJquery31 = '$("#' + potentialBox31 + '")';
	var potentialBoxJquery32 = '$("#' + potentialBox32 + '")';
	var potentialBoxJquery33 = '$("#' + potentialBox33 + '")';
	var potentialBoxJquery34 = '$("#' + potentialBox34 + '")';
	var potentialBoxJquery35 = '$("#' + potentialBox35 + '")';
	var potentialBoxJquery36 = '$("#' + potentialBox36 + '")';
	var potentialBoxJquery37 = '$("#' + potentialBox37 + '")';
	var potentialBoxJquery38 = '$("#' + potentialBox38 + '")';
	var potentialBoxJquery39 = '$("#' + potentialBox39 + '")';
	var potentialBoxJquery40 = '$("#' + potentialBox40 + '")';
	var potentialBoxJquery41 = '$("#' + potentialBox41 + '")';
	var potentialBoxJquery42 = '$("#' + potentialBox42 + '")';
	var potentialBoxJquery43 = '$("#' + potentialBox43 + '")';
	var potentialBoxJquery44 = '$("#' + potentialBox44 + '")';
	var potentialBoxJquery45 = '$("#' + potentialBox45 + '")';
	var potentialBoxJquery46 = '$("#' + potentialBox46 + '")';
	var potentialBoxJquery47 = '$("#' + potentialBox47 + '")';
	var potentialBoxJquery48 = '$("#' + potentialBox48 + '")';
	var potentialBoxJquery49 = '$("#' + potentialBox49 + '")';
	var potentialBoxJquery50 = '$("#' + potentialBox50 + '")';
	var potentialBoxJquery51 = '$("#' + potentialBox51 + '")';
	var potentialBoxJquery52 = '$("#' + potentialBox52 + '")';
	var potentialBoxJquery53 = '$("#' + potentialBox53 + '")';
	var potentialBoxJquery54 = '$("#' + potentialBox54 + '")';
	var potentialBoxJquery55 = '$("#' + potentialBox55 + '")';
	var potentialBoxJquery56 = '$("#' + potentialBox56 + '")';
	
	var boxyBox1 = eval(potentialBoxJquery1);
	var boxyBox2 = eval(potentialBoxJquery2);
	var boxyBox3 = eval(potentialBoxJquery3);
	var boxyBox4 = eval(potentialBoxJquery4);
	var boxyBox5 = eval(potentialBoxJquery5);
	var boxyBox6 = eval(potentialBoxJquery6);
	var boxyBox7 = eval(potentialBoxJquery7);
	var boxyBox8 = eval(potentialBoxJquery8);
	var boxyBox9 = eval(potentialBoxJquery9);
	var boxyBox10 = eval(potentialBoxJquery10);
	var boxyBox11 = eval(potentialBoxJquery11);
	var boxyBox12 = eval(potentialBoxJquery12);
	var boxyBox13 = eval(potentialBoxJquery13);
	var boxyBox14 = eval(potentialBoxJquery14);
	var boxyBox15 = eval(potentialBoxJquery15);
	var boxyBox16 = eval(potentialBoxJquery16);
	var boxyBox17 = eval(potentialBoxJquery17);
	var boxyBox18 = eval(potentialBoxJquery18);
	var boxyBox19 = eval(potentialBoxJquery19);
	var boxyBox20 = eval(potentialBoxJquery20);
	var boxyBox21 = eval(potentialBoxJquery21);
	var boxyBox22 = eval(potentialBoxJquery22);
	var boxyBox23 = eval(potentialBoxJquery23);
	var boxyBox24 = eval(potentialBoxJquery24);
	var boxyBox25 = eval(potentialBoxJquery25);
	var boxyBox26 = eval(potentialBoxJquery26);
	var boxyBox27 = eval(potentialBoxJquery27);
	var boxyBox28 = eval(potentialBoxJquery28);
	var boxyBox29 = eval(potentialBoxJquery29);
	var boxyBox30 = eval(potentialBoxJquery30);
	var boxyBox31 = eval(potentialBoxJquery31);
	var boxyBox32 = eval(potentialBoxJquery32);
	var boxyBox33 = eval(potentialBoxJquery33);
	var boxyBox34 = eval(potentialBoxJquery34);
	var boxyBox35 = eval(potentialBoxJquery35);
	var boxyBox36 = eval(potentialBoxJquery36);
	var boxyBox37 = eval(potentialBoxJquery37);
	var boxyBox38 = eval(potentialBoxJquery38);
	var boxyBox39 = eval(potentialBoxJquery39);
	var boxyBox40 = eval(potentialBoxJquery40);
	var boxyBox41 = eval(potentialBoxJquery41);
	var boxyBox42 = eval(potentialBoxJquery42);
	var boxyBox43 = eval(potentialBoxJquery43);
	var boxyBox44 = eval(potentialBoxJquery44);
	var boxyBox45 = eval(potentialBoxJquery45);
	var boxyBox46 = eval(potentialBoxJquery46);
	var boxyBox47 = eval(potentialBoxJquery47);
	var boxyBox48 = eval(potentialBoxJquery48);
	var boxyBox49 = eval(potentialBoxJquery49);
	var boxyBox50 = eval(potentialBoxJquery50);
	var boxyBox51 = eval(potentialBoxJquery51);
	var boxyBox52 = eval(potentialBoxJquery52);
	var boxyBox53 = eval(potentialBoxJquery53);
	var boxyBox54 = eval(potentialBoxJquery54);
	var boxyBox55 = eval(potentialBoxJquery55);
	var boxyBox56 = eval(potentialBoxJquery56);
	
	if (boxRow>=1 && boxRow<=8 && boxColumn>=1 && boxColumn<=8){
		
		if (boxyBox1.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox1 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox1 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox1 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox1 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox1 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox1 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox2 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox2 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox2 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox2 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox2 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox2 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox3 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox3 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox3 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox3 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox3 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox3 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox4 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox4 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox4 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox4 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox4 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox4 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox5 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox5 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox5 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox5 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox5 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox5 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass("blank") && boxyBox6.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox6 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox6 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox6 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass("blank") && boxyBox6.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox6 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox6 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox6 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass("blank") && boxyBox6.hasClass("blank") && boxyBox7.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox7 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox7 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox7 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank") && boxyBox3.hasClass("blank") && boxyBox4.hasClass("blank") && boxyBox5.hasClass("blank") && boxyBox6.hasClass("blank") && boxyBox7.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox7 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox7 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox7 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox8 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox8 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox8 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox8 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox8 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox8 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox9 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox9 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox9 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox9 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox9 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox9 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox10 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox10 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox10 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox10 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox10 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox10 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox11 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox11 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox11 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox11 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox11 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox11 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox12 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox12 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox12 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox12 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox12 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox12 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass("blank") && boxyBox13.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox13 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox13 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox13 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass("blank") && boxyBox13.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox13 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox13 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox13 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass("blank") && boxyBox13.hasClass("blank") && boxyBox14.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox14 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox14 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox14 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank") && boxyBox9.hasClass("blank") && boxyBox10.hasClass("blank") && boxyBox11.hasClass("blank") && boxyBox12.hasClass("blank") && boxyBox13.hasClass("blank") && boxyBox14.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox14 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox14 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox14 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox15 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox15 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox15 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox15 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox15 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox15 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox16 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox16 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox16 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox16 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox16 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox16 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox17 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox17 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox17 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox17 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox17 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox17 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox18 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox18 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox18 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox18 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox18 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox18 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox19 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox19 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox19 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox19 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox19 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox19 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass("blank") && boxyBox20.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox20 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox20 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox20 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass("blank") && boxyBox20.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox20 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox20 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox20 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass("blank") && boxyBox20.hasClass("blank") && boxyBox21.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox21 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox21 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox21 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox15.hasClass("blank") && boxyBox16.hasClass("blank") && boxyBox17.hasClass("blank") && boxyBox18.hasClass("blank") && boxyBox19.hasClass("blank") && boxyBox20.hasClass("blank") && boxyBox21.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox21 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox21 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox21 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox22 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox22 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox22 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox22 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox22 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox22 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox23 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox23 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox23 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox23 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox23 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox23 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox24 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox24 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox24 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox24 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox24 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox24 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox25 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox25 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox25 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox25 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox25 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox25 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox26 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox26 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox26 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox26 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox26 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox26 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass("blank") && boxyBox27.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox27 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox27 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox27 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass("blank") && boxyBox27.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox27 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox27 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox27 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass("blank") && boxyBox27.hasClass("blank") && boxyBox28.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox28 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox28 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox28 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox22.hasClass("blank") && boxyBox23.hasClass("blank") && boxyBox24.hasClass("blank") && boxyBox25.hasClass("blank") && boxyBox26.hasClass("blank") && boxyBox27.hasClass("blank") && boxyBox28.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox28 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox28 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox28 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox29.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox29 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox29 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox29 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox29.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox29 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox29 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox29 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox29.hasClass("blank") && boxyBox30.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox30 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox30 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox30 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox29.hasClass("blank") && boxyBox30.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox30 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox30 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox30 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox29.hasClass("blank") && boxyBox30.hasClass("blank") && boxyBox31.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox31 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox31 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox31 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox29.hasClass("blank") && boxyBox30.hasClass("blank") && boxyBox31.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox31 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox31 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox31 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox29.hasClass("blank") && boxyBox30.hasClass("blank") && boxyBox31.hasClass("blank") && boxyBox32.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox32 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox32 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox32 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox29.hasClass("blank") && boxyBox30.hasClass("blank") && boxyBox31.hasClass("blank") && boxyBox32.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox32 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox32 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox32 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox29.hasClass("blank") && boxyBox30.hasClass("blank") && boxyBox31.hasClass("blank") && boxyBox32.hasClass("blank") && boxyBox33.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox33 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox33 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox33 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox29.hasClass("blank") && boxyBox30.hasClass("blank") && boxyBox31.hasClass("blank") && boxyBox32.hasClass("blank") && boxyBox33.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox33 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox33 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox33 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox29.hasClass("blank") && boxyBox30.hasClass("blank") && boxyBox31.hasClass("blank") && boxyBox32.hasClass("blank") && boxyBox33.hasClass("blank") && boxyBox34.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox34 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox34 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox34 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox29.hasClass("blank") && boxyBox30.hasClass("blank") && boxyBox31.hasClass("blank") && boxyBox32.hasClass("blank") && boxyBox33.hasClass("blank") && boxyBox34.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox34 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox34 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox34 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox29.hasClass("blank") && boxyBox30.hasClass("blank") && boxyBox31.hasClass("blank") && boxyBox32.hasClass("blank") && boxyBox33.hasClass("blank") && boxyBox34.hasClass("blank") && boxyBox35.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox35 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox35 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox35 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox29.hasClass("blank") && boxyBox30.hasClass("blank") && boxyBox31.hasClass("blank") && boxyBox32.hasClass("blank") && boxyBox33.hasClass("blank") && boxyBox34.hasClass("blank") && boxyBox35.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox35 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox35 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox35 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox36.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox36 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox36 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox36 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox36.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox36 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox36 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox36 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox36.hasClass("blank") && boxyBox37.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox37 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox37 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox37 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox36.hasClass("blank") && boxyBox37.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox37 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox37 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox37 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox36.hasClass("blank") && boxyBox37.hasClass("blank") && boxyBox38.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox38 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox38 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox38 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox36.hasClass("blank") && boxyBox37.hasClass("blank") && boxyBox38.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox38 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox38 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox38 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox36.hasClass("blank") && boxyBox37.hasClass("blank") && boxyBox38.hasClass("blank") && boxyBox39.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox39 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox39 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox39 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox36.hasClass("blank") && boxyBox37.hasClass("blank") && boxyBox38.hasClass("blank") && boxyBox39.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox39 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox39 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox39 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox36.hasClass("blank") && boxyBox37.hasClass("blank") && boxyBox38.hasClass("blank") && boxyBox39.hasClass("blank") && boxyBox40.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox40 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox40 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox40 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox36.hasClass("blank") && boxyBox37.hasClass("blank") && boxyBox38.hasClass("blank") && boxyBox39.hasClass("blank") && boxyBox40.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox40 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox40 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox40 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox36.hasClass("blank") && boxyBox37.hasClass("blank") && boxyBox38.hasClass("blank") && boxyBox39.hasClass("blank") && boxyBox40.hasClass("blank") && boxyBox41.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox41 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox41 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox41 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox36.hasClass("blank") && boxyBox37.hasClass("blank") && boxyBox38.hasClass("blank") && boxyBox39.hasClass("blank") && boxyBox40.hasClass("blank") && boxyBox41.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox41 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox41 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox41 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox36.hasClass("blank") && boxyBox37.hasClass("blank") && boxyBox38.hasClass("blank") && boxyBox39.hasClass("blank") && boxyBox40.hasClass("blank") && boxyBox41.hasClass("blank") && boxyBox42.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox42 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox42 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox42 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox36.hasClass("blank") && boxyBox37.hasClass("blank") && boxyBox38.hasClass("blank") && boxyBox39.hasClass("blank") && boxyBox40.hasClass("blank") && boxyBox41.hasClass("blank") && boxyBox42.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox42 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox42 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox42 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox43.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox43 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox43 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox43 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox43.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox43 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox43 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox43 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox43.hasClass("blank") && boxyBox44.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox44 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox44 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox44 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox43.hasClass("blank") && boxyBox44.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox44 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox44 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox44 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox43.hasClass("blank") && boxyBox44.hasClass("blank") && boxyBox45.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox45 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox45 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox45 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox43.hasClass("blank") && boxyBox44.hasClass("blank") && boxyBox45.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox45 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox45 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox45 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox43.hasClass("blank") && boxyBox44.hasClass("blank") && boxyBox45.hasClass("blank") && boxyBox46.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox46 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox46 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox46 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox43.hasClass("blank") && boxyBox44.hasClass("blank") && boxyBox45.hasClass("blank") && boxyBox46.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox46 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox46 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox46 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox43.hasClass("blank") && boxyBox44.hasClass("blank") && boxyBox45.hasClass("blank") && boxyBox46.hasClass("blank") && boxyBox47.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox47 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox47 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox47 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox43.hasClass("blank") && boxyBox44.hasClass("blank") && boxyBox45.hasClass("blank") && boxyBox46.hasClass("blank") && boxyBox47.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox47 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox47 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox47 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox43.hasClass("blank") && boxyBox44.hasClass("blank") && boxyBox45.hasClass("blank") && boxyBox46.hasClass("blank") && boxyBox47.hasClass("blank") && boxyBox48.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox48 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox48 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox48 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox43.hasClass("blank") && boxyBox44.hasClass("blank") && boxyBox45.hasClass("blank") && boxyBox46.hasClass("blank") && boxyBox47.hasClass("blank") && boxyBox48.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox48 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox48 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox48 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox43.hasClass("blank") && boxyBox44.hasClass("blank") && boxyBox45.hasClass("blank") && boxyBox46.hasClass("blank") && boxyBox47.hasClass("blank") && boxyBox48.hasClass("blank") && boxyBox49.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox49 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox49 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox49 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox43.hasClass("blank") && boxyBox44.hasClass("blank") && boxyBox45.hasClass("blank") && boxyBox46.hasClass("blank") && boxyBox47.hasClass("blank") && boxyBox48.hasClass("blank") && boxyBox49.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox49 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox49 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox49 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox50.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox50 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox50 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox50 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox50.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox50 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox50 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox50 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox50.hasClass("blank") && boxyBox51.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox51 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox51 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox51 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox50.hasClass("blank") && boxyBox51.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox51 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox51 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox51 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox50.hasClass("blank") && boxyBox51.hasClass("blank") && boxyBox52.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox52 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox52 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox52 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox50.hasClass("blank") && boxyBox51.hasClass("blank") && boxyBox52.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox52 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox52 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox52 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox50.hasClass("blank") && boxyBox51.hasClass("blank") && boxyBox52.hasClass("blank") && boxyBox53.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox53 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox53 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox53 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox50.hasClass("blank") && boxyBox51.hasClass("blank") && boxyBox52.hasClass("blank") && boxyBox53.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox53 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox53 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox53 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox50.hasClass("blank") && boxyBox51.hasClass("blank") && boxyBox52.hasClass("blank") && boxyBox53.hasClass("blank") && boxyBox54.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox54 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox54 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox54 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox50.hasClass("blank") && boxyBox51.hasClass("blank") && boxyBox52.hasClass("blank") && boxyBox53.hasClass("blank") && boxyBox54.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox54 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox54 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox54 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox50.hasClass("blank") && boxyBox51.hasClass("blank") && boxyBox52.hasClass("blank") && boxyBox53.hasClass("blank") && boxyBox54.hasClass("blank") && boxyBox55.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox55 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox55 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox55 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox50.hasClass("blank") && boxyBox51.hasClass("blank") && boxyBox52.hasClass("blank") && boxyBox53.hasClass("blank") && boxyBox54.hasClass("blank") && boxyBox55.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox55 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox55 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox55 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox50.hasClass("blank") && boxyBox51.hasClass("blank") && boxyBox52.hasClass("blank") && boxyBox53.hasClass("blank") && boxyBox54.hasClass("blank") && boxyBox55.hasClass("blank") && boxyBox56.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox56 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox56 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox56 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox50.hasClass("blank") && boxyBox51.hasClass("blank") && boxyBox52.hasClass("blank") && boxyBox53.hasClass("blank") && boxyBox54.hasClass("blank") && boxyBox55.hasClass("blank") && boxyBox56.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox56 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox56 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox56 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
	}
	
}

function kingMove(box,boxRow,boxColumn,pieceColor){
	
	var boxy = "box";
	var oldBox = box.toString();
	console.log(box);
	var piece = "king";
	var whichTeam = pieceColor[0].toUpperCase();
	var specificPiece = piece + whichTeam;
	console.log(specificPiece);
	console.log(whichTeam);
	if (whichTeam == "W")
		var enemyTeam = "blackPiece";
	else if (whichTeam == "B")
		var enemyTeam = "whitePiece";
	
	//down1
	var boxRow1 = (boxRow + 1).toString();
	var boxColumn1 = (boxColumn).toString();
	//left1
	var boxRow2 = (boxRow).toString();
	var boxColumn2 = (boxColumn - 1).toString();
	//up1
	var boxRow3 = (boxRow - 1).toString();
	var boxColumn3 = (boxColumn).toString();
	//right1
	var boxRow4 = (boxRow).toString();
	var boxColumn4 = (boxColumn + 1).toString();
	//right1down1
	var boxRow5 = (boxRow + 1).toString();
	var boxColumn5 = (boxColumn + 1).toString();
	//right1up1
	var boxRow6 = (boxRow + 1).toString();
	var boxColumn6 = (boxColumn - 1).toString();
	//left1down1
	var boxRow7 = (boxRow - 1).toString();
	var boxColumn7 = (boxColumn + 1).toString();
	//left1up1
	var boxRow8 = (boxRow - 1).toString();
	var boxColumn8 = (boxColumn - 1).toString();
	
	var potentialBox1 = boxy + boxRow1 + boxColumn1;
	var potentialBox2 = boxy + boxRow2 + boxColumn2;
	var potentialBox3 = boxy + boxRow3 + boxColumn3;
	var potentialBox4 = boxy + boxRow4 + boxColumn4;
	var potentialBox5 = boxy + boxRow5 + boxColumn5;
	var potentialBox6 = boxy + boxRow6 + boxColumn6;
	var potentialBox7 = boxy + boxRow7 + boxColumn7;
	var potentialBox8 = boxy + boxRow8 + boxColumn8;
	
	var potentialBoxJquery1 = '$("#' + potentialBox1 + '")';
	var potentialBoxJquery2 = '$("#' + potentialBox2 + '")';
	var potentialBoxJquery3 = '$("#' + potentialBox3 + '")';
	var potentialBoxJquery4 = '$("#' + potentialBox4 + '")';
	var potentialBoxJquery5 = '$("#' + potentialBox5 + '")';
	var potentialBoxJquery6 = '$("#' + potentialBox6 + '")';
	var potentialBoxJquery7 = '$("#' + potentialBox7 + '")';
	var potentialBoxJquery8 = '$("#' + potentialBox8 + '")';
	
	var boxyBox1 = eval(potentialBoxJquery1);
	var boxyBox2 = eval(potentialBoxJquery2);
	var boxyBox3 = eval(potentialBoxJquery3);
	var boxyBox4 = eval(potentialBoxJquery4);
	var boxyBox5 = eval(potentialBoxJquery5);
	var boxyBox6 = eval(potentialBoxJquery6);
	var boxyBox7 = eval(potentialBoxJquery7);
	var boxyBox8 = eval(potentialBoxJquery8);
	
	if (boxRow>=1 && boxRow<=8 && boxColumn>=1 && boxColumn<=8){
		
		if (boxyBox1.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox1 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox1 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox1 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox1 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox1 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox1 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox2.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox2 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox2 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox2 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox2.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox2 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox2 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox2 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox3.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox3 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox3 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox3 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox3.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox3 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox3 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox3 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox4.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox4 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox4 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox4 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox4.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox4 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox4 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox4 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox5.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox5 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox5 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox5 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox5.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox5 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox5 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox5 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox6.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox6 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox6 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox6 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox6.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox6 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox6 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox6 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox7.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox7 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox7 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox7 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox7.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox7 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox7 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox7 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox8 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox8 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox8 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox8.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox8 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox8 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox8 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
	}
}

function pawnMoveB(box,boxRow,boxColumn,pieceColor){
	
	var boxy = "box";
	var oldBox = box.toString();
	console.log(box);
	var piece = "pawn";
	var whichTeam = pieceColor[0].toUpperCase();
	var specificPiece = piece + pieceColor[11] + whichTeam;
	console.log(specificPiece);
	if (whichTeam == "W")
		var enemyTeam = "blackPiece";
	else if (whichTeam == "B")
		var enemyTeam = "whitePiece";
	
	var boxRow1 = (boxRow + 1).toString();
	var boxColumn1 = (boxColumn).toString();
	var boxRow2 = (boxRow + 1).toString();
	var boxColumn2 = (boxColumn + 1).toString();
	var boxRow3 = (boxRow + 1).toString();
	var boxColumn3 = (boxColumn - 1).toString();
	var potentialBox1 = boxy + boxRow1 + boxColumn1;
	var potentialBox2 = boxy + boxRow2 + boxColumn2;
	var potentialBox3 = boxy + boxRow3 + boxColumn3;
	var potentialBoxJquery1 = '$("#' + potentialBox1 + '")';
	var potentialBoxJquery2 = '$("#' + potentialBox2 + '")';
	var potentialBoxJquery3 = '$("#' + potentialBox3 + '")';
	var boxyBox1 = eval(potentialBoxJquery1);
	var boxyBox2 = eval(potentialBoxJquery2);
	var boxyBox3 = eval(potentialBoxJquery3);
	
	if (boxRow>=1 && boxRow<=8 && boxColumn>=1 && boxColumn<=8){
		
		if (boxyBox1.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox1 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox1 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox1 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox1 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox1 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox1 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox2.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox2 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox2 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox2 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox3.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox3 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox3 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox3 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
	}
}

function pawnStartMoveB(box,boxRow,boxColumn,pieceColor){
	
	var boxy = "box";
	var oldBox = box.toString();
	console.log(box);
	var piece = "pawn";
	var whichTeam = pieceColor[0].toUpperCase();
	var specificPiece = piece + pieceColor[11] + whichTeam;
	console.log(specificPiece);
	if (whichTeam == "W")
		var enemyTeam = "blackPiece";
	else if (whichTeam == "B")
		var enemyTeam = "whitePiece";
	
	var boxRow1 = (boxRow + 1).toString();
	var boxColumn1 = (boxColumn).toString();
	var boxRow2 = (boxRow + 2).toString();
	var boxColumn2 = (boxColumn).toString();
	var boxRow3 = (boxRow + 1).toString();
	var boxColumn3 = (boxColumn + 1).toString();
	var boxRow4 = (boxRow + 1).toString();
	var boxColumn4 = (boxColumn - 1).toString();
	var potentialBox1 = boxy + boxRow1 + boxColumn1;
	var potentialBox2 = boxy + boxRow2 + boxColumn2;
	var potentialBox3 = boxy + boxRow3 + boxColumn3;
	var potentialBox4 = boxy + boxRow4 + boxColumn4;
	var potentialBoxJquery1 = '$("#' + potentialBox1 + '")';
	var potentialBoxJquery2 = '$("#' + potentialBox2 + '")';
	var potentialBoxJquery3 = '$("#' + potentialBox3 + '")';
	var potentialBoxJquery4 = '$("#' + potentialBox4 + '")';
	var boxyBox1 = eval(potentialBoxJquery1);
	var boxyBox2 = eval(potentialBoxJquery2);
	var boxyBox3 = eval(potentialBoxJquery3);
	var boxyBox4 = eval(potentialBoxJquery4);
	
	if (boxRow>=1 && boxRow<=8 && boxColumn>=1 && boxColumn<=8){
		
		if (boxyBox1.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox1 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox1 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox1 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox2 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox2 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox2 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox3.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox3 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox3 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox3 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox4.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox4 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox4 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox4 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
	}
	
}

function pawnMoveW(box,boxRow,boxColumn,pieceColor){
	
	var boxy = "box";
	var oldBox = box.toString();
	console.log(box);
	var piece = "pawn";
	var whichTeam = pieceColor[0].toUpperCase();
	var specificPiece = piece + pieceColor[11] + whichTeam;
	console.log(specificPiece);
	if (whichTeam == "W")
		var enemyTeam = "blackPiece";
	else if (whichTeam == "B")
		var enemyTeam = "whitePiece";
	
	var boxRow1 = (boxRow - 1).toString();
	var boxColumn1 = (boxColumn).toString();
	var boxRow2 = (boxRow - 1).toString();
	var boxColumn2 = (boxColumn + 1).toString();
	var boxRow3 = (boxRow - 1).toString();
	var boxColumn3 = (boxColumn - 1).toString();
	var potentialBox1 = boxy + boxRow1 + boxColumn1;
	var potentialBox2 = boxy + boxRow2 + boxColumn2;
	var potentialBox3 = boxy + boxRow3 + boxColumn3;
	var potentialBoxJquery1 = '$("#' + potentialBox1 + '")';
	var potentialBoxJquery2 = '$("#' + potentialBox2 + '")';
	var potentialBoxJquery3 = '$("#' + potentialBox3 + '")';
	var boxyBox1 = eval(potentialBoxJquery1);
	var boxyBox2 = eval(potentialBoxJquery2);
	var boxyBox3 = eval(potentialBoxJquery3);
	
	if (boxRow>=1 && boxRow<=8 && boxColumn>=1 && boxColumn<=8){

		if (boxyBox1.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox1 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox1 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox1 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox2.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox2 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox2 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox2 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox3.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox3 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox3 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox3 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
	}
}

function pawnStartMoveW(box,boxRow,boxColumn,pieceColor){
	
	var boxy = "box";
	var oldBox = box.toString();
	console.log(box);
	var piece = "pawn";
	var whichTeam = pieceColor[0].toUpperCase();
	var specificPiece = piece + pieceColor[11] + whichTeam;
	console.log(specificPiece);
	if (whichTeam == "W")
		var enemyTeam = "blackPiece";
	else if (whichTeam == "B")
		var enemyTeam = "whitePiece";
	
	var boxRow1 = (boxRow - 1).toString();
	var boxColumn1 = (boxColumn).toString();
	var boxRow2 = (boxRow - 2).toString();
	var boxColumn2 = (boxColumn).toString();
	var boxRow3 = (boxRow - 1).toString();
	var boxColumn3 = (boxColumn + 1).toString();
	var boxRow4 = (boxRow - 1).toString();
	var boxColumn4 = (boxColumn - 1).toString();
	var potentialBox1 = boxy + boxRow1 + boxColumn1;
	var potentialBox2 = boxy + boxRow2 + boxColumn2;
	var potentialBox3 = boxy + boxRow3 + boxColumn3;
	var potentialBox4 = boxy + boxRow4 + boxColumn4;
	var potentialBoxJquery1 = '$("#' + potentialBox1 + '")';
	var potentialBoxJquery2 = '$("#' + potentialBox2 + '")';
	var potentialBoxJquery3 = '$("#' + potentialBox3 + '")';
	var potentialBoxJquery4 = '$("#' + potentialBox4 + '")';
	var boxyBox1 = eval(potentialBoxJquery1);
	var boxyBox2 = eval(potentialBoxJquery2);
	var boxyBox3 = eval(potentialBoxJquery3);
	var boxyBox4 = eval(potentialBoxJquery4);
	
	if (boxRow>=1 && boxRow<=8 && boxColumn>=1 && boxColumn<=8){
		
		if (boxyBox1.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox1 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox1 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox1 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox1.hasClass("blank") && boxyBox2.hasClass("blank")) {
			var shadowEnemy = '$("#' + potentialBox2 + '").addClass("shadowed")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox2 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox2 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox3.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox3 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox3 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox3 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
		if (boxyBox4.hasClass(enemyTeam)) {
			var shadowEnemy = '$("#' + potentialBox4 + '").addClass("shadowEnemy")';
			eval(shadowEnemy);
			var moveBox = "moveHere('" + potentialBox4 + "','" + box + "','" + piece + "','" + pieceColor + "','" + specificPiece + "')";
			var addMoveHere = '$("#' + potentialBox4 + '").attr("onclick","javascript:' + moveBox + '")';
			var runMove = eval(addMoveHere);
		}
	}
	
}

function moveHere(newBox, oldBox, piece, pieceColor, specificPiece){

	var thisGlyphicon = "glyphicon-" + piece;
	
	var spPiece = specificPiece;
	
	var teamColor = pieceColor;
	
	if (teamColor == "whitePiece"
	|| teamColor == "whitePiece-1"
	|| teamColor == "whitePiece-2"
	|| teamColor == "whitePiece-3"
	|| teamColor == "whitePiece-4"
	|| teamColor == "whitePiece-5"
	|| teamColor == "whitePiece-6"
	|| teamColor == "whitePiece-7"
	|| teamColor == "whitePiece-8"){
		var pieceColorClass = "chessPieceWhite";
		var teamColor2 = "whitePiece";
	} else if (teamColor == "blackPiece"
	|| teamColor == "blackPiece-1"
	|| teamColor == "blackPiece-2"
	|| teamColor == "blackPiece-3"
	|| teamColor == "blackPiece-4"
	|| teamColor == "blackPiece-5"
	|| teamColor == "blackPiece-6"
	|| teamColor == "blackPiece-7"
	|| teamColor == "blackPiece-8"){
		var pieceColorClass = "chessPieceBlack";
		var teamColor2 = "blackPiece";
	}
	
	$(".chessSquare").removeClass("currentPiece shadowed shadowEnemy");
	
	var clearNewSpace = '$("#x' + newBox[3] + newBox[4] + '").removeClass("glyphicon glyphicon-king glyphicon-queen glyphicon-bishop glyphicon-knight glyphicon-tower glyphicon-pawn chessPieceBlack chessPieceWhite")';
	eval(clearNewSpace);
	
	var addNewSpaceClass = '$("#x' + newBox[3] + newBox[4] + '").addClass("glyphicon").addClass(thisGlyphicon).addClass(pieceColorClass)';
	eval(addNewSpaceClass);
	
	var clearOldSpace = '$("#x' + oldBox[3] + oldBox[4] + '").removeClass("glyphicon").removeClass(thisGlyphicon).removeClass(pieceColorClass)';
	eval(clearOldSpace);
	
	var addMainPieceClass = '$("#' + newBox + '").removeClass("blank blackPiece whitePiece pawnStart1W pawnStart2W pawnStart3W pawnStart4W pawnStart5W pawnStart6W pawnStart7W pawnStart8W pawn1W pawn2W pawn3W pawn4W pawn5W pawn6W pawn7W pawn8W tower1W tower2W knight1W knight2W bishop1W bishop2W queenW kingW pawnStart1B pawnStart2B pawnStart3B pawnStart4B pawnStart5B pawnStart6B pawnStart7B pawnStart8B pawn1B pawn2B pawn3B pawn4B pawn5B pawn6B pawn7B pawn8B tower1B tower2B knight1B knight2B bishop1B bishop2B queenB kingB").addClass(spPiece).addClass(teamColor2)';
	eval(addMainPieceClass);
	
	var removeOldMainPieceClass = '$("#' + oldBox + '").removeClass(spPiece).removeClass(teamColor2).removeClass("blank blackPiece whitePiece pawnStart1W pawnStart2W pawnStart3W pawnStart4W pawnStart5W pawnStart6W pawnStart7W pawnStart8W pawn1W pawn2W pawn3W pawn4W pawn5W pawn6W pawn7W pawn8W tower1W tower2W knight1W knight2W bishop1W bishop2W queenW kingW pawnStart1B pawnStart2B pawnStart3B pawnStart4B pawnStart5B pawnStart6B pawnStart7B pawnStart8B pawn1B pawn2B pawn3B pawn4B pawn5B pawn6B pawn7B pawn8B tower1B tower2B knight1B knight2B bishop1B bishop2B queenB kingB").addClass("blank")';
	eval(removeOldMainPieceClass);
	
	var box1 = "'box1";
	var box2 = "'box2";
	var box3 = "'box3";
	var box4 = "'box4";
	var box5 = "'box5";
	var box6 = "'box6";
	var box7 = "'box7";
	var box8 = "'box8";
	var endQuote = "'";
	
	for (var i=1; i<9; i++){
		var redoMoveFunctions1 = '$("#box1' + i + '").attr("onclick","javascript:whichPiece(' + box1 + i + endQuote + ')")';
		var redoMoveFunctions2 = '$("#box2' + i + '").attr("onclick","javascript:whichPiece(' + box2 + i + endQuote + ')")';
		var redoMoveFunctions3 = '$("#box3' + i + '").attr("onclick","javascript:whichPiece(' + box3 + i + endQuote + ')")';
		var redoMoveFunctions4 = '$("#box4' + i + '").attr("onclick","javascript:whichPiece(' + box4 + i + endQuote + ')")';
		var redoMoveFunctions5 = '$("#box5' + i + '").attr("onclick","javascript:whichPiece(' + box5 + i + endQuote + ')")';
		var redoMoveFunctions6 = '$("#box6' + i + '").attr("onclick","javascript:whichPiece(' + box6 + i + endQuote + ')")';
		var redoMoveFunctions7 = '$("#box7' + i + '").attr("onclick","javascript:whichPiece(' + box7 + i + endQuote + ')")';
		var redoMoveFunctions8 = '$("#box8' + i + '").attr("onclick","javascript:whichPiece(' + box8 + i + endQuote + ')")';
		eval(redoMoveFunctions1);
		eval(redoMoveFunctions2);
		eval(redoMoveFunctions3);
		eval(redoMoveFunctions4);
		eval(redoMoveFunctions5);
		eval(redoMoveFunctions6);
		eval(redoMoveFunctions7);
		eval(redoMoveFunctions8);
	}
	
}
// END moveHere()