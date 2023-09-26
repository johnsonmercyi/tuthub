const users = [
  { id: 1, name: 'John Doe', email: 'johndoe@mail.com', gender: 'M', username: 'johndoe', password: '12345678' },
  { id: 2, name: 'Jane Doe', email: 'janedoe@mail.com', gender: 'F', username: 'janedoe', password: '12345678' },
];

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
  { id: 7, academic_level_id: 2, name: "JSS 1" },
  { id: 8, academic_level_id: 2, name: "JSS 2" },
  { id: 9, academic_level_id: 2, name: "JSS 3" },
  { id: 10, academic_level_id: 2, name: "SS 1" },
  { id: 11, academic_level_id: 2, name: "SS 2" },
  { id: 12, academic_level_id: 2, name: "SS 3" },
];

/**
 * This entity should be created
 * for this where users active
 * classes/sub_levels/levels are saved
 */
const user_active_sub_levels = [
  { id: 1, user_id: 1, sub_academic_level_id: 1 },
  { id: 2, user_id: 2, sub_academic_level_id: 9 },
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
  { id: 9, name: "Social Studies" },
];

const sub_academic_level_courses = [
  //Basic 1 to 6 offer English Language
  { id: 1, course_id: 1, sub_academic_level_id: 1 },
  { id: 2, course_id: 1, sub_academic_level_id: 2 },
  { id: 3, course_id: 1, sub_academic_level_id: 3 },
  { id: 4, course_id: 1, sub_academic_level_id: 4 },
  { id: 5, course_id: 1, sub_academic_level_id: 5 },
  { id: 6, course_id: 1, sub_academic_level_id: 6 },

  //Basic 1 to 6 offer Mathematics
  { id: 7, course_id: 8, sub_academic_level_id: 1 },
  { id: 8, course_id: 8, sub_academic_level_id: 2 },
  { id: 9, course_id: 8, sub_academic_level_id: 3 },
  { id: 10, course_id: 8, sub_academic_level_id: 4 },
  { id: 11, course_id: 8, sub_academic_level_id: 5 },
  { id: 12, course_id: 8, sub_academic_level_id: 6 },

  //Jss 1 to Jss 3 offer English Language
  { id: 13, course_id: 1, sub_academic_level_id: 7 },
  { id: 14, course_id: 1, sub_academic_level_id: 8 },
  { id: 15, course_id: 1, sub_academic_level_id: 9 },

  //Jss 1 to Jss 3 offer Mathematics
  { id: 16, course_id: 8, sub_academic_level_id: 7 },
  { id: 17, course_id: 8, sub_academic_level_id: 8 },
  { id: 18, course_id: 8, sub_academic_level_id: 9 },

  //SS 1 to SS 3 offer English Language
  { id: 19, course_id: 1, sub_academic_level_id: 10 },
  { id: 20, course_id: 1, sub_academic_level_id: 11 },
  { id: 21, course_id: 1, sub_academic_level_id: 12 },

  //SS 1 to SS 3 offer Mathematics
  { id: 22, course_id: 8, sub_academic_level_id: 10 },
  { id: 23, course_id: 8, sub_academic_level_id: 11 },
  { id: 24, course_id: 8, sub_academic_level_id: 12 },

  //Jss 1 to Jss 3 offer Social Studies
  { id: 25, course_id: 9, sub_academic_level_id: 7 },
  { id: 26, course_id: 9, sub_academic_level_id: 8 },
  { id: 27, course_id: 9, sub_academic_level_id: 9 },
  
   //continue from creating the sub_academic_level_courses DB object here...
];

