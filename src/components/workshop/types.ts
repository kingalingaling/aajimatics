export interface FormData {
  name: string;
  email: string;
  company: string;
  title: string;
  waicaNumber: string;
  icmrRegNumber: string;
  country: string;
  participationType: string;
  accessCode: string;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export type handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  
export type handleSubmit = (e: React.FormEvent) => void;