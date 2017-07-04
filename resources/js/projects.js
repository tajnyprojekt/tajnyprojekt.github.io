var projects = new Vue({
    el: '#projects-container',
    data: {
        projectsJsonUrl: 'resources/data/projects.json',
        projects: [],
        currentProject: {}
    },
    created: function () {
      this.loadProjects();
    },
    methods: {
        loadProjects: function () {
            $.getJSON(this.projectsJsonUrl, function(data) {
                this.projects = data;
                if(this.projects.length > 0) {
                    this.currentProject = this.projects[0];
                }
            }.bind(this));
        }
    }
});