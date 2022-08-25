





function btn(num){
  
 var add =  document.getElementById('res').innerHTML;
  document.getElementById('res').innerHTML = add+ num;
  
}


function del(){
    document.getElementById('res').innerHTML = '';
}


function result(){
 var solut =  document.getElementById('res').innerHTML;
 if(solut){
 document.getElementById('res').innerHTML = eval(solut).toFixed(2);
 }
}

function limpar(){
   var info = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = info.substring(0, info.length -1);
}

