document.querySelector('#my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('#job-title').textContent = data.job_title;
document.querySelector('.profile-data').textContent = data.profile;
/**
 * section data
 */
let expirienceData = '';
experience.forEach(item => {
    expirienceData += `
                        <section class="mb-5">
                        <h2 class="company-name mb-2">${item.company} - ${item.city} <p class="teacher">${item.from}</p></h2>
                    `;
    for (let key in item.allPos) {
        expirienceData += `
                            <h6>${key}</h6>
                            <p>${item.allPos[key]}</p>
                        `;
        console.log(key, item.allPos[key]);
    } 
    expirienceData += `</section>`;                       
});
document.querySelector('.experience-list').innerHTML = expirienceData;

/**
 * contact data
 */

document.querySelector('.contacts-block').innerHTML += `<li><a href="tel:${data.phone}">${data.phone}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="mailto:${data.email}">${data.email}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="callto:${data.skype}">${data.skype}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.linkedin}">${data.linkedin}</a></li>`
document.querySelector('.address').innerHTML = `<p>${data.address}</p>`;
document.querySelector('#my-photo').src = data.photo;

/**
 * skills
 */

let skillsData = '';
data.skills.forEach(item => {
    skillsData += `<li>${item}</li>`;
});
document.querySelector('.skills-list').innerHTML = skillsData;

/**
 * education
 */

let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}, ${item[1]}</li>`;
});
document.querySelector('.education-list').innerHTML = educationData;

/**
 * Achievements
 */

let achievementsData = '';
data.achievements.forEach(item => {
    achievementsData += `<li>${item},</li>`;
});
document.querySelector('.achievements-list').innerHTML = achievementsData;