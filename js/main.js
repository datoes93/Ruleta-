class player {
    constructor (id, nameplayer, accountnumber) {
        this.id = id;
        this.nameplayer = nameplayer;
        this.accountnumber = accountnumber;
        this.initialvalue = 100000;
        this.accumulatedmoney = 0;       
     
    }
}

class Bets {
    addPlayer(_objPlayer){ 

        var tbl = document.getElementById('player-list-table').getElementsByTagName('tbody')[0];
  
         ///console.log(tbl.children());
        var row = tbl.insertRow(-1);
        var cellID = row.insertCell(-1);
        var cellnameplayer = row.insertCell(-1);
        var cellinitialvalue = row.insertCell(-1);
        var cellaccount = row.insertCell(-1);
        var cellbtndelete = row.insertCell(-1);
 
        var textcellID = document.createTextNode(_objPlayer.id);      
        var textnameplayer = document.createTextNode(_objPlayer.nameplayer);
        let moneyformat = new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP", maximumSignificantDigits: 3}).format(_objPlayer.initialvalue);
        var textinitialvalue = document.createTextNode(moneyformat);
        var textaccount = document.createTextNode(_objPlayer.accountnumber);
    
        var btncelldelete = document.createElement('input');
        btncelldelete.setAttribute('type', 'button');
        btncelldelete.setAttribute('class', 'btn btn-danger');
        btncelldelete.setAttribute('id', _objPlayer.id);
        btncelldelete.setAttribute('value', 'Delete');
        btncelldelete.setAttribute('name', 'btndelete');
        
        
 
        cellnameplayer.appendChild(textnameplayer);
        cellinitialvalue.appendChild(textinitialvalue);
        cellaccount.appendChild(textaccount);  
        cellbtndelete.appendChild(btncelldelete);
        cellID.appendChild(textcellID);
     }
 
}