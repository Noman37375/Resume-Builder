"use strict";
var _a, _b, _c, _d, _e;
function updateResume() {
    var _a;
    // Fetching form inputs
    const nameInput = document.getElementById('name').value;
    const jobInput = document.getElementById('job-title').value;
    const emailInput = document.getElementById('email').value;
    const phoneInput = document.getElementById('phone').value;
    const locationInput = document.getElementById('location').value;
    const linkdinInput = document.getElementById('linkdin').value;
    const skillsInput = document.getElementById('skills').value;
    const summaryInput = document.getElementById('summary').value;
    const profilePicture = (_a = document.getElementById("profilePicture").files) === null || _a === void 0 ? void 0 : _a[0];
    const Education = document.querySelector(".education");
    const EducationYears = document.querySelector(".education-year").value;
    const Certifications = document.querySelector(".certification").value;
    const CertificationInstitutions = document.querySelector(".certification-institution").value;
    const CertificationYears = document.querySelector(".certification-year").value;
    const Experience = document.querySelector(".experience").value;
    const ExperienceYears = document.querySelector(".experience-year").value;
    if (!nameInput || !jobInput || !emailInput || !phoneInput || !locationInput || !skillsInput || !summaryInput || !profilePicture || !Education || !EducationYears) {
        alert("You have to fill all fields.");
        return; // Exit the function if validation fails
    }
    // Update basic info
    document.getElementById('display-name').innerText = nameInput || "";
    document.getElementById('display-job').innerText = jobInput || "";
    document.getElementById('display-email').innerHTML = emailInput ? `<a href="mailto:${emailInput}">${emailInput}</a>` : '';
    document.getElementById('display-phone').innerText = phoneInput || '';
    document.getElementById('display-location').innerText = locationInput || '';
    document.getElementById('display-linkdin').innerText = linkdinInput || '';
    // Update profile picture
    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgElement = document.querySelector('.profile-picture');
            if (e.target && imgElement) {
                imgElement.src = e.target.result;
            }
        };
        reader.readAsDataURL(profilePicture);
    }
    // Update skills
    const skillsArray = skillsInput.split(',').map(skill => skill.trim());
    const skillsList = document.getElementById('display-skills');
    skillsList.innerHTML = ''; // Clear previous list
    skillsArray.forEach(skill => {
        if (skill) {
            const li = document.createElement('li');
            li.innerText = skill;
            skillsList.appendChild(li);
        }
    });
    // Update summary
    document.getElementById('display-summary').innerText = summaryInput || "";
    // Update certifications
    const certificationsContainer = document.getElementById('certifications-container');
    const certificationsList = document.getElementById('certifications-list');
    certificationsList.innerHTML = ''; // Clear previous list
    const certificationElements = certificationsContainer.querySelectorAll('.certification');
    const certificationYears = certificationsContainer.querySelectorAll('.certification-year');
    const certificationInstitutions = certificationsContainer.querySelectorAll('.certification-institution'); // New line
    for (let i = 0; i < certificationElements.length; i++) {
        const certificationName = certificationElements[i].value;
        const fromYear = certificationYears[i * 2].value;
        const toYear = certificationYears[i * 2 + 1].value;
        const institution = certificationInstitutions[i].value; // New line
        if (certificationName) {
            const p = document.createElement('p');
            p.innerHTML = `<strong>${certificationName}</strong><br><em>${institution}</em><span id="floating-right">${fromYear} - ${toYear}</span>`;
            certificationsList.appendChild(p);
        }
    }
    // Update education
    const educationContainer = document.getElementById('education-container');
    const educationList = document.getElementById('education-list');
    educationList.innerHTML = ''; // Clear previous list
    const educationElements = educationContainer.querySelectorAll('.education');
    const educationYears = educationContainer.querySelectorAll('.education-year');
    const School = educationContainer.querySelectorAll('.school'); // New line
    for (let i = 0; i < educationElements.length; i++) {
        const educationDetail = educationElements[i].value;
        const fromYear = educationYears[i * 2].value;
        const toYear = educationYears[i * 2 + 1].value;
        if (educationDetail) {
            const p = document.createElement('p');
            p.innerHTML = `<strong>${educationDetail}</strong> <span id="floating-right">${fromYear} - ${toYear}</span>`;
            educationList.appendChild(p);
        }
    }
    // Update work experience
    const experienceContainer = document.getElementById('experience-container');
    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = ''; // Clear previous list
    const experienceElements = experienceContainer.querySelectorAll('.experience');
    const experienceYears = experienceContainer.querySelectorAll('.experience-year');
    const WorkPosition = experienceContainer.querySelectorAll('.work-position'); // New line
    for (let i = 0; i < experienceElements.length; i++) {
        const experienceDetail = experienceElements[i].value;
        const fromYear = experienceYears[i * 2].value;
        const toYear = experienceYears[i * 2 + 1].value;
        const workP = WorkPosition[i].value; // New line
        if (experienceDetail) {
            const p = document.createElement('p');
            p.innerHTML = `${experienceDetail}<br><em>${workP}</em> <span id="floating-right">${fromYear} - ${toYear}</span>`;
            experienceList.appendChild(p);
        }
    }
    if (!linkdinInput) {
        document.getElementById('linkdinData').style.display = "none";
    }
    else {
        document.getElementById('display-linkdin').innerText = linkdinInput || '';
    }
    if (!Certifications || !CertificationInstitutions || !CertificationYears) {
        document.getElementById("certificationData").style.display = "none";
    }
    if (!Experience || !ExperienceYears) {
        document.getElementById("experiencenData").style.display = "none";
    }
    document.querySelector('.form-container').style.display = 'none';
    document.querySelector('.mainHeading').style.display = 'none';
    document.getElementById("pdf").style.display = "block";
}
// Event listeners for the buttons
(_a = document.getElementById('update-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', updateResume);
(_b = document.getElementById('add-certification')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    const container = document.getElementById('certifications-container');
    const newCertification = document.createElement('div');
    newCertification.classList.add('certification-container'); // Add container styling class
    newCertification.innerHTML = `
       <input type="text" class="certification" style="flex-grow: 1;margin: 3px;" placeholder="Enter certification name" >
                    <input type="text" class="certification-institution" style="flex-grow: 1;margin: 3px;" placeholder="Enter certification institute" >
                    <input type="text" class="certification-year" style="flex-grow: 1;margin: 3px;" placeholder="From Year" >
                    <input type="text" class="certification-year" style="flex-grow: 1;margin: 3px;" placeholder="To Year" >
    `;
    container === null || container === void 0 ? void 0 : container.appendChild(newCertification);
});
(_c = document.getElementById('add-education')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    const container = document.getElementById('education-container');
    const newEducation = document.createElement('div');
    newEducation.classList.add('education-container'); // Add necessary CSS class for styling
    newEducation.innerHTML = `
      <select name="education" class="education" style="flex-grow: 1;margin: 3px;">
                        <option value="education" disabled selected>Select your education</option>
                    <option value="Maatriculation">Matriculation (Matric)
                    </option>
                    <option value=">Intermediate">Intermediate(Inter)
                    </option>
                    <option value="O-Level (Ordinary Level)">O-Level (Ordinary Level)
                    </option>
                    <option value="A-Level (Advanced Level)">A-Level (Advanced Level)</option>
                    <option value="High School Diploma">High School Diploma</option>
                    <option value="Associate Degree">Associate Degree</option>
                    <option value="Bachelor of Arts (BA)">Bachelor of Arts (BA)</option>
                    <option value="Bachelor of Science (BSc)">Bachelor of Science (BSc)</option>
                    <option value="Bachelor of Commerce (BCom)">Bachelor of Commerce (BCom)</option>
                    <option value="Bachelor of Engineering (BEng)">Bachelor of Engineering (BEng)</option>
                    <option value="Bachelor of Business Administration (BBA)">Bachelor of Business Administration (BBA)</option>
                    <option value="Master of Arts (MA)">Master of Arts (MA)</option>
                    <option value="Master of Science (MSc)">Master of Science (MSc)</option>
                    <option value="Master of Business Administration (MBA)">Master of Business Administration (MBA)</option>
                    <option value="Master of Education (MEd)">Master of Education (MEd)</option>
                    <option value="Doctor of Philosophy (PhD)">Doctor of Philosophy (PhD)</option>
                    <option value="Juris Doctor (JD)">Juris Doctor (JD)</option>
                    <option value="Master of Social Work (MSW)">Master of Social Work (MSW)</option>
                    <option value="Graduate Diploma">Graduate Diploma</option>
                    <option value="Higher National Diploma (HND)">Higher National Diploma (HND)</option>
                    <option value="Postgraduate Certificate">Postgraduate Certificate</option>
                </select>
                    <input type="text" class="education-year" style="flex-grow: 1;margin: 3px;" placeholder="From Year" required>
                    <input type="text" class="education-year" style="flex-grow: 1;margin: 3px;"placeholder="To Year" required>
    `;
    container === null || container === void 0 ? void 0 : container.appendChild(newEducation);
});
(_d = document.getElementById('add-experience')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
    const container = document.getElementById('experience-container');
    const newExperience = document.createElement('div');
    newExperience.classList.add('experience-container'); // Add necessary CSS class for styling
    newExperience.innerHTML = `
       <input type="text" class="experience" style="flex-grow: 1;margin: 3px;" placeholder="Enter work experience details">
                    <input type="text" class="work-position" style="flex-grow: 1;margin: 3px;" placeholder="Enter Your Position" >
                    <input type="text" class="experience-year" style="flex-grow: 1;margin: 3px;"placeholder="From Year" >
                    <input type="text" class="experience-year" style="flex-grow: 1;margin: 3px;" placeholder="To Year" >
    `;
    container === null || container === void 0 ? void 0 : container.appendChild(newExperience);
});
//Hide skills button
// const toggleBtn=document.getElementById('toggle-skills') as HTMLButtonElement
// const skills=document.getElementById('H-skills') as HTMLElement
// toggleBtn.addEventListener('click',()=>{
//     if (skills.style.display =='none') {
//         skills.style.display='block'
//         toggleBtn.textContent='Hide skills'
//     }
//     else{
//         skills.style.display='none'
//         toggleBtn.textContent='Show skills'
//     }
// })
function getPdf() {
    window.print();
    document.getElementById("pdf").style.display = "none";
}
(_e = document.getElementById("pdf")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", getPdf);
document.getElementById("pdf").style.display = "none";
