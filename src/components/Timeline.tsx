import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug 2025 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Applied Scientist, Graduate Capstone</h3>
            <h4 className="vertical-timeline-element-subtitle">BNY Mellon · Remote</h4>
            <p>
              Building an AI-for-Compliance agent, creating synthetic datasets, and leading evaluation
              workflows to improve output consistency and guide model refinement.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2025 – Jun 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI/ML Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Cayu Technologies · San Francisco, CA</h4>
            <p>
              Designed agentic flows for call automation, fine-tuned LLMs for high-frequency use cases,
              and analyzed 800,000+ logistics calls to identify failure patterns and automation opportunities.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2024 – Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Engineer, Statistics</h3>
            <h4 className="vertical-timeline-element-subtitle">O! Mobile Operator · Bishkek, Kyrgyzstan</h4>
            <p>
              Engineered and maintained ETL pipelines processing over 2 billion telecom records, reduced
              latency by 35%, and built behavior-based features and clustering models for targeted campaigns.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2023 – Feb 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Associate, Data Analytics and AI</h3>
            <h4 className="vertical-timeline-element-subtitle">PwC · Almaty, Kazakhstan</h4>
            <p>
              Developed a geospatial optimization model for store placement, improved BigQuery dashboard
              performance, and led a team to build a Data Maturity Assessment framework for senior leaders.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2024 – May 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">M.S., Data Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Duke University · Durham, NC</h4>
            <p>
              MIDS Scholarship; GPA 3.8. Coursework in Machine Learning, NLP, Deep Learning, Statistical
              Modeling, Causal Inference, and Big Data Systems.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2019 – May 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">B.S., Information Systems</h3>
            <h4 className="vertical-timeline-element-subtitle">KIMEP University · Kazakhstan</h4>
            <p>
              Full Scholarship; GPA 4.3. Coursework in Statistics, Linear Algebra, Data Structures,
              Algorithms, and Business Strategy.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
