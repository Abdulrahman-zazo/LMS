const PrivacyComponent = () => {
  return (
    <div className="w-5/6 m-auto my-10  text-right " dir="rtl">
      <h1 className="mb-6 text-center text-xl font-bold md:text-2xl">
        سياسة الخصوصية
      </h1>

      <div className="border [border-image:linear-gradient(to_right,transparent,theme(colors.gray.200/.8),transparent)1] mt-6"></div>
      <p className="font-semibold mt-12">مقدمة:</p>
      <span className="text-sm text-paragraph   py-4 block leading-8">
        نحن ملتزمون بحماية خصوصيتك وضمان أمان معلوماتك الشخصية. توضح هذه السياسة
        كيف نقوم بجمع واستخدام ومشاركة المعلومات عند استخدامك لمنصتنا التعليمية.
      </span>

      <ol className="m-4 list-decimal">
        <li>
          <p className="font-semibold my-4">المعلومات التي نقوم بجمعها:</p>
          <ol className="list-disc m-4 text-sm text-paragraph leading-8">
            <li>
              المعلومات الشخصية: عند التسجيل، قد نطلب منك تقديم معلومات شخصية
              مثل الاسم، البريد الإلكتروني، وكلمة المرور.
            </li>
            <li>
              بيانات الاستخدام: نقوم بجمع معلومات حول طريقة استخدامك للمنصة مثل
              الدورات التي التحقت بها، التقدّم الذي أحرزته، والأنشطة التعليمية
              التي قمت بها.
            </li>
            <li>
              بيانات الجهاز: قد نقوم بجمع معلومات عن الجهاز الذي تستخدمه للدخول
              إلى المنصة، مثل نوع الجهاز ونظام التشغيل.
            </li>
          </ol>
        </li>

        <li>
          <p className="font-semibold my-4">كيفية استخدام المعلومات:</p>
          <ol className="list-disc m-4 text-sm text-paragraph leading-8">
            <li>
              تقديم الخدمات: نستخدم بياناتك لإنشاء حسابك، تتبع تقدمك التعليمي،
              وتقديم الدعم الفني.
            </li>
            <li>
              تحسين المنصة: نحلل بيانات الاستخدام لتحسين تجربتك وتطوير خدماتنا.
            </li>
            <li>
              التواصل معك: قد نتواصل معك بشأن تحديثات المنصة أو للرد على
              استفساراتك.
            </li>
          </ol>
        </li>

        <li>
          <p className="font-semibold my-4">مشاركة المعلومات:</p>
          <ol className="list-disc m-4 text-sm text-paragraph leading-8">
            <li>
              مزودو الخدمة: قد نشارك بياناتك مع مزودين موثوقين يساعدوننا في
              تشغيل المنصة، مثل خدمات الاستضافة السحابية.
            </li>
            <li>
              الامتثال للقوانين: قد نُفصح عن بياناتك إذا طُلب منا قانونيًا أو
              استجابةً لأوامر قضائية.
            </li>
          </ol>
        </li>

        <li>
          <p className="font-semibold my-4">أمان البيانات:</p>
          <ol className="list-disc m-4 text-sm text-paragraph leading-8">
            <li>
              نتخذ تدابير مناسبة لحماية بياناتك الشخصية من الوصول غير المصرح به
              أو الكشف أو التعديل أو الحذف.
            </li>
          </ol>
        </li>

        <li>
          <p className="font-semibold my-4">حقوقك:</p>
          <ol className="list-disc m-4 text-sm text-paragraph leading-8">
            <li>طلب الاطلاع على بياناتك الشخصية.</li>
            <li>طلب تصحيح أي معلومات غير دقيقة.</li>
            <li>طلب حذف بياناتك من نظامنا.</li>
            <li>الاعتراض على أي قرارات مؤتمتة تُتخذ استنادًا إلى بياناتك.</li>
          </ol>
        </li>

        <li>
          <p className="font-semibold my-4">تعديلات على سياسة الخصوصية:</p>
          <ol className="list-disc m-4 text-sm text-paragraph leading-8">
            <li>
              نحتفظ بحق تعديل هذه السياسة من وقت لآخر. سيتم نشر أي تغييرات على
              هذه الصفحة.
            </li>
          </ol>
        </li>

        <li>
          <p className="font-semibold my-4">التواصل معنا:</p>
          <ol className="list-disc m-4 text-sm text-paragraph">
            <li>
              إذا كان لديك أي استفسارات بخصوص سياسة الخصوصية، يمكنك التواصل معنا
              <a
                className="text-primary mx-2"
                href="https://wa.me/+963958263253?text=مرحباً، لدي استفسار بخصوص سياسة الخصوصية"
              >
                عبر الواتساب
              </a>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
};

export default PrivacyComponent;
