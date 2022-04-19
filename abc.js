
function test(btn){
                        
    var number = btn.value;
    
    switch (number) {
        case "=":
            document.getElementById("input").value= eval(document.getElementById("input").value);
            break;
        case "c":
            document.getElementById("input").value="";
            break;
        default:
            
            document.getElementById("input").value+=number;
            break;
    }
    
}                    

        