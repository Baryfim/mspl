import Typography from "@/ui/Typography/Typography";
import classesCollection from "./Collection.module.css";
import Document, { IDocumentsProps } from "../document/Document";
import Grid from "../grid/Grid";

interface ICollectionProps {
  title: string;
  documents: IDocumentsProps[];
}

const Collection = ({ title, documents }: ICollectionProps) => {
  return (
    <div className={classesCollection.collection_inner}>
      <Typography size="small" color="light" center>
        {title}
      </Typography>
      <Grid>
        {documents &&
          documents.map((document) => (
            <Document key={document.title} {...document} />
          ))}
      </Grid>
    </div>
  );
};

export default Collection;