const topics = [
  { id: 1, course_id: 1, title: "History of the English Language", link: "https://youtu.be/B-KgXbROP4c" },
  { id: 2, course_id: 1, title: "Grammar and Syntax", link: "https://youtu.be/B-KgXbROP4c" },
  { id: 3, course_id: 1, title: "Phonetics and Phonology", link: "https://youtu.be/B-KgXbROP4c" },
  { id: 4, course_id: 1, title: "Vocabulary and Lexicography", link: "https://youtu.be/B-KgXbROP4c" },
  { id: 5, course_id: 1, title: "Evolving English", link: "https://youtu.be/B-KgXbROP4c" },
  { id: 6, course_id: 2, title: "Classical Mechanics", link: "https://www.youtube.com/watch?v=qOp4Y2_g5ZI" },
  { id: 7, course_id: 2, title: "Quantum Mechanics", link: "https://www.youtube.com/watch?v=qOp4Y2_g5ZI" },
  { id: 8, course_id: 2, title: "Thermodynamics", link: "https://www.youtube.com/watch?v=qOp4Y2_g5ZI" },
  { id: 9, course_id: 2, title: "Electromagnetism", link: "https://www.youtube.com/watch?v=qOp4Y2_g5ZI" },
  { id: 10, course_id: 2, title: "Astrophysics and Cosmology", link: "https://www.youtube.com/watch?v=qOp4Y2_g5ZI" },
  { id: 11, course_id: 3, title: "Chemical Bonding", link: "https://www.youtube.com/watch?v=qOp4Y2_g5ZI" },
  { id: 12, course_id: 3, title: "Periodic Table", link: "https://www.youtube.com/watch?v=qOp4Y2_g5ZI" },
  { id: 13, course_id: 3, title: "Thermodynamics", link: "https://www.youtube.com/watch?v=qOp4Y2_g5ZI" },
  { id: 14, course_id: 3, title: "Environmental Chemistry", link: "https://www.youtube.com/watch?v=qOp4Y2_g5ZI" },
  { id: 15, course_id: 3, title: "Cell Biology", link: "https://www.youtube.com/watch?v=qOp4Y2_g5ZI" },
  { id: 16, course_id: 4, title: "Genetics", link: "https://www.youtube.com/watch?v=qOp4Y2_g5ZI" },
  { id: 17, course_id: 4, title: "Physiology", link: "https://www.youtube.com/watch?v=qOp4Y2_g5ZI" },
  { id: 18, course_id: 4, title: "Microbiology", link: "https://www.youtube.com/watch?v=qOp4Y2_g5ZI" },
  { id: 19, course_id: 4, title: "Neuroscience", link: "https://www.youtube.com/watch?v=qOp4Y2_g5ZI" },
  { id: 20, course_id: 4, title: "Environmental Biology", link: "https://www.youtube.com/watch?v=qOp4Y2_g5ZI" },
  { id: 21, course_id: 8, title: "Number Work", link: "https://www.youtube.com/watch?v=DFsCAHioNF8" },
  { id: 22, course_id: 8, title: "Algebra", link: "https://www.youtube.com/watch?v=DFsCAHioNF8" },
  { id: 23, course_id: 8, title: "Geometry", link: "https://www.youtube.com/watch?v=DFsCAHioNF8" },
  { id: 24, course_id: 8, title: "Calculus", link: "https://www.youtube.com/watch?v=DFsCAHioNF8" },
  { id: 25, course_id: 8, title: "Differential Equations", link: "https://www.youtube.com/watch?v=DFsCAHioNF8" },
  { id: 26, course_id: 8, title: "Number Systems", link: "https://www.youtube.com/watch?v=DFsCAHioNF8" },
  { id: 27, course_id: 9, title: "Step By Step Social Studies", link: "https://www.youtube.com/watch?v=jYIXwmyri-Y" },
  { id: 28, course_id: 9, title: "World History", link: "https://www.youtube.com/watch?v=jYIXwmyri-Y" },
  { id: 29, course_id: 9, title: "Political Systems", link: "https://www.youtube.com/watch?v=jYIXwmyri-Y" },
  { id: 30, course_id: 9, title: "Sociology", link: "https://www.youtube.com/watch?v=jYIXwmyri-Y" },
  { id: 31, course_id: 9, title: "Archaeology", link: "https://www.youtube.com/watch?v=jYIXwmyri-Y" },
  { id: 32, course_id: 9, title: "Urban Studies", link: "https://www.youtube.com/watch?v=jYIXwmyri-Y" },
];

/**
 * Fetch filtered users details by the specific `column`.
 * If the `column` and `value` parameters are not specified,
 * then all users will be returned. 
 * 
 * @param {String} column 
 * @param {String} value 
 * @returns Array of filetered `users` information if the `column` and `value` parameters are
 * specified, else all `users` information will be returned.
 */
export const fetchUsers = (column, value) => {
  if (column && value) {
    return users.filter(user => user[column] === value);
  }
  return users;
}

export const fetchUserActiveSubLevels = (column, value) => {
  if (column && value) {
    return user_active_sub_levels.filter(subLevel => subLevel[column] === value);
  }
  return user_active_sub_levels;
}

export const fetchAcademicLevels = (columnName, value) => {
  if (columnName && value) {
    return academic_levels.filter(academicLevel => academicLevel[columnName] === value);
  }
  return academic_levels;
}

export const fetchSubAcademicLevels = (columnName, value) => {
  if (columnName && value) {
    return sub_academic_levels.filter(subObj => subObj[columnName] === value);
  }
  return sub_academic_levels;
}

export const fetchFaculties = (columnName, value) => {
  if (columnName && value) {
    return faculties.filter(subObj => subObj[columnName] === value);
  }
  return faculties;
}

export const fetchCourses = (columnName, value) => { 
  if (columnName && value) {
    return courses.filter(course => course[columnName] === value);
  }
  return courses;
}

export const fetchSubAcademicLevelsCourses = (columnName, value) => {
  if (columnName && value) {
    return sub_academic_level_courses.filter(course => course[columnName] === value);
  }
  return sub_academic_level_courses;
}

export const fetchUserSublevelCourses = (subAcademicLevelId) => {
  return fetchSubAcademicLevelsCourses("sub_academic_level_id", subAcademicLevelId)
  .map(subLevelCourse => {
    return courses.find(course => course.id === subLevelCourse.course_id);
  });
}

export const fetchActiveSubLevelDetails = (subLevelDetailsId) => {
  return fetchSubAcademicLevels("id", subLevelDetailsId);
}

export const fetchTopics = (columnName, value) => {
  if (columnName && value) {
    return topics.filter(topicsObj => topicsObj[columnName] === value);
  }
  return topics;
}

