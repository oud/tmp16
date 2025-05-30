import { IDemandeXRM, NewDemandeXRM } from './demande-xrm.model';

export const sampleWithRequiredData: IDemandeXRM = {
  id: 23981,
};

export const sampleWithPartialData: IDemandeXRM = {
  id: 9977,
  aI: 'RECU',
  receptionDate: '10:50:00',
};

export const sampleWithFullData: IDemandeXRM = {
  id: 16434,
  aI: 'RECU',
  iVS: 'RECU',
  receptionDate: '08:44:00',
  updated: false,
};

export const sampleWithNewData: NewDemandeXRM = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
