import React, { useState } from 'react';
import { MdLocalPhone, MdLocationOn } from 'react-icons/md';
import { IoMailSharp } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import Contactus from "./Contactus.jsx"

const sectionData = {
     section0: {
  label: 'Overview',
  type: 'content',
  blocks: [
    { type: 'custom', id: 'regulatory-warning' } // 👈 Custom block to render UI component
  ],
},
   section1: {
    label: 'VERIFY AUTHENTICITY',
    type: 'content',
    blocks: [
      { type: 'h1', text: 'Verify that it’s not a ‘clone firm.’' },
      { type: 'p',  text: 'A common scam involves fraudsters impersonating legitimate firms, often referred to as “clone firms.” These clone firms mimic the names and branding of genuine businesses, such as the Financial Conduct Authority (FCA), in an attempt to deceive individuals. To avoid falling victim to such scams, it is crucial that you always verify the firm’s contact details using the official information found on the Regulatory Register, rather than relying on the details provided by the clone firm itself. Additionally, you should cross-check the firm’s details with directory inquiries or the Company Registrar to ensure they match the official records.' },
    { type: 'p', text: 'One recent example involved a “clone firm” masquerading as the FCA, which operated for nearly two years and caused significant distress to its victims. This fraudulent entity used misleading terms like FEFCA, FIFFA, FCA, Financial Advice Commission, and the Financial Services Authority in its marketing materials, which could easily confuse potential investors. In its advertisements, the clone firm falsely claimed to offer expert financial advice on bonds and investments, presenting itself as the UK’s first financial regulator. The scam even involved leaving misleading voicemail messages, using the same terms to falsely assure clients that they were speaking with the FCA.' },
       { type: 'p', text: 'However, the genuine FCA makes it clear that it will never use these terms. The FCA only uses its full name, “Financial Conduct Authority,” on its official website and marketing materials. Tragically, many victims lost millions of pounds because they believed they were dealing with the real FCA. Instead, they were unknowingly conversing with an unlicensed, fraudulent organization that had no legal authority, leading them to fall into a financial trap.' },
],
  },    
   section2: {
    label: 'SEEK GUIDANCE',
    type: 'content',
    blocks: [
      { type: 'h1', text: 'Seek unbiased advice or a second opinion.' },
      { type: 'p',  text: 'Investing your hard-earned money is a significant decision that requires careful thought and consideration. It is essential to approach investment decisions with caution and avoid rushing into anything that could jeopardize your financial future. To ensure you’re making the best possible choices, it is highly advisable to seek independent advice before committing your funds to any investment. Getting a second opinion from a trusted adviser at a different firm can offer you a fresh perspective, helping you better understand the potential risks and rewards associated with any investment opportunity. This additional insight can help you make a more informed, confident decision that aligns with your financial goals and risk tolerance.' },
    { type: 'p', text: 'If you’ve already decided to consult an independent expert for advice, feel free to reach out to us. We are here to provide you with unbiased, professional guidance to help you navigate your investment decisions safely and successfully'},
    ],
  },    
   section3: {
    label: 'FLAG CONCERNS',
    type: 'content',
    blocks: [
      { type: 'h1', text: 'If you re suspicious, report it.' },
      { type: 'p',  text: 'If you ever find yourself suspicious of a financial transaction, it’s crucial not to delay. Immediately contact your bank to cancel the transaction and protect yourself from any potential risks. Provide your bank with all relevant details, including the transaction date, time, amount, and any other information that can help them take swift action. The more details you provide, the faster the bank can investigate and resolve the issue.' },
    { type: 'p', text: 'Additionally, if you need further assistance or guidance, don’t hesitate to reach out to us right away. We are here to support you and ensure that you take the necessary steps to safeguard your financial security. Your peace of mind is our priority, and we are always ready to assist.'},
    ],
  },    
   section4: {
    label: 'STEER CLEAR. STAY CAUTIOUS.',
    type: 'content',
    blocks: [
      { type: 'h1', text: 'Avoid the Suckers List' },
      { type: 'p',  text: 'If you’ve already fallen victim to a scam, be aware that fraudsters may target you again or sell your personal information to other criminals, often through what’s known as the “suckers list.” Scammers are becoming increasingly creative in their tactics, constantly finding new ways to deceive unsuspecting individuals. One common form of follow-up scam occurs when criminals attempt to trick victims with promises of refunds, buy-backs, or recovery of lost funds after the initial scam. These scams may appear in various forms, including false promises of refunds, fake investment opportunities, or requests for upfront payments to cover fees for non-existent services.' },
    { type: 'p', text: 'It’s essential to stay vigilant, as these follow-up scams can be just as financially damaging as the original fraud. Scammers may target individuals who have previously been scammed by sending unsolicited emails or messages on social media, offering them a way to recover their losses or introducing new investment schemes. Often, they will use the same manipulative tactics as before, making it even more difficult for victims to recognize the scam.'},
     { type: 'p', text: 'By remaining aware of these tactics and keeping an eye out for any offers that seem too good to be true, you can protect yourself from falling into another trap. Always take the time to verify the legitimacy of any new opportunities or promises, and don’t hesitate to seek advice from trusted professionals if you’re unsure.' },
],

  },    
 
};

