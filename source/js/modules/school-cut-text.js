let fullSchoolText;
let fullDescriptionText;

export const initCourseCutText = () => {
  if (document.querySelector('.course-info')) {
    fullSchoolText = document.querySelector('[data-school="text"] p').textContent;
    fullDescriptionText = document.querySelector('[data-description="text"] p').textContent;
    courseCutText();
  }
};

export const courseCutText = () => {
  if (document.querySelector('.course-info')) {
    const schoolText = document.querySelector('[data-school="text"] p');
    const courseDescriptionText = document.querySelector('[data-description="text"] p');

    if (window.innerWidth < 768) {
      schoolText.textContent = schoolText.textContent.slice(0, 101);
      courseDescriptionText.textContent = courseDescriptionText.textContent.slice(0, 248);
    } else {
      schoolText.textContent = fullSchoolText;
      courseDescriptionText.textContent = fullDescriptionText;
    }
  }
};
