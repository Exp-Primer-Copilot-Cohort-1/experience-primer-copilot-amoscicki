function skillsMember() {
    this.skills = ['JavaScript', 'React', 'React Native'];
    this.showSkills = function () {
        console.log(this.skills.join(', '));
    }
}