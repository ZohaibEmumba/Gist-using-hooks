import React from 'react'

function UniqueGist() {
    return (
        <div className="whole-card-section">
          <section className="card-header-public">
            <div className="profile-section">
              <div>
                <img
                  src=""
                  alt="profile"
                  className="profile-pic"
                />
              </div>
              <div className="">
                <span className="">
                  <h4 id="headings">
                    {uniqueData?.owner?.login}/{filename}{" "}
                  </h4>
                  <span>Created 7 housrs Ago</span>
                  <br />
                  <span> Broadcast Server</span>
                </span>
              </div>
            </div>

            <div className="gist-icons">
              {uniqueData?.owner?.login === myUserName ? (
                <>
                  <span style={{ color: "blue" }}>
                    <i className="far fa-edit" onClick={this.updateGist}></i>{" "}
                    Edit
                  </span>
                  <span style={{ color: "blue" }}>
                    <i className="far fa-trash-alt" onClick={this.delGist}></i>{" "}
                    Delete
                  </span>
                </>
              ) : null}
              <div className="icons1">
                <span style={{ color: "blue" }}>
                  <i
                    className={
                      gistStarValue === 0 ? "far fa-star" : "fas fa-star"
                    }
                    onClick={this.starGist}
                  ></i>{" "}
                  Star
                </span>
                <span
                  style={{
                    border: "1px solid gray",
                    padding: "0px 15px",
                    borderRadius: "5px",
                  }}
                >
                  {gistStarValue}
                </span>
              </div>
              <div className="icons2">
                <span style={{ color: "blue" }}>
                  <i
                    className="fas fa-code-branch"
                    style={{ color: "blue" }}
                    onClick={this.forkGist}
                  ></i>{" "}
                  Fork
                </span>
                <span
                  style={{
                    border: "1px solid gray",
                    padding: "0px 15px",
                    borderRadius: "5px",
                  }}
                >
                  {gistForkValue}
                </span>
              </div>
            </div>
          </section>
          <section className="body">
            <div className="card-body">
              <i className="fas fa-code"></i>
              <span className="file-name">
                {"  "} {filename}{" "}
              </span>
            </div>
            <div className="card-body-content">
              {myContentArray !== undefined
                ? myContentArray?.map((content, index) => {
                    return (
                      <span key={index}>
                        {" "}
                        <p>
                          <span
                            style={{ fontWeight: "700", marginRight: "10px" }}
                          >
                            {++index}
                          </span>{" "}
                          {content}{" "}
                        </p>{" "}
                      </span>
                    );
                  })
                : "No Content There......."}
            </div>
          </section>
        </div>
    )
}

export default UniqueGist
