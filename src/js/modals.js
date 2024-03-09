var closeButton1 = document.querySelectorAll(".btn_right_cross");
var closeButton2 = document.querySelectorAll(".cross_tab");
closeButton1.forEach(function(closeButton) {
    closeButton.onclick = function() {
        var modal = this.closest(".modal");
        modal.style.display = "none";
    }
});
closeButton2.forEach(function(closeButton) {
    closeButton.onclick = function() {
        var modal = this.closest(".modal");
        modal.style.display = "none";
    }
})

// INFOS
var modal_infos = document.getElementById("folder_modal_infos");
var btn = document.getElementById("open_folder_modal_infos");
btn.onclick = function() {
    modal_infos.style.display = "block";
}
// CAREER
var modal_career = document.getElementById("folder_modal_career");
var btn = document.getElementById("open_folder_modal_career");
btn.onclick = function() {
    modal_career.style.display = "block";
}
// PROJECTS
var modal_projects = document.getElementById("folder_modal_projects");
var btn = document.getElementById("open_folder_modal_projects");
btn.onclick = function() {
    modal_projects.style.display = "block";
}
// CONTACT
var modal_contact = document.getElementById("folder_modal_contact");
var btn = document.getElementById("open_folder_modal_contact");
btn.onclick = function() {
    modal_contact.style.display = "block";
}

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }