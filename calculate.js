
var tabela = document.getElementById("testing");
var rows = tabela.rows.length;
var cells = tabela.rows[0].cells.length;

function myFunction() {
  for(var i=1;i<rows-1;i++){
      for(var x =1;x<(cells-1);x++){
          test = tabela.rows[i].cells[x].innerHTML;
          if(test < 7){
              tabela.rows[i].cells[x].style.backgroundColor = 'rgba(255,0,0, .3)';
          } else {
              tabela.rows[i].cells[x].style.color = '#000';
          }
      }
  }
}


var tabela = document.getElementById("testing");
var rows = tabela.rows.length;
var cells = tabela.rows[0].cells.length;

function media(){
  for(var i = 1; i < (rows-1); i++){
    var soma = 0; 
    // var cl = tabela.rows[i].cells; 
    // var sort =  cl.sort(function(a, b){return a - b}) 
//     for(var nota = 1; nota < (cells-3); nota++){
//       soma = soma + parseInt(tabela.rows[i].cells[nota].innerHTML);
//     }
    soma = ((Number(tabela.rows[i].cells[3].innerHTML)+Number(tabela.rows[i].cells[2].innerHTML)) / 2)
    document.getElementsByClassName("media")[i-1].innerHTML = soma  /// (cells-3);
  }
}


function status(){
  var status = document.getElementsByClassName("status");
  for(var i = 1; i< rows-1; i++){
    var nota = tabela.rows[i].cells[5].innerHTML;
      if(nota >= 7){
        status[i-1].innerHTML = "Approved";
        status[i-1].style.color = "green";
      } else if (nota < 6){
        status[i-1].innerHTML = "Disapproved";
        status[i-1].style.color = "red";
      } else {
        status[i-1].innerHTML = "Recovery";
        status[i-1].style.color = "blue";
      }
  }
}

function average(){
    var sum = 0

    for(var i=1; i<rows-1; i++){
        sum+= Number(tabela.rows[i].cells[5].innerHTML);
    }
    document.getElementsByClassName("avg")[0].innerHTML = (sum / 4).toFixed(2)
}