let count = 0;

const circle = document.getElementById("circle");
const counter = document.getElementById("count");
const zekr = document.getElementById("zekr");
const select = document.getElementById("zekrSelect");
const reset = document.getElementById("reset");

// لما تختار ذكر
select.onchange = () => {
    zekr.innerText = select.value;
    count = 0;
    counter.innerText = 0;
};

// الضغط على الدائرة
circle.onclick = () => {
    count++;
    counter.innerText = count;
};

// زرار إعادة
reset.onclick = () => {
    count = 0;
    counter.innerText = 0;
};