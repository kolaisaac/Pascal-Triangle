const getUserInput = () => {
    
    let userNum = document.getElementById("user-input-field").value;

    if (isNaN(userNum)) {
       document.getElementById("nonNumber").innerHTML = ("Invalid number! Please try again and enter a VALID NUMBER to continue!");
    } else if ( (userNum) <= 0) {
       document.getElementById("nonNumber").innerHTML = ("Invalid number! Please try again and enter a NON-NEGATIVE INTEGER to continue!");
    }     
    else {
        calculatePascalsTriangle(userNum);
    }
}

const calculatePascalsTriangle = (n) => {
    
    // an array to hold the rows of pt
    let elements = [];
    
    // getting the div object that will display the pt inside the HTML page
    let pascalTriangleDiv = document.getElementById("pascalTriangle");
    pascalTriangleDiv.innerHTML = "";
    
    for (i = 0; i < n; i++) {
        
        // iterating through rows, creating a paragraph element for each row, and preparing the text for it
        let myPascal = document.createElement("p");
        let myTriangle = "";
        
        // for each element of the row array, creating a new array, the columns
        elements[i] = [];
        for (j = 0; j <= i; j++) {
            
            // the first element of each row is 1
            elements[i][0] = 1;
            
            // and the last element of each row is 1
            elements[i][i] = 1;
            
            // calculating the value of the remaining elements in each row, filling the columns
            if (j !== 0 && j !== i) {
                elements[i][j] = elements[i - 1][j] + elements[i - 1][j - 1];
            }
            
            myTriangle += elements[i][j] + " ";
            
        }
        
        // adding the row as text to the paragraph created earlier
        myPascal.appendChild(document.createTextNode(myTriangle));
        
        // adding the paragraph to the pt div
        ptDiv.appendChild(myPascal);
    }
}

