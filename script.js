





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

    let result = String(eval(solut));

    let number = result;
    let decimal = number.split('.')[1]; 
    let quantity = decimal ? decimal.length : 0;
        
    
    if(quantity > 3){
        document.getElementById('res').innerHTML = Number(result).toFixed(2)
    }else {
        document.getElementById('res').innerHTML = result
    }
    
 }
}

function limpar(){
   var info = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = info.substring(0, info.length -1);
}

