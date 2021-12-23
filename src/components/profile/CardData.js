import React from "react";
import { NoContent } from "../../constants/Constants";
import {
  CardHeader,
  ProfileCol,
  LeftSec,
  GistIcons,
  ContentBody,
  CardBody,
  CardBodyContent,
  Icon1,
  Img,
  Span1,
} from "./style";
import { Span, SpanValues, Icon } from "../unique-gist/style";

const CardData = ({ gists, gistStarValue, starThisGist }) => {
  const starType = gistStarValue === 0 ? "far fa-star" : "fas fa-star";
  const { files } = gists;
  let filename;
  let content;
  let myContentArray;

  if (files !== undefined) {
    Object.values(files).map((file) => {
      filename = file.filename;
      content = file.content;
    });
    myContentArray = content.split("\n");
  }

  return (
    <>
      {gists &&
        gists.map((item, index) => (
          <CardHeader key={index}>
            <LeftSec>
              <ProfileCol>
                <Img src={item?.owner?.avatar_url} alt="profile" />
                <div>
                  <span>
                    <h4>
                      {item?.owner?.login}/{Object.keys(item?.files)[0]}
                    </h4>
                    <span>{item?.updated_at}</span>
                    <br />
                    <span></span>
                  </span>
                </div>
              </ProfileCol>
              <GistIcons>
                <Icon1>
                  <Span>
                    <Icon className={starType} onClick={() => starThisGist()} />
                    Star
                  </Span>
                  <SpanValues>0</SpanValues>
                </Icon1>
                <Icon1>
                  <Span>
                    <Icon className="fas fa-code-branch" /> Fork
                  </Span>
                  <SpanValues>0</SpanValues>
                </Icon1>
              </GistIcons>
            </LeftSec>

            <ContentBody>
              <CardBody>
                <i className="fas fa-code"></i>
                <span>{Object.keys(item?.files)[0]}</span>
              </CardBody>
              <CardBodyContent>
                {myContentArray
                  ? myContentArray?.map((content, index) => {
                      return (
                        <span>
                          <p>
                            <Span1>{++index}</Span1> {content}
                          </p>
                        </span>
                      );
                    })
                  : NoContent}
              </CardBodyContent>
            </ContentBody>
          </CardHeader>
        ))}
      ;
    </>
  );
};

export default CardData;
