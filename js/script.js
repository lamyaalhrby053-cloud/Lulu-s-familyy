// قائمة الأسماء
const familyMembers = [
  "لولو", "شهد", "علياء", "راكان", "فارس",
  "رايد", "محمد", "فيصل", "احمد", "عبدالرحمن",
  "غاده", "نجد", "ساره"
];

// دالة لتوليد هدايا بشكل عشوائي
const giftSuggestions = ["كتاب", "شوكولاتة", "زهرة", "عطر", "أكسسوار"];

// اختيار اسمين عشوائيين (المعطي والمستلم)
function getRandomPair(names) {
    const giverIndex = Math.floor(Math.random() * names.length);
    let receiverIndex;
    do {
        receiverIndex = Math.floor(Math.random() * names.length);
    } while (receiverIndex === giverIndex); // المستلم لا يكون نفسه
    return [names[giverIndex], names[receiverIndex]];
}

const [giverName, receiverName] = getRandomPair(familyMembers);

// وضع الأسماء في المربع
document.getElementById("giver-name").textContent = giverName;
document.getElementById("receiver-name").textContent = `يهدى لـ ${receiverName}`;

// وضع اقتراحات الهدايا
const giftListEl = document.getElementById("gift-list");
giftSuggestions.forEach(gift => {
    const li = document.createElement("li");
    li.textContent = gift;
    giftListEl.appendChild(li);
});

// مؤقت العيد (عدد الأيام المتبقية)
const daysLeft = 10; // تقريبًا باقي 10 أيام
document.getElementById("days-left").textContent = `${daysLeft} أيام`;
