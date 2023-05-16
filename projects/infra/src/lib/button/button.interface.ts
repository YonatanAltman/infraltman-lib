export type InfraButtonType = 'default' | 'success' | 'error';
export type InfraButtonSize = 'small' | 'medium' | 'large' | 'max';

export interface InfraClass {
  className: string;
  typeName: string;
}

export interface InfraButton {
  label?: string;
  type?: InfraButtonType;
  size?: InfraButtonSize;
  class?: InfraClass | string;
  icon?: string;
}

const b: InfraButton = {type: 'default'}
