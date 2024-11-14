/**
 * 
 * @param {'td'|'th'} egy 
 * @param {string} ketto 
 * @param {HTMLTableRowElement} harom 
 * @returns {HTMLTableCellElement}
 */
function createTableElement(egy,ketto,harom){
    const segitseg = document.createElement(egy);
    segitseg.innerHTML = ketto;
    harom.appendChild(segitseg);
    return segitseg;
}


function createHTMLElement(tag,id,parentElement){
    const element = document.createElement(tag);
    element.id = id;
    parentElement.appendChild(element)
}

function createHTMLElementWithParentId(tag,id,parentElementid){
    const element =     document.getElementById(parentElementid);
    if(element != undefined){
        createHTMLElement(tag,id,element)
    }
}

function renderTableHeader(){
    const tableheaderid = document.getElementById("persontr")
    const thveznev = createTableElement('th', "Vezetéknév", tableheaderid)
    const thkernev = createTableElement('th', "Keresztnév", tableheaderid)
    thkernev.colSpan = 2
    const thhazas = createTableElement('th', "Házas-e?", tableheaderid)
    const thallat = createTableElement('th', "Állat", tableheaderid)
}