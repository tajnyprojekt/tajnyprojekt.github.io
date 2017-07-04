var projects = new Vue({
    el: '#projects-container',
    data: {
        projectsJsonUrl: 'resources/data/projects.json',
        projects: [],
        currentProjectIndex: 0,
        currentProject: {}
    },
    created: function () {
      this.loadProjects();
    },
    methods: {

        updateCurrentProject: function() {
            this.currentProject = this.projects[this.currentProjectIndex];
        },

        loadProjects: function () {
            $.getJSON(this.projectsJsonUrl, function(data) {
                this.projects = data;
                if(this.projects.length > 0) {
                    this.updateCurrentProject();
                }
            }.bind(this));
        },

        nextProject: function () {
            this.currentProjectIndex++;
            if(this.currentProjectIndex >= this.projects.length) {
                this.currentProjectIndex = 0;
            }
            this.updateCurrentProject();
        },

        previousProject: function () {
            this.currentProjectIndex--;
            if(this.currentProjectIndex < 0) {
                this.currentProjectIndex = this.projects.length - 1;
            }
            this.updateCurrentProject();
        }
    }
});