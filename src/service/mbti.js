// export default function LoadQuestionList(){
//   fetch("../data/mbti.json")
//     .then(response => response.json())
//     .then(result => console.log(result.questionList));
// }
  
// export function LoadResultsList(){
//   fetch("../data/mbti.json")
//   .then(response => response.json())
//   .then(result => console.log(result.resultsList));
// }




// class LoadData {
//   constructor(){}

//   LoadQuestionList(){
//     const qData = fetch("../data/mbti.json",{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//       })
//       .then(response => response.json())
//       .then(result => {return result.questionList});
//     return qData;
//   }

//   LoadResultsList(){
//     const aData = fetch("../data/mbti.json")
//     .then(response => response.json())
//     .then(result => {return result.resultsList});
//     return aData;
//   }
// }


const test=[];



class LoadData {
  constructor(){}

  async LoadQuestionList(){
    const response = await fetch("../data/mbti.json", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    const result_1 = await response.json();
    return result_1.questionList;
  }

  async LoadResultsList(){
    const response = await fetch("../data/mbti.json");
    const result_1 = await response.json();
    return result_1.resultsList;
  }

}
const loadData = new LoadData();
// loadData.LoadQuestionList()
//     .then(items=>{
//       console.log(items)});
export default LoadData;


// loadData.LoadQuestionList()
// .then(items=>{
//   loadQuestionList(items);
// });



// function loadQuestionList(qitems){
//   const a = qitems;
//   console.log(a);
//   return a;
// }

// function a(){
//   return 'a';
// }
// const ab = a();
// const c = loadQuestionList();


// console.log(ab);
// console.log(c);
// loadQuestionList.then(console.log(c));










// const loadData = new LoadData();

// const q = loadData.LoadQuestionList().then(result=>{return result});
// const a = loadData.LoadResultsList().then(result=>{return result});
// q.then(result => {console.log(result)});
// a.then(result => {console.log(result)});
// q.then(result => {test1(result)});
// a.then(result => {test2(result)});


// console.log(test1);
// console.log(test2);










// export const a = loadData.LoadQuestionList().then(result=>{return result});
// export const q = loadData.LoadResultsList().then(result=>{return result});



// export const q =loadData.LoadQuestionList().then(result=>{return(result)});
// export const a =loadData.LoadResultsList().then(result=>{return(result)});
// export default loadData;