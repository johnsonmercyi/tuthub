const academic_levels = [
  { id: 1, name: 'Primary/Basic', type: "basic" },
  { id: 2, name: 'Secondary', type: "basic" },
  { id: 3, name: 'University', type: "tertiary" },
  { id: 4, name: 'Tertiary', type: "tertiary" },
];

const sub_academic_levels = [
  { id: 1, academic_level_id: 1, name: "Basic 1"},
  { id: 2, academic_level_id: 1, name: "Basic 2" },
  { id: 3, academic_level_id: 1, name: "Basic 3" },
  { id: 4, academic_level_id: 1, name: "Basic 4" },
  { id: 5, academic_level_id: 1, name: "Basic 5" },
  { id: 6, academic_level_id: 1, name: "Basic 6" },
  { id: 7, academic_level_id: 2, name: "Junior Secondary 1" },
  { id: 8, academic_level_id: 2, name: "Junior Secondary 2" },
  { id: 9, academic_level_id: 2, name: "Junior Secondary 3" },
  { id: 10, academic_level_id: 2, name: "Senior Secondary 1" },
  { id: 11, academic_level_id: 2, name: "Senior Secondary 2" },
  { id: 12, academic_level_id: 2, name: "Senior Secondary 3" },
];

const faculties = [
  { id: 1, academic_level_id: 3, name: "Natural Science" },
  { id: 2, academic_level_id: 3, name: "Art" },
  { id: 3, academic_level_id: 3, name: "Useless Law" },
];

const courses = [
  { id: 1, name: "English Language" },
  { id: 2, name: "Physics" },
  { id: 3, name: "Chemistry" },
  { id: 4, name: "Biology" },
  { id: 5, name: "Geography" },
  { id: 6, name: "Economics" },
  { id: 7, name: "Commerce" },
  { id: 8, name: "Mathematics" },
];

const topics = [
  { id: 1, course_id: 1, title: "History of the English Language" },
  { id: 2, course_id: 1, title: "Grammar and Syntax" },
  { id: 3, course_id: 1, title: "Phonetics and Phonology" },
  { id: 4, course_id: 1, title: "Vocabulary and Lexicography" },
  { id: 5, course_id: 1, title: "Evolving English" },
  { id: 6, course_id: 2, title: "Classical Mechanics" },
  { id: 7, course_id: 2, title: "Quantum Mechanics" },
  { id: 8, course_id: 2, title: "Thermodynamics" },
  { id: 9, course_id: 2, title: "Electromagnetism" },
  { id: 10, course_id: 2, title: "Astrophysics and Cosmology" },
  { id: 11, course_id: 3, title: "Chemical Bonding" },
  { id: 12, course_id: 3, title: "Periodic Table" },
  { id: 13, course_id: 3, title: "Thermodynamics" },
  { id: 14, course_id: 3, title: "Environmental Chemistry" },
  { id: 15, course_id: 3, title: "Cell Biology" },
  { id: 16, course_id: 4, title: "Genetics" },
  { id: 17, course_id: 4, title: "Physiology" },
  { id: 18, course_id: 4, title: "Microbiology" },
  { id: 19, course_id: 4, title: "Neuroscience" },
  { id: 20, course_id: 4, title: "Environmental Biology" },
];

export const fetchAcademicLevels = () => {
  return academic_levels;
}

export const fetchSubAcademicLevels = (columnName, value) => {
  return sub_academic_levels.filter(subObj => subObj[columnName] === value);
}

export const fetchFaculties = (columnName, value) => {
  return faculties.filter(subObj => subObj[columnName] === value);
}

export const fetchCourses = () => { 
  return courses;
}

export const fetchTopics = (columnName, value) => {
  return topics.filter(topicsObj => topicsObj[columnName] === value);
}

