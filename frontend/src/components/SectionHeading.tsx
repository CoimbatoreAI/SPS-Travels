interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, light }: SectionHeadingProps) => (
  <div className="text-center mb-12 md:mb-16">
    {subtitle && (
      <span className="text-gold font-heading text-sm font-semibold uppercase tracking-[0.2em] mb-2 block">
        {subtitle}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-4 max-w-2xl mx-auto text-base ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
