import type { ChoiceOption } from "@/data/estimator-options";

type ChoiceGridProps = {
  options: ChoiceOption[];
  group: string;
  selected?: string;
  columns?: "three" | "two";
  onSelect: (group: string, value: string) => void;
};

export const ChoiceGrid = ({
  options,
  group,
  selected,
  columns = "three",
  onSelect,
}: ChoiceGridProps): React.JSX.Element => {
  return (
    <div
      className={columns === "two" ? "choices two" : "choices"}
      role="group"
      aria-label={group}
    >
      {options.map((option) => {
        const isSelected = selected === option.value;

        return (
          <button
            key={option.value}
            type="button"
            className={isSelected ? "choice selected" : "choice"}
            aria-pressed={isSelected}
            onClick={() => onSelect(group, option.value)}
          >
            <strong>{option.label}</strong>
            {option.detail ? <small>{option.detail}</small> : null}
          </button>
        );
      })}
    </div>
  );
};
