// import mbtiData from '../data/mbti.json';


 export function loadData(){
      // fetch('http://localhost:3001/questionList') //
      // .then(response => response.json()) //
      // .then(json => json.items);

      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://localhost:3001/questionList", requestOptions)
        .then(response => response.json())
        
  }

