import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CourseCard from "./Ui/courseCard";
import { useGetAllOfferQuery } from "../app/features/Offer/OfferApi";
import SkeletonCustom from "./Skeleton";
import HandelError from "./HandelError";
import type { ICourse } from "../types";
interface IOffer {
  id: number;
  name: string;
  description: string;
  cost?: string;
  courses: ICourse[];
}
const Offers = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? 0 : index);
  };
  const { t } = useTranslation("translation");
  const { data, isLoading, isError } = useGetAllOfferQuery({});

  if (isLoading) {
    return <SkeletonCustom type="h-card" />;
  }
  if (isError) {
    return <HandelError />;
  }

  return (
    <div className="bg-white ">
      <section>
        <div className="max-w-[100%] sm:max-w-[90%]  mx-auto px-4 sm:px-6 py-16">
          {data?.Offers.length > 0 && (
            <h2 className="text-xl sm:text-2xl text-text font-semibold text-center mb-10">
              {t("offer.title")}
            </h2>
          )}

          <div className="space-y-4">
            {data?.Offers.length > 0 ? (
              data?.Offers.map((offer: IOffer, index: number) => (
                <div
                  key={offer.id}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:border  hover:border-paragraph/50  "
                >
                  <div
                    onClick={() => toggle(index)}
                    className="w-full  flex justify-between items-center px-4 py-4 text-sm sm:text-base font-medium cursor-pointer text-text hover:bg-bg-purple transition"
                  >
                    <div className="">
                      <h3 className="text-base sm:text-lg font-semibold my-2">
                        {offer.name}
                      </h3>
                      <p className="text-sm sm:text-base">
                        {offer.description}
                      </p>
                    </div>
                    <button
                      title="offer button"
                      className="text-white hidden sm:inline bg-primary px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 text-[10px]  text-sm sm:text-base"
                    >
                      {t("offer.button")}
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        {offer?.courses.length > 0 && (
                          <div className="px-4 pb-4 text-sm sm:text-base text-paragraph leading-relaxed">
                            <p className="mx-2 my-4 text-paragraph/80 text-sm sm:text-base">
                              {t("offer.lable")}
                            </p>
                            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 sm:mb-8">
                              {offer?.courses.map((course) => (
                                <div
                                  key={course.id}
                                  className=" mt-4 sm:mt-8 border border-neutral-300 rounded-xl"
                                >
                                  <CourseCard
                                    summary={course.summary}
                                    description={course.description}
                                    id={course.id}
                                    image={course.image}
                                    title={course.name}
                                    key={course.id}
                                    link="/protected/offers/courses"
                                    btnType="link"
                                  />
                                </div>
                              ))}
                            </div>
                            <button
                              title="offer button"
                              className="text-white inline  w-full sm:hidden bg-primary px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 text-[10px]  text-sm sm:text-base"
                            >
                              {t("offer.button")}
                            </button>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div>
                <p className="text-sm  sm:text-base text-neutral-500 text-center">
                  {t("offer.NoOffer")}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
