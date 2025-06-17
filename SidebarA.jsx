import React, { useState } from 'react';
import { MdLocalPhone, MdLocationOn } from 'react-icons/md';
import { IoMailSharp } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';
// import Contactus from "./Contactus"
import { Link } from "react-router-dom";
import Contactus from "./Contactus.jsx"


const sectionData = {
     section0: {
    label: 'Company Overview',
    type: 'content',
    blocks: [
      { type: 'h1', text: 'Company Overview' },
      { type: 'p',  text: 'With decades of experience in the legal profession, we have evolved from individual practitioners to a well-established law firm, officially registered as an LLC to better serve our diverse, global client base. Specializing in financial litigation, our firm has built a robust reputation for handling complex cases with precision, particularly those involving financial recovery from online scams. We are experts in recovering funds lost due to fraudulent activities in areas such as binary options trading, forex scams, cryptocurrency fraud, and deceptive asset management schemes.' },
      { type: 'p',  text: 'Over the years, we have successfully helped hundreds of clients who have suffered significant financial losses through these fraudulent schemes. Our firm’s success in these cases is evidenced by an outstanding success rate of over 80%, demonstrating our ability to navigate even the most challenging financial recovery cases. We understand the stress and urgency that accompanies financial losses due to scams, and we are committed to providing our clients with the support they need during these trying times.' },
      { type: 'p',  text: 'Our team consists of in-house attorneys with deep expertise in financial law, as well as financial analysts, investigators, and experts who specialize in tracing assets, uncovering fraudulent practices, and navigating complex financial transactions. This diverse team allows us to approach each case from multiple angles, ensuring a thorough investigation and the most effective recovery strategy.' },
      { type: 'p',  text:'As a firm, we are committed to offering personalized, client-centered solutions. We take the time to understand the unique circumstances of each case, providing tailored legal strategies that are designed to achieve the best possible outcomes for our clients. Our comprehensive approach integrates legal expertise with innovative investigative techniques to recover funds quickly and effectively. '},
      { type: 'p',  text:'Our decision to expand our services by registering as an LLC has allowed us to streamline operations, improve client services, and build stronger relationships with clients worldwide. This expansion enables us to offer more robust and efficient solutions while maintaining the same high standards of excellence that have earned us the trust of clients around the world. We are dedicated to providing the highest quality legal support to individuals who have fallen victim to online scams, ensuring that they receive the justice and financial recovery they deserve.'},
    ],
  },
      section1: {
    label: 'Our Team',
    type: 'content',
    blocks: [
      { type: 'h1', text: 'Our Team' },
      { type: 'p',  text: '  Our team is composed of highly skilled attorneys, financial experts, and professionals, each specializing in financial litigation and the intricate process of recovering funds lost to online scams. With years of experience in the legal and financial sectors, our firm has developed a deep understanding of the complexities involved in cases of financial fraud. We focus on some of the most pervasive and damaging scams in the financial markets, including binary options fraud, forex manipulation, cryptocurrency scams, and deceptive asset management schemes. These types of frauds often involve intricate networks, complex financial transactions, and deceptive tactics that make recovery challenging, but our team has the knowledge and resources to tackle them head-on.' },
      { type: 'p',  text: 'While our firm has grown into a highly efficient legal entity, we remain committed to maintaining a personal touch in our client relationships. We understand that every client’s situation is unique, and we make it a priority to offer individualized legal counsel tailored to the specific needs of each case. Whether you have lost funds in a complex forex trading scam or a fraudulent cryptocurrency investment, our attorneys provide expert guidance every step of the way, working closely with you to understand the details of your case and the best path to recovery.' },
      { type: 'p',  text: 'In addition to our legal expertise, we employ a wide range of specialists who enhance our ability to recover lost assets. We have dedicated experts from banking, finance, technology, and cybercrime investigations, each bringing a specialized skill set to investigate the various aspects of financial fraud. Our banking experts have a deep understanding of how financial institutions operate, which allows them to track down the movement of funds across borders and identify hidden assets. Meanwhile, our technology experts use advanced forensic tools to trace digital transactions and uncover fraudulent activity within blockchain systems, online trading platforms, and other digital environments where scams often occur.' },
      { type: 'p',  text:'Our cybercrime specialists are crucial in cases where fraudulent activity crosses multiple jurisdictions and involves sophisticated techniques like hacking, identity theft, and phishing scams. They work alongside our legal team to ensure we have the most accurate information and evidence to present a solid case in court or during settlement negotiations. This multi-disciplinary approach allows us to conduct thorough investigations, uncover hidden assets, and take swift legal action to recover funds. '},
      { type: 'p',  text:'Our attorneys collaborate seamlessly with these experts to ensure that we’re taking a comprehensive and strategic approach to each case. We are committed to using every available tool and resource to investigate scams thoroughly, build stronger cases, and maximize the recovery of lost funds for our clients. When you choose our firm, you are placing your trust in a team of professionals who not only have the experience and legal knowledge necessary to navigate the complex world of financial litigation but also the dedication and passion to fight for your financial recovery and protect your best interests.'},
     { type: 'p',  text:'Our team’s expertise, coupled with our collaborative approach, enables us to handle even the most complex financial recovery cases with efficiency and precision. You can rest assured that we will leave no stone unturned in the pursuit of justice and that we will be there with you every step of the way, working tirelessly to recover your lost assets and bring those responsible for the fraud to justice.'},

    ],
  },
       section2: {
    label: 'Global Access',
    type: 'content',
    blocks: [
      { type: 'h1', text: 'Global Access and Network' },
      { type: 'p',  text: ' We are proud to serve clients worldwide, offering expert legal assistance to individuals who have been victims of online financial scams, regardless of their geographic location. Our firm specializes in cases involving binary options fraud, forex manipulation, cryptocurrency schemes, and fraudulent asset management services. Each case is approached with a deep understanding of the unique challenges these financial frauds present, and we tailor our legal strategies to meet the specific needs of each client.' },
      { type: 'p',  text: 'Our global reach is one of our firm’s strongest assets. We have developed a vast network of over 100 trusted associates, affiliates, and partners across multiple jurisdictions, allowing us to provide seamless and coordinated legal representation no matter where our clients are located. This extensive network ensures that our clients receive local expertise alongside the high-caliber legal strategies our firm is known for, which is particularly important in cross-border fraud cases where local laws and regulations can vary significantly.' },
      { type: 'p',  text: 'The nature of online financial scams often involves complex international networks that span multiple countries, and the perpetrators may operate across borders, making recovery and legal action more challenging. Our firm is equipped to handle such multi-jurisdictional cases with the sophistication they require. From the initial investigation, which includes tracing assets and identifying fraudulent transactions, to pursuing legal actions in the jurisdictions where the fraud took place, we ensure that every step is carried out with precision and thoroughness. Our legal team works closely with our global affiliates to gather evidence, perform due diligence, and build strong cases to present in both local and international courts.' },
      { type: 'p',  text:'We are well-versed in the legal procedures necessary for pursuing financial recovery in international cases, including the use of mutual legal assistance treaties (MLATs) and cross-border litigation strategies. In cases where perpetrators are located in jurisdictions with strong regulatory frameworks, we leverage the local legal systems to hold them accountable and recover funds on behalf of our clients. In more challenging cases, where perpetrators are harder to track down or operate in jurisdictions with limited cooperation, our firm draws on its network of experts in forensic accounting, cybercrime investigation, and financial analysis to uncover hidden assets and track illicit fund movements. '},
      { type: 'p',  text:'Our global access and network also enable us to navigate complex regulatory environments, allowing us to adapt to changes in laws and legal frameworks in various countries. We keep our clients informed throughout the process, explaining the legal options available and outlining the steps required to pursue a successful recovery.'},
     { type: 'p',  text:'The core of our firm’s mission is to protect our clients’ interests and recover their lost funds, no matter where the fraud originated. Our team’s global access ensures that we are always equipped to handle the legal complexities of financial fraud cases, whether they involve domestic or international fraud, asset recovery, or other complex financial matters. By combining local expertise, international legal knowledge, and investigative capabilities, we provide efficient, effective, and legally sound solutions for recovering funds and seeking justice on behalf of those who have been defrauded.'},
    { type: 'p',  text:'When you work with us, you are not only getting access to a team of experienced attorneys but also a comprehensive global network that is committed to providing the most effective legal strategies and financial recovery solutions. Our global network of affiliates and associates ensures that no matter where you are located, we can offer you swift, efficient, and legally robust solutions for your financial recovery needs. We are dedicated to helping victims of online scams recover what they’ve lost and pursue justice wherever they may be.'},

    ],
  },
         section3: {
    label: 'Ethics & Confidentiality',
    type: 'content',
    blocks: [
      { type: 'h1', text: 'Ethics & Confidentiality' },
      { type: 'p',  text: ' At our firm, confidentiality is not merely a practice—it’s an integral part of our core values that guides every action we take. We understand that the clients we serve, especially those who have fallen victim to online financial scams such as forex fraud, binary options schemes, cryptocurrency scams, and deceptive asset management practices, are entrusting us with highly sensitive personal and financial information. The nature of these cases demands the utmost discretion, and we recognize the gravity of the trust you place in us when you seek our legal assistance..' },
      { type: 'p',  text: 'To protect your sensitive data, we have implemented a comprehensive set of stringent internal policies, cutting-edge security systems, and advanced encryption technologies to safeguard your information. Our firm uses state-of-the-art secure servers and data storage solutions to ensure that your personal and financial details are shielded from unauthorized access at all times. All electronic communications and data transfers are encrypted to the highest standards, making it nearly impossible for unauthorized parties to intercept or breach your information. We also conduct regular security audits to ensure our systems are up-to-date and fortified against emerging threats.' },
      { type: 'p',  text: 'Confidentiality within our firm is held to the highest level. Only those attorneys and professionals directly working on your case will have access to your information. We take every measure to ensure that our team operates with complete discretion and that client information is restricted to those with a direct need to know. No employee or associate has access to any client’s confidential information unless they are actively involved in the case. This policy applies universally across all levels of our organization and is reinforced by clear confidentiality agreements and internal protocols that our entire team adheres to, ensuring that no one is privy to case details that do not require their involvement.' },
      { type: 'p',  text:'We understand that clients who have suffered financial losses due to scams often experience heightened stress, anxiety, and a sense of violation. Therefore, we go above and beyond to protect not only your financial information but also your peace of mind. The confidentiality of your case is paramount, and we treat it with the respect it deserves. Our firm has built a reputation for handling sensitive matters with the utmost integrity, and we continuously strive to provide an environment where clients feel safe and confident in sharing their information. '},
      { type: 'p',  text:'In addition to strict confidentiality practices, we uphold the highest ethical standards throughout the legal process. Our team of attorneys and professionals is committed to acting with transparency, integrity, and honesty at all times. We fully recognize the challenges our clients face when seeking financial recovery from fraudulent schemes, and we are dedicated to handling every case with professionalism and discretion. We make it a priority to keep you informed at every stage of the legal process, offering clear explanations and realistic expectations, while never compromising on our commitment to securing your best interests.'},
     { type: 'p',  text:'We also recognize that financial fraud recovery often requires navigating complex and sometimes sensitive issues. Whether it’s dealing with the emotions tied to financial loss or managing the intricacies of international fraud cases, we approach every case with compassion and respect. Our commitment to confidentiality and ethics ensures that you can rely on us to handle your case with the highest level of professionalism, allowing you to focus on what matters most—reclaiming your financial security and peace of mind.'},
    { type: 'p',  text:'When you work with us, you can be assured that your information is in safe hands. Our commitment to confidentiality and ethical conduct is unwavering, and we are dedicated to protecting both your financial interests and your privacy at every step of the legal process. You can trust that we will handle your case with the utmost care, discretion, and professionalism, while always acting in your best interests.'},

    ],
  }




};


