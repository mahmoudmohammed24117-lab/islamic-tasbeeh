let btnincrease = document.querySelectorAll(".btn-two");
let btnone = document.querySelectorAll(".btn-one");
let btrreset=document.querySelectorAll(".btn-three");


// نستخدم forEach لأننا نتعامل مع قائمة أزرار (NodeList)
btnincrease.forEach((btn, index) => {
    btn.onclick = () => {
        // نأخذ القيمة من الزر المقابل (btnone) بنفس الترتيب (index)
        // علامة + قبل btnone[index].innerHTML تحول النص لرقم بدلاً من استخدام Number
        let valueofnew = +btnone[index].innerHTML + 1;
        
        // تحديث النص في الزر المقابل
        btnone[index].innerHTML = valueofnew;
    };
});
btrreset.forEach((btn,index)=>{
    btn.onclick=()=>{
        btnone[index].innerHTML=0;
    }
})
let btnIncrease = document.querySelectorAll(".btn-two");
let btnOne = document.querySelectorAll(".btn-one");
let allVideos = document.querySelectorAll(".my-video");

btnIncrease.forEach((btn, index) => {
    let video = allVideos[index];

    // 1. عند الضغط على الزر (تبديل الشكل والتشغيل)
    btn.onclick = () => {
        if (video.paused) {
            video.play();
            btn.innerHTML = "&#10074;&#10074;"; // رمز التوقف (Pause)
        } else {
            video.pause();
            btn.innerHTML = "&#9658;"; // رمز التشغيل (Play)
        }
    };

    // 2. زيادة العداد تلقائياً في كل مرة الفيديو "يعيد" نفسه
    // نستخدم حدث 'timeupdate' لمراقبة متى يصل الفيديو للنهاية ويعيد
    video.onplay = () => {
        // العداد يزيد 1 أول ما الفيديو يبدأ
        btnOne[index].innerHTML = +btnOne[index].innerHTML + 1;
    };

    // هذا الجزء لزيادة العداد تلقائياً مع كل "إعادة" (Loop)
    video.addEventListener('seeking', function() {
        if (video.currentTime === 0) {
             btnOne[index].innerHTML = +btnOne[index].innerHTML + 1;
        }
    });
});
btnOne.forEach((counterBtn) => {
    counterBtn.onclick = () => {
        // علامة + تحول النص لرقم وتزيد عليه 1
        counterBtn.innerHTML = +counterBtn.innerHTML + 1;
    };
});


btnIncrease.forEach((btn, index) => {
    let video = allVideos[index];

    btn.onclick = () => {
        // إذا كان الفيديو الذي ضغطت عليه سيعمل الآن
        if (video.paused) {
            
            // --- الجزء الجديد: إيقاف أي فيديو آخر يعمل حالياً ---
            allVideos.forEach((v, i) => {
                if (v !== video) { // لو مش هو ده الفيديو اللي ضغطت عليه
                    v.pause(); // وقفه
                    btnIncrease[i].innerHTML = "&#9658;"; // رجع شكل الزرار لمثلث
                }
            });
            // ----------------------------------------------

            video.play();
            btn.innerHTML = "&#10074;&#10074;"; // تحويل الزر لرمز التوقف
        } else {
            video.pause();
            btn.innerHTML = "&#9658;"; // رجوع الزر لرمز المثلث
        }
    };

    // زيادة العداد عند بدء التشغيل
    video.onplay = () => {
        btnOne[index].innerHTML = +btnOne[index].innerHTML + 1;
    };
});

// كود زيادة العداد عند الضغط على btn-one (لوحده)
btnOne.forEach((counterBtn) => {
    counterBtn.onclick = () => {
        counterBtn.innerHTML = +counterBtn.innerHTML + 1;
    };
});