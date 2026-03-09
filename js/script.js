// الصفحة الأولى: حركة المربع
const btn = document.getElementById("move-btn");
const box = document.getElementById("welcome-box");

let clicks = 0;
const positions = [
    {top:'10%', left:'50%', transform:'translateX(-50%)'},
    {top:'50%', left:'80%', transform:'translate(-50%,-50%)'},
    {top:'80%', left:'50%', transform:'translateX(-50%)'},
    {top:'50%', left:'20%', transform:'translate(-50%,-50%)'},
    {top:'50%', left:'50%', transform:'translate(-50%,-50%)'}
];

btn.addEventListener('click',()=>{
    if(clicks<positions.length-1){
        const pos = positions[clicks];
        box.style.top=pos.top;
        box.style.left=pos.left;
        box.style.transform=pos.transform;
        clicks++;
    } else {
        // الانتقال للصفحة الثانية
        document.getElementById("page1").style.display="none";
        document.getElementById("page2").style.display="flex";
    }
});

// الرموز لكل شخص
const codes = {
    "شهد":"2004",
    "علياء":"2008",
    "راكان":"2007",
    "فارس":"2011",
    "احمد":"1989",
    "محمد":"1995",
    "فيصل":"1991",
    "رايد":"1993",
    "نجد":"1997",
    "غاده":"2001",
    "ساره":"1999",
    "لولو":"1425"
};

const familyMembers = Object.keys(codes);

// التحقق من الرمز وانتقال للصفحة الثالثة
function checkCode(){
    const input = document.getElementById("user-code").value.trim();
    const messageEl = document.getElementById("message");

    let person = null;
    for(let name in codes){
        if(codes[name]===input){
            person=name;
            break;
        }
    }

    if(person){
        messageEl.textContent=`مرحبًا ${person}!`;
        messageEl.style.color="#ff69b4";

        document.getElementById("page2").style.display="none";
        document.getElementById("page3").style.display="flex";

        // اختيار مستلم عشوائي
        let receiver;
        do {
            receiver = familyMembers[Math.floor(Math.random()*familyMembers.length)];
        } while(receiver===person);

        document.getElementById("giver-name").textContent=`${person} انت ستهدي`;
        document.getElementById("receiver-name").textContent=receiver;

    } else {
        messageEl.textContent="الرمز غير صحيح، حاول مرة أخرى.";
        messageEl.style.color="red";
    }
}
