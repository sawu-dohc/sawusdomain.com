function positionTooltip(element, tooltip) {
    const rect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    let top = rect.top + window.scrollY;
    let left = rect.left + window.scrollX;

    if (left + tooltipRect.width > window.innerWidth) {
        left = rect.left - tooltipRect.width - 10;
    } else {
        left = rect.left + 100;
    }

    if (top + tooltipRect.height > window.innerHeight) {
        top = window.innerHeight - tooltipRect.height - 10;
    }

    tooltip.style.top = top + "px";
    tooltip.style.left = (left + 50) + "px";
}

function showTooltip(tooltip) {
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';
}

function hideTooltip(tooltip) {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
}







