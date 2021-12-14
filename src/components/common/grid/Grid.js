import React from "react";
import {
  Card,
  Footer,
  Grid,
  ProfileFooter,
  Profile,
  ProfilePic,
} from "./style";

const GridDisplay = () => {
  return (
    <>
      <Card>
        <Grid>
          <div>
            <span>
              {" "}
              <p>
                <span
                  style={{
                    fontWeight: "700",
                    marginRight: "10px",
                  }}
                ></span>{" "}
              </p>{" "}
            </span>
          </div>
          <Footer>
            <div>
              <ProfilePic src="" alt="profile" />
            </div>
            <Profile>
              <ProfileFooter>
                <h4>Hello</h4>
                <span>Created 7 housrs Ago</span>
                <br />
                <span> Broadcast Server</span>
              </ProfileFooter>
            </Profile>
          </Footer>
        </Grid>
      </Card>
    </>
  );
};

export default GridDisplay;
