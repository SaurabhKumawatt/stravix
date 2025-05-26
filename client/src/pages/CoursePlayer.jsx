import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CoursePlayer = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [playlistId, setPlaylistId] = useState(null);
  const { slug } = useParams();
  const apiKey = import.meta.env.VITE_YT_API_KEY;
  const playerRef = useRef(null);
  const ytPlayer = useRef(null);

  // Load YouTube IFrame API
  useEffect(() => {
    const scriptId = "youtube-iframe-api";
    if (!document.getElementById(scriptId)) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.id = scriptId;
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = loadPlayer;
  }, []);

  // Initialize player when a video is selected
  useEffect(() => {
    if (selectedVideo) {
      loadPlayer();
    }
  }, [selectedVideo]);

  const loadPlayer = () => {
    if (!selectedVideo || !window.YT) return;

    if (ytPlayer.current) {
      ytPlayer.current.loadVideoById(selectedVideo.snippet.resourceId.videoId);
    } else {
      ytPlayer.current = new window.YT.Player(playerRef.current, {
        height: "390",
        width: "640",
        videoId: selectedVideo.snippet.resourceId.videoId,
        playerVars: {
          autoplay: 1,
          mute: 0,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          showinfo: 0,
          loop: 1,
          playsinline: 1,
          hl: "en",        // UI Language
          cc_lang_pref: "",  // No preferred caption language
          cc_load_policy: 0, // Disable captions
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
            hideYouTubeElements(); // Hide elements when player is ready
          },
          onStateChange: (event) => {
            if (event.data === YT.PlayerState.PLAYING) {
              hideYouTubeElements(); // Hide elements when video is playing
            }
          },
        },
      });
    }
  };

  const hideYouTubeElements = () => {
    const element = document.querySelector('.ytp-chrome-top.ytp-show-cards-title');
    if (element) {
      element.style.display = 'none'; // Hide the element
    }
  };

  const fetchCourse = async () => {
    try {
      const token = localStorage.getItem("stravix-auth-token");
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/courses/${slug}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPlaylistId(res.data.playlistId);
    } catch (err) {
      console.error("❌ Failed to fetch course:", err.message);
    }
  };

  const fetchVideos = async () => {
    if (!playlistId) return;
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
      );
      const sortedVideos = sortVideosByTitle(res.data.items);
      setVideos(sortedVideos);
      setSelectedVideo(sortedVideos[0]);
    } catch (err) {
      console.error("Failed to fetch videos:", err);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, [slug]);

  useEffect(() => {
    fetchVideos();
  }, [playlistId]);

  const sortVideosByTitle = (videos) => {
    return videos.sort((a, b) => {
      const titleA = a.snippet.title.toLowerCase();
      const titleB = b.snippet.title.toLowerCase();
      return titleA.localeCompare(titleB);
    });
  };

  useEffect(() => {
    const disableRightClick = (event) => {
      event.preventDefault();
    };

    const disableInspect = (event) => {
      if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'C' || event.key === 'J'))) {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableInspect);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableInspect);
    };
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <div className="w-full bg-white shadow-sm px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <button
          onClick={() => window.history.back()}
          className="text-blue-600 hover:underline text-sm flex items-center gap-1"
        >
          <span className="text-lg">←</span> Back to My Courses
        </button>
        <h1 className="text-md md:text-xl font-semibold text-gray-800 text-center truncate max-w-[60%] md:max-w-[70%]">
          {selectedVideo?.snippet?.title || "Loading..."}
        </h1>
        <div className="w-8" /> {/* Spacer to balance layout */}
      </div>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-[270px] bg-white border-r px-4 py-6 text-sm overflow-y-auto">
          <div className="font-semibold text-gray-800 mb-4">Video List</div>
          <ul className="space-y-3">
            {videos.map((video) => (
              <li
                key={video.id}
                className={`text-gray-700 font-medium cursor-pointer hover:text-blue-600 ${selectedVideo?.id === video.id ? "text-blue-500" : ""
                  }`}
                onClick={() => setSelectedVideo(video)}
              >
                {video.snippet.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Player Area */}
        <div className="flex-1 bg-white px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {selectedVideo ? selectedVideo.snippet.title : "Loading..."}
            </h2>
          </div>

          {/* Custom Cropped Player */}
          <div className="w-full aspect-video overflow-hidden relative">
            <div
              id="player"
              ref={playerRef}
              className="absolute top-0 left-[-100%] w-[300%] h-[100%]"
            ></div>
          </div>
        </div>

      </div>
    </>
  );
};

export default CoursePlayer;