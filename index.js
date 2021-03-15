
const getData = () => {
    axios.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders').then( response =>{
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

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

            tbody.appendChild(tr);
            td1.textContent = res.data[i].id;
            td2.textContent = res.data[i].customerName;
            td3.textContent = res.data[i].orderDate + res.data[i].orderTime;
            td4.textContent = res.data[i].amount
            td5.textContent = res.data[i].orderStatus;

        
        }
    })

}

getData();

const newCheckbox = document.getElementById("new");
const orderPack = document.getElementById("packed");
const transit = document.getElementById("inTran");
const delivered = document.getElementById("del");

let count = 100;
const counter = document.getElementById("count");

newCheckbox.addEventListener("click", function () {
    if (!newCheckbox.checked) {
      let tBody = document.querySelector("tbody");
      let tr = tBody.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          let textContent = td.textContent;
          if (textContent === "New") {
            tr[i].style.display = "none";
            count--;
          }
        }
      }
      counter.textContent = "Count:" + count;
    }
    if (newCheckbox.checked) {
      let tBody = document.querySelector("tbody");
      let tr = tBody.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          let textContent = td.textContent;
          if (textContent === "New") {
            tr[i].style.display = "";
            count++;
          }
        }
      }
      counter.textContent = "Count:" + count;
    }
  });

orderPack.addEventListener("click", function () {
    if (!orderPack.checked) {
      let tBody = document.querySelector("tbody");
      let tr = tBody.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          let textContent = td.textContent;
          if (textContent === "Packed") {
            tr[i].style.display = "none";
            count--;
          }
        }
      }
      counter.textContent = "Count:" + count;
    }
    if (orderPack.checked) {
      let tBody = document.querySelector("tbody");
      let tr = tBody.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          let textContent = td.textContent;
          if (textContent === "Packed") {
            tr[i].style.display = "";
            count++;
          }
        }
      }
      counter.textContent = "Count:" + count;
    }
  });

  transit.addEventListener("click", function () {
    if (!transit.checked) {
      let tBody = document.querySelector("tbody");
      let tr = tBody.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          let textContent = td.textContent;
          if (textContent === "InTransit") {
            tr[i].style.display = "none";
            count--;
          }
        }
      }
      counter.textContent = "Count:" + count;
    }
    if (transit.checked) {
      let tBody = document.querySelector("tbody");
      let tr = tBody.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          let textContent = td.textContent;
          if (textContent === "InTransit") {
            tr[i].style.display = "";
            count++;
          }
        }
      }
      counter.textContent = "Count:" + count;
    }
  });
  
  delivered.addEventListener("click", function () {
    if (!delivered.checked) {
      let tBody = document.querySelector("tbody");
      let tr = tBody.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          let textContent = td.textContent;
          if (textContent === "Delivered") {
            tr[i].style.display = "none";
            count--;
          }
        }
      }
      counter.textContent = "Count:" + count;
    }
    if (delivered.checked) {
      let tBody = document.querySelector("tbody");
      let tr = tBody.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          let textContent = td.textContent;
          if (textContent === "Delivered") {
            tr[i].style.display = "";
            count++;
          }
        }
      }
      counter.textContent = "Count:" + count;
    }
  });
