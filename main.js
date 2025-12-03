import './style.css'

console.log('Salient clone loaded')

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuPanel = document.getElementById('mobile-menu-panel');

function toggleMenu() {
    const isHidden = mobileMenu.classList.contains('hidden');

    if (isHidden) {
        // Open menu
        mobileMenu.classList.remove('hidden');
        mobileMenuPanel.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
        setTimeout(() => {
            mobileMenu.classList.remove('opacity-0');
            mobileMenuPanel.classList.remove('scale-95', 'opacity-0');
        }, 10);
    } else {
        // Close menu
        mobileMenu.classList.add('opacity-0');
        mobileMenuPanel.classList.add('scale-95', 'opacity-0');

        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            mobileMenuPanel.classList.add('hidden');
        }, 150); // Match transition duration
    }
}

if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);
if (mobileMenu) mobileMenu.addEventListener('click', toggleMenu);



// Features Section Tab Switching
const featureTabs = document.querySelectorAll('.feature-tab');
const featurePanels = document.querySelectorAll('.feature-panel');

featureTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.target;

        // Update Tabs
        featureTabs.forEach(t => {
            const isSelected = t === tab;
            const titleBtn = t.querySelector('button');

            if (isSelected) {
                t.classList.add('bg-white/10', 'ring-white/10');
                t.classList.remove('ring-transparent');
                titleBtn.classList.add('text-white');
                titleBtn.classList.remove('text-blue-100');
            } else {
                t.classList.remove('bg-white/10', 'ring-white/10');
                t.classList.add('ring-transparent');
                titleBtn.classList.remove('text-white');
                titleBtn.classList.add('text-blue-100');
            }
        });

        // Update Panels
        featurePanels.forEach(panel => {
            if (panel.id === target) {
                panel.classList.remove('hidden');
            } else {
                panel.classList.add('hidden');
            }
        });
    });
});


