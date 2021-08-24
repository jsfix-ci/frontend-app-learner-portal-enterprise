// eslint-disable-next-line import/prefer-default-export
export const DROPDOWN_OPTION_CHANGE_CAREERS = 'I want to change careers';
export const DROPDOWN_OPTION_GET_PROMOTED = 'I want to get promoted';
export const DROPDOWN_OPTION_CHANGE_ROLE = 'I want to get better at my current role';
export const DROPDOWN_OPTION_OTHER = 'Other';

export const SKILLS_QUIZ_FACET_FILTERS = [
  {
    attribute: 'skill_names',
    title: 'Current jobs',
    facetValueType: 'single-item',
    typeaheadOptions: {
      placeholder: 'Find a current job...',
      ariaLabel: 'Type to find a current job',
      minLength: 3,
    },
  },
  {
    attribute: 'skill_names',
    title: 'Skills',
    facetValueType: 'array',
    typeaheadOptions: {
      placeholder: 'Find a skill...',
      ariaLabel: 'Type to find a skill',
      minLength: 3,
    },
  },
];

export const JOBS_QUIZ_FACET_FILTERS = {
  attribute: 'skill_names',
  title: 'Search jobs',
  typeaheadOptions: {
    placeholder: 'Find a job...',
    ariaLabel: 'Type to find a job',
    minLength: 3,
  },
};

export const JOBS_ERROR_ALERT_MESSAGE = 'An error occured while fetching your selected job. Please try again later.';
export const COURSE_ERROR_ALERT_MESSAGE = 'No courses were found. Please search for another job, or click see more courses.';

export const STEP1 = 'skills-search';
export const STEP2 = 'review';

export const SKILL_NAME_CUTOFF_LIMIT = 50;
export const MAX_VISIBLE_SKILLS_CARD = 8;