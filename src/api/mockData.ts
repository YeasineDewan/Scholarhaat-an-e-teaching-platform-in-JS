// Mock data for API responses

export const mockStats = {
  tutorCount: 235065,
  studentCount: 500000,
  jobCount: 5000,
  successRate: 98,
  totalTutors: "235,065",
  maleTutors: "153,966",
  femaleTutors: "80,739"
};

export const mockCategories = [
  { icon: "lucide:book-open", title: "Academic Subjects" },
  { icon: "lucide:code", title: "Programming" },
  { icon: "lucide:languages", title: "Language Learning" },
  { icon: "lucide:music", title: "Music Lessons" },
  { icon: "lucide:palette", title: "Art & Craft" },
  { icon: "lucide:calculator", title: "Math Tutoring" },
  { icon: "lucide:flask-conical", title: "Science Tutoring" },
  { icon: "lucide:globe", title: "Social Studies" },
  { icon: "lucide:pen-tool", title: "Creative Writing" },
  { icon: "lucide:monitor", title: "Computer Skills" },
  { icon: "lucide:mic", title: "Public Speaking" },
  { icon: "lucide:book", title: "Reading & Literature" },
  { icon: "lucide:test-tube", title: "Chemistry" },
  { icon: "lucide:atom", title: "Physics" },
  { icon: "lucide:leaf", title: "Biology" },
  { icon: "lucide:history", title: "History" },
  { icon: "lucide:map", title: "Geography" },
  { icon: "lucide:bar-chart", title: "Economics" },
  { icon: "lucide:building", title: "Business Studies" },
  { icon: "lucide:briefcase", title: "Accounting" },
  { icon: "lucide:flag", title: "Bangla" },
  { icon: "lucide:message-square", title: "English" },
  { icon: "lucide:users", title: "Group Studies" },
  { icon: "lucide:home", title: "Home Tutoring" },
  { icon: "lucide:video", title: "Online Classes" },
  { icon: "lucide:calendar", title: "Exam Preparation" },
  { icon: "lucide:award", title: "Competitive Exams" },
  { icon: "lucide:graduation-cap", title: "University Admission" },
  { icon: "lucide:edit-3", title: "Essay Writing" },
  { icon: "lucide:file-text", title: "Assignment Help" },
  { icon: "lucide:check-square", title: "Test Preparation" },
  { icon: "lucide:activity", title: "Physical Education" }
];

export const mockJobs = {
  jobs: [
    {
      id: "JOB-ID-54362",
      class: "Class 1",
      location: "Farmgate, Dhaka",
      date: "15 Oct 2023",
      subjects: ["English", "Math"],
      feePerWeek: "1000 BDT",
      tutorGender: "Female",
      tutorMode: "Home Tutoring",
      tutorTime: "4:00 PM",
      postedAgo: "3 minutes ago"
    },
    {
      id: "JOB-ID-54340",
      class: "Class 9",
      location: "Dhanmondi, Dhaka",
      date: "15 Oct 2023",
      subjects: ["Physics", "Chemistry"],
      feePerWeek: "1500 BDT",
      tutorGender: "Male",
      tutorMode: "Home Tutoring",
      tutorTime: "5:30 PM",
      postedAgo: "10 minutes ago"
    },
    {
      id: "JOB-ID-54339",
      class: "Class 10",
      location: "Uttara, Dhaka",
      date: "15 Oct 2023",
      subjects: ["Math", "English"],
      feePerWeek: "1200 BDT",
      tutorGender: "Any",
      tutorMode: "Online Tutoring",
      tutorTime: "6:00 PM",
      postedAgo: "15 minutes ago"
    },
    {
      id: "JOB-ID-54335",
      class: "Standard 5",
      location: "Banani, Dhaka",
      date: "15 Oct 2023",
      subjects: ["All Subjects"],
      feePerWeek: "1000 BDT",
      tutorGender: "Female",
      tutorMode: "Home Tutoring",
      tutorTime: "3:00 PM",
      postedAgo: "20 minutes ago"
    },
    {
      id: "JOB-ID-54331",
      class: "Alim 1st Year",
      location: "Mohammadpur, Dhaka",
      date: "15 Oct 2023",
      subjects: ["Arabic", "Islamic Studies"],
      feePerWeek: "1300 BDT",
      tutorGender: "Male",
      tutorMode: "Home Tutoring",
      tutorTime: "4:30 PM",
      postedAgo: "25 minutes ago"
    },
    {
      id: "JOB-ID-54330",
      class: "HSC 2nd Year",
      location: "Mirpur, Chittagong",
      date: "15 Oct 2023",
      subjects: ["Physics", "Math"],
      feePerWeek: "1800 BDT",
      tutorGender: "Male",
      tutorMode: "Home Tutoring",
      tutorTime: "5:00 PM",
      postedAgo: "30 minutes ago"
    }
  ],
  totalPages: 10,
  currentPage: 1
};

