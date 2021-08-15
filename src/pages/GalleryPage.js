import React from "react";
import { Header } from "../components/Header";

export const GalleryPage = () => {
  const mediaIds = [
    "1FSFntffO03v4Ubfrou6vwMwIm1jq9zFt",
    "1HbsB9W8hBNyrwl_D_zALvOzzbj8gK4oC",
    "1XpJdRdQ4zp9T6xVJhXmTYyQZltmCdx_a",
    "1e2opSXcGDuE1k_V5ltGX-TqftAd922PZ",
    "1wtfM6iUEWy-swzp7MEw38p_8mfVhkuaq",
    "1cxn-Q0L6pO39q0JE4rR-jHua4J95oWt7",
    "1tyClQY1UHHb6XJBK3fVaSGOL0b_nrkMI",
    "1KPMcdrO-E3braeqNS7fvvsbWM-0hQP14",
    "1fIlhJuRMb5Xi9_0POs1MirTKY0dziQde",
    "1719yGksaSd749uxOdrwfx5DiACzBRmxY",
    "1Zi1ucPXZnXnSC9a6j1ov_yrK4t7ejjDP",
    "1hztLkph9m6sLxk4SWkbXk_J-JvzW21bq",
    "1sN98kQiTqBU1NjEMj3KlXpAlTkTah4PL",
  ];
  return (
    <div>
      <Header home={false}></Header>
      <h2 className="mt-4 font-weight-bold subtitle">Our Projects</h2>
      <div className="row">
        {mediaIds.map((ids) => (
          <div className="col-sm-6 mb-3" data-aos="fade-up">
            <img
              className="grid-box"
              src={"https://drive.google.com/uc?id=" + ids}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-5 mb-3">
        <h6 className="text-muted">
          © Copyright Rahma Welfare Charitable Trust. All Rights Reserved.
        </h6>
      </div>
    </div>
  );
};
