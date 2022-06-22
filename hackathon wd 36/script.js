var label=document.createElement("label");
label.innerHTML="Enter Your Name";
label.setAttribute("for","text");

var br=document.createElement("br");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","text");
input.setAttribute("required","true");

var br1=document.createElement("br");

var button=document.createElement("button");
button.addEventListener("click",a);
button.innerHTML="Search";

document.body.append(label,br,input,br1,button);
async function a(){
    async function a(){
        try{
            let name=document.getElementById("text").value;
            let something=await fetch(`https://api.nationalize.io?name=${name}`);
            let nothing=await something.json();
            console.log(nothing);
            let names=nothing.name;
          console.log(names)
          let country= nothing.country[0].country_id;
          console.log(country);
          let country1=nothing.country[1].country_id;
          console.log(country1);
      let probability=nothing.country[0].probability;
      console.log(probability);
      let probability1=nothing.country[1].probability;
      console.log(probability1);
        
            }catch(error){
                alert("something went wrong");
         }
        }
    a();    
     
}