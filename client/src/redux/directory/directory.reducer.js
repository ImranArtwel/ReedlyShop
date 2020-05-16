const INITIAL_STATE = {
  sections: [
    {
      title: "music",
      imageUrl: "https://i.ibb.co/Hn15My5/ngoma.jpg",
      id: 1,
      linkUrl: "shop/music",
    },
    {
      title: "pottery",
      imageUrl: "https://i.ibb.co/s1BX81N/pottery.jpg",
      id: 2,
      linkUrl: "shop/pottery",
    },
    {
      title: "drawings",
      imageUrl: "https://i.ibb.co/SBM7HYf/drawing.jpg",
      id: 3,
      linkUrl: "shop/drawings",
    },
    {
      title: "sculptures",
      imageUrl: "https://i.ibb.co/HYkZyLy/sculpture.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/sculptures",
    },
    {
      title: "mosaics",
      imageUrl: "https://i.ibb.co/QMjXfYd/mosaic.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mosaics",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