const SidebarB = () => {
  const [activeSection, setActiveSection] = useState(Object.keys(sectionData)[0]);
  const section = sectionData[activeSection];

  const handleSectionClick = (key) => {
    setActiveSection(key);
  };

  const RegulatoryWarning = () => (
  <div className="mt-10">
    <div className="text-center mb-6">
      <h2 className="text-2xl font-serif text-[#0a1229] mb-2">Review the Regulatory Warning List.</h2>
      <a
        href="https://www.iosco.org/i-scan/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm uppercase tracking-widest text-[#b89f7a] hover:underline"
      >
        Click here to begin your search
      </a>
    </div>

    {/* 3 Steps */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-10 text-center mb-8">
      {[
        {
        step: 1,
        title: 'Access the Regulatory Warning List',
        icon: '📋',
        link: 'https://www.iosco.org/i-scan/',
      },
      {
        step: 2,
        title: 'Search for the Company Name',
        icon: '🔍',
        link: 'https://www.iosco.org/i-scan/',
      },
      {
        step: 3,
        title: 'Cross-Verify Company Details',
        icon: '✅',
        link: 'https://www.iosco.org/i-scan/',
      },
     ].map((item) => (
      <div key={item.step} className="flex items-center gap-3 group cursor-pointer">
        <span className="text-2xl">{item.icon}</span>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-gray-800 group-hover:text-[#b89f7a] hover:underline"
        >
          {item.step}. {item.title}
        </a>
      </div>
    ))}
  </div>

    {/* Paragraphs */}
    <div className="text-sm text-gray-700 leading-7 font-sans px-2">
      <p className="mb-4">
        From a legal perspective, utilizing the Regulatory Warning List is a crucial step in assessing the risks associated
        with a potential investment. This list helps identify firms that may be operating without the necessary regulatory
        authorization, which could signal potential legal and financial risks.
      </p>
      <p className="mb-4">
        However, the absence of a company on the list does not guarantee its trustworthiness, as scammers often change
        their business details to avoid detection. The alerts provided by IOSCO members highlight unauthorized firms, some
        of which may use names similar to authorized firms or falsely claim affiliations.
      </p>
      <p>
        These warnings are issued voluntarily and can offer critical insights into potential fraud, but they do not
        constitute a comprehensive list. It’s essential to conduct thorough research and consult official resources to
        ensure your investment is with a legitimate and properly authorized entity.
      </p>
    </div>
  </div>
);

 const isMobile = useMediaQuery({ maxWidth: 1368 });
  return (
   <>
  <div className="flex flex-col lg:flex-row gap-5 mt-40 px-6">
      {isMobile ? (
        // ✅ Mobile View
        <div className="flex flex-col w-full gap-5">
            
          {/* Sidebar */}
          <div className="bg-white shadow-lg p-4">
            {Object.entries(sectionData).map(([key, data]) => (
              <div
                key={key}
                className={`p-2 mb-2 cursor-pointer border-b ${
                  activeSection === key
                    ? 'bg-[#ddd] border-blue-500'
                    : 'hover:text-[#b79f7f] border-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setActiveSection(key)}
              >
                {data.label}
              </div>
            ))}
            <div className="bg-[#AD9779] p-5 text-center cursor-pointer hover:bg-[#c7ae8a] mt-4 rounded">
                   <a href="Contactus">CONTACT US TODAY!</a>
                  </div>
          </div>

          {/* Content */}
         <div className="bg-gray-100 p-4 shadow-lg mt-4 rounded">
        {section.blocks.map((block, i) => {
          if (block.type === 'h1')
            return <h1 key={i} className="text-2xl font-serif mb-2">{block.text}</h1>;
          if (block.type === 'h2')
            return <h2 key={i} className="text-xl font-serif mb-2">{block.text}</h2>;
          if (block.type === 'custom' && block.id === 'regulatory-warning')
            return <RegulatoryWarning key={i} />;
          return <p key={i} className="mb-4">{block.text}</p>;
        })}
      </div>
    </div>
      ) : (
        // ✅ Desktop View
        <>
          {/* Sidebar */}
          <div className="flex flex-col gap-5  gap-5 mt-25 ml-90 mr-80 ">
            <div className="bg-white w-[300px] p-4 shadow-lg">
              {Object.entries(sectionData).map(([key, data]) => (
                <div
                  key={key}
                  className={`p-2 mb-2 cursor-pointer border-b ${
                    activeSection === key
                      ? 'bg-[#ddd] border-[#AD9779]'
                      : 'hover:text-[#b79f7f] border-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setActiveSection(key)}
                >
                  {data.label}
                </div>
              ))}

              <div className="bg-[#AD9779] p-5 text-center cursor-pointer hover:bg-[#c7ae8a] mt-4 rounded">
                  <Link to="/contact">
                             CONTACT US FOR MORE INFO
                             </Link>
                  </div>
            </div>
          </div>
          

          {/* Content */}
          <div className="flex-1 bg-gray-100  p-6 shadow-lg h-[200px] ml-10 pt-10">
            <h3 className="text-xl font-serif mb-4"></h3>
        {section.blocks.map((block, i) => {
          if (block.type === 'h1')
            return <h1 key={i} className="text-2xl font-serif mb-2 mt-2">{block.text}</h1>;
          if (block.type === 'h2')
            return <h2 key={i} className="text-xl font-serif mb-2">{block.text}</h2>;
          if (block.type === 'custom' && block.id === 'regulatory-warning')
            return <RegulatoryWarning key={i} />;
          return <p key={i} className="mb-4">{block.text}</p>;
        })}

        
      </div>
      
        </>
      )}
    </div>
</>

  );
};

export default SidebarB;