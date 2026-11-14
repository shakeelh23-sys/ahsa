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
    subjects: 'Math, Physics',
    subjectsUr: 'ریاضی، فزکس',
    classes: '8 to 12',               classesUr: '8 تا 12',
    experience: '19 years',           experienceUr: '19 سال',
    area: 'Dillewali',                areaUr: 'دلیوالی',
    modes: ['online', 'academy'],     platforms: '',
    photo: 'assets/shakeel-hassan.jpg'
  },
  // {
  //   name: 'Muhammad Ali',            nameUr: 'محمد علی',
  //   education: 'M.Sc Physics',        educationUr: 'ایم ایس سی فزکس',
  //   subjects: 'Physics, Math',        subjectsUr: 'فزکس، ریاضی',
  //   classes: '9 to 12',               classesUr: '9 تا 12',
  //   experience: '5 years',            experienceUr: '5 سال',
  //   area: 'Dillewali',                areaUr: 'دلیوالی',
  //   modes: ['online', 'academy', 'home'],   platforms: 'WhatsApp, Zoom',
  //   photo: ''
  // },
  {
    name: 'Najeeb Ullah',             nameUr: 'نجیب اللہ',
    education: 'M.Sc Mathematics and B.Ed',    educationUr: 'ایم ایس سی ریاضی اور بی ایڈ',
    subjects: 'Math, Physics',
    subjectsUr: 'ریاضی، فزکس',
    classes: '8 to 12',               classesUr: '8 تا 12',
    experience: 'More than 5 years',  experienceUr: '5 سال سے زیادہ',
    area: 'Dillewali',                areaUr: 'دلیوالی',
    modes: ['online', 'academy'],     platforms: '',
    photo: 'assets/tutors/najeeb-ullah.jpg'
  },
  {
    name: 'Shazia Sajjad',             nameUr: 'شازیہ سجاد',
    education: 'Masters and B.Ed',    educationUr: 'ماسٹرز اور بی ایڈ',
    subjects: 'Physics, Chemistry, Math, Science',
    subjectsUr: 'فزکس، کیمسٹری، ریاضی، سائنس',
    classes: '8 to 10',               classesUr: '8 تا 10',
    experience: 'More than 10 years', experienceUr: '10 سال سے زیادہ',
    area: 'Dillewali',                areaUr: 'دلیوالی',
    modes: ['online', 'academy'],     platforms: '',
    photo: 'assets/tutors/shazia-sajjad.svg'
  },
  {
    name: 'Humaira Hayat',            nameUr: 'حمیرا حیات',
    education: 'M.Phil Chemistry',    educationUr: 'ایم فل کیمسٹری',
    subjects: 'Math, Chemistry',
    subjectsUr: 'ریاضی، کیمسٹری',
    classes: '8 to 12',               classesUr: '8 تا 12',
    experience: 'More than 5 years',  experienceUr: '5 سال سے زیادہ',
    area: 'Abbakhel, Mianwali',       areaUr: 'ابا خیل، میانوالی',
    available: 'After 7 pm',          availableUr: 'شام 7 بجے کے بعد',
    modes: ['online', 'academy'],     platforms: '',
    photo: 'assets/tutors/humaira-hayat.svg'
  },
];
