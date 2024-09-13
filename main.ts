const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeSection = document.getElementById('resume-section') as HTMLElement;
const degreeSection = document.getElementById('degree-section') as HTMLElement;
const addDegreeButton = document.getElementById('add-degree') as HTMLButtonElement;


addDegreeButton.addEventListener('click', function () {
  const newDegreeEntry = document.createElement('div');
  newDegreeEntry.classList.add('degree-entry');

  newDegreeEntry.innerHTML = `
    <label for="degree">Degree:</label>
    <select class="degree" name="degree" required>
      <option value="">-- Select Degree --</option>
      <option value="Matriculation">Matriculation</option>
      <optgroup label="Intermediate (F.Sc)">
        <option value="F.Sc Pre-Engineering">F.Sc Pre-Engineering</option>
        <option value="F.Sc Pre-Medical">F.Sc Pre-Medical</option>
        <option value="F.Sc Computer Science">F.Sc Computer Science</option>
      </optgroup>
      <optgroup label="Bachelors">
        <option value="B.E">B.E</option>
        <option value="BS">BS</option>
        <option value="B.Tech">B.Tech</option>
        <option value="Architecture">Architecture</option>
      </optgroup>
      <option value="Masters">Masters</option>
      <option value="PhD">Ph.D</option>
    </select>

    <label for="institution">Institution:</label>
    <input type="text" class="institution" name="institution" required>

    <label for="completionYear">Completion Year:</label>
    <input type="text" class="completionYear" name="completionYear" required>

    <button type="button" class="remove-degree">Remove</button>
  `;

  degreeSection.appendChild(newDegreeEntry);

 
  const removeButton = newDegreeEntry.querySelector('.remove-degree') as HTMLButtonElement;
  removeButton.addEventListener('click', function () {
    newDegreeEntry.remove();
  });
});


form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;

  const degreeEntries = document.querySelectorAll('.degree-entry');
  let degreeList = '';

  degreeEntries.forEach(entry => {
    const degree = (entry.querySelector('.degree') as HTMLInputElement).value;
    const institution = (entry.querySelector('.institution') as HTMLInputElement).value;
    const completionYear = (entry.querySelector('.completionYear') as HTMLInputElement).value;

    degreeList += `<p>${degree} from ${institution} (${completionYear})</p>`;
  });

  const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
  const company = (document.getElementById('company') as HTMLInputElement).value;
  const duration = (document.getElementById('duration') as HTMLInputElement).value;

  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

  resumeSection.style.display = 'block';

  resumeSection.innerHTML = `
    <h1>${name}</h1>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>

    <h2>Education</h2>
    ${degreeList}

    <h2>Work Experience</h2>
    <p>${jobTitle} at ${company} (${duration})</p>

    <h2>Skills</h2>
    <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
  `;
});
