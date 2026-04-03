const data = [
{
    title: "أذكار الصباح",
    content: "سبحان الله وبحمده 100 مرة"
},
{
    title: "أذكار المساء",
    content: "أعوذ بكلمات الله التامات من شر ما خلق"
    
},
{
    title: "أذكار بعد الصلاة",
    content: "سبحان الله 33، الحمد لله 33، الله أكبر 34"
},
{
    title: "أذكار دخول المسجد",
    content: "اللهم افتح لي أبواب رحمتك"
},
{
    title: "أذكار الهم والحزن",
    content: "اللهم إني أعوذ بك من الهم والحزن"
},
{
    title: "أذكار التوبة",
    content: "أستغفر الله العظيم وأتوب إليه"
},
{
    title: "أذكار قبل النوم",
    content: "باسمك اللهم أموت وأحيا"
}
];

const container = document.getElementById("zekr-container");

data.forEach(item => {
    const box = document.createElement("div");
    box.classList.add("box");

    box.innerHTML = `
        <div class="name">${item.title}</div>
        <p class="desc">${item.content}</p>
    `;

    const name = box.querySelector(".name");

    name.onclick = () => {
        box.classList.toggle("active");
    };

    container.appendChild(box);
});

    box.onclick = () => {
        box.classList.toggle("active");
    }