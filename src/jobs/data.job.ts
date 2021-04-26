export type TJobData = {
  name: string;
  rule: string;
  endPoint: string;
  callback?: () => Promise<void> | void;
};

export const jobData: TJobData[] = [
  {
    name: 'hi',
    rule: '10 * * * * *',
    endPoint: '',
  },
];
