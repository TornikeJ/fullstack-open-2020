import { NonSensitivePatientsEntry, PatientsEntry, NewPatientsEntry } from '../types/Patients';
import patientsData from '../data/patients';

const uniqid = require('uniqid');

const getEntries = (): Array<NonSensitivePatientsEntry> => {
  return patientsData;
};

const getNonSensitiveEntries = (): NonSensitivePatientsEntry[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation, }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addEntry = (entry: NewPatientsEntry): PatientsEntry => {
  const newPatientsEntry = {
    id: uniqid(),
    ...entry
  }

  patientsData.push(newPatientsEntry);

  return newPatientsEntry
};

const getPatient = (id: string): PatientsEntry | undefined => {
  const patient = patientsData.find(d => d.id === id);
  return patient;
}

// const findById = (id: string): PatientsEntry | undefined => {
//   const entry = patientsData.find(d => d.id === id);
//   let entryWithEntries: PatientsEntry
//   if (entry) {
//     entryWithEntries = { ...entry, entry.entries?}
//     entryWithEntries.entries = []
//     if (!entry.entries) {
//       entry.entries =
//     }
//   }
//   return entry;
// };

export default {
  getEntries,
  addEntry,
  getNonSensitiveEntries,
  // findById,
  getPatient
};