document.addEventListener('DOMContentLoaded', () => {
    // --- Login Page Functionality ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const authForms = {
        'alumni': null,
        'student': document.getElementById('student-form'),
        'admin': null,
    };

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const role = btn.getAttribute('data-role');
            tabBtns.forEach(tab => tab.classList.remove('active'));
            btn.classList.add('active');
            for (const key in authForms) {
                if (authForms[key]) {
                    authForms[key].classList.remove('active');
                }
            }
            if (authForms[role]) {
                authForms[role].classList.add('active');
            }
        });
    });

    const studentForm = document.getElementById('student-form');
    if (studentForm) {
        studentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Student registration successful! Redirecting to dashboard...");
            window.location.href = 'dashboard.html';
        });
    }

    // --- Dashboard Modal Functionality & Alumni Data ---
    const profileCards = document.querySelectorAll('.profile-card');
    const modal = document.getElementById('profile-details-modal');
    const modalContent = document.getElementById('modal-profile-content');
    const closeModal = document.querySelector('.close-btn');

    const alumniData = {
        "1": {
            name: "Jane Doe",
            photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop",
            details: "Software Engineer at Google. Expertise in cloud computing and machine learning. Ready to help with career advice and referrals."
        },
        "2": {
            name: "John Smith",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
            details: "Product Manager at Microsoft. Specializes in product lifecycle management and strategic planning. Open to mentorship requests."
        },
        "3": {
            name: "Emily Clark",
            photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
            details: "Data Scientist at Amazon. Passionate about data analytics and visualization. Available to provide referrals for a variety of roles."
        },
        "4": {
            name: "Michael Brown",
            photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
            details: "Senior Engineer at Tesla. Specializes in electric vehicle technology and battery systems. Feel free to connect for insights into the automotive industry."
        },
        "5": {
            name: "Sophia Williams",
            photo: "https://images.unsplash.com/photo-1502823403499-6ccfcfbd4c03?q=80&w=1974&auto=format&fit=crop",
            details: "Research Scientist at NASA. Expert in astrophysics and space exploration. Looking to mentor students interested in STEM fields."
        },
        "6": {
            name: "Olivia Davis",
            photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
            details: "Financial Analyst at Deloitte. Provides expertise in financial modeling and corporate strategy. Can offer guidance on consulting careers."
        },
        "7": {
            name: "Ethan Jones",
            photo: "https://images.unsplash.com/photo-1508214751193-c91834925829?q=80&w=1974&auto=format&fit=crop",
            details: "Aerospace Engineer at SpaceX. Works on rocket propulsion systems. Ready to answer questions about careers in the private space industry."
        },
        "8": {
            name: "Mia Garcia",
            photo: "https://images.unsplash.com/photo-1531746020795-814329e5b174?q=80&w=1964&auto=format&fit=crop",
            details: "Investment Banker at J.P. Morgan. Focuses on mergers and acquisitions. Open to networking with students and alumni interested in finance."
        },
        "9": {
            name: "Liam Rodriguez",
            photo: "https://images.unsplash.com/photo-1503342394128-c1164927f804?q=80&w=1974&auto=format&fit=crop",
            details: "Data Engineer at Netflix. Passionate about big data and building scalable data pipelines. Can provide referrals and career advice."
        },
        "10": {
            name: "Charlotte Evans",
            photo: "https://images.unsplash.com/photo-1542157580-c1157a5ef69e?q=80&w=1974&auto=format&fit=crop",
            details: "UX Designer at Adobe. Specializes in user experience and interface design. Available for portfolio reviews and design career discussions."
        },
        "11": {
            name: "Noah King",
            photo: "https://images.unsplash.com/photo-1509867086884-21f4783307b2?q=80&w=1974&auto=format&fit=crop",
            details: "Network Architect at Cisco. Designs and manages large-scale computer networks. Happy to mentor students in the field of networking and cybersecurity."
        },
        "12": {
            name: "Isabella Hall",
            photo: "https://images.unsplash.com/photo-1517435889370-58c081e81f14?q=80&w=1974&auto=format&fit=crop",
            details: "Senior Analyst at Boeing. Works on financial planning and analysis for major aerospace projects. Can offer insights into corporate finance."
        }
    };

    // --- Dynamic Profile Display ---
    function showProfileModal(profileId) {
        const data = alumniData[profileId];
        if (data) {
            modalContent.innerHTML = `
                <img src="${data.photo}" alt="${data.name} Photo" class="profile-photo">
                <div>
                    <h3>${data.name}</h3>
                    <p>${data.details}</p>
                    <button class="follow-btn">Follow</button>
                    <button class="referral-btn">Need Referral?</button>
                </div>
            `;
            document.getElementById('chat-name').textContent = data.name;
            modal.style.display = 'flex';
        }
    }

    profileCards.forEach(card => {
        card.addEventListener('click', () => {
            const profileId = card.getAttribute('data-profile');
            showProfileModal(profileId);
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }

    // --- Alumni World Map Click Handler ---
    const worldMapImage = document.getElementById('world-map-image');
    if (worldMapImage) {
        worldMapImage.addEventListener('click', () => {
            const keys = Object.keys(alumniData);
            const randomId = keys[Math.floor(Math.random() * keys.length)];
            showProfileModal(randomId);
        });
    }

    // --- Dummy Navigation & Interactions ---
    const navigationLinks = document.querySelectorAll('.nav-links a');
    navigationLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const page = e.target.getAttribute('href');
            if (page.includes('.html')) {
                // Let the browser handle the navigation
            } else {
                e.preventDefault();
                alert(`Redirecting to ${e.target.textContent} page...`);
            }
        });
    });

    const actionBtns = document.querySelectorAll('.job-btn, .event-btn, .match-btn, .pricing-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.textContent;
            alert(`${action} action initiated! (This is a prototype).`);
        });
    });
});