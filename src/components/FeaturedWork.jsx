
const videos = [
  {
    id: 1,
    title: "BTS — Behind the Scenes",
    category: "Short Form",
    src: "/video/Shortform/BTS.mp4",
    format: "vertical",
    description:
      "Turned raw behind-the-scenes footage into a dynamic, beat-synced edit with carefully selected shots, smooth transitions, and creative visual effects.",
    skills: ["Shot Selection", "Beat Sync", "Transitions", "Visual Effects", "Pacing"]
  },
  {
    id: 2,
    title: "Transition — Office Life",
    category: "Short Form",
    src: "/video/Shortform/Transition.mp4",
    format: "vertical",
    description:
      "Transformed unstructured office footage into a fun, engaging story about everyday workplace life using creative transitions, energetic music, on-screen text, and visual effects.",
    skills: ["Storytelling", "Transitions", "Text Overlays", "Music Selection", "Visual Effects"]
  },
  {
    id: 3,
    title: "Caption — Corporate Talking Head",
    category: "Short Form",
    src: "/video/Shortform/Caption.mp4",
    format: "vertical",
    description:
      "Edited a professional corporate talking-head video with synchronized captions, relevant B-roll, AI-generated supporting visuals, and background music.",
    skills: ["Captions", "B-Roll", "AI-Generated Visuals", "Audio Editing", "Talking-Head Editing"]
  }
];


const longVideos = [
  {
    id: 1,
    title: "Color Grading — Creative Video Edit",
    category: "Long Form",
    src: "/video/Longform/Color Grading.mp4",
    format: "horizontal",
    description:
      "Edited client-provided footage with creative transitions, background music, and color grading to create a polished, visually engaging final video.",
    skills: ["Color Grading", "Transitions", "Music Selection"]
  },
  {
    id: 2,
    title: "Midland — Medical College Promotional Video",
    category: "Long Form",
    src: "/video/Longform/Midland.mp4",
    format: "horizontal",
    description:
      "Transformed fragmented raw footage into a structured promotional video with a compelling opening hook, seamless cuts, client-provided B-roll, selective captions, background music, and sound effects.",
    skills: ["Storytelling", "Video Pacing", "B-Roll Integration", "Captions", "Sound Design", "Visual Effects"]
  },
  {
    id: 3,
    title: "Real Estate — Property & Lifestyle Video",
    category: "Long Form",
    src: "/video/Longform/Real Estate.mp4",
    format: "horizontal",
    description:
      "Transformed unstructured client footage into a cohesive real estate video through precise cuts, background music, and relevant B-roll. Sourced additional property and location visuals from the client's website to strengthen the storytelling.",
    skills: ["Real Estate Editing", "Storytelling", "B-Roll Research", "Footage Selection", "Pacing", "Music Selection"]
  }
];


function FeaturedWork() {
  return (
    <section id="work" className="bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Selected <span className="text-purple-400">Work.</span>
        </h2>

        <p className="text-gray-400 text-center mt-4">
          A collection of stories brought to life through editing.
        </p>


           
{/* Short-Form Section Heading */}



<div className="mt-16 mb-8">
  <h3 className="text-3xl font-bold">
    Short-Form <span className="text-purple-400">Edits.</span>
  </h3>

  <p className="text-gray-400 mt-3">
    Scroll-stopping reels, creative transitions, and engaging short-form content.
  </p>
</div>

{/* Video Cards */}


<div className="grid grid-cols-1 md:grid-cols-3 gap-6">


          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-gray-900 rounded-xl p-4 border border-gray-800 transition-all duration-300 hover:scale-105 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
            >

              <video
                src={video.src}
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-[9/16] object-cover rounded-lg"
              />

              <span className="inline-block mt-4 bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-md">
  {video.category}
</span>

              <h3 className="text-xl font-bold mt-4">
                {video.title}
              </h3>

              <p className="text-gray-400 text-sm mt-3">
                {video.description}
              </p>
              
<div className="flex flex-wrap gap-2 mt-4">
  {video.skills.map((skill) => (
    <span
      key={skill}
      className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full"
    >
      {skill}
    </span>
  ))}
</div>




            </div>
          ))}
          

        </div>

        

{/* Long-Form Section Heading */}


<div className="mt-20 mb-8">
  <h3 className="text-3xl font-bold">
    Long-Form <span className="text-purple-400">Projects.</span>
  </h3>

  <p className="text-gray-400 mt-3">
    Cinematic storytelling, promotional films, and professional video editing.
  </p>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

  {longVideos.map((video) => (
    <div
      key={video.id}
      className="bg-gray-900 rounded-xl p-4 border border-gray-800 transition-all duration-300 hover:scale-105 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
  >

      <video
        src={video.src}
        controls
        playsInline
        preload="metadata"
        className="w-full aspect-video object-cover rounded-lg"
      />

      <span className="inline-block mt-4 bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-md">
        {video.category}
      </span>

      <h4 className="text-xl font-bold mt-3">
        {video.title}
      </h4>

      <p className="text-gray-400 text-sm mt-3">
        {video.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {video.skills.map((skill) => (
          <span
            key={skill}
            className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  ))}

</div>


      </div>
    </section>
  );
}

export default FeaturedWork;