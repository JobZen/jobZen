import Navbar from "../navBar/page";
import Footer from "../footer/page";
const AboutUs = () => {
    return ( 
        <div className="bg-white">
         <Navbar/>
             <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-bg w-[1437px] h-[596px] relative">
        <div className="gap-[40px] absolute top-[150px] left-[87px] inline-flex  flex-col items-start">
          <div className="gap-[24px] relative flex-[0_0_auto] inline-flex flex-col items-start">
            <p className="text-black relative w-[525px] mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-text-2 text-[16px] tracking-[0] leading-[26px]">
          JobZen is the dynamic digital platform that bridges the gap between freelancers seeking exciting opportunities and businesses hunting for top talent.
          Our user-friendly interface empowers freelancers to showcase their skills and expertise, while simultaneously providing job owners a seamless experience
          to find the perfect match for their projects. With a diverse pool of skilled professionals and a myriad of job listings, 
          JobZen offers a collaborative space where talents and opportunities converge effortlessly. Join JobZen today to unlock a world of possibilities
          for your freelancing career or find the ideal talent for your next project!
            </p>
            <p className="text-black relative w-[505px] [font-family:'Poppins-Regular',Helvetica] font-normal text-text-2 text-[16px] tracking-[0] leading-[26px]">
            Explore a curated marketplace that simplifies the freelance journey, offering a range of projects across diverse industries. Our platform fosters direct communication, ensuring transparency and trust between freelancers and job owners. With JobZen's robust tools and personalized matching, finding the right fit for your project or talent has never been more efficient.
            </p>
          </div>
        </div>
        <div className="absolute w-[705px] h-[500px] top-[50px] left-[686px] bg-[#f4f3f300] rounded-[4px_0px_0px_4px] overflow-hidden">
          <img
            className="absolute w-[705px] h-[500px] top-0 left-0"
            alt="JobZen"
            src="https://i.ibb.co/GkJ2hXw/logo2.gif"
          />
        </div>
      </div>
    </div>
    <Footer/>
        </div>
     );
}
 
export default AboutUs;

