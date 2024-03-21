var closeButtons = document.querySelectorAll(".cross_tab, .btn_right_cross");
closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var modals = document.querySelectorAll(".modal, .notepad_modal");
        modals.forEach(function(modal) {
            modal.style.display = "none";
        });
    });
});

// FOLDER - INFOS
var modal_infos = document.getElementById("folder_modal_infos");
var btn_infos = document.getElementById("open_folder_modal_infos");
btn_infos.addEventListener('dblclick', function() {
    modal_infos.style.display = "block";
});

// FOLDER - CAREER
var modal_career = document.getElementById("folder_modal_career");
var btn_career = document.getElementById("open_folder_modal_career");
btn_career.addEventListener('dblclick', function() {
    modal_career.style.display = "block";
});

// FOLDER - PROJECTS
var modal_projects = document.getElementById("folder_modal_projects");
var btn_projects = document.getElementById("open_folder_modal_projects");
btn_projects.addEventListener('dblclick', function() {
    modal_projects.style.display = "block";
});

// FOLDER - CONTACT
var modal_contact = document.getElementById("folder_modal_contact");
var btn_contact = document.getElementById("open_folder_modal_contact");
btn_contact.addEventListener('dblclick', function() {
    modal_contact.style.display = "block";
});

// WINDOWS
var modal_windows = document.getElementById("modal_windows");
var btn = document.getElementById("open_modal_windows");
btn.onclick = function() {
    modal_windows.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal_windows) {
        modal_windows.style.display = "none";
    }
}

// NOTEPAD - INFOS
var modal_notepad_infos = document.getElementById("modal_notepad_infos");
var btn_notepad_infos = document.getElementById("open_modal_notepad_infos");
btn_notepad_infos.addEventListener('dblclick', function() {
    modal_notepad_infos.style.display = "block";
});
