// =======================
// ترحيب أول مرة
// =======================
// لما الصفحة تخلص تحميل
window.addEventListener("load", () => {
  // لو المستخدم لسه ما زارش الموقع خلال الجلسة الحالية
  if (!sessionStorage.getItem("visited")) {
    // نعرض له تنبيه ترحيبي
    alert("خش برجلك اليمن 🌍✨");
    // نخزن إنه زار الموقع علشان ما يتكرر التنبيه
    sessionStorage.setItem("visited", "true");
  }
});

    function goTop() {
    window.scrollTo(0, 0); // يخليك ترجع أول الصفحة بسرعة
  }
  
  
  

  