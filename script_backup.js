// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const contentSections = document.querySelectorAll('.content-section');

    // Function to show section
    function showSection(sectionId) {
        // Hide all sections
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Remove active class from all nav tabs
        navTabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Add active class to clicked nav tab
        const activeTab = document.querySelector(`[data-section="${sectionId}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
    }

    // Add click event listeners to nav tabs
    navTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Simple project link handling - just let links work naturally
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // Let the link work normally - no interference
            console.log('Link clicked:', this.href);
        });
    });

    // Initialize with About section
    showSection('about');
    
    // Update data-section attributes for portfolio
    const portfolioTab = document.querySelector('[data-section="portfolio"]');
    if (portfolioTab) {
        portfolioTab.setAttribute('data-section', 'portfolio');
    }
});

// Enhanced interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.experience-card, .project-card, .education-card, .contact-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(0, 212, 255, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Add typing effect to the name
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const text = nameElement.textContent;
        nameElement.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                nameElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 60);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add parallax effect to background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.container');
        const speed = scrolled * 0.3;
        
        if (parallax) {
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Add enhanced glow effect to logo on hover
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 50px rgba(0, 212, 255, 0.8), inset 0 0 30px rgba(255, 69, 0, 0.6)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 40px rgba(0, 212, 255, 0.6), inset 0 0 30px rgba(255, 69, 0, 0.4)';
        });
    }

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        const activeTab = document.querySelector('.nav-tab.active');
        const tabs = Array.from(document.querySelectorAll('.nav-tab'));
        const currentIndex = tabs.indexOf(activeTab);
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % tabs.length;
            tabs[nextIndex].click();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
            tabs[prevIndex].click();
        }
    });

    // Add scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: rgba(0, 212, 255, 0.2);
        border: 2px solid rgba(0, 212, 255, 0.5);
        border-radius: 50%;
        color: #00d4ff;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        opacity: 0;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
        } else {
            scrollToTopBtn.style.opacity = '0';
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add particle effects
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(0, 212, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            animation: particleFloat 6s linear infinite;
        `;
        
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 6000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 2000);
    
    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Add contact link click handlers
    document.querySelectorAll('.contact-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const linkText = this.textContent;
            
            // Show notification
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(0, 212, 255, 0.9);
                color: white;
                padding: 1rem 2rem;
                border-radius: 8px;
                font-family: 'Orbitron', sans-serif;
                font-weight: 300;
                z-index: 1000;
                box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
                transform: translateX(100%);
                transition: transform 0.3s ease;
            `;
            notification.textContent = `Opening: ${linkText}`;
            document.body.appendChild(notification);
            
            // Animate in
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 100);
            
            // Remove after 3 seconds
            setTimeout(() => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }, 3000);
        });
    });

    // Add photo placeholder click handlers
    document.querySelectorAll('.photo-placeholder').forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.style.display = 'none';
            
            input.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        placeholder.innerHTML = `<img src="${e.target.result}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">`;
                    };
                    reader.readAsDataURL(file);
                }
            });
            
            document.body.appendChild(input);
            input.click();
            document.body.removeChild(input);
        });
    });
});

// Smooth scrolling utility
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

// Scroll to top utility
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}; 

// Audio System with Web Audio API
let audioContext;
let audioSource;
let gainNode;
let oscillator;
let isAudioPlaying = false;
let currentAudioType = 'ambient';

// Audio Controls
const audioToggle = document.getElementById('audioToggle');
const audioType = document.getElementById('audioType');

// Initialize Web Audio API
function initAudioContext() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        gainNode = audioContext.createGain();
        gainNode.connect(audioContext.destination);
        gainNode.gain.value = 0.05; // Very subtle volume
    } catch (e) {
        console.log('Web Audio API not supported');
    }
}

// Generate ambient space sound - more atmospheric like the reference
function createAmbientSound() {
    if (!audioContext) return;
    
    const oscillators = [];
    
    // Create atmospheric drone with multiple layers
    const droneFrequencies = [60, 120, 240, 480]; // Lower, more atmospheric frequencies
    
    droneFrequencies.forEach((freq, index) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioContext.currentTime);
        
        // Add very slow frequency modulation for atmospheric effect
        osc.frequency.setValueAtTime(freq * 1.02, audioContext.currentTime + 4);
        osc.frequency.setValueAtTime(freq * 0.98, audioContext.currentTime + 8);
        osc.frequency.setValueAtTime(freq * 1.01, audioContext.currentTime + 12);
        
        // Low-pass filter for warmth
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, audioContext.currentTime);
        
        gain.gain.setValueAtTime(0.015 / (index + 1), audioContext.currentTime);
        
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(gainNode);
        oscillators.push({ osc, gain, filter });
    });
    
    // Add subtle noise layer for atmosphere
    const noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 2, audioContext.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseBuffer.length; i++) {
        noiseData[i] = (Math.random() - 0.5) * 0.1; // Very subtle noise
    }
    
    const noiseSource = audioContext.createBufferSource();
    const noiseGain = audioContext.createGain();
    const noiseFilter = audioContext.createBiquadFilter();
    
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;
    
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(200, audioContext.currentTime);
    
    noiseGain.gain.setValueAtTime(0.005, audioContext.currentTime);
    
    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(gainNode);
    oscillators.push({ osc: noiseSource, gain: noiseGain, filter: noiseFilter });
    
    return oscillators;
}

// Generate retro sci-fi sound - more like classic sci-fi
function createRetroSound() {
    if (!audioContext) return;
    
    const oscillators = [];
    
    // Create classic sci-fi sound with sawtooth waves
    const frequencies = [80, 160, 320]; // Lower frequencies for retro feel
    
    frequencies.forEach((freq, index) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();
        const lfo = audioContext.createOscillator(); // Low frequency oscillator for modulation
        
        osc.type = 'sawtooth'; // Classic sci-fi sawtooth
        osc.frequency.setValueAtTime(freq, audioContext.currentTime);
        
        // Add LFO modulation for classic sci-fi effect
        lfo.frequency.setValueAtTime(0.5, audioContext.currentTime); // Slow modulation
        lfo.connect(osc.frequency);
        
        // Filter for retro effect
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, audioContext.currentTime);
        
        gain.gain.setValueAtTime(0.02 / (index + 1), audioContext.currentTime);
        
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(gainNode);
        oscillators.push({ osc, gain, filter, lfo });
    });
    
    return oscillators;
}

// Generate space noise - more atmospheric and deep
function createSpaceSound() {
    if (!audioContext) return;
    
    const oscillators = [];
    
    // Create deep space atmosphere
    const frequencies = [40, 80, 160]; // Very low frequencies for space feel
    
    frequencies.forEach((freq, index) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, audioContext.currentTime);
        
        // Add very slow frequency modulation for deep space effect
        osc.frequency.setValueAtTime(freq * 1.05, audioContext.currentTime + 6);
        osc.frequency.setValueAtTime(freq * 0.95, audioContext.currentTime + 12);
        osc.frequency.setValueAtTime(freq * 1.03, audioContext.currentTime + 18);
        
        // High-pass filter to remove DC offset
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(30, audioContext.currentTime);
        
        gain.gain.setValueAtTime(0.025 / (index + 1), audioContext.currentTime);
        
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(gainNode);
        oscillators.push({ osc, gain, filter });
    });
    
    // Add atmospheric reverb-like effect with delay
    const delay = audioContext.createDelay(2.0);
    const delayGain = audioContext.createGain();
    
    delay.delayTime.setValueAtTime(0.3, audioContext.currentTime);
    delayGain.gain.setValueAtTime(0.3, audioContext.currentTime);
    
    delay.connect(delayGain);
    delayGain.connect(gainNode);
    
    // Create a subtle feedback loop for atmosphere
    const feedbackGain = audioContext.createGain();
    feedbackGain.gain.setValueAtTime(0.1, audioContext.currentTime);
    
    delayGain.connect(feedbackGain);
    feedbackGain.connect(delay);
    
    return oscillators;
}
// Generate custom audio from file
function createCustomSound() {
    const customAudio = document.getElementById("customAudio");
    if (!customAudio) return;
    
    customAudio.volume = 0.1;
    customAudio.loop = true;
    
    return [{ 
        osc: customAudio, 
        gain: { gain: { value: 0.1 } },
        start: () => customAudio.play().catch(e => console.log("Custom audio play failed:", e)),
        stop: () => customAudio.pause()
    }];
}
// Generate custom audio from file
function createCustomSound() {
    const customAudio = document.getElementById("customAudio");
    if (!customAudio) return;
    
    customAudio.volume = 0.1; // Adjust volume as needed
    customAudio.loop = true;
    
    return [{ 
        osc: customAudio, 
        gain: { gain: { value: 0.1 } },
        start: () => customAudio.play().catch(e => console.log("Custom audio play failed:", e)),
        stop: () => customAudio.pause()
    }];
}

// Stop current audio
function stopAudio() {
    if (audioSource) {
        audioSource.forEach(({ osc, gain, lfo }) => {
            gain.gain.setValueAtTime(gain.gain.value, audioContext.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
            setTimeout(() => {
                try { 
                    osc.stop(); 
                    if (lfo) lfo.stop();
                } catch (e) {}
            }, 500);
        });
        audioSource = null;
    }
}

// Start audio based on type
function startAudio(type = currentAudioType) {
    if (!audioContext) return;
    
    stopAudio();
    
    switch (type) {
        case 'ambient':
            audioSource = createAmbientSound();
            break;
        case 'retro':
            audioSource = createRetroSound();
            break;
        case 'space':
            audioSource = createSpaceSound();
            break;
        case 'custom':
            audioSource = createCustomSound();
            break;
            audioSource = createSpaceSound();
            break;
    }
    
    if (audioSource) {
        audioSource.forEach(({ osc, lfo, start }) => {
            try { 
                osc.start(); 
                if (lfo) lfo.start();
            } catch (e) {}
        });
    }
}

// Toggle audio on/off
function toggleAudio() {
    if (isAudioPlaying) {
        stopAudio();
        audioToggle.innerHTML = '<i class="fas fa-volume-mute"></i> Audio';
        audioToggle.classList.remove('active');
        isAudioPlaying = false;
    } else {
        startAudio();
        audioToggle.innerHTML = '<i class="fas fa-volume-up"></i> Audio';
        audioToggle.classList.add('active');
        isAudioPlaying = true;
    }
}

// Change audio type
function changeAudioType() {
    const types = ['ambient', 'retro', 'space', 'custom'];
    const currentIndex = types.indexOf(currentAudioType);
    currentAudioType = types[(currentIndex + 1) % types.length];
    
    // Update button text
    const typeLabels = {
        ambient: 'Ambient',
        retro: 'Retro',
        space: 'Space',
        custom: 'Alien Worlds'
    };
    
    audioType.innerHTML = `<i class="fas fa-music"></i> ${typeLabels[currentAudioType]}`;
    
    // If audio is playing, restart with new type
    if (isAudioPlaying) {
        startAudio();
    }
}

// Event listeners for audio controls
audioToggle.addEventListener('click', toggleAudio);
audioType.addEventListener('click', changeAudioType);

// Initialize audio when page loads
document.addEventListener('DOMContentLoaded', function() {
    initAudioContext();
    
    // Enable audio after user interaction (browser requirement)
    document.addEventListener('click', function() {
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume();
        }
    }, { once: true });
}); 