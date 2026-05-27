import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/sidebar/Sidebar";
import Categories from "../Components/Categories/Categories";
import VideoShow from "../Components/Videoshow/VideoShow";

const Home = () => {
  const [sidebar, setSidebar] = useState(false);

  const [videos, setVideos] = useState([]);

  const API_KEY = "AIzaSyCRFA_2F54tSdj2BN-vM2SyP4OmpaMTiyI";

  /* FETCH VIDEOS */

  const fetchVideos = async (query = "trending") => {
    try {
      const res = await axios.get(
        "https://youtube.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            maxResults: 24,
            q: query,
            type: "video",
            key: API_KEY,
          },
        },
      );

      setVideos(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  /* DEFAULT VIDEOS */

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <>
      <Navbar
        sidebar={sidebar}
        setSidebar={setSidebar}
        fetchVideos={fetchVideos}
      />

      <Sidebar sidebar={sidebar} />

      <Categories fetchVideos={fetchVideos} />

      <VideoShow videos={videos} />
    </>
  );
};

export default Home;
