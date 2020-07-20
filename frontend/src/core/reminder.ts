export enum ReminderType {
  ThankYou = 'ThankYou',
  ItemShipped = 'ItemShipped',
  BeautySample = 'BeautySample',
  Replenishment = 'Replenishment',
}

export type BaseReminder = {
  customer: Object;
  dueDate: Date;
};

export type ThankYouReminder = BaseReminder & {
  type: ReminderType.ThankYou;
};
