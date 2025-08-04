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

// Updated startAudio function
function startAudio(type = currentAudioType) {
    if (!audioContext) return;
    
    stopAudio();
    
    switch (type) {
        case "ambient":
            audioSource = createAmbientSound();
            break;
        case "retro":
            audioSource = createRetroSound();
            break;
        case "space":
            audioSource = createSpaceSound();
            break;
        case "custom":
            audioSource = createCustomSound();
            break;
    }
    
    if (audioSource) {
        audioSource.forEach(({ osc, lfo, start }) => {
            try { 
                if (start) {
                    start();
                } else {
                    osc.start(); 
                    if (lfo) lfo.start();
                }
            } catch (e) {}
        });
    }
}

// Updated changeAudioType function
function changeAudioType() {
    const types = ["ambient", "retro", "space", "custom"];
    const currentIndex = types.indexOf(currentAudioType);
    currentAudioType = types[(currentIndex + 1) % types.length];
    
    const typeLabels = {
        ambient: "Ambient",
        retro: "Retro", 
        space: "Space",
        custom: "Alien Worlds"
    };
    
    audioType.innerHTML = `<i class="fas fa-music"></i> ${typeLabels[currentAudioType]}`;
    
    if (isAudioPlaying) {
        startAudio();
    }
}
