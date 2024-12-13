function calculateMarks() {
    let assignment1=parseInt(document.getElementById("assignment1").value);
    let assignment2=parseInt(document.getElementById("assignment2").value);
    let mid1=parseInt(document.getElementById("mid1").value);
    let mid2=parseInt(document.getElementById("mid2").value);

    if(isNaN(assignment1)){assignment1=0;}
    if(isNaN(assignment2)){assignment2=0;}
    if(isNaN(mid1)){mid1=0;}
    if(isNaN(mid2)){mid2=0;}

    if(assignment1<0||assignment1>10||assignment2<0||assignment2>10||mid1<0||mid1>35||mid2<0||mid2>35){
        alert("Please enter marks within the valid range.");
        return;
    }

    const assignmentMarks=(assignment1+assignment2)/2;
    let bestMid,worstMid;

    if(mid1>mid2){
        bestMid=mid1;
        worstMid=mid2;
    }

    else{
        bestMid=mid2;
        worstMid=mid1;
    }

    const weightedMidMarks = (bestMid / 35) * 0.75 + (worstMid / 35) * 0.25;
    const Marks = (assignmentMarks / 10) * 10 + weightedMidMarks * 20;
    const totalMarks = Math.round(Marks);
    
    document.getElementById("result").innerText="Total Internal Marks: "+totalMarks+"/30";

    if(totalMarks>=15){
            alert("Congratulations! You are Q U A L I F I E D");
        }
    else{
        alert("Sorry! You are not Qualified...");
    }
}