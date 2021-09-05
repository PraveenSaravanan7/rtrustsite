import React from "react";
import { Header } from "../components/Header";

export const GalleryPage = () => {
  const content = [
    {
      name: "Wheel Chair",
      video: "1AXf6hhkEEFembPolgP_ONQ9FDNeSa-PF",
    },
    {
      name: "Small Scale Business Setup",
      video: "1zeYwBeNNOQopd8Y0-XGMIpFqPQSPI8x6",
    },
    {
      name: "Quran Distribution",
      video: "1oFm-EUhTsoijIcYHBDfH92Q5NFGumcVM",
    },
    {
      name: "Plant Saplings",
      video: "1QotHEMTPERiT-5BiOYShJUd9oPxA9gqh",
    },
    {
      name: "Orphans & Widows",
      video: "1Uqj5cItXPRs3cpf1l3eSlbASgW1_Zd7S",
    },
    {
      name: "Money Distribution",
      video: "11QFmABnktagS_1zxE7oF8Ih_WYh5Dpv1",
    },
    {
      name: "Medical Help",
      video: "1krwXmkiG7zSLODGEe6cTiUHkGOinzKi9",
    },
    {
      name: "Masjid Construction",
      video: "1A1EZsWQOCXeWrQGfjXdYWIZ7ljYE-Jyk",
    },
    {
      name: "Grocery Distribution",
      video: "1_a4LRXEKB2r_tGSvnGtgaBO9uN5S13bb",
    },
    {
      name: "Food Distribution",
      video: "1nxAfBaRycGzIS3arWn9oilaBCJKWEtEy",
    },
    {
      name: "Eid ul-Adha 2021",
      video: "1Q3aU6Bcfl3Z6usIgyo3I-vSF996ae0Hk",
    },
    {
      name: "Borewell",
      video: "1H7IYoDqSeNlRykSd6sA1FTcYnH6uB7Ct",
    },
  ];
  // const mediaIds = [
  //   "1FSFntffO03v4Ubfrou6vwMwIm1jq9zFt",
  //   "1XpJdRdQ4zp9T6xVJhXmTYyQZltmCdx_a",
  //   "1HbsB9W8hBNyrwl_D_zALvOzzbj8gK4oC",
  //   "1e2opSXcGDuE1k_V5ltGX-TqftAd922PZ",
  //   "1wtfM6iUEWy-swzp7MEw38p_8mfVhkuaq",
  //   "1cxn-Q0L6pO39q0JE4rR-jHua4J95oWt7",
  //   "1tyClQY1UHHb6XJBK3fVaSGOL0b_nrkMI",
  //   "1KPMcdrO-E3braeqNS7fvvsbWM-0hQP14",
  //   "1fIlhJuRMb5Xi9_0POs1MirTKY0dziQde",
  //   "1719yGksaSd749uxOdrwfx5DiACzBRmxY",
  //   "1Zi1ucPXZnXnSC9a6j1ov_yrK4t7ejjDP",
  //   "1hztLkph9m6sLxk4SWkbXk_J-JvzW21bq",
  //   "1sN98kQiTqBU1NjEMj3KlXpAlTkTah4PL",
  // ];
  return (
    <div>
      <Header home={false}></Header>
      <h2 className="mt-4 font-weight-bold subtitle">Our Projects</h2>
      <div className="row">
        {content.map((c) => (
          <div className="col-sm-6 mb-3" data-aos="fade-up">
            <h6 className="font-weight-bold ">{c.name}</h6>
            <video
              className="grid-box"
              src={"https://drive.google.com/uc?id=" + c.video}
              alt=""
              controls
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
