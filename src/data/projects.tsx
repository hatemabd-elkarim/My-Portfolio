export const PROJECTS = [
  {
    id: 1,
    title: "Talabat",
    desc: "Full-stack food delivery web application connecting customers with local restaurants through real-time order tracking, geolocation-based restaurant discovery, and role-based dashboards for customers, restaurants, and admins. Built a custom PHP MVC framework with session-based authentication, a MySQL relational database, and dedicated modules for cart management, coupon discounts, and restaurant/product image uploads.",
    tech: ["PHP", "MySQL", "Javascript", "Composer", "PDO"],
    github: "https://github.com/hatemabd-elkarim/Talabat",
    live: null,
    accent: "#34D399",
    images: [
      {
        url: "talabat/index.png",
        alt: "index",
      },
      {
        url: "/talabat/customer-home.png",
        alt: "customer homepage",
      },
      {
        url: "/talabat/restaurant-menu.png",
        alt: "restaurant menu",
      },
      {
        url: "/talabat/restaurant-details.png",
        alt: "restaurant details",
      },
      {
        url: "/talabat/restaurant-reviews.png",
        alt: "restaurant reviews",
      },
      {
        url: "/talabat/write-review.png",
        alt: "write a review",
      },
      {
        url: "/talabat/checkout.png",
        alt: "checkout",
      },
      {
        url: "/talabat/customer-orders.png",
        alt: "customer orders",
      },
      {
        url: "/talabat/customer-notifications.png",
        alt: "customer notifications",
      },
      {
        url: "/talabat/customer-profile.png",
        alt: "customer profile",
      },
      {
        url: "/talabat/restaurant-dashboard.png",
        alt: "restaurant dashboard",
      },
      {
        url: "/talabat/add-product.png",
        alt: "add product",
      },
      {
        url: "/talabat/restaurant-orders.png",
        alt: "restaurant orders",
      },
      {
        url: "/talabat/track-order-1.png",
        alt: "track orders 1",
      },
      {
        url: "/talabat/track-order-2.png",
        alt: "track orders 2",
      },
      {
        url: "/talabat/restaurant-profile.png",
        alt: "restaurant profile",
      },
      {
        url: "/talabat/admin-dashboard.png",
        alt: "admin dashboard",
      },
      {
        url: "/talabat/add-restaurant.png",
        alt: "add restaurant",
      },
      {
        url: "/talabat/add-coupon.png",
        alt: "add coupon",
      },
      {
        url: "/talabat/404.png",
        alt: "404 page",
      },
      {
        url: "/talabat/403.png",
        alt: "403 page",
      },
    ],
  },
  {
    id: 2,
    title: "Shoryan API",
    desc: `RESTful backend for a blood donation Mobile App connecting donors with patients in real time through location-based matching, automated eligibility reminders, and an AI-powered donor recommendation system.
    Built a Laravel REST API with token-based authentication, Firebase push notifications, and a FastAPI microservice layer for a RAG-based medical chatbot and a trained donor-matching model.
    Designed and built 25+ RESTful API endpoints covering authentication and core business logic, secured with Laravel Sanctum token-based authentication
    Implemented a Firebase Cloud Messaging notification service for real-time push alerts on request acceptance, fulfillment, and donor eligibility
    Automated donor eligibility reminders using Laravel's task scheduler, running as a recurring background job
    Architected a two-phase OTP email verification system for registration, using Laravel's cache layer for secure, time-limited, hashed OTP storage
    `,
    tech: ["Laravel", "MySQL", "Firebase"],
    github: "https://github.com/Shoryan-org",
    live: "https://shoryan-api.vercel.app/",
    accent: "#FBBF24",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=800&h=450&fit=crop&auto=format",
        alt: "Code on monitor",
      },
      {
        url: "/shoryan/UI SHORYAN APP MOBILE (4).png",
        alt: "profile",
      },
      {
        url: "/shoryan/UI SHORYAN APP MOBILE (2).png",
        alt: "map",
      },
      {
        url: "/shoryan/UI SHORYAN APP MOBILE (5).png",
        alt: "emergency",
      },
      {
        url: "/shoryan/UI SHORYAN APP MOBILE (3).png",
        alt: "requests",
      },
      {
        url: "/shoryan/UI SHORYAN APP MOBILE (6).png",
        alt: "notifications",
      },
      {
        url: "/shoryan/UI SHORYAN APP MOBILE (1).png",
        alt: "chatbot",
      },
      {
        url: "/shoryan/UI SHORYAN APP MOBILE (7).png",
        alt: "smart matching",
      },
    ],
  },
  {
    id: 3,
    title: "Gryffindor Platform",
    desc: `Built a web application from the ground up — without relying on Laravel, Symfony, or any third-party framework — to power a Harry Potter–themed school management platform for student registration, course/quiz management, gamified house points, and an in-app marketplace.
    Designed and implemented a custom MVC framework from scratch (routing, dependency injection container, session management, and a PDO-based database abstraction layer), fully PSR-4 autoloaded. Built a centralized request lifecycle with global exception handling, routing all traffic through a single public entry point.
    Developed a reusable server-side validation engine with custom exception handling and session-based flash messaging for error/old-input persistence across redirects.`,
    tech: ["PHP", "MySQL", "HTML&CSS", "Composer"],
    github: "https://github.com/Ahmedmhmud/gryffindor-platform",
    live: null,
    accent: "#818CF8",
    images: [
      {
        url: "/gryffindor/student-home.png",
        alt: "student home",
      },
      {
        url: "/gryffindor/student-courses.png",
        alt: "student courses",
      },
      {
        url: "/gryffindor/student-quizzes.png",
        alt: "student quizzes",
      },
      {
        url: "/gryffindor/quiz-results.png",
        alt: "quiz results",
      },
      {
        url: "/gryffindor/student-shop.png",
        alt: "student shop",
      },
      {
        url: "/gryffindor/owlery.png",
        alt: "owlery",
      },
      {
        url: "/gryffindor/students-leaderboard.png",
        alt: "students leaderboard",
      },
      {
        url: "/gryffindor/house-leaderboard.png",
        alt: "houses leaderboard",
      },
      {
        url: "/gryffindor/student-roaster.png",
        alt: "student roaster",
      },
      {
        url: "/gryffindor/faculty-roaster.png",
        alt: "faculty roaster",
      },
      {
        url: "/gryffindor/manage-courses.png",
        alt: "manage courses",
      },
      {
        url: "/gryffindor/manage-shop.png",
        alt: "manage shop",
      },
      {
        url: "/gryffindor/professor-classrooms.png",
        alt: "professor home",
      },
      {
        url: "/gryffindor/manage-quizzes.png",
        alt: "manage quizzes",
      },
      {
        url: "/gryffindor/404.png",
        alt: "404 page",
      },
    ],
  },
  {
    id: 4,
    title: "Down-Up",
    desc: "Markdown to HTML converting CLI tool that reads any Markdown file, applies rule-based parsing using regex,and outputs a formatted HTML file — useful for docs and static pages.",
    tech: ["Python", "Regex", "Pytest"],
    github:
      "https://github.com/hatemabd-elkarim/Markdown-to-HTML-converting-tool",
    live: null,
    accent: "#F87171",
    images: [
      {
        url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=450&fit=crop&auto=format",
        alt: "Code on dark screen",
      },
      {
        url: "/down-up/1758879776041.jpeg",
        alt: "running",
      },
    ],
  },
];