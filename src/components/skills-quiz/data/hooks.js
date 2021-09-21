import { useContext, useMemo } from 'react';
import { SearchContext } from '@edx/frontend-enterprise-catalog-search';
import { SkillsContext } from '../SkillsContextProvider';
import { DROPDOWN_OPTION_IMPROVE_CURRENT_ROLE } from '../constants';

export const useSelectedSkillsAndJobSkills = () => {
  const { state } = useContext(SkillsContext);
  const {
    selectedJob, interestedJobs, goal, currentJobRole,
  } = state;
  const { refinements } = useContext(SearchContext);
  const { skill_names: skills } = refinements;
  const skillsFromSelectedJob = useMemo(
    () => {
      let skillsFromJob = [];
      if (selectedJob && goal !== DROPDOWN_OPTION_IMPROVE_CURRENT_ROLE && interestedJobs?.length > 0) {
        interestedJobs.forEach((job) => {
          if (job.name === selectedJob) {
            skillsFromJob = job.skills?.map(skill => skill.name);
          }
        });
      }
      if (goal === DROPDOWN_OPTION_IMPROVE_CURRENT_ROLE && currentJobRole?.length > 0) {
        // there can be only one current job.
        skillsFromJob = currentJobRole[0].skills?.map(skill => skill.name);
      }
      return skillsFromJob;
    },
    [skills, interestedJobs, selectedJob, goal, currentJobRole],
  );
  return skills ? skills.concat(skillsFromSelectedJob) : skillsFromSelectedJob;
};