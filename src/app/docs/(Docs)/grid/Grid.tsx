import Document from "../document/Document";
import classesGird from "./Grid.module.css"


const Grid = ({
    children
}: Readonly<{children: React.ReactNode}>) => {
    return (
        <div className={classesGird.grid}>
            {children}
        </div>
    )
}

export default Grid;