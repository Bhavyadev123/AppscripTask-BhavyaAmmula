import Image from 'next/image';
import "./Header1.css";

function Top() {
    return (
        <div className="Top">
            <Image src="/element-4.png" className="Top-image" alt="Grey Strip" width={100} height={50} />
            <Image src="/Lorem ipsum dolor.png" className="Top-image" alt="Lorem ipsum" width={200} height={50} />
            <Image src="/element-4.png" className="Top-image" alt="Grey Strip" width={100} height={50} />
            <Image src="/Lorem ipsum dolor.png" className="Top-image" alt="Lorem ipsum" width={200} height={50} />
            <Image src="/element-4.png" className="Top-image" alt="Grey Strip" width={100} height={50} />
            <Image src="/Lorem ipsum dolor.png" className="Top-image" alt="Lorem ipsum" width={200} height={50} />
        </div>
    );
}

export default Top;
