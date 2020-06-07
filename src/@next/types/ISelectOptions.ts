export interface ISelectOption {
  label: string;
  value: string;
  translation: ISelectOptionTranslation | null;
}

export interface ISelectOptionTranslation {
  name: string;
}
