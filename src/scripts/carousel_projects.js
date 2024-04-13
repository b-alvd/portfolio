document.addEventListener("DOMContentLoaded", function() {
    let carousel_container = document.querySelector(".carousel_container");
    let current_index = 0;
    let total_items = document.querySelectorAll(".carousel_item").length;
    let item_width = document.querySelector(".carousel_item").clientWidth;
    let project_counter = document.querySelector(".project_counter");

    function move_carousel() {
        carousel_container.style.transform = `translateX(-${current_index * item_width}px)`;
        update_counter()
    }
    
    function prev_project() {
        current_index = (current_index - 1 + total_items) % total_items;
        move_carousel();
    }

    function next_project() {
        current_index = (current_index + 1) % total_items;
        move_carousel();
    }

    function update_counter() {
        project_counter.textContent = `${current_index + 1} / ${total_items}`;
    }

    document.querySelector(".prev_project").addEventListener("click", prev_project);
    document.querySelector(".next_project").addEventListener("click", next_project);

    update_counter();
});
