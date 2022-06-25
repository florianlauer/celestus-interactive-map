import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useQuery } from "react-query";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import axios from "axios";

import { Typography } from "@mui/material";
import { MapContainer, TileLayer } from "react-leaflet";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const MapWithNoSSR = dynamic(() => import("../pages/components/Map/Map"), {
  ssr: false,
});
const fetcher = async () => {
  const { data } = await axios.get<{ name: string }>("/api/hello");
  return data;
};

const Home: NextPage = () => {
  const { data } = useQuery("/api/hello", fetcher);
  return (
    <PageWrapper>
      <Typography sx={{ fontWeight: "semibold" }} variant="h4" color="blue">
        Coucou {data?.name}
      </Typography>
      <MapWrapper>
        <MapWithNoSSR />
      </MapWrapper>
    </PageWrapper>
  );
};

export default Home;

const PageWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MapWrapper = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
`;
