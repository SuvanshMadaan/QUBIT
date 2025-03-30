document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("boxContainer");
    const links = [
        "https://chat.whatsapp.com/JEqbuUlhVEW8TFwqzKaAk2", "https://chat.whatsapp.com/CgMgHWj39wsCJSHZ9qzV4l", "https://chat.whatsapp.com/KIkdejVKm5y7Eh9YcWxugN", "https://chat.whatsapp.com/DU1NqtE9FqEGviiPxdYVKI", "https://chat.whatsapp.com/I4D19GXvRz02D42eYWHCpE", "https://chat.whatsapp.com/KD7iaSyZqeO1Qc8RbVYFe7", "https://chat.whatsapp.com/Kgq5G5zNENOJfDqAM7Xl3G", "https://chat.whatsapp.com/CnjzgZR8z9WHg7NS2N6MsC", "https://chat.whatsapp.com/INt33o6hR4TG7NoaS8myST", "https://chat.whatsapp.com/Hv1LbQCGox9Itk6EM4CBuq", "https://chat.whatsapp.com/L1bWXEdMDUXJ8H8Eb5cY0K", "https://chat.whatsapp.com/I8h0vIum6Gv31b2ceyAeb6", "https://chat.whatsapp.com/IZRNsWe6OV07wTnlgK7jkj", "https://chat.whatsapp.com/DPwqKtXIxAU8AnpHeebode", "https://chat.whatsapp.com/Ib4i5xA154bLR3aHW0dUEh"
    ];

    const texts = [
        { heading: "Coder's General", subheading: "A group for all your coding needs! Connect with peers and Grow together!" },
        { heading: "JOBS", subheading: "Job Hunting made easy!" },
        { heading: "Engineering Jobs", subheading: "Struggling to find an engineering job? Let's connect and land one together!" },
        { heading: "Events", subheading: "Bringing unforgettable events to life—let’s create magic together!" },
        { heading: "Webinars/Seminars", subheading: "Unlock knowledge, connect, and grow with our power-packed webinars & seminars!" },
        { heading: "Networking", subheading: "Connect, collaborate, and grow—network your way to success!" },
        { heading: "Promotions", subheading: "Boost your brand, amplify your reach—let’s make an impact!" },
        { heading: "Courses", subheading: "Learn, upskill, and stay ahead with top-notch courses!" },
        { heading: "Entrepreneurs", subheading: "Fuel your vision, build your empire—entrepreneurs, let’s innovate!" },
        { heading: "Linkedin", subheading:  "Optimize, network, and stand out—make LinkedIn work for you!" },
        { heading: "Internships", subheading: "Kickstart your career with hands-on experience—find the right internship!" },
        { heading: "Study Material", subheading: "Ace your exams with the best study materials at your fingertips!" },
        { heading: "Hackathons", subheading: "Innovate, compete, and code your way to victory at top hackathons!" },
        { heading: "Govt. Jobs", subheading: "Secure your future—stay updated on the latest government job opportunities!" },
        { heading: "General", subheading: "Opportunities, insights, and connections—everything you need in one place!" }
    ];

    for (let i = 0; i < 15; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `<h3>${texts[i].heading}</h3><p>${texts[i].subheading}</p>`;
        box.onclick = () => window.location.href = links[i];
        container.appendChild(box);
    }
});
