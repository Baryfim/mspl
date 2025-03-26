import classesList from "./List.module.css"

const List = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className={classesList.list}>
            {children}
        </div>
    )
}

export default List;