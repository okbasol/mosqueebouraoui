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
    <div className="container">
      <motion.form 
        className="registration-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="form-header">
          <h2>استمارة التسجيل في الدورة الصيفية لحفظ القرآن الكريم</h2>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div 
            className="success-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              background: '#d1fae5',
              border: '2px solid #059669',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '20px',
              textAlign: 'center',
              color: '#047857',
              fontWeight: 'bold',
              gridColumn: '1 / -1'
            }}
          >
            ✅ تم إرسال الطلب بنجاح! سيتم التواصل معك قريباً.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div 
            className="error-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              background: '#fee2e2',
              border: '2px solid #dc2626',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '20px',
              textAlign: 'center',
              color: '#dc2626',
              fontWeight: 'bold',
              gridColumn: '1 / -1'
            }}
          >
            ❌ حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.
          </motion.div>
        )}

        {/* Two-column grid for desktop, single column for mobile */}
        <div className="form-grid">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="name">الاسم (بالعربية) *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="أدخل اسمك الكامل"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="state">الولاية *</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
                placeholder="أدخل ولايتك"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="birthDate">تاريخ الميلاد *</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={(e) => handleInputChange('birthDate', e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="school">المدرسة والمستوى الدراسي *</label>
              <input
                type="text"
                id="school"
                name="school"
                value={formData.school}
                onChange={(e) => handleInputChange('school', e.target.value)}
                placeholder="أدخل مدرستك ومستواك الدراسي"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">رقم الهاتف *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="أدخل رقم هاتفك"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">البريد الإلكتروني *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="أدخل بريدك الإلكتروني"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="telegram">Telegram (اختياري)</label>
            <input
              type="text"
              id="telegram"
              name="telegram"
              value={formData.telegram}
              onChange={(e) => handleInputChange('telegram', e.target.value)}
              placeholder="أدخل معرف Telegram"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="form-group commitment-group">
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="commitment"
              name="commitment"
              checked={formData.commitment}
              onChange={(e) => setFormData({...formData, commitment: e.target.checked})}
              required
              disabled={isSubmitting}
            />
            <label htmlFor="commitment" className="commitment-label">
              <strong>تعهد</strong>: أتعهد أنا المسجل في هذه الدورة، بالتزام الحضور في الأوقات المحددة من طرف المشرفين، وبالجدية في متابعة الحصص، وبالأمانة في استظهار المحفوظ، سعيا لطلب الأجر وتحصيل النفع
            </label>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem', gridColumn: '1 / -1' }}>
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
            style={{
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              minWidth: '180px'
            }}
          >
            {isSubmitting ? (
              <span>
                <span style={{ marginLeft: '8px' }}>⏳</span>
                جاري الإرسال...
              </span>
            ) : (
              'إرسال الاستمارة'
            )}
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default RegistrationForm; 