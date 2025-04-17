document.addEventListener("DOMContentLoaded",function(){
    const searchButton =document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer= document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    // const mediumProgressCircle =document.querySelector(". medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer= document.querySelector(".stats-cards");
  


    function validateUsername(username){
       
        if(username.trim()===""){
            alert("User name should not be empty");
            return false;
        }
        const regex=/^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching=regex.test(username);
        if(!isMatching){
            alert("Invalid username");
        }
        return isMatching;

    }


    async function fetchUserDetails(username) {
       
  try{
    searchButton.textContent="Searching...";
    searchButton.disabled=true;

 //  const response await fetch(url);
    const proxyUrl=`https://cors-anywhere.herokuapp.com/`;
    const targetUrl = 'https://leetcode.com/graphql/';
    // concatinated url:...
    const myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");

    const graphql = JSON.stringify({

     query: "\n query userSessionProgress($username: String!) {\n allQuestions Count {\n difficulty\n count\n \n matchedUser (username: $username) {\n {\n \n count\n difficulty\n totalSubmissionNum {\n submissions\n submitStats {\n count\n }\n acSubmissionNum submissions\n difficulty\n }\n}\n}\n}\n",variables: { "username": `${username} `}})

     const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
        redirect: "follow"

    };

    const response= await fetch (proxyUrl+targetUrl, requestOptions);

    if(!response.ok) { 
        throw new Error("Unable to fetch the User details");
        
    }
    const parseData=await responce.json();
    console.log("Login Data: ",parseData);
    displayUserData(parseData);
  }

  catch(error){
    statsContainer.innerHTML="<p>No data Found</p>"
  }

  finally{
    searchButton.textContent="Search";
    searchButton.disabled=false;
  }
  }

  function updateProgress(solve,total,label,circle){
    const prograssDegree=(solved/total)*100;
    circle.style.setProperty("--progress-degree",`${progressDegree}%`);
    label.textContent=`${solved}/${total}`;
  }

  function displayUserData(parseData){
    const totalQues=parseData.data.allQuestionCount[0].count;
    const totalEasyQues=parseData.data.allQuestionCount[1].count;
    const totalMediumQues=parseData.data.allQuestionCount[2].count;
    const totalHardQues=parseData.data.allQuestionCount[3].count;

    const solveTotalQues=parseData.data.matcheUser.submitStats.acSubmissionNum[0].count;
    const solveTotalEasyQues=parseData.data.matcheUser.submitStats.acSubmissionNum[1].count;
    const solveTotalMediumQues=parseData.data.matcheUser.submitStats.acSubmissionNum[2].count;
    const solveTotalHardQues=parseData.data.matcheUser.submitStats.acSubmissionNum[3].count;
  }

searchButton.addEventListener('click',function(){
    const username=usernameInput.value;
    console.log("loggin username:",username);
    if(validateUsername(username)){
        fetchUserDetails(username); 
    }
})


})