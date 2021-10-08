# MBTI

🧾 80가지 문항으로 알아보는 MBTI

배포 주소 : https://hj-mbti.netlify.app

<br>

## 목차

1. [배포 주소](#1)
2. [프로젝트 기능 설명](#2)
3. [프로젝트 설치 및 실행 방법](#3)
4. [폴더 디렉토리](#4)
5. [기술 스택](#5)
6. [아쉬운 점 / 개선할 점](#6)

<br>

## 1. 배포 주소<a id="1"></a>

https://hj-mbti.netlify.app

<br>

## 2. 프로젝트 기능 설명 <a id="2"></a>

<hr />

#### 시작화면

![mbti-로그인](https://user-images.githubusercontent.com/76847993/136400291-44d2d296-7df1-4458-a7fb-b1065c8418dc.gif)

#### 문답 / 결과

![travel-문답결과!](https://user-images.githubusercontent.com/76847993/136499011-0ea04b9b-b4ee-4513-9737-7318c8e5e8ed.gif)

#### 문답을 아예 체크안하고 결과창 넘어갔을 때

![mbti-문답아예안하고결과](https://user-images.githubusercontent.com/76847993/136400084-7d8593f9-1cb2-4203-b8b2-bb6ce342c6a4.gif)

#### 문답을 체크하다 말고 결과창 넘어갔을 때

![mbti-문답다안하고결과](https://user-images.githubusercontent.com/76847993/136400112-6d4bf592-c9d4-49be-b2a6-55eb5d62e410.gif)

#### 반응형

##### 시작화면 반응형

![mbti-로그인반응형](https://user-images.githubusercontent.com/76847993/136400263-8fa4638d-efb9-47da-a19f-6079129d3d47.gif)

##### 문답 반응형

![mbti-문답반응형](https://user-images.githubusercontent.com/76847993/136400099-d7bc2341-4509-4a7e-be10-d3ead9ea6c62.gif)

##### 결과 반응형

![mbti-결과반응형](https://user-images.githubusercontent.com/76847993/136400306-1cac2318-1926-4515-b85d-60286f75dc70.gif)

<br>
<br>

## 3. 프로젝트 설치 및 실행 방법 <a id="3"></a>

```js
$ npm update
$ yarn install
$ yarn start
```

<br>

## 4. 폴더 디렉토리 <a id="4"></a>

```
📦public
 ┣ 📜heart.ico
 ┣ 📜index.html
 ┗ 📜_redirects
📦src
 ┣ 📂components
 ┃ ┣ 📂footer
 ┃ ┃ ┣ 📜footer.jsx
 ┃ ┃ ┗ 📜footer.module.css
 ┃ ┣ 📂header
 ┃ ┃ ┣ 📜header.jsx
 ┃ ┃ ┗ 📜header.module.css
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📜login.jsx
 ┃ ┃ ┗ 📜login.module.css
 ┃ ┣ 📂questions
 ┃ ┃ ┣ 📂progressBar
 ┃ ┃ ┃ ┣ 📜progressBar.jsx
 ┃ ┃ ┃ ┗ 📜progressBar.module.css
 ┃ ┃ ┣ 📂question
 ┃ ┃ ┃ ┣ 📜question.jsx
 ┃ ┃ ┃ ┗ 📜question.module.css
 ┃ ┃ ┣ 📜questions.jsx
 ┃ ┃ ┗ 📜questions.module.css
 ┃ ┗ 📂result
 ┃ ┃ ┣ 📜result.jsx
 ┃ ┃ ┗ 📜result.module.css
 ┣ 📂data
 ┃ ┗ 📜mbti.json
 ┣ 📜app.jsx
 ┣ 📜app.module.css
 ┣ 📜index.js
 ┣ 📜index.module.css
 ┗ 📜setupProxy.js
```

<br>

## 5. 기술 스택 <a id="5"></a>

#####언어<br/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=black">
<img src="https://img.shields.io/badge/postCss-DD3A0A?style=for-the-badge&logo=postCss&logoColor=black">

<br>

## 6. 아쉬운 점 / 개선할 점 <a id="6"></a>

<table class="table">
  <tr>
    <td class="title left">아쉬운 점</td>
    <td class="title right">개선할 점</td>
  </tr>
  <tr>
    <td>역할 분배를 페이지별로 했더니 특정 사람에게 너무 많은 역할이 주어졌습니다.</td>
    <td>기능별로 역할 분배를 해야겠다고 느꼈습니다.</td>
  </tr>
  <tr>
    <td>리덕스의 action이 너무 많아진 느낌입니다.</td>
    <td>중복되는 부분을 깔끔히 정리해야겠습니다.</td>
  </tr>
  <tr>
    <td>데이터를 정의할 때 어떤 type의 값을 넣을건지를 정확히 정하지 않아 나중에 수정할 일이 많았습니다.</td>
    <td>데이터 정의를 보다 정확하게 해야겠습니다.</td>
  </tr>
  <tr>
    <td>firebase와 redux상태간의 정확한 정리가 없어 헷갈리는 일이 많았습니다.	</td>
    <td>상태 정리를 명확하게 해야겠습니다.</td>
  </tr>
  <tr>
    <td>코드리뷰가 적극적으로 이루어지지 않았던 것 같습니다. 제가 짠 코드가 괜찮은 코드인지 아닌지를 판단하기 어려웠고, 팀원이 짠 코드를 제대로 파악하기 힘들었습니다.</td>
    <td>서로간의 코드를 적극적으로 검토하고 리뷰해야겠습니다.</td>
  </tr>
