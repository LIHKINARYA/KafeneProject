
const body = document.getElementsByTagName("body");



const url = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users";
const getData = (e) => {
    axios.get(e).then( response =>{
        res = response;
        console.log(res);
        for(let i = 0; i < res.data.length;i++){
            var tbody = document.getElementById("tbody");
            var tr = document.createElement("tr");

            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var td5 = document.createElement("td");
            var td6 = document.createElement("td");
            var img1 = document.createElement("IMG");

            tr.appendChild(td1);
            tr.appendChild(td2);
            td2.appendChild(img1);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);

            tbody.appendChild(tr);
            td1.textContent = res.data[i].id;
            img1.src = res.data[i].profilePic;
            td3.textContent = res.data[i].fullName;
            td4.textContent = res.data[i].dob;
            td5.textContent = res.data[i].gender;
            td6.textContent = res.data[i].currentCity + ', '+res.data[i].currentCountry;

        }
    })

}




const sear = document.getElementById("search");
const tabCont = document.getElementById("tabCont");
const sUrl = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=";
const tr1 = document.getElementsByTagName("tr");


const sch =  function () {
        var value = this.value.toLowerCase();
        console.log(tr1);
            for(i=0;i<101;i++){
                tr1[i].style.display = "none";
            }
        
        
        getData(sUrl + value);
};

sear.addEventListener("keyup", function(event) {
    event.preventDefault();

    if (event.key === 'Enter'){
        sch();
       

    }
});

const but = document.getElementById("button1")

but.addEventListener("click", getData(url));
window.onload = function () { getData(url)};