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

export const fetchAcademicLevels = () => {
  return academic_levels;
}

export const fetchSubAcademicLevels = (columnName, value) => {
  return sub_academic_levels.filter(subObj => subObj[columnName] === value);
}

export const fetchFaculties = (columnName, value) => {
  return faculties.filter(subObj => subObj[columnName] === value);
}