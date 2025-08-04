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
