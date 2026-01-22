export type Option = {
  value: string;
  label: string;
};

export type SelectProps = {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};
