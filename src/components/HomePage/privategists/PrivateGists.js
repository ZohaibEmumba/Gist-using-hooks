import React, { useEffect, useState } from "react";
import { privateGistsRecord } from "../../../utils/fetchAPIs";
import TableData from "../../common/table/TableData";
import GridDisplay from "../../common/grid/Grid";
import Loader from "../../common/spinner/Spinner";
import { Section, Div } from "../../mainpage/publicgists/style";

const PrivateGists = () => {
  const [loading, setLoading] = useState(false);
  const [privateRecord, setPrivateRecord] = useState([]);
  const [isListView, setIsListView] = useState(true);
  const [isGridView, setIsGridView] = useState(false);
  const [isActive, setIsActive] = useState("list");

  const TableView = loading ? (
    <Loader />
  ) : (
    <TableData publicGistsDisplay={privateRecord} />
  );
  const GridView = loading ? (
    <Loader />
  ) : (
    <GridDisplay publicGistsDisplay={privateRecord} />
  );

  const getData = async () => {
    setLoading(true);
    let val = await privateGistsRecord().then((data) => {
      setLoading(false);
      setPrivateRecord(data);
    });
  };
  const listToggle = () => {
    console.log("clicked");
    setIsListView(true);
    setIsGridView(false);
    setIsActive("list");
  };

  const gridToggle = () => {
    setIsListView(false);
    setIsGridView(true);
    setIsActive("grid");
  };

  useEffect(() => {
    getData();
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
