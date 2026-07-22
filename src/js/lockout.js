// --- PRE-BIRTHDAY COUNTDOWN LOCKOUT ---
(function checkUnlockDate() {
    // Target unlock date: August 9th, 00:00:00 local time
    const currentYear = new Date().getFullYear();
    const unlockDate = new Date(`${currentYear}-08-09T00:00:00`);
    const now = new Date();

    // Query param override for testing (e.g. site.com?preview=true)
    const urlParams = new URLSearchParams(window.location.search);
    const isPreview = urlParams.get('preview') === 'true';

    if (now < unlockDate && !isPreview) {
        window.addEventListener('DOMContentLoaded', () => {
            const overlay = document.createElement('div');
            overlay.id = 'lockout-screen';
            overlay.innerHTML = `
                <div class="lockout-card">
                    <span class="lockout-icon">🛑 🌌</span>
                    <h1 class="lockout-title">Busted, Shivanjali!</h1>
                    <p class="lockout-text">
                        Did you really think you could sneak past cosmic security by scanning early? <strong>Nice try!</strong><br><br>
                        Everything here is locked in an orbital vault until <strong>August 9th</strong>. Patience, birthday girl!
                    </p>
                    <div class="lockout-badge">✦ Vault Unlocks: August 9 ✦</div>
                    <p class="lockout-subtext">P.S. Close the tab and act natural. Harshit is watching. 👀</p>
                </div>
            `;
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden'; // Lock scrolling
        });
    }
})();