import { IPmEntreprise } from 'app/entities/pm-entreprise/pm-entreprise.model';
import { IMiseEnGestion } from 'app/entities/mise-en-gestion/mise-en-gestion.model';
import { Status } from 'app/entities/enumerations/status.model';

export interface IDemandeXRM {
  id: number;
  aI?: keyof typeof Status | null;
  iVS?: keyof typeof Status | null;
  receptionDate?: string | null;
  updated?: boolean | null;
  pmEntreprise?: Pick<IPmEntreprise, 'id'> | null;
  miseEnGestion?: Pick<IMiseEnGestion, 'id'> | null;
}

export type NewDemandeXRM = Omit<IDemandeXRM, 'id'> & { id: null };
