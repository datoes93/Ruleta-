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
     GotoPlay(element){
        let property = Object.keys(objLista);
        if(element.name === "gotoplay" && property.length !== 0){
    
          const player = document.getElementById('player');
          const listplayer = document.getElementById('player-list');
          const buttongroup = document.getElementById('gamebuttongroup');
      
          if(player.style.display === "none"){
            player.style.display = "block";          
            buttongroup.style.display = "none";
  
           
           
       
          }else{
  
            player.style.display ="none"      
            buttongroup.style.display = "block";   
            listplayer.style.position = "absolute";
            listplayer.style.left = "0";
            listplayer.style.right = "0";
            listplayer.style.margin ="auto";
            listplayer.style.width = "700px";
    
          
           
            
          }
        }
  
      }    
 

      DeletePlayer(element){
        if(element.name === "btndelete"){
      
         element.parentElement.parentElement.remove();
        
  
        objLista.forEach((item,index,arr)=>{
          if(item.id==element.id)
          { arr.splice(index,1 )}
        })
          //this.DeletePlayerObject(element);
      
       
          this.ShowMessage('Player successfully deleted', 'info');
      
  
        }
  
   
      }    }