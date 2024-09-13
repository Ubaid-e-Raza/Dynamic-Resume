var form = document.getElementById('resume-form');
var resumeSection = document.getElementById('resume-section');
var degreeSection = document.getElementById('degree-section');
var addDegreeButton = document.getElementById('add-degree');
addDegreeButton.addEventListener('click', function () {
    var newDegreeEntry = document.createElement('div');
    newDegreeEntry.classList.add('degree-entry');
    newDegreeEntry.innerHTML = "\n    <label for=\"degree\">Degree:</label>\n    <select class=\"degree\" name=\"degree\" required>\n      <option value=\"\">-- Select Degree --</option>\n      <option value=\"Matriculation\">Matriculation</option>\n      <optgroup label=\"Intermediate (F.Sc)\">\n        <option value=\"F.Sc Pre-Engineering\">F.Sc Pre-Engineering</option>\n        <option value=\"F.Sc Pre-Medical\">F.Sc Pre-Medical</option>\n        <option value=\"F.Sc Computer Science\">F.Sc Computer Science</option>\n      </optgroup>\n      <optgroup label=\"Bachelors\">\n        <option value=\"B.E\">B.E</option>\n        <option value=\"BS\">BS</option>\n        <option value=\"B.Tech\">B.Tech</option>\n        <option value=\"Architecture\">Architecture</option>\n      </optgroup>\n      <option value=\"Masters\">Masters</option>\n      <option value=\"PhD\">Ph.D</option>\n    </select>\n\n    <label for=\"institution\">Institution:</label>\n    <input type=\"text\" class=\"institution\" name=\"institution\" required>\n\n    <label for=\"completionYear\">Completion Year:</label>\n    <input type=\"text\" class=\"completionYear\" name=\"completionYear\" required>\n\n    <button type=\"button\" class=\"remove-degree\">Remove</button>\n  ";
    degreeSection.appendChild(newDegreeEntry);
    var removeButton = newDegreeEntry.querySelector('.remove-degree');
    removeButton.addEventListener('click', function () {
        newDegreeEntry.remove();
    });
});
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degreeEntries = document.querySelectorAll('.degree-entry');
    var degreeList = '';
    degreeEntries.forEach(function (entry) {
        var degree = entry.querySelector('.degree').value;
        var institution = entry.querySelector('.institution').value;
        var completionYear = entry.querySelector('.completionYear').value;
        degreeList += "<p>".concat(degree, " from ").concat(institution, " (").concat(completionYear, ")</p>");
    });
    var jobTitle = document.getElementById('jobTitle').value;
    var company = document.getElementById('company').value;
    var duration = document.getElementById('duration').value;
    var skills = document.getElementById('skills').value.split(',');
    resumeSection.style.display = 'block';
    resumeSection.innerHTML = "\n    <h1>".concat(name, "</h1>\n    <p>Email: ").concat(email, "</p>\n    <p>Phone: ").concat(phone, "</p>\n\n    <h2>Education</h2>\n    ").concat(degreeList, "\n\n    <h2>Work Experience</h2>\n    <p>").concat(jobTitle, " at ").concat(company, " (").concat(duration, ")</p>\n\n    <h2>Skills</h2>\n    <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n  ");
});
