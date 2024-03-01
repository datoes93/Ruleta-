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

StartGame(element){
      
    if(element.name === "startgame"){
      //const buttongroup = document.getElementById('gamebuttongroup');
      const Tobet = document.getElementById('ToBet');
      const back = document.getElementById('back');
      const stargame = document.getElementById('stargame');
      const allplayer = document.getElementById('all-player');
      const playerlist = document.getElementById('player-list');
      const roulette = document.getElementById('roulette');
      
      back.style.display = "none";
      ToBet.style.display = 'block';
      stargame.style.display = "none";
      allplayer.style.display = "block";
      playerlist.style.display = "none";
      roulette.style.display = "block";
      this.ListAllPlayer();
    }

  }

  DetermineWinner(){
      
    setTimeout(function(){
      var segment = theWheel.getIndicatedSegment();
      var toastMixin = Swal.mixin({
        toast: true,
        icon: 'success',
        //title: segment.text,
        //text: "Wining Number",
        animation: false,
        position: 'top-right',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        /*didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }*/
      });
      
      toastMixin.fire({
        animation: true,
        title: 'winning number:   ' + segment.text
      });       
      var WinningNumber = parseInt(segment.text);
      const objBet = new Bets();
      
      var arrayobj = [];    //array local para almacenar ganadores
      let objrecorrer = Object.keys(objListBet);
      let objGeneral = Object.keys(objLista);
      for (let i = 0; i < objrecorrer.length; i++) {
        const element = objrecorrer[i];
        const elementGeneral = objGeneral[i];
       // console.log(objListBet[element]);
        //console.log(objLista[elementGeneral]);
        
        if(objListBet[element].betnumber === WinningNumber && objListBet[element].idplayer === objLista[elementGeneral].id){
          objLista[elementGeneral].initialvalue = objLista[elementGeneral].initialvalue +  objListBet[element].betValue;
          Profits = Profits - objListBet[element].betValue;
          arrayobj.push(objLista[elementGeneral].nameplayer);
         // arrayobj.push(objwinner);
         delete objListBet[element];
         
        }else{
          objLista[elementGeneral].initialvalue = objLista[elementGeneral].initialvalue -  objListBet[element].betValue;
           Profits = Profits + objListBet[element].betValue;
          delete objListBet[element];
          if(objLista[elementGeneral].initialvalue <=0){
           objFinalize.push(objLista[elementGeneral]);

            delete objLista[elementGeneral];
          }

        }
        
     }
     //console.log(Profits);
     if(arrayobj.length !== 0){
     setTimeout(function(){
      objBet.ShowMessage('Ganadores:  '+arrayobj.join(",   "), 'success');
      var tabla = document.getElementById('Players-to-bet').getElementsByTagName('tbody')[0];
      tabla.innerHTML = '';

      
      objBet.ListAllPlayer();  
      resetWheel();  return false;

     }, 4000);
     }else {
      setTimeout(function(){
        var tabla = document.getElementById('Players-to-bet').getElementsByTagName('tbody')[0];
        tabla.innerHTML = '';
        objBet.ListAllPlayer();  
        resetWheel();  return false;
       

      }, 4000);
     }
   
     /* console.log(WinningNumber);
      console.log(objListBet);
      console.log(objLista);*/

    }, 14000);

    

  }

  ShowMessage(message, cssClass){
    const divmessage = document.createElement('div');
    divmessage.className = `alert alert-${cssClass}  mt-2`;
    divmessage.appendChild(document.createTextNode(message));
    const  container = document.querySelector('.container');
    const  appbets = document.querySelector('#app-bets');
    container.insertBefore(divmessage, appbets);
    const alertaid = setTimeout(function () {
      document.querySelector('.alert').remove();

    }, 4000);    

  }
  
 
}