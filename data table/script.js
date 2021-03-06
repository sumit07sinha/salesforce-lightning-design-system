const NUMBER_OF_ROWS = 20;



window.addEventListener("load", e => {
	document.querySelector("#sortTable").addEventListener("click", sortTable);
	document.querySelector("#button").addEventListener("click", addRow);
	getRandomData(NUMBER_OF_ROWS)
		.then(e => {
			e.forEach(addRow);
		});
});

async function getRandomData(numberOfRecords){
	return fetch("https://data-faker.herokuapp.com/collection", {
		method: "POST",
		headers:{
			"Content-Type": "application/json; charset=utf-8",
		},
		body: JSON.stringify({
			amountOfRecords: numberOfRecords,
			recordMetadata: {
				name: "name",
				email: "email",
				amount: "currency",
				closeAt: "dateInFuture",
			},
		}),
	}).then(e => e.json());
}

function sortTable() {
    let table, rows, i,shouldSwitch;
    table = document.getElementById("sTable");
    let switching = true;

    while (switching) {
      switching = false;
      rows = table.rows;
      
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        let rowsTD = rows[i].getElementsByTagName("th")[0];
        let rowsNextTD = rows[i + 1].getElementsByTagName("th")[0];
        //check if the two rows should switch place:
        if (rowsTD.innerHTML.toLowerCase() > rowsNextTD.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
        else{
            shouldSwitch = false;
            break;  
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

function addRow(data){
	let row = createRow({"Opportunity Name": "CloudHub"}, {
		"Account Name": data.name,
		"Close Date": data.closeAt,
		"Prospecting": "Prospecting",
		"Confidence": Math.floor(Math.random() * 100) + "%",
		"Amount": data.amount,
		"Contact": data.email
	});
	
	document.getElementById("tBody").appendChild(row);
}

function createRow(first, data){
	let row = createElement("tr.slds-hint-parent");
	
	for(let k in first){

		let th = createElement("th", row, {"data-label": k, scope: "row"},button);
		createElement("div.slds-truncate", th, {title: first[k], innerText: first[k]});		
	}
	for(let k in data){
		let th = createElement("th", row, {title: k});
		createElement("div.slds-truncate", th, {title: data[k], innerText: data[k]});		
	}
	
	return row;
}

function createElement(name, parent, options = {}){
	let classList = name.split(".");
	let tagName = classList.shift();
	
	let id = tagName.split("#");
	if(id.length > 1){
		tagName = id[0];
		id = id[1];
	}
	else
		id = undefined;
	
	let element = document.createElement(tagName);
	
	if(id)
		element.id = id;
	
	if(classList.length > 0)
		for(c of classList)
			element.classList.add(c);
	
	for(o in options)
		//if(element.hasOwnProperty(o))
			element[o] = options[o];
		//else
			//element.setAttribute(o, options[o]);	
	if(parent)
		parent.appendChild(element);
	
	return element;
}
