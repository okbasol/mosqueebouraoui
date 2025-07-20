'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    state: '',
    school: '',
    phone: '',
    email: '',
    telegram: '',
    quranMemorization: '',
    narration: '',
    tajweedLevel: '',
    preferredTime: '',
    notes: '',
    commitment: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("wfV8o_8kp23p8X97s");
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      birthDate: '',
      state: '',
      school: '',
      phone: '',
      email: '',
      telegram: '',
      quranMemorization: '',
      narration: '',
      tajweedLevel: '',
      preferredTime: '',
      notes: '',
      commitment: false
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset status
    setSubmitStatus('idle');
    setIsSubmitting(true);

    try {
      // Validate required fields
      const requiredFields = ['name', 'birthDate', 'state', 'school', 'phone', 'email', 'quranMemorization', 'preferredTime'];
      const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
      
      if (missingFields.length > 0) {
        throw new Error('يرجى ملء جميع الحقول المطلوبة');
      }

      // Validate phone number (10 digits)
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
        throw new Error('رقم الهاتف يجب أن يكون 10 أرقام');
      }

      // Validate email format (strict regex)
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('البريد الإلكتروني غير صحيح');
      }

      // Validate commitment checkbox
      if (!formData.commitment) {
        throw new Error('يجب الموافقة على التعهد للمتابعة');
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        "service_oco4zsv",
        "template_tgs2ffm",
        {
          name: formData.name,
          birthDate: formData.birthDate,
          state: formData.state,
          school: formData.school,
          phone: formData.phone,
          email: formData.email,
          telegramId: formData.telegram || 'غير محدد',
          quranMemorization: formData.quranMemorization,
          narration: formData.narration || 'غير محدد',
          tajweedLevel: formData.tajweedLevel || 'غير محدد',
          preferredTime: formData.preferredTime,
          notes: formData.notes || 'لا يوجد',
          commitment: formData.commitment ? 'موافق' : 'غير موافق',
        }
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        alert('تم إرسال الطلب بنجاح! سيتم التواصل معك قريباً.');
        resetForm();
      } else {
        throw new Error('فشل في إرسال البريد الإلكتروني');
      }

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      if (error instanceof Error) {
        alert(`حدث خطأ في إرسال الطلب: ${error.message}`);
      } else {
        alert('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-pro-card">
      <form className="form-pro" onSubmit={handleSubmit} noValidate>
        <div className="form-pro-header">
          <h2>استمارة التسجيل في الدورة الصيفية لحفظ القرآن الكريم</h2>
        </div>
        <div className="form-pro-grid">
          {/* Personal Info Section */}
          <div className="form-pro-section">
            <div className="form-pro-section-title">🧑‍🎓 البيانات الشخصية</div>
            <div className="form-pro-section-fields">
              <div className="form-pro-group">
                <label htmlFor="name">الاسم (بالعربية) <span className="required">*</span></label>
                <input type="text" id="name" name="name" value={formData.name} onChange={e => handleInputChange('name', e.target.value)} required disabled={isSubmitting} placeholder="أدخل اسمك الكامل" />
              </div>
              <div className="form-pro-group">
                <label htmlFor="birthDate">تاريخ الميلاد <span className="required">*</span></label>
                <input type="date" id="birthDate" name="birthDate" value={formData.birthDate} onChange={e => handleInputChange('birthDate', e.target.value)} required disabled={isSubmitting} />
              </div>
              <div className="form-pro-group">
                <label htmlFor="state">الولاية <span className="required">*</span></label>
                <input type="text" id="state" name="state" value={formData.state} onChange={e => handleInputChange('state', e.target.value)} required disabled={isSubmitting} placeholder="أدخل ولايتك" />
              </div>
              <div className="form-pro-group">
                <label htmlFor="school">المدرسة والمستوى الدراسي <span className="required">*</span></label>
                <input type="text" id="school" name="school" value={formData.school} onChange={e => handleInputChange('school', e.target.value)} required disabled={isSubmitting} placeholder="أدخل مدرستك ومستواك الدراسي" />
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="form-pro-section">
            <div className="form-pro-section-title">📞 معلومات التواصل</div>
            <div className="form-pro-section-fields">
              <div className="form-pro-group">
                <label htmlFor="phone">رقم الهاتف <span className="required">*</span></label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} required disabled={isSubmitting} placeholder="أدخل رقم هاتفك" />
              </div>
              <div className="form-pro-group">
                <label htmlFor="email">البريد الإلكتروني <span className="required">*</span></label>
                <input type="email" id="email" name="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} required disabled={isSubmitting} placeholder="أدخل بريدك الإلكتروني" />
              </div>
              <div className="form-pro-group">
                <label htmlFor="telegram">معرف Telegram (مسبوقاً بـ @)</label>
                <input type="text" id="telegram" name="telegram" value={formData.telegram} onChange={e => handleInputChange('telegram', e.target.value)} disabled={isSubmitting} placeholder="مثال: @username" />
              </div>
            </div>
          </div>

          {/* Quran & Tajweed Info Section */}
          <div className="form-pro-section">
            <div className="form-pro-section-title">📖 معلومات الحفظ وأحكام التجويد</div>
            <div className="form-pro-section-fields">
              <div className="form-pro-group">
                <label htmlFor="quranMemorization">كم تحفظ من القرآن؟ مع تحديد الأجزاء التي تحفظها <span className="required">*</span></label>
                <input type="text" id="quranMemorization" name="quranMemorization" value={formData.quranMemorization} onChange={e => handleInputChange('quranMemorization', e.target.value)} required disabled={isSubmitting} placeholder="مثال: 5 أحزاب (من الحزب 1 إلى الحزب 5)" />
              </div>
              <div className="form-pro-group">
                <label htmlFor="narration">ما هي الرواية التي تحفظ بها؟</label>
                <input type="text" id="narration" name="narration" value={formData.narration} onChange={e => handleInputChange('narration', e.target.value)} disabled={isSubmitting} placeholder="مثال: ورش عن نافع" />
              </div>
              <div className="form-pro-group">
                <label htmlFor="tajweedLevel">ما هو مستواك في أحكام التجويد؟</label>
                <input type="text" id="tajweedLevel" name="tajweedLevel" value={formData.tajweedLevel} onChange={e => handleInputChange('tajweedLevel', e.target.value)} disabled={isSubmitting} placeholder="مثال: مبتدئ / متوسط / متقدم" />
              </div>
              <div className="form-pro-group">
                <label htmlFor="preferredTime">الوقت المناسب لإقامة الحلقات عن بعد <span className="required">*</span></label>
                <input type="time" id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={e => handleInputChange('preferredTime', e.target.value)} required disabled={isSubmitting} />
              </div>
              <div className="form-pro-group">
                <label htmlFor="notes">ملاحظات تود إيصالها لنا أو طلبات خاصة</label>
                <textarea id="notes" name="notes" value={formData.notes} onChange={e => handleInputChange('notes', e.target.value)} disabled={isSubmitting} placeholder="اكتب أي ملاحظات أو طلبات هنا (اختياري)" rows={5} style={{ minHeight: '100px', resize: 'vertical' }} />
              </div>
            </div>
          </div>
        </div>
        {/* Commitment Checkbox */}
        <div className="form-pro-commitment">
          <label className="form-pro-checkbox-label">
            <input type="checkbox" id="commitment" name="commitment" checked={formData.commitment} onChange={e => setFormData({ ...formData, commitment: e.target.checked })} required disabled={isSubmitting} />
            <span className="form-pro-checkbox-custom"></span>
            <span>
              <strong>تعهد:</strong> أتعهد أنا المسجل في هذه الدورة، بالالتزام بالحضور في الأوقات المحددة من طرف المشرفين، وبالجدية في متابعة الحصص، وبالأمانة في استظهار المحفوظ، سعياً لطلب الأجر وتحصيل النفع
            </span>
          </label>
          {/* {errors.commitment && <div className="form-pro-error">{errors.commitment}</div>} */}
        </div>
        {/* Submit Button */}
        <button type="submit" className="form-pro-submit" disabled={isSubmitting}>
          {isSubmitting ? 'جاري الإرسال...' : 'إرسال الاستمارة'}
        </button>
        {submitStatus === 'success' && <div className="form-pro-success">تم إرسال الطلب بنجاح! سيتم التواصل معك قريباً.</div>}
        {submitStatus === 'error' && <div className="form-pro-error">حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.</div>}
      </form>
    </div>
  );
};

export default RegistrationForm; 