const contactForm = document.getElementById("contactForm");
       function openContact() {
           if (navigator.userAgent.match(/Android/i)) {
         window.location.href = "tel:+[+966 359 0185]";
           } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
     window.location.href = "telprompt:+[+966533590185]";
           } else {
               //  يمكنك  عرض  رسالة  ل  ال  مستخدم  ل  نسخ  الرقم  إلى  الحافظة  
           }
       }
       
contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // تحقق من صحة البيانات
    if (name === "" || email === "" || message === "") {
        alert("يرجى ملء جميع الحقول");
        return;
        
    }

    // ارسال البيانات  إلى الخادم (DB)
    // ...
    // هنا  تُستخدم  تقنية AJAX  أو  فئات  JavaScript  للإرسال

    alert("تم إرسال رسالتك بنجاح");
    contactForm.reset(); // إعادة تعيين  الاستمارة
});