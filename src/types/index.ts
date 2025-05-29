// Curriculum interfacies
// تعريف الواجهات لتمثيل بنية البيانات
export interface Stage {
  id: number;
  name: string;
}

export interface Subject {
  id: number;
  name: string;
  image: string; // رابط الصورة للمادة
}

export interface Pivot {
  stage: Stage;
  subject: Subject[]; // قائمة المواد لهذه المرحلة
}

export interface Curriculum {
  id: number;
  name: string;
  image: string; // رابط الصورة للمنهاج
  pivot: Pivot[]; // قائمة المراحل المرتبطة بالمنهاج وموادها
}

export interface ApiResponse {
  data: Curriculum[];
}
// course interface
export interface IComments {
  id: number;
  comment_text: string;
  course_id?: number;
  author: string; // صاحب التعليق
  avatar: string;
  user_id?: number;
  is_visible: number;
}
export interface ICourse {
  id: 3;
  name: string;
  description: string;
  image: string;
  profilevideo: string | null;
  contents: string;
  hours: string;
  cost: string | null;
  type: string;
  material: string | null;
  requirements: string;
  is_active: number;
  comments: IComments[];
}
