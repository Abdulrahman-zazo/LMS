function Terms() {
  return (
    <div className="w-5/6 m-auto my-10  text-right" dir="rtl">
      <h1 className="sm:mb-6 text-center text-xl font-bold md:text-2xl ">
        شروط الاستخدام
      </h1>

      <div className="border [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] mt-6" />

      <p className="font-semibold mt-6 sm:mt-12">مقدمة:</p>
      <span className=" text-xs sm:text-sm text-neutral-600 py-4 block leading-5 sm:leading-6">
        نرحب بك في منصتنا التعليمية. تحدد هذه الشروط القواعد والأحكام التي تنظّم
        استخدام المنصة وخدماتها التعليمية. يرجى قراءة هذه الشروط بعناية قبل
        استخدام المنصة. باستخدامك لها، فإنك توافق على الالتزام بهذه الشروط.
      </span>

      <ol className="sm:m-4 list-decimal">
        <li>
          <p className="font-semibold my-4">التعاريف:</p>
          <ol className="list-disc sm:m-4  text-xs sm:text-sm text-neutral-600 leading-5 sm:leading-6">
            <li>
              المنصة: تشير إلى الموقع أو التطبيق التعليمي الذي نقدّمه والذي يتيح
              الوصول إلى الدورات والمحتوى التعليمي.
            </li>
            <li>
              المستخدم: أي شخص يقوم بالتسجيل أو يستخدم خدمات المنصة سواء كان
              متعلماً أو معلّماً.
            </li>
            <li>
              الخدمات: تشمل جميع الميزات التعليمية والتفاعلية التي توفّرها
              المنصة.
            </li>
            <li>
              المحتوى: يشمل جميع المواد والمعلومات التي يتم إنشاؤها أو تحميلها
              أو مشاركتها عبر المنصة، سواء من قبل المستخدم أو المنصة نفسها.
            </li>
          </ol>
        </li>

        <li>
          <p className="font-semibold my-4">استخدام المنصة:</p>
          <ol className="list-disc  sm:m-4   text-xs sm:text-sm text-neutral-600 leading-5 sm:leading-6">
            <li>
              التسجيل: يجب على المستخدم تقديم معلومات صحيحة ودقيقة عند إنشاء
              حسابه.
            </li>
            <li>
              المسؤولية: المستخدم مسؤول عن الحفاظ على سرية بيانات حسابه وعدم
              مشاركتها مع الآخرين.
            </li>
            <li>
              الاستخدام القانوني: يُحظر استخدام المنصة في أي نشاط غير قانوني أو
              ضار.
            </li>
            <li>
              المحتوى: يتحمّل المستخدم كامل المسؤولية عن المحتوى الذي ينشره،
              ويجب ألا ينتهك حقوق الملكية الفكرية أو الخصوصية لأي طرف ثالث.
            </li>
          </ol>
        </li>

        <li>
          <p className="font-semibold my-4">حقوق الملكية الفكرية:</p>
          <ol className="list-disc sm:m-4   text-xs sm:text-sm text-neutral-600 leading-5 sm:leading-6">
            <li>
              الملكية: جميع الحقوق المتعلقة بالمنصة ومحتواها وخدماتها مملوكة لنا
              أو للجهات المرخّصة لنا.
            </li>
            <li>
              الاستخدام الشخصي: يُسمح باستخدام المنصة لأغراض تعليمية شخصية فقط،
              ولا يجوز إعادة توزيع المحتوى لأغراض تجارية.
            </li>
          </ol>
        </li>

        <li>
          <p className="font-semibold my-4">المسؤولية:</p>
          <ol className="list-disc sm:m-4   text-xs sm:text-sm text-neutral-600 leading-5 sm:leading-6">
            <li>
              إخلاء المسؤولية: لا نتحمّل أي مسؤولية عن أي ضرر مباشر أو غير مباشر
              ناتج عن استخدام المنصة.
            </li>
            <li>
              القوة القاهرة: لسنا مسؤولين عن أي انقطاع أو تأخير في تقديم الخدمات
              بسبب ظروف خارجة عن إرادتنا.
            </li>
          </ol>
        </li>

        <li>
          <p className="font-semibold my-4">التعديلات:</p>
          <ol className="list-disc  sm:m-4   text-xs sm:text-sm text-neutral-600 leading-5 sm:leading-6">
            <li>
              نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر التعديلات هنا،
              ويُعد استمرارك في استخدام المنصة بعد التعديلات موافقة ضمنية عليها.
            </li>
          </ol>
        </li>

        <li>
          <p className="font-semibold my-4">التواصل معنا:</p>
          <ol className="list-disc  sm:m-4  text-xs sm:text-sm text-neutral-600 leading-5 sm:leading-6 ">
            <li>
              لأي استفسار أو ملاحظات بخصوص شروط الاستخدام، يُرجى التواصل معنا
              عبر{" "}
              <a className="text-primary" href="https://www.veguscode.com">
                www.veguscode.com
              </a>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
}

export default Terms;
