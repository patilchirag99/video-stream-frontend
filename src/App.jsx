import { Toaster } from "react-hot-toast";
import "./App.css";
import VideoUpload from "./components/VideoUpload";
import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import { Button, TextInput } from "flowbite-react";

function App() {
  const [videoId, setVideoId] = useState(
    "f2a91d5e-b1ef-4e20-a913-91c72ba0c699"
  );

  const [fieldValue, setFieldValue] = useState(null);

  function playVideo(videoId){
    setVideoId(videoId);
  }
  return (
    <>
      <Toaster></Toaster>
      <div className="flex flex-col items-center space-y-9 justify-center py-9">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          {" "}
          Video streaming app
        </h1>

        <div className="flex w-full justify-around mt-14">
          <div>
            <h1 className="text-white text-center">Playing video</h1>
            {/* <video 
            // src={`http://localhost:8080/api/v1/videos/stream/range/${videoId}`} 
            src={`http://localhost:8080/api/v1/videos/f2a91d5e-b1ef-4e20-a913-91c72ba0c699/master.m3u8`} 
            controls style={{
            width:500,
            height:500
          }}></video> */}

            {/* <video
              id="my-video"
              class="video-js"
              controls
              preload="auto"
              width="640"
              height="264"
              poster="MY_VIDEO_POSTER.jpg"
              data-setup="{}"
            >
              <source src={`http://localhost:8080/api/v1/videos/stream/range/${videoId}`} type="video/mp4" />
              
              <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider
                upgrading to a web browser that
                <a
                  href="https://videojs.com/html5-video-support/"
                  target="_blank"
                >
                  supports HTML5 video
                </a>
              </p>
            </video> */}
            
            <div>
              <VideoPlayer src={`http://localhost:8080/api/v1/videos/${videoId}/master.m3u8`}></VideoPlayer>
            </div>
          </div>
          <VideoUpload />
        </div>
        <div className="my-4 flex space-x-4">
              <TextInput onChange={(event) => {
                setFieldValue(event.target.value);
              }} name="video_id_field" placeholder="Enter video id here"></TextInput>
              <Button onClick={() => {
                setVideoId(fieldValue);
              }} >Play</Button>
            </div>

      </div>
      
    </>
  );
}

export default App;
