/**
 * Guapa 2026 - Interactive Experience
 * Author: Antigravity
 * 
 * --- USAGE GUIDE ---
 * 
 * 1. ADDING PHOTOS:
 *    - Put photos in the 'photos' folder.
 *    - Update the 'CHAPTERS' constant in this file (app.js) with the new filenames.
 * 
 * 2. CHANGING THE SONG:
 *    - Replace 'song/Glance.mp3' with your new file.
 *    - Update 'CONFIG.songPath' below if the filename changes.
 * 
 * 3. DEPLOYING TO GITHUB PAGES:
 *    - Push this code to a GitHub repository.
 *    - Go to Settings > Pages.
 *    - Select 'None' -> 'main' branch -> '/root' folder -> Save.
 *    - Wait for the link to appear (e.g., yourname.github.io/guapa2026).
 */

// --- Configuration ---
const CONFIG = {
    songPath: 'song/Glance.mp3',
    scrollThreshold: 0.2
};

// --- Photo Grouping Logic (Based on Filenames provided) ---
// Structure: WhatsApp Image 2026-02-09 at XX.XX.XX PM.jpeg
// We will manually group them or use regex if pattern allows.
// Since file list is static, we can hardcode the groupings to ensure perfect storytelling.
// Using the "Newest -> Oldest" order from the prompt description.

const CHAPTERS = [
    {
        id: 'chapter-1',
        title: 'Today',
        subtitle: 'Present Happiness',
        lyric: '"In the quiet moments, I find my home..."',
        effect: 'petals',
        photos: [
            // Newest photos (Top of the list)
            'WhatsApp Image 2026-02-09 at 2.29.57 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.30.51 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.31.19 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.31.48 PM (1).jpeg',
            'WhatsApp Image 2026-02-09 at 2.31.48 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.33.31 PM.jpeg'
        ]
    },
    {
        id: 'chapter-2',
        title: 'Our Adventures',
        subtitle: 'Costa Rica & Beyond',
        lyric: '"Mountains climbed and oceans crossed..."',
        effect: 'petals',
        photos: [
            // Outdoor / Adventure context inferred from list position
            'WhatsApp Image 2026-02-09 at 2.34.17 PM (1).jpeg',
            'WhatsApp Image 2026-02-09 at 2.34.17 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.34.40 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.35.22 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.35.52 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.36.28 PM.jpeg'
        ]
    },
    {
        id: 'chapter-3',
        title: 'Texas Days',
        subtitle: 'Boba & Roadtrips',
        lyric: '"City lights and late night drives..."',
        effect: 'bubbles', // Special effect: boba bubbles
        photos: [
            'WhatsApp Image 2026-02-09 at 2.37.22 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.38.00 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.38.18 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.38.45 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.38.57 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.39.34 PM.jpeg'
        ]
    },
    {
        id: 'chapter-4',
        title: 'With you everithing is..',
        subtitle: 'Elegance & Magic',
        lyric: '"Dancing in the golden light..."',
        effect: 'sparkles', // Special effect: sparkles
        photos: [
            // Formal/Event context
            'WhatsApp Image 2026-02-09 at 2.40.08 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.40.44 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.41.52 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.42.02 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.42.38 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.43.17 PM.jpeg'
        ]
    },
    {
        id: 'chapter-5',
        title: 'My Bluebonnet',
        subtitle: 'The Heart of It All',
        lyric: '"You are my bluebonnet spring..."', // Chorus integration
        effect: 'blue-petals', // Special emotional effect
        photos: [
            // Bluebonnet field photos - ensure ONLY Bluebonnet photos here
            'WhatsApp Image 2026-02-09 at 2.43.36 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.43.52 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.44.14 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.44.34 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.44.54 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.45.04 PM.jpeg'
        ]
    },
    {
        id: 'chapter-6',
        title: 'Memories',
        subtitle: 'Where We Started',
        lyric: '"Looking back on how we grew..."',
        effect: 'nostalgia', // Warm atmosphere
        photos: [
            // Oldest photos & leftovers
            'WhatsApp Image 2026-02-09 at 2.45.30 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.45.44 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.45.56 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.46.19 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.46.31 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.46.47 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.47.02 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.47.27 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.47.40 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.47.52 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.48.15 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.48.32 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.48.45 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.56.17 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.56.37 PM.jpeg',
            'WhatsApp Image 2026-02-09 at 2.56.53 PM.jpeg'
        ]
    }
];

// --- State ---
let currentChapterIndex = -1;
let isPlaying = false;

