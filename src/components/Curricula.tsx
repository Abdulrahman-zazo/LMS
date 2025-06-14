import { useState } from "react";
import type { Curriculum, Pivot, Stage, Subject } from "../types";
import defaultCountry from "../assets/Earth Planet.png";
import { useTranslation } from "react-i18next";
import { useGetAllCurriculumsQuery } from "../app/features/Curriculum/CurriculumApi";
import SkeletonCustom from "./Skeleton";
import HandelError from "./HandelError";

const Curricula = () => {
  const { t } = useTranslation("translation");
  const { data, isLoading, isError } = useGetAllCurriculumsQuery({});

  const curricula = data?.Curriculum ?? [];
  const initialCurriculum = curricula[0];
  const initialPivot = initialCurriculum?.pivot?.[0];

  const [selectedCurriculumId, setSelectedCurriculumId] = useState<
    number | null
  >(initialCurriculum?.id ?? null);
  const [stages, setStages] = useState<Stage[]>(
    initialCurriculum?.pivot?.map(({ stage }: Pivot) => stage) ?? []
  );
  const [selectedStageId, setSelectedStageId] = useState<number | null>(
    initialPivot?.stage?.id ?? null
  );
  const [displayedSubjects, setDisplayedSubjects] = useState<Subject[]>(
    initialPivot?.subject ?? []
  );

  const handleCurriculumChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const curriculumId = parseInt(event.target.value);
    setSelectedCurriculumId(curriculumId);
    setSelectedStageId(null);
    setDisplayedSubjects([]);

    const selectedCurriculum = curricula.find(
      (c: Curriculum) => c.id === curriculumId
    );
    if (selectedCurriculum) {
      setStages(selectedCurriculum.pivot.map((p: Pivot) => p.stage));
      if (selectedCurriculum.pivot.length > 0) {
        setSelectedStageId(selectedCurriculum.pivot[0].stage.id);
        setDisplayedSubjects(selectedCurriculum.pivot[0].subject);
      } else {
        setStages([]);
        setDisplayedSubjects([]);
      }
    } else {
      setStages([]);
      setDisplayedSubjects([]);
    }
  };

  const handleStageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const stageId = parseInt(event.target.value);
    setSelectedStageId(stageId);

    const selectedCurriculum = curricula.find(
      (c: Curriculum) => c.id === selectedCurriculumId
    );
    if (selectedCurriculum) {
      const selectedPivot = selectedCurriculum.pivot.find(
        (p: Pivot) => p.stage.id === stageId
      );
      setDisplayedSubjects(selectedPivot?.subject || []);
    } else {
      setDisplayedSubjects([]);
    }
  };

  if (isLoading) return <SkeletonCustom type="card" />;
  if (isError) return <HandelError />;

  return (
    <div className="bg-bg-purple py-6 sm:py-10">
      <div className="container mx-auto p-6 max-w-[90%]">
        <p className="text-sm  sm:text-base text-text text-center sm:hidden">
          {t("curricula.select")}
        </p>
        <div className="flex md:flex-row space-x-2 md:space-x-4 items-center mt-4 mb-8">
          <p className="text-sm  sm:text-base text-text text-center max-[640px]:hidden">
            {t("curricula.select")}
          </p>

          <div className="relative flex-1 text-sm sm:text-base">
            <label htmlFor="curriculum-select" className="sr-only">
              {t("curricula.curricula_select")}
            </label>
            <div className="relative text-sm sm:text-base rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {selectedCurriculumId && (
                  <img
                    src={
                      curricula.find(
                        (c: Curriculum) => c.id === selectedCurriculumId
                      ).image
                    }
                    alt="Curriculum Icon"
                    className="h-8 w-8 rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = defaultCountry;
                    }}
                  />
                )}
              </div>
              <select
                id="curriculum-select"
                className="block bg-white w-full pl-12 pr-10 py-3  text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-base cursor-pointer appearance-none"
                value={selectedCurriculumId || ""}
                onChange={handleCurriculumChange}
              >
                <option
                  value=""
                  disabled
                  className="text-sm sm:text-base w-full"
                >
                  {t("curricula.curricula_select")}
                </option>
                {curricula.map((curriculum: Curriculum) => (
                  <option
                    key={curriculum.id}
                    value={curriculum.id}
                    className="text-sm sm:text-base w-full"
                  >
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

          <div className="relative flex-1 text-sm sm:text-base">
            <label htmlFor="stage-select" className="sr-only">
              {t("curricula.curricula_select2")}
            </label>
            <div className="relative rounded-md shadow-sm">
              <select
                id="stage-select"
                className="block bg-white w-full pl-3 pr-10 py-3  text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-base cursor-pointer appearance-none"
                value={selectedStageId || ""}
                onChange={handleStageChange}
                disabled={!selectedCurriculumId || stages.length === 0}
              >
                <option
                  value=""
                  disabled
                  className="text-sm sm:text-base w-full"
                >
                  {stages.length === 0
                    ? t("error.Nostage")
                    : t("error.selectStage")}
                </option>
                {stages.map((stage) => (
                  <option
                    key={stage.id}
                    value={stage.id}
                    className="text-sm sm:text-base w-full"
                  >
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

        {displayedSubjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {displayedSubjects.map((subject) => (
              <div
                key={subject.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={subject.image}
                  alt={subject.name}
                  className="w-full object-cover  h-full"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/100x60/F0F4F8/000000?text=N/A";
                  }}
                />
                <div className="p-4 flex justify-between items-center">
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-800 text-center">
                    {subject.name}
                  </h3>
                  <button
                    title="curricula"
                    className="bg-primary hover:shadow-sm cursor-pointer text-white font-medium text-sm  py-2 px-4 rounded-sm shadow-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                  >
                    {t("curricula.button")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-sm sm:text-base text-gray-500 py-8">
            {selectedCurriculumId === null ? (
              <p>{t("curricula.empty")}</p>
            ) : stages.length === 0 ? (
              <div>
                <p>{t("curricula.empty1")}</p>
              </div>
            ) : (
              <p>{t("curricula.empty2")}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Curricula;
