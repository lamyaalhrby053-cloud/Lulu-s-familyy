// الرموز الخاصة بكل شخص
const codes = {
    "شهد": "2004",
    "علياء": "2008",
    "راكان": "2007",
    "فارس": "2011",
    "احمد": "1989",
    "محمد": "1995",
    "فيصل": "1991",
    "رايد": "1993",
    "نجد": "1997",
    "غاده": "2001",
    "ساره": "1999",
    "لولو": "2004"
};

// أسماء الأشخاص
const familyMembers = Object.keys(codes);

// هدايا مقترحة
const giftSuggestions = ["👨🏻‍⚕️تضليل😉", "شحن روبلوكس👶🏻", "ميكب🎀","بسطار👨🏻‍✈️", "عطر❤️‍🔥", "سماعه طبيه"];

// مؤقت العيد
const daysLeft = 10;

// التحقق من الرمز وإظهار الصفحة الرئيسية
function checkCode() {
    const input = document.getElementById("user-code").value.trim();
    const messageEl = document.getElementById("message");
    
    const person = Object.keys(codes).find(name => codes[name] === input);

    if(person) {
        messageEl.textContent = `مرحبًا ${person}!`;
        messageEl.style.color = "#ff69b4";

        // إخفاء صفحة الترحيب وعرض الصفحة الرئيسية
        document.getElementById("welcome-page").style.display = "none";
        document.getElementById("main-page").style.display = "block";

        // اختيار اسمين عشوائيين للهدية
        let giverIndex = familyMembers.indexOf(person);
        let receiverIndex;
        do {
            receiverIndex = Math.floor(Math.random() * familyMembers.length);
        } while(receiverIndex === giverIndex);

        const giverName = familyMembers[giverIndex];
        const receiverName = familyMembers[receiverIndex];

        document.getElementById("giver-name").textContent = giverName;
        document.getElementById("receiver-name").textContent = `يهدى لـ ${receiverName}`;

        // عرض اقتراحات الهدايا
        const giftListEl = document.getElementById("gift-list");
        giftListEl.innerHTML = "";
        giftSuggestions.forEach(gift => {
            const li = document.createElement("li");
            li.textContent = gift;
            giftListEl.appendChild(li);
        });

        // مؤقت العيد
        document.getElementById("days-left").textContent = `${daysLeft} أيام`;

    } else {
        messageEl.textContent = "الرمز غير صحيح، حاول مرة أخرى.";
        messageEl.style.color = "red";
    }
}