// --- Elements ---
const introScreen = document.getElementById('intro-screen');
const startBtn = document.getElementById('start-btn');
const mainContainer = document.getElementById('main-container');
const chaptersWrapper = document.getElementById('chapters-wrapper');
const bgMusic = document.getElementById('bg-music');
const muteBtn = document.getElementById('mute-btn');
const letterModal = document.getElementById('letter-modal');
const openLetterBtn = document.getElementById('open-letter-btn');
const closeModalBtn = document.querySelector('.close-modal');
const introCanvas = document.getElementById('intro-canvas');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    particleSystem.init('intro-canvas');
    renderChapters();
    setupEventListeners();
    setupIntersectionObserver();
    initFooterPetals();
});

function setupEventListeners() {
    startBtn.addEventListener('click', startExperience);

    muteBtn.addEventListener('click', toggleAudio);

    openLetterBtn.addEventListener('click', () => {
        letterModal.classList.remove('hidden');
    });

    closeModalBtn.addEventListener('click', () => {
        letterModal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target === letterModal) {
            letterModal.classList.add('hidden');
        }
    });

    // Lightbox listeners
    document.getElementById('lightbox').addEventListener('click', (e) => {
        if (e.target.id === 'lightbox' || e.target.classList.contains('close-lightbox')) {
            document.getElementById('lightbox').classList.add('hidden');
        }
    });
}

function startExperience() {
    // 1. Play Audio
    bgMusic.volume = 0.5;
    bgMusic.play().then(() => {
        isPlaying = true;
        updateMuteIcon();
    }).catch(err => console.log('Autoplay prevented', err));

    // 2. Hide Intro with animation
    introScreen.style.opacity = '0';
    setTimeout(() => {
        introScreen.style.display = 'none';

        // 3. Reveal Main Content
        mainContainer.classList.remove('hidden');
        mainContainer.classList.add('visible');

        // 4. Trigger first chapter animation slightly later
        const firstChapter = document.querySelector('.chapter-section');
        if (firstChapter) firstChapter.classList.add('visible');
    }, 1000);
}

function toggleAudio() {
    if (bgMusic.paused) {
        bgMusic.play();
        isPlaying = true;
    } else {
        bgMusic.pause();
        isPlaying = false;
    }
    updateMuteIcon();
}

function updateMuteIcon() {
    const icon = document.getElementById('sound-icon');
    icon.textContent = bgMusic.paused ? '🔇' : '🔈';
}

// --- Rendering ---
function renderChapters() {
    CHAPTERS.forEach((chapter, index) => {
        const section = document.createElement('section');
        section.id = chapter.id;
        section.className = 'chapter-section';
        section.dataset.effect = chapter.effect;

        section.innerHTML = `
            <div class="chapter-header">
                <h2 class="chapter-title">${chapter.title}</h2>
                <p class="chapter-subtitle">${chapter.subtitle}</p>
                <p class="chapter-lyric">${chapter.lyric}</p>
            </div>
            <div class="gallery-grid">
                ${chapter.photos.map(photo => `
                    <div class="photo-card" onclick="openLightbox('photos/${photo}')">
                        <img src="photos/${photo}" loading="lazy" alt="Memory from ${chapter.title}">
                    </div>
                `).join('')}
            </div>
        `;

        chaptersWrapper.appendChild(section);
    });
}

// --- Intersection Observer (Scroll Reveals) ---
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Create particles specific to this chapter
                const effect = entry.target.dataset.effect;
                if (effect) {
                    particleSystem.setEffect(effect);
                }
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.chapter-section').forEach(section => {
        observer.observe(section);
    });
}

// --- Footer Petal Accumulation ---
function initFooterPetals() {
    window.addEventListener('scroll', () => {
        const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        if (scrollPercent > 0.9) {
            const letterSection = document.getElementById('letter-section');
            if (letterSection) {
                letterSection.style.opacity = Math.min(1, (scrollPercent - 0.9) * 10);
            }
        }
    });
}


// --- Lightbox Logic ---
// --- Lightbox Logic ---
let currentLightboxPhotos = [];
let currentLightboxIndex = 0;

window.openLightbox = function (src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');

    // Find context
    // We need to know which chapter this photo belongs to for navigation
    // Simple lookup: iterate chapters
    for (const chapter of CHAPTERS) {
        const index = chapter.photos.findIndex(p => `photos/${p}` === src || p === src); // handle potential path prefix issues
        if (index !== -1) {
            currentLightboxPhotos = chapter.photos;
            currentLightboxIndex = index;
            break;
        }
    }

    updateLightboxImage();
    lightbox.classList.remove('hidden');
}

function updateLightboxImage() {
    const img = document.getElementById('lightbox-img');
    const photo = currentLightboxPhotos[currentLightboxIndex];
    img.src = `photos/${photo}`; // Ensure path prefix
}

