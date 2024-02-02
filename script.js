console.log("hdff")


document.getElementById("change").addEventListener("click",pictures);
document.getElementById("this").addEventListener("click",that);

function that() {
alert("what's up");
}



let x = 0;

function pictures() {

x++;

if(x==1)
{
document.getElementById("change-pic").src = "https://i.pinimg.com/564x/9d/a2/b6/9da2b650e3a184acfb9034ef309ecbbc.jpg";
}

if(x==2)
{
document.getElementById("change-pic").src = "https://i.pinimg.com/564x/32/52/6c/32526c5f0f2d43210fa8b82a00f19b75.jpg";
x=0;
}

}



/*const gems = ["amethyst", "agate", "carnelian", "rose quarts", "citrine", "black obsidian"];

for(x of gems)
{
document.getElementById(x).addEventListener("click",facts);
}

function facts()
{

switch(event.target.id)
{
case amethyst:
alert("just a");
Break;

default:
console.log(document.getElementById(x))

}
}*/
