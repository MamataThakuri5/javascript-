class gitHubUser{
  constructor(username){
    this.username=username;
    this.data=null;
  }
  async fetchData(){
    const response=await fetch(`https://api.github.com/users/${this.username}`);
    if(!response.ok){
      throw new Error("User not found");
    }
   this.data=await response.json();
   return this.data;
  }
}
 const searchInput=document.getElementById("searchInput");
 const searchBtn=document.getElementById("btn");
constresult=document.getElementById("result");

searchBtn.addEventListener("click",handleSearch);
 
async function handleSearch(){
  const username=searchInput.value.trim();
  if(!username){
    result.innerHTML=`<p class="error">Please enter a username</p>`;
    return;
  }
  result.innerHTML=`<p>Loading...</p>`;
  const user=new gitHubUser(username);
  try{
    const data=await user.fetchData();
    renderProfile(data);
  }catch(error){
    result.innerHTML=`<p class="error">${error.message}</p>`;
  }
}
function renderProfile(data){
  result.innerHTML=`
  <img src="${data.avatar_url}" alt="${data.login}" width="100" style="border-radius:50%;">
  <h2>${data.name || data.login}</h2>
  <p>${data.bio || ""}</p>
  <p><b>Followers:</b> ${data.followers} | <b>Following:</b> ${data.following}</p>
    <p><b>Public Repos:</b> ${data.public_repos}</p>
    <a href="${data.html_url}" target="_blank">View Profile</a>
  `;
  
}