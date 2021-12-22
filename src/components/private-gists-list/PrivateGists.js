import React, { useEffect, useState, useCallback, useMemo } from "react";
import { privateGistsRecord, checkGistStared } from "../../utils/fetchAPIs";
import TableData from "../common/table/TableData";
import GridDisplay from "../common/grid/Grid";
import Loader from "../common/spinner/Spinner";
import { Section, Div, SpanBorder } from "../public-gists-list/style";

const PrivateGists = () => {
  const [loading, setLoading] = useState(false);
  const [privateGistsList, setPrivateGistsList] = useState([]);
  const [isListView, setIsListView] = useState(true);
  const [isGridView, setIsGridView] = useState(false);
  const [isActive, setIsActive] = useState("list");

  const LoaderCallback = useCallback(() => {
    return <Loader />;
  }, [Loader]);

  const TableView = loading ? (LoaderCallback) : (<TableData privateGistsDisplay={privateGistsList} />);
  const GridView = loading ? (LoaderCallback) : (<GridDisplay privateGistsDisplay={privateGistsList} />);

  const getPrivateGists = useCallback(async () => {
    setLoading(true);
    const resp = await privateGistsRecord();     
      setLoading(false);
      setPrivateGistsList(resp); 
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

  const listView = isActive === "list"  ? "fas fa-list fa-2x list-active"     : "fas fa-list fa-2x";
  const gridView = isActive === "grid"  ? "fas fa-th-large fa-2x grid-active" : "fas fa-th-large fa-2x";
  const views = isListView === true && isGridView === false ? TableView : GridView;

  useEffect(() => {
    getPrivateGists();
  }, []);

  return (
    <Section>
      <Div>
        <span>
          <i className={listView} onClick={() => listToggle()} />
        </span>
        <SpanBorder></SpanBorder>
        <span>
          <i className={gridView} onClick={() => gridToggle()} />
        </span>
      </Div>
      {views}
    </Section>
  );
};

export default PrivateGists;
