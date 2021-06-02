class LoadData {
  constructor(){
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  loadData(){
    fetch("http://localhost:3003/questionList", this.requestOptions)
      .then(response => response.json());
  }
}

export default LoadData;