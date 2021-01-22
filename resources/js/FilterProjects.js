class FilterProjects {
    constructor() {
        this.filterSelection('all')
        this.handleFilter();
    }

    handleFilter() {
        self = this;
        let btnContainer = document.getElementById('filters');
        let btns = btnContainer.getElementsByClassName('filter');
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function(event){
                event.preventDefault();
                let current = document.getElementsByClassName('active');
                current[0].className = current[0].className.replace(' active', '');
                this.className += ' active';
                self.filterSelection( this.dataset.filter );
            });
        }

    }

    filterSelection(filter) {
        console.log(filter);
        let filters = document.getElementsByClassName('project-card');
        for (let i = 0; i < filters.length; i++) {
            this.removeClass(filters[i], 'show');
            if (filters[i].dataset.tag === filter || filter === 'all') {
                this.addClass(filters[i], 'show');
            }
        }
    }

    addClass(element, name) {
        let i, arr1, arr2;
        arr1 = element.className.split(' ');
        arr2 = name.split(' ');
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) === -1) {element.className += ' ' + arr2[i];}
        }
    }

    removeClass(element, name) {
        let i, arr1, arr2;
        arr1 = element.className.split(' ');
        arr2 = name.split(' ');
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(' ');
    }
}
export default FilterProjects;

