function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    // Hide all sections except the first one by default
    const sections = document.querySelectorAll(".content-section");
    sections.forEach((section, index) => {
        if (index !== 0) section.classList.remove("active");
    });
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}