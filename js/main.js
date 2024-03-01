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
     BackAddPlayer(element){
      
        if(element.name === "back"){
          const buttongroup = document.getElementById('gamebuttongroup');
          const roulette = document.getElementById('roulette');
          const player = document.getElementById('player');
          const listplayer = document.getElementById('player-list');
          if(player.style.display === "block"){
            player.style.display = "none";
            buttongroup.style.display ="block";
            roulette.style.display = "block";
            
          }else {
            player.style.display ="block";
            buttongroup.style.display ="none";
            roulette.style.display = "none";
            listplayer.style.position = "absolute";
            listplayer.style.left = "40%";
                   
            listplayer.style.width = "700px";
            //listplayer.style.height = "300px";
           
          }
        }
  
      }

      DeletePlayerObject(element){
        objLista.forEach((item,index,arr)=>{
          if(item.id==element.id)
          
          { 
            objFinalize.push(item),
            arr.splice(index,1 )}
         
          
        });
        
      }

      finalizePlayer(element){
        if(element.name ==='btnFinalize'){
          element.parentElement.parentElement.remove();
          this.DeletePlayerObject(element);
         
  
         delete objBetvaluenumber['betnumber'+element.id];
         delete objBetvaluenumber['betvalue'+element.id];
  
        }
      
  
      }

      
  FinishAll(element){
    if(element.name === "FinishAll"){
      let _objTemporal = Object.keys(objLista);
      for (let i = 0; i < _objTemporal.length; i++) {
        const property = _objTemporal[i];
        objFinalize.push(objLista[property]);
        delete objLista[property];
        
      }
      const allplayer = document.getElementById('all-player');
      const roulette = document.getElementById('roulette');
      const report = document.getElementById('report');
      const earningreport = document.getElementById('earningreport');

      allplayer.style.display = 'none';
      roulette.style.display = 'none';
      report.style.display = 'block';
      earningreport.style.display = 'block';
      
      //console.log(objFinalize);


      var tablereport = document.getElementById('tablereport').getElementsByTagName('tbody')[0];
      let objrecorrer = Object.keys(objFinalize);
      for (let i = 0; i < objrecorrer.length; i++) {
        const property = objrecorrer[i];
        
      
      var row = tablereport.insertRow(-1);
      var cellID = row.insertCell(-1);
      var cellnameplayer = row.insertCell(-1);
      var cellAmounttobePaid = row.insertCell(-1);
      var cellTrend = row.insertCell(-1);    
      let moneyformat = new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP", maximumSignificantDigits: 3}).format(objFinalize[property].initialvalue);
     
      var textcellID = document.createTextNode(objFinalize[property].id);      
      var textnameplayer = document.createTextNode(objFinalize[property].nameplayer);
      var textAmounttobePaid = document.createTextNode(moneyformat);   
      
      var divtrend = document.createElement('div');
      if(objFinalize[property].initialvalue > 100000){
        divtrend.innerHTML = 
        `<div  class="divtrend">           
        <i class="divtendenciaup fas fa-arrow-up"></i>          
        </div>`;

      } else if (objFinalize[property].initialvalue === 100000) {
        divtrend.innerHTML = 
        `<div  class="divtrend">           
        <i class="divtendencia fas fa-window-minimize"></i>          
        </div>`;
      }else {
        divtrend.innerHTML = 
        `<div  class="divtrend">           
        <i class="divtendenciadown fas fa-arrow-down"></i>          
        </div>`;
      }

      

      cellID.appendChild(textcellID);
      cellnameplayer.appendChild(textnameplayer);
      cellAmounttobePaid.appendChild(textAmounttobePaid);
     cellTrend.appendChild(divtrend);

    }

    let moneyProfit= new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP", maximumSignificantDigits: 3}).format(Profits);
    document.getElementById('profits').innerHTML = moneyProfit;
    

  }
}

  
 
}