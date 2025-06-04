import Cookies from "universal-cookie";

const cookies = new Cookies();

// interface CookieSetOptions {
//   path?: string;
//   expires?: Date;
//   maxAge?: number;
//   domain?: string;
//   secure?: boolean;
//   httpOnly?: boolean;
//   sameSite?: boolean | "none" | "lax" | "strict";
// }

class CookiesService {
  // Get cookie by name
  get(name: string): string | undefined {
    return cookies.get(name);
  }

  set(name: string, value: string): void {
    cookies.set(name, value, {
      path: "/",
      sameSite: "strict", // لا تُرسل الكوكيز في طلبات cross-site
      // secure: true,
      // httpOnly: true,  // هذا لا يعمل من client-side، يجب تعيينه من السيرفر
      // expires: new Date(Date.now() + 60 * 60 * 1000), // ساعة مثلًا
    });
  }

  // Remove cookie
  remove(name: string): void {
    cookies.remove(name, { path: "/" }); // لازم نفس الـ path يلي استخدمته عند set
  }
}

export const cookieService = new CookiesService();
