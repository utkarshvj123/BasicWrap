import React, { useEffect, useState, Suspense } from "react";
import { useDispatch } from "react-redux";
import { getCompleteAlbums } from "./actions";
import "./style.scss";
import Loader from "../../Components/Loader";

const LandingPage = () => {
  const [currentState, setCurrentState] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getCompleteAlbums()).then((response) => {
    //   setCurrentState(response?.data);
    // });
  }, [dispatch]);
  return <Suspense fallback={<Loader />}>{<div>hello</div>}</Suspense>;
};
export default LandingPage;
