// document.addEventListener("DOMContentLoaded", function () {
const kgsInput = document.querySelector("#kgs-input");

const currenciesContainer = document.querySelector(".currencies");

const currenciesBlocks = currenciesContainer.querySelectorAll(".block");
// const usdBlock = currenciesBlocks[0];
// const euroBlock = currenciesBlocks[1];
// const yanBlock = currenciesBlocks[2];

const [usdBlock, euroBlock, yanBlock] = [...currenciesBlocks];

kgsInput.addEventListener("input", function () {
  const value = Number(kgsInput.value);


  if (!value) {
    // currenciesContainer.style.display = "none";
    currenciesContainer.classList.remove("visible");
  } else {
    // currenciesContainer.style.display = "flex";
    currenciesContainer.classList.add("visible");
  }

  let usdValue = usdBlock.querySelector("span");
  usdValue.textContent = (value / 87).toFixed(2);

  const euroValue = euroBlock.children[1];
  euroValue.innerText = roundX(value / 103, 2);

  //   let yanValue = yanBlock.querySelector('span');
  //   yanValue.textContent = (value / 12).toFixed(2);
  const yanValue = yanBlock.children[1];
  yanValue.innerText = roundX(value / 12, 2);
});

function roundX(value, x) {
  // 15.457856 -> 1545.7856 -> 1546 -> 15.46
  let tmp = value * 10 ** x;
  tmp = Math.round(tmp);
  tmp /= 10 ** x;
  return tmp;
}

// });