function nextImage(e) {
    if (e) e.stopPropagation();
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxPhotos.length;
    updateLightboxImage();
}

function prevImage(e) {
    if (e) e.stopPropagation();
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxPhotos.length) % currentLightboxPhotos.length;
    updateLightboxImage();
}

// Global listeners for lightbox nav
document.addEventListener('keydown', (e) => {
    if (document.getElementById('lightbox').classList.contains('hidden')) return;
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') document.getElementById('lightbox').classList.add('hidden');
});

// Touch Swipe for Lightbox
let touchStartX = 0;
let touchEndX = 0;
const lightboxEl = document.getElementById('lightbox');

lightboxEl.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

lightboxEl.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    if (touchEndX < touchStartX - 50) nextImage();
    if (touchEndX > touchStartX + 50) prevImage();
}


// --- Advanced Particle System ---
const particleSystem = {
    particles: [],
    canvas: null,
    ctx: null,
    activeEffect: 'petals',
    ambientCtx: null,
    ambientParticles: [],

    init(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');

        // Ambient canvas
        const ambientCanvas = document.getElementById('ambient-canvas');
        if (ambientCanvas) {
            this.ambientCtx = ambientCanvas.getContext('2d');
            this.initGlobalAmbient(ambientCanvas);
        }

        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.createParticles();
        this.animate();
    },

    initGlobalAmbient(canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Initial low density
        this.ambientParticles = [];
        for (let i = 0; i < 10; i++) {
            this.spawnAmbientParticle(canvas);
        }
    },

    spawnAmbientParticle(canvas, forceBottom = false) {
        this.ambientParticles.push({
            x: Math.random() * canvas.width,
            y: forceBottom ? canvas.height + 10 : Math.random() * canvas.height, // Spawn everywhere initially or at bottom
            size: Math.random() * 5 + 2, // Bigger petals
            speedY: Math.random() * 1 + 0.5,
            speedX: Math.random() * 2 - 1,
            type: Math.random() > 0.8 ? 'heart' : 'petal',
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 2 - 1,
            color: Math.random() > 0.5 ? 'rgba(220, 20, 60, ' : 'rgba(255, 192, 203, ' // Partial color string
        });
    },

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        if (this.ambientCtx) {
            this.ambientCtx.canvas.width = window.innerWidth;
            this.ambientCtx.canvas.height = window.innerHeight;
        }
    },

    // ... setEffect, createParticles, resetParticle same ...
    setEffect(effectName) {
        if (this.activeEffect === effectName) return;
        this.activeEffect = effectName;
        this.particles.forEach(p => this.resetParticle(p, true));
    },

    createParticles() {
        // Pool for active chapter effects
        const count = window.innerWidth < 768 ? 30 : 60;
        for (let i = 0; i < count; i++) {
            this.particles.push(this.resetParticle({}));
        }
    },

    resetParticle(p, morph = false) {
        // ... (reuse existing logic from previous step, but keep it concise here if I can't see it all. 
        // I will re-implement the resetParticle logic to be safe and ensure it matches the previous tool call's logic)
        p.x = Math.random() * this.canvas.width;
        p.y = morph ? Math.random() * this.canvas.height : -10;
        p.size = Math.random() * 5 + 2;
        p.speedY = Math.random() * 1 + 0.5;
        p.speedX = Math.random() * 1 - 0.5;
        p.opacity = 0;
        p.targetOpacity = Math.random() * 0.6 + 0.2;

        if (this.activeEffect === 'bubbles') {
            p.type = 'bubble';
            p.color = `rgba(200, 230, 255, 0.3)`;
            p.size = Math.random() * 8 + 4;
            p.speedY = - (Math.random() * 1.5 + 0.5);
            if (!morph && p.y < 0) p.y = this.canvas.height + 10;
        } else if (this.activeEffect === 'sparkles') {
            p.type = 'sparkle';
            p.color = `rgba(255, 215, 0, ${Math.random()})`;
            p.size = Math.random() * 3;
            p.speedY = Math.random() * 0.5 + 0.1;
        } else if (this.activeEffect === 'blue-petals') {
            p.type = 'petal';
            p.color = `rgba(100, 149, 237, 0.6)`;
        } else if (this.activeEffect === 'nostalgia') {
            p.type = 'dust';
            p.color = `rgba(210, 180, 140, 0.4)`;
        } else {
            if (this.activeEffect === 'petals' && Math.random() > 0.95) {
                p.type = 'butterfly';
                p.color = 'rgba(200, 230, 255, 0.8)';
                p.size = Math.random() * 4 + 3;
                p.speedX = Math.random() * 2 - 1;
            } else {
                p.type = 'petal';
                p.color = Math.random() > 0.5 ? 'rgba(255, 192, 203, 0.6)' : 'rgba(255, 255, 255, 0.5)';
            }
        }
        return p;
    },

    update() {
        // 1. Chapter Particles
        this.particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.opacity < p.targetOpacity) p.opacity += 0.01;

            const isFloatingUp = p.speedY < 0;
            if (!isFloatingUp && p.y > this.canvas.height) this.resetParticle(p);
            if (isFloatingUp && p.y < -10) this.resetParticle(p);
        });

        // 2. Ambient & Footer Accumulation Logic
        if (this.ambientParticles) {
            // Scroll reactive density
            const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);

            // Target count increases with scroll: 10 -> 200
            const targetCount = 10 + (scrollPercent * 300); // Drastic increase at end

            // Spawn if needed
            if (this.ambientParticles.length < targetCount && Math.random() > 0.5) {
                this.spawnAmbientParticle(this.ambientCtx.canvas, scrollPercent > 0.9); // Spawn at bottom if near end for "rising" effect
            }

            // Cleanup extra if scrolling up (optional, lazy cleanup)
            if (this.ambientParticles.length > targetCount + 20) {
                this.ambientParticles.pop();
            }

            this.ambientParticles.forEach(p => {
                // If near bottom (scroll > 0.9), petals float UP from footer
                if (scrollPercent > 0.9) {
                    p.y -= Math.abs(p.speedY) * 2; // Fast rise
                    p.x += Math.sin(p.y * 0.01) * 1;
                    if (p.y < 0) {
                        p.y = window.innerHeight; // Recycle to bottom
                        p.x = Math.random() * window.innerWidth;
                    }
                } else {
                    // Normal fall
                    p.y += p.speedY;
                    p.x += Math.sin(p.y * 0.005) * 0.5;
                    p.rotation += p.rotationSpeed;

                    if (p.y > window.innerHeight) {
                        p.y = -10;
                        p.x = Math.random() * window.innerWidth;
                    }
                }
            });
        }
    },

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles.forEach(p => this.drawShape(this.ctx, p));

        if (this.ambientCtx) {
            const ac = this.ambientCtx.canvas;
            this.ambientCtx.clearRect(0, 0, ac.width, ac.height);

            // If at footer, draw semi-opaque background overlay
            const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            if (scrollPercent > 0.95) {
                // Fade to accumulated petal color (deep red/pink)
                const opacity = (scrollPercent - 0.95) * 20; // 0 to 1
                this.ambientCtx.fillStyle = `rgba(45, 27, 34, ${Math.min(1, opacity)})`; // Match --bg-main or darker
                this.ambientCtx.fillRect(0, 0, ac.width, ac.height);
            }

            this.ambientParticles.forEach(p => {
                // Dynamic opacity based on scroll
                const alpha = 0.3 + (scrollPercent * 0.7); // 0.3 -> 1.0
                this.ambientCtx.fillStyle = p.color + alpha + ')';

                this.ambientCtx.save();
                this.ambientCtx.translate(p.x, p.y);
                this.ambientCtx.rotate(p.rotation * Math.PI / 180);

                if (p.type === 'heart') {
                    this.ambientCtx.font = `${p.size * 4}px serif`;
                    this.ambientCtx.fillText('♥', 0, 0);
                } else {
                    // Petal shape
                    this.ambientCtx.beginPath();
                    this.ambientCtx.ellipse(0, 0, p.size, p.size / 2, 0, 0, Math.PI * 2);
                    this.ambientCtx.fill();
                }
                this.ambientCtx.restore();
            });
        }
    },

    drawShape(ctx, p) {
        // ... (reuse existing drawShape)
        if (p.type === 'bubble') {
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fillStyle = 'rgba(255,255,255,0.3)';
            ctx.beginPath();
            ctx.arc(p.x - p.size / 3, p.y - p.size / 3, p.size / 4, 0, Math.PI * 2);
            ctx.fill();
        } else if (p.type === 'sparkle') {
            ctx.fillStyle = p.color;
            ctx.globalCompositeOperation = 'lighter';
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalCompositeOperation = 'source-over';
        } else if (p.type === 'butterfly') {
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.ellipse(p.x - p.size / 2, p.y, p.size, p.size / 1.5, Math.PI / 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(p.x + p.size / 2, p.y, p.size, p.size / 1.5, -Math.PI / 4, 0, Math.PI * 2);
            ctx.fill();
        } else {
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        }
    },

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
};
