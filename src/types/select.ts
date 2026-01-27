export type Option = {
  value: string | number;
  label: string;
};

export type SelectProps = {
  label: string;
  options: Option[];
  value: string | number;
  onChange: (value: string) => void; // Ce que retourne le DOM (toujours une string)
  placeholder?: string;
};
