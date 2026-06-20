type FilterValue = "all" | "income" | "expense";

interface FilterButtonsProps {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
}

function FilterButtons({ active, onChange }: FilterButtonsProps) {
  const options: { label: string; value: FilterValue }[] = [
    { label: "All", value: "all" },
    { label: "Income", value: "income" },
    { label: "Expenses", value: "expense" },
  ];

  return (
    <div className="flex gap-2 mb-4">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            active === option.value
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 hover:bg-gray-100"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
