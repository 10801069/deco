function addWallRow() {
    var wallRow = document.createElement("div");
    wallRow.classList.add("input-group");

    var widthLabel = document.createElement("label");
    widthLabel.setAttribute("for", "wallWidth");
    widthLabel.textContent = "Wall Width:";

    var widthInput = document.createElement("input");
    widthInput.setAttribute("type", "text");
    widthInput.setAttribute("name", "wallWidth");

    var heightLabel = document.createElement("label");
    heightLabel.setAttribute("for", "wallHeight");
    heightLabel.textContent = "Wall Height:";

    var heightInput = document.createElement("input");
    heightInput.setAttribute("type", "text");
    heightInput.setAttribute("name", "wallHeight");

    wallRow.appendChild(widthLabel);
    wallRow.appendChild(widthInput);
    wallRow.appendChild(heightLabel);
    wallRow.appendChild(heightInput);

    
    widthInput.style.marginLeft = "0.50em";
    heightLabel.style.marginLeft = "2em";
 

    var addWallButton = document.getElementById("addWallButton");
    addWallButton.parentNode.insertBefore(wallRow, addWallButton);
}


function calculatePaintNeeded() {
    // Get room dimensions
    var roomWidth = parseFloat(document.getElementById("roomWidth").value);
    var roomHeight = parseFloat(document.getElementById("roomHeight").value);

    // Get excluded area dimensions
    var excludedWidth = 0;
    var excludedHeight = 0;

    var excludedWidthInputs = document.getElementsByName("wallWidth");
    for (var i = 0; i < excludedWidthInputs.length; i++) {
        excludedWidth += parseFloat(excludedWidthInputs[i].value);
    }

    var excludedHeightInputs = document.getElementsByName("wallHeight");
    for (var i = 0; i < excludedHeightInputs.length; i++) {
        excludedHeight += parseFloat(excludedHeightInputs[i].value);
    }

    // Get excluded door dimensions
    var doorWidth = parseFloat(document.getElementById("doorWidth").value);
    var doorHeight = parseFloat(document.getElementById("doorHeight").value);

    // Calculate total dimensions
    var totalWidth = roomWidth - excludedWidth - doorWidth;
    var totalHeight = roomHeight - excludedHeight - doorHeight;

    // Get selected coat of paint
    var coatOfPaint = parseFloat(document.getElementById("coatOfPaint").value);

    // Calculate total area to be painted
    var totalArea = totalWidth * totalHeight;

    // Calculate total liters of paint needed
    var totalLiters = totalArea / coatOfPaint;

    // Display the results
    document.getElementById("totalArea").innerHTML = totalArea.toFixed(2);
    document.getElementById("totalLiters").innerHTML = totalLiters.toFixed(2);
}