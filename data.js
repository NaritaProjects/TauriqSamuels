const cvData = {
    name: "TAURIQ SAMUELS",
    title: "Software Developer // Adv. Dip (Distinction)",
    location: "Cape Town, Western Cape",
    email: "SamuelsTauriq@gmail.com",
    startDate: "2022-01-01", // Your official start date

    skillLibrary: {
        "Front-End": ["HTML5", "CSS", "JavaScript", "TypeScript", "React", "Angular"],
        "Back-End": ["Java", "C#", "Python", "Kotlin", "ASP.NET", "Node.js"],
        "Database": ["SQL Server", "MySQL", "Oracle", "Firebase"],
        "Methodology & Tools": ["Kanban", "Azure", "Git/GitHub", "Docker", "Jira", "Figma"]
    },

    projects: [
        {
            name: "BondBookZa",
            type: "Financial Infrastructure",
            scale: "Enterprise",
            status: "Coming Soon",
            link: "#",
            desc: "Enterprise-level financial management tool and digital ledger system built using Kanban-driven iterative cycles."
        },
        {
            name: "CandiDreamz",
            type: "Sweet Business",
            scale: "Small",
            status: "Live",
            link: "#",
            desc: "Product-focused landing page and catalog for a local confectionery brand."
        },
        {
            name: "Exclusive Steam Cleaning",
            type: "Cleaning Business",
            scale: "Small",
            status: "Live",
            link: "https://naritaprojects.github.io/Exclusive-Steam-Cleaning/",
            desc: "Minimalist service showcase and basic booking inquiry system."
        },
        {
            name: "ElectroCam",
            type: "Service Portfolio",
            scale: "Small",
            status: "Coming Soon",
            link: "#",
            desc: "GitHub-hosted portfolio for electrical services and site workstations."
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Basic Info Mapping
    document.getElementById('user-name').innerText = cvData.name;
    document.getElementById('user-title').innerText = cvData.title;
    document.getElementById('location-text').innerText = cvData.location;

    const emailEl = document.getElementById('user-email');
    if (emailEl) {
        emailEl.href = `mailto:${cvData.email}`;
    }

    // 2. Dynamic Experience Calculation
    const start = new Date(cvData.startDate);
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    const m = now.getMonth() - start.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < start.getDate())) { years--; }

    const ageDisplay = document.getElementById('age-display');
    if (ageDisplay) {
        ageDisplay.innerHTML = `24 Y/O // ${years}+ YEARS EXP`;
    }

    // 3. Skill Injection
    const skillContainer = document.getElementById('skill-grid');
    if (skillContainer) {
        skillContainer.innerHTML = '';
        for (const [category, skills] of Object.entries(cvData.skillLibrary)) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'skill-category-box';
            categoryDiv.innerHTML = `
                <h4 class="category-title">${category}</h4>
                <div class="category-skills">
                    ${skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
                </div>`;
            skillContainer.appendChild(categoryDiv);
        }
    }

    // 4. Project Injection
    const projectGrid = document.getElementById('project-grid');
    if (projectGrid) {
        cvData.projects.forEach(p => {
            const linkLabel = p.status === "Live" ? "[VIEW_LIVE_SITE]" : `[${p.status.toUpperCase()}]`;
            const isLive = p.status === "Live";
            const linkStyle = isLive ? "color: var(--accent);" : "color: #444; pointer-events: none;";

            projectGrid.innerHTML += `
                <div class="card">
                    <div class="scale-indicator ${p.scale.toLowerCase()}">
                        <span class="dot"></span> ${p.scale.toUpperCase()}
                    </div>
                    <h3>${p.name}</h3>
                    <p style="color: var(--text-dim); font-size: 0.8rem; margin-bottom: 10px;">${p.type}</p>
                    <p style="color: #ccc; line-height: 1.4; font-size: 0.9rem;">${p.desc}</p>
                    <a href="${p.link}" class="nav-link" style="${linkStyle} text-decoration: none; font-family: 'JetBrains Mono'; font-size: 0.75rem; display: block; margin-top: 20px;">
                        ${linkLabel}
                    </a>
                </div>`;
        });
    }
});