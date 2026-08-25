document.addEventListener('DOMContentLoaded', function() {

    // ===== TYPING EFFECT =====
    const typingElement = document.getElementById('typingText');
    const texts = ['CREATED BY ABEL PUTRA'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    function typeEffect() {
        const currentText = texts[textIndex];
        
        if (!isDeleting) {
            // Mengetik
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                // Selesai mengetik, jeda sebelum delete
                setTimeout(() => {
                    isDeleting = true;
                    typingSpeed = 40;
                    typeEffect();
                }, 2000);
                return;
            }
        } else {
            // Menghapus
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                // Selesai menghapus
                isDeleting = false;
                typingSpeed = 80;
                // Reset ke awal untuk looping
                setTimeout(() => {
                    typeEffect();
                }, 500);
                return;
            }
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    // ===== ANIMASI MARQUEE SMOOTH =====
const track = document.querySelector('.announcement-track');
let isPaused = false;

// Pause saat hover (sudah di CSS, ini tambahan untuk performance)
track.addEventListener('mouseenter', function() {
    this.style.animationPlayState = 'paused';
});

track.addEventListener('mouseleave', function() {
    this.style.animationPlayState = 'running';
});

// Reset animasi jika tab tidak aktif (improve performance)
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        track.style.animationPlayState = 'paused';
    } else {
        track.style.animationPlayState = 'running';
    }
});

    // Mulai efek mengetik setelah delay 1 detik
    setTimeout(typeEffect, 1000);

    // ===== HAMBURGER MENU =====
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
// ============================================================
// ===== ANIMASI SCROLL REVEAL - TANPA FOOTER =====
// ============================================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -30px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// ===== SEMUA ELEMEN YANG AKAN DIANIMASI (FOOTER DIHAPUS) =====
const animateElements = document.querySelectorAll(
    // Hero
    '.hero-content, .hero-visual, .hero-stats, .hero-actions, .hero-badge, .hero-title, .hero-desc, ' +
    // Profil
    '.profil-card, .profil-grid, .section-header, ' +
    // Akademik
    '.akademik-item, .akademik-wrapper, ' +
    // Galeri
    '.galeri-item, .galeri-box, .galeri-footer, ' +
    // Sambutan Kepala Sekolah
    '.sambutan-container, .sambutan-foto, .sambutan-text, .foto-profile, .foto-nama, ' +
    // Kontak
    // ✅ BENAR
'.kontak-container, .kontak-info, .kontak-form, .info-item, ' +
    //discord
      '.discord-profile, .profile-left, .profile-right, .profile-container, ' +
       // ===== STRUKTUR KELAS =====
    '.struktur-card, .siswa-item, .struktur-grid, .siswa-footer, .btn-siswa'
    // ❌ FOOTER DIHAPUS DARI SINI!
);

// Set initial state
animateElements.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});
    // ===== HOVER EFEK GALERI =====
    document.querySelectorAll('.galeri-placeholder').forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
            this.style.boxShadow = '0 10px 40px rgba(0,0,0,0.06)';
        });
        el.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // ===== TOMBOL KIRIM =====
    const sendBtn = document.querySelector('.btn-send');
    if (sendBtn) {
        sendBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const form = this.closest('.kontak-form');
            const inputs = form.querySelectorAll('input, textarea');
            let empty = false;
            inputs.forEach(inp => {
                if (!inp.value.trim()) empty = true;
            });
            if (empty) {
                alert('Mohon isi semua field terlebih dahulu.');
            } else {
                alert('✓ Pesan Anda telah terkirim! (simulasi)');
                inputs.forEach(inp => inp.value = '');
            }
        });
    }

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 80) {
            navbar.style.boxShadow = '0 8px 40px rgba(0,0,0,0.06)';
            navbar.style.border = '1px solid rgba(0,0,0,0.08)';
        } else {
            navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.04)';
            navbar.style.border = '1px solid rgba(0,0,0,0.1)';
        }
    });
// ===== FOTBAR ANIMASI SCROLL =====
const fotbarObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.fotbar-title, .fotbar-subtitle, .fotbar-quote, .fotbar-date').forEach(el => {
                el.classList.add('visible');
            });
        }
    });
}, { threshold: 0.60 });

const fotbarSection = document.querySelector('.fotbar-section');
if (fotbarSection) {
    fotbarObserver.observe(fotbarSection);
}

    console.log('✦ SMA 9 MANDAU — Website dengan animasi mengetik siap ✦');
});
// ===== EFEK BLUR + FADE PER SECTION =====
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Saat masuk layar: muncul
            entry.target.classList.remove('hidden');
            entry.target.classList.add('visible');
        } else {
            // Saat keluar layar: blur + fade
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');
        }
    });
}, {
    threshold: 0.3,  // Muncul saat 30% elemen terlihat
    rootMargin: '0px 0px -50px 0px'
});

