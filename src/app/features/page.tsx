import { Hero2, FeaturesCard, SignupCard } from "../components"
import { feature1, feature2, feature3 } from "../assets/images"

export default function Home() {
    return (
            <div className='flex flex-col justify-center text-white bg-bg3 bg-fixed'>
                <div className="bg-bg1 bg-fixed bg-no-repeat bg-cove p-6">
                    <div className="align-middle">
                        <Hero2 title="Features" />
                    </div>
                </div>
                <div className="bg-bg1 bg-fixed p-6">
                    <FeaturesCard 
                        title={"Password Manager"} 
                        image={feature3} 
                        content={"With the Password Manager feature of Cyber Sakura, you can enjoy the convenience of easily managing and securing your passwords while strengthening your overall online security. Say goodbye to password-related worries and embrace a more secure digital experience."} 
                        isFlip={true}  
                    />
                </div>
                <div className="bg-bg2 bg-fixed p-6">
                    <FeaturesCard
                        title={"Secure Cloud Backup"}
                        image={feature2}
                        content={"Protect your valuable files and memories with Cyber Sakura's secure cloud backup feature. Safeguard your important documents, photos, videos, and other digital assets by securely storing them in the cloud. Even if your device is compromised or experiences a hardware failure, you can easily restore your data and resume with peace of mind."}
                        isFlip={false}
                    />
                </div>
                <div className="bg-bg1 bg-fixed p-6">
                    <FeaturesCard 
                        title={"Real-time Threat Detection"} 
                        image={feature1} 
                        content={"Cyber Sakura's advanced security algorithms constantly monitor your devices, networks, and online activities, detecting and neutralizing potential threats in real time. With our cutting-edge technology, you can browse, download, and connect with confidence, knowing that Cyber Sakura has your back."} 
                        isFlip={true}  
                    />
                </div>
                <div className="bg-bg1 bg-fixed p-6 pb-6">
                    <SignupCard title={"Get Started!"} image={feature3} content={'Get Started with Cyber Sakura: Secure Your Digital World'} />
                </div>
            </div>
    )
}