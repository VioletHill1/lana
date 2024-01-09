document.getElementById("dropBtn").addEventListener("click", toggleBtn);

function toggleBtn() {
    const dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("active");
}