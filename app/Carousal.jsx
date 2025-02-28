const double = [
  '/images/img1.png',
  '/images/img2.png',
  '/images/img3.png',
  '/images/img4.png',
  '/images/img5.png',
  '/images/img5.png',
  '/images/img4.png',
  '/images/img3.png',
  '/images/img2.png',
  '/images/img1.png',
  '/images/img1.png',
  '/images/img2.png',
  '/images/img3.png',
  '/images/img4.png',
  '/images/img5.png',
  '/images/img5.png',
  '/images/img4.png',
  '/images/img3.png',
  '/images/img2.png',
  '/images/img1.png',
  
];


const RotatingText = () => {
  return (
    <div className="overflow-hidden w-full bg-transparent flex items-center">
      <div className="relative flex w-full">
        {/* First Layer */}
        <div className="flex whitespace-nowrap animate-marquee">
          {double.map((text, index) => (
            <img src={text} alt="" key={index} className="mx-4 h-20 object-contain" />
          ))}
        </div>
        {/* Duplicate Layer for Seamless Loop */}
        {/* <div className="flex whitespace-nowrap animate-marquee absolute top-0 left-full" aria-hidden="true">
          {double.map((text, index) => (
            <img src={text} alt="" key={`duplicate-${index}`} className="mx-4 h-20 object-contain" />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default RotatingText;
