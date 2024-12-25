function initializeTooltips() {
    const tooltip = document.getElementById('tooltip');

    document.getElementById('desktop').addEventListener('mouseenter', function (event) {
        const iconElement = event.target.closest('.Icon');
        if (iconElement) {
            const tooltipTextElement = iconElement.querySelector('p');
            tooltip.innerText = tooltipTextElement.innerText;
            positionTooltip(iconElement);
            showTooltip();
        }
    }, true);

    document.getElementById('desktop').addEventListener('mouseleave', function (event) {
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

        // adjust position to prevent overflow on the X-axis
        if (left + tooltipRect.width > window.innerWidth) {
            left = rect.left - tooltipRect.width - 10; 
        } else {
            left = rect.left + 100; 
        }

        // adjust position to prevent overflow on the Y-axis
        if (top + tooltipRect.height > window.innerHeight) {
            top = window.innerHeight - tooltipRect.height - 10; 
        }

        tooltip.style.top = top + "px";
        tooltip.style.left = (left + 50) + "px";
    }

    function showTooltip() {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    }

    function hideTooltip() {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    }
}