export const mockTutors = {
  sections: [
    {
      title: "All Tutors",
      tutors: [
        {
          id: "1",
          name: "Abdullah Alif",
          university: "World University Of Dhaka",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor1",
          badges: ["verified"]
        },
        {
          id: "2",
          name: "Abdul Halim",
          university: "East West University",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor2",
          badges: ["verified"]
        },
        {
          id: "3",
          name: "Shamul Islam A.",
          university: "IBA",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor3"
        },
        {
          id: "4",
          name: "Sakib Hasan C.",
          university: "University Of Dhaka",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor4",
          badges: ["verified", "premium"]
        }
      ]
    },
    {
      title: "Exclusive Tutors",
      tutors: [
        {
          id: "5",
          name: "Rakib Sikderrer M.",
          university: "Dhaka University",
          location: "Banladesh",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor5",
          badges: ["verified", "premium"]
        },
        {
          id: "6",
          name: "Hasibul Hasan",
          university: "Dhaka Commerce Coll.",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor6",
          badges: ["verified"]
        },
        {
          id: "7",
          name: "Yousuf",
          university: "University Of Dhaka",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor7",
          badges: ["verified", "premium"]
        },
        {
          id: "8",
          name: "Shahrul Nazim N.",
          university: "University Of Dhaka",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor8",
          badges: ["verified"]
        }
      ]
    },
    {
      title: "Premium Tutors",
      tutors: [
        {
          id: "9",
          name: "Sakib Hasan C.",
          university: "University Of Dhaka",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor9",
          badges: ["verified", "premium"]
        },
        {
          id: "10",
          name: "Md Emdad U.",
          university: "University Of Dhaka",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor10",
          badges: ["premium"]
        },
        {
          id: "11",
          name: "Nadimul Islam M.",
          university: "Bangladesh University",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor11",
          badges: ["premium"]
        },
        {
          id: "12",
          name: "Toufiqul Islam",
          university: "National Institute O.",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor12",
          badges: ["premium"]
        }
      ]
    },
    {
      title: "Verified Tutors",
      tutors: [
        {
          id: "13",
          name: "Yousuf",
          university: "University Of Dhaka",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor13",
          badges: ["verified", "premium"]
        },
        {
          id: "14",
          name: "Rakib Sikderrer M.",
          university: "Dhaka University",
          location: "Banladesh",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor14",
          badges: ["verified"]
        },
        {
          id: "15",
          name: "Hasibul Hasan",
          university: "Dhaka Commerce Coll.",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor15",
          badges: ["verified"]
        },
        {
          id: "16",
          name: "Anupom Mazumder",
          university: "University Of Dhaka",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor16",
          badges: ["verified"]
        }
      ]
    },
    {
      title: "New Tutors",
      tutors: [
        {
          id: "17",
          name: "Shamul Islam A.",
          university: "IBA",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor17"
        },
        {
          id: "18",
          name: "Abdullah Alif",
          university: "World University Of",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor18"
        },
        {
          id: "19",
          name: "Abdul Halim",
          university: "East West University",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor19"
        },
        {
          id: "20",
          name: "Md Emdad U.",
          university: "University Of Dhaka",
          location: "Dhaka",
          image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor20"
        }
      ]
    }
  ]
};

export const mockAuth = {
  user: {
    id: 1,
    name: "Test User",
    email: "test@example.com",
    role: "student"
  },
  token: "mock-jwt-token"
};
