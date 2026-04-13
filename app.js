(function () {
  let prev = 0;
  let curr = 1;

  const elPrev = document.getElementById("prev");
  const elCurr = document.getElementById("curr");
  const btnNext = document.getElementById("btn-next");
  const btnReset = document.getElementById("btn-reset");

  function render() {
    elPrev.textContent = String(prev);
    elCurr.textContent = String(curr);
  }

  btnNext.addEventListener("click", function () {
    const next = prev + curr;
    prev = curr;
    curr = next;
    render();
  });

  btnReset.addEventListener("click", function () {
    prev = 0;
    curr = 1;
    render();
  });

  render();
})();
