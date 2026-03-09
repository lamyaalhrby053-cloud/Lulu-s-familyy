function checkCode() {
    const input = document.getElementById("user-code").value.trim();
    const messageEl = document.getElementById("message");

    // الرموز لكل شخص
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

    // البحث عن الشخص حسب الرمز
    let person = null;
    for (let name in codes) {
        if (codes[name] === input) {
            person = name;
            break;
        }
    }

    if (person) {
        messageEl.textContent = `مرحبًا ${person}!`;
        messageEl.style.color = "#ff69b4";

        // إخفاء صفحة الترحيب وعرض الصفحة الرئيسية
        document.getElementById("welcome-page").style.display = "none";
        document.getElementById("main-page").style.display = "block";

        // اختيار اسم المستلم عشوائي (غير نفسه)
        const familyMembers = Object.keys(codes);
        const giverName = person;
        let receiverName;
        do {
            receiverName = familyMembers[Math.floor(Math.random() * familyMembers.length)];
        } while (receiverName === giverName);

        document.getElementById("giver-name").textContent = giverName;
        document.getElementById("receiver-name").textContent = `يهدى لـ ${receiverName}`;

        // اقتراحات الهدايا
        const giftSuggestions = ["كتاب", "شوكولاتة", "زهرة", "عطر", "أكسسوار"];
        const giftListEl = document.getElementById("gift-list");
        giftListEl.innerHTML = "";
        giftSuggestions.forEach(gift => {
            const li = document.createElement("li");
            li.textContent = gift;
            giftListEl.appendChild(li);
        });

        // مؤقت العيد
        document.getElementById("days-left").textContent = "10 أيام";

    } else {
        messageEl.textContent = "الرمز غير صحيح، حاول مرة أخرى.";
        messageEl.style.color = "red";
    }
}
