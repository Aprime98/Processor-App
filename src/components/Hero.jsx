import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (

     <div className="px-5 py-12 ">
        <header className="text-4xl font-semibold pb-3 text-slate-800">Yoghurt Raw Materials</header>
        <div className="bg-orange-400 h-[3px] w-24 mb-12"/>
        <Slider {...settings} className="mx-6">
            <div className="border border-slate-400 shadow-lg px-4 flex justify-center items-center rounded-md">
                <h1 className="font-bold text-xl">ESL</h1>    
                <p className="font-semibold">200ml film - 3400</p>
                <p className="font-semibold">500ml film - 3400</p>        
            </div>
            <div className="border border-slate-400 shadow-lg px-4 flex justify-center items-center rounded-md">
                <h1 className="font-bold text-xl">YOGHURT</h1>    
                <p className="font-semibold">100ml Relish yoghurt strawberry cup - 3400</p>
                <p className="font-semibold">100/150/250ml Strawberry Foil - 3400</p>        
                <p className="font-semibold">150/250ml Tray - 3400</p>        
                <p className="font-semibold">100ml Relish yoghurt vanilla cup - 3400</p>        
                <p className="font-semibold">100/150/250ml Vanilla Foil - 3400</p>        
                <p className="font-semibold">150ml Relish yoghurt strawberry cup - 3400</p>        
                <p className="font-semibold">150ml Relish yoghurt vanilla cup - 3400</p>        
                <p className="font-semibold">250ml Relish yoghurt vanilla cup - 3400</p>        
                <p className="font-semibold">250ml Relish yoghurt strawberry cup - 3400</p>        
                <p className="font-semibold">500ml Relish yoghurt vanilla cup - 3400</p>        
                <p className="font-semibold">500ml Relish yoghurt strawberry cup - 3400</p>        
                <p className="font-semibold">	500ml Vanilla Foil - 3400</p>        
                <p className="font-semibold">500ml Tray - 3400</p>        
                <p className="font-semibold">500ml lids - 3400</p>        
                <p className="font-semibold">5/3/2/1 Ltrs yoghurt cap - 3400</p>        
                <p className="font-semibold">5LTR vanilla label - 3400</p>        
                <p className="font-semibold">5 ltr Jerrycan - 3400</p>        
            </div>
        </Slider>
    </div>

  )
}

export default Hero