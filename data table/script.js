let addRows=() =>{
    let tbody= document.getElementById("tBody");
    let rows= document.createElement("tr");
    let th1= document.createElement("th");
    let div= document.createElement("div");
    div.innerHTML= "cloudhub";
    div.setAttribute("class","slds-truncate");
    div.setAttribute("title","Cloudhub");
    th1.setAttribute("data-label","Opportunity Name");
    th1.setAttribute("scope","row");
    th1.appendChild(div);
    rows.appendChild(th1);
   
    //table data
    let td1= document.createElement("td");
    let div1= document.createElement("div");
    div1.setAttribute("class","slds-truncate");
    div1.innerHTML="Prospecting";
    td1.setAttribute("data-label","Account Name");
    td1.appendChild(div1);
    rows.appendChild(td1);
    let td2= document.createElement("td");
    let div2= document.createElement("div");
    div2.setAttribute("class","slds-truncate");
    div2.innerHTML="14/04/20";
    td2.setAttribute("data-label","Close Date");
    td2.appendChild(div2);
    rows.appendChild(td2);
    let td3= document.createElement("td");
    let div3= document.createElement("div");
    div3.setAttribute("class","slds-truncate");
    div3.innerHTML="prospecting";
    td3.setAttribute("data-label","Stage");
    td3.appendChild(div3);
    rows.appendChild(td3);
    let td4= document.createElement("td");
    let div4= document.createElement("div");
    div4.setAttribute("class","slds-truncate");
    div4.innerHTML="20%";
    td4.setAttribute("data-label","Confidence");
    td4.appendChild(div4);
    rows.appendChild(td4);
    let td5= document.createElement("td");
    let div5= document.createElement("div");
    div5.setAttribute("class","slds-truncate");
    div5.innerHTML="25k";
    td5.setAttribute("data-label","Amount");
    td5.appendChild(div5);
    rows.appendChild(td5);
    let td6= document.createElement("td");
    let div6= document.createElement("div");
    div6.setAttribute("class","slds-truncate");
    div6.innerHTML="jrogers@cloudhub.com";
    td6.setAttribute("data-label","Contact");
    td6.appendChild(div6);
    rows.appendChild(td6);
    let button1= document.createElement("button");
    button1.innerHTML="+";
    button1.setAttribute("onclick", "addRows()");
    div6.appendChild(button1);
    rows.setAttribute("class","slds-hint-parent");
    tbody.appendChild(rows);
   
    
}
let removeRows=()=>{
    let rowDelete= document.getElementsByClassName("slds-hint-parent");
    
        rowDelete.parentNode.removeChild(rowDelete[0]);
}


// let addRows=() =>{
//     let table= document.getElementById("sTable");
//     let tbody= document.getElementById("tBody");
//     let rows= tbody.insertRow();
//     let cell1= rows.insertCell();
//     let cell2= rows.insertCell();
//     let cell3= rows.insertCell();
//     let cell4= rows.insertCell();
//     let cell5= rows.insertCell();
//     let cell6= rows.insertCell();
//     let cell7= rows.insertCell();
//     cell1.innerHTMl= "cloudhub";
//     cell2.innerHTMl= "cloudhub";
//     // let cell8= rows.insertCell();
//     rows.setAttribute("class","slds-hint-parent");
//     tbody.appendChild(rows);
//     // tbody.appendChild(th);
//     // th.appendChild(div);
    
// }