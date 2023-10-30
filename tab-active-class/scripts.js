const listOfTabs = document.querySelectorAll(".tab");
const tabsContainer = document.querySelector('.tabs-container');
const panels = document.querySelectorAll('.panel');

tabsContainer.addEventListener('click',(ele) => {
    const clicked = ele.target;

    panels.forEach((pan) => {
        pan.classList.remove("visible")
    });

    listOfTabs.forEach((item) => {
        item.classList.remove("active")
    });
    
    clicked.classList.add("active");

    document.querySelector(`.content-${clicked.dataset.tab}`).classList.add("visible")
})