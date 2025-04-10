let currentPage = 0;
const pages = document.querySelectorAll('.page');

function scrollToPage(pageIndex) {
    pages[pageIndex].scrollIntoView({ behavior: 'smooth' });
    currentPage = pageIndex;
}

// Handle scroll events
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0 && currentPage < pages.length - 1) {
        scrollToPage(currentPage + 1);
    } else if (event.deltaY < 0 && currentPage > 0) {
        scrollToPage(currentPage - 1);
    }
});

function popOut(element) {
    // Reset all boxes to their original size
    document.querySelectorAll('.skill-box').forEach(box => {
        if (box !== element) {
            box.style.transform = 'scale(1)';
        }
    });

    // Toggle the pop-out effect for the clicked box
    if (element.style.transform === 'scale(1.1)') {
        element.style.transform = 'scale(1)';
    } else {
        element.style.transform = 'scale(1.1)';
    }
}