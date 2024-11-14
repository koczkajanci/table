let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]


//const table = document.createElement('table');
//const tablehead = document.createElement('thead');
//const tablebody = document.createElement('tbody');
//const thr = document.createElement('tr');

createHTMLElement("table","persontable",document.body)
createHTMLElementWithParentId("thead","personthead", "persontable")
createHTMLElementWithParentId("tr","persontr","personthead")
createHTMLElementWithParentId("tbody","persontbody","persontable")



//---------------------------------------------------
document.body.appendChild(table);
table.appendChild(tablehead);
table.appendChild(tablebody);
 
tablehead.appendChild(thr);

 


//---------------------------------------------------





const tbody= document.createElement('tbody')
table.appendChild(tbody);

renderTable();



const form = document.getElementById("form")
form.addEventListener('submit', 
    function(e)
    {
        e.preventDefault() 
        const lastname = document.getElementById('lastname')   
        const firstname1 = document.getElementById('firstname1')   
        const firstname2 = document.getElementById('firstname2')   
        const married = document.getElementById('married')   
        const pet = document.getElementById('pet')
        
        
        const lastnValue =lastname.value
        const firstn1Value = firstname1.value
        let firstn2Value = firstname2.value
        const petValue = pet.value
        const marryValue = married.checked

     
        if(validateFields(lastname,firstname1,pet)){
            if(firstn2Value == ""){
                firstn2Value = undefined;
                
        
            }
            let adatok =  {
                lastname: lastnValue,
                firstname1: firstn1Value,
                firstname2: firstn2Value,
                married: marryValue,
                pet: petValue

                
            }
          
            
            
            
            array.push(adatok);
            console.log(array)
            renderTable();

            form.reset();

           
            
    
        }

       
    


    })    




function renderTable(){
    tbody.innerHTML = '';
    for (const person of array){
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        const lastname = document.createElement('td');
        tr.appendChild(lastname);
        lastname.innerHTML = person.lastname;
        const firstname1 = document.createElement('td');
        tr.appendChild(firstname1);
        firstname1.innerHTML = person.firstname1;
    
        if(person.firstname2 === undefined){
            firstname1.colSpan = 2
        }else{
            const firstname2 = document.createElement('td')
            firstname2.innerHTML = person.firstname2
            tr.appendChild(firstname2)
        }
        const married = document.createElement('td');
        tr.appendChild(married);
        married.innerHTML = person.married;
    
        if(person.married === true){
            married.innerHTML = "igen"
        }else{
            married.innerHTML = "nem"
        }
        
        const pet = document.createElement('td');
        tr.appendChild(pet);
        pet.innerHTML = person.pet;
      
    
    
      
    
        tr.addEventListener('click', function(e)
        { 
            let valasztott = tbody.querySelector('.selected');
            if(valasztott != undefined){
                valasztott.classList.remove('selected');
            }   
            console.log('click')
            console.log(e);
            e.currentTarget.classList.add('selected');
           
    
    
        }) 
    
     
        
    }
}

function validateFields(lastnameText,firstnameText,petText){

    const errortorles = form.querySelectorAll('.error');
    errortorles.forEach(error => error.innerHTML = ' ');

    let result = true;
    if(lastnameText.value === ''){
        const parenttelement = lastnameText.parentElement
        const error = parenttelement.querySelector('.error');
        error.innerHTML = "Adj meg a keresztnevet";
        result = false;
    }

    if(firstnameText.value === ''){
        const parenttelement = firstnameText.parentElement
        const error = parenttelement.querySelector('.error');
        error.innerHTML = "Adj meg a vezeteknevet";
        result = false;
    }

    if(petText.value === ''){
        const parenttelement = petText.parentElement
        const error = parenttelement.querySelector('.error');
        error.innerHTML = "Adj meg az allat nevet";
        result = false;
    }
    return result;

}

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

