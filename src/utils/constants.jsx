import { SiKotlin, SiPhp, SiLaravel, SiFlutter, SiSpringboot, SiMysql, SiGit } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export const navItems = [
    { name: "Home", link: "#" },
    { name: "About Me", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Certificates", link: "#certificates" },
    { name: "Contacts", link: "#contacts" },
    { name: "Curriculum Vitae", link: "/cv.pdf" },
];

export const stickyContent = [
    {
        title: "Profile",
        description:
            "A Computer Science graduate from Bina Nusantara University specializing in Android Application development. Skilled in Java, Kotlin, and PHP, with experience developing maintainable applications using MVVM architecture and RESTful APIs.",
        content: (
            <div className="relative h-full w-full overflow-hidden rounded-lg border border-white/10 bg-slate-900/60 p-2 backdrop-blur-md flex items-center justify-center">
                <img src="src/assets/profile.jpg" alt="Profile" className="h-full w-full object-cover rounded-md" />
            </div>
        ),
    },
    {
        title: "Tech Stack",
        description:
            "Proficient in mobile and web development using Java, Kotlin, PHP, and Laravel. Experienced with Flutter for cross-platform apps, MySQL database management, Git version control, and expanding backend capabilities with Spring Boot.",
        content: (
            <div className="flex h-full w-full flex-col justify-center p-3">
                <h4 className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-cyan-400">Core Technologies</h4>
                <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <FaJava className="text-xl text-orange-400" />
                        <span className="text-[10px] text-slate-300">Java</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <SiKotlin className="text-xl text-purple-400" />
                        <span className="text-[10px] text-slate-300">Kotlin</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <SiPhp className="text-xl text-indigo-400" />
                        <span className="text-[10px] text-slate-300">PHP</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <SiLaravel className="text-xl text-red-500" />
                        <span className="text-[10px] text-slate-300">Laravel</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <SiFlutter className="text-xl text-sky-400" />
                        <span className="text-[10px] text-slate-300">Flutter</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <SiSpringboot className="text-xl text-emerald-400" />
                        <span className="text-[10px] text-slate-300">Spring Boot</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <SiMysql className="text-xl text-blue-400" />
                        <span className="text-[10px] text-slate-300">MySQL</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <SiGit className="text-xl text-orange-600" />
                        <span className="text-[10px] text-slate-300">Git</span>
                    </div>
                </div>
            </div>
        ),
    },
];

export const images = [
    "https://assets.aceternity.com/components/hero-section-with-mesh-gradient.webp",
    "https://assets.aceternity.com/components/3d-globe.webp",
    "https://assets.aceternity.com/components/keyboard-2.webp",
    "https://assets.aceternity.com/components/hero-1.webp",
    "https://assets.aceternity.com/components/hero-2.webp",
    "https://assets.aceternity.com/components/hero-3.webp",
];

export const products = [
    {
        title: "Belajar Dasar Pemrograman JavaScript",
        link: "https://www.dicoding.com/certificates/1OP82GV3LPQK",
        thumbnail: "src/assets/certificate/certificate_1.jpg",
    },
    {
        title: "Memulai Pemrograman dengan Python",
        link: "https://www.dicoding.com/certificates/4EXG7O9YDPRL",
        thumbnail: "src/assets/certificate/certificate_2.jpg",
    },
    {
        title: "Belajar Dasar Structured Query Language (SQL)",
        link: "https://www.dicoding.com/certificates/2VX34V91NZYQ",
        thumbnail: "src/assets/certificate/certificate_3.jpg",
    },
    {
        title: "Belajar Dasar Data Science",
        link: "https://www.dicoding.com/certificates/0LZ04YL6NP65",
        thumbnail: "src/assets/certificate/certificate_4.jpg",
    },
    {
        title: "Belajar Prinsip Pemrograman SOLID",
        link: "https://www.dicoding.com/certificates/07Z68Q6YWXQR",
        thumbnail: "src/assets/certificate/certificate_5.jpg",
    },
    {
        title: "Belajar Membuat Aplikasi Android untuk Pemula",
        link: "https://www.dicoding.com/certificates/L4PQ85652ZO1",
        thumbnail: "src/assets/certificate/certificate_6.jpg",
    },
    {
        title: "Memulai Pemrograman dengan Kotlin",
        link: "https://www.dicoding.com/certificates/MRZML8J8NXYQ",
        thumbnail: "src/assets/certificate/certificate_7.jpg",
    },
    {
        title: "Java (Basic) Certificate",
        link: "https://www.hackerrank.com/certificates/d0417eabca34",
        thumbnail: "src/assets/certificate/certificate_8.png",
    },
    {
        title: "Belajar Membuat Aplikasi Flutter untuk Pemula",
        link: "https://www.dicoding.com/certificates/72ZDOJ4L6XYW",
        thumbnail: "src/assets/certificate/certificate_9.jpg",
    },
    {
        title: "Memulai Pemrograman dengan Dart",
        link: "https://www.dicoding.com/certificates/4EXG532MQXRL",
        thumbnail: "src/assets/certificate/certificate_10.jpg",
    },
    
    // {
    //     title: "Cursor",
    //     link: "https://cursor.so",
    //     thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/cursor.png",
    // },
    // {
    //     title: "Rogue",
    //     link: "https://userogue.com",
    //     thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/rogue.png",
    // },

    // {
    //     title: "Editorially",
    //     link: "https://editorially.org",
    //     thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/editorially.png",
    // },
    // {
    //     title: "Editrix AI",
    //     link: "https://editrix.ai",
    //     thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/editrix.png",
    // },
    // {
    //     title: "Pixel Perfect",
    //     link: "https://app.pixelperfect.quest",
    //     thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    // },

    // {
    //     title: "Algochurn",
    //     link: "https://algochurn.com",
    //     thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/algochurn.png",
    // },
    // {
    //     title: "Aceternity UI",
    //     link: "https://ui.aceternity.com",
    //     thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/aceternityui.png",
    // },
    // {
    //     title: "Tailwind Master Kit",
    //     link: "https://tailwindmasterkit.com",
    //     thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    // },
    // {
    //     title: "SmartBridge",
    //     link: "https://smartbridgetech.com",
    //     thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/smartbridge.png",
    // },
    // {
    //     title: "Renderwork Studio",
    //     link: "https://renderwork.studio",
    //     thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/renderwork.png",
    // },

    // {
    //     title: "Creme Digital",
    //     link: "https://cremedigital.com",
    //     thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/cremedigital.png",
    // },
    // {
    //     title: "Golden Bells Academy",
    //     link: "https://goldenbellsacademy.com",
    //     thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    // },
    // {
    //     title: "Invoker Labs",
    //     link: "https://invoker.lol",
    //     thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/invoker.png",
    // },
    // {
    //     title: "E Free Invoice",
    //     link: "https://efreeinvoice.com",
    //     thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    // },
];
