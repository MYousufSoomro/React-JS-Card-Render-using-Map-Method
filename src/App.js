import "./App.css";

function App() {
  const products = [
    {
      title: "Oppo Find N3 Flip",
      img: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-n3-flip-1.jpg",
      description:
        "Released 2023, September 08, 198g, 7.8mm thickness, Android 13, ColorOS 13.2, 256GB/512GB storage, no card slot",
      price: 1299,
    },
    {
      title: "Samsung Galaxy A05",
      img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a05.jpg",
      description:
        "Released 2023, October 15, 195g, 8.8mm thickness, Android 13, 128GB storage, microSDXC",
      price: 130,
    },
    {
      title: "Google Pixel Watch 2",
      img: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-watch-2-1.jpg",
      description:
        "Released 2023, October 12, 31g, 12.3mm thickness, Android Wear OS 4, 32GB storage, no card slot",
      price: 369,
    },
    {
      title: "Honor X9b",
      img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x9b-2.jpg",
      description:
        "Exp. release 2023, October, 185g, 8mm thickness, Android 13, Magic UI 7.2, 256GB storage, no card slot",
      price: 1099,
    },
    {
      title: "Oppo Find N3",
      img: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-n3-5.jpg",
      description:
        "Exp. release 2023, October 27, 245g, 5.8mm thickness, Android 13, ColorOS 13.2, 1TB storage, no card slot",
      price: 899,
    },
  ];

  return (
    <div className="container">
      {products.map((elem, ind) => {
        return (
          <div className="card" key={ind}>
            <div>
              <h2>{elem.title}</h2>
              <img
                className="card-img"
                src={elem.img}
                width="100%"
                alt={elem.title}
              />
            </div>
            <p>{elem.description}</p>
            <button className="card-BTN">Buy Only for {elem.price}</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
