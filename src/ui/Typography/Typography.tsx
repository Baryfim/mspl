import classesTypography from "./Typography.module.css"


export default function Typography({
    size,
    color,
    center,
    children,
}: Readonly<{
  size: "small" | "medium" | "large",
  color: "light" | "dark",
  center?: boolean;
  children: React.ReactNode;
}>) {
    return <h1 className={`${classesTypography.base} ${classesTypography[`size-${size}`]} ${classesTypography[`color-${color}`]}`} style={{
        textAlign: center ? "center" : "left",
    }}>
        {children}
    </h1>
}