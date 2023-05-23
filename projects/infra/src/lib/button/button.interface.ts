export type InfraButtonType = 'default' | 'success' | 'error';
export type InfraButtonSize = 'small' | 'medium' | 'large' | 'max';

export interface InfraClass {
  className: string;
  typeName: string;
}
export type Color = 'primary' | 'secondary' | 'accent';
export interface InfraButton {
  label?: string;
  type?: InfraButtonType;
  size?: InfraButtonSize;
  class?: InfraClass | string;
  icon?: string;
  color?: Color;

}

const b: InfraButton = {type: 'default'}
