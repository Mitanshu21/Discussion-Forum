var tags = [ 
  "enviroment", 
  "politics", 
  "engineering", 
  "programming", 
  "college", 
  
  ]; 

var n= tags.length; 	 
function ac(value) { 
    document.getElementById('datalist').innerHTML = ''; 
    l=value.length; 
for (var i = 0; i<n; i++) { 
    if(((tags[i].toLowerCase()).indexOf(value.toLowerCase()))>-1) 
    { 
        var node = document.createElement("option"); 
        var val = document.createTextNode(tags[i]); 
        node.appendChild(val); 

        document.getElementById("datalist").appendChild(node); 
        } 
    } 
}

