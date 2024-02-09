export default interface Tenant {
  code: number;
  name: string;
  defaultTagCategory: string;
  template: number;
  address: Address;
  weekdays: WeekDay[];
}

export interface Address {
  street: string;
  number: number;
  city: string;
  country: string;
}

export interface WeekDay {
  name: string;
  schedules: Schedule[];
}

export interface Schedule {
  start: string;
  end: string;
}