// Daftar section yang mau dikasih efek
document.querySelectorAll(
    '.hero, .profil, .akademik, .galeri, .struktur-kelas, ' +
    '.sambutan-section, .fotbar-section, .kontak, .discord-profile, .roadmap-section, .gallery-showcase'  // ← TAMBAHKAN roadmap-section
).forEach(section => {
    section.classList.add('scroll-section', 'hidden');
    sectionObserver.observe(section);
});
// ===== DARK MODE =====
const darkToggle = document.getElementById('darkModeToggle');

// Cek preferensi user
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkToggle.textContent = '☀️';
}

darkToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = '☀️';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        this.textContent = '🌙';
        localStorage.setItem('darkMode', 'disabled');
    }
});

// ===== LIGHTBOX GALERI =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');
const lightboxClose = document.querySelector('.lightbox-close');

let typingTimeout = null;

// ===== TYPING EFFECT =====
function typeText(text, element, speed = 45) {
    if (typingTimeout) {
        clearTimeout(typingTimeout);
    }
    
    element.innerHTML = '';
    let charIndex = 0;

    function typeChar() {
        if (charIndex < text.length) {
            element.innerHTML = text.substring(0, charIndex + 1) + '<span class="typing-cursor active">|</span>';
            charIndex++;
            typingTimeout = setTimeout(typeChar, speed);
        } else {
            element.innerHTML = text;
        }
    }

    typeChar();
}

// ===== KLIK GALERI =====
document.querySelectorAll('.galeri-item').forEach(item => {
    item.addEventListener('click', function() {
        const image = this.querySelector('.galeri-image');
        const overlay = this.querySelector('.galeri-overlay');
        
        const title = overlay.querySelector('h4')?.textContent || 'Galeri';
        const desc = overlay.querySelector('p')?.textContent || '';
        
        const bgImage = image.style.backgroundImage;
        const url = bgImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
        
        // Deskripsi panjang untuk tester
        const longDesc = `${desc} — Ini adalah momen berharga di SMA 9 MANDAU. Kami selalu berusaha memberikan pengalaman terbaik bagi seluruh siswa. Kegiatan ini merupakan bagian dari program pengembangan karakter dan bakat siswa. Kami percaya bahwa setiap momen adalah kesempatan untuk belajar dan tumbuh bersama. Teruslah berkarya dan berprestasi! 🚀✨`;
        
        lightboxImg.src = url;
        lightboxTitle.textContent = title;
        lightboxDesc.innerHTML = '';
        
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            typeText(longDesc, lightboxDesc, 50);
        }, 400);
    });
});

// ===== CLOSE LIGHTBOX =====
function closeLightbox() {
    lightbox.classList.remove('show');
    document.body.style.overflow = 'auto';
    
    if (typingTimeout) {
        clearTimeout(typingTimeout);
    }
}

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
// ===== PROFILE SLIDER =====
const slider = document.getElementById('profileSlider');
const slides = document.querySelectorAll('.profile-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevProfile');
const nextBtn = document.getElementById('nextProfile');
let currentIndex = 0;
const totalSlides = slides.length;

function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    
    currentIndex = index;
    
    // Geser slider
    slider.style.transform = `translateX(-${index * 100}%)`;
    
    // Update aktif
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Event listeners untuk tombol
prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});

// Event listeners untuk dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        goToSlide(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
        goToSlide(currentIndex + 1);
    }
});

// Swipe support (touch)
let touchStartX = 0;
let touchEndX = 0;

const sliderContainer = document.querySelector('.profile-slider-container');

sliderContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

sliderContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            goToSlide(currentIndex + 1);
        } else {
            goToSlide(currentIndex - 1);
        }
    }
}, { passive: true });
// ===== PARTIKEL KLIK HITAM ELEGAN =====
document.addEventListener('click', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    
    // Jumlah partikel (8-12 partikel)
    const particleCount = Math.floor(Math.random() * 5) + 8;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Ukuran random
        const size = Math.floor(Math.random() * 5) + 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Posisi awal di klik
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        // Arah gerakan random
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.floor(Math.random() * 120) + 60;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        // Durasi random
        const duration = (Math.random() * 0.4) + 0.6;
        particle.style.animationDuration = duration + 's';
        
        // Tambahkan ke body
        document.body.appendChild(particle);
        
        // Hapus setelah animasi selesai
        setTimeout(() => {
            particle.remove();
        }, duration * 1000 + 100);
    }
});
// ===== POPUP SISWA =====
const siswaPopup = document.getElementById('siswaPopup');
const openSiswaBtn = document.getElementById('openSiswaPopup');  // ← GANTI NAMA
const closeSiswaBtn = document.getElementById('closeSiswaPopup');
const siswaPopupGrid = document.getElementById('siswaPopupGrid');

// Generate 26 siswa (11-36) — TIDAK NGULANG dari 1
function generateSiswa() {
    siswaPopupGrid.innerHTML = '';
    for (let i = 11; i <= 36; i++) {
        const div = document.createElement('div');
        div.className = 'siswa-popup-item';
        div.innerHTML = `
            <img src="images/avatar-ig.jpg" alt="Siswa ${i}" />
            <span>Siswa ${i}</span>
        `;
        siswaPopupGrid.appendChild(div);
    }
}

