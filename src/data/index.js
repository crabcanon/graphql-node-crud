const videoA = {
  id: '1',
  title: 'videA',
  duration: 200,
  watched: false,
};

const videoB = {
  id: '2',
  title: 'videoB',
  duration: 100,
  watched: false,
};

const videos = [videoA, videoB];

const getVideoById = (id) => new Promise((resolve) => {
  const [video] = videos.filter((video) => {
    return video.id === id;
  });

  resolve(video);
});

const getVideos = () => new Promise((resolve) => resolve(videos));

const createVideo = ({ title, duration, watched }) => {
  const video = {
    id: (new Buffer.from(title, 'utf-8')).toString('base64'),
    title,
    duration,
    watched,
  }

  videos.push(video);
}

exports.getVideoById = getVideoById;
exports.getVideos = getVideos;
exports.createVideo = createVideo;






