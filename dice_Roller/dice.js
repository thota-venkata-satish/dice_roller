document.getElementById("button1").onclick = function()
{
    let num = document.getElementById("noOfDices").value;
    let arr =[];
    let img = [];
    for(let i= 0;i<num;i++)
    {
        let temp ;
        temp = Math.floor(Math.random()*(6))+1;
        arr.push(temp);
        img.push(`<img src="dice_images/${temp}.png">`)
    }
    document.getElementById("p1").textContent = `Dice: ${arr.join(", ")}`;
    document.getElementById("images").innerHTML = img.join(', ');

}