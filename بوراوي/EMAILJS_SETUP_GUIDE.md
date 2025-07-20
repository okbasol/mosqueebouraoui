# 📧 دليل إعداد EmailJS

## 🎯 **إعداد EmailJS للموقع (أسهل من App Passwords)**

### 📋 **الخطوات المطلوبة:**

#### **1️⃣ إنشاء حساب EmailJS:**
- اذهب إلى [EmailJS.com](https://www.emailjs.com/)
- اضغط "Sign Up" لإنشاء حساب جديد
- استخدم بريدك الإلكتروني وكلمة مرور

#### **2️⃣ إعداد خدمة البريد الإلكتروني:**
- بعد تسجيل الدخول، اذهب إلى "Email Services"
- اضغط "Add New Service"
- اختر "Gmail" أو "Outlook" أو أي خدمة بريد أخرى
- أدخل بريدك الإلكتروني وكلمة المرور العادية

#### **3️⃣ إنشاء قالب البريد الإلكتروني:**
- اذهب إلى "Email Templates"
- اضغط "Create New Template"
- استخدم هذا القالب المحسن مع الشعار الحقيقي:

```html
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>استمارة تسجيل جديدة</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0fdf4;">
    
    <!-- Header Section -->
    <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 30px 20px; text-align: center;">
        <div style="max-width: 600px; margin: 0 auto;">
            <!-- Mosque Logo -->
            <div style="width: 120px; height: 120px; margin: 0 auto 20px; position: relative;">
                <!-- Outer Gold Border -->
                <div style="width: 120px; height: 120px; border: 4px solid #D4AF37; border-radius: 50%; position: relative; background: linear-gradient(45deg, #D4AF37, #FFD700); box-shadow: 0 4px 8px rgba(0,0,0,0.3);">
                    <!-- Inner Green Circle -->
                    <div style="width: 100px; height: 100px; background: linear-gradient(135deg, #0F4C3A 0%, #1B5E3A 100%); border-radius: 50%; position: absolute; top: 6px; left: 6px; display: flex; align-items: center; justify-content: center; border: 2px solid #D4AF37;">
                        <!-- Arabic Calligraphy -->
                        <div style="text-align: center; color: #D4AF37; font-family: 'Amiri', 'Noto Naskh Arabic', serif; font-weight: bold; font-size: 14px; line-height: 1.2; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">
                            <div style="margin-bottom: 2px;">مسجد</div>
                            <div style="margin-bottom: 2px;">الإمام</div>
                            <div>مالك</div>
                        </div>
                    </div>
                    <!-- Decorative Border Pattern -->
                    <div style="position: absolute; top: -2px; left: -2px; right: -2px; bottom: -2px; border: 2px solid #D4AF37; border-radius: 50%; background: repeating-conic-gradient(from 0deg, transparent 0deg, transparent 10deg, rgba(212, 175, 55, 0.3) 10deg, rgba(212, 175, 55, 0.3) 12deg);"></div>
                </div>
                <!-- Location Text -->
                <div style="position: absolute; bottom: -25px; left: 50%; transform: translateX(-50%); white-space: nowrap; color: #D4AF37; font-size: 10px; font-weight: bold; text-shadow: 0 1px 2px rgba(0,0,0,0.8);">
                    الإقامة الجامعية بوراوي عمار
                </div>
            </div>
            
            <!-- Mosque Name -->
            <h1 style="color: white; margin: 25px 0 10px 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                مسجد الإمام مالك
            </h1>
            
            <!-- Location -->
            <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 16px; font-weight: 500;">
                الإقامة الجامعية بوراوي عمار الحراش
            </p>
            
            <!-- Course Title -->
            <div style="background: rgba(255,255,255,0.15); border-radius: 8px; padding: 15px; margin-top: 20px; border: 1px solid rgba(255,255,255,0.2);">
                <h2 style="color: white; margin: 0; font-size: 20px; font-weight: 600;">
                    دورة حفظ القرآن الكريم
                </h2>
                <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 14px;">
                    استمارة تسجيل جديدة
                </p>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div style="max-width: 600px; margin: 0 auto; padding: 30px 20px;">
        
        <!-- Personal Information Section -->
        <div style="background: white; border-radius: 12px; padding: 25px; margin-bottom: 25px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-right: 5px solid #059669;">
            <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 40px; height: 40px; background: #d1fae5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-left: 15px;">
                    <span style="color: #059669; font-size: 18px;">👤</span>
                </div>
                <h3 style="color: #374151; margin: 0; font-size: 20px; font-weight: 600;">البيانات الشخصية</h3>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                    <p style="margin: 8px 0; color: #374151; font-size: 14px;"><strong>الاسم:</strong></p>
                    <p style="margin: 0; color: #059669; font-weight: 500; background: #f0fdf4; padding: 8px 12px; border-radius: 6px; border-right: 3px solid #059669;">{{name}}</p>
                </div>
                <div>
                    <p style="margin: 8px 0; color: #374151; font-size: 14px;"><strong>تاريخ الميلاد:</strong></p>
                    <p style="margin: 0; color: #059669; font-weight: 500; background: #f0fdf4; padding: 8px 12px; border-radius: 6px; border-right: 3px solid #059669;">{{birthDate}}</p>
                </div>
                <div>
                    <p style="margin: 8px 0; color: #374151; font-size: 14px;"><strong>الولاية:</strong></p>
                    <p style="margin: 0; color: #059669; font-weight: 500; background: #f0fdf4; padding: 8px 12px; border-radius: 6px; border-right: 3px solid #059669;">{{state}}</p>
                </div>
                <div>
                    <p style="margin: 8px 0; color: #374151; font-size: 14px;"><strong>المدرسة والمستوى:</strong></p>
                    <p style="margin: 0; color: #059669; font-weight: 500; background: #f0fdf4; padding: 8px 12px; border-radius: 6px; border-right: 3px solid #059669;">{{school}}</p>
                </div>
            </div>
        </div>

        <!-- Contact Information Section -->
        <div style="background: white; border-radius: 12px; padding: 25px; margin-bottom: 25px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-right: 5px solid #059669;">
            <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 40px; height: 40px; background: #d1fae5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-left: 15px;">
                    <span style="color: #059669; font-size: 18px;">📞</span>
                </div>
                <h3 style="color: #374151; margin: 0; font-size: 20px; font-weight: 600;">معلومات التواصل</h3>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                    <p style="margin: 8px 0; color: #374151; font-size: 14px;"><strong>رقم الهاتف:</strong></p>
                    <p style="margin: 0; color: #059669; font-weight: 500; background: #f0fdf4; padding: 8px 12px; border-radius: 6px; border-right: 3px solid #059669;">{{phone}}</p>
                </div>
                <div>
                    <p style="margin: 8px 0; color: #374151; font-size: 14px;"><strong>البريد الإلكتروني:</strong></p>
                    <p style="margin: 0; color: #059669; font-weight: 500; background: #f0fdf4; padding: 8px 12px; border-radius: 6px; border-right: 3px solid #059669;">{{email}}</p>
                </div>
                <div style="grid-column: span 2;">
                    <p style="margin: 8px 0; color: #374151; font-size: 14px;"><strong>معرف التليجرام:</strong></p>
                    <p style="margin: 0; color: #059669; font-weight: 500; background: #f0fdf4; padding: 8px 12px; border-radius: 6px; border-right: 3px solid #059669;">{{telegramId}}</p>
                </div>
            </div>
        </div>

        <!-- Memorization and Tajweed Information Section -->
        <div style="background: white; border-radius: 12px; padding: 25px; margin-bottom: 25px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-right: 5px solid #059669;">
            <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 40px; height: 40px; background: #d1fae5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-left: 15px;">
                    <span style="color: #059669; font-size: 18px;">📖</span>
                </div>
                <h3 style="color: #374151; margin: 0; font-size: 20px; font-weight: 600;">معلومات الحفظ وأحكام التجويد</h3>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div style="grid-column: span 2;">
                    <p style="margin: 8px 0; color: #374151; font-size: 14px;"><strong>مقدار الحفظ من القرآن:</strong></p>
                    <p style="margin: 0; color: #059669; font-weight: 500; background: #f0fdf4; padding: 8px 12px; border-radius: 6px; border-right: 3px solid #059669; min-height: 20px;">{{quranMemorization}}</p>
                </div>
                <div>
                    <p style="margin: 8px 0; color: #374151; font-size: 14px;"><strong>نوع الرواية:</strong></p>
                    <p style="margin: 0; color: #059669; font-weight: 500; background: #f0fdf4; padding: 8px 12px; border-radius: 6px; border-right: 3px solid #059669;">{{recitationType}}</p>
                </div>
                <div>
                    <p style="margin: 8px 0; color: #374151; font-size: 14px;"><strong>مستوى التجويد:</strong></p>
                    <p style="margin: 0; color: #059669; font-weight: 500; background: #f0fdf4; padding: 8px 12px; border-radius: 6px; border-right: 3px solid #059669;">{{tajweedLevel}}</p>
                </div>
                <div style="grid-column: span 2;">
                    <p style="margin: 8px 0; color: #374151; font-size: 14px;"><strong>الوقت المفضل:</strong></p>
                    <p style="margin: 0; color: #059669; font-weight: 500; background: #f0fdf4; padding: 8px 12px; border-radius: 6px; border-right: 3px solid #059669;">{{preferredTime}}</p>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding: 25px; background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); border-radius: 12px; border: 2px solid #059669; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <!-- Small Mosque Logo in Footer -->
            <div style="width: 60px; height: 60px; margin: 0 auto 15px; position: relative;">
                <div style="width: 60px; height: 60px; border: 3px solid #D4AF37; border-radius: 50%; position: relative; background: linear-gradient(45deg, #D4AF37, #FFD700);">
                    <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #0F4C3A 0%, #1B5E3A 100%); border-radius: 50%; position: absolute; top: 3px; left: 3px; display: flex; align-items: center; justify-content: center; border: 1px solid #D4AF37;">
                        <div style="text-align: center; color: #D4AF37; font-family: 'Amiri', 'Noto Naskh Arabic', serif; font-weight: bold; font-size: 8px; line-height: 1.1;">
                            <div>مسجد</div>
                            <div>الإمام</div>
                            <div>مالك</div>
                        </div>
                    </div>
                </div>
            </div>
            <p style="color: #047857; margin: 0; font-weight: bold; font-size: 16px;">تم إرسال هذه الرسالة من موقع مسجد الإمام مالك</p>
            <p style="color: #047857; margin: 5px 0 0 0; font-size: 14px; font-weight: 500;">الإقامة الجامعية بوراوي عمار الحراش</p>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(5, 119, 87, 0.3);">
                <p style="color: #047857; margin: 0; font-size: 12px; opacity: 0.8;">© 2024 مسجد الإمام مالك - جميع الحقوق محفوظة</p>
            </div>
        </div>
    </div>

</body>
</html>
```

#### **4️⃣ الحصول على المفاتيح المطلوبة:**
- **Service ID**: `service_oco4zsv` ✅
- **Template ID**: `template_tgs2ffm` ✅
- **Public Key**: `wfV8o_8kp23p8X97s` ✅

#### **5️⃣ تثبيت EmailJS:**
```bash
npm install @emailjs/browser
```

#### **6️⃣ تحديث نموذج التسجيل:**
تم تحديث `src/components/RegistrationForm.tsx` ليتضمن:

```typescript
import emailjs from '@emailjs/browser';

// في بداية المكون
useEffect(() => {
  emailjs.init("wfV8o_8kp23p8X97s");
}, []);

// في دالة handleSubmit
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const templateParams = {
      name: formData.name,
      birthDate: formData.birthDate,
      state: formData.state,
      school: formData.school,
      phone: formData.phone,
      email: formData.email,
      telegramId: formData.telegramId,
      quranMemorization: formData.quranMemorization,
      recitationType: formData.recitationType,
      tajweedLevel: formData.tajweedLevel,
      preferredTime: formData.preferredTime,
    };

    await emailjs.send(
      'service_oco4zsv',
      'template_tgs2ffm',
      templateParams
    );

    alert('تم إرسال الطلب بنجاح!');
    setFormData({
      name: '',
      birthDate: '',
      state: '',
      school: '',
      phone: '',
      email: '',
      telegramId: '',
      quranMemorization: '',
      recitationType: '',
      tajweedLevel: '',
      preferredTime: ''
    });
  } catch (error) {
    console.error('Error sending email:', error);
    alert('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.');
  }
};
```

### 🔧 **التحديثات الجديدة:**

#### **📝 تغييرات في النموذج:**
- ✅ **فصل معرف التليجرام**: الآن حقل منفصل عن رقم الهاتف
- ✅ **تغيير العنوان**: "المعلومات الدينية" → "معلومات الحفظ وأحكام التجويد"
- ✅ **إعداد EmailJS**: تم ربط النموذج بـ EmailJS
- ✅ **المفاتيح المحدثة**: تم إضافة المفاتيح المقدمة

#### **📧 إعدادات EmailJS:**
- **Service ID**: `service_oco4zsv` ✅
- **Template ID**: `template_tgs2ffm` ✅
- **Public Key**: `wfV8o_8kp23p8X97s` ✅

#### **🛡️ الأمان:**
- Public Key آمن للاستخدام في Frontend
- لا تحتاج كلمات مرور معقدة
- سهولة في الإعداد والصيانة

#### **📱 اختبار الإعدادات:**
- أرسل رسالة تجريبية
- تأكد من وصول الرسائل
- تحقق من تنسيق HTML

### 🎯 **كيفية استخدام هذا القالب:**

#### **1️⃣ في EmailJS:**
- اذهب إلى Email Templates
- اضغط "Create New Template"
- انسخ والصق الكود أعلاه
- احفظ القالب

#### **2️⃣ المتغيرات المستخدمة:**
- `{{name}}` - الاسم
- `{{birthDate}}` - تاريخ الميلاد
- `{{state}}` - الولاية
- `{{school}}` - المدرسة
- `{{phone}}` - رقم الهاتف
- `{{email}}` - البريد الإلكتروني
- `{{telegramId}}` - معرف التليجرام
- `{{quranMemorization}}` - مقدار الحفظ
- `{{recitationType}}` - نوع الرواية
- `{{tajweedLevel}}` - مستوى التجويد
- `{{preferredTime}}` - الوقت المفضل

#### **3️⃣ المميزات الجديدة:**
- ✅ شعار المسجد الحقيقي مع الخط العربي
- ✅ إطار ذهبي مزخرف
- ✅ خلفية خضراء داكنة
- ✅ تصميم احترافي مع الشعار
- ✅ header جميل مع تدرج أخضر
- ✅ أيقونات لكل قسم
- ✅ تخطيط شبكي منظم
- ✅ ألوان تتناسق مع الموقع
- ✅ دعم اللغة العربية (RTL)
- ✅ ظلال وحدود أنيقة
- ✅ footer احترافي مع شعار صغير
- ✅ عنوان محدث: "معلومات الحفظ وأحكام التجويد"

#### **4️⃣ الألوان المستخدمة:**
- **الأخضر الأساسي**: #059669
- **الأخضر الداكن**: #047857
- **الأخضر الفاتح**: #d1fae5
- **الذهبي**: #D4AF37
- **الذهبي الفاتح**: #FFD700
- **الأخضر الداكن للشعار**: #0F4C3A
- **الخلفية**: #f0fdf4
- **النص**: #374151

انسخ هذا الكود واستخدمه في EmailJS! 🎉

### 🎯 **النتيجة:**
بعد الإعداد ستحصل على:
- ✅ بريد إلكتروني احترافي مع الشعار الحقيقي
- ✅ تنسيق احترافي وجميل للرسائل
- ✅ شعار وعنوان المسجد واضح
- ✅ سهولة في الإعداد
- ✅ لا تحتاج App Passwords
- ✅ نموذج محدث مع EmailJS

### 📞 **الدعم:**
إذا واجهت مشاكل:
1. تحقق من Service ID و Template ID
2. تأكد من صحة Public Key
3. راجع تنسيق القالب
4. تحقق من سجلات EmailJS

### 🎨 **الألوان المحدثة:**
- **الأخضر الأساسي**: #059669 (يطابق الشعار)
- **الأخضر الداكن**: #047857
- **الأخضر الفاتح**: #d1fae5
- **الأخضر المائي**: #10b981
- **الذهبي**: #D4AF37 (للشعار)
- **الذهبي الفاتح**: #FFD700

الموقع جاهز للعمل! 🎉 