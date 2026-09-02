
function main(){
    let name=prompt("Enter the Name of Student:");
    let roll=prompt("Enter the Roll Number of Student:");
    let total=0;
    let n=prompt("Enter the number of subjects:");
    for(let i=0;i<n;i++){
        let marks=prompt(`Enter the marks of subject ${i+1}:`);
        total+=parseInt(marks);
    }
    const percentage=(total/(n*100))*100;
    const result=percentage>=40?"Pass":"Fail";
    document.getElementById("data").innerHTML +=`<div class="stu"> Name: ${name}<br>Roll Number: ${roll}<br>Total Marks: ${total}<br>Percentage: ${percentage}%<br>Result: ${result} </div>`;  
}