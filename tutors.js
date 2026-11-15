/* =====================================================================
   AHSA · Our Tutors list  (ہمارے اساتذہ)
   ---------------------------------------------------------------------
   Only add tutors who have been VERIFIED by the academy.
   To add a tutor: copy the sample block below, remove the // marks,
   fill the details, and keep a comma after each block.
   Urdu fields (…Ur) are optional: if empty, the English text is shown.
   modes: list of how the tutor teaches, any of:
         'online'  = online tuition   (آن لائن)
         'academy' = at the academy   (اکیڈمی میں)
         'home'    = home tuition, tutor goes to the student's home   (گھر پر / ہوم ٹیوٹر)
         e.g. modes: ['online', 'academy', 'home']
         (old style mode: 'online' | 'academy' | 'both' still works)
   platforms: for online tutors, e.g. 'WhatsApp, Zoom, Google Meet'.
   photo: optional image path, e.g. 'assets/tutors/ali.jpg' (leave '' for initials).
   Fees are NOT shown on the website; students ask the academy on WhatsApp.
   While this list is empty the website shows "جلد آ رہا ہے / Coming soon".
   ===================================================================== */
window.TUTORS = [
  {
    name: 'Shakeel Hassan',           nameUr: 'شکیل حسن',
    education: 'M.Sc Mathematics, M.Sc Statistics, B.Ed',
    educationUr: 'ایم ایس سی ریاضی، ایم ایس سی شماریات، بی ایڈ',
    eduShort: 'M.Sc Math, M.Sc Stat, B.Ed',   eduShortUr: 'ایم ایس سی میتھ، ایم ایس سی اسٹیٹ، بی ایڈ',
    subjects: 'Mathematics',
    subjectsUr: 'ریاضی',
    classes: '9 to 12',               classesUr: '9 تا 12',
    experience: '19 years',           experienceUr: '19 سال',
    area: 'Dillewali, Mianwali',      areaUr: 'دلیوالی، میانوالی',
    modes: ['online', 'academy'],     platforms: '',
    photo: 'assets/shakeel-hassan.webp?v=2'
  },
  {
    name: 'Najeeb Ullah',             nameUr: 'نجیب اللہ',
    education: 'M.Sc Mathematics and B.Ed',    educationUr: 'ایم ایس سی ریاضی اور بی ایڈ',
    subjects: 'Math, Physics',
    subjectsUr: 'ریاضی، فزکس',
    classes: '8 to 12',               classesUr: '8 تا 12',
    experience: 'More than 10 years',  experienceUr: '10 سال سے زیادہ',
    area: 'Dillewali, Mianwali',      areaUr: 'دلیوالی، میانوالی',
    modes: ['online', 'academy'],     platforms: '',
    photo: 'assets/tutors/najeeb-ullah.webp?v=2'
  },
  {
    name: 'Humaira Hayat',            nameUr: 'حمیرا حیات',
    education: 'M.Phil Chemistry',    educationUr: 'ایم فل کیمسٹری',
    subjects: 'Math, Chemistry',
    subjectsUr: 'ریاضی، کیمسٹری',
    classes: '8 to 12',               classesUr: '8 تا 12',
    experience: 'More than 10 years',  experienceUr: '10 سال سے زیادہ',
    area: 'Abbakhel, Mianwali',       areaUr: 'ابا خیل، میانوالی',
    available: 'After 7 pm',          availableUr: 'شام 7 بجے کے بعد',
    modes: ['online'],                platforms: '',
    photo: 'assets/tutors/humaira-hayat.svg'
  },
  {
    name: 'Shazia Hassan',             nameUr: 'شازیہ حسن',
    education: 'Masters and M.Ed',    educationUr: 'ماسٹرز اور ایم ایڈ',
    subjects: 'Math and Science',
    subjectsUr: 'ریاضی اور سائنس',
    classes: '8 to 10',               classesUr: '8 تا 10',
    experience: 'More than 10 years', experienceUr: '10 سال سے زیادہ',
    area: 'Dillewali, Mianwali',      areaUr: 'دلیوالی، میانوالی',
    modes: ['online', 'academy'],     platforms: '',
    photo: 'assets/tutors/shazia-sajjad.svg'
  },
  {
    name: 'Muhammad Umar Farooq',     nameUr: 'محمد عمر فاروق',
    education: 'M.Phil Mathematics (UOW)',    educationUr: 'ایم فل ریاضی (UOW)',
    subjects: 'Mathematics',
    subjectsUr: 'ریاضی',
    classes: '8 to 12',               classesUr: '8 تا 12',
    experience: 'More than 5 years · Mathematics Lecturer, University of Mianwali and ARF College Mianwali',
    experienceUr: '5 سال سے زیادہ · لیکچرر ریاضی، یونیورسٹی آف میانوالی اور اے آر ایف کالج میانوالی',
    area: 'Mianwali City',            areaUr: 'میانوالی سٹی',
    modes: ['online', 'home'],        platforms: 'Zoom',
    photo: 'assets/tutors/umar-farooq.webp?v=1'
  },
  {
    name: 'Shahzad Hassan',           nameUr: 'شہزاد حسن',
    education: 'M.Sc Mathematics (IUB), M.A EPM, M.Ed',
    educationUr: 'ایم ایس سی ریاضی (آئی یو بی)، ایم اے ای پی ایم، ایم ایڈ',
    eduShort: 'M.Sc Math (IUB), M.A EPM, M.Ed',   eduShortUr: 'ایم ایس سی ریاضی، ایم اے ای پی ایم، ایم ایڈ',
    subjects: 'Mathematics',          subjectsUr: 'ریاضی',
    classes: '8 to 12',               classesUr: '8 تا 12',
    experience: '22 years',           experienceUr: '22 سال',
    expDetail: ['14 years: Senior Mathematics Teacher, Government High Schools, Punjab',
                '8 years: Mathematics Teacher, Pakistan Overseas Higher Secondary School, Dinga Road, Kharian, Gujrat',
                'Exam Coordinator: exam planning, paper setting and assessment'],
    expDetailUr: ['14 سال: سینئر ریاضی ٹیچر، گورنمنٹ ہائی اسکولز، پنجاب',
                  '8 سال: ریاضی ٹیچر، پاکستان اوورسیز ہائیر سیکنڈری اسکول، ڈنگہ روڈ، کھاریاں، گجرات',
                  'امتحانی کوآرڈینیٹر: امتحانات کی منصوبہ بندی، پیپر سیٹنگ اور جانچ'],
    area: 'Dillewali, Mianwali',      areaUr: 'دلیوالی، میانوالی',
    modes: ['online'],                platforms: '',
    photo: 'assets/tutors/shahzad-hassan.webp?v=1'
  },
  {
    name: 'Shahnaz Habib',            nameUr: 'شہناز حبیب',
    education: 'M.Sc Economics',      educationUr: 'ایم ایس سی معاشیات',
    subjects: 'Economics',            subjectsUr: 'معاشیات',
    classes: '1st Year and 2nd Year', classesUr: 'فرسٹ ایئر اور سیکنڈ ایئر',
    experience: 'More than 10 years', experienceUr: '10 سال سے زیادہ',
    modes: ['online', 'academy'],     platforms: '',
    photo: 'assets/tutors/shahnaz-habib.svg'
  },
  {
    name: 'Amaar Yasir Shah',         nameUr: 'عمار یاسر شاہ',
    education: 'M.Phil Chemistry',    educationUr: 'ایم فل کیمسٹری',
    subjects: 'Chemistry',            subjectsUr: 'کیمسٹری',
    classes: '9 to 12',               classesUr: '9 تا 12',
    experience: 'More than 10 years',  experienceUr: '10 سال سے زیادہ',
    area: 'Dillewali, Mianwali',      areaUr: 'دلیوالی، میانوالی',
    modes: ['online', 'academy'],     platforms: 'WhatsApp',
    photo: 'assets/tutors/amaar-yasir-shah.webp?v=1'
  },
  {
    name: 'Tariq Hassan',             nameUr: 'طارق حسن',
    education: 'M.A English, B.Ed',   educationUr: 'ایم اے انگلش، بی ایڈ',
    subjects: 'English',              subjectsUr: 'انگلش',
    experience: 'More than 10 years', experienceUr: '10 سال سے زیادہ',
    modes: ['online', 'academy'],     platforms: '',
    photo: 'assets/tutors/tariq-hassan.webp?v=1'
  },
  // {
  //   name: 'Muhammad Ali',            nameUr: 'محمد علی',
  //   education: 'M.Sc Physics',        educationUr: 'ایم ایس سی فزکس',
  //   subjects: 'Physics, Math',        subjectsUr: 'فزکس، ریاضی',
  //   classes: '9 to 12',               classesUr: '9 تا 12',
  //   experience: '5 years',            experienceUr: '5 سال',
  //   area: 'Dillewali, Mianwali',      areaUr: 'دلیوالی، میانوالی',
  //   modes: ['online', 'academy', 'home'],   platforms: 'WhatsApp, Zoom',
  //   photo: ''
  // },
];
