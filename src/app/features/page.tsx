import { Hero2, FeaturesCard, SignupCard } from "../components"
import { feature1, feature2, feature3, sakura } from "../assets/images"

export default function Home() {
    return (
            <div className='flex flex-col justify-center items-center text-white bg-bg3 bg-fixed'>
                <div className="bg-bg1 bg-fixed bg-no-repeat bg-cover pb-36">
                    <div className="align-middle">
                        <Hero2 title="Features" content="Thriving in Digital Tranquility: Cyber Sakura, Your Security Oasis, where peace of mind and protection flourish in the ever-changing digital landscape."/>
                    </div>
                </div>
                <div className="bg-bg1 bg-fixed md:px-6 sm:px-3 xxs:px-2 py-24 md:w-[99vw] sm:flex-row sm:flex-wrap sm:justify-center sm:w-screen xxs:w-screen">
                    <FeaturesCard 
                        title={"Password Manager"} 
                        image={feature3} 
                        content={"With the Password Manager feature of Cyber Sakura, you can enjoy the convenience of easily managing and securing your passwords while strengthening your overall online security. Say goodbye to password-related worries and embrace a more secure digital experience."} 
                        isFlip={false}  
                    />
                </div>
                <div className="bg-bg2 bg-fixed md:px-6 sm:px-3 xxs:px-2 py-24 md:w-[99vw] sm:flex-row sm:flex-wrap sm:justify-center sm:w-screen xxs:w-screen">
                    <FeaturesCard
                        title={"Secure Cloud Backup"}
                        image={feature2}
                        content={"Protect your valuable files and memories with Cyber Sakura's secure cloud backup feature. Safeguard your important documents, photos, videos, and other digital assets by securely storing them in the cloud. Even if your device is compromised or experiences a hardware failure, you can easily restore your data and resume with peace of mind."}
                        isFlip={true}
                    />
                </div>
                <div className="bg-bg1 bg-fixed md:px-6 sm:px-3 xxs:px-2 py-24 md:w-[99vw] sm:flex-row sm:flex-wrap sm:justify-center sm:w-screen xxs:w-screen">
                    <FeaturesCard 
                        title={"Real-time Threat Detection"} 
                        image={feature1} 
                        content={"Cyber Sakura's advanced security algorithms constantly monitor your devices, networks, and online activities, detecting and neutralizing potential threats in real time. With our cutting-edge technology, you can browse, download, and connect with confidence, knowing that Cyber Sakura has your back."} 
                        isFlip={false}  
                    />
                </div>
                <div className="bg-bg1 bg-fixed px-6 md:py-24 sm:py-3 xxs:py-2  ">
                    <SignupCard title={"Get Started!"} image={sakura} content={'Get Started with Cyber Sakura: Secure Your Digital World'} />
                </div>
            </div>
    )
}