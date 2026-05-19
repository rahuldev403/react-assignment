export function Field({
  label,
  placeholder,
  type = "text",
  required = false,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="relative block">
      <span className="absolute -top-[9px] left-3 bg-[#fafafa] px-1 text-[12px] font-semibold text-[#6c25ff]">
        {label}
        {required && <span className="text-red-500">*</span>}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="h-12 w-full rounded-[6px] border border-[#cbcbcb] bg-[#fafafa] px-4 text-[14px] text-[#31343a] outline-none placeholder:text-[#c4c4c4] focus:border-[#6c25ff]"
      />
    </label>
  );
}
