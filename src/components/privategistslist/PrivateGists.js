import React, { useEffect, useState, useCallback, useMemo } from "react";
import { privateGistsRecord, checkGistStared } from "../../utils/fetchAPIs";
import TableData from "../common/table/TableData";
import GridDisplay from "../common/grid/Grid";
import Loader from "../common/spinner/Spinner";
import { Section, Div } from "../publicgistslist/style";

const PrivateGists = () => {
  const [loading, setLoading] = useState(false);
  const [privateGistsList, setPrivateGistsList] = useState([]);
  const [isListView, setIsListView] = useState(true);
  const [isGridView, setIsGridView] = useState(false);
  const [isActive, setIsActive] = useState("list");

  const LoaderCallback = useMemo(() => {
    return <Loader />;
  }, [Loader]);

  const TableView = loading ? (
    LoaderCallback
  ) : (
    <TableData privateGistsDisplay={privateGistsList} />
  );
  const GridView = loading ? (
    LoaderCallback
  ) : (
    <GridDisplay privateGistsDisplay={privateGistsList} />
  );

  const getPrivateGists = useCallback(async () => {
    setLoading(true);
    let val = await privateGistsRecord().then((data) => {
      setLoading(false);
      setPrivateGistsList(data);
    });
  }, [privateGistsRecord]);

  const listToggle = useCallback(() => {
    setIsListView(true);
    setIsGridView(false);
    setIsActive("list");
  }, [isGridView, isListView, isActive]);

  const gridToggle = useCallback(() => {
    setIsListView(false);
    setIsGridView(true);
    setIsActive("grid");
  }, [isGridView, isListView, isActive]);

  useEffect(() => {
    getPrivateGists();
  }, []);

  return (
    <Section>
      <Div>
        <span>
          <i
            className={
              isActive === "list"
                ? "fas fa-list fa-2x list-active"
                : "fas fa-list fa-2x"
            }
            onClick={() => listToggle()}
          ></i>
        </span>
        <span style={{ border: "1px solid #5acba1" }}></span>
        <span>
          <i
            className={
              isActive === "grid"
                ? "fas fa-th-large fa-2x grid-active"
                : "fas fa-th-large fa-2x"
            }
            onClick={() => gridToggle()}
          ></i>
        </span>
      </Div>
      {isListView === true && isGridView === false ? TableView : GridView}
    </Section>
  );
};

export default PrivateGists;
