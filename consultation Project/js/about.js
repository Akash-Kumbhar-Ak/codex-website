// Counter animation script
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".number");
    const speed = 500; // Adjust the speed of the counter

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            // Calculate increment
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target; // Ensure the final value matches the target
            }
        };

        updateCount();
    });
});