type HeadingProps = {
  title: string;
  subtitle?: string;
  description?: string;
  center?: boolean;
};

export default function Heading({
  title,
  subtitle,
  description,
  center,
}: HeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-3xl text-slate-600">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="mx-auto mt-4 max-w-3xl text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}