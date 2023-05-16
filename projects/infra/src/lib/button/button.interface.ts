export type InfraButtonType = 'default' | 'success' | 'error';

export interface InfraClass {
  className:string;
  typeName:string;
}
export interface InfraButton {
  label?: string;
  type?: InfraButtonType;
  class?: InfraClass | string;
  icon?: string;
}

const b: InfraButton = {type: 'default'}
