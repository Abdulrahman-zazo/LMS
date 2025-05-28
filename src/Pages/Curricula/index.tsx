import { useState, useEffect } from "react";
import { HeroHeader } from "../../components/HeroHeader";

// تعريف الواجهات لتمثيل بنية البيانات
interface Stage {
  id: number;
  name: string;
}

interface Subject {
  id: number;
  name: string;
  image: string; // رابط الصورة للمادة
}

interface Pivot {
  stage: Stage;
  subject: Subject[]; // قائمة المواد لهذه المرحلة
}

interface Curriculum {
  id: number;
  name: string;
  image: string; // رابط الصورة للمنهاج
  pivot: Pivot[]; // قائمة المراحل المرتبطة بالمنهاج وموادها
}

interface ApiResponse {
  data: Curriculum[];
}

const CurriculaPage = () => {
  // حالات لتخزين البيانات المختارة وعرضها
  const [curricula, setCurricula] = useState<Curriculum[]>([]); // جميع المناهج المتاحة
  const [selectedCurriculumId, setSelectedCurriculumId] = useState<
    number | null
  >(null); // ID المنهاج المختار
  const [selectedStageId, setSelectedStageId] = useState<number | null>(null); // ID المرحلة المختارة
  const [displayedSubjects, setDisplayedSubjects] = useState<Subject[]>([]); // المواد المعروضة بناءً على الاختيار
  const [stages, setStages] = useState<Stage[]>([]); // المراحل المتاحة للمنهاج المختار

  // بيانات وهمية (Mock Data) تحاكي استجابة الـ API
  // تم استخدام صور placeholder لضمان عرض الواجهة بشكل صحيح
  const mockData: ApiResponse = {
    data: [
      {
        id: 2,
        name: "الإمارات",
        image: "https://placehold.co/40x40/E0F2F7/000000?text=UAE", // صورة وهمية للمنهاج
        pivot: [
          {
            stage: {
              id: 2,
              name: "التعليم الثانوي",
            },
            subject: [
              {
                id: 2,
                name: "اللغة العربية 2",
                image: "https://placehold.co/100x60/F0F4F8/000000?text=Arabic", // صورة وهمية للمادة
              },
              {
                id: 3,
                name: "اللغة الإنجليزية",
                image: "https://placehold.co/100x60/F0F4F8/000000?text=English", // صورة وهمية للمادة
              },
            ],
          },
          {
            stage: {
              id: 3,
              name: "التعليم الرابع",
            },
            subject: [
              {
                id: 4,
                name: "الرياضيات",
                image: "https://placehold.co/100x60/F0F4F8/000000?text=Math", // صورة وهمية للمادة
              },
              {
                id: 5,
                name: "العلوم",
                image: "https://placehold.co/100x60/F0F4F8/000000?text=Science", // صورة وهمية للمادة
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "سوريا",
        image: "https://placehold.co/40x40/E0F2F7/000000?text=SYR", // صورة وهمية للمنهاج
        pivot: [], // لا توجد مراحل لهذا المنهاج في البيانات الوهمية
      },
      {
        id: 4,
        name: "مصر",
        image: "https://placehold.co/40x40/E0F2F7/000000?text=EGY", // صورة وهمية للمنهاج
        pivot: [
          {
            stage: {
              id: 6,
              name: "التعليم الأساسي",
            },
            subject: [
              {
                id: 7,
                name: "دراسات اجتماعية",
                image: "https://placehold.co/100x60/F0F4F8/000000?text=Social", // صورة وهمية للمادة
              },
            ],
          },
        ],
      },
    ],
  };

  // تأثير جانبي (useEffect) لتحميل البيانات الأولية وتعيين القيم الافتراضية
  useEffect(() => {
    // في تطبيق حقيقي، سيتم جلب هذه البيانات من API
    setCurricula(mockData.data);

    // تعيين المنهاج والمرحلة الافتراضية (أول منهاج وأول مرحلة فيه)
    if (mockData.data.length > 0) {
      const initialCurriculum = mockData.data[0];
      setSelectedCurriculumId(initialCurriculum.id);

      if (initialCurriculum.pivot.length > 0) {
        setStages(initialCurriculum.pivot.map((p) => p.stage));
        const initialStage = initialCurriculum.pivot[0].stage;
        setSelectedStageId(initialStage.id);
        setDisplayedSubjects(initialCurriculum.pivot[0].subject);
      } else {
        // إذا كان المنهاج الأول لا يحتوي على مراحل
        setStages([]);
        setDisplayedSubjects([]);
      }
    }
  }, []); // يتم تشغيل هذا التأثير مرة واحدة فقط عند تحميل المكون

  // معالج تغيير اختيار المنهاج
  const handleCurriculumChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const curriculumId = parseInt(event.target.value);
    setSelectedCurriculumId(curriculumId);
    setSelectedStageId(null); // إعادة تعيين المرحلة عند تغيير المنهاج
    setDisplayedSubjects([]); // مسح المواد المعروضة

    const selectedCurriculum = curricula.find((c) => c.id === curriculumId);
    if (selectedCurriculum) {
      setStages(selectedCurriculum.pivot.map((p) => p.stage));
      // تعيين المرحلة الافتراضية لأول مرحلة في المنهاج الجديد (إذا وجدت)
      if (selectedCurriculum.pivot.length > 0) {
        setSelectedStageId(selectedCurriculum.pivot[0].stage.id);
        setDisplayedSubjects(selectedCurriculum.pivot[0].subject);
      } else {
        // إذا لم يكن هناك مراحل للمنهاج المختار
        setStages([]);
        setDisplayedSubjects([]);
      }
    } else {
      // إذا لم يتم العثور على المنهاج
      setStages([]);
      setDisplayedSubjects([]);
    }
  };

  // معالج تغيير اختيار المرحلة
  const handleStageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const stageId = parseInt(event.target.value);
    setSelectedStageId(stageId);

    const selectedCurriculum = curricula.find(
      (c) => c.id === selectedCurriculumId
    );
    if (selectedCurriculum) {
      const selectedPivot = selectedCurriculum.pivot.find(
        (p) => p.stage.id === stageId
      );
      setDisplayedSubjects(selectedPivot?.subject || []); // عرض المواد للمرحلة المختارة
    } else {
      setDisplayedSubjects([]);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 font-sans">
      <HeroHeader
        buttonText=" انضم إلينا اليوم وكن جزءًا من مستقبل التعلم"
        title="المناهج التعليمية في منصة H-Platform"
        description="توفر منصة H-Platform مناهج تعليمية متكاملة في مواد أساسية  كاللغة العربية، الإنجليزية، الرياضيات، والحساب الذهني، مصممة لتلائم جميع المستويات.
      اختر المنهج الذي يناسبك، ودعنا نأخذ بيدك نحو التميز الأكاديمي والتفوق الحقيقي."
      />
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          اختر منهاجك ومرحلتك الدراسية
        </h1>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
          {/* قائمة اختيار المنهاج */}
          <div className="relative flex-1">
            <label htmlFor="curriculum-select" className="sr-only">
              اختر المنهاج
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {selectedCurriculumId && (
                  <img
                    src={
                      curricula.find((c) => c.id === selectedCurriculumId)
                        ?.image || ""
                    }
                    alt="Curriculum Icon"
                    className="h-6 w-6 rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/40x40/E0F2F7/000000?text=N/A";
                    }} // صورة احتياطية
                  />
                )}
              </div>
              <select
                id="curriculum-select"
                className="block w-full pl-12 pr-10 py-3 text-right text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base cursor-pointer appearance-none"
                value={selectedCurriculumId || ""}
                onChange={handleCurriculumChange}
              >
                <option value="" disabled>
                  اختر المنهاج
                </option>
                {curricula.map((curriculum) => (
                  <option key={curriculum.id} value={curriculum.id}>
                    {curriculum.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* قائمة اختيار المرحلة */}
          <div className="relative flex-1">
            <label htmlFor="stage-select" className="sr-only">
              اختر المرحلة
            </label>
            <div className="relative rounded-md shadow-sm">
              <select
                id="stage-select"
                className="block w-full pl-3 pr-10 py-3 text-right text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base cursor-pointer appearance-none"
                value={selectedStageId || ""}
                onChange={handleStageChange}
                disabled={!selectedCurriculumId || stages.length === 0} // تعطيل إذا لم يتم اختيار منهاج أو لا توجد مراحل
              >
                <option value="" disabled>
                  {stages.length === 0 ? "لا توجد مراحل" : "اختر المرحلة"}
                </option>
                {stages.map((stage) => (
                  <option key={stage.id} value={stage.id}>
                    {stage.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* عرض المواد */}
        {displayedSubjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedSubjects.map((subject) => (
              <div
                key={subject.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={subject.image}
                  alt={subject.name}
                  className="w-full h-32 object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/100x60/F0F4F8/000000?text=N/A";
                  }} // صورة احتياطية
                />
                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-gray-800 text-center mb-3">
                    {subject.name}
                  </h3>
                  <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                    ابدأ الدراسة
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-8">
            {selectedCurriculumId === null ? (
              <p>الرجاء اختيار منهاج ومرحلة لعرض المواد.</p>
            ) : stages.length === 0 ? (
              <p>لا توجد مراحل متاحة لهذا المنهاج.</p>
            ) : (
              <p>لا توجد مواد متاحة لهذه المرحلة.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurriculaPage;