const SidebarA = () => {
  const [activeSection, setActiveSection] = useState(Object.keys(sectionData)[0]);
  const [activeTab, setActiveTab] = useState(sectionData[activeSection].tabs?.[0]?.id || null);
  const section = sectionData[activeSection];
  const currentTab = section.tabs?.find(t => t.id === activeTab);


  const handleSectionClick = (key) => {
    setActiveSection(key);
    setActiveTab(sectionData[key].type === 'tabs' ? sectionData[key].tabs[0].id : null);
  };

//   const currentTabObj = section.tabs?.find(t => t.id === activeTab);
const isMobile = useMediaQuery({ maxWidth: 1368 });

   return (
    <div className="flex flex-col lg:flex-row gap-5 mt-25 sm:ml-90 sm:mr-90 ">
   
      {isMobile ? (
        // MOBILE VIEW
   <div className="flex flex-col w-full gap-5 p-4 block sm:hidden">
  {/* Sidebar */}
  <div className="bg-white shadow-lg p-4">
    {Object.entries(sectionData).map(([key, data]) => (
      <div
        key={key}
        className={`p-2 mb-2 cursor-pointer border-b border-transparent ${
          activeSection === key
            ? 'bg-[#ddd] border-blue-500'
            : 'hover:text-[#b79f7f] border-gray-300 pl-3 py-2 hover:border-gray-400'
        }`}
        onClick={() => handleSectionClick(key)}
      >
        {data.label}
      </div>
    ))}
  </div>

  {/* Contact Box */}
  <div className="bg-[#1a243f] p-4 text-white mt-6 rounded">
    <h1 className="text-lg font-serif mb-4 text-[25px]">
      LET'S GET A <br />
      <span className="text-[#AD9779]">FREE CONSULTATION</span>
    </h1>
    <p className="mb-4 text-[17.8px]">
      Please don’t hesitate to reach out. We'll respond within 1‑2 business days. Alternatively, feel free to call us now.
    </p>
    <div className="flex items-center mb-2 text-white">
      <MdLocalPhone className="text-[#AD9779] mr-2 text-[20px]" />
      +1 (307) 223‑040
    </div>
    <div className="flex items-center mb-2 text-white">
      <IoMailSharp className="text-[#AD9779] mr-2 text-[20px]" />
      support@aemilius-cupero.net
    </div>
    <div className="flex items-center text-white mt-2">
      <MdLocationOn className="text-[#AD9779] mr-2 text-[35px]" />
      1309 Coffeen Avenue STE 1200 Sheridan, Wyoming 82801 USA
    </div>
  </div>

  {/* Contact Button */}
  <div className="bg-[#AD9779] p-5 text-center cursor-pointer hover:bg-[#c7ae8a] mt-4 rounded">
    <p className="text-white text-[15px]">CONTACT US TODAY!</p>
  </div>

  {/* Content Section */}
  <div className="bg-gray-100 p-4 shadow-lg mt-6 rounded">
    {section.type === 'content' ? (
      section.blocks?.map((block, i) => {
        if (block.type === 'h1')
          return (
            <h1 key={i} className="text-2xl font-serif mb-2">
              {block.text}
            </h1>
          );
        if (block.type === 'h2')
          return (
            <h2 key={i} className="text-xl font-serif mb-2">
              {block.text}
            </h2>
          );
        return (
          <p key={i} className="mb-4">
            {block.text}
          </p>
        );
      })
    ) : (
      <>
        <div className="flex overflow-x-auto border-t mt-4 mb-4">
          {section.tabs.map((tab) => (
            <div
              key={tab.id}
              className={`px-3 py-1 cursor-pointer whitespace-nowrap ${
                activeTab === tab.id ? 'border-b-4 border-[#AD9779] font-semibold' : 'hover:text-[#AD9779]'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div>
          {currentTab?.blocks ? (
            currentTab.blocks.map((block, idx) => {
              switch (block.type) {
                case 'h1':
                  return (
                    <h1 key={idx} className="text-2xl font-serif mb-2">
                      {block.text}
                    </h1>
                  );
                case 'h2':
                  return (
                    <h2 key={idx} className="text-xl font-serif mb-2">
                      {block.text}
                    </h2>
                  );
                default:
                  return (
                    <p key={idx} className="mb-4">
                      {block.text}
                    </p>
                  );
              }
            })
          ) : currentTab?.faq ? (
            <FAQ items={currentTab.faq} />
          ) : (
            <>
              {currentTab?.h1 && <h1 className="text-2xl font-serif mb-2">{currentTab.h1}</h1>}
              {currentTab?.h2 && <h2 className="text-xl font-serif mb-2">{currentTab.h2}</h2>}
              {currentTab?.content && <p>{currentTab.content}</p>}
            </>
          )}
        </div>
      </>
    )}
  </div>
</div>


      ) : (
        // DESKTOP VIEW
        <>
          <div className="sm:flex flex-col w-full lg:w-[250px] gap-5  hidden sm:block mt-70 mb-20">
            <div className="bg-white p-4 shadow-lg h-70 w-100 pt-8 font-medium text-[18px]">
              {Object.entries(sectionData).map(([key, data]) => (
                <div
                  key={key}
                  className={`p-2 mb-2 cursor-pointer border-b border-transparent ${
                    activeSection === key
                      ? 'bg-[#ddd] border-blue-500'
                      : 'hover:text-[#b79f7f] border-gray-300 pl-3 py-2 hover:border-gray-400'
                  }`}
                  onClick={() => handleSectionClick(key)}
                >
                  {data.label}
                </div>
              ))}
            </div>

            <div>
              <div className="bg-[#1a243f] p-4 pb-15 pt-15 w-100 h-150 pr-10">
                <h1 className="text-lg text-white font-serif mb-10 text-[25px]">
                  LET'S GET A <br />
                  <span className="text-[#AD9779]">FREE CONSULTATION</span>
                </h1>
                <p className="text-white text-sm mb-14 text-[17.8px]">
                  Please don’t hesitate to reach out. We'll respond within 1‑2 business days. Alternatively, feel free to call us now.
                </p>
               <div className="flex items-center mb-10 text-white">
                <MdLocalPhone className="text-[#AD9779] mr-2 text-[20px]" />
                <a href="tel:+1307223040" className="hover:underline">
                  +1 (307) 223‑040
                </a>
              </div>
                         <div className="flex items-center mb-10 text-white">
                <IoMailSharp className="text-[#AD9779] mr-2 text-[20px]" />
                <a href="mailto:support@aemilius-cupero.net" className="hover:underline">
                  support@aemilius-cupero.net
                </a>
              </div>
                         <div className="flex items-center text-white mt-10">
                <MdLocationOn className="text-[#AD9779] mr-2 text-[35px]" />
                <a
                  href="https://www.google.com/maps/search/?q=1309+Coffeen+Avenue+STE+1200+Sheridan,+Wyoming+82801+USA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  1309 Coffeen Avenue STE 1200 Sheridan, Wyoming 82801 USA
                </a>
              </div>
              </div>
               <div className="bg-[#AD9779] p-5 text-center  cursor-pointer hover:bg-[#c7ae8a] w-100">
            <Link to="/contact">
           CONTACT US FOR MORE INFO
           </Link>
          </div>
            </div>
          </div>

          <div className="flex-1 bg-gray-100 p-6 shadow-lg h-fit ml-45 pt-10 mt-70 mb-20">
            {section.type === 'content' ? (
              <>
                {section.blocks?.map((block, i) => {
                  if (block.type === 'h1')
                    return (
                      <h1 key={i} className="text-2xl font-serif mb-2">
                        {block.text}
                      </h1>
                    );
                  if (block.type === 'h2')
                    return (
                      <h2 key={i} className="text-xl font-serif mb-2">
                        {block.text}
                      </h2>
                    );
                  return (
                    <p key={i} className="mb-4">
                      {block.text}
                    </p>
                  );
                })}
              </>
            ) : (
              <>
                <div className="flex border-t-1 mt-4 mb-10 ">
                  {section.tabs.map((tab) => (
                    <div
                      key={tab.id}
                      className={`px-4 py-2 cursor-pointer ml-15  ${
                        activeTab === tab.id ? 'border-t-5 border-[#AD9779]  font-semibold ' : 'hover:blue-500'
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </div>
                  ))}
                </div>
                <div>
                  {currentTab?.blocks ? (
                    currentTab.blocks.map((block, idx) => {
                      switch (block.type) {
                        case 'h1':
                          return (
                            <h1 key={idx} className="text-2xl font-serif mb-2">
                              {block.text}
                            </h1>
                          );
                        case 'h2':
                          return (
                            <h2 key={idx} className="text-xl font-serif mb-2">
                              {block.text}
                            </h2>
                          );
                        case 'p':
                        default:
                          return (
                            <p key={idx} className="mb-4">
                              {block.text}
                            </p>
                          );
                      }
                    })
                  ) : currentTab?.faq ? (
                    <FAQ items={currentTab.faq} />
                  ) : (
                    <>
                      {currentTab?.h1 && <h1 className="text-2xl font-serif mb-2 ">{currentTab.h1}</h1>}
                      {currentTab?.h2 && <h2 className="text-xl font-serif mb-2">{currentTab.h2}</h2>}
                      {currentTab?.content && <p>{currentTab.content}</p>}
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}


export default SidebarA;