
const getData = () => {
    axios.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products').then( response =>{
        console.log(response);

        res = response;

        keyz = Object.keys(response.data[0])

    })
    .then((data) => {
        for(let i = 0; i < res.data.length;i++){
            var tbody = document.getElementById("tbody");
            var tr = document.createElement("tr");

            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var td5 = document.createElement("td");
            var td6 = document.createElement("td");


            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);

            tbody.appendChild(tr);
            td1.textContent = res.data[i].id;
            td2.textContent = res.data[i].medicineName;
            td3.textContent = res.data[i].medicineBrand;
            td4.textContent = res.data[i].expiryDate;
            td5.textContent = res.data[i].unitPrice;
            td6.textContent = res.data[i].stock;

        
        }
    })

}

getData();

const expired = document.getElementById("exp");
const lowStock = document.getElementById("lowS");

let today = new Date();



let count = 100;
expired.addEventListener("click", function () {
  if (!expired.checked) {
    let tBody = document.querySelector("tbody");
    let tr = tBody.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        let tdVal = td.textContent;
        let date = tdVal.split("-");
        if (date[2] < "2021") {
          tr[i].style.display = "none";
          count--;
        }
      }
    }
    countTracker.textContent = "Count:" + count;
  }
  if (expired.checked) {
    let tBody = document.querySelector("tbody");
    let tr = tBody.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        let tdVal = td.textContent;
        let date = tdVal.split("-");
        if (date[2] < "2021") {
          tr[i].style.display = "";
          count++;
        }
      }
    }
    countTracker.textContent = "Count:" + count;
  }
});

lowStock.addEventListener("click", function () {
  if (!lowStock.checked) {
    let tBody = document.querySelector("tbody");
    let tr = tBody.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[5];
      if (td) {
        let tdVal = Number(td.textContent);

        if (tdVal < 100) {
          tr[i].style.display = "none";
          count--;
        }
      }
    }
    countTracker.textContent = "Count:" + count;
  }
  if (lowStock.checked) {
    let tBody = document.querySelector("tbody");
    let tr = tBody.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[5];
      if (td) {
        let tdVal = Number(td.textContent);
        if (tdVal < 100) {
          tr[i].style.display = "";

          count++;
        }
      }
    }
    countTracker.textContent = "Count:" + count;
  }
});

logout.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.replace("../login.html");
});
