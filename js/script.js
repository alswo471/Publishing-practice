window.addEventListener("DOMContentLoaded", function() {
    const menus = document.querySelectorAll(".main-menu > li");
    const subMenus = document.getElementsByClassName("sub_menu");

    for (let i = 0; i < menus.length; i++) {
        menus[i].addEventListener("mouseenter", function() {
            if (!subMenus[i]) {
                return; 
            }

            const sub = subMenus[i];
            sub.classList.remove("dn");
        });

        menus[i].addEventListener("mouseleave", function() {
            if (!subMenus[i]) {
                return; 
            }

            const sub = subMenus[i];
            const classList = sub.classList;
            classList.remove("dn");
            classList.add("dn");
            
        });
    }
});