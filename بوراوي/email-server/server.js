const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail', // أو أي خدمة بريد إلكتروني أخرى
  auth: {
    user: process.env.EMAIL_USER, // your-email@gmail.com
    pass: process.env.EMAIL_PASS  // your-app-password
  }
});

// Email template function
const createEmailHTML = (data) => {
  return `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #2c5530; text-align: center; margin-bottom: 30px;">استمارة تسجيل جديدة - دورة حفظ القرآن الكريم</h2>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #2c5530; border-bottom: 2px solid #2c5530; padding-bottom: 10px;">البيانات الشخصية</h3>
          <p><strong>الاسم:</strong> ${data.name}</p>
          <p><strong>تاريخ الميلاد:</strong> ${data.birthDate}</p>
          <p><strong>الولاية:</strong> ${data.state}</p>
          <p><strong>المدرسة والمستوى الدراسي:</strong> ${data.school}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #2c5530; border-bottom: 2px solid #2c5530; padding-bottom: 10px;">معلومات التواصل</h3>
          <p><strong>رقم الهاتف:</strong> ${data.phone}</p>
          <p><strong>البريد الإلكتروني:</strong> ${data.email}</p>
          <p><strong>معرف التليجرام:</strong> ${data.telegramId || 'غير محدد'}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #2c5530; border-bottom: 2px solid #2c5530; padding-bottom: 10px;">معلومات الحفظ وأحكام التجويد</h3>
          <p><strong>مقدار الحفظ:</strong> ${data.quranMemorization}</p>
          <p><strong>نوع الرواية:</strong> ${data.recitationType || 'غير محدد'}</p>
          <p><strong>مستوى التجويد:</strong> ${data.tajweedLevel || 'غير محدد'}</p>
          <p><strong>الوقت المناسب:</strong> ${data.preferredTime}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #2c5530;">
          <p style="color: #666; font-size: 14px;">تم إرسال هذه الاستمارة من موقع مسجد الإمام مالك</p>
        </div>
      </div>
    </div>
  `;
};

// API endpoint to send registration email
app.post('/api/send-registration', async (req, res) => {
  try {
    const {
      name,
      birthDate,
      state,
      school,
      phone,
      email,
      telegramId,
      quranMemorization,
      recitationType,
      tajweedLevel,
      preferredTime
    } = req.body;

    // Validate required fields
    const requiredFields = ['name', 'birthDate', 'state', 'school', 'phone', 'email', 'quranMemorization', 'preferredTime'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'يرجى ملء جميع الحقول المطلوبة',
        missingFields
      });
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL, // البريد الإلكتروني للمسؤول
      subject: `تسجيل جديد - ${name} - دورة حفظ القرآن الكريم`,
      html: createEmailHTML({
        name,
        birthDate,
        state,
        school,
        phone,
        email,
        telegramId: telegramId || 'غير محدد',
        quranMemorization,
        recitationType: recitationType || 'غير محدد',
        tajweedLevel: tajweedLevel || 'غير محدد',
        preferredTime
      })
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    
    res.json({
      success: true,
      message: 'تم إرسال البريد الإلكتروني بنجاح',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ في إرسال البريد الإلكتروني',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Email server is running' });
});

app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
}); 