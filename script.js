function tracker()
{
   if(document.getElementById("amount").value!=""&&document.getElementById("text").value!="")
    {

        if(document.getElementById("amount").value[0]=="-"){
            document.getElementById("balance").innerText=+document.getElementById("balance").innerText- +document.getElementById("amount").value.slice(1,);
            document.getElementById("expense").innerText=+document.getElementById("expense").innerText+ +document.getElementById("amount").value.slice(1,);
        }

        else{
            document.getElementById("income").innerText=+document.getElementById("income").innerText+ +document.getElementById("amount").value;
            document.getElementById("balance").innerText=+document.getElementById("balance").innerText+ +document.getElementById("amount").value; 
           document.getElementById("history").innerHTML+=`<button>${document.getElementById("text").value}<br>${document.getElementById("amount").value}</button>`
        }

    }
    else
        {
            alert("Enter correct entries");
        }
        
        document.getElementById("amount").value=""
        document.getElementById("text").value=""
    
}