// حركة المربع في الصفحة الأولى
const btn = document.getElementById("move-btn");
const box = document.getElementById("welcome-box");

let clicks = 0;

btn.addEventListener("click", () => {

    clicks++;

    // بعد 4 ضغطات ينتقل للصفحة الثانية
    if (clicks >= 5) {
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "flex";
        return;
    }

    // توليد مكان عشوائي داخل الشاشة
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 200);

    box.style.position = "absolute";
    box.style.left = x + "px";
    box.style.top = y + "px";
});
