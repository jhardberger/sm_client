console.log(process.env);

let apiUrl; 

if(Object.keys(process.env).findIndex((key)=>key=='REACT_APP_LOCAL_VERSION') === -1){
	apiUrl = 'https://beatgrinder-api.herokuapp.com/'
}else{
	apiUrl = 'http://localhost:9000'
}

export default apiUrl;