// Buka popup
if (openSiswaBtn) {
    openSiswaBtn.addEventListener('click', function() {
        generateSiswa();
        siswaPopup.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
}

// Tutup popup
function closeSiswaPopup() {
    siswaPopup.classList.remove('show');
    document.body.style.overflow = 'auto';
}

if (closeSiswaBtn) {
    closeSiswaBtn.addEventListener('click', closeSiswaPopup);
}

// Klik di luar popup
siswaPopup.addEventListener('click', function(e) {
    if (e.target === this) {
        closeSiswaPopup();
    }
});

// Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeSiswaPopup();
    }
});
// ===== PEMUTAR MUSIK SPOTIFY (PLAY/PAUSE + PROGRESS) =====
const bgMusic = document.getElementById('bgMusic');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const progressBar = document.getElementById('progressBar');
const progressContainer = document.getElementById('progressContainer');
const currentTimeDisplay = document.getElementById('currentTime');

// Fungsi Play / Pause
playBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        bgMusic.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
});

// Update Progress Bar dan Waktu saat lagu diputar
bgMusic.addEventListener('timeupdate', () => {
    const percent = (bgMusic.currentTime / bgMusic.duration) * 100;
    progressBar.style.width = percent + '%';
    
    // Update menit:detik
    const minutes = Math.floor(bgMusic.currentTime / 60);
    const seconds = Math.floor(bgMusic.currentTime % 60);
    currentTimeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

// Klik pada progress bar untuk loncat ke waktu tertentu
progressContainer.addEventListener('click', (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    bgMusic.currentTime = pos * bgMusic.duration;
});

// Reset icon saat lagu selesai
bgMusic.addEventListener('ended', () => {
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    progressBar.style.width = '0%';
    currentTimeDisplay.textContent = '0:00';
});
// ===== ROADMAP / TIMELINE =====
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineProgress = document.getElementById('timelineProgress');

// ===== EFEK BLUR + FADE PER ITEM TIMELINE =====
const timelineItemObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Saat masuk layar: muncul jernih
            entry.target.classList.remove('fade-out');
            entry.target.classList.add('visible');
        } else {
            // Saat keluar layar: blur + fade
            entry.target.classList.remove('visible');
            entry.target.classList.add('fade-out');
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
});

// Terapkan ke setiap timeline-item
timelineItems.forEach(item => {
    item.classList.add('fade-out'); // State awal: blur
    timelineItemObserver.observe(item);
});

// ===== GARIS PROGRESS BERGERAK =====
function updateTimelineProgress() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    let progress = 0;
    if (rect.top < windowHeight && rect.bottom > 0) {
        const totalScrollDistance = rect.height + windowHeight;
        const scrolled = (windowHeight - rect.top) / totalScrollDistance;
        progress = Math.min(100, Math.max(0, scrolled * 100));
    }
    
    timelineProgress.style.height = progress + '%';
}

// Jalankan saat scroll
window.addEventListener('scroll', updateTimelineProgress);
window.addEventListener('resize', updateTimelineProgress);

// Jalankan sekali saat load
setTimeout(updateTimelineProgress, 300);
// ===== GALLERY SHOWCASE - EFEK BLUR + FADE PER ITEM =====
const galleryItems = document.querySelectorAll('.gallery-show-item');
const galleryProgress = document.getElementById('galleryProgress');
const galleryDots = document.querySelectorAll('.gallery-dot');

// Observer untuk item gallery (blur + fade saat keluar/masuk layar)
const galleryItemObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Masuk layar: jernih + muncul
            entry.target.classList.remove('hidden');
            entry.target.classList.add('visible');
            
            // Update titik
            const index = Array.from(galleryItems).indexOf(entry.target);
            galleryDots.forEach((dot, i) => {
                if (i <= index) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        } else {
            // Keluar layar: blur + fade
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');
        }
    });
}, {
    threshold: 0.25,  // 25% elemen terlihat baru aktif
    rootMargin: '0px 0px -50px 0px'
});

// Apply ke setiap item
galleryItems.forEach(item => {
    item.classList.add('hidden'); // State awal: blur
    galleryItemObserver.observe(item);
});

// ===== GARIS PROGRESS BERGERAK =====
function updateGalleryProgress() {
    const container = document.querySelector('.gallery-showcase-container');
    if (!container || !galleryProgress) return;

    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    let progress = 0;
    if (rect.top < windowHeight && rect.bottom > 0) {
        const totalScrollDistance = rect.height + windowHeight;
        const scrolled = (windowHeight - rect.top) / totalScrollDistance;
        progress = Math.min(100, Math.max(0, scrolled * 100));
    }
    
    galleryProgress.style.height = progress + '%';
}

// Jalankan saat scroll
window.addEventListener('scroll', function() {
    updateGalleryProgress();
    updateTimelineProgress();
});

window.addEventListener('resize', function() {
    updateGalleryProgress();
    updateTimelineProgress();
});

setTimeout(function() {
    updateGalleryProgress();
    updateTimelineProgress();
}, 300);