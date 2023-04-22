let studentRecords = [ 
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } ]




// que1
let result=[]
for(let arr of studentRecords){
   result.push(arr.name.toUpperCase())
 }
   console.log(result)

// que2
let result1=[]
for(let arr of studentRecords){
 if(arr.marks > 50){
   result1.push(arr)
 }
}
console.log(result1)

// que 3
let result2=[]
            for(let arr of studentRecords){
             if(arr.marks > 50 && arr.id>120){
               result2.push(arr)
             }
            }
          console.log(result2)

//que4
let sum=0;
for(let arr of studentRecords){
 if(arr.marks > 50 && arr.id>120){
   sum+=arr.marks
 }
}
console.log(sum)


//que 5
let result3=[]
                for(let arr of studentRecords){
                  if(arr.marks>50){
                   result3.push(arr.name)
                   }
                }
                console.log(result3)




//que 6
let sum1=0;
            for(let arr of studentRecords){
             if(arr.id>120){
               sum+=arr.marks
             }
            }
          console.log(sum1)  
          
          
//que7
let result4=[]
for(let arr of studentRecords){
  if(arr.marks<50){
  arr.marks+=15;
  }
  if(arr.marks>50){
   result4.push(arr.marks)
  }
}
console.log(result4)


//que 8
let ar = [];
        let obj1 = {
          name: "Shivam",
          class: "Js",
          rollno: "1"
        }
        let obj2 = {
          name: "Abhishek",
          class: "Js",
          rollno: "2"
        }
        let obj3 = {
          name: "Raj",
          class: "Js",
          rollno: "3"
        }
        let obj4 = {
          name: "Avinash",
          class: "Js",
          rollno: "4"
        }
        let obj5 = {
          name: "Kiran",
          class: "Js",
          rollno: "5"
        }
        let obj6 = {
          name: "Tarun",
          class: "Js",
          rollno: "6"
        }
        ar.push(obj1, obj2, obj3, obj4, obj5, obj6);
        console.log(ar);
