document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.getElementById('tooltip');

    document.getElementById('desktop').addEventListener('mouseenter', event => {
        const iconElement = event.target.closest('.Icon');
        if (iconElement) {
            const tooltipTextElement = iconElement.querySelector('p');
            tooltip.innerText = tooltipTextElement.innerText;
            positionTooltip(iconElement);
            showTooltip();
        }
    }, true);

    document.getElementById('desktop').addEventListener('mouseleave', event => {
        const iconElement = event.target.closest('.Icon');
        if (iconElement) {
            hideTooltip();
        }
    }, true);

    function positionTooltip(element) {
        const rect = element.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        let top = rect.top + window.scrollY;
        let left = rect.left + window.scrollX;

        // Adjust position to prevent overflow on the X-axis
        if (left + tooltipRect.width > window.innerWidth) {
            left = rect.left - tooltipRect.width - 10; // Position tooltip on the left side of the icon
        }
        else {
            left = rect.left + 100; // Position tooltip on the right side of the icon
        }

        // Adjust position to prevent overflow on the Y-axis
        if (top + tooltipRect.height > window.innerHeight) {
            top = window.innerHeight - tooltipRect.height - 10; // Adjust top if it overflows
        }

        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left+50}px`;
    }

    function showTooltip() {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    }

    function hideTooltip() {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    }
});
