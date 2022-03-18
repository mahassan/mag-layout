let appContainer = document.querySelector(".container");
let colourDiv = document.querySelector(".colour");
let btn = document.querySelector(".btn")

function toggle(){
    btn.addEventListener("click", function(){
        colourDiv.style.backgroundColor = "#gfgfgf"
    })
}

const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      setTimeout(() => {
        init(mutation);
      }, 2000);
    });
  });

  const config = {
    childList: true,
    subtree: true,
  };

  observer.observe(appContainer, config);

  const init = (mutation) => {
    const { addedNodes } = mutation;
    addedNodes.length <= 1 && addedNodes.forEach((node) => {
          console.log(node);
      })
  }