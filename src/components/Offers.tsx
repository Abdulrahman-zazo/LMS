import { useTranslation } from "react-i18next";
import Image1 from "../assets/4039100_2cfe_3.png";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CourseCard from "./Ui/courseCard";
import { useGetAllOfferQuery } from "../app/features/Offer/OfferApi";
import SkeletonCustom from "./Skeleton";
import HandelError from "./HandelError";

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
  console.log(data);
  // const offersdata = [
  //   {
  //     id: 2,
  //     name: "عرض النادي الصيفي",
  //     description: "طوّر ذاتك واكسب مهارات مطلوبة في جميع المجالات.",
  //     cost: "300",
  //     courses: [],
  //   },
  //   {
  //     id: 3,
  //     name: "عرض النادي الصيفي",
  //     description: "طوّر ذاتك واكسب مهارات مطلوبة في جميع المجالات.",
  //     cost: "100",
  //     courses: [
  //       {
  //         id: 1,
  //         title: "Teach HTML and CSS to Kids",
  //         description:
  //           "Build visually engaging websites with a curriculum that is 70% more content than traditional curriculums.",
  //         image: Image1,

  //         name: "java",

  //         summary:
  //           "Build visually engaging websites with a curriculum that has 300% more",

  //         profilevideo: null,
  //         contents: "functionee",
  //         hours: "24",
  //         cost: null,
  //         type: "online",
  //         material: null,
  //         requirements: "engineer",
  //         is_active: 1,
  //         comments: [
  //           {
  //             id: 2,
  //             comment_text: "the course is beautifull",
  //             course_id: 1,
  //             user_id: 3,
  //             is_visible: 1,
  //             author: "aboud",
  //             avatar: "image/Screenshot_1.png",
  //             time: "2025-05-31T15:23:59.000000Z",
  //           },
  //         ],
  //       },
  //       {
  //         id: 1,
  //         title: "Teach HTML and CSS to Kids",
  //         description:
  //           "Build visually engaging websites with a curriculum that is 70% more content than traditional curriculums.",
  //         image: Image1,

  //         name: "java",

  //         summary:
  //           "Build visually engaging websites with a curriculum that has 300% more",

  //         profilevideo: null,
  //         contents: "functionee",
  //         hours: "24",
  //         cost: null,
  //         type: "online",
  //         material: null,
  //         requirements: "engineer",
  //         is_active: 1,
  //         comments: [
  //           {
  //             id: 2,
  //             comment_text: "the course is beautifull",
  //             course_id: 1,
  //             user_id: 3,
  //             is_visible: 1,
  //             author: "aboud",
  //             avatar: "image/Screenshot_1.png",
  //             time: "2025-05-31T15:23:59.000000Z",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];
  return (
    <div className="bg-white " dir="rtl">
      <section>
        <div className="max-w-[100%] sm:max-w-[90%]  mx-auto px-4 sm:px-6 py-16">
          {data?.data.length > 0 && (
            <h2 className="text-xl sm:text-3xl text-text font-bold text-center mb-10">
              {t("offer.title")}
            </h2>
          )}

          <div className="space-y-4">
            {data?.data.length > 0 ? (
              data?.data.map((offer, index) => (
                <div
                  key={offer.id}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:border  hover:border-paragraph/50  "
                >
                  <div
                    onClick={() => toggle(index)}
                    className="w-full text-right flex justify-between items-center px-4 py-4 text-sm sm:text-base font-medium cursor-pointer text-text hover:bg-bg-purple transition"
                  >
                    <div className="">
                      <h3 className="text-md font-semibold my-2">
                        {offer.name}
                      </h3>
                      <p className="text-xs">{offer.description}</p>
                    </div>
                    <button
                      title="offer button"
                      className="text-white bg-primary font-medium md:font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 text-[10px]  sm:text-sm"
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
                        {offer.courses.length > 0 && (
                          <div className="px-4 pb-4 text-sm text-paragraph leading-relaxed">
                            <p className="mx-2 my-4 text-paragraph text-sm">
                              {t("offer.lable")}
                            </p>
                            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                              {offer?.courses.map((course) => (
                                <div
                                  key={course.id}
                                  className="pt-8 border border-neutral-300 rounded-xl"
                                >
                                  <CourseCard
                                    description={course.description}
                                    id={course.id}
                                    image={course.image}
                                    title={course.name}
                                    key={course.id}
                                    link="/protected/offers/courses"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div>
                <p className="text-sm text-neutral-500 text-center">
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
