
    let items=document.querySelectorAll(".item");
    let subjects=document.querySelectorAll(".subjectname");
     let course=document.querySelector("#course");
    //to change the text in course button with text selected in dropdown list
    for (let i=0;i<6;i++)
    {
        items[i].addEventListener("click",function(){

            course.innerText=items[i].innerText;
            let str=course.innerText;
            coursearray=str.split(",");
            console.log(coursearray);
            for(let j=0;j<4;j++){
            subjects[j].innerText=coursearray[j];}
        });
    }
    //calculate individual subject grades simultaneously when the marks are entered
     let marks=document.querySelectorAll(".marks");
      console.log(marks);
     let grades=document.querySelectorAll(".grade");
      console.log(grades);
    for(let i=0;i<6;i++){
       
         marks[i].addEventListener("change",function(){
           // console.log(marks[i].value);
            let mark=marks[i].value;
            let grade=calculateGrade(mark);
            console.log(grade);
            grades[i].value=grade;
            
         });

    }
    //function to calculate grade
    function calculateGrade(mark){
        if ((mark>=90)&&(mark<=100))
            grade='A';
        else if((mark>=80)&&(mark<90))
            grade='B';
        else if((mark>=70)&&(mark<80))
            grade='C';
        else if((mark>=60)&&(mark<70))
            grade='D';
        else if((mark>=50)&&(mark<60))
            grade='E';
        else if(mark<50)
            grade='Fail';
        else
            grade='Not valid mark';

        return grade;
    }
    //section to calculate the final result
    const avgbtn=document.querySelector("#calculation");
    avgbtn.addEventListener("click",function(){
      //check course is selected
        let msg=course.innerText;
        console.log(msg);
        if(msg==="Choose your course ")
      {
        alert("Choose your course before proceeding");
        return;
      }
      //check if all the marks entered are valid
      for(let i=0;i<6;i++)
      {
        if((grades[i].value=="Not valid mark")||(grades[i].value=="")||(marks[i].value==""))
        {
            alert("kindly check whether you entered valid marks on all fields");
            return;
        }
    }
      
        let total=0;
       let avg=0;
       let grade="";
        for (let i=0;i<6;i++)
        {
            total=total+parseInt(marks[i].value);
        }
        avg=total/6;
        //grade=calculateGrade(avg);
        console.log(total,avg);
        //check passed in all subjects
       
        let count=0;
        for(let j=0;j<6;j++)
        {
            console.log(grades[j].value);
        if (parseInt(marks[j].value)>=50)
        {
            count++;
        }
         }
         console.log(count);
        if(count==6)
        {
            grade=calculateGrade(avg);
        
        }
        else{
            grade="Fail"
        }
        
        resultdisplay(grade,avg);
    });
   
    function resultdisplay(grade,avg)
    {
        var dis=document.querySelector("#resultdisplay");
        dis.innerHTML="Your Average: "+avg+"<br>"+"Your Grade: "+grade;
    }
   
    