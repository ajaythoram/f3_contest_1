const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  try {
    await PromiseAPI1();
    await PromiseAPI2();
    await PromiseAPI3();
  } catch (error) {
    console.error(error);
  }
});

function PromiseAPI1() {
  return new Promise(resolve => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      const resultDiv = document.createElement("div");
      resultDiv.textContent = `PromiseAPI1 returned data: ${JSON.stringify(data)}`;
      document.body.appendChild(resultDiv);
      resolve(true);
    }, 1000);
  });
}

function PromiseAPI2() {
  return new Promise(resolve => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      const resultDiv = document.createElement("div");
      resultDiv.textContent = `PromiseAPI2 returned data: ${JSON.stringify(data)}`;
      document.body.appendChild(resultDiv);
      resolve(true);
    }, 2000);
  });
}

function PromiseAPI3() {
  return new Promise(resolve => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
      const resultDiv = document.createElement("div");
      resultDiv.textContent = `PromiseAPI3 returned data: ${JSON.stringify(data)}`;
      document.body.appendChild(resultDiv);
      resolve(true);
    }, 3000);
  });
}
