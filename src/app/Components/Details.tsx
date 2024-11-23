import Image from 'next/image';
import img from '../assets/card1.jpg'
import img2 from '../assets/card2.jpg'
import img3 from '../assets/card3.jpg'
const Details = () => {
  return (
    <main>
      <div className="flex items-center justify-center ml-64 mr-72">
        <h1 className="text-4xl mt-12 font-extrabold text-blue-900">
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur
        </h1>
        <h1 className="absolute mt-32 text-4xl font-extrabold text-blue-900">
          Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>
      </div>

      <div className="px-32 mr-44 ml-28">
        <p className="text-2xl mt-20 px-40 ml-28">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>
      </div>

      <div className='ml-64 mt-8 flex items-center space-x-6 mr-124'>
        <Image src={img} alt='' className='ml-64 w-124 h-72 ml-80 rounded-lg'/>
        <Image src={img2} alt='' className='w-124 h-72 ml-80 rounded-lg'/>
        <Image src={img3} alt='' className='w-124 h-72 ml-80 rounded-lg'/>
      </div>
    </main>
  );
};

export default Details;
