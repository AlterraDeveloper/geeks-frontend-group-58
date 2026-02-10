const originalArray = [45, 14, 7, 56, 85, 21, 23, 8];

const originalContainer = document.querySelector("#original");
const resultContainer = document.getElementById("result");

renderArray(originalContainer, originalArray);

// for (let i = 0; i < originalArray.length; i++) {
//     const div = document.createElement('div'); // <div></div>
//     div.classList.add('color-box'); // <div class="color-box"></div>
//     div.innerText = originalArray[i];
//     originalContainer.append(div);
// }

// for of
// for (let item of originalArray) {
//   const div = document.createElement("div"); // <div></div>
//   div.classList.add("color-box"); // <div class="color-box"></div>
//   div.innerText = item;
//   originalContainer.append(div);
// }

// callback func - функции обратного вызова

// for each

// originalArray.forEach(function (x) {
//   const div = document.createElement("div"); // <div></div>
//   div.classList.add("color-box"); // <div class="color-box"></div>
//   div.innerText = x;
//   originalContainer.append(div);
// });

// originalArray.forEach(function (x) {
//   // const div = "<div class=\"color-box\">" + x + "</div>";
//   // template string
//   const div = `<div class="color-box">${x}</div>`;
//   let html = originalContainer.innerHTML;
//   html += div;
//   originalContainer.innerHTML = html;
// });

// function test(){
//     console.log("WWWWghhjhkjhk");
// }

// test();

// document.body.onclick = test;

function renderArray(container, array) {
  container.innerHTML = "";
  array.forEach(function (x) {
    const div = `<div class="color-box">${x}</div>`;
    let html = container.innerHTML;
    html += div;
    container.innerHTML = html;
  });
}


function mapExample(){

    const x10array = originalArray.map(function(item){
        return item * 10;
    });
    renderArray(resultContainer, x10array);

}

function filterExample(){
    const filtered = originalArray.filter(function(item){
        return item < 50;
    });
    renderArray(resultContainer, filtered);
}

function reduceExample(){
    // [45, 14, 7, 56, 85, 21, 23, 8];
    const max = originalArray.reduce(function(max, item){
        return item > max ? item : max;
    });
    const min = originalArray.reduce(function(min, item){
        return item < min ? item : min;
    });
    const sum = originalArray.reduce(function(sum, item){
        return sum + item;
    });
    renderArray(resultContainer, [max, min, sum]);

}
