const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

class LoadData{
  async loadQuestion(){
    const response = await fetch("/src/data/mbti.json", requestOptions);
    return await response.json(); 
  }
  
  async loadAnswer(){
    const response = await fetch("/src/data/mbti.json", requestOptions);
    return await response.json(); 
  }
}

const loadData = new LoadData();

// export default loadData;