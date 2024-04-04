import React from 'react';

import './MainLayout.scss'

import Blog1 from '../assets/onlineCrime.jpeg'
import Blog2 from '../assets/securityThreat.jpeg'
import Blog3 from '../assets/piracy.jpeg'
import Blog4 from '../assets/cyberBullying.jpeg'

const MainLayout = () => {
  return (
    <div className='Main-Layout'>
      <div className='Main-Layout-header'>
        <h1>Empower Your Decision-Making with Real-Time Insights</h1>
        <h2>Welcome to Online Reporting System</h2>
      </div>
      
      <div className='blog-container'>
        <div className='blog-image'>
          <img src={Blog1} alt="err" />
        </div>
        <div className='blog-comment'>
          <span>Online Crime: The Digital Age's Hidden Threat</span>
          <p>
            In today's interconnected world, cybercrime poses a growing menace. 
            From identity theft to phishing scams, perpetrators exploit vulnerabilities in our digital lives. 
            Protecting sensitive information and staying vigilant against online threats are paramount. 
            With the rise of e-commerce and digital transactions, safeguarding personal data is crucial. 
            As technology advances, so do the tactics of cybercriminals. 
            Awareness, education, and robust cybersecurity measures are essential defenses against this pervasive threat. 
            Let's unite to create a safer digital landscape for all.
            </p>
        </div>
      </div>
      <div className='blog-container' style={{alignSelf: 'flex-end'}}>        
        <div className='blog-comment'>
          <span>Protecting Your Digital World: Understanding Online Security Threats</span>
          <p>
            In today's digital age, online security threats loom large. 
            From phishing scams to malware attacks, the risks are real. 
            Cybercriminals are constantly evolving their tactics, making it essential for individuals and businesses alike to stay vigilant. 
            By understanding the various types of threats and implementing robust security measures such as strong passwords, 
            regular software updates, and reliable antivirus software, you can safeguard your digital assets and protect yourself against potential breaches. 
            Remember, proactive prevention is key to keeping your online world secure. Stay informed, stay safe.
          </p>
        </div>
        <div className='blog-image'>
          <img src={Blog2} alt="err" />
        </div>
      </div>
      <div className='blog-container' >
        <div className='blog-image'>
          <img src={Blog3} alt="err" />
        </div>
        <div className='blog-comment'>
          <span>Piracy: A Modern Plague</span>
          <p>
            In today's digital age, piracy remains a pressing issue. 
            With the ease of online sharing, copyrighted material is often unlawfully distributed, leading to financial losses for creators and industries. 
            Despite efforts to combat piracy through legal measures and technological advancements, it persists as a significant challenge. 
            The impact extends beyond economics, affecting artistic integrity and innovation. 
            As consumers, it's essential to recognize the ethical and legal implications of piracy and support creators by accessing content through legitimate channels. 
            Let's strive for a digital landscape that respects intellectual property rights and fosters creativity.
          </p>
        </div>
      </div>
      <div className='blog-container' style={{alignSelf: 'flex-end'}}>        
        <div className='blog-comment'>      
          <span>Combatting Cyberbullying: A Call to Action</span>
          <p>
            Cyberbullying, a pervasive issue in today's digital age, wreaks havoc on countless lives. 
            From hurtful comments to malicious rumors, its impact can be devastating. But we refuse to stand idly by. 
            By fostering empathy, promoting digital literacy, and creating safe online spaces, we can combat cyberbullying together. 
            Let's raise awareness, support victims, and hold perpetrators accountable. 
            Together, let's make the internet a safer and more inclusive place for all. 
            Join the movement against cyberbullying today.
          </p>    
        </div>
        <div className='blog-image'>
          <img src={Blog4} alt="err" />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
