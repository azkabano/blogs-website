const blogs = [
    {
        id: 1,
        title: "Mastering JavaScript for Beginners",
        content: "JavaScript is a versatile language used in web development...",
        categories: ["Programming", "JavaScript", "Web Development"],
        tags: ["JavaScript", "Coding Basics", "Frontend"],
        popularity: 8.7,
        isPopular: false,
        isRecent: true,
        date: "2024-10-01",
        image: "/cards/js.png",
        comments: ["Very helpful article!", "Great tips, thanks!"],
    },
    {
        id: 2,
        title: "Understanding React Hooks",
        content: "React hooks are a game-changer for building functional components...",
        categories: ["React", "Frontend Development"],
        tags: ["React", "Hooks", "JavaScript"],
        popularity: 9.3,
        isPopular: false,
        isRecent: true,
        date: "2024-12-15",
        image: "/cards/hook.png",
        comments: ["Hooks made my life easier!", "Detailed explanation."],
    },
    {
        id: 3,
        title: "The Future of AI in Healthcare",
        content: "Artificial Intelligence is revolutionizing the healthcare industry...",
        categories: ["AI", "Healthcare", "Technology"],
        tags: ["AI", "Healthcare", "Innovation"],
        popularity: 7.5,
        isPopular: true,
        isRecent: true,
        date: "2024-12-05",
        image: "/cards/ai.png",
        comments: ["This is amazing!", "AI is the future!"],
    },
    {
        id: 4,
        title: "Top 10 CSS Frameworks in 2024",
        content: "Choosing the right CSS framework can speed up development...",
        categories: ["CSS", "Web Design", "Frontend"],
        tags: ["CSS Frameworks", "Tailwind", "Bootstrap"],
        popularity: 9.0,
        isPopular: true,
        isRecent: false,
        date: "2024-09-15",
        image: "/cards/css.jpg",
        comments: ["Tailwind is the best!", "Bootstrap still rocks."],
    },
    {
        id: 5,
        title: "Why Python is the Go-To Language for Data Science",
        content: "Python has become a dominant force in data science due to...",
        categories: ["Python", "Data Science", "Machine Learning"],
        tags: ["Python", "Data Analysis", "ML"],
        popularity: 8.2,
        isPopular: false,
        isRecent: true,
        date: "2024-11-30",
        image: "/cards/py.jpg",
        comments: ["Informative read.", "Python forever!"],
    },
    {
        id: 6,
        title: "Getting Started with Next.js 14",
        content: "Next.js is the framework of choice for modern React developers...",
        categories: ["React", "Next.js", "Web Development"],
        tags: ["Next.js", "React", "Server-side Rendering"],
        popularity: 8.9,
        isPopular: true,
        isRecent: false,
        date: "2024-08-10",
        image: "/cards/nextjs.png",
        comments: ["I needed this guide!", "SSR is so useful."],
    },
    {
        id: 7,
        title: "UI/UX Trends to Watch in 2024",
        content: "The design world is constantly evolving. Here's what to expect...",
        categories: ["UI/UX", "Design"],
        tags: ["UI", "UX", "Trends"],
        popularity: 7.8,
        isPopular: false,
        isRecent: true,
        date: "2024-11-20",
        image: "/cards/ui.png",
        comments: ["Love the insights!", "Very futuristic."],
    },
    {
        id: 8,
        title: "Building REST APIs with Node.js",
        content: "Learn how to create RESTful APIs using Node.js and Express...",
        categories: ["Node.js", "Backend Development", "APIs"],
        tags: ["Node.js", "Express", "REST API"],
        popularity: 8.3,
        isPopular: false,
        isRecent: false,
        date: "2024-07-20",
        image: "/cards/aws.png",
        comments: ["Very clear examples.", "Great starter guide!"],
    },
    {
        id: 9,
        title: "The Rise of Web3 and Blockchain",
        content: "Blockchain technology is at the forefront of Web3 innovations...",
        categories: ["Web3", "Blockchain", "Cryptocurrency"],
        tags: ["Blockchain", "Web3", "Crypto"],
        popularity: 7.9,
        isPopular: false,
        isRecent: true,
        date: "2024-11-10",
        image: "/cards/web.jpg",
        comments: ["Very exciting topic!", "Crypto is the future!"],
    },
    {
        id: 10,
        title: "Deploying Your First App on AWS",
        content: "AWS offers a robust platform for deploying modern applications...",
        categories: ["AWS", "Cloud Computing", "DevOps"],
        tags: ["AWS", "Cloud", "DevOps"],
        popularity: 8.4,
        isPopular: true,
        isRecent: false,
        date: "2024-08-25",
        image: "/cards/aws.jpg",
        comments: ["Helpful tutorial.", "AWS made easy!"],
    },
];

export default blogs;