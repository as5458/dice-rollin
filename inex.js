function diceroll(){
    const noofdic=document.getElementById("in").value;
    const diceres=document.getElementById("diceresult");
    const diceimg=document.getElementById("diceimages");
    let values=[];
    let im=[];
    for(let i=0;i<noofdic;i++)
    {
        const val=Math.floor(Math.random()*6)+1;
        values.push(val);
        im.push(`<img src= "${val}.png">`);

    }
    diceres.textContent=`Roll:${values.join(", ")}`;
    diceimg.innerHTML=im.join("");
}