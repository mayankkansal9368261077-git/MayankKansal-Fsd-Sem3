function stuResultCalculator(){
    let n=document.querySelector("#input").value;
    n=parseInt(n);
    let sum=0;
    for(let i=1;i<=n;i++){
        let m=prompt(`Enter the Marks of Subject ${i}`);
        m=parseInt(m);
        sum+=m;
    }
    let m=sum/n;
    document.querySelector("#result").innerHTML= `<p><b>Result:</b> ${m} percent</p>`;
}