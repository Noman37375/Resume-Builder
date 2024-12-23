function updateResume() {


    // Fetching form inputs
    const nameInput = (document.getElementById('name') as HTMLInputElement).value;
    const jobInput = (document.getElementById('job-title') as HTMLInputElement).value; 
    const emailInput = (document.getElementById('email') as HTMLInputElement).value;
    const phoneInput = (document.getElementById('phone') as HTMLInputElement).value;
    const locationInput = (document.getElementById('location') as HTMLInputElement).value;
    const linkdinInput = (document.getElementById('linkdin') as HTMLInputElement).value;
    const skillsInput = (document.getElementById('skills') as HTMLInputElement).value;
    const summaryInput = (document.getElementById('summary') as HTMLTextAreaElement).value;
    const profilePicture = (document.getElementById("profilePicture") as HTMLInputElement).files?.[0];
    const Education =(document.querySelector(".education")as HTMLSelectElement)
    const EducationYears =(document.querySelector(".education-year")as HTMLInputElement).value;
    const Certifications = (document.querySelector(".certification")as HTMLInputElement).value;
    const CertificationInstitutions = (document.querySelector(".certification-institution")as HTMLInputElement).value;
    const CertificationYears = (document.querySelector(".certification-year")as HTMLInputElement).value;
    const Experience =(document.querySelector(".experience")as HTMLInputElement).value;
    const ExperienceYears =(document.querySelector(".experience-year")as HTMLInputElement).value;



   
    
   if (!nameInput||!jobInput||!emailInput||!phoneInput||!locationInput||!skillsInput||!summaryInput||!profilePicture||!Education||!EducationYears) {
    alert("You have to fill all fields.");
    return; // Exit the function if validation fails
}    
    // Update basic info
    (document.getElementById('display-name') as HTMLElement).innerText = nameInput || "";
    (document.getElementById('display-job') as HTMLElement).innerText = jobInput || "";
    (document.getElementById('display-email') as HTMLElement).innerHTML = emailInput ? `<a href="mailto:${emailInput}">${emailInput}</a>` : '';
    (document.getElementById('display-phone') as HTMLElement).innerText = phoneInput || '';
    (document.getElementById('display-location') as HTMLElement).innerText = locationInput || '';
    (document.getElementById('display-linkdin') as HTMLElement).innerText = linkdinInput || '';

    // Update profile picture
    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgElement = document.querySelector('.profile-picture') as HTMLImageElement;
            if (e.target && imgElement) {
                imgElement.src = e.target.result as string;
            }
        };
        reader.readAsDataURL(profilePicture);
    }

    // Update skills
    const skillsArray = skillsInput.split(',').map(skill => skill.trim());
    const skillsList = document.getElementById('display-skills') as HTMLElement;
    skillsList.innerHTML = ''; // Clear previous list
    skillsArray.forEach(skill => {
        if (skill) {
            const li = document.createElement('li');
            li.innerText = skill;
            skillsList.appendChild(li);
        }
    });

    // Update summary
    (document.getElementById('display-summary') as HTMLElement).innerText = summaryInput || "";

    // Update certifications
const certificationsContainer = document.getElementById('certifications-container') as HTMLElement;
const certificationsList = document.getElementById('certifications-list') as HTMLElement;
certificationsList.innerHTML = ''; // Clear previous list

const certificationElements = certificationsContainer.querySelectorAll('.certification');
const certificationYears = certificationsContainer.querySelectorAll('.certification-year');
const certificationInstitutions = certificationsContainer.querySelectorAll('.certification-institution'); // New line

for (let i = 0; i < certificationElements.length; i++) {
    const certificationName = (certificationElements[i] as HTMLInputElement).value;
    const fromYear = (certificationYears[i * 2] as HTMLInputElement).value;
    const toYear = (certificationYears[i * 2 + 1] as HTMLInputElement).value;
    const institution = (certificationInstitutions[i] as HTMLInputElement).value; // New line

    if (certificationName) {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${certificationName}</strong><br><em>${institution}</em><span id="floating-right">${fromYear} - ${toYear}</span>`;
        certificationsList.appendChild(p);
    }
}

// Update education
const educationContainer = document.getElementById('education-container') as HTMLElement;
const educationList = document.getElementById('education-list') as HTMLElement;
educationList.innerHTML = ''; // Clear previous list

const educationElements = educationContainer.querySelectorAll('.education');
const educationYears = educationContainer.querySelectorAll('.education-year');
const School = educationContainer.querySelectorAll('.school'); // New line

for (let i = 0; i < educationElements.length; i++) {
    const educationDetail = (educationElements[i] as HTMLInputElement).value;
    const fromYear = (educationYears[i * 2] as HTMLInputElement).value;
    const toYear = (educationYears[i * 2 + 1] as HTMLInputElement).value;

    if (educationDetail) {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${educationDetail}</strong> <span id="floating-right">${fromYear} - ${toYear}</span>`;
        educationList.appendChild(p);
    }
}
    // Update work experience
    const experienceContainer = document.getElementById('experience-container') as HTMLElement;
    const experienceList = document.getElementById('experience-list')as HTMLElement;
    experienceList.innerHTML = ''; // Clear previous list

    const experienceElements = experienceContainer.querySelectorAll('.experience');
    const experienceYears = experienceContainer.querySelectorAll('.experience-year');
    const WorkPosition = experienceContainer.querySelectorAll('.work-position'); // New line

    for (let i = 0; i < experienceElements.length; i++) {
        const experienceDetail = (experienceElements[i] as HTMLInputElement).value;
        const fromYear = (experienceYears[i * 2] as HTMLInputElement).value;
        const toYear = (experienceYears[i * 2 + 1] as HTMLInputElement).value;
        const workP = (WorkPosition[i] as HTMLInputElement).value; // New line


        if (experienceDetail) {
                const p = document.createElement('p');
                p.innerHTML = `${experienceDetail}<br><em>${workP}</em> <span id="floating-right">${fromYear} - ${toYear}</span>`;
                experienceList.appendChild(p);
            
        }
    }
    if (!linkdinInput) {
        (document.getElementById('linkdinData') as HTMLElement).style.display="none"
    }
    else{
        (document.getElementById('display-linkdin') as HTMLElement).innerText = linkdinInput || '';
    }
    if (!Certifications||!CertificationInstitutions||!CertificationYears) {
        (document.getElementById("certificationData")as HTMLElement).style.display="none"
    }
    if (!Experience||!ExperienceYears) {
        (document.getElementById("experiencenData")as HTMLElement).style.display="none"
    }
    (document.querySelector('.form-container')as HTMLElement).style.display='none';
    (document.querySelector('.mainHeading')as HTMLFormElement).style.display='none';
    (document.getElementById("pdf") as HTMLElement).style.display="block"

}

// Event listeners for the buttons
document.getElementById('update-resume')?.addEventListener('click', updateResume);

document.getElementById('add-certification')?.addEventListener('click', () => {
    const container = document.getElementById('certifications-container');
    const newCertification = document.createElement('div');
    newCertification.classList.add('certification-container'); // Add container styling class
    
    newCertification.innerHTML = `
       <input type="text" class="certification" style="flex-grow: 1;margin: 3px;" placeholder="Enter certification name" >
                    <input type="text" class="certification-institution" style="flex-grow: 1;margin: 3px;" placeholder="Enter certification institute" >
                    <input type="text" class="certification-year" style="flex-grow: 1;margin: 3px;" placeholder="From Year" >
                    <input type="text" class="certification-year" style="flex-grow: 1;margin: 3px;" placeholder="To Year" >
    `;
    container?.appendChild(newCertification);
});


document.getElementById('add-education')?.addEventListener('click', () => {
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
    container?.appendChild(newEducation);
});

document.getElementById('add-experience')?.addEventListener('click', () => {
    const container = document.getElementById('experience-container');
    const newExperience = document.createElement('div');
    newExperience.classList.add('experience-container'); // Add necessary CSS class for styling
    newExperience.innerHTML = `
       <input type="text" class="experience" style="flex-grow: 1;margin: 3px;" placeholder="Enter work experience details">
                    <input type="text" class="work-position" style="flex-grow: 1;margin: 3px;" placeholder="Enter Your Position" >
                    <input type="text" class="experience-year" style="flex-grow: 1;margin: 3px;"placeholder="From Year" >
                    <input type="text" class="experience-year" style="flex-grow: 1;margin: 3px;" placeholder="To Year" >
    `;
    container?.appendChild(newExperience);
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
    (document.getElementById("pdf") as HTMLElement).style.display="none"

}
(document.getElementById("pdf") as HTMLElement)?.addEventListener("click",getPdf);
(document.getElementById("pdf") as HTMLElement).style.display="none"