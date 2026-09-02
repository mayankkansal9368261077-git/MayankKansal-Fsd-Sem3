function addStu(){
    let name=document.querySelector("#name").value;
    let roll=document.querySelector("#rollNo").value;
    let adm=document.querySelector("#admNo").value;
    let branch=document.querySelector("#branch").value;
    alert("Working");
    let stuDet=[];
    const newStudent = {
    admNO: adm,
    nameStu: name,
    rollNo: roll,
    branchStu: branch};
    stuDet.push(newStudent);
}