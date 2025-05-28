import { Button } from "antd";

interface IProps {}

const FormComplaints = ({}: IProps) => {
  return (
    <section className="bg-white ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm">
        <h2 className="mb-4 text-xl tracking-tight font-extrabold text-center text-text">
          الشكاوى والمقترحات
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-paragraph sm:text-sm">
          نحن نأخذ ملاحظاتكم على محمل الجد. فريقنا المتخصص في التعامل مع الشكاوى
          سيقوم بمراجعة طلبك والرد عليك خلال 48 ساعة.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-paragraph "
            >
              الاسم الكامل
            </label>
            <input
              type="text"
              id="name"
              className=" bg-white border border-gray-300 text-paragraph text-sm rounded-lg focus:ring-primary focus:border-red-600 block w-full p-2.5  "
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-paragraph "
            >
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              className=" bg-white border border-gray-300 text-paragraph text-sm rounded-lg focus:ring-primary focus:border-red-600 block w-full p-2.5  "
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-paragraph "
            >
              رقم الهاتف
            </label>
            <input
              type="text"
              id="number"
              className=" bg-white border border-gray-300 text-paragraph text-sm rounded-lg focus:ring-primary focus:border-red-600 block w-full p-2.5  "
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-paragraph "
            >
              الشكوى أو الاقتراح
            </label>
            <textarea
              id="message"
              rows={6}
              className=" bg-white border border-gray-300 text-paragraph text-sm rounded-lg focus:ring-primary focus:border-red-600 block w-full p-2.5  "
            ></textarea>
          </div>
          <Button
            type="primary"
            size="large"
            className="bg-primary w-full py-6 px-5 text-sm font-medium text-center text-white rounded-lg  hover:bg-bg-purple-light "
          >
            أرسل ملاحظتك الآن وساهم في تحسين تجربتنا التعليمية.
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FormComplaints;